import { TemplateResult, svg } from "lit";
import { repeat } from "lit/directives/repeat.js";
import { ComponentSettings } from "../types";

export function Grid(this: HTMLElement, settings: ComponentSettings) {
  const items: { id: number; tpl: TemplateResult }[] = [];

  for (let i = 0; i < settings.data.length; i++) {
    const y = (i + 1) * settings.rowHeight + settings.scaleHeight;
    items.push({
      id: i,
      tpl: svg`
        <line key=${i} x1="0" x2=${settings.width} y1=${y} y2=${y} class="line"/>`,
    });
  }

  return svg`
    <line
        x1=${0}
        x2=${settings.width}
        y1=${settings.scaleHeight}
        y2=${settings.scaleHeight}
        class="line"
        
      />
    <g id="grid">
      ${repeat(
        items,
        (i) => i.id,
        (i) => i.tpl
      )}     
      
    </g>
  `;
}
