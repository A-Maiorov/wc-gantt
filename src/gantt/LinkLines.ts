import { svg } from "lit";
import { ComponentSettings, Link } from "../types";
import { p2s } from "../utils";
import { createRoundedPathString } from "../roundedCorners";
import type { FlattenedItem } from "../WcGantt";

export function LinkLines(this: HTMLElement, settings: ComponentSettings) {
  const itemsIdsMap: Map<string, FlattenedItem> = new Map();

  settings.data.forEach((v) => {
    itemsIdsMap.set(v.id.toString(), v);
  });
  return svg`
    <g class="link-lines" >
      ${settings.links.map((s) => {
        return renderLink(
          s,
          settings,
          itemsIdsMap.get(s.source.toString()),
          itemsIdsMap.get(s.target.toString())
        );
      })}
    </g>`;
}

// export function reRenderItemLinks(item: Item, svg: SVGElement) {
//   if (!_settings) return;

//   const allLinks = svg.querySelectorAll<SVGGElement>(".link");

//   for (const l of allLinks) {
//     let newL: TemplateResult;
//     if (l.dataset.source === item.id.toString()) {
//       newL = renderLink(
//         {
//           source: item.id.toString(),
//           target: l.dataset.target,
//           type: l.dataset.type as LinkType,
//         },
//         _settings,
//         item,
//         undefined
//       );
//     }
//     if (l.dataset.target === item.id.toString()) {
//       newL = renderLink(
//         {
//           target: item.id.toString(),
//           source: l.dataset.source,
//           type: l.dataset.linkType as LinkType,
//         },
//         _settings,
//         undefined,
//         item
//       );
//     }

//     if (newL) {
//       const container = l.parentElement;
//       // l.remove();
//       render(newL, container, { host: container });
//     }
//   }
// }

function renderLink(
  l: Link,
  settings: ComponentSettings,
  source?: FlattenedItem,
  target?: FlattenedItem
) {
  const targetItem =
    target ??
    settings.data.find((x) => x.id.toString() === l.target.toString());
  const sourceItem =
    source ??
    settings.data.find((x) => x.id.toString() === l.source.toString());
  if (!targetItem || !targetItem.start || !targetItem.end) return null;
  if (!sourceItem || !sourceItem.start || !sourceItem.end) return null;

  const y0 = settings.rowHeight / 2;

  const i = settings.data.findIndex((x) => x.id === sourceItem.id);
  const j = settings.data.findIndex((x) => x.id === targetItem.id);

  const gap = 12;
  const arrow = 3;
  const mgap = targetItem.type === "milestone" ? settings.barHeight / 2 : 0;
  const y1 = y0 + i * settings.rowHeight;
  const y2 = y0 + j * settings.rowHeight;

  let vgap = settings.barHeight / 2 + 4;
  if (y1 > y2) {
    vgap = -vgap;
  }
  const sEndX = settings.timeScale.dateToPx(sourceItem.end);
  const sStartX = settings.timeScale.dateToPx(sourceItem.start);
  const eEndX = settings.timeScale.dateToPx(targetItem.end);
  const eStartX = settings.timeScale.dateToPx(targetItem.start);

  const drawLineWithArrow = (p1: number[][], p2: number[][]) => {
    const id = `${l.source}-${l.target}-${l.type}`;

    let cssClass = "link";
    if (sourceItem.crit && targetItem.crit) cssClass += " crit";

    return svg`
    <g 
      id=${id} 
      class=${cssClass}
      data-source=${l.source} 
      data-target=${l.target} 
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
