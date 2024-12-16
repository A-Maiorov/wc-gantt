import { svg } from "lit";

import { p2s } from "../utils";
import { createRoundedPathString } from "../roundedCorners";
import type { WcGantt } from "../WcGantt";
import type { IDependency, Item } from "../schedule";

export function LinkLines(this: WcGantt) {
  const itemsIdsMap: Map<string, Item> = this.schedule.itemsIndex;

  const hiddenItems = new Set<string>(
    this.schedule.items.filter((x) => x.hidden == true).map((x) => x.id)
  );

  return svg`
    <g class="link-lines" >
      ${this.schedule.dependencies
        .sort((a, b) => {
          const aa = +(
            itemsIdsMap.get(a.predecessor).crit &&
            itemsIdsMap.get(a.successor).crit
          );
          const bb = +(
            itemsIdsMap.get(b.predecessor).crit &&
            itemsIdsMap.get(b.successor).crit
          );
          return aa - bb;
        })
        .filter(
          (x) =>
            !hiddenItems.has(x.predecessor) && !hiddenItems.has(x.successor)
        )
        .map((s) => {
          return renderLink.bind(this)(
            s,
            itemsIdsMap.get(s.predecessor.toString()),
            itemsIdsMap.get(s.successor.toString())
          );
        })}
    </g>`;
}

function renderLink(
  this: WcGantt,
  l: IDependency,
  source?: Item,
  target?: Item
) {
  const targetItem =
    target ?? this.schedule.itemsIndex.get(l.successor.toString());
  const sourceItem =
    source ?? this.schedule.itemsIndex.get(l.predecessor.toString());
  if (!targetItem || !targetItem.earlyStart || !targetItem.earlyFinish)
    return null;
  if (!sourceItem || !sourceItem.earlyStart || !sourceItem.earlyFinish)
    return null;

  const y0 = this.settings.rowHeight / 2;

  const i = this.schedule.items
    .filter((x) => !x.hidden)
    .findIndex((x) => x.id === sourceItem.id);
  const j = this.schedule.items
    .filter((x) => !x.hidden)
    .findIndex((x) => x.id === targetItem.id);

  const gap = 12;
  const arrow = 3;
  const mgap =
    targetItem.type === "milestone" ? this.settings.barHeight / 2 : 0;
  const y1 = y0 + i * this.settings.rowHeight;
  const y2 = y0 + j * this.settings.rowHeight;

  let vgap = this.settings.barHeight / 2 + 4;
  if (y1 > y2) {
    vgap = -vgap;
  }
  const sEndX = this.timeScale.dateToPx(sourceItem.earlyFinish);
  const sStartX = this.timeScale.dateToPx(sourceItem.earlyStart);
  const eEndX = this.timeScale.dateToPx(targetItem.earlyFinish);
  const eStartX = this.timeScale.dateToPx(targetItem.earlyStart);

  const drawLineWithArrow = (p1: number[][], p2: number[][]) => {
    const id = `${l.predecessor}-${l.successor}-${l.type}`;

    let cssClass = "link";
    if (sourceItem.crit && targetItem.crit) cssClass += " crit";

    return svg`
    <g 
      id=${id} 
      class=${cssClass}
      data-source=${l.predecessor} 
      data-target=${l.successor} 
      data-link-type=${l.type}>
      <path d=${createRoundedPathString(p1)} class="link-line" ></path>     
      <polygon points=${p2s(p2)} class="line-arrow" />
    </g>`;
  };

  if (l.type === "FS") {
    const x1 = sEndX;
    const x2 = eStartX - mgap;
    const p1 = [
      [x1, y1],
      [x1 + gap, y1],
    ];
    if (x2 - x1 >= 2 * gap) {
      p1.push([x1 + gap, y2]);
    } else {
      p1.push([x1 + gap, y2 - vgap]);
      p1.push([x2 - gap, y2 - vgap]);
      p1.push([x2 - gap, y2]);
    }
    p1.push([x2 - arrow, y2]);
    const p2 = [
      [x2 - arrow, y2 - arrow],
      [x2, y2],
      [x2 - arrow, y2 + arrow],
    ];
    return drawLineWithArrow(p1, p2);
  }
  if (l.type === "FF") {
    const x1 = sEndX;
    const x2 = eEndX + mgap;
    const p1 = [
      [x1, y1],
      [x1 + gap, y1],
    ];
    if (x2 <= x1) {
      p1.push([x1 + gap, y2]);
    } else {
      p1.push([x1 + gap, y2 - vgap]);
      p1.push([x2 + gap, y2 - vgap]);
      p1.push([x2 + gap, y2]);
    }
    p1.push([x2 + arrow, y2]);
    const p2 = [
      [x2 + arrow, y2 - arrow],
      [x2, y2],
      [x2 + arrow, y2 + arrow],
    ];
    return drawLineWithArrow(p1, p2);
  }
  if (l.type === "SS") {
    const x1 = sStartX;
    const x2 = eStartX - mgap;
    const p1 = [
      [x1, y1],
      [x1 - gap, y1],
    ];
    if (x1 <= x2) {
      p1.push([x1 - gap, y2]);
    } else {
      p1.push([x1 - gap, y2 - vgap]);
      p1.push([x2 - gap, y2 - vgap]);
      p1.push([x2 - gap, y2]);
    }
    p1.push([x2 - arrow, y2]);
    const p2 = [
      [x2 - arrow, y2 - arrow],
      [x2, y2],
      [x2 - arrow, y2 + arrow],
    ];
    return drawLineWithArrow(p1, p2);
  }
  if (l.type === "SF") {
    const x1 = sStartX;
    const x2 = eEndX + mgap;
    const p1 = [
      [x1, y1],
      [x1 - gap, y1],
    ];
    if (x1 - x2 >= 2 * gap) {
      p1.push([x1 - gap, y2]);
    } else {
      p1.push([x1 - gap, y2 - vgap]);
      p1.push([x2 + gap, y2 - vgap]);
      p1.push([x2 + gap, y2]);
    }
    p1.push([x2 + arrow, y2]);
    const p2 = [
      [x2 + arrow, y2 - arrow],
      [x2, y2],
      [x2 + arrow, y2 + arrow],
    ];
    return drawLineWithArrow(p1, p2);
  }
  return null;
}
