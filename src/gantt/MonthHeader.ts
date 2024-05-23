import { svg } from "lit";
import { getDates } from "../utils";
import { Year } from "./Year";
import { repeat } from "lit/directives/repeat.js";
import type { WCGantt } from "../WcGantt";

export function MonthHeader(this: WCGantt) {
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
    this.schedule.timeScale.startMs,
    this.schedule.timeScale.end.getTime()
  );
  const months = dates.filter((v) => new Date(v).getDate() === 1);

  months.unshift(this.schedule.timeScale.startMs);
  months.push(this.schedule.timeScale.end.getTime());

  const ticks = [];
  const len = months.length - 1;

  for (let i = 0; i < len; i++) {
    const cur = new Date(months[i]);
    const month = cur.getMonth();
    const x = this.schedule.timeScale.dateToPx(new Date(months[i]));
    const t = (months[i + 1] - months[i]) / this.schedule.timeScale.msPerPx;
    const id = "hm_" + month;
    const textX = x + t / 2;

    const line = svg`
    
      <line
        x1=${x}
        x2=${x}
        y1=${this.settings.scaleHeight / 2}
        y2=${this.settings.scaleHeight}
        class="line"       
      />    
      `;

    ticks.push({
      id,
      tpl: svg`
      <g>
        ${i === 0 ? null : line}
        ${
          t > 30
            ? svg`
          <text x=${textX} y=${
                this.settings.scaleHeight * 0.75
              } class="text small">
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
      ${Year.bind(this)(years)}     
      <line
        x1=${0}
        x2=${this.settings.width}
        y1=${this.settings.scaleHeight / 2}
        y2=${this.settings.scaleHeight / 2}
        class="line"
        
      />
       ${repeat(
         ticks,
         (i) => i.id,
         (i) => i.tpl
       )}  
    </g>
  `;
}
