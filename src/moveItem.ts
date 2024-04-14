import { type WCGantt } from "./WcGantt";

import { Item, isGroup } from "./types";

export function configureMoveItem(this: WCGantt) {
  const svg = this.shadowRoot.getElementById("gantt") as unknown as SVGElement;
  let moving = false;
  let movingStarted = false;
  let initialBarSvgX = 0;
  let barSvg: SVGSVGElement = undefined;
  let rectSvg: SVGRectElement = undefined;

  let itemId: string | number | undefined;
  let item: Item;

  function isBarRect(el: unknown): el is SVGRectElement {
    const e = el as SVGElement;
    return (
      e.tagName === "rect" &&
      (e.classList.contains("back") || e.classList.contains("front"))
    );
  }

  const resetMovement = () => {
    moving = false;
    barSvg = undefined;
    initialBarSvgX = 0;
    rectSvg = undefined;
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
    if (!isBarRect(target) || moving) return;
    movingStarted = true;
    rectSvg = target;
    barSvg = target.parentElement as unknown as SVGSVGElement;

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
        itm.start = new Date(itm.start.getTime() + diff);
        itm.end = new Date(itm.end.getTime() + diff);
      }
    }
    item.start = new Date(item.start.getTime() + diff);
    item.end = new Date(item.end.getTime() + diff);
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

  this.addEventListener("mouseout", (e) => {
    resetMovement();
    // console.log(e);
  });
}
