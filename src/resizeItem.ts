import { type WcGantt } from "./WcGantt";
import type { Item } from "./schedule";

import { MsInDAY } from "./utils";

let svg: SVGElement = undefined;

export const resizeItem = (itm: Item, diffMs: number, resizeStart: boolean) => {
  if (!svg) return;

  const diffDays = Math.abs(Math.round(diffMs / MsInDAY));

  if (resizeStart) {
    if (diffMs > 0) {
      itm.duration = Math.max(itm.duration - diffDays, 1);
    } else {
      itm.duration += diffDays;
    }
  } else {
    if (diffMs < 0) {
      itm.duration = Math.max(itm.duration - diffDays, 1);
    } else {
      itm.duration += diffDays;
    }
  }
};
export function configureResizeItem(this: WcGantt) {
  svg = this.shadowRoot.getElementById("gantt") as unknown as SVGElement;
  // timeScale = this.settings.timeScale;
  let moving = false;
  let movingStarted = false;
  //controlGap = getControlGap(this.settings) * 2;
  // let initialBarSvgX = 0;
  let barSvg: SVGSVGElement = undefined;
  //let rectSvg: SVGRectElement = undefined;

  let itemId: string | number | undefined;
  let item: Item;
  let resizeStart = false;
  //let resizeEnd = false;
  let initialX: number = undefined;

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
      //resizeEnd = _resizeEnd;
      return true;
    }
    return false;
  }

  const resetMovement = () => {
    resizeStart = false;
    // resizeEnd = false;
    moving = false;
    barSvg = undefined;
    initialX = undefined;
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
    initialX = e.clientX;
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

    item = this.schedule.itemsIndex.get(itemId);
  };

  const onMouseMove = async (e: MouseEvent) => {
    if (!movingStarted) return;
    cancelEvent(e);
    moving = true;

    const dir = e.movementX > 0 ? 1 : -1;

    const diff = Math.abs(initialX - e.clientX) * this.timeScale.msPerPx * dir;

    if (diff === 0) return;

    if (Math.abs(diff) < MsInDAY) return;

    resizeItem(item, diff, resizeStart);

    // for (const itm of item.parents) {
    //   if (resizeStart && item.start.getTime() === itm.start.getTime())
    //     resizeItem(itm, diff, resizeStart);
    //   if (resizeEnd && item.end.getTime() === itm.end.getTime())
    //     resizeItem(itm, diff, resizeStart);
    // }

    initialX = e.clientX;

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

  this.addEventListener("mouseout", () => {
    resetMovement();
    // console.log(e);
  });
}
