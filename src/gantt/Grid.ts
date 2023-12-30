import { TemplateResult, svg } from "lit";
import { repeat } from "lit/directives/repeat.js";

export type GridOptions = {
  length: number;
  width: number;
  height: number;
  offsetY: number;
  rowHeight: number;
  maxTextWidth: number;
};
export function Grid(
  this: HTMLElement,
  { length, width, height, offsetY, rowHeight, maxTextWidth }: GridOptions
) {
  const items: { id: number; tpl: TemplateResult }[] = [];

  for (let i = 0; i < length; i++) {
    const y = (i + 1) * rowHeight + offsetY;
    items.push({
      id: i,
      tpl: svg`
        <line key=${i} x1="0" x2=${width} y1=${y} y2=${y} class="line"/>`,
    });
  }

  return svg`
    <g id="grid">
      ${repeat(
        items,
        (i) => i.id,
        (i) => i.tpl
      )}     

      <line
        x1=${maxTextWidth}
        x2=${maxTextWidth}
        y1="0"
        y2=${height}
        class="line thick"
      />
    </g>
  `;
}
