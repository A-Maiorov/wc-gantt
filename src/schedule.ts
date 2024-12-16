import dayjs from "dayjs";
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
  freeDays: {
    start: number;
    end: number;
    nextWorkingDay?: number;
    previousWorkingDay?: number;
  }[];
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
  hidden?: boolean;
}

export class Item implements IItem {
  constructor(private s: Schedule) {}

  private _execOrder = -1;

  public set execOrder(v: number) {
    this._execOrder = this.type === "group" ? Number.MAX_VALUE : v;
  }

  public get execOrder() {
    return this.type === "group" ? Number.MAX_VALUE : this._execOrder;
  }

  public hidden?: boolean;
  public color?: string;
  public nested: Item[] = [];
  public id: string = crypto.randomUUID();
  public name: string = this.id;

  public _calendar: ICalendar = {
    name: "default",
    id: "default",
    weekDays: [true, true, true, true, true, true, true],
    freeDays: [],
  };

  get calendar() {
    return this._calendar;
  }

  set calendar(c: ICalendar | undefined) {
    if (!c) {
      this._calendar = {
        name: "default",
        id: "default",
        weekDays: [true, true, true, true, true, true, true],
        freeDays: [],
      };
      return;
    }

    if (c.weekDays.every((x) => x === false))
      throw Error(
        "Invalid calendar: should have at least 1 working day of week"
      );

    this._calendar = structuredClone(c);

    for (const fd of this._calendar.freeDays) {
      fd.start = new Date(fd.start).setHours(0, 0, 0, 0);
      fd.end = new Date(fd.end).setHours(23, 59, 59, 999);

      fd.nextWorkingDay = dayjs(fd.end)
        .add(1, "day")
        .toDate()
        .setHours(0, 0, 0, 0);

      fd.previousWorkingDay = dayjs(fd.start)
        .subtract(1, "day")
        .toDate()
        .setHours(0, 0, 0, 0);
    }
  }

  public progressDays: number = 0;

  public type: ItemType = "activity";

  public get dataDate() {
    return new Date(
      new Date(
        Math.max(this.s.dataDate?.getTime() ?? this.s.startDate.getTime())
      ).setHours(0, 0, 0, 0)
    );
  }

  private _durationWorkingDays: number = this.s.defaultActivityDurationDays;

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

  public addWorkingDays(startDate: number, days: number): Date {
    const d = new Date(startDate);

    const sign = Math.sign(days) as 1 | -1;

    d.setHours(0, 0, 0, 0);
    let date = d;

    const absDays = Math.abs(days);

    for (let daysAdded = 0; daysAdded < absDays; daysAdded++) {
      date = new Date(this.getNextWorkingDay(date, sign));
    }

    return date;
  }

  private getWorkingDay(d: number) {
    const date = new Date(d);
    date.setHours(0, 0, 0, 0);
    if (this.isWorkingDay(date)) return date;
    else return this.getNextWorkingDay(date);
  }

  public getNextWorkingDay(d: Date, direction: -1 | 1 = 1) {
    const currentDate = new Date(d);

    currentDate.setDate(currentDate.getDate() + direction);
    while (!this.isWorkingDay(currentDate)) {
      currentDate.setDate(currentDate.getDate() + direction);
    }
    return currentDate;
  }

  isWorkingDay(d: Date) {
    let isFreeDay = false;
    for (const fd of this.calendar.freeDays) {
      const dMs = d.getTime();
      if (dMs >= fd.start && dMs <= fd.end) {
        isFreeDay = true;
        break;
      }
    }

    let isFreeWeekday = this.calendar.weekDays[d.getDay()] === false;
    return !isFreeDay && !isFreeWeekday;
  }

  private __getEarlyStartBasedOnDependency(d: IDependency) {
    const pred = this.s.itemsIndex.get(d.predecessor);

    if (!pred) return this.defaultStartDate;
    const addDays = pred.type === "milestone" ? 0 : 1;

    let out: Date | undefined;
    switch (d.type) {
      case "FS": {
        out = new Date(
          this.addWorkingDays(pred.earlyFinish.getTime(), d.lag + addDays)
        );
        break;
      }
      case "FF": {
        const diff = d.lag - this.durationWorkingDays;

        const calculatedDate = this.addWorkingDays(
          pred.earlyFinish.getTime(),
          diff + addDays
        ).getTime();

        out = new Date(
          Math.max(this.defaultStartDate.getTime(), calculatedDate)
        );
        break;
      }
      case "SS":
        out = this.addWorkingDays(pred.earlyStart.getTime(), d.lag);
        break;
      case "SF": {
        const diff = (d.lag + this.durationWorkingDays) * -1;
        out = this.addWorkingDays(pred.earlyStart.getTime(), diff);
        break;
      }
    }

    return out;
  }

  public get isStarted() {
    return this.progressDays > 0;
  }

