import { minDate, maxDate, addDays, MsInDAY } from "./utils";
import { customElement, property } from "lit/decorators.js";
import { LitElement, css, html } from "lit";
import {
  ComponentSettings,
  Item,
  WcGanttOptions,
  isActivity,
  isGroup,
  isMilestone,
  type Group,
} from "./types";
import { Gantt } from "./gantt/Gantt";
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
      :host {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      .gantt {
        overflow: auto;
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

    const data = this.flattenData(this.data);

    let start: Date | null = this.options.minDate ?? null;
    let end: Date | null = this.options.maxDate ?? null;
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
      width: 0,
      height: 0,
      scaleHeight: scaleHeight,
      rowHeight: rowHeight,
      barHeight: barHeight,
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
    this.settings.height =
      this.settings.data.length * this.settings.rowHeight +
      this.settings.scaleHeight;

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
      ${labels}
      <div class="gantt">${Gantt.bind(this)()}</div>
    `;
  }
}

export interface FlattenedItem extends Item {
  path: string;
  parents?: FlattenedItem[];
}
