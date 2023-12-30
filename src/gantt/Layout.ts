import { svg } from "lit";

export type LayoutOptions = {
  width: number;
  height: number;
  offsetY: number;
  thickWidth: number;
  maxTextWidth: number;
};

export function Layout(
  this: HTMLElement,
  { width, height, offsetY, thickWidth, maxTextWidth }: LayoutOptions
) {
  const x0 = thickWidth / 2;
  const W = width - thickWidth;
  const H = height - thickWidth;
  return svg`
    <g id="layout">
      <rect x=${x0} y=${x0} width=${W} height=${H} 
      class="line thick box" />
      <line
        x1=${0}
        x2=${width}
        y1=${offsetY - x0}
        y2=${offsetY - x0}
        class="line thick"
        
      />
      <line
        x1=${maxTextWidth}
        x2=${width}
        y1=${offsetY / 2}
        y2=${offsetY / 2}
        class="line"
      />
    </g>
  `;
}
