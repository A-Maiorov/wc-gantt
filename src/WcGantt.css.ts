import { css } from "lit";

export const styles = css`
  svg {
    display: block;
  }
  :host {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-wrap: nowrap;
    white-space: nowrap;
  }
  .gantt {
    height: fit-content;
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-width: none;
  }
  .gantt-v {
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    height: 100%;
  }

  .time-scale {
    width: auto;
    overflow: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
  }

  .time-scale {
    transform: rotateX(180deg);
    overflow-x: auto;
  }
  .time-scale > svg {
    transform: rotateX(180deg);
  }

  .labels-container {
    box-shadow: 1px 0px 6px 1px #88888878;
    clip-path: inset(0px -20px 0px 0px);

    height: fit-content;
    box-sizing: border-box;
    z-index: 1;
    margin: 0;
    padding: 0;
    margin-top: calc(var(--gantt-layout-line-width) / 2);
  }
  .time-scale-container {
    display: flex;
  }
  .time-scale-margin {
    box-shadow: 1px 0px 6px 1px #88888878;
    clip-path: inset(0px -20px 0px 0px);
    flex-shrink: 0;
    z-index: 1;
    overflow: hidden;
  }
`;
