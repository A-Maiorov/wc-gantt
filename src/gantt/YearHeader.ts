import { svg } from "lit";
import { getDates } from "../utils";
import { Year } from "./Year";
import { repeat } from "lit/directives/repeat.js";
import type { WcGantt } from "../WcGantt";

export function YearHeader(this: WcGantt) {
  const Y_START_MONTH = 0;

  const dates = getDates(this.timeScale.startMs, this.timeScale.end.getTime());
  const months = dates.filter((v) => {
    const cur = new Date(v);
    return cur.getDate() === 1 && Y_START_MONTH === cur.getMonth();
  });

  months.unshift(this.timeScale.startMs);
  months.push(this.timeScale.end.getTime());

  const ticks = [];
  const len = months.length - 1;

  for (let i = 0; i < len; i++) {
    const cur = new Date(months[i]);
    const currY = cur.getFullYear();
    // const currMonthNo = cur.getMonth() + 1;
    // const currQ = Math.ceil(currMonthNo / 3);

    const x = this.timeScale.dateToPx(new Date(months[i]));
    const t = (months[i + 1] - months[i]) / this.timeScale.msPerPx;
    const id = "hm_" + currY;
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
               &nbsp;
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
