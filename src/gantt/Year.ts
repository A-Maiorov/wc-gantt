import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import type { WCGantt } from "../WcGantt";

export function Year(this: WCGantt, years: number[]) {
  years.unshift(this.schedule.timeScale.startMs);
  years.push(this.schedule.timeScale.end.getTime());
  const ticks = [];

  let currYear = this.schedule.timeScale.start.getFullYear();
  const lastYear = this.schedule.timeScale.end.getFullYear();
  let currX1 = 0;
  const maxPx = this.schedule.timeScale.dateToPx(this.schedule.timeScale.end);

  const oneFourthScaleH = this.settings.scaleHeight / 4;
  const y = 0;
  const h = oneFourthScaleH * 2;

  while (currYear <= lastYear) {
    const nextYear = new Date(currYear + 1, 0, 1, 1);
    let currX2 = this.schedule.timeScale.dateToPx(nextYear);
    if (currX2 > maxPx) currX2 = maxPx;
    ticks.push({
      id: "y_" + currYear,
      tpl: svg`
      <g>
      
        <line
          x1=${currX2}
          x2=${currX2}
          y1=${y}
          y2=${h}
          class="line"       
        />   
          <text 
            x=${(currX2 - currX1) / 2 + currX1} 
            y=${this.settings.scaleHeight * 0.25} 
            class="text small">
            ${currYear}
          </text>        
      </g>`,
    });

    currYear = nextYear.getFullYear();
    currX1 = currX2;
  }

  return svg`<g id="year">
   ${repeat(
     ticks,
     (i) => i.id,
     (i) => i.tpl
   )}  
  </g>`;
}
