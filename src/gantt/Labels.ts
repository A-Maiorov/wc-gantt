import { svg, type TemplateResult } from "lit";
import { repeat } from "lit/directives/repeat.js";
import type { WcGantt } from "../WcGantt";
import type { Item } from "../schedule";
import { getSortedItems } from "./sortItems";

export function Labels(this: WcGantt) {
  const handler = (v: Item) => {
    const ev = new CustomEvent<Item>("item-click", { detail: v });
    this.dispatchEvent(ev);
  };

  let i = 0;
  const _items = getSortedItems(this.settings, this.schedule);
  const items: { id: string; tpl: TemplateResult<2> }[] = [];
  _items
    .filter((x) => !x.hidden)
    .forEach((v) => {
      items.push({
        id: "lbl_" + i,
        tpl: svg`
      <text
        key=${i}
        x="10"
        y=${(i + 0.5) * this.settings.rowHeight}
        class="gantt-label text start"        
        @click=${() => handler(v)}
      >
        ${v.name}
      </text>`,
      });
      i++;
    });

  return svg`
    <g id="labels">
      ${repeat(
        items,
        (it) => it.id,
        (it) => it.tpl
      )}     
    </g>`;
}
