import { svg } from "lit";
import { addDays, getWeekNumber, getWeeks } from "../utils";
import { YearMonth } from "./YearMonth";
import { repeat } from "lit/directives/repeat.js";
import { ComponentSettings } from "../types";

export function WeekHeader(settings: ComponentSettings) {
  const weeks = getWeeks(settings.timeScale.start, settings.timeScale.end);

  const ticks = [];
  //const y0 = settings.scaleHeight;
  //const RH = settings.height - y0;
  const d = settings.timeScale.pxPerDay;
  const len = weeks.length - 1;

  const oneFourthScaleH = settings.scaleHeight / 4;

  for (let i = 0; i < len; i++) {
    const cur = new Date(weeks[i]);
    const x = settings.timeScale.dateToPx(cur);
    const curDay = cur.getDate();
    const prevDay = addDays(cur, -1).getDate();
    const id = "week_" + i + "_" + prevDay + "-" + curDay;

    const textMargin = settings.scaleHeight / 6;
    const textOffsetY = settings.scaleHeight - textMargin;
    const weekTextOffsetY = oneFourthScaleH * 2 + textMargin;

    const weekNumber = getWeekNumber(addDays(cur, 1));
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
          y1=${settings.scaleHeight / 2}
          y2=${settings.scaleHeight}
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
      ${YearMonth({ ...settings })}
      <line
        x1=${0}
        x2=${settings.width}
        y1=${settings.scaleHeight / 2}
        y2=${settings.scaleHeight / 2}
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