  public set defaultStartDate(value: Date | undefined) {
    const invalidValue =
      value == undefined ||
      value.getTime == undefined ||
      isNaN(value.getTime());
    this._defaultStartDate = !invalidValue
      ? this.getWorkingDay(value.getTime()).setHours(0, 0, 0, 0)
      : this.getWorkingDay(this.s.startDate.getTime()).setHours(0, 0, 0, 0);
  }
  private _defaultStartDate?: number;
  public get defaultStartDate() {
    if (this._defaultStartDate == undefined) {
      this._defaultStartDate = new Date(
        this.getWorkingDay(this.s.startDate.getTime())
      ).getTime();
    }
    return new Date(this._defaultStartDate);
  }

  private __getEarlyStartBasedOnSFDependency(d: IDependency) {
    // this === predecessor
    const suc = this.s.itemsIndex.get(d.successor);
    return this.addWorkingDays(suc.earlyFinish.getTime(), d.lag);
  }

  get delayDays(): number {
    const today = new Date().setHours(0, 0, 0, 0);
    const startsInFuture = this.earlyStart >= new Date(today);
    const isFinished = this.durationWorkingDays === this.progressDays;
    if (startsInFuture || isFinished) return 0;

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

  private _earlyStart: Date | undefined = undefined;

  private _calcEarlyStart() {
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

    if (predDeps.length === 0 && succeedingDep.length === 0) {
      return this.defaultStartDate;
    }
    const earlyStarts = predDeps.map((pd) =>
      this.__getEarlyStartBasedOnDependency(pd).getTime()
    );

    const sfEarlyStarts = succeedingDep.map((sd) =>
      this.__getEarlyStartBasedOnSFDependency(sd).getTime()
    );
    earlyStarts.push(...sfEarlyStarts);

    const res = this.getWorkingDay(Math.max(...earlyStarts));

    return new Date(res);
  }
  public refreshStartEnd() {
    this._earlyStart = this._calcEarlyStart();
    this._earlyFinish = this._calcEarlyFinish();
  }

  public getProgressDate() {
    const out = this.addWorkingDays(
      this.earlyStart.getTime(),
      Math.min(this.progressDays, this.durationWorkingDays) - 1 // -1 in order to include earlyStart day
    );
    out.setHours(23, 59, 59, 999);
    return out;
  }

  get earlyStart(): Date {
    if (!this._earlyStart) {
      this._earlyStart = this._calcEarlyStart();
    }
    return this._earlyStart;
  }

  private _earlyFinish: Date | undefined;

  private _calcEarlyFinish() {
    if (this.type === "group") {
      this._earlyFinish = new Date(
        Math.max(...this.nested.map((x) => x.earlyFinish.getTime()))
      );
      return this._earlyFinish;
    }

    if (this.type === "milestone") {
      this._earlyFinish = this.earlyStart;
      return this._earlyFinish;
    }

    const res = this.addWorkingDays(
      this.earlyStart.getTime(),
      this._durationWorkingDays - 1
    ); // -1 in order to include earlyStart day
    res.setHours(23, 59, 59, 999);
    this._earlyFinish = res;
    return this._earlyFinish;
  }

  get earlyFinish(): Date {
    if (!this._earlyFinish) {
      this._earlyFinish = this._calcEarlyFinish();
    }
    return this._earlyFinish;
  }
}

export class Schedule {
  startDate: Date = new Date();
  dataDate: Date = new Date();
  itemsIndex: Map<string, Item>;
  items: Item[] = [];
  dependencies: IDependency[] = [];

  constructor(
    startDate: Date,
    dataDate: Date,
    items: IItem[],
    dependencies: IDependency[],
    public defaultActivityDurationDays = 14
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

    this.items.forEach((x) => {
      this.itemsIndex.set(x.id, x);
      x.execOrder = this.getExecutionOrder(x);
    });

    for (const i of [...this.items].sort((a, b) => a.execOrder - b.execOrder)) {
      i.refreshStartEnd();
    }
  }

  get endDate() {
    const ef = this.items.map((x) => x.earlyFinish.getTime());

    return new Date(Math.max(...ef));
  }

  get durationDays() {
    return dayjs(this.endDate).diff(this.startDate, "days");
  }

  private readonly __nonGroups = [
    "activity",
    "buffer",
    "milestone",
  ] as ItemType[];

  private getExecutionOrder(i: Item) {
    let deps = this.dependencies.filter((x) => x.successor === i.id);

    const orders: number[] = [];
    for (const endDep of deps) {
      let dep = endDep;
      const successors = new Set();
      while (dep != undefined && successors.has(dep.predecessor)) {
        successors.add(dep.successor);
        dep = this.dependencies.find((x) => x.successor === dep.predecessor);
      }

      orders.push(successors.size);
    }
    return Math.max(...orders);
  }

  private _flattenItems(items: IItem[]): Item[] {
    const flatArray: Item[] = [];

    for (const item of items) {
      const i = new Item(this);

      i.hidden = item.hidden;
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
        if (item.calendar) i.calendar = item.calendar;
        if (item.defaultStartDate != undefined)
          i.defaultStartDate = item.defaultStartDate;

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
