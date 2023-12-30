import { DAY } from "../utils";
import { Layout } from "./Layout";
import { DayHeader, DayHeaderOptions } from "./DayHeader";
import { WeekHeader, WeekHeaderOptions } from "./WeekHeader";
import { MonthHeader, MonthHeaderOptions } from "./MonthHeader";
import { Grid } from "./Grid";
import { Labels } from "./Labels";
import { LinkLine } from "./LinkLine";
import { Bar } from "./Bar";
import { svg } from "lit";
import { Item } from "../types";

const UNIT = {
  day: DAY / 28,
  week: (7 * DAY) / 56,
  month: (30 * DAY) / 56,
};
function NOOP() {}
export type GanttViewMode = "week" | "day" | "month";
export type GanttOptions = {
  data: Item[];
  onClick?: (i: Item) => void;
  viewMode: GanttViewMode;
  maxTextWidth?: number;
  offsetY: number;
  rowHeight: number;
  barHeight: number;
  thickWidth: number;
  showLinks?: boolean;
  showDelay?: boolean;
  start: Date;
  end: Date;
};

export function Gantt(
  this: HTMLElement,
  {
    data = [],
    onClick = NOOP,
    viewMode = "week",
    maxTextWidth = 140,
    offsetY = 60,
    rowHeight = 40,
    barHeight = 16,
    thickWidth = 1.4,
    showLinks = true,
    showDelay = true,
    start = new Date(),
    end = new Date(),
  }: GanttOptions
) {
  const unit = UNIT[viewMode];
  const minTime = start.getTime() - unit * 48;
  const maxTime = end.getTime() + unit * 48;

  const width = (maxTime - minTime) / unit + maxTextWidth;
  const height = data.length * rowHeight + offsetY;
  const box = `0 0 ${width} ${height}`;
  const current = Date.now();

  const headerOptions:
    | DayHeaderOptions
    | MonthHeaderOptions
    | WeekHeaderOptions = {
    unit,
    height,
    offsetY,
    minTime,
    maxTime,
    maxTextWidth,
  };

  return svg`
    <svg id="gantt" width=${width} height=${height} viewBox=${box}>
      ${Layout.bind(this)({
        width,
        height,
        offsetY,
        thickWidth,
        maxTextWidth,
      })}       
      ${getHeader.bind(this)(viewMode, headerOptions)}
      ${Grid.bind(this)({
        length: data.length,
        width,
        height,
        offsetY,
        rowHeight,
        maxTextWidth,
      })}
       
      ${
        maxTextWidth > 0
          ? Labels.bind(this)({
              data,
              offsetY,
              rowHeight,
            })
          : null
      }
      ${
        showLinks
          ? LinkLine.bind(this)({
              data,
              unit,
              offsetY,
              minTime,
              rowHeight,
              barHeight,
              maxTextWidth,
            })
          : null
      }
      ${Bar.bind(this)({
        data,
        unit,
        height,
        current,
        offsetY,
        minTime,
        showDelay,
        rowHeight,
        barHeight,
        maxTextWidth,
      })}
     
    </svg>
  `;
}

function getHeader(
  this: HTMLElement,
  viewMode: GanttViewMode,
  options: DayHeaderOptions | MonthHeaderOptions | WeekHeaderOptions
) {
  switch (viewMode) {
    case "day":
      return DayHeader.bind(this)(options as DayHeaderOptions);
    case "month":
      return MonthHeader.bind(this)(options as MonthHeaderOptions);
    case "week":
      return WeekHeader.bind(this)(options as WeekHeaderOptions);
  }
}
