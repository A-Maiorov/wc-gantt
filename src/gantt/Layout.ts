import { svg } from "lit";
import { ComponentSettings } from "../types";

export function Layout(this: HTMLElement, settings: ComponentSettings) {
  const x0 = 0;
  return svg`
    <g id="layout">
    
      <line
        x1=${0}
        x2=${settings.width}
        y1=${settings.scaleHeight}
        y2=${settings.scaleHeight}
        class="line"
        
      />
  
    </g>
  `;
}
