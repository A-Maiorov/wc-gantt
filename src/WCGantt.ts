import { customElement, property } from "lit/decorators.js";
import { LitElement, css, html } from "lit";

import { Gantt, getHeader } from "./gantt/Gantt";
import { controlsCss } from "./gantt/controls.css";
import { linkLineCss } from "./gantt/linkLine.css";
import { barCss } from "./gantt/bar.css";
import { layoutCss } from "./gantt/layout.css";
import { configureAddLink } from "./addLink";

import { configureResizeItem } from "./resizeItem";
// import { findLongestPath } from "./criticalPath";
import { WcGanttSettings, type CompiledSettings } from "./settings";

import {
  Schedule,
  type DependencyType,
  type IDependency,
  type IItem,
} from "./schedule";
import { TimeScale } from "./timeScale";
import dayjs from "dayjs";

export { BeforeLinkAddedEvArgs } from "./addLink";
export { WcGanttSettings } from "./settings";
export {
  Item,
  DependencyType,
  IDependency,
  IItem,
  Schedule,
  ItemType,
} from "./schedule";

declare global {
  interface HTMLElementTagNameMap {
    "wc-gantt": WcGantt;
  }
}

/**
 * @summary Gantt chart web component
 * @extends {LitElement}
 * @property {Item[]} data Reactive property, not reflected to attribute
 * @property {WcGanttOptions} options Reactive property, not reflected to attribute
 * @fires before-link-added CustomEvent : LinkAddedEvArgs
 * @fires item-click CustomEvent : Item
 * @fires item-moved CustomEvent : Item
 */
@customElement("wc-gantt")
export class WcGantt extends LitElement {
  static styles = [
    css`
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
        overflow-y: scroll;
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
    `,
    layoutCss,
    controlsCss,
    linkLineCss,
    barCss,
  ];

  settings: CompiledSettings;
  schedule: Schedule;

  timeScale: TimeScale;

  private updateSettings() {
    const rowHeight = parseFloat(
      getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")
    );
    const scaleHeight = parseFloat(
      getComputedStyle(this).getPropertyValue(
        "--gantt-layout-time-scale-height"
      )
    );
    const barHeight = parseFloat(
      getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")
    );
    const lineWidth = parseFloat(
      getComputedStyle(this).getPropertyValue("--gantt-layout-line-width")
    );

    const defaultOpts = new WcGanttSettings();

    this.settings = {
      ...defaultOpts,
      scaleHeight,
      rowHeight,
      barHeight,
      lineWidth,
      labelsWidth: 0,
      width: 0,
      height: 0,
      ...this.options,
    };

    this.schedule = new Schedule(
      this.settings.startDate,
      this.settings.dataDate,
      this.items ?? [],
      this.dependencies ?? []
    );
    this.updateLabelsWidth();
    this.updateWidth();
    this.settings.height = this.schedule.items.length * this.settings.rowHeight;

    this.timeScale = new TimeScale(
      dayjs(this.settings.startDate).subtract(5, "days").toDate(),
      this.schedule.endDate,
      this.settings.timeScaleMode
    );
    this.updateTimeScaleEndDate();
    this.setupInteractions();
  }

  private __widthUpdated = false;

  private updateWidth() {
    const bcr = this.getBoundingClientRect();

    this.settings.width =
      bcr.width -
      this.settings.labelsWidth -
      (bcr.right - bcr.width) -
      bcr.left;

    if (this.timeScale) {
      const dataBasedWidth =
        (this.schedule.durationDays + this.__timeScaleEndGapDays) *
        this.timeScale.pxPerDay;
      if (dataBasedWidth > this.settings.width)
        this.settings.width = dataBasedWidth;
    }
    this.__widthUpdated = true;
  }
  private __timeScaleEndGapDays = 7;
  private updateTimeScaleEndDate() {
    const maxDateBasedOnWidth = new TimeScale(
      this.settings.startDate,
      this.settings.startDate,
      this.settings.timeScaleMode
    )
      .pxToDate(this.settings.width)
      .setHours(0, 0, 0, 0);

    const maxDateBasedOnData = dayjs(this.schedule.endDate)
      .add(7, "days")
      .toDate()
      .getTime();

    this.timeScale.end = new Date(
      new Date(Math.max(maxDateBasedOnData, maxDateBasedOnWidth))
    );
  }

  ___lastMovement: number = 0;
  get suppressClick() {
    return new Date().getTime() - this.___lastMovement < 100;
  }

  @property({ type: Object, attribute: false })
  options: WcGanttSettings;

  @property({ type: Array, attribute: false })
  items: IItem[];

  @property({ type: Array, attribute: false })
  dependencies: IDependency[];

  private interactionReady = false;

  private async setupInteractions() {
    if (this.interactionReady) return;
    await this.updateComplete;
    configureAddLink.bind(this)();
    configureResizeItem.bind(this)();

    this.interactionReady = true;
  }

