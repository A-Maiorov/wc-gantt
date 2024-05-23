import { YearMonth } from "./YearMonth";
import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import type { WCGantt } from "../WcGantt";

export function DayHeader(this: WCGantt) {
  const scale = this.schedule.timeScale;
  const currentDay = new Date(scale.startMs);
  const ticks = [];

  for (let day = 0; day <= scale.totalDays - 1; day++) {
    const x = day * scale.pxPerDay;
    const textX = x + scale.pxPerDay / 2;

    const currDate = currentDay.getDate();

    ticks.push({
      id: day,
      tpl: svg`
      <g>             
        
        <line
          x1=${x}
          x2=${x}
          y1=${this.settings.scaleHeight / 2}
          y2=${this.settings.scaleHeight}
          class="line"       
        />   
        <text 
          id=${day} 
          x=${textX} 
          y=${this.settings.scaleHeight * 0.75} 
          class="text small">
          ${currDate}
        </text>

   
      </g>`,
    });

    currentDay.setDate(currentDay.getDate() + 1);
  }

  return svg`
  <g id="dayHeader">
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
  </g>`;
}
