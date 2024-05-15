import { type FlattenedItem, type WCGantt } from "./WcGantt";
import type { TimeScale } from "./timeScale";

import {
  Item,
  //  isGroup
} from "./types";
import { MsInDAY } from "./utils";

let svg: SVGElement = undefined;
let timeScale: TimeScale = undefined;

export const resizeItem = (
  itm: Item,
  diffMs: number,
  resizeStart: boolean,
  clientX?: number
) => {
  if (!svg) return;

  const rect = svg.getBoundingClientRect();

  if (resizeStart) {
    let newStart = new Date(itm.start.getTime() + diffMs);

    if (diffMs > 0) {
      if (diffMs < MsInDAY) {
        diffMs = MsInDAY;
        newStart = new Date(itm.start.getTime() + diffMs);
      }

      const mouseMs = clientX
        ? timeScale.pxToDate(clientX - rect.left).getTime()
        : itm.start.getTime();

      if (itm.start.getTime() > mouseMs) {
        return false;
      }

      // // moving start right = shrink item
      // if (itm.end.getTime() - newStart.getTime() < MsInDAY)
      //   itm.end = new Date(itm.end.getTime() + diffMs);
    } else {
      if (diffMs > MsInDAY * -1) {
        diffMs = MsInDAY * -1;
        newStart = new Date(itm.start.getTime() + diffMs);
      }
      const mouseMs = clientX
        ? timeScale.pxToDate(clientX - rect.left).getTime()
        : itm.start.getTime();
      if (itm.start.getTime() < mouseMs) {
        return false;
      }
    }

    itm.start = newStart;
  } else {
    let newEnd = new Date(itm.end.getTime() + diffMs);

    if (diffMs < 0) {
      if (diffMs > MsInDAY * -1) {
        diffMs = MsInDAY * -1;
        newEnd = new Date(itm.end.getTime() + diffMs);
      }
      const mouseMs = clientX
        ? timeScale.pxToDate(clientX - rect.left).getTime()
        : itm.end.getTime();
      if (itm.end.getTime() < mouseMs) return false;

      // // moving end left = shrink item
      // if (newEnd.getTime() - itm.start.getTime() < MsInDAY)
      //   itm.start = new Date(itm.start.getTime() + diffMs);
    } else {
      if (diffMs < MsInDAY) {
        diffMs = MsInDAY;
        newEnd = new Date(itm.end.getTime() + diffMs);
      }
      const mouseMs = clientX
        ? timeScale.pxToDate(clientX - rect.left).getTime()
        : itm.end.getTime();
      if (itm.end.getTime() > mouseMs) return false;
    }
    itm.end = newEnd;
  }
  return true;
};
export function configureResizeItem(this: WCGantt) {
  svg = this.shadowRoot.getElementById("gantt") as unknown as SVGElement;
  timeScale = this.settings.timeScale;
  let moving = false;
  let movingStarted = false;
  // let initialBarSvgX = 0;
  let barSvg: SVGSVGElement = undefined;
  //let rectSvg: SVGRectElement = undefined;

  let itemId: string | number | undefined;
  let item: FlattenedItem;
  let resizeStart = false;
  let resizeEnd = false;

  function isResizeControl(e: MouseEvent) {
    const p = e.composedPath();
    let _resizeStart = false;
    let _resizeEnd = false;
    for (const x of p) {
      _resizeStart = (x as Element).classList?.contains("ctl-resize-start");
      _resizeEnd = (x as Element).classList?.contains("ctl-resize-end");
      if (_resizeStart || _resizeEnd) break;
    }

    if (_resizeStart || _resizeEnd) {
      resizeStart = _resizeStart;
      resizeEnd = _resizeEnd;
      return true;
    }
    return false;
  }

  const resetMovement = () => {
    resizeStart = false;
    resizeEnd = false;
    moving = false;
    barSvg = undefined;
    // initialBarSvgX = 0;
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
    //e.composedPath()
    if (!isResizeControl(e) || moving) return;
    movingStarted = true;
    //  rectSvg = target;
    barSvg = e
      .composedPath()
      .find((x) =>
        (x as Element).classList.contains("gantt-bar")
      ) as SVGSVGElement;

    itemId = barSvg.dataset.itemId;

    if (!itemId) return;

    cancelEvent(e);

    // initialBarSvgX = barSvg.x.baseVal.value;

    item = this.settings.data.find((x) => x.id.toString() === itemId);
  };

  const onMouseMove = async (e: MouseEvent) => {
    if (!movingStarted) return;
    cancelEvent(e);
    moving = true;

    const diff = e.movementX * this.settings.timeScale.msPerPx;
    if (diff === 0) return;

    const success = resizeItem(item, diff, resizeStart, e.clientX);
    if (success) {
      for (const itm of item.parents) {
        if (resizeStart && item.start.getTime() === itm.start.getTime())
          resizeItem(itm, diff, resizeStart, e.clientX);
        if (resizeEnd && item.end.getTime() === itm.end.getTime())
          resizeItem(itm, diff, resizeStart, e.clientX);
      }
    }

    this.requestUpdate();
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
