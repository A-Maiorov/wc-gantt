import { svg } from "lit";
import { getDates, addDays, DAY, getWeekNumber } from "../utils";
import { YearMonth } from "./YearMonth";
import { repeat } from "lit/directives/repeat.js";
export type WeekHeaderOptions = {
  unit: number;
  minTime: number;
  maxTime: number;
  height: number;
  offsetY: number;
  maxTextWidth: number;
};

export function WeekHeader({
  unit,
  minTime,
  maxTime,
  height,
  offsetY,
  maxTextWidth,
}: WeekHeaderOptions) {
  const dates = getDates(minTime, maxTime);
  const weeks = dates.filter((v) => new Date(v).getDay() === 0);
  weeks.push(maxTime);
  const ticks = [];
  const x0 = maxTextWidth;
  const y0 = offsetY;
  const RH = height - y0;
  const d = DAY / unit;
  const len = weeks.length - 1;
  for (let i = 0; i < len; i++) {
    const cur = new Date(weeks[i]);
    const x = x0 + (weeks[i] - minTime) / unit;
    const curDay = cur.getDate();
    const prevDay = addDays(cur, -1).getDate();
    const id = "week_" + i + "_" + prevDay + "-" + curDay;

    const textOffsetY = offsetY - 10; //offsetY * 0.75;

    const weekNumber = getWeekNumber(addDays(cur, 1));
    ticks.push({
      id,
      tpl: svg`
      <g id=${id}>
        <rect x=${x - d} y=${y0} width=${d * 2} height=${RH} 
          class="weekend"/>
          <text x=${x - 3} y=${textOffsetY} class="text small end">
          ${prevDay}
        </text>       
        <line x1=${x} x2=${x} y1=${offsetY / 2} y2=${offsetY} 
          class="line"/>
        <text x=${x + 3} y=${textOffsetY} class="text small start">
          ${curDay}
        </text>        
        <text x=${x + 3 + 25} y=${textOffsetY - 13} 
          class="text tiny">
            Week ${weekNumber}
        </text>    
      </g>`,
    });
  }
  return svg`
    <g id="weekHeader">
      ${YearMonth({
        //  styles,
        unit,
        dates,
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
