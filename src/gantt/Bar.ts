import { svg } from "lit";
import { ComponentSettings, Item } from "../types";

import { repeat } from "lit/directives/repeat.js";
import { WCGantt } from "../WcGantt";

function renderMilestone(
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
        class="milestone"            
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

export function Bar(this: WCGantt, settings: ComponentSettings) {
  const y0 =
    (settings.rowHeight - settings.barHeight) / 2 + settings.scaleHeight;

  const current = settings.timeScale.dateToPx(new Date()); // x0 + (current - settings.minTime) / settings.unitMs;

  const scale = settings.timeScale;

  const bars = settings.data.map((v, i) => {
    const id = "bar_" + v.id;
    if (!v.start || !v.end) return null;

    const handler = () => {
      if (this.suppressClick) return;

      const ev = new CustomEvent<Item>("item-click", { detail: v });
      this.dispatchEvent(ev);
    };
    const x = scale.dateToPx(v.start);
    const y = y0 + i * settings.rowHeight;
    const cy = settings.barHeight / 2; //y + barHeight / 2;
    if (v.type === "milestone") {
      return renderMilestone(x, y, settings.barHeight, handler, id, v);
    }

    const w1 = scale.pxForTimeSpan(v.start, v.end);
    const w2 = w1 * v.percent;
    let barCss = "gantt-bar";
    barCss += v.type === "group" ? " group" : "";

    // if(v.type === "group"){

    // }

    let warning = false;
    let danger = false;
    if (settings.showDelay) {
      if (x + w2 < current && v.percent < 0.999999) {
        warning = true;
        danger = false;
      }
      if (x + w1 < current && v.percent < 0.999999) {
        warning = false;
        danger = true;
      }
    }

    const controlRadius = settings.rowHeight / 6; // 6;
    const controlGap = settings.rowHeight / 6; // 6;
    const controlBorder = 1;
    const controlsOffset = controlRadius * 2 + controlGap + controlBorder * 2;

    const backBar = svg`
      <rect
        x=${controlsOffset}
        width=${w1}
        height=${settings.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${handler}    
      />
      `;

    const frontBar =
      w2 > 0.000001
        ? svg`
            <rect
            x=${controlsOffset}
            width=${w2}
            height=${settings.barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${handler}
            />`
        : null;

    let controls = svg``;

    if (v.type === "activity")
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
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${controlsOffset + controlGap}
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${controlsOffset + controlGap - 0.5 + settings.barHeight / 2} 
            y="2" width="1px" height=${settings.barHeight - 4}/>
        </g>
        <g class="ctl-resize-end">
          <rect 
            x=${w1}
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${w1}
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${w1 - 0.5 + settings.barHeight / 2} 
            y="2" width="1px" height=${settings.barHeight - 4}/>
        </g>
      `;

    return {
      id,
      tpl: svg`
      <svg 
        x=${x - controlsOffset} y=${y}              
        id=${id}
        key=${i}       
        .item=${v}
        data-item-id=${v.id}        
        class=${barCss}
        ?warning=${warning}
        ?danger=${danger}
      >      
        ${backBar}
        ${frontBar}
        ${controls}
    
      </svg>
    `,
    };
  });
  // <text
  // style="fill:floralwhite;text-anchor: start;"
  // x=${controlsOffset}
  // y=${cy}
  // class="text tiny">
  //   ${v.start.toDateString()}
  // </text>

  return svg`
    <g>      
        <line             
          x1=${current}
          x2=${current}
          y1=${settings.scaleHeight}
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
