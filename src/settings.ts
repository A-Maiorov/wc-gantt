export type TimeScaleMode = "week" | "day" | "month";
export class WcGanttSettings {
  disableSF = false;
  timeScaleMode: TimeScaleMode = "week";
  showDependencies: boolean = true;
  showLabels: boolean = true;
  // showDelay: boolean = true;
  showCriticalPath: boolean = true;
  startDate: Date = new Date(new Date().setHours(0, 0, 0, 0));
  dataDate: Date = new Date(new Date().setHours(0, 0, 0, 0));
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
