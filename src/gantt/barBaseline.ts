import { svg } from "lit";

import { repeat } from "lit/directives/repeat.js";
import { WcGantt } from "../WcGantt";
import type { CompiledSettings } from "../settings";
import type { Item } from "../schedule";
import { getControlGap } from "./Bar";
import dayjs from "dayjs";

function renderMilestone(
  this: WcGantt,
  x: number,
  cy: number,
  barHeight: number,
  handler: () => void,
  id: string | number,
  v: Item
) {
  const halfBarHeight = barHeight / 2;
  const points = [
    [0, halfBarHeight],
    [halfBarHeight, 0],
    [barHeight, halfBarHeight],
    [halfBarHeight, barHeight],
  ]
    .map((p) => `${p[0]},${p[1]}`)
    .join(" ");

  let baseline = svg``;
  if (this.baselineSchedule) {
    const bl = this.baselineSchedule.itemsIndex.get(v.id);
    if (bl) {
      const blStart = bl.earlyStart;
      baseline = svg`
        <svg 
          x=${this.timeScale.dateToPx(blStart) - halfBarHeight}
          y=${cy + 3}
          id=${id + "-bl"}     
          data-item-id=${v.id}               
          class="gantt-bar baseline"                  
        >        
          <polygon
            points=${points}
            class="milestone"            
            @click=${handler}
          />         
        </svg>
      `;
    }
  }

  return {
    id,
    tpl: svg`
      ${baseline}
    `,
  };
}

export function BarBaseline(this: WcGantt, settings: CompiledSettings) {
  if (!this.baselineSchedule) return;
  const dataDateX = this.timeScale.dateToPx(this.baselineSchedule.dataDate);

  const y0 = (settings.rowHeight - settings.barHeight) / 2;

  const todayX = this.timeScale.dateToPx(
    new Date(new Date().setHours(0, 0, 0, 0))
  ); // x0 + (current - settings.minTime) / settings.unitMs;

  const scale = this.timeScale;

  const bars = this.schedule.items
    .filter((x) => !x.hidden)
    .map((v, i) => {
      const id = "bar_" + v.id + "_baseline";

      const x = scale.dateToPx(v.earlyStart);

      let y = y0 + i * settings.rowHeight;
      const grHeight = settings.barHeight / 3;
      if (v.type === "group")
        y = (settings.rowHeight - grHeight) / 2 + i * settings.rowHeight; //y +=  grHeight / 2;

      if (v.type === "milestone") {
        const result = renderMilestone.bind(this)(
          x,
          y,
          settings.barHeight,
          () => {},
          id,
          v
        );

        return result;
      }

      let barCss = "gantt-bar";
      barCss += v.type === "group" ? " group" : "";

      const controlRadius = settings.rowHeight / 6; // 6;
      const controlGap = getControlGap(settings); // 6;

      const controlBorder = 1;
      const controlsOffset = controlRadius * 2 + controlGap + controlBorder * 2;

      let barBaseline = svg``;
      if (this.baselineSchedule) {
        const bl = this.baselineSchedule.itemsIndex.get(v.id);
        if (bl) {
          const progressDate = dayjs(bl.earlyStart)
            .add(bl.progressDays, "days")
            .toDate();
          const progressW = scale.pxForTimeSpan(bl.earlyStart, progressDate);

          barBaseline = svg`
          <svg 
          x=${scale.dateToPx(bl.earlyStart) - controlsOffset} 
          y=${y - 1}              
          id=${id}
          key=${i}       
          .item=${v}
          data-item-id=${v.id}        
          class=${barCss}          
          >     
              <rect
                id=${"bl-" + bl.id}
                x=${controlsOffset}
                y="4"
                width=${scale.pxForTimeSpan(bl.earlyStart, bl.earlyFinish)}
                height=${bl.type === "group" ? grHeight : settings.barHeight}
                rx=${1.8}
                ry=${1.8}
                class="back baseline"                    
              />
              <rect
                id=${"bl-progress" + bl.id}
                x=${controlsOffset}
                y="4"
                width=${progressW}
                height=${bl.type === "group" ? grHeight : settings.barHeight}
                rx=${1.8}
                ry=${1.8}
                class="front baseline"                    
              />
          </svg>
        `;
        }
      }

      return {
        id,
        tpl: svg` 
        ${barBaseline}
      `,
      };
    });

  return svg`
    <g>      
        <circle
          class="data-date-circle baseline"          
          cx=${dataDateX}
          cy="2"
          r="2"
        />                
        <line             
          x1=${dataDateX}
          x2=${dataDateX}
          y1="0"
          y2=${settings.height}
          class="data-date-line baseline"
        />
        <circle
          class="today-circle baseline"          
          cx=${todayX}
          cy="2"
          r="2"
        />                
        <line             
          x1=${todayX}
          x2=${todayX}
          y1="0"
          y2=${settings.height}
          class="today-line baseline"
        />
      
      ${repeat(
        bars,
        (i) => i.id,
        (i) => i.tpl
      )} 
    </g>
  `;
}
