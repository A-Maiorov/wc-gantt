import { svg } from "lit";
import { Item } from "../types";

import { repeat } from "lit/directives/repeat.js";

export type BarOptions = {
  data: Item[];
  unit: number;
  height: number;
  offsetY: number;
  minTime: number;
  showDelay: boolean;
  rowHeight: number;
  barHeight: number;
  maxTextWidth: number;
  current: number;
};
export function Bar(
  this: HTMLElement,
  {
    data,
    unit,
    height,
    offsetY,
    minTime,
    showDelay,
    rowHeight,
    barHeight,
    maxTextWidth,
    current,
  }: BarOptions
) {
  const x0 = maxTextWidth;
  const y0 = (rowHeight - barHeight) / 2 + offsetY;
  const cur = x0 + (current - minTime) / unit;

  const bars = data.map((v, i) => {
    const id = "bar_" + v.id;
    if (!v.end || !v.start) {
      return null;
    }
    const handler = () => {
      const ev = new CustomEvent<Item>("item-click", { detail: v });
      this.dispatchEvent(ev);
    };
    const x = x0 + (v.start.getTime() - minTime) / unit;
    const y = y0 + i * rowHeight;
    const cy = y + barHeight / 2;
    if (v.type === "milestone") {
      const size = barHeight / 2;
      const points = [
        [x, cy - size],
        [x + size, cy],
        [x, cy + size],
        [x - size, cy],
      ]
        .map((p) => `${p[0]},${p[1]}`)
        .join(" ");
      return {
        id,
        tpl: svg`
        <g id=${id}
          key=${i}
          class="gantt-bar"                  
        >
          <polygon
            points=${points}
            class="milestone"            
            @click=${handler}
          />
          <circle
            class="gantt-ctrl-start"
            data-id=${v.id}
            cx=${x}
            cy=${cy}
            r=${6}          
          />
        </g>
      `,
      };
    }
    const w1 = (v.end.getTime() - v.start.getTime()) / unit;
    const w2 = w1 * v.percent;
    let barCss = "gantt-bar";
    barCss += v.type === "group" ? " group" : "";

    let warning = false;
    let danger = false;
    if (showDelay) {
      if (x + w2 < cur && v.percent < 0.999999) {
        warning = true;
        danger = false;
      }
      if (x + w1 < cur && v.percent < 0.999999) {
        warning = false;
        danger = true;
      }
    }
    //   <text x=${x - 4} y=${cy} style=${styleMap(styles.text1)}>
    //   ${formatDay(v.start)}
    //  </text>
    //  <text x=${x + w1 + 4} y=${cy} style=${styleMap(styles.text2)}>
    //    ${formatDay(v.end)}
    //  </text>
    const backBar = svg`
      <rect
        x=${x}
        y=${y}
        width=${w1}
        height=${barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${handler}    
      />`;

    const frontBar =
      w2 > 0.000001
        ? svg`
            <rect
            x=${x}
            y=${y}
            width=${w2}
            height=${barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${handler}
            />`
        : null;

    const controls =
      v.type === "group"
        ? null
        : svg`
      <g>
        <circle
          class="gantt-ctrl-start"
          data-id=${v.id}
          cx=${x - 12}
          cy=${cy}
          r=${6}
        />
        <circle
          class="gantt-ctrl-finish"
          data-id=${v.id}
          cx=${x + w1 + 12}
          cy=${cy}
          r=${6}
        />
      </g>
    `;
    return {
      id,
      tpl: svg`
      <g id=${id}
        key=${i}
        class=${barCss}
        ?warning=${warning}
        ?danger=${danger}
      >      
        ${backBar}
        ${frontBar}
        ${controls}
      </g>
    `,
    };
  });

  return svg`
    <g>
      ${
        current > minTime
          ? svg`
          <line             
            x1=${cur}
            x2=${cur}
            y1=${offsetY}
            y2=${height}
            class="today-line"
          />
        `
          : null
      }
      ${repeat(
        bars,
        (i) => i.id,
        (i) => i.tpl
      )} 
    </g>
  `;
}
