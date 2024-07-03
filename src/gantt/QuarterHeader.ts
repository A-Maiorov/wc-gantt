import { svg } from "lit";
import { getDates } from "../utils";
import { Year } from "./Year";
import { repeat } from "lit/directives/repeat.js";
import type { WcGantt } from "../WcGantt";

export function QuarterHeader(this: WcGantt) {
  // const MONTH = [
  //   "Jan", //1 ind: 0
  //   "Feb", //1 ind: 1
  //   "Mar", //1 ind: 2
  //   "Apr", //2 ind: 3
  //   "May", //2 ind: 4
  //   "Jun", //2 ind: 5
  //   "Jul", //3 ind: 6
  //   "Aug", //3 ind: 7
  //   "Sep", //3 ind: 8
  //   "Oct", //4 ind: 9
  //   "Nov", //4 ind: 10
  //   "Dec", //4 ind: 11
  // ];

  const Q_START_MONTH = [0, 3, 6, 9];

  const dates = getDates(this.timeScale.startMs, this.timeScale.end.getTime());
  const months = dates.filter((v) => {
    const cur = new Date(v);
    return cur.getDate() === 1 && Q_START_MONTH.includes(cur.getMonth());
  });

  months.unshift(this.timeScale.startMs);
  months.push(this.timeScale.end.getTime());

  const ticks = [];
  const len = months.length - 1;

  for (let i = 0; i < len; i++) {
    const cur = new Date(months[i]);
    const currMonthNo = cur.getMonth() + 1;
    const currQ = Math.ceil(currMonthNo / 3);

    const x = this.timeScale.dateToPx(new Date(months[i]));
    const t = (months[i + 1] - months[i]) / this.timeScale.msPerPx;
    const id = "hm_" + currMonthNo;
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
            ${currQ}
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
