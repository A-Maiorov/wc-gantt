import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";

export type YearOptions = {
  months: number[];
  unit: number;
  offsetY: number;
  minTime: number;
  maxTime: number;
  maxTextWidth: number;
};
export function Year({
  months,
  unit,
  offsetY,
  minTime,
  maxTime,
  maxTextWidth,
}: YearOptions) {
  const years = months.filter((v) => new Date(v).getMonth() === 0);

  years.unshift(minTime);
  years.push(maxTime);

  const ticks = [];
  const x0 = maxTextWidth;
  const y2 = offsetY / 2;
  const len = years.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = new Date(years[i]);
    const x = x0 + (years[i] - minTime) / unit;
    const t = (years[i + 1] - years[i]) / unit;
    const id = "y_" + cur.getFullYear();
    ticks.push({
      id,
      tpl: svg`
      <g>
        <line x1=${x} x2=${x} y1=${0} y2=${y2} 
        class="line" />
        ${
          t > 35
            ? svg`
          <text x=${x + t / 2} y=${offsetY * 0.25} 
          class="text small">
            ${cur.getFullYear()}
          </text>`
            : null
        }
      </g>`,
    });
  }
  return svg`<g id="year">
   ${repeat(
     ticks,
     (i) => i.id,
     (i) => i.tpl
   )}  
  </g>`;
}
