import { css } from "lit";
export const barCss = css`
  :host {
    --gantt-milestone-color: #d33daf;
    --gantt-bar-back-fill: #83d78c;
    --gantt-bar-front-fill: #46ad51;
    --gantt-bar-group-back-fill: #3db9d3;
    --gantt-bar-group-front-fill: #299cb4;
    --gantt-bar-today-line-stroke: #f04134;
    --gantt-bar-today-line-stroke-width: 1px;
    --gantt-bar-data-line-stroke: #06b9f1;
    --gantt-bar-data-line-stroke-width: 1px;
    --gantt-bar-inner-border-color: var(--gantt-chart-bg-color);
    --gantt-bar-outer-border-color: var(--gantt-chart-bg-color);
    --gantt-critical-path-color: #2d22f5;

    --gantt-bar-front-delayed-fill: #0f751a;
    --gantt-delay-fill-color: #46ad51;
    --gantt-delayed-border-color: #0f751a;

    --gantt-baseline-color: #bcbcbc;
    --gantt-baseline-dark: #9d9d9d;
  }

  .gantt-bar {
    cursor: pointer;
  }
  .milestone {
    fill: var(--gantt-milestone-color, #d33daf);
    stroke: unset;
  }
  .milestone.crit {
    stroke: var(--gantt-bar-inner-border-color);
  }

  .bar-outer-border {
    stroke: var(--gantt-bar-outer-border-color);
    stroke-width: 1px;
    fill: transparent;
  }

  .bar-inner-border {
    stroke: var(--gantt-bar-inner-border-color);
    stroke-width: 1px;
    fill: transparent;
  }

  .gantt-bar .back {
    fill: var(--gantt-bar-back-fill, #65c16f);
  }
  .gantt-bar[warning] .back {
    fill: var(--gantt-bar-warning-back-fill, #faad14);
  }
  .gantt-bar[danger] .back {
    fill: var(--gantt-bar-danger-back-fill, #f5222d);
  }

  .gantt-bar .delayed {
    --gantt-bar-inner-border-color: var(--gantt-delayed-border-color);
  }

  .gantt-bar .front {
    fill: var(--gantt-bar-front-fill, #46ad51);
  }

  .gantt-bar .delay {
    fill: var(--gantt-delay-fill-color, #46ad51);
  }

  .gantt-bar .front.delayed {
    fill: var(--gantt-bar-front-delayed-fill, #46ad51);
  }

  .gantt-bar.group .back {
    fill: var(--gantt-bar-group-back-fill, #3db9d3);
  }
  .gantt-bar.group .front {
    fill: var(--gantt-bar-group-front-fill, #299cb4);
  }

  .today-line {
    stroke: var(--gantt-bar-today-line-stroke, #f04134);
    stroke-width: var(--gantt-bar-today-line-stroke-width, 1px);
  }
  .today-circle {
    fill: var(--gantt-bar-today-line-stroke, #f04134);
  }
  .data-date-line {
    stroke: var(--gantt-bar-data-line-stroke);
    stroke-width: var(--gantt-bar-data-line-stroke-width, 1px);
  }
  .data-date-circle {
    fill: var(--gantt-bar-data-line-stroke);
  }

  .bar-inner-border.crit.delayed,
  .crit {
    --gantt-bar-inner-border-color: var(--gantt-critical-path-color);
  }
  .baseline {
    --gantt-milestone-color: var(--gantt-baseline-color);
    --gantt-bar-back-fill: var(--gantt-baseline-color);

    --gantt-bar-front-fill: var(--gantt-baseline-dark);
    --gantt-bar-group-back-fill: var(--gantt-baseline-color);
    --gantt-bar-group-front-fill: var(--gantt-baseline-dark);
    --gantt-bar-today-line-stroke: var(--gantt-baseline-dark);
    --gantt-bar-data-line-stroke: var(--gantt-baseline-dark);
  }
`;
