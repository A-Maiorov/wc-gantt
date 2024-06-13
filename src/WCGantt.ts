import { customElement, property } from "lit/decorators.js";
import { LitElement, html } from "lit";

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
import { styles } from "./WcGantt.css";

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
  static styles = [styles, layoutCss, controlsCss, linkLineCss, barCss];

  settings: CompiledSettings;
  schedule: Schedule;

  timeScale: TimeScale;
  baselineSchedule?: Schedule;

  private getLabelsElement() {
    return this.renderRoot
      .querySelector<HTMLSlotElement>("slot[data-labels]")
      ?.assignedElements({ flatten: true })[0];
  }

  private labelsReady = false;

  protected configureLabelsObserver() {
    if (this.settings.showLabels) {
      const config: MutationObserverInit = {
        childList: true,
        subtree: true,
        attributes: true,
        characterData: true,
      };

      const updateLabelsWidth = () => {
        this.requestUpdate();
      };

      const labelsElement = this.getLabelsElement();
      const obs = new MutationObserver(updateLabelsWidth);
      obs.observe(labelsElement, config);
      if (labelsElement.shadowRoot)
        obs.observe(labelsElement.shadowRoot, config);
    }
    this.labelsReady = true;
  }

  protected firstUpdated(): void {
    this.configureLabelsObserver();
    this.requestUpdate();
  }

  protected updated(): void {
    if (!this.items || this.items.length === 0) return;
    if (this.labelsReady && !this.interactionReady) this.setupInteractions();
  }

  protected willUpdate(_changedProperties: Map<PropertyKey, unknown>): void {
    if (!this.items || this.items.length === 0) return;

    const defaultOpts = new WcGanttSettings();

    const cssSettings = this.getSettingsBasedOnComputedCSS();

    this.settings = {
      ...defaultOpts,
      ...cssSettings,
      labelsWidth: 0,
      width: 0,
      height: 0,
      ...this.options,
    };

    if (
      _changedProperties.has("settings") ||
      _changedProperties.has("items") ||
      _changedProperties.has("dependencies")
    ) {
      this.schedule = new Schedule(
        this.settings.startDate,
        this.settings.dataDate,
        this.items ?? [],
        this.dependencies ?? []
      );

      if (this.baselineItems.length > 0)
        this.baselineSchedule = new Schedule(
          this.settings.startDate,
          this.settings.baselineDate,
          this.baselineItems ?? [],
          this.baselineDependencies ?? []
        );
    }

    const dimensions = this.calculateDimensions();
    this.settings = {
      ...this.settings,
      ...dimensions,
    };

    if (this.settings.showCriticalPath) {
      this.schedule.updateCriticalPath();
    }

    const timeScaleStart = Math.min(
      this.settings.startDate.getTime(),
      this.settings.dataDate.getTime(),
      this.settings.baselineDate.getTime(),
      this.schedule.startDate.getTime(),
      this.baselineSchedule?.startDate.getTime() ?? Number.MAX_VALUE
    );

    this.timeScale = new TimeScale(
      dayjs(timeScaleStart).subtract(5, "days").toDate(),
      dayjs(this.schedule.endDate).add(7, "days").toDate(),
      this.settings.timeScaleMode
    );

    const widthOfData = this.timeScale.dateToPx(this.timeScale.end);
    if (widthOfData > this.settings.width) this.settings.width = widthOfData;
    else {
      this.timeScale.end = this.timeScale.pxToDate(this.settings.width);
    }
  }

  private getSettingsBasedOnComputedCSS() {
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

    return {
      rowHeight,
      scaleHeight,
      barHeight,
      lineWidth,
    };
  }

  private calculateDimensions() {
    const height = this.schedule.items.length * this.settings.rowHeight;

    const r = (this.getLabelsElement() as HTMLElement)?.getBoundingClientRect();

    const w = Math.round(((r?.width ?? 0) + Number.EPSILON) * 10) / 10;
    const labelsWidth = w;

    if (this.timeScaleMarginElement)
      this.timeScaleMarginElement.style.width = labelsWidth + "px";

    const bcr = this.getBoundingClientRect();
    const width = bcr.width - labelsWidth - 30;
    return {
      labelsWidth,
      width,
      height,
    };
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

  @property({ type: Array, attribute: false })
  baselineItems: IItem[];

  @property({ type: Array, attribute: false })
  baselineDependencies: IDependency[];

  private interactionReady = false;

  private async setupInteractions() {
    if (this.interactionReady) return;
    await this.updateComplete;
    configureAddLink.bind(this)();
    configureResizeItem.bind(this)();

    this.configureDependencyClick();

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

  render() {
    if (!this.items || this.items.length === 0) return "No data";

    const labels = this.settings.showLabels
      ? html`
          <slot name="labels" data-labels>
            <div class="labels">
              ${this.schedule.items.map(
                (x) => html`<div class="lbl">${x.name}</div>`
              )}
            </div>
          </slot>
        `
      : html``;

    const timeScale = this.labelsReady
      ? html`<div class="time-scale" @scroll=${this.onScroll}>
          ${getHeader.bind(this)(this.settings)}
        </div>`
      : "";
    const gantt = this.labelsReady
      ? html`<div class="gantt" @scroll=${this.onScroll}>
          ${Gantt.bind(this)()}
        </div>`
      : "";

    return html`
      <div class="time-scale-container">
        <div class="time-scale-margin">
          <slot name="top-left-corner"></slot>
        </div>
        ${timeScale}
      </div>

      <div class="gantt-v">
        <div class="labels-container">${labels}</div>
        ${gantt}
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
