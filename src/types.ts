import type { FlattenedItem } from "./WcGantt";
import { TimeScale } from "./timeScale";

export interface Link {
  source: string | number;
  target: string | number;
  type: LinkType;
  lag: number;
}

export type LinkType = "FS" | "FF" | "SS" | "SF";
export type ItemType = "activity" | "group" | "milestone" | "buffer";

export interface Item {
  id: unknown;
  type?: ItemType;
  nested?: Item[];
  text: string;
  start?: Date;
  end?: Date;
  percent?: number;
}
export const isActivity = (i: Item): i is Activity => {
  const res = i.nested == undefined && (!i.type || i.type === "activity");
  if (res && !i.type) i.type = "activity";
  return res;
};
export interface Activity extends Item {
  type: "activity";
  nested: undefined;
}
export const isMilestone = (i: Item): i is Milestone => {
  const res =
    "type" in i &&
    i.nested == undefined &&
    i.percent == undefined &&
    i.type === "milestone";
  if (res) i.end = i.start;

  return res;
};
export interface Milestone extends Item {
  type: "milestone";
  end: undefined;
  nested: undefined;
  percent: undefined;
}
export const isGroup = (i: Item): i is Group => {
  const res =
    "nested" in i &&
    Array.isArray(i.nested) &&
    i.nested.length > 0 &&
    (!i.type || i.type === "group");
  if (res) {
    i.type = "group";

    const g = getGroupStartEnd(i as Group);
    i.start = new Date(Math.min(i.start?.getTime() ?? +Infinity, g.start));
    i.end = new Date(Math.max(i.end?.getTime() ?? -Infinity, g.end));
  }
  return res;
};

function getGroupStartEnd(g: Group) {
  let start = 0;
  let end = 0;

  for (const x of g.nested) {
    if (x.type === "group" || (x.nested && x.nested.length > 0)) {
      const gr = getGroupStartEnd(x as Group);
      start = start > 0 ? Math.min(start, gr.start) : gr.start;
      end = Math.max(end, gr.end);
    } else {
      start =
        start > 0
          ? Math.min(start, x.start?.getTime() ?? +Infinity)
          : x.start?.getTime();
      end = Math.max(end, x.end?.getTime() ?? -Infinity);
    }
  }
  return { start, end };
}

export interface Group extends Item {
  type: "group";
  nested: Item[];
}

export type GanttViewMode = "week" | "day" | "month";

export interface WcGanttOptions {
  viewMode: GanttViewMode;
  showLinks: boolean;
  showLabels: boolean;
  showDelay: boolean;
  showCriticalPath: boolean;
  minDate?: Date;
  maxDate?: Date;
}

export interface ComponentSettings extends WcGanttOptions {
  labelsWidth: number;
  start: Date;
  end: Date;
  data: FlattenedItem[];
  links: Link[];
  width: number;
  height: number;
  scaleHeight: number; // default: 60,
  rowHeight: number; // default: 40,
  barHeight: number; // default: 16,
  lineWidth: number; // default: 1
  timeScale: TimeScale;
}

export type LinkAddedEvArgs = {
  link: Link;
  cancel: () => void;
};
