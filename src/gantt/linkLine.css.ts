import { css } from "lit";
export const linkLineCss = css`
  :host {
    --gantt-link-line-hover-stroke-width: 2.5;
    --gantt-link-line-stroke: #ffa011;
    --gantt-link-line-stroke-width: 1.5px;
  }
  .link:hover .link-line {
    stroke-width: var(--gantt-link-line-hover-stroke-width, 2.5);
    cursor: pointer;
  }
  .link:hover .link-line,
  .link:hover .line-arrow {
    stroke-width: var(--gantt-link-line-hover-stroke-width, 2.5);
    stroke: var(--gantt-link-line-stroke, #ffa011);
    cursor: pointer;
  }
  .link.crit:hover .line-arrow {
    stroke: var(--gantt-critical-path-color);
  }

  .link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    fill: none;
    stroke-width: var(--gantt-link-line-stroke-width, 1.5px);
  }
  .line-arrow {
    stroke: unset;
    fill: var(--gantt-link-line-stroke, #ffa011);
  }

  .link.crit .link-line {
    stroke: var(--gantt-critical-path-color);
  }

  .link.crit .line-arrow {
    fill: var(--gantt-critical-path-color);
  }

  .add-link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    stroke-width: 2;
    stroke-dasharray: 5;
  }
`;
