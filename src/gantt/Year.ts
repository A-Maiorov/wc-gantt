import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import type { WcGantt } from "../WcGantt";

export function Year(this: WcGantt, years: number[]) {
  years.unshift(this.timeScale.startMs);
  years.push(this.timeScale.end.getTime());
  const ticks = [];

  let currYear = this.timeScale.start.getFullYear();
  const lastYear = this.timeScale.end.getFullYear();
  let currX1 = 0;
  const maxPx = this.timeScale.dateToPx(this.timeScale.end);

  const oneFourthScaleH = this.settings.scaleHeight / 4;
  const y = 0;
  const h = oneFourthScaleH * 2;

  while (currYear <= lastYear) {
    const nextYear = new Date(currYear + 1, 0, 1, 1);
    let currX2 = this.timeScale.dateToPx(nextYear);
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
