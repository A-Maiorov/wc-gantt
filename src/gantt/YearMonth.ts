import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { ComponentSettings } from "../types";

export function YearMonth(settings: ComponentSettings) {
  const scale = settings.timeScale;
  const currentDay = new Date(settings.start);
  const ticks = [];
  const oneFourthScaleH = settings.scaleHeight / 4;
  const y = 0;
  const h = oneFourthScaleH * 2;

  const currentMonth = currentDay.getMonth();

  let firstDayOfNextMonth = new Date(
    currentDay.getFullYear(),
    currentMonth,
    1,
    1
  );

  const textBaseLine = settings.scaleHeight * 0.25;

  let firstDayOfPrevMonthX = scale.dateToPx(firstDayOfNextMonth);

  let i = 0;
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
        <rect 
          x=${firstDayOfNextMonthX} 
          height=${h} width="1"
          y=${y} class="line scale flip" />
        
        <text x=${textX} y=${textBaseLine} 
             class="text small">${str}</text>                
      </g>
      `,
    });

    firstDayOfPrevMonthX = firstDayOfNextMonthX;
    i++;
  }
  return svg`<g id="yearMonth">
  ${repeat(
    ticks,
    (i) => i.id,
    (i) => i.tpl
  )}  
  </g>`;
}
