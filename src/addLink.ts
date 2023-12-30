import { type WCGantt } from "./WcGantt";
import { ComponentSettings, Link, LinkAddedEvArgs } from "./types";

export function configureAddLink(
  this: WCGantt,
  $svg: SVGElement,
  settings: ComponentSettings
) {
  function isStart(el: HTMLElement) {
    return el.classList.contains("gantt-ctrl-start");
  }

  function isFinish(el: HTMLElement) {
    return el.classList.contains("gantt-ctrl-finish");
  }

  const addLink = (s: HTMLElement, e: HTMLElement) => {
    const sid = parseInt(s.dataset["id"]);
    const eid = parseInt(e.dataset["id"]);
    if (sid === eid) return;

    const startNode = settings.data.find((t) => t.id === sid);
    const endNode = settings.data.find((t) => t.id === eid);

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

    const startItem = settings.data.find((x) => x.id == sid);
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
  let $start: HTMLElement = null;
  let $line: SVGElement = null;

  $svg.addEventListener("mousedown", (e) => {
    if (
      !isStart(e.target as HTMLElement) &&
      !isFinish(e.target as HTMLElement)
    ) {
      return;
    }
    e.preventDefault();
    $start = e.target as HTMLElement;

    this.shadowRoot
      .querySelectorAll(".gantt-ctrl-start,.gantt-ctrl-finish")
      .forEach((elem) => {
        (elem as HTMLElement).setAttribute("active", "active");
      });
    moving = true;
    $line = document.createElementNS(NS, "line");
    const x = $start.getAttribute("cx");
    const y = $start.getAttribute("cy");
    $line.setAttribute("x1", x);
    $line.setAttribute("y1", y);
    $line.setAttribute("x2", x);
    $line.setAttribute("y2", y);
    $line.classList.add("add-link-line");
    $svg.appendChild($line);
  });

  $svg.addEventListener("mousemove", (e) => {
    const target = e.target as HTMLElement;
    if (!moving) return;
    e.preventDefault();
    if (isStart(target) || isFinish(target)) {
      const x = target.getAttribute("cx");
      const y = target.getAttribute("cy");
      $line.setAttribute("x2", x);
      $line.setAttribute("y2", y);
    } else {
      const x = e.clientX;
      const y = e.clientY;
      const rect = $svg.getBoundingClientRect();
      $line.setAttribute("x2", (x - rect.left).toString());
      $line.setAttribute("y2", (y - rect.top).toString());
    }
  });

  const resetMovingControls = (e: MouseEvent) => {
    if (!moving) return;

    e.preventDefault();
    e.stopPropagation();

    this.shadowRoot
      .querySelectorAll(".gantt-ctrl-start,.gantt-ctrl-finish")
      .forEach((elem) => {
        (elem as HTMLElement).removeAttribute("active");
      });
    moving = false;

    if ($line) {
      $svg.removeChild($line);
      $line = null;
    }
  };

  $svg.addEventListener("mouseup", (e) => {
    resetMovingControls(e);

    const target = e.target as HTMLElement;
    const isCtrl = isStart(target) || isFinish(target);
    if ($start && isCtrl) {
      addLink($start, target);
    }
    $start = null;
  });

  this.addEventListener("mouseout", (e) => {
    resetMovingControls(e);
  });
}
