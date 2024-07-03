import type { TimeScaleMode } from "./settings";

const msPerDay = 86400000;
const viewModeMultiplier: Record<TimeScaleMode, number> = {
  auto: 0,
  year: 30,
  quarter: 20,
  month: 4,
  week: 2,
  day: 1,
};
export class TimeScale {
  private _start: Date;
  get start() {
    return this._start;
  }
  set start(v: Date) {
    this._start = new Date(v.setHours(0, 0, 0, 0));
  }

  get startMs() {
    return this.start.getTime();
  }
  get pxPerWeek() {
    return this.pxPerDay * 7;
  }

  get pxPerDay() {
    if (this.viewMode === "auto") {
      return this.viewPortWidth / this.totalDays;
    }

    let pxPerDay = 30;
    return Math.round(pxPerDay / viewModeMultiplier[this.viewMode]);
  }

  get msPerPx() {
    return msPerDay / this.pxPerDay;
  }
  private _end: Date;
  get end() {
    return this._end;
  }
  set end(v: Date) {
    this._end = new Date(v.setHours(0, 0, 0, 0));
  }
  get totalDays() {
    return Math.round(Math.abs((this.startMs - this.endMs) / msPerDay));
  }
  get endMs() {
    return this.end.getTime();
  }
  public viewMode: TimeScaleMode;
  constructor(
    start: Date,
    end: Date,
    viewMode: TimeScaleMode,
    private viewPortWidth: number
  ) {
    this.viewMode = viewMode;

    this.start = start;
    this.end = end;
  }

  private pxToMs(px: number) {
    return px * this.msPerPx;
  }
  private msToPx(ms: number) {
    return ms / this.msPerPx;
  }

  dateToPx(date: Date) {
    const span = date.getTime() - this.startMs;
    return this.msToPx(span);
  }

  pxToDate(px: number) {
    const ms = this.pxToMs(px);
    return new Date(this.startMs + ms);
  }

  pxForTimeSpan(start: Date, end: Date) {
    const span = end.getTime() - start.getTime();
    return this.msToPx(span);
  }
}
