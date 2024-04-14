import { svg } from "lit";
import { ComponentSettings, Item } from "../types";
import { repeat } from "lit/directives/repeat.js";

export function Labels(
  this: HTMLElement,
  { data, rowHeight, scaleHeight: offsetY }: ComponentSettings
) {
  const handler = (v: Item) => {
    const ev = new CustomEvent<Item>("item-click", { detail: v });
    this.dispatchEvent(ev);
  };
  const items = data.map((v, i) => ({
    id: "lbl_" + i,
    tpl: svg`
      <text
        key=${i}
        x="10"
        y=${(i + 0.5) * rowHeight + offsetY}
        class="gantt-label text start"        
        @click=${() => handler(v)}
      >
        ${v.text}
      </text>`,
  }));

  return svg`
    <g id="labels">
      ${repeat(
        items,
        (i) => i.id,
        (i) => i.tpl
      )}     
    </g>`;
}
