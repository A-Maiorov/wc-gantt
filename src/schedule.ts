import dayjs from "dayjs";
import { findLongestPath } from "./criticalPath";
export type ItemType = "activity" | "group" | "milestone" | "buffer";
export interface IDependency {
  predecessor: string;
  successor: string;
  type: DependencyType;
  lag: number;
}

export type DependencyType = "FS" | "FF" | "SS" | "SF";
export interface IItem {
  id: string;
  name: string;
  duration: number;
  type?: ItemType;
  progressDays?: number;
  dataDate?: Date;
  nested?: IItem[];
}

export class Item implements IItem {
  constructor(private s: Schedule) {}

  public nested: Item[] = [];
  public id: string = crypto.randomUUID();
  public name: string = this.id;

  public progressDays: number = 0;
  public type: ItemType = "activity";

  private _dataDate: Date | undefined;
  get dataDate() {
    return new Date(
      this._dataDate ??
        new Date(
          Math.max(this.s.dataDate?.getTime() ?? this.s.startDate.getTime())
        ).setHours(0, 0, 0, 0)
    );
  }
  set dataDate(v: Date) {
    if (v) this._dataDate = new Date(v.setHours(0, 0, 0, 0));
  }
  private _duration: number = 14;
  public get duration() {
    if (this.type === "milestone") return 0;
    if (this.type !== "group") return this._duration;

    if (this.nested.length === 0) return 1;

    const startTimes: number[] = [];
    const endTimes: number[] = [];
    for (const i of this.nested) {
      startTimes.push(i.earlyStart.getTime());
      endTimes.push(i.earlyFinish.getTime());
    }

    const minStart = Math.max(...startTimes);
    const maxEnd = Math.max(...endTimes);

    return dayjs(maxEnd).diff(minStart, "days");
  }

  public set duration(v: number) {
    if (this.type !== "group" && this.type !== "milestone") this._duration = v;
  }

  crit: boolean = false;

  get lateStart(): Date {
    return this.earlyStart;
  }
  get lateFinish(): Date {
    return this.earlyFinish;
  }

  private __getEarlyStartBasedOnDependency(d: IDependency) {
    // this === successor
    const pred = this.s.itemsIndex.get(d.predecessor);
    if (!pred) return this.defaultStartDate;

    switch (d.type) {
      case "FS":
        return dayjs(pred.earlyFinish).add(d.lag, "days").toDate();
      case "FF": {
        const calculatedDate = dayjs(pred.earlyFinish)
          .add(d.lag, "days")
          .subtract(this.duration, "days")
          .toDate()
          .getTime();

        return new Date(
          Math.max(this.defaultStartDate.getTime(), calculatedDate)
        );
      }
      case "SS":
        return dayjs(pred.earlyStart).add(d.lag, "days").toDate();
      case "SF":
        return dayjs(pred.earlyStart)
          .subtract(d.lag, "days")
          .subtract(this.duration, "days")
          .toDate();
    }
  }

  public get isStarted() {
    return this.progressDays > 0;
  }

  private get defaultStartDate() {
    if (!this.isStarted) return this.dataDate;
    return dayjs(this.dataDate).subtract(this.progressDays, "days").toDate();
  }

  private __getEarlyStartBasedOnSFDependency(d: IDependency) {
    // this === predecessor
    const suc = this.s.itemsIndex.get(d.successor);
    return dayjs(suc.earlyFinish).add(d.lag, "days").toDate();
  }

  get earlyStart(): Date {
    if (this.type === "group") {
      return new Date(
        Math.min(...this.nested.map((x) => x.earlyStart.getTime()))
      );
    }

    const predDeps = this.s.dependencies.filter(
      (x) => x.successor === this.id && x.type !== "SF"
    );

    const succeedingDep = this.s.dependencies.filter(
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

    return new Date(Math.max(...earlyStarts));
  }
  get earlyFinish(): Date {
    if (this.type === "group") {
      return new Date(
        Math.max(...this.nested.map((x) => x.earlyFinish.getTime()))
      );
    }

    if (this.type === "milestone") return this.earlyStart;

    return dayjs(this.earlyStart).add(this.duration, "days").toDate();
  }
}

export class Schedule {
  dataDate: Date = new Date();
  itemsIndex: Map<string, Item>;
  items: Item[];
  dependencies: IDependency[];

  constructor(dataDate: Date, items: IItem[], dependencies: IDependency[]) {
    this.dataDate = new Date(dataDate.setHours(0, 0, 0, 0));

    this.itemsIndex = new Map<string, Item>();

    this.items = this._flattenItems(items);
    this.items.forEach((x) => {
      this.itemsIndex.set(x.id, x);
    });

    this.dependencies = dependencies;
  }

  get startDate() {
    return new Date(Math.min(...this.items.map((x) => x.earlyStart.getTime())));
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
        i.nested = this._flattenItems(item.nested ?? []);
        flatArray.push(...i.nested);
      } else {
        i.dataDate = item.dataDate;
        i.duration =
          item.duration != undefined && item.duration > 0
            ? item.duration
            : i.duration;

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
