import dayjs, { type Dayjs } from "dayjs";
import { findLongestPath } from "./criticalPath";
export type ItemType = "activity" | "group" | "milestone" | "buffer";
export interface IDependency {
  predecessor: string;
  successor: string;
  type: DependencyType;
  lag: number;
}

export interface ICalendar {
  id: string;
  name: string;
  weekDays: [boolean, boolean, boolean, boolean, boolean, boolean, boolean];
  freeDays: { start: number; end: number }[];
}

export type DependencyType = "FS" | "FF" | "SS" | "SF";
export interface IItem {
  id: string;
  name: string;
  duration: number;
  type?: ItemType;
  progressDays?: number;
  dataDate?: Date;
  defaultStartDate?: Date;
  nested?: IItem[];
  color?: string;
  calendar?: ICalendar;
}

export class Item implements IItem {
  constructor(private s: Schedule) {}

  public color?: string;
  public nested: Item[] = [];
  public id: string = crypto.randomUUID();
  public name: string = this.id;

  public calendar: ICalendar = {
    name: "default",
    id: "default",
    weekDays: [true, true, true, true, true, true, true],
    freeDays: [],
  };

  public progressDays: number = 0;
  public type: ItemType = "activity";

  public get dataDate() {
    return new Date(
      new Date(
        Math.max(this.s.dataDate?.getTime() ?? this.s.startDate.getTime())
      ).setHours(0, 0, 0, 0)
    );
  }

  private _durationWorkingDays: number = 14;

  public get durationWorkingDays() {
    if (this.type === "milestone") return 0;
    if (this.type !== "group") return this._durationWorkingDays;

    if (this.nested.length === 0) return 0;

    const startTimes: number[] = [];
    const endTimes: number[] = [];
    for (const i of this.nested) {
      startTimes.push(i.earlyStart.getTime());
      endTimes.push(i.earlyFinish.getTime());
    }

    const minStart = Math.max(...startTimes);
    const maxEnd = Math.max(...endTimes);

    return this.getWorkingDaysBetweenDates(new Date(minStart), new Date(maxEnd))
      .length;
  }

  public get duration() {
    if (this.type === "milestone") return 0;
    if (this.type !== "group")
      return dayjs(this.earlyFinish).diff(this.earlyStart, "days");

    if (this.nested.length === 0) return 0;

    const startTimes: number[] = [];
    const endTimes: number[] = [];
    for (const i of this.nested) {
      startTimes.push(i.earlyStart.getTime());
      endTimes.push(i.earlyFinish.getTime());
    }

    const minStart = Math.min(...startTimes);
    const maxEnd = Math.max(...endTimes);

    return dayjs(maxEnd).diff(minStart, "days");
  }

  // public set duration(workingDays: number) {
  //   if (this.type !== "group" && this.type !== "milestone")
  //     this._durationWorkingDays = workingDays;
  // }
  public setWorkingDaysDuration(workingDays: number) {
    if (this.type !== "group" && this.type !== "milestone")
      this._durationWorkingDays = workingDays;
  }

  crit: boolean = false;

  get lateStart(): Date {
    return this.earlyStart;
  }
  get lateFinish(): Date {
    return this.earlyFinish;
  }

  private addDays(d: Date, days: number): Date {
    let daysAdded = 0;

    const sign = Math.sign(days);

    d.setHours(0, 0, 0, 0);
    let date = dayjs(d);
    const inc = 1 * sign;
    const absDays = Math.abs(days);

    while (daysAdded < absDays) {
      date = date.add(inc, "days");
      const isFree = this.isFreeDay(date);
      if (!isFree) daysAdded++;
    }
    return date.toDate();
  }
  private isFreeDay(d: Date | Dayjs): boolean {
    let date = dayjs(d);
    return (
      this.calendar.weekDays[date.day()] === false ||
      this.calendar.freeDays.some((fd) => {
        return (
          date.isAfter(dayjs(fd.start).subtract(1, "day"), "date") &&
          date.isBefore(dayjs(fd.end).add(1, "day"), "date")
        );
      })
    );
  }

  private getFirstWorkingDay(d: Date): Date {
    let date = dayjs(d);
    let isFree = this.isFreeDay(date);

    while (isFree) {
      date = date.add(1, "day");
    }

    return date.toDate();
  }

  private __getEarlyStartBasedOnDependency(d: IDependency) {
    // this === successor
    const pred = this.s.itemsIndex.get(d.predecessor);
    if (!pred) return this.defaultStartDate;

    switch (d.type) {
      case "FS":
        return new Date(this.addDays(pred.earlyFinish, d.lag + 1));
      case "FF": {
        const diff = d.lag - this.durationWorkingDays;

        const calculatedDate = this.addDays(
          pred.earlyFinish,
          diff + 1
        ).getTime();
        // const calculatedDate = dayjs( pred.earlyFinish)
        //   .add(d.lag, "days")
        //   .subtract(this.duration, "days")
        //   .toDate()
        //   .getTime();

        return new Date(
          Math.max(this.defaultStartDate.getTime(), calculatedDate)
        );
      }
      case "SS":
        return this.addDays(pred.earlyStart, d.lag);
      case "SF": {
        const diff = (d.lag + this.durationWorkingDays) * -1;
        return this.addDays(pred.earlyStart, diff);
        // return dayjs(pred.earlyStart)
        //   .subtract(d.lag, "days")
        //   .subtract(this.duration, "days")
        //   .toDate();
      }
    }
  }

  public get isStarted() {
    return this.progressDays > 0;
  }
  public get defaultStartDate() {
    return this.getFirstWorkingDay(this.s.startDate);
  }

