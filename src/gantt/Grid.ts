import { TemplateResult, svg } from "lit";
import { repeat } from "lit/directives/repeat.js";

import type { WcGantt } from "../WcGantt";
import { getWeeks } from "../utils";
import type { CompiledSettings } from "../settings";
import dayjs from "dayjs";

export function Grid(this: WcGantt, settings: CompiledSettings) {
  const getDayWeekends = () => {
    const scale = this.timeScale;
    const currentDay = new Date(scale.startMs);
    const ticks = [];

    const weekendRectH = settings.height;

    for (let day = 0; day <= scale.totalDays - 1; day++) {
      const dayOfWeek = currentDay.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      const x = day * scale.pxPerDay;

      if (isWeekend)
        ticks.push({
          id: currentDay.toDateString(),
          tpl: svg`<rect x=${x} y=${0} width=${
            scale.pxPerDay
          } height=${weekendRectH} class="weekend" />`,
        });

      currentDay.setDate(currentDay.getDate() + 1);
    }

    return svg`
  <g id="weekends">
    ${repeat(
      ticks,
      (i) => i.id,
      (i) => i.tpl
    )}   
  </g>`;
  };

  const getWeekWeekends = () => {
    const weeks = getWeeks(this.timeScale.start, this.timeScale.end);

    const ticks = [];
    const y0 = 0;
    const RH = settings.height;
    const d = this.timeScale.pxPerDay;
    const len = weeks.length - 1;

    for (let i = 0; i < len; i++) {
      const cur = new Date(weeks[i]);
      const x = this.timeScale.dateToPx(cur);
      const curDay = cur.getDate();
      const prevDay = dayjs(cur).subtract(1, "day").toDate(); // addDays(cur, -1).getDate();
      const id = "week_" + i + "_" + prevDay + "-" + curDay;

      ticks.push({
        id,
        tpl: svg`      
        <rect x=${x - d * 2} y=${y0} width=${
          d * 2
        } height=${RH} class="weekend"/>                 
      `,
      });
    }
    return svg`
    <g id="weekends">
      ${repeat(
        ticks,
        (i) => i.id,
        (i) => i.tpl
      )}     
    </g>
  `;
  };

  const items: { id: number; tpl: TemplateResult }[] = [];

  const filteredItems = this.schedule.items.filter((x) => !x.hidden);

  for (let i = 0; i < filteredItems.length; i++) {
    const y1 = (i + 1) * settings.rowHeight + settings.lineWidth;
    const y0 = i * settings.rowHeight + settings.lineWidth;

    let background = svg``;
    const v = filteredItems[i];
    if (v.type === "group")
      background = svg`
      <rect
        x=${0}
        y=${y0}
        width=${settings.width}
        height=${settings.rowHeight}        
        
        class="group-bg-color"      
      ></rect>
    `;

    items.push({
      id: i,
      tpl: svg`
        ${background}
        <line key=${i} x1="0" x2=${settings.width} y1=${y1} y2=${y1} class="line"/>`,
    });
  }

  let weekend: TemplateResult<2> = null;

  if (this.timeScale.viewMode === "week") {
    weekend = getWeekWeekends();
  }
  if (this.timeScale.viewMode === "day") {
    weekend = getDayWeekends();
  }

  return svg`   
  ${weekend}
  <g id="grid">
  
    <line
        QQ
        x1=${0}
        x2=${settings.width}
        y1=${settings.lineWidth}
        y2=${settings.lineWidth}
        class="line"
        
      />
    ${repeat(
      items,
      (i) => i.id,
      (i) => i.tpl
    )}           
  </g>
`;
}
