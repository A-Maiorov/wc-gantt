import { ComponentSettings } from "../types";
import { YearMonth } from "./YearMonth";
import { svg } from "lit";
import { repeat } from "lit/directives/repeat.js";

export function DayHeader(settings: ComponentSettings) {
  const scale = settings.timeScale;
  const currentDay = new Date(scale.startMs);
  const ticks = [];

  const weekendRectH = settings.height - settings.scaleHeight;

  for (let day = 0; day <= scale.totalDays - 1; day++) {
    const dayOfWeek = currentDay.getDay();
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
    const x = day * scale.pxPerDay;
    const textX = x + scale.pxPerDay / 2;

    const oneFourthScaleH = settings.scaleHeight / 4;
    const lineY = oneFourthScaleH * 3;
    const lineH = oneFourthScaleH;

    const weekendRect = isWeekend
      ? svg`<rect x=${x} y=${settings.scaleHeight} width=${scale.pxPerDay} height=${weekendRectH} class="weekend" />`
      : null;

    // const lastDayLine =
    //   day === scale.totalDays - 1
    //     ? svg`<line
    //     x1=${x + scale.pxPerDay}
    //     x2=${x + scale.pxPerDay}
    //     y1=${lineY}
    //     y2=${settings.scaleHeight}
    //     class="line"
    //   />`
    //     : null;
    //     ${lastDayLine}

    const currDate = currentDay.getDate();
    // const dayLine =
    //   currDate !== 1
    //     ? svg`<rect x=${x} y=${lineY} width="1" height=${lineH}
    //     class="line scale day"
    //     />`
    //     : null;

    ticks.push({
      id: day,
      tpl: svg`
      <g>
        ${weekendRect}
        <rect x=${x} y=${lineY} width="1" height=${lineH}
          class="line scale day"          
        />
        <text 
          id=${day} 
          x=${textX} 
          y=${settings.scaleHeight * 0.75} 
          class="text small">
          ${currDate}
        </text>

   
      </g>`,
    });

    currentDay.setDate(currentDay.getDate() + 1);
  }

  return svg`
  <g id="dayHeader">
    ${YearMonth({ ...settings })}
    
    ${repeat(
      ticks,
      (i) => i.id,
      (i) => i.tpl
    )}   
  </g>`;
}
