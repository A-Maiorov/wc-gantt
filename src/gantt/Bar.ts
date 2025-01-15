import { svg } from "lit";

import { repeat } from "lit/directives/repeat.js";
import { WcGantt } from "../WcGantt";
import type { CompiledSettings } from "../settings";
import type { Item } from "../schedule";
import { getSortedItems } from "./sortItems";

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

  if (isNaN(x) || isNaN(halfBarHeight)) {
    throw Error(`Invalid args: x: ${x}; barHeight: ${barHeight}`);
  }
  const points = [
    [0, halfBarHeight],
    [halfBarHeight, 0],
    [barHeight, halfBarHeight],
    [halfBarHeight, barHeight],
  ]
    .map((p) => `${p[0]},${p[1]}`)
    .join(" ");

  const cssClass = v.crit ? "milestone crit" : "milestone";

  return {
    id,
    tpl: svg`
    
    <svg 
      x=${x - halfBarHeight}
      y=${cy}
      id=${id}     
      data-item-id=${v.id}               
      class="gantt-bar"                  
    >
      
      <polygon
        points=${points}
        class=${cssClass}            
        @click=${handler}
      />
      <circle
        class="ctl-start"
        data-id=${v.id}
        cx=${halfBarHeight}
        cy=${halfBarHeight}
        r=${6}          
      />
    </svg>
  `,
  };
}

export function getControlGap(settings: CompiledSettings) {
  return settings.rowHeight / 6; // 6;
}