  private configureDependencyClick() {
    const svg = this.shadowRoot.getElementById(
      "gantt"
    ) as unknown as SVGElement;
    const links = svg.querySelectorAll<HTMLElement>(".link");

    const handler = (e: Event) => {
      const linkEl = e.currentTarget as HTMLElement;
      const dep = {
        predecessor: linkEl.dataset.source,
        successor: linkEl.dataset.target,
        type: linkEl.dataset.linkType as DependencyType,
      };

      const ev = new CustomEvent("dependency-click", { detail: dep });
      this.dispatchEvent(ev);
    };

    for (const l of links) {
      l.onclick = handler;
    }
  }

  private __timeScaleEl: HTMLDivElement;
  get timeScaleElement() {
    if (!this.__timeScaleEl)
      this.__timeScaleEl =
        this.renderRoot.querySelector<HTMLDivElement>(".time-scale");

    return this.__timeScaleEl;
  }

  private __timeScaleMarginEl: HTMLDivElement;
  get timeScaleMarginElement() {
    if (!this.__timeScaleMarginEl)
      this.__timeScaleMarginEl =
        this.renderRoot.querySelector<HTMLDivElement>(".time-scale-margin");

    return this.__timeScaleMarginEl;
  }

  private __ganttEl: HTMLDivElement;
  get ganttElement() {
    if (!this.__ganttEl)
      this.__ganttEl = this.renderRoot.querySelector<HTMLDivElement>(".gantt");

    return this.__ganttEl;
  }

  private scrollReady = false;

  protected updated() {
    this.__widthUpdated = false;

    if (!this.items || this.items.length === 0 || this.scrollReady) return;

    const el = this.renderRoot
      .querySelector<HTMLSlotElement>("slot[data-labels]")
      .assignedElements({ flatten: true })[0];
    if (!el) return;

    const config: MutationObserverInit = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    };

    const updateLabelsWidth = () => {
      this.updateLabelsWidth();
      this.updateWidth();
      this.requestUpdate();
    };

    const obs = new MutationObserver(updateLabelsWidth);
    obs.observe(el, config);
    if (el.shadowRoot) obs.observe(el.shadowRoot, config);
    updateLabelsWidth();

    this.scrollReady = true;
  }
  protected updateLabelsWidth() {
    const el = this.renderRoot
      .querySelector<HTMLSlotElement>("slot[data-labels]")
      ?.assignedElements({ flatten: true })[0];
    if (!el) return;

    const r = (el as HTMLElement).getBoundingClientRect();

    const w = Math.round((r.width + Number.EPSILON) * 10) / 10;
    this.settings.labelsWidth = w;
    this.updateWidth();
    this.updateTimeScaleEndDate();

    const ganttV = this.renderRoot.querySelector<HTMLDivElement>(".gantt-v");

    this.timeScaleMarginElement.style.width = w + "px";

    this.timeScaleElement.style.marginRight =
      ganttV.offsetWidth - ganttV.clientWidth + "px";
  }

  protected willUpdate(_changedProperties: Map<PropertyKey, unknown>): void {
    if (
      _changedProperties.has("items") ||
      _changedProperties.has("dependencies") ||
      _changedProperties.has("options")
    )
      this.updateSettings();

    if (!this.settings) return;

    if (this.settings.showCriticalPath) {
      this.schedule.updateCriticalPath();
    }
    this.updateTimeScaleEndDate();

    this.updateComplete.then(() => {
      this.configureDependencyClick();
    });
  }

  render() {
    if (!this.items || this.items.length === 0) return "No data";

    const labels = this.settings.showLabels
      ? html`
          <div class="labels">
            ${this.schedule.items.map(
              (x) => html`<div class="lbl">${x.name}</div>`
            )}
          </div>
        `
      : html``;

    if (!this.__widthUpdated) {
      this.updateWidth();
      this.updateTimeScaleEndDate();
    }

    return html`
      <div class="time-scale-container">
        <div class="time-scale-margin">
          <slot name="top-left-corner"></slot>
        </div>
        <div class="time-scale" @scroll=${this.onScroll}>
          ${getHeader.bind(this)(this.settings)}
        </div>
      </div>

      <div class="gantt-v">
        <div class="labels-container">
          <slot name="labels" data-labels>${labels}</slot>
        </div>
        <div class="gantt" @scroll=${this.onScroll}>${Gantt.bind(this)()}</div>
      </div>
    `;
  }

  onScroll(e: Event) {
    if (e.target === this.ganttElement) {
      this.timeScaleElement.scroll({
        left: this.ganttElement.scrollLeft,
      });
    }
    if (e.target === this.timeScaleElement) {
      this.ganttElement.scroll({
        left: this.timeScaleElement.scrollLeft,
      });
    }
  }
}
