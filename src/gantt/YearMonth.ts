import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import type { WcGantt } from "../WcGantt";
export function YearMonth(this: WcGantt) {
  const scale = this.timeScale;
  const currentDay = this.timeScale.start;
  const ticks = [];

  const currentMonth = currentDay.getMonth();

  let firstDayOfNextMonth = new Date(
    currentDay.getFullYear(),
    currentMonth,
    1,
    1
  );

  const textBaseLine = this.settings.scaleHeight * 0.25;

  let firstDayOfPrevMonthX = scale.dateToPx(firstDayOfNextMonth);

  while (firstDayOfNextMonth <= scale.end) {
    const month = firstDayOfNextMonth.toLocaleString("default", {
      month: "long",
    });
    const str = `${month} ${firstDayOfNextMonth.getFullYear()}`;

    firstDayOfNextMonth.setMonth(firstDayOfNextMonth.getMonth() + 1, 1);

    const firstDayOfNextMonthX = scale.dateToPx(firstDayOfNextMonth);
    const textX =
      firstDayOfPrevMonthX + (firstDayOfNextMonthX - firstDayOfPrevMonthX) / 2;
    ticks.push({
      id: str,
      tpl: svg`
      <g>

        <line
          x1=${firstDayOfNextMonthX}
          x2=${firstDayOfNextMonthX}
          y1=${0}
          y2=${this.settings.scaleHeight / 2}
          class="line"       
        />   
        
        <text x=${textX} y=${textBaseLine} 
             class="text small">${str}</text>                
      </g>
      `,
    });

    firstDayOfPrevMonthX = firstDayOfNextMonthX;
  }
  return svg`<g id="yearMonth">
  ${repeat(
    ticks,
    (i) => i.id,
    (i) => i.tpl
  )}  
  </g>`;
}
