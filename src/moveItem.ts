import { type FlattenedItem, type WCGantt } from "./WcGantt";
import { resizeItem } from "./resizeItem";

import { Item, isGroup } from "./types";
import { MsInDAY } from "./utils";

export function configureMoveItem(this: WCGantt) {
  const svg = this.shadowRoot.getElementById("gantt") as unknown as SVGElement;
  let moving = false;
  let movingStarted = false;
  let initialX: number = undefined;

  let barSvg: SVGSVGElement = undefined;

  let itemId: string | number | undefined;
  let item: FlattenedItem;

  function isBarRect(el: unknown): el is SVGRectElement {
    const e = el as SVGElement;
    return (
      e.tagName === "rect" &&
      (e.classList.contains("back") ||
        e.classList.contains("front") ||
        e.classList.contains("bar-border"))
    );
  }

  const resetMovement = () => {
    moving = false;
    barSvg = undefined;
    item = undefined;
    movingStarted = false;
    initialX = undefined;

    this.suppressClick;
  };

  const cancelEvent = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  };

  const onMouseDown = (e: MouseEvent) => {
    //const rect = svg.getBoundingClientRect();
    // const mouseMs = this.settings.timeScale.pxToDate(e.clientX - rect.left);

    const target = e.target;
    if (!isBarRect(target) || moving) return;

    initialX = e.clientX;

    movingStarted = true;

    barSvg = target.parentElement as unknown as SVGSVGElement;

    itemId = barSvg.dataset.itemId;
    if (!itemId) return;
    cancelEvent(e);

    item = this.settings.data.find((x) => x.id.toString() === itemId);
  };

  const pxPerDay = this.settings.timeScale.pxPerDay;
  const onMouseMove = async (e: MouseEvent) => {
    if (movingStarted === false || initialX === undefined) {
      return;
    }

    cancelEvent(e);
    moving = true;

    const dir = e.movementX > 0 ? 1 : -1;

    if (Math.abs(initialX - e.clientX) < pxPerDay) return;

    if (isGroup(item)) {
      for (const itm of item.nested) {
        itm.start = new Date(itm.start.getTime() + MsInDAY * dir);
        itm.end = new Date(itm.end.getTime() + MsInDAY * dir);
      }
    }

    for (const itm of item.parents) {
      if (item.start.getTime() === itm.start.getTime())
        resizeItem(itm, MsInDAY * dir, true);
      else if (item.end.getTime() === itm.end.getTime())
        resizeItem(itm, MsInDAY * dir, false);
    }

    item.start = new Date(item.start.getTime() + MsInDAY * dir);
    item.end = new Date(item.end.getTime() + MsInDAY * dir);

    initialX += pxPerDay * dir;
    this.requestUpdate();
  };

  const onMouseUp = (e: MouseEvent) => {
    if (!movingStarted) return;
    if (moving) {
      this.___lastMovement = new Date().getTime();

      const ev = new CustomEvent<Item>("item-moved", {
        detail: item,
      });
      this.dispatchEvent(ev);
    }

    resetMovement();
    cancelEvent(e);
  };

  svg.addEventListener("mousedown", onMouseDown);

  svg.addEventListener("mousemove", onMouseMove);

  svg.addEventListener("mouseup", onMouseUp);

  this.addEventListener("mouseout", () => {
    resetMovement();
    // console.log(e);
  });
}