export function Bar(this: WcGantt, settings: CompiledSettings) {
  const dataDateX = this.timeScale.dateToPx(this.schedule.dataDate);

  const y0 = (settings.rowHeight - settings.barHeight) / 2;

  const todayX = this.timeScale.dateToPx(
    new Date(new Date().setHours(0, 0, 0, 0))
  ); // x0 + (current - settings.minTime) / settings.unitMs;

  const scale = this.timeScale;
  const items = getSortedItems(this.settings, this.schedule);
  const bars = items
    .filter((x) => !x.hidden)
    .map((v, i) => {
      const id = "bar_" + v.id;

      const handler = () => {
        if (this.suppressClick) return;

        const ev = new CustomEvent<Item>("item-click", { detail: v });
        this.dispatchEvent(ev);
      };
      const x = scale.dateToPx(v.earlyStart);

      let y = y0 + i * settings.rowHeight;
      const grHeight = settings.barHeight / 3;
      if (v.type === "group")
        y = (settings.rowHeight - grHeight) / 2 + i * settings.rowHeight; //y +=  grHeight / 2;

      const cy = settings.barHeight / 2 + 1; //y + barHeight / 2;
      if (v.type === "milestone") {
        const result = renderMilestone.bind(this)(
          x,
          y,
          settings.barHeight,
          handler,
          id,
          v
        );

        return result;
      }

      const w1 = scale.pxForTimeSpan(v.earlyStart, v.earlyFinish);

      if (isNaN(w1)) {
        throw Error("Invalid argument: v: " + v);
      }

      const progressDate = v.getProgressDate();

      const w2 = scale.pxForTimeSpan(v.earlyStart, progressDate); // w1 * v.percentCompletion;
      let barCss = "gantt-bar";
      barCss += v.type === "group" ? " group" : "";

      const controlRadius = settings.rowHeight / 6; // 6;
      const controlGap = getControlGap(settings); // 6;

      const controlBorder = 1;
      const controlsOffset = controlRadius * 2 + controlGap + controlBorder * 2;

      const isDelayed = v.type === "activity" && v.delayDays > 0;

      let borderCssClass = v.crit
        ? "bar-inner-border crit"
        : "bar-inner-border";

      if (isDelayed) borderCssClass += " delayed";

      const barBorder = svg`
    <rect
      x=${controlsOffset}
      y="1"
      width=${w1}
      height=${v.type === "group" ? grHeight : settings.barHeight}    
      rx=${1.8}
      ry=${1.8}
      class=${borderCssClass}
    
      @click=${handler}    
    />
    `;

      const backBar = svg`
      <rect
        x=${controlsOffset}        
        y="1"
        width=${w1}
        height=${v.type === "group" ? grHeight : settings.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${handler}    
      />
      `;

      let frontBarCss = "front";
      if (isDelayed) {
        frontBarCss += " delayed";
      }

      let frontBar =
        w2 > 0.000001
          ? svg`
          <rect
            y="1"
            x=${controlsOffset}            
            width=${w2}
            height=${v.type === "group" ? grHeight : settings.barHeight}
            rx=${1.8}
            ry=${1.8}
            class=${frontBarCss}
            @click=${handler}
            />`
          : null;

      if (isDelayed) {
        const end = Math.min(
          new Date().setHours(0, 0, 0, 0),
          v.earlyFinish.getTime()
        );

        const delayW = scale.pxForTimeSpan(v.earlyStart, new Date(end));

        const delayBar =
          w2 > 0.000001
            ? svg`
            <rect
              y="1"
              x=${controlsOffset}            
              width=${delayW}
              height=${settings.barHeight}
              rx=${1.8}
              ry=${1.8}
              class="delay"
              @click=${handler}
              />`
            : null;

        frontBar = svg`
        ${delayBar}${frontBar}
      `;
      }
      let controls = svg``;

      if (
        this.settings.enableChartInteractions === true &&
        v.type === "activity"
      )
        controls = svg`
        <circle
          class=${v.type + " ctl-start"}
          data-id=${v.id}           
          cx=${controlBorder + controlRadius}
          cy=${cy}
          r=${controlRadius}
        />
        <circle
          class=${v.type + " ctl-finish"}
          data-id=${v.id}
          cx=${w1 + controlsOffset + controlGap + controlRadius}
          cy=${cy}
          r=${controlRadius}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${controlsOffset + controlGap}
            y="1"
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            style="opacity:0"
          />
          <svg 
            y="1"
            x=${controlsOffset + controlGap}
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
       
        </g>
        <g class="ctl-resize-end">
          <rect 
            y="1"
            x=${w1}
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${w1}
            y="1"
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
         
        </g>
      `;

      // let barDataDate = svg``;
      // if (
      //   v.dataDate.getTime() > this.schedule.dataDate.getTime() &&
      //   v.isStarted
      // ) {
      //   const barDataDateX = this.timeScale.dateToPx(v.dataDate);
      //   const leftY = i * settings.rowHeight;
      //   const centerY = leftY + settings.rowHeight / 2;

      //   barDataDate = svg`
      //       <line
      //         x1=${dataDateX}
      //         x2=${barDataDateX}
      //         y1=${leftY}
      //         y2=${centerY}
      //         class="data-date-line"
      //       />
      //       <line
      //       x1=${barDataDateX}
      //       x2=${dataDateX}
      //       y1=${centerY}
      //       y2=${leftY}
      //       class="data-date-line"
      //     />
      //     `;

      //   //dataDateX
      // }

      return {
        id,
        tpl: svg` 
     
      <svg 
        x=${x - controlsOffset} 
        y=${y - 1}              
        id=${id}
        key=${i}       
        .item=${v}
        data-item-id=${v.id}        
        class=${barCss}
        style=${
          v.color
            ? `--gantt-bar-group-front-fill: ${v.color}; --gantt-bar-group-back-fill: ${v.color}; --gantt-bar-inner-border-color:  ${v.color};`
            : ""
        }
       
      >      
        ${backBar}
        ${frontBar}
        ${barBorder}
        ${controls}
    
      </svg>
    `,
      };
    });

  return svg`
    <g>      
        <circle
          class="data-date-circle"          
          cx=${dataDateX}
          cy="2"
          r="2"
        />                
        <line             
          x1=${dataDateX}
          x2=${dataDateX}
          y1="0"
          y2=${settings.height}
          class="data-date-line"
        />
        <circle
          class="today-circle"          
          cx=${todayX}
          cy="2"
          r="2"
        />                
        <line             
          x1=${todayX}
          x2=${todayX}
          y1="0"
          y2=${settings.height}
          class="today-line"
        />
      
      ${repeat(
        bars,
        (i) => i.id,
        (i) => i.tpl
      )} 
    </g>
  `;
}
