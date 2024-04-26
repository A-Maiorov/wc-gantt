import { minDate, maxDate, addDays } from "./utils";
import { customElement, property } from "lit/decorators.js";
import { LitElement, css, html } from "lit";
import {
  ComponentSettings,
  Item,
  WcGanttOptions,
  isActivity,
  isGroup,
  isMilestone,
} from "./types";
import { Gantt, getHeader } from "./gantt/Gantt";
import { controlsCss } from "./gantt/controls.css";
import { linkLineCss } from "./gantt/linkLine.css";
import { barCss } from "./gantt/bar.css";
import { layoutCss } from "./gantt/layout.css";
import { configureAddLink } from "./addLink";
import { configureMoveItem } from "./moveItem";
import { TimeScale } from "./timeScale";
import { configureResizeItem } from "./resizeItem";

declare global {
  interface HTMLElementTagNameMap {
    "wc-gantt": WCGantt;
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
export class WCGantt extends LitElement {
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
        box-shadow: 6px 0 5px -4px #88888878;
        height: fit-content;
        box-sizing: border-box;
        z-index: 1;
        margin: 0;
        padding: 0;
        margin-top: calc(var(--gantt-layout-line-width) / 2);
      }
    `,
    layoutCss,
    controlsCss,
    linkLineCss,
    barCss,
  ];

  connectedCallback(): void {
    super.connectedCallback();
  }

  settings: ComponentSettings;

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

    const data = this.flattenData(this.data);

    let start: Date | null = this.options?.minDate ?? null;
    let end: Date | null = this.options?.maxDate ?? null;
    data.forEach((v) => {
      start = minDate(start, v.start);
      end = maxDate(end, v.end);
    });

    start = start || new Date();
    end = end || new Date();

    const defaultOpts: WcGanttOptions = {
      viewMode: "week",

      showDelay: true,
      showLinks: true,
      showLabels: true,
    };

    this.settings = {
      ...defaultOpts,
      ...this.options,
      start,
      end,
      labelsWidth: 0,
      width: 0,
      height: 0,
      scaleHeight: scaleHeight,
      rowHeight: rowHeight,
      barHeight: barHeight,
      lineWidth,
      data,
      timeScale: undefined,
      ...this.options,
    };
    this.settings.timeScale = new TimeScale(
      addDays(start, -1),
      addDays(end, 7),
      this.settings.viewMode
    );

    this.settings.width =
      this.settings.timeScale.totalDays * this.settings.timeScale.pxPerDay;
    this.settings.height = this.settings.data.length * this.settings.rowHeight;

    this.setupInteractions();
  }

  private flattenData(data: Item[], path?: string, parent?: FlattenedItem) {
    const d: FlattenedItem[] = [];
    let ind = 0;
    for (const i of data) {
      this.validateItem(i);
      const f = i as FlattenedItem;

      f.parents = [];
      if (parent) f.parents = [...(parent.parents ?? []), parent];

      f.path = path ? path + "." + ind : ind.toString();
      f.id ??= f.path;
      d.push(f);
      if (i.nested?.length > 0) {
        d.push(...this.flattenData(i.nested, f.path, f));
      }
      ind++;
    }
    return d;
  }

  private validateItem(i: Item) {
    const res = isGroup(i) || isActivity(i) || isMilestone(i);
    if (!res)
      throw Error("Gantt item is not valid: id:" + i.id + "; text: " + i.text);

    i.start ??= new Date();
    i.end ??= addDays(i.start, 5);

    i.start.setHours(1, 0, 0, 0);
    i.end.setHours(1, 0, 0, 0);

    if (i.start > i.end)
      Error(
        "Gantt item is not valid: id:" +
          i.id +
          "; text: " +
          i.text +
          "; End before start"
      );
  }

  ___lastMovement: number = 0;
  get suppressClick() {
    return new Date().getTime() - this.___lastMovement < 100;
  }

  @property({ type: Object, attribute: false })
  options: WcGanttOptions;

  @property({ type: Array, attribute: false })
  data: Item[];

  private interactionReady = false;

  private async setupInteractions() {
    if (this.interactionReady) return;
    await this.updateComplete;
    configureAddLink.bind(this)();
    configureMoveItem.bind(this)();
    configureResizeItem.bind(this)();
    this.interactionReady = true;
  }

  private __timeScaleEl: HTMLDivElement;
  get timeScaleElement() {
    if (!this.__timeScaleEl)
      this.__timeScaleEl =
        this.renderRoot.querySelector<HTMLDivElement>(".time-scale");

    return this.__timeScaleEl;
  }

  private __ganttEl: HTMLDivElement;
  get ganttElement() {
    if (!this.__ganttEl)
      this.__ganttEl = this.renderRoot.querySelector<HTMLDivElement>(".gantt");

    return this.__ganttEl;
  }

  private scrollReady = false;

  protected updated() {
    if (!this.data || this.data.length === 0 || this.scrollReady) return;
    const el = this.renderRoot
      .querySelector("slot")
      .assignedElements({ flatten: true })[0];
    if (!el) return;

    const config: MutationObserverInit = {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true,
    };

    const getLabelsWidth = () => {
      const w = (el as HTMLElement).clientWidth ?? 0;
      this.settings.labelsWidth = w;
      this.timeScaleElement.style.marginLeft = w + "px";
      const ganttV = this.renderRoot.querySelector<HTMLDivElement>(".gantt-v");
      this.timeScaleElement.style.marginRight =
        ganttV.offsetWidth - ganttV.clientWidth + "px";
      this.requestUpdate();
    };

    const obs = new MutationObserver(getLabelsWidth);
    obs.observe(el, config);
    if (el.shadowRoot) obs.observe(el.shadowRoot, config);
    getLabelsWidth();
    this.scrollReady = true;
  }

  render() {
    if (!this.data || this.data.length === 0) return "No data";
    this.updateSettings();

    const labels = this.settings.showLabels
      ? html`
          <div class="labels">
            ${this.settings.data.map(
              (x) => html`<div class="lbl">${x.text}</div>`
            )}
          </div>
        `
      : html``;

    return html`
      <div class="time-scale" @scroll=${this.onScroll}>
        ${getHeader.bind(this)(this.settings)}
      </div>
      <div class="gantt-v">
        <div class="labels-container">
          <slot>${labels}</slot>
        </div>
        <div class="gantt" @scroll=${this.onScroll}>${Gantt.bind(this)()}</div>
      </div>
    `;
  }

  onScroll(e: Event) {
    if (e.target === this.ganttElement) {
      this.timeScaleElement.scroll({ left: this.ganttElement.scrollLeft });
    }
    if (e.target === this.timeScaleElement) {
      this.ganttElement.scroll({ left: this.timeScaleElement.scrollLeft });
    }
  }
}

export interface FlattenedItem extends Item {
  path: string;
  parents?: FlattenedItem[];
}
