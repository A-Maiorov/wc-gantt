import { svg } from "lit";
import { ComponentSettings } from "../types";

export function Layout(this: HTMLElement, settings: ComponentSettings) {
  return svg`
    <g id="layout">
    
      <line
        x1=${0}
        x2=${settings.width}
        y1=${0}
        y2=${0}
        class="line"
        
      />
  
    </g>
  `;
}
