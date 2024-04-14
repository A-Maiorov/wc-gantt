import { type WCGantt } from "./WcGantt";

import { Item, isGroup } from "./types";
import { MsInDAY } from "./utils";

export function configureResizeItem(this: WCGantt) {
  const svg = this.shadowRoot.getElementById("gantt") as unknown as SVGElement;
  let moving = false;
  let movingStarted = false;
  let initialBarSvgX = 0;
  let barSvg: SVGSVGElement = undefined;
  //let rectSvg: SVGRectElement = undefined;

  let itemId: string | number | undefined;
  let item: Item;
  let resizeStart = false;
  let resizeEnd = false;

  function isResizeControl(el: unknown): el is SVGGElement {
    const e = (el as SVGElement).parentElement;
    resizeStart = e.classList.contains("ctl-resize-start");
    resizeEnd = e.classList.contains("ctl-resize-end");
    return e.tagName === "g" && (resizeStart || resizeEnd);
  }

  const resetMovement = () => {
    resizeStart = false;
    resizeEnd = false;
    moving = false;
    barSvg = undefined;
    initialBarSvgX = 0;
    // rectSvg = undefined;
    item = undefined;
    movingStarted = false;

    this.suppressClick;
  };

  const cancelEvent = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  };

  const onMouseDown = (e: MouseEvent) => {
    const target = e.target;
    if (!isResizeControl(target) || moving) return;
    movingStarted = true;
    //  rectSvg = target;
    barSvg = target.parentElement.parentElement as unknown as SVGSVGElement;

    itemId = barSvg.dataset.itemId;

    if (!itemId) return;

    cancelEvent(e);

    initialBarSvgX = barSvg.x.baseVal.value;

    item = this.settings.data.find((x) => x.id.toString() === itemId);
  };

  const onMouseMove = async (e: MouseEvent) => {
    if (!movingStarted) return;
    cancelEvent(e);
    moving = true;
    const diff = e.movementX * this.settings.timeScale.msPerPx;

    if (isGroup(item)) {
      for (const itm of item.nested) {
        resizeItem(itm, diff);
      }
    }
    resizeItem(item, diff);
    // if (resizeStart) item.start = new Date(item.start.getTime() + diff);
    // else item.end = new Date(item.end.getTime() + diff);

    this.requestUpdate();
  };

  const resizeItem = (itm: Item, diffMs: number) => {
    if (resizeStart) {
      const newStart = new Date(itm.start.getTime() + diffMs);
      if (diffMs > 0) {
        // moving start right = shrink item
        if (itm.end.getTime() - newStart.getTime() < MsInDAY)
          itm.end = new Date(itm.end.getTime() + diffMs);
      }
      itm.start = newStart;
    } else {
      const newEnd = new Date(itm.end.getTime() + diffMs);
      if (diffMs < 0) {
        // moving end left = shrink item
        if (newEnd.getTime() - itm.start.getTime() < MsInDAY)
          itm.start = new Date(itm.start.getTime() + diffMs);
      }
      itm.end = newEnd;
    }
  };

  const onMouseUp = (e: MouseEvent) => {
    if (!movingStarted) return;
    if (moving) {
      this.___lastMovement = new Date().getTime();

      const ev = new CustomEvent<Item>("item-resized", {
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

  this.addEventListener("mouseout", (e) => {
    resetMovement();
    // console.log(e);
  });
}
