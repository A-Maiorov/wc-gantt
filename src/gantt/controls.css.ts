import { css } from "lit";
export const controlsCss = css`
  :host {
    --gantt-active-ctl-fill: #ffbf5e;
    --gantt-active-ctl-stroke: #ffa011;
    --gantt-inactive-ctl-fill: #f0f0f0;
    --gantt-inactive-ctl-stroke: #929292;
    --gantt-ctl-stroke-width: 1px;
  }

  .gantt-bar:hover .gantt-ctrl-start,
  .gantt-bar:hover .gantt-ctrl-finish {
    opacity: 1;
  }

  .gantt-ctrl-start[active],
  .gantt-ctrl-finish[active],
  .gantt-ctrl-start:hover,
  .gantt-ctrl-finish:hover {
    opacity: 1;
    fill: var(--gantt-active-ctl-fill, #ffbf5e);
    stroke: var(--gantt-active-ctl-stroke, #ffa011);
  }

  .gantt-ctrl-start,
  .gantt-ctrl-finish {
    opacity: 0;
    position: relative;
    display: block;
    fill: var(--gantt-inactive-ctl-fill, #f0f0f0);
    stroke: var(--gantt-inactive-ctl-stroke, #929292);
    stroke-width: var(--gantt-ctl-stroke-width, 1px);
  }
`;
