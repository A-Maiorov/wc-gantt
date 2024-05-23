import type { TimeScaleMode } from "./settings";

const msPerDay = 86400000;

export class TimeScale {
  start: Date;
  widthPx: number;
  startMs: number;
  pxPerWeek: number;
  pxPerDay: number;
  msPerPx: number;
  end: Date;
  totalDays: number;
  endMs: number;
  viewMode: string;
  constructor(start: Date, end: Date, viewMode: TimeScaleMode) {
    this.viewMode = viewMode;
    const startDay = new Date(start);
    startDay.setHours(0, 0, 0, 0);
    const endDay = new Date(end);
    endDay.setHours(0, 0, 0, 0);

    this.start = startDay;
    this.end = endDay;
    this.startMs = startDay.getTime();
    this.endMs = endDay.getTime();
    this.totalDays = Math.round(
      Math.abs((this.startMs - endDay.getTime()) / msPerDay)
    );

    const viewModeMultiplier: Record<TimeScaleMode, number> = {
      month: 3,
      week: 4,
      day: 5,
    };
    let pxPerDay = 5;
    if (this.totalDays > 365) {
      pxPerDay = 1 * viewModeMultiplier[viewMode];
    } else if (this.totalDays > 155) {
      pxPerDay = 4 * viewModeMultiplier[viewMode];
    } else if (this.totalDays > 30) {
      pxPerDay = 6 * viewModeMultiplier[viewMode];
    }

    this.pxPerDay = pxPerDay;
    this.pxPerWeek = pxPerDay * 7;
    this.msPerPx = msPerDay / pxPerDay;
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
