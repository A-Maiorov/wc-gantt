import { getDates } from "../utils";
import { YearMonth } from "./YearMonth";
import { svg } from "lit";
//import { Styles } from "./styles";
import { repeat } from "lit/directives/repeat.js";

export type DayHeaderOptions = {
  //styles: Styles;
  unit: number;
  minTime: number;
  maxTime: number;
  height: number;
  offsetY: number;
  maxTextWidth: number;
};
export function DayHeader({
  //  styles,
  unit,
  minTime,
  maxTime,
  height,
  offsetY,
  maxTextWidth,
}: DayHeaderOptions) {
  const dates = getDates(minTime, maxTime);
  const ticks = [];
  const x0 = maxTextWidth;
  const y0 = offsetY / 2;
  const RH = height - y0;
  const len = dates.length - 1;

  for (let i = 0; i < len; i++) {
    const cur = new Date(dates[i]);
    const day = cur.getDay();
    const x = x0 + (dates[i] - minTime) / unit;
    const t = (dates[i + 1] - dates[i]) / unit;
    const id = "hd_" + day + "_" + i;
    const currDate = cur.getDate();
    let textX = x + t / 2;

    ticks.push({
      id,
      tpl: svg`
      <g>
        ${
          day === 0 || day === 6
            ? svg`<rect id="xyz" x=${x} y=${y0} width=${t} height=${RH} class="weekend" />`
            : null
        }
        <line x1=${x} x2=${x} y1=${y0} y2=${offsetY} class="line"/>
        <text x=${textX} y=${offsetY * 0.75} class="text small">
          ${currDate}
        </text>
        ${
          i === len - 1
            ? svg`<line
              x1=${x + t}
              x2=${x + t}
              y1=${y0}
              y2=${offsetY}
              class="line"              
            />`
            : null
        }
      </g>`,
    });
  }
  return svg`
    <g id="dayHeader">
      ${YearMonth({
        //      styles,
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
    </g>`;
}
