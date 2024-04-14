import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { ComponentSettings } from "../types";

export function Year(years: number[], settings: ComponentSettings) {
  years.unshift(settings.timeScale.startMs);
  years.push(settings.timeScale.end.getTime());
  const ticks = [];

  let currYear = settings.timeScale.start.getFullYear();
  const lastYear = settings.timeScale.end.getFullYear();
  let currX1 = 0;
  const maxPx = settings.timeScale.dateToPx(settings.timeScale.end);

  const oneFourthScaleH = settings.scaleHeight / 4;
  const y = 0;
  const h = oneFourthScaleH * 2;

  while (currYear <= lastYear) {
    const nextYear = new Date(currYear + 1, 0, 1, 1);
    let currX2 = settings.timeScale.dateToPx(nextYear);
    if (currX2 > maxPx) currX2 = maxPx;
    ticks.push({
      id: "y_" + currYear,
      tpl: svg`
      <g>
        <rect x=${currX2} y=${y} width="1" height=${h}
        class="line scale flip" />      
          <text 
            x=${(currX2 - currX1) / 2 + currX1} 
            y=${settings.scaleHeight * 0.25} 
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
