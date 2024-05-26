import { svg } from "lit";
import type { WcGantt } from "../WcGantt";

export function Layout(this: WcGantt) {
  return svg`
    <g id="layout">
    
      <line
        x1=${0}
        x2=${this.settings.width}
        y1=${0}
        y2=${0}
        class="line"
        
      />
  
    </g>
  `;
}
