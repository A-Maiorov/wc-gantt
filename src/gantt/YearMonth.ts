import { svg } from "lit";
import { formatMonth } from "../utils";
import { repeat } from "lit/directives/repeat.js";

export type YearMonthOptions = {
  dates: number[];
  unit: number;
  offsetY: number;
  minTime: number;
  maxTime: number;
  maxTextWidth: number;
};

export function YearMonth({
  dates,
  unit,
  offsetY,
  minTime,
  maxTime,
  maxTextWidth,
}: YearMonthOptions) {
  const months = dates.filter((v) => new Date(v).getDate() === 1);

  months.unshift(minTime);
  months.push(maxTime);

  const ticks = [];
  const x0 = maxTextWidth;
  const y2 = offsetY / 2;
  const len = months.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = new Date(months[i]);
    const str = formatMonth(cur);
    const x = x0 + (months[i] - minTime) / unit;
    const t = (months[i + 1] - months[i]) / unit;
    const id = "m_" + str;
    ticks.push({
      id,
      tpl: svg`
      <g>
        <line x1=${x} x2=${x} y1=${0} y2=${y2} class="line" />
        ${
          t > 50
            ? svg`<text x=${x + t / 2} y=${offsetY * 0.25} 
              class="text small">${str}</text>`
            : null
        }
      </g>
      `,
    });
  }
  return svg`<g id="yearMonth">
  ${repeat(
    ticks,
    (i) => i.id,
    (i) => i.tpl
  )}  
  </g>`;
}
