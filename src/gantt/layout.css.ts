import { css } from "lit";
export const layoutCss = css`
  :host {
    --gantt-chart-bg-color: #fff;
    --gantt-layout-line-stroke: #eee;
    --gantt-layout-line-stroke-width: 1px;
    --gantt-layout-thick-line-stroke-width: 1.4px;
    --gantt-layout-text-fill: #222;
    --gantt-layout-font-size: 14px;
    --gantt-layout-small-text-fill: #999;
    --gantt-layout-small-font-size: 12px;
    --gantt-layout-tiny-text-fill: #999;
    --gantt-layout-tiny-font-size: 8px;
    --gantt-day-header-weekend-fill: rgba(252, 248, 227, 0.6);
  }

  .box {
    fill: var(--gantt-chart-bg-color, #fff);
  }

  .line {
    stroke: var(--gantt-layout-line-stroke, #eee);
    stroke-width: var(--gantt-layout-line-stroke-width, 1px);
  }

  .line.thick {
    stroke-width: var(--gantt-layout-thick-line-stroke-width, 1.4px);
  }

  .text {
    text-anchor: middle;
    fill: var(--gantt-layout-text-fill, #222);
    dominant-baseline: central;
    font-size: var(--gantt-layout-font-size, 14px);
  }

  .text.start {
    text-anchor: start;
  }
  .text.end {
    text-anchor: end;
  }

  .text.small {
    fill: var(--gantt-layout-small-text-fill, #999);
    font-size: var(--gantt-layout-small-font-size, 12px);
  }
  .text.tiny {
    fill: var(--gantt-layout-tiny-text-fill, #999);
    font-size: var(--gantt-layout-tiny-font-size, 8px);
  }

  .weekend {
    fill: var(--gantt-day-header-weekend-fill, rgba(252, 248, 227, 0.6));
  }

  .gantt-label {
    cursor: pointer;
  }
  .gantt-label:hover {
    fill: #1582dc;
  }
`;
