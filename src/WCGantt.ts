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
import { Gantt } from "./gantt";
import { controlsCss } from "./gantt/controls.css";
import { linkLineCss } from "./gantt/linkLine.css";
import { barCss } from "./gantt/bar.css";
import { layoutCss } from "./gantt/layout.css";
import { configureAddLink } from "./addLink";

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
 */
@customElement("wc-gantt")
export class WCGantt extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
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

  #settings: ComponentSettings;

  private updateSettings() {
    const thickWidth = parseFloat(
      getComputedStyle(this).getPropertyValue(
        "--gantt-layout-thick-line-stroke-width"
      )
    );

    let start: Date | null = null;
    let end: Date | null = null;
    this.data.forEach((v) => {
      start = minDate(start, v.start);
      end = maxDate(end, v.end);
    });
    start = start || new Date();
    end = end || new Date();

    this.#settings = {
      viewMode: "week",
      barHeight: 16,
      rowHeight: 40,
      offsetY: 60,
      ...this.options,
      thickWidth,
      start,
      end,
      data: this.flattenData(this.data),
    };
  }

  private flattenData(data: Item[], path?: string) {
    const d: FlattenedItem[] = [];
    let ind = 0;
    for (const i of data) {
      this.validateItem(i);
      const f = i as FlattenedItem;
      f.path = path ? path + "." + ind : ind.toString();
      f.id ??= f.path;
      d.push(f);
      if (i.nested?.length > 0) d.push(...this.flattenData(i.nested, f.path));

      ind++;
    }
    return d;
  }

  private validateItem(i: Item) {
    const res = isGroup(i) || isActivity(i) || isMilestone(i);
    if (!res)
      throw Error("Gantt item is not valid: id:" + i.id + "; text: " + i.text);

    i.start ??= new Date();
    i.end ??= addDays(i.start, 1);

    if (i.start > i.end)
      Error(
        "Gantt item is not valid: id:" +
          i.id +
          "; text: " +
          i.text +
          "; End before start"
      );
  }

  @property({ type: Object, attribute: false })
  options: WcGanttOptions;

  @property({ type: Array, attribute: false })
  data: Item[];

  protected firstUpdated() {
    const svg = this.shadowRoot.getElementById(
      "gantt"
    ) as unknown as SVGElement;
    configureAddLink.bind(this)(svg, this.#settings);
  }

  render() {
    this.updateSettings();
    return html`${Gantt.bind(this)(this.#settings)}`;
  }
}

interface FlattenedItem extends Item {
  path: string;
  nested: undefined;
}
