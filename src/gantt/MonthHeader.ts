import { svg } from "lit";
import { getDates } from "../utils";
import { Year } from "./Year";
import { repeat } from "lit/directives/repeat.js";
import { ComponentSettings } from "../types";

export function MonthHeader(settings: ComponentSettings) {
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
  const dates = getDates(
    settings.timeScale.startMs,
    settings.timeScale.end.getTime()
  );
  const months = dates.filter((v) => new Date(v).getDate() === 1);

  months.unshift(settings.timeScale.startMs);
  months.push(settings.timeScale.end.getTime());

  const ticks = [];
  const len = months.length - 1;

  const oneFourthScaleH = settings.scaleHeight / 4;
  const lineY = oneFourthScaleH * 3;
  const lineH = oneFourthScaleH;

  for (let i = 0; i < len; i++) {
    const cur = new Date(months[i]);
    const month = cur.getMonth();
    const x = settings.timeScale.dateToPx(new Date(months[i]));
    const t = (months[i + 1] - months[i]) / settings.timeScale.msPerPx;
    const id = "hm_" + month;
    const textX = x + t / 2;

    const line = svg`
      <rect 
        x=${x}         
        y=${lineY} 
        width="1"
        height=${lineH}       
        class="line scale" />`;

    ticks.push({
      id,
      tpl: svg`
      <g>
        ${i === 0 ? null : line}
        ${
          t > 30
            ? svg`
          <text x=${textX} y=${settings.scaleHeight * 0.75} class="text small">
            ${MONTH[month]}
          </text>`
            : null
        }
      </g>
      `,
    });
  }

  const years = months.filter((v) => new Date(v).getMonth() === 0);
  return svg`
    <g id="monthHeader">
      ${Year(years, settings)}     
       ${repeat(
         ticks,
         (i) => i.id,
         (i) => i.tpl
       )}  
    </g>
  `;
}
