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
      <defs>
        <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>              
          <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
        </linearGradient>       
      </defs>
          
      ${Grid.bind(this)(this.settings)}       
  
      ${getHeader.bind(this)(this.settings)}
      ${linkLines}
      ${Bar.bind(this)(this.settings)}     
    </svg>
  `;
}

function getHeader(this: HTMLElement, settings: ComponentSettings) {
  switch (settings.viewMode) {
    case "day":
      return DayHeader.bind(this)(settings);
    case "month":
      return MonthHeader.bind(this)(settings);
    case "week":
      return WeekHeader.bind(this)(settings);
  }
}