  private __getEarlyStartBasedOnSFDependency(d: IDependency) {
    // this === predecessor
    const suc = this.s.itemsIndex.get(d.successor);
    return this.addDays(suc.earlyFinish, d.lag);
  }

  get delayDays(): number {
    const today = new Date().setHours(0, 0, 0, 0);
    const startsInFuture = this.earlyStart >= new Date(today);
    if (startsInFuture) return 0;

    const expectedProgressDate = Math.min(today, this.earlyFinish.getTime());

    //how many days between today and finish?
    //how many days excluding free days?

    const expectedProgressDays = this.getWorkingDaysBetweenDates(
      this.earlyStart,
      new Date(expectedProgressDate)
    ).length;
    //  dayjs(expectedProgressDate).diff(
    //   this.earlyStart,
    //   "days"
    // );

    if (this.progressDays < expectedProgressDays) {
      return expectedProgressDays - this.progressDays;
    }
    return 0;
  }
  private getWorkingDaysBetweenDates(start: Date, end: Date) {
    const s = dayjs(start);
    const e = dayjs(end);
    let c = s;
    const res: Date[] = [];
    while (c.isBefore(e)) {
      c = c.add(1, "day");
      res.push(c.toDate());
    }

    return res;
  }

  get earlyStart(): Date {
    if (this.type === "group") {
      return new Date(
        Math.min(...this.nested.map((x) => x.earlyStart.getTime()))
      );
    }

    const predDeps = (this.s.dependencies ?? []).filter(
      (x) => x.successor === this.id && x.type !== "SF"
    );

    const succeedingDep = (this.s.dependencies ?? []).filter(
      (x) => x.predecessor === this.id && x.type === "SF"
    );

    if (predDeps.length === 0 && succeedingDep.length === 0)
      return this.defaultStartDate;

    const earlyStarts = predDeps.map((pd) =>
      this.__getEarlyStartBasedOnDependency(pd).getTime()
    );

    const sfEarlyStarts = succeedingDep.map((sd) =>
      this.__getEarlyStartBasedOnSFDependency(sd).getTime()
    );
    earlyStarts.push(...sfEarlyStarts);

    return this.getFirstWorkingDay(new Date(Math.max(...earlyStarts)));
  }
  get earlyFinish(): Date {
    if (this.type === "group") {
      return new Date(
        Math.max(...this.nested.map((x) => x.earlyFinish.getTime()))
      );
    }

    if (this.type === "milestone") return this.earlyStart;

    const res = this.addDays(this.earlyStart, this._durationWorkingDays - 1); // -1 in order to include earlyStart day
    res.setHours(23, 59, 59, 999);
    return res;
  }
}

export class Schedule {
  startDate: Date = new Date();
  dataDate: Date = new Date();
  itemsIndex: Map<string, Item>;
  items: Item[];
  dependencies: IDependency[];

  constructor(
    startDate: Date,
    dataDate: Date,
    items: IItem[],
    dependencies: IDependency[]
  ) {
    this.startDate = new Date(startDate.setHours(0, 0, 0, 0));
    this.dataDate = new Date(dataDate.setHours(0, 0, 0, 0));

    this.itemsIndex = new Map<string, Item>();

    this.items = this._flattenItems(items);
    this.items.forEach((x) => {
      this.itemsIndex.set(x.id, x);
    });

    this.dependencies = dependencies.filter(
      (x) =>
        this.itemsIndex.has(x.predecessor) && this.itemsIndex.has(x.successor)
    );
  }

  get endDate() {
    return new Date(
      Math.max(...this.items.map((x) => x.earlyFinish.getTime()))
    );
  }

  get durationDays() {
    return dayjs(this.endDate).diff(this.startDate, "days");
  }

  private readonly __nonGroups = [
    "activity",
    "buffer",
    "milestone",
  ] as ItemType[];

  private _flattenItems(items: IItem[]): Item[] {
    const flatArray: Item[] = [];

    for (const item of items) {
      const i = new Item(this);

      i.id = item.id;
      i.name = item.name;
      flatArray.push(i);

      if (
        item.type === "group" ||
        (item.nested &&
          Array.isArray(item.nested) &&
          !this.__nonGroups.includes(item.type))
      ) {
        i.nested = [];
        i.type = "group";
        i.color = item.color;
        i.nested = this._flattenItems(item.nested ?? []);
        flatArray.push(...i.nested);
      } else {
        i.setWorkingDaysDuration(
          item.duration != undefined && item.duration > 0
            ? item.duration
            : i.duration
        );

        i.progressDays = item.progressDays ?? 0;
        i.type = this.__nonGroups.includes(item.type) ? item.type : "activity";
      }
    }

    return flatArray;
  }

  updateCriticalPath() {
    const nonGroups = this.items.filter((x) => x.type !== "group");
    const minItems = nonGroups.filter(
      (x) =>
        x.earlyStart.getTime() ===
        Math.min(...nonGroups.map((r) => r.earlyStart.getTime()))
    );
    const maxItems = nonGroups.filter(
      (x) =>
        x.earlyFinish.getTime() ===
        Math.max(...nonGroups.map((r) => r.earlyFinish.getTime()))
    );
    const critItems: string[] = [];
    for (const x of minItems) {
      const lp = findLongestPath(x.id, this);
      if (maxItems.map((x) => x.id).includes(lp.path[lp.path.length - 1]))
        critItems.push(...lp.path);
      // for (const lpItem of lp.path) {
      //   this.settings.data.find((x) => x.id === lpItem).crit = true;
    }
    for (const i of this.items) {
      i.crit = critItems.includes(i.id);
    }
  }
}
