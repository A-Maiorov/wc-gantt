import { type WCGantt } from "./WcGantt";
import { ComponentSettings, Link, LinkAddedEvArgs } from "./types";

export function configureAddLink(this: WCGantt) {
  const svg = this.shadowRoot.getElementById("gantt") as unknown as SVGElement;

  function isStart(el: SVGCircleElement) {
    return el.classList.contains("ctl-start");
  }

  function isFinish(el: SVGCircleElement) {
    return el.classList.contains("ctl-finish");
  }

  const addLink = (s: SVGCircleElement, e: SVGCircleElement) => {
    const sid = s.dataset["id"];
    const eid = e.dataset["id"];
    if (sid === eid) return;

    const startNode = this.settings.data.find((t) => t.id.toString() === sid);
    const endNode = this.settings.data.find((t) => t.id.toString() === eid);

    let startType = isStart(s) ? "S" : "F";
    let endType = isStart(e) ? "S" : "F";

    if (startNode.type === "milestone") {
      startType = "F";
    }
    if (endNode.type === "milestone") {
      endType = "S";
    }

    const link = {
      source: sid,
      target: eid,
      type: `${startType}${endType}`,
    } as Link;

    const startItem = this.settings.data.find((x) => x.id == sid);
    if (startItem) {
      const existingLink = startItem.links.find(
        (l) =>
          l.source === link.source &&
          l.target === link.target &&
          l.type === link.type
      );
      if (existingLink) return;

      let isCanceled = false;
      const evArgs = {
        link,
        cancel: () => {
          isCanceled = true;
        },
      };

      const ev = new CustomEvent<LinkAddedEvArgs>("before-link-added", {
        detail: evArgs,
      });
      this.dispatchEvent(ev);

      if (!isCanceled) {
        startItem.links.push(link);
        this.requestUpdate();
      }
    }
  };

  const NS = "http://www.w3.org/2000/svg";
  let moving = false;
  let start: SVGCircleElement = null;
  let line: SVGLineElement = null;

  const getControlX = (ctl: SVGCircleElement) => {
    const svgBar = ctl.parentElement as unknown as SVGSVGElement;

    return svgBar.x.baseVal.value + ctl.cx.baseVal.value;
  };
  const getControlY = (ctl: SVGCircleElement) => {
    const svgBar = ctl.parentElement as unknown as SVGSVGElement;

    return svgBar.y.baseVal.value + ctl.cy.baseVal.value;
  };

  svg.addEventListener("mousedown", (e) => {
    if (
      !isStart(e.target as SVGCircleElement) &&
      !isFinish(e.target as SVGCircleElement)
    ) {
      return;
    }
    e.preventDefault();
    start = e.target as SVGCircleElement;
    const svgBar = start.parentElement as unknown as SVGSVGElement;

    this.shadowRoot
      .querySelectorAll(".activity.ctl-start,.activity.ctl-finish")
      .forEach((elem) => {
        (elem as HTMLElement).setAttribute("active", "active");
      });
    moving = true;
    line = document.createElementNS(NS, "line");
    const x = getControlX(start).toString(); //$start.getAttribute("cx");
    const y = getControlY(start).toString(); //$start.getAttribute("cy");
    line.setAttribute("x1", x);
    line.setAttribute("y1", y);
    line.setAttribute("x2", x);
    line.setAttribute("y2", y);
    line.classList.add("add-link-line");
    svg.appendChild(line);
  });

  svg.addEventListener("mousemove", (e) => {
    const target = e.target as SVGCircleElement;
    if (!moving) return;
    e.preventDefault();
    if (isStart(target) || isFinish(target)) {
      const x = getControlX(target).toString();
      const y = getControlY(target).toString();

      line.setAttribute("x2", x);
      line.setAttribute("y2", y);
    } else {
      const x = e.clientX;
      const y = e.clientY;
      const rect = svg.getBoundingClientRect();
      line.setAttribute("x2", (x - rect.left).toString());
      line.setAttribute("y2", (y - rect.top).toString());
    }
  });

  const resetMovingControls = (e: MouseEvent) => {
    if (!moving) return;

    e.preventDefault();
    e.stopPropagation();

    this.shadowRoot
      .querySelectorAll(".ctl-start,.ctl-finish")
      .forEach((elem) => {
        (elem as HTMLElement).removeAttribute("active");
      });
    moving = false;

    if (line) {
      svg.removeChild(line);
      line = null;
    }
  };

  svg.addEventListener("mouseup", (e) => {
    resetMovingControls(e);

    const target = e.target as SVGCircleElement;
    const isCtrl = isStart(target) || isFinish(target);
    if (start && isCtrl) {
      addLink(start, target);
    }
    start = null;
  });

  this.addEventListener("mouseout", (e) => {
    resetMovingControls(e);
  });
}
