import { svg } from "lit";
import { getWeekNumber, getWeeks } from "../utils";
import { YearMonth } from "./YearMonth";
import { repeat } from "lit/directives/repeat.js";
import type { WcGantt } from "../WcGantt";
import dayjs from "dayjs";

export function WeekHeader(this: WcGantt) {
  const weeks = getWeeks(this.timeScale.start, this.timeScale.end);

  const ticks = [];
  //const y0 = settings.scaleHeight;
  //const RH = settings.height - y0;
  const d = this.timeScale.pxPerDay;
  const len = weeks.length - 1;

  const oneFourthScaleH = this.settings.scaleHeight / 4;

  for (let i = 0; i < len; i++) {
    const cur = new Date(weeks[i]);
    const x = this.timeScale.dateToPx(cur);
    const curDay = cur.getDate();
    const prevDay = dayjs(cur).subtract(1, "day").toDate().getDate(); // addDays(cur, -1).getDate();
    const id = "week_" + i + "_" + prevDay + "-" + curDay;

    const textMargin = this.settings.scaleHeight / 6;
    const textOffsetY = this.settings.scaleHeight - textMargin;
    const weekTextOffsetY = oneFourthScaleH * 2 + textMargin;

    const weekNumber = getWeekNumber(dayjs(cur).add(1, "day").toDate());
    ticks.push({
      id,
      tpl: svg`
      <g id=${id}> 
          <text x=${x - 3} y=${textOffsetY} class="text small end">
          ${prevDay}
        </text>       

        <line
          x1=${x}
          x2=${x}
          y1=${this.settings.scaleHeight / 2}
          y2=${this.settings.scaleHeight}
          class="line"       
        />    
        <text x=${x + 3} y=${textOffsetY} class="text small start">
          ${curDay}
        </text>          
        <text x=${x + 3 * d} y=${weekTextOffsetY} 
          class="text tiny start">
            Week ${weekNumber}
        </text>    
      </g>`,
    });
  }
  return svg`
    <g id="weekHeader">
      ${YearMonth.bind(this)()}
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
