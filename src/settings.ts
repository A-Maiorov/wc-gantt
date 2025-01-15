export type TimeScaleMode =
  | "week"
  | "day"
  | "month"
  | "quarter"
  | "year"
  | "auto";
export class WcGanttSettings {
  disableSF = false;
  timeScaleMode: TimeScaleMode = "week";
  sortActivities: "default" | "start" | "finish";
  showDependencies: boolean = true;
  showLabels: boolean = true;

  showCriticalPath: boolean = true;
  startDate: Date = new Date(new Date().setHours(0, 0, 0, 0));
  dataDate: Date = new Date(new Date().setHours(0, 0, 0, 0));
  baselineDate: Date = new Date(new Date().setHours(0, 0, 0, 0));

  enableChartInteractions = true;

  defaultActivityDurationWorkingDays = 14;
}

export interface CompiledSettings extends WcGanttSettings {
  labelsWidth: number;
  width: number;
  height: number;
  scaleHeight: number; // default: 60,
  rowHeight: number; // default: 40,
  barHeight: number; // default: 16,
  lineWidth: number; // default: 1
}
