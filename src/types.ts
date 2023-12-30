export interface Link {
  source: string | number;
  target: string | number;
  type: LinkType;
}

export type LinkType = "FS" | "FF" | "SS" | "SF";
export type ItemType = "activity" | "group" | "milestone";

export interface Item {
  id: unknown;
  path: string;
  type?: ItemType;
  nested?: Item[];
  text: string;
  start: Date;
  end: Date;
  percent?: number;
  links?: Array<Link>;
}
export const isActivity = (i: Item): i is Activity => {
  const res = !("nested" in i) && (!i.type || i.type === "activity");
  if (res && !i.type) i.type = "activity";
  return res;
};
export interface Activity extends Item {
  type: "activity";
  nested: undefined;
}
export const isMilestone = (i: Item): i is Milestone => {
  return (
    "type" in i &&
    !("nested" in i) &&
    !("percent" in i) &&
    i.type === "milestone"
  );
};
export interface Milestone extends Item {
  type: "milestone";
  nested: undefined;
  percent: undefined;
}
export const isGroup = (i: Item): i is Group => {
  const res =
    "nested" in i && Array.isArray(i.nested) && (!i.type || i.type === "group");
  if (res && !i.type) i.type = "group";
  return res;
};
export interface Group extends Item {
  type: "group";
  nested: Item[];
}

export interface WcGanttOptions {
  viewMode: "day" | "week" | "month";
  offsetY: number; // default: 60,
  rowHeight: number; // default: 40,
  barHeight: number; // default: 16,
  maxTextWidth?: number;
}

export interface ComponentSettings extends WcGanttOptions {
  thickWidth: number; // default: 1.4 - defined by --gantt-layout-thick-line-stroke-width CSS var
  start: Date;
  end: Date;
  data: Item[];
}

export type LinkAddedEvArgs = {
  link: Link;
  cancel: () => void;
};
