import { type WCGantt } from "./WcGantt";
import type { IDependency } from "./schedule";
export type LinkAddedEvArgs = {
  link: IDependency;
  cancel: () => void;
};

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

    const startNode = this.schedule.itemsIndex.get(sid);
    const endNode = this.schedule.itemsIndex.get(eid);

    let startType = isStart(s) ? "S" : "F";
    let endType = isStart(e) ? "S" : "F";

    if (startNode.type === "milestone") {
      startType = "F";
    }
    if (endNode.type === "milestone") {
      endType = "S";
    }

    const link = {
      predecessor: sid,
      successor: eid,
      type: `${startType}${endType}`,
      lag: 0,
    } as IDependency;

    const existingLink = this.schedule.dependencies.find(
      (x) => x.predecessor === sid && x.successor === eid
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
      this.schedule.dependencies.push(link);
      this.requestUpdate();
    }
  };

  const NS = "http://www.w3.org/2000/svg";
  let moving = false;
  let start: SVGCircleElement = null;
  let line: SVGLineElement = null;
  let hideFinish: boolean = false;

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

    const isDependencyStart = isStart(start);
    hideFinish = this.settings.disableSF && isDependencyStart;
    //const svgBar = start.parentElement as unknown as SVGSVGElement;

    if (hideFinish) {
      this.shadowRoot
        .querySelectorAll<SVGCircleElement>(".activity.ctl-finish")
        .forEach((e) => e.toggleAttribute("disabled", true));
    }

    const potentialTargets = hideFinish
      ? this.shadowRoot.querySelectorAll<SVGCircleElement>(
          ".activity.ctl-start"
        )
      : this.shadowRoot.querySelectorAll<SVGCircleElement>(
          ".activity.ctl-start,.activity.ctl-finish"
        );

    potentialTargets.forEach((elem) => {
      elem.toggleAttribute("active", true);
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
      .querySelectorAll<SVGCircleElement>(".ctl-start,.ctl-finish")
      .forEach((elem) => {
        elem.toggleAttribute("active", false);
        elem.toggleAttribute("disabled", false);
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

    if (hideFinish && isFinish(target)) {
      start = null;
      hideFinish = false;
      return;
    }

    if (start && isCtrl) {
      addLink(start, target);
    }
    start = null;
    hideFinish = false;
  });

  this.addEventListener("mouseout", (e) => {
    resetMovingControls(e);
    start = null;
    hideFinish = false;
  });
}
