// import { MsInDAY } from "../utils";
// import { Layout } from "./Layout";
import { DayHeader } from "./DayHeader";
import { WeekHeader } from "./WeekHeader";
import { MonthHeader } from "./MonthHeader";
import { Grid } from "./Grid";
//import { Labels } from "./Labels";
import { LinkLines } from "./LinkLines";
import { Bar } from "./Bar";
import { svg } from "lit";
import { ComponentSettings } from "../types";
import { WCGantt } from "../WcGantt";

export function Gantt(this: WCGantt) {
  const box = `0 0 ${this.settings.width} ${this.settings.height}`;

  const linkLines = this.settings.showLinks
    ? LinkLines.bind(this)(this.settings)
    : null;

  return svg`
    <svg id="gantt" 
      width=${this.settings.width} 
      height=${this.settings.height} 
      viewBox=${box}>
    
     

      ${Grid.bind(this)(this.settings)}           
      ${linkLines}
      ${Bar.bind(this)(this.settings)}     
     
    </svg>
  `;
}
// <defs>
// <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
//   <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>
//   <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
// </linearGradient>
// </defs>
export function getHeader(this: WCGantt, settings: ComponentSettings) {
  let res;
  switch (settings.viewMode) {
    case "day":
      res = DayHeader.bind(this)(settings);
      break;
    case "month":
      res = MonthHeader.bind(this)(settings);
      break;
    case "week":
      res = WeekHeader.bind(this)(settings);
      break;
  }

  const box = `0 0 ${this.settings.width} ${this.settings.scaleHeight}`;

  return svg`
   <svg id="gantt-h" 
      width=${this.settings.width} 
      height=${this.settings.scaleHeight} 
      viewBox=${box}>
      <defs>
        <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>              
          <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
        </linearGradient>       
      </defs>
      ${res}
    </svg>
    `;
}
