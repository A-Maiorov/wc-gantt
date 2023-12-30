import { svg } from "lit";
import { getDates } from "../utils";
import { Year } from "./Year";
import { repeat } from "lit/directives/repeat.js";

export type MonthHeaderOptions = {
  unit: number;
  minTime: number;
  maxTime: number;
  offsetY: number;
  maxTextWidth: number;
};
export function MonthHeader({
  unit,
  minTime,
  maxTime,
  offsetY,
  maxTextWidth,
}: MonthHeaderOptions) {
  const MONTH = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dates = getDates(minTime, maxTime);
  const months = dates.filter((v) => new Date(v).getDate() === 1);

  months.unshift(minTime);
  months.push(maxTime);

  const ticks = [];
  const x0 = maxTextWidth;
  const y0 = offsetY / 2;
  const len = months.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = new Date(months[i]);
    const month = cur.getMonth();
    const x = x0 + (months[i] - minTime) / unit;
    const t = (months[i + 1] - months[i]) / unit;
    const id = "hm_" + month;
    const textX = x + t / 2;
    ticks.push({
      id,
      tpl: svg`
      <g>
        <line x1=${x} x2=${x} y1=${y0} y2=${offsetY} 
        class="line" />
        ${
          t > 30
            ? svg`
          <text x=${textX} y=${offsetY * 0.75} class="text small">
            ${MONTH[month]}
          </text>`
            : null
        }
      </g>
      `,
    });
  }
  return svg`
    <g id="monthHeader">
      ${Year({
        unit,
        months,
        offsetY,
        minTime,
        maxTime,
        maxTextWidth,
      })}     
       ${repeat(
         ticks,
         (i) => i.id,
         (i) => i.tpl
       )}  
    </g>
  `;
}
