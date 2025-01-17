var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __commonJS=(cb,mod)=>function(){return mod||(0,cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports};var __copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));var __decorateClass=(decorators,target,key,kind)=>{for(var result=kind>1?void 0:kind?__getOwnPropDesc(target,key):target,i6=decorators.length-1,decorator;i6>=0;i6--)(decorator=decorators[i6])&&(result=(kind?decorator(target,key,result):decorator(result))||result);return kind&&result&&__defProp(target,key,result),result};var require_dayjs_min=__commonJS({"node_modules/.pnpm/dayjs@1.11.13/node_modules/dayjs/dayjs.min.js"(exports,module){(function(t6,e6){typeof exports=="object"&&typeof module<"u"?module.exports=e6():typeof define=="function"&&define.amd?define(e6):(t6=typeof globalThis<"u"?globalThis:t6||self).dayjs=e6()})(exports,function(){"use strict";var t6=1e3,e6=6e4,n5=36e5,r7="millisecond",i6="second",s4="minute",u5="hour",a3="day",o5="week",c5="month",f3="quarter",h3="year",d3="date",l3="Invalid Date",$2=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y3=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M3={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t7){var e7=["th","st","nd","rd"],n6=t7%100;return"["+t7+(e7[(n6-20)%10]||e7[n6]||e7[0])+"]"}},m3=function(t7,e7,n6){var r8=String(t7);return!r8||r8.length>=e7?t7:""+Array(e7+1-r8.length).join(n6)+t7},v3={s:m3,z:function(t7){var e7=-t7.utcOffset(),n6=Math.abs(e7),r8=Math.floor(n6/60),i7=n6%60;return(e7<=0?"+":"-")+m3(r8,2,"0")+":"+m3(i7,2,"0")},m:function t7(e7,n6){if(e7.date()<n6.date())return-t7(n6,e7);var r8=12*(n6.year()-e7.year())+(n6.month()-e7.month()),i7=e7.clone().add(r8,c5),s5=n6-i7<0,u6=e7.clone().add(r8+(s5?-1:1),c5);return+(-(r8+(n6-i7)/(s5?i7-u6:u6-i7))||0)},a:function(t7){return t7<0?Math.ceil(t7)||0:Math.floor(t7)},p:function(t7){return{M:c5,y:h3,w:o5,d:a3,D:d3,h:u5,m:s4,s:i6,ms:r7,Q:f3}[t7]||String(t7||"").toLowerCase().replace(/s$/,"")},u:function(t7){return t7===void 0}},g2="en",D={};D[g2]=M3;var p4="$isDayjsObject",S3=function(t7){return t7 instanceof _2||!(!t7||!t7[p4])},w2=function t7(e7,n6,r8){var i7;if(!e7)return g2;if(typeof e7=="string"){var s5=e7.toLowerCase();D[s5]&&(i7=s5),n6&&(D[s5]=n6,i7=s5);var u6=e7.split("-");if(!i7&&u6.length>1)return t7(u6[0])}else{var a4=e7.name;D[a4]=e7,i7=a4}return!r8&&i7&&(g2=i7),i7||!r8&&g2},O=function(t7,e7){if(S3(t7))return t7.clone();var n6=typeof e7=="object"?e7:{};return n6.date=t7,n6.args=arguments,new _2(n6)},b3=v3;b3.l=w2,b3.i=S3,b3.w=function(t7,e7){return O(t7,{locale:e7.$L,utc:e7.$u,x:e7.$x,$offset:e7.$offset})};var _2=function(){function M4(t7){this.$L=w2(t7.locale,null,!0),this.parse(t7),this.$x=this.$x||t7.x||{},this[p4]=!0}var m4=M4.prototype;return m4.parse=function(t7){this.$d=function(t8){var e7=t8.date,n6=t8.utc;if(e7===null)return new Date(NaN);if(b3.u(e7))return new Date;if(e7 instanceof Date)return new Date(e7);if(typeof e7=="string"&&!/Z$/i.test(e7)){var r8=e7.match($2);if(r8){var i7=r8[2]-1||0,s5=(r8[7]||"0").substring(0,3);return n6?new Date(Date.UTC(r8[1],i7,r8[3]||1,r8[4]||0,r8[5]||0,r8[6]||0,s5)):new Date(r8[1],i7,r8[3]||1,r8[4]||0,r8[5]||0,r8[6]||0,s5)}}return new Date(e7)}(t7),this.init()},m4.init=function(){var t7=this.$d;this.$y=t7.getFullYear(),this.$M=t7.getMonth(),this.$D=t7.getDate(),this.$W=t7.getDay(),this.$H=t7.getHours(),this.$m=t7.getMinutes(),this.$s=t7.getSeconds(),this.$ms=t7.getMilliseconds()},m4.$utils=function(){return b3},m4.isValid=function(){return this.$d.toString()!==l3},m4.isSame=function(t7,e7){var n6=O(t7);return this.startOf(e7)<=n6&&n6<=this.endOf(e7)},m4.isAfter=function(t7,e7){return O(t7)<this.startOf(e7)},m4.isBefore=function(t7,e7){return this.endOf(e7)<O(t7)},m4.$g=function(t7,e7,n6){return b3.u(t7)?this[e7]:this.set(n6,t7)},m4.unix=function(){return Math.floor(this.valueOf()/1e3)},m4.valueOf=function(){return this.$d.getTime()},m4.startOf=function(t7,e7){var n6=this,r8=!!b3.u(e7)||e7,f4=b3.p(t7),l4=function(t8,e8){var i7=b3.w(n6.$u?Date.UTC(n6.$y,e8,t8):new Date(n6.$y,e8,t8),n6);return r8?i7:i7.endOf(a3)},$3=function(t8,e8){return b3.w(n6.toDate()[t8].apply(n6.toDate("s"),(r8?[0,0,0,0]:[23,59,59,999]).slice(e8)),n6)},y4=this.$W,M5=this.$M,m5=this.$D,v4="set"+(this.$u?"UTC":"");switch(f4){case h3:return r8?l4(1,0):l4(31,11);case c5:return r8?l4(1,M5):l4(0,M5+1);case o5:var g3=this.$locale().weekStart||0,D2=(y4<g3?y4+7:y4)-g3;return l4(r8?m5-D2:m5+(6-D2),M5);case a3:case d3:return $3(v4+"Hours",0);case u5:return $3(v4+"Minutes",1);case s4:return $3(v4+"Seconds",2);case i6:return $3(v4+"Milliseconds",3);default:return this.clone()}},m4.endOf=function(t7){return this.startOf(t7,!1)},m4.$set=function(t7,e7){var n6,o6=b3.p(t7),f4="set"+(this.$u?"UTC":""),l4=(n6={},n6[a3]=f4+"Date",n6[d3]=f4+"Date",n6[c5]=f4+"Month",n6[h3]=f4+"FullYear",n6[u5]=f4+"Hours",n6[s4]=f4+"Minutes",n6[i6]=f4+"Seconds",n6[r7]=f4+"Milliseconds",n6)[o6],$3=o6===a3?this.$D+(e7-this.$W):e7;if(o6===c5||o6===h3){var y4=this.clone().set(d3,1);y4.$d[l4]($3),y4.init(),this.$d=y4.set(d3,Math.min(this.$D,y4.daysInMonth())).$d}else l4&&this.$d[l4]($3);return this.init(),this},m4.set=function(t7,e7){return this.clone().$set(t7,e7)},m4.get=function(t7){return this[b3.p(t7)]()},m4.add=function(r8,f4){var d4,l4=this;r8=Number(r8);var $3=b3.p(f4),y4=function(t7){var e7=O(l4);return b3.w(e7.date(e7.date()+Math.round(t7*r8)),l4)};if($3===c5)return this.set(c5,this.$M+r8);if($3===h3)return this.set(h3,this.$y+r8);if($3===a3)return y4(1);if($3===o5)return y4(7);var M5=(d4={},d4[s4]=e6,d4[u5]=n5,d4[i6]=t6,d4)[$3]||1,m5=this.$d.getTime()+r8*M5;return b3.w(m5,this)},m4.subtract=function(t7,e7){return this.add(-1*t7,e7)},m4.format=function(t7){var e7=this,n6=this.$locale();if(!this.isValid())return n6.invalidDate||l3;var r8=t7||"YYYY-MM-DDTHH:mm:ssZ",i7=b3.z(this),s5=this.$H,u6=this.$m,a4=this.$M,o6=n6.weekdays,c6=n6.months,f4=n6.meridiem,h4=function(t8,n7,i8,s6){return t8&&(t8[n7]||t8(e7,r8))||i8[n7].slice(0,s6)},d4=function(t8){return b3.s(s5%12||12,t8,"0")},$3=f4||function(t8,e8,n7){var r9=t8<12?"AM":"PM";return n7?r9.toLowerCase():r9};return r8.replace(y3,function(t8,r9){return r9||function(t9){switch(t9){case"YY":return String(e7.$y).slice(-2);case"YYYY":return b3.s(e7.$y,4,"0");case"M":return a4+1;case"MM":return b3.s(a4+1,2,"0");case"MMM":return h4(n6.monthsShort,a4,c6,3);case"MMMM":return h4(c6,a4);case"D":return e7.$D;case"DD":return b3.s(e7.$D,2,"0");case"d":return String(e7.$W);case"dd":return h4(n6.weekdaysMin,e7.$W,o6,2);case"ddd":return h4(n6.weekdaysShort,e7.$W,o6,3);case"dddd":return o6[e7.$W];case"H":return String(s5);case"HH":return b3.s(s5,2,"0");case"h":return d4(1);case"hh":return d4(2);case"a":return $3(s5,u6,!0);case"A":return $3(s5,u6,!1);case"m":return String(u6);case"mm":return b3.s(u6,2,"0");case"s":return String(e7.$s);case"ss":return b3.s(e7.$s,2,"0");case"SSS":return b3.s(e7.$ms,3,"0");case"Z":return i7}return null}(t8)||i7.replace(":","")})},m4.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m4.diff=function(r8,d4,l4){var $3,y4=this,M5=b3.p(d4),m5=O(r8),v4=(m5.utcOffset()-this.utcOffset())*e6,g3=this-m5,D2=function(){return b3.m(y4,m5)};switch(M5){case h3:$3=D2()/12;break;case c5:$3=D2();break;case f3:$3=D2()/3;break;case o5:$3=(g3-v4)/6048e5;break;case a3:$3=(g3-v4)/864e5;break;case u5:$3=g3/n5;break;case s4:$3=g3/e6;break;case i6:$3=g3/t6;break;default:$3=g3}return l4?$3:b3.a($3)},m4.daysInMonth=function(){return this.endOf(c5).$D},m4.$locale=function(){return D[this.$L]},m4.locale=function(t7,e7){if(!t7)return this.$L;var n6=this.clone(),r8=w2(t7,e7,!0);return r8&&(n6.$L=r8),n6},m4.clone=function(){return b3.w(this.$d,this)},m4.toDate=function(){return new Date(this.valueOf())},m4.toJSON=function(){return this.isValid()?this.toISOString():null},m4.toISOString=function(){return this.$d.toISOString()},m4.toString=function(){return this.$d.toUTCString()},M4}(),k2=_2.prototype;return O.prototype=k2,[["$ms",r7],["$s",i6],["$m",s4],["$H",u5],["$W",a3],["$M",c5],["$y",h3],["$D",d3]].forEach(function(t7){k2[t7[1]]=function(e7){return this.$g(e7,t7[0],t7[1])}}),O.extend=function(t7,e7){return t7.$i||(t7(e7,_2,O),t7.$i=!0),O},O.locale=w2,O.isDayjs=S3,O.unix=function(t7){return O(1e3*t7)},O.en=D[g2],O.Ls=D,O.p={},O})}});var t=t6=>(e6,o5)=>{o5!==void 0?o5.addInitializer(()=>{customElements.define(t6,e6)}):customElements.define(t6,e6)};var t2=globalThis,e=t2.ShadowRoot&&(t2.ShadyCSS===void 0||t2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),o=new WeakMap,n=class{constructor(t6,e6,o5){if(this._$cssResult$=!0,o5!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t6,this.t=e6}get styleSheet(){let t6=this.o,s4=this.t;if(e&&t6===void 0){let e6=s4!==void 0&&s4.length===1;e6&&(t6=o.get(s4)),t6===void 0&&((this.o=t6=new CSSStyleSheet).replaceSync(this.cssText),e6&&o.set(s4,t6))}return t6}toString(){return this.cssText}},r=t6=>new n(typeof t6=="string"?t6:t6+"",void 0,s),i=(t6,...e6)=>{let o5=t6.length===1?t6[0]:e6.reduce((e7,s4,o6)=>e7+(t7=>{if(t7._$cssResult$===!0)return t7.cssText;if(typeof t7=="number")return t7;throw Error("Value passed to 'css' function must be a 'css' function result: "+t7+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s4)+t6[o6+1],t6[0]);return new n(o5,t6,s)},S=(s4,o5)=>{if(e)s4.adoptedStyleSheets=o5.map(t6=>t6 instanceof CSSStyleSheet?t6:t6.styleSheet);else for(let e6 of o5){let o6=document.createElement("style"),n5=t2.litNonce;n5!==void 0&&o6.setAttribute("nonce",n5),o6.textContent=e6.cssText,s4.appendChild(o6)}},c=e?t6=>t6:t6=>t6 instanceof CSSStyleSheet?(t7=>{let e6="";for(let s4 of t7.cssRules)e6+=s4.cssText;return r(e6)})(t6):t6;var{is:i2,defineProperty:e2,getOwnPropertyDescriptor:r2,getOwnPropertyNames:h,getOwnPropertySymbols:o2,getPrototypeOf:n2}=Object,a=globalThis,c2=a.trustedTypes,l=c2?c2.emptyScript:"",p=a.reactiveElementPolyfillSupport,d=(t6,s4)=>t6,u={toAttribute(t6,s4){switch(s4){case Boolean:t6=t6?l:null;break;case Object:case Array:t6=t6==null?t6:JSON.stringify(t6)}return t6},fromAttribute(t6,s4){let i6=t6;switch(s4){case Boolean:i6=t6!==null;break;case Number:i6=t6===null?null:Number(t6);break;case Object:case Array:try{i6=JSON.parse(t6)}catch{i6=null}}return i6}},f=(t6,s4)=>!i2(t6,s4),y={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),a.litPropertyMetadata??=new WeakMap;var b=class extends HTMLElement{static addInitializer(t6){this._$Ei(),(this.l??=[]).push(t6)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t6,s4=y){if(s4.state&&(s4.attribute=!1),this._$Ei(),this.elementProperties.set(t6,s4),!s4.noAccessor){let i6=Symbol(),r7=this.getPropertyDescriptor(t6,i6,s4);r7!==void 0&&e2(this.prototype,t6,r7)}}static getPropertyDescriptor(t6,s4,i6){let{get:e6,set:h3}=r2(this.prototype,t6)??{get(){return this[s4]},set(t7){this[s4]=t7}};return{get(){return e6?.call(this)},set(s5){let r7=e6?.call(this);h3.call(this,s5),this.requestUpdate(t6,r7,i6)},configurable:!0,enumerable:!0}}static getPropertyOptions(t6){return this.elementProperties.get(t6)??y}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let t6=n2(this);t6.finalize(),t6.l!==void 0&&(this.l=[...t6.l]),this.elementProperties=new Map(t6.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let t7=this.properties,s4=[...h(t7),...o2(t7)];for(let i6 of s4)this.createProperty(i6,t7[i6])}let t6=this[Symbol.metadata];if(t6!==null){let s4=litPropertyMetadata.get(t6);if(s4!==void 0)for(let[t7,i6]of s4)this.elementProperties.set(t7,i6)}this._$Eh=new Map;for(let[t7,s4]of this.elementProperties){let i6=this._$Eu(t7,s4);i6!==void 0&&this._$Eh.set(i6,t7)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(s4){let i6=[];if(Array.isArray(s4)){let e6=new Set(s4.flat(1/0).reverse());for(let s5 of e6)i6.unshift(c(s5))}else s4!==void 0&&i6.push(c(s4));return i6}static _$Eu(t6,s4){let i6=s4.attribute;return i6===!1?void 0:typeof i6=="string"?i6:typeof t6=="string"?t6.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t6=>this.enableUpdating=t6),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t6=>t6(this))}addController(t6){(this._$EO??=new Set).add(t6),this.renderRoot!==void 0&&this.isConnected&&t6.hostConnected?.()}removeController(t6){this._$EO?.delete(t6)}_$E_(){let t6=new Map,s4=this.constructor.elementProperties;for(let i6 of s4.keys())this.hasOwnProperty(i6)&&(t6.set(i6,this[i6]),delete this[i6]);t6.size>0&&(this._$Ep=t6)}createRenderRoot(){let t6=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(t6,this.constructor.elementStyles),t6}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t6=>t6.hostConnected?.())}enableUpdating(t6){}disconnectedCallback(){this._$EO?.forEach(t6=>t6.hostDisconnected?.())}attributeChangedCallback(t6,s4,i6){this._$AK(t6,i6)}_$EC(t6,s4){let i6=this.constructor.elementProperties.get(t6),e6=this.constructor._$Eu(t6,i6);if(e6!==void 0&&i6.reflect===!0){let r7=(i6.converter?.toAttribute!==void 0?i6.converter:u).toAttribute(s4,i6.type);this._$Em=t6,r7==null?this.removeAttribute(e6):this.setAttribute(e6,r7),this._$Em=null}}_$AK(t6,s4){let i6=this.constructor,e6=i6._$Eh.get(t6);if(e6!==void 0&&this._$Em!==e6){let t7=i6.getPropertyOptions(e6),r7=typeof t7.converter=="function"?{fromAttribute:t7.converter}:t7.converter?.fromAttribute!==void 0?t7.converter:u;this._$Em=e6,this[e6]=r7.fromAttribute(s4,t7.type),this._$Em=null}}requestUpdate(t6,s4,i6){if(t6!==void 0){if(i6??=this.constructor.getPropertyOptions(t6),!(i6.hasChanged??f)(this[t6],s4))return;this.P(t6,s4,i6)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t6,s4,i6){this._$AL.has(t6)||this._$AL.set(t6,s4),i6.reflect===!0&&this._$Em!==t6&&(this._$Ej??=new Set).add(t6)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(t7){Promise.reject(t7)}let t6=this.scheduleUpdate();return t6!=null&&await t6,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[t8,s5]of this._$Ep)this[t8]=s5;this._$Ep=void 0}let t7=this.constructor.elementProperties;if(t7.size>0)for(let[s5,i6]of t7)i6.wrapped!==!0||this._$AL.has(s5)||this[s5]===void 0||this.P(s5,this[s5],i6)}let t6=!1,s4=this._$AL;try{t6=this.shouldUpdate(s4),t6?(this.willUpdate(s4),this._$EO?.forEach(t7=>t7.hostUpdate?.()),this.update(s4)):this._$EU()}catch(s5){throw t6=!1,this._$EU(),s5}t6&&this._$AE(s4)}willUpdate(t6){}_$AE(t6){this._$EO?.forEach(t7=>t7.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t6)),this.updated(t6)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t6){return!0}update(t6){this._$Ej&&=this._$Ej.forEach(t7=>this._$EC(t7,this[t7])),this._$EU()}updated(t6){}firstUpdated(t6){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,p?.({ReactiveElement:b}),(a.reactiveElementVersions??=[]).push("2.0.4");var o3={attribute:!0,type:String,converter:u,reflect:!1,hasChanged:f},r3=(t6=o3,e6,r7)=>{let{kind:n5,metadata:i6}=r7,s4=globalThis.litPropertyMetadata.get(i6);if(s4===void 0&&globalThis.litPropertyMetadata.set(i6,s4=new Map),s4.set(r7.name,t6),n5==="accessor"){let{name:o5}=r7;return{set(r8){let n6=e6.get.call(this);e6.set.call(this,r8),this.requestUpdate(o5,n6,t6)},init(e7){return e7!==void 0&&this.P(o5,void 0,t6),e7}}}if(n5==="setter"){let{name:o5}=r7;return function(r8){let n6=this[o5];e6.call(this,r8),this.requestUpdate(o5,n6,t6)}}throw Error("Unsupported decorator location: "+n5)};function n3(t6){return(e6,o5)=>typeof o5=="object"?r3(t6,e6,o5):((t7,e7,o6)=>{let r7=e7.hasOwnProperty(o6);return e7.constructor.createProperty(o6,r7?{...t7,wrapped:!0}:t7),r7?Object.getOwnPropertyDescriptor(e7,o6):void 0})(t6,e6,o5)}var t3=globalThis,i3=t3.trustedTypes,s2=i3?i3.createPolicy("lit-html",{createHTML:t6=>t6}):void 0,e4="$lit$",h2=`lit$${Math.random().toFixed(9).slice(2)}$`,o4="?"+h2,n4=`<${o4}>`,r4=document,l2=()=>r4.createComment(""),c3=t6=>t6===null||typeof t6!="object"&&typeof t6!="function",a2=Array.isArray,u2=t6=>a2(t6)||typeof t6?.[Symbol.iterator]=="function",d2=`[ 	
\f\r]`,f2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d2}(?:([^\\s"'>=/]+)(${d2}*=${d2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),p2=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y2=t6=>(i6,...s4)=>({_$litType$:t6,strings:i6,values:s4}),x=y2(1),b2=y2(2),w=y2(3),T=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),A=new WeakMap,C=r4.createTreeWalker(r4,129);function P(t6,i6){if(!a2(t6)||!t6.hasOwnProperty("raw"))throw Error("invalid template strings array");return s2!==void 0?s2.createHTML(i6):i6}var V=(t6,i6)=>{let s4=t6.length-1,o5=[],r7,l3=i6===2?"<svg>":i6===3?"<math>":"",c5=f2;for(let i7=0;i7<s4;i7++){let s5=t6[i7],a3,u5,d3=-1,y3=0;for(;y3<s5.length&&(c5.lastIndex=y3,u5=c5.exec(s5),u5!==null);)y3=c5.lastIndex,c5===f2?u5[1]==="!--"?c5=v:u5[1]!==void 0?c5=_:u5[2]!==void 0?($.test(u5[2])&&(r7=RegExp("</"+u5[2],"g")),c5=m):u5[3]!==void 0&&(c5=m):c5===m?u5[0]===">"?(c5=r7??f2,d3=-1):u5[1]===void 0?d3=-2:(d3=c5.lastIndex-u5[2].length,a3=u5[1],c5=u5[3]===void 0?m:u5[3]==='"'?g:p2):c5===g||c5===p2?c5=m:c5===v||c5===_?c5=f2:(c5=m,r7=void 0);let x2=c5===m&&t6[i7+1].startsWith("/>")?" ":"";l3+=c5===f2?s5+n4:d3>=0?(o5.push(a3),s5.slice(0,d3)+e4+s5.slice(d3)+h2+x2):s5+h2+(d3===-2?i7:x2)}return[P(t6,l3+(t6[s4]||"<?>")+(i6===2?"</svg>":i6===3?"</math>":"")),o5]},N=class _N{constructor({strings:t6,_$litType$:s4},n5){let r7;this.parts=[];let c5=0,a3=0,u5=t6.length-1,d3=this.parts,[f3,v3]=V(t6,s4);if(this.el=_N.createElement(f3,n5),C.currentNode=this.el.content,s4===2||s4===3){let t7=this.el.content.firstChild;t7.replaceWith(...t7.childNodes)}for(;(r7=C.nextNode())!==null&&d3.length<u5;){if(r7.nodeType===1){if(r7.hasAttributes())for(let t7 of r7.getAttributeNames())if(t7.endsWith(e4)){let i6=v3[a3++],s5=r7.getAttribute(t7).split(h2),e6=/([.?@])?(.*)/.exec(i6);d3.push({type:1,index:c5,name:e6[2],strings:s5,ctor:e6[1]==="."?H:e6[1]==="?"?I:e6[1]==="@"?L:k}),r7.removeAttribute(t7)}else t7.startsWith(h2)&&(d3.push({type:6,index:c5}),r7.removeAttribute(t7));if($.test(r7.tagName)){let t7=r7.textContent.split(h2),s5=t7.length-1;if(s5>0){r7.textContent=i3?i3.emptyScript:"";for(let i6=0;i6<s5;i6++)r7.append(t7[i6],l2()),C.nextNode(),d3.push({type:2,index:++c5});r7.append(t7[s5],l2())}}}else if(r7.nodeType===8)if(r7.data===o4)d3.push({type:2,index:c5});else{let t7=-1;for(;(t7=r7.data.indexOf(h2,t7+1))!==-1;)d3.push({type:7,index:c5}),t7+=h2.length-1}c5++}}static createElement(t6,i6){let s4=r4.createElement("template");return s4.innerHTML=t6,s4}};function S2(t6,i6,s4=t6,e6){if(i6===T)return i6;let h3=e6!==void 0?s4._$Co?.[e6]:s4._$Cl,o5=c3(i6)?void 0:i6._$litDirective$;return h3?.constructor!==o5&&(h3?._$AO?.(!1),o5===void 0?h3=void 0:(h3=new o5(t6),h3._$AT(t6,s4,e6)),e6!==void 0?(s4._$Co??=[])[e6]=h3:s4._$Cl=h3),h3!==void 0&&(i6=S2(t6,h3._$AS(t6,i6.values),h3,e6)),i6}var M=class{constructor(t6,i6){this._$AV=[],this._$AN=void 0,this._$AD=t6,this._$AM=i6}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t6){let{el:{content:i6},parts:s4}=this._$AD,e6=(t6?.creationScope??r4).importNode(i6,!0);C.currentNode=e6;let h3=C.nextNode(),o5=0,n5=0,l3=s4[0];for(;l3!==void 0;){if(o5===l3.index){let i7;l3.type===2?i7=new R(h3,h3.nextSibling,this,t6):l3.type===1?i7=new l3.ctor(h3,l3.name,l3.strings,this,t6):l3.type===6&&(i7=new z(h3,this,t6)),this._$AV.push(i7),l3=s4[++n5]}o5!==l3?.index&&(h3=C.nextNode(),o5++)}return C.currentNode=r4,e6}p(t6){let i6=0;for(let s4 of this._$AV)s4!==void 0&&(s4.strings!==void 0?(s4._$AI(t6,s4,i6),i6+=s4.strings.length-2):s4._$AI(t6[i6])),i6++}},R=class _R{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t6,i6,s4,e6){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t6,this._$AB=i6,this._$AM=s4,this.options=e6,this._$Cv=e6?.isConnected??!0}get parentNode(){let t6=this._$AA.parentNode,i6=this._$AM;return i6!==void 0&&t6?.nodeType===11&&(t6=i6.parentNode),t6}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t6,i6=this){t6=S2(this,t6,i6),c3(t6)?t6===E||t6==null||t6===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t6!==this._$AH&&t6!==T&&this._(t6):t6._$litType$!==void 0?this.$(t6):t6.nodeType!==void 0?this.T(t6):u2(t6)?this.k(t6):this._(t6)}O(t6){return this._$AA.parentNode.insertBefore(t6,this._$AB)}T(t6){this._$AH!==t6&&(this._$AR(),this._$AH=this.O(t6))}_(t6){this._$AH!==E&&c3(this._$AH)?this._$AA.nextSibling.data=t6:this.T(r4.createTextNode(t6)),this._$AH=t6}$(t6){let{values:i6,_$litType$:s4}=t6,e6=typeof s4=="number"?this._$AC(t6):(s4.el===void 0&&(s4.el=N.createElement(P(s4.h,s4.h[0]),this.options)),s4);if(this._$AH?._$AD===e6)this._$AH.p(i6);else{let t7=new M(e6,this),s5=t7.u(this.options);t7.p(i6),this.T(s5),this._$AH=t7}}_$AC(t6){let i6=A.get(t6.strings);return i6===void 0&&A.set(t6.strings,i6=new N(t6)),i6}k(t6){a2(this._$AH)||(this._$AH=[],this._$AR());let i6=this._$AH,s4,e6=0;for(let h3 of t6)e6===i6.length?i6.push(s4=new _R(this.O(l2()),this.O(l2()),this,this.options)):s4=i6[e6],s4._$AI(h3),e6++;e6<i6.length&&(this._$AR(s4&&s4._$AB.nextSibling,e6),i6.length=e6)}_$AR(t6=this._$AA.nextSibling,i6){for(this._$AP?.(!1,!0,i6);t6&&t6!==this._$AB;){let i7=t6.nextSibling;t6.remove(),t6=i7}}setConnected(t6){this._$AM===void 0&&(this._$Cv=t6,this._$AP?.(t6))}},k=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t6,i6,s4,e6,h3){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t6,this.name=i6,this._$AM=e6,this.options=h3,s4.length>2||s4[0]!==""||s4[1]!==""?(this._$AH=Array(s4.length-1).fill(new String),this.strings=s4):this._$AH=E}_$AI(t6,i6=this,s4,e6){let h3=this.strings,o5=!1;if(h3===void 0)t6=S2(this,t6,i6,0),o5=!c3(t6)||t6!==this._$AH&&t6!==T,o5&&(this._$AH=t6);else{let e7=t6,n5,r7;for(t6=h3[0],n5=0;n5<h3.length-1;n5++)r7=S2(this,e7[s4+n5],i6,n5),r7===T&&(r7=this._$AH[n5]),o5||=!c3(r7)||r7!==this._$AH[n5],r7===E?t6=E:t6!==E&&(t6+=(r7??"")+h3[n5+1]),this._$AH[n5]=r7}o5&&!e6&&this.j(t6)}j(t6){t6===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t6??"")}},H=class extends k{constructor(){super(...arguments),this.type=3}j(t6){this.element[this.name]=t6===E?void 0:t6}},I=class extends k{constructor(){super(...arguments),this.type=4}j(t6){this.element.toggleAttribute(this.name,!!t6&&t6!==E)}},L=class extends k{constructor(t6,i6,s4,e6,h3){super(t6,i6,s4,e6,h3),this.type=5}_$AI(t6,i6=this){if((t6=S2(this,t6,i6,0)??E)===T)return;let s4=this._$AH,e6=t6===E&&s4!==E||t6.capture!==s4.capture||t6.once!==s4.once||t6.passive!==s4.passive,h3=t6!==E&&(s4===E||e6);e6&&this.element.removeEventListener(this.name,this,s4),h3&&this.element.addEventListener(this.name,this,t6),this._$AH=t6}handleEvent(t6){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t6):this._$AH.handleEvent(t6)}},z=class{constructor(t6,i6,s4){this.element=t6,this.type=6,this._$AN=void 0,this._$AM=i6,this.options=s4}get _$AU(){return this._$AM._$AU}_$AI(t6){S2(this,t6)}},Z={M:e4,P:h2,A:o4,C:1,L:V,R:M,D:u2,V:S2,I:R,H:k,N:I,U:L,B:H,F:z},j=t3.litHtmlPolyfillSupport;j?.(N,R),(t3.litHtmlVersions??=[]).push("3.2.1");var B=(t6,i6,s4)=>{let e6=s4?.renderBefore??i6,h3=e6._$litPart$;if(h3===void 0){let t7=s4?.renderBefore??null;e6._$litPart$=h3=new R(i6.insertBefore(l2(),t7),t7,void 0,s4??{})}return h3._$AI(t6),h3};var r5=class extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let t6=super.createRenderRoot();return this.renderOptions.renderBefore??=t6.firstChild,t6}update(t6){let s4=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t6),this._$Do=B(s4,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return T}};r5._$litElement$=!0,r5.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:r5});var i4=globalThis.litElementPolyfillSupport;i4?.({LitElement:r5});(globalThis.litElementVersions??=[]).push("4.1.1");var t4={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e5=t6=>(...e6)=>({_$litDirective$:t6,values:e6}),i5=class{constructor(t6){}get _$AU(){return this._$AM._$AU}_$AT(t6,e6,i6){this._$Ct=t6,this._$AM=e6,this._$Ci=i6}_$AS(t6,e6){return this.update(t6,e6)}update(t6,e6){return this.render(...e6)}};var{I:t5}=Z;var s3=()=>document.createComment(""),r6=(o5,i6,n5)=>{let e6=o5._$AA.parentNode,l3=i6===void 0?o5._$AB:i6._$AA;if(n5===void 0){let i7=e6.insertBefore(s3(),l3),c5=e6.insertBefore(s3(),l3);n5=new t5(i7,c5,o5,o5.options)}else{let t6=n5._$AB.nextSibling,i7=n5._$AM,c5=i7!==o5;if(c5){let t7;n5._$AQ?.(o5),n5._$AM=o5,n5._$AP!==void 0&&(t7=o5._$AU)!==i7._$AU&&n5._$AP(t7)}if(t6!==l3||c5){let o6=n5._$AA;for(;o6!==t6;){let t7=o6.nextSibling;e6.insertBefore(o6,l3),o6=t7}}}return n5},v2=(o5,t6,i6=o5)=>(o5._$AI(t6,i6),o5),u3={},m2=(o5,t6=u3)=>o5._$AH=t6,p3=o5=>o5._$AH,M2=o5=>{o5._$AP?.(!1,!0);let t6=o5._$AA,i6=o5._$AB.nextSibling;for(;t6!==i6;){let o6=t6.nextSibling;t6.remove(),t6=o6}};var u4=(e6,s4,t6)=>{let r7=new Map;for(let l3=s4;l3<=t6;l3++)r7.set(e6[l3],l3);return r7},c4=e5(class extends i5{constructor(e6){if(super(e6),e6.type!==t4.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e6,s4,t6){let r7;t6===void 0?t6=s4:s4!==void 0&&(r7=s4);let l3=[],o5=[],i6=0;for(let s5 of e6)l3[i6]=r7?r7(s5,i6):i6,o5[i6]=t6(s5,i6),i6++;return{values:o5,keys:l3}}render(e6,s4,t6){return this.dt(e6,s4,t6).values}update(s4,[t6,r7,c5]){let d3=p3(s4),{values:p4,keys:a3}=this.dt(t6,r7,c5);if(!Array.isArray(d3))return this.ut=a3,p4;let h3=this.ut??=[],v3=[],m3,y3,x2=0,j2=d3.length-1,k2=0,w2=p4.length-1;for(;x2<=j2&&k2<=w2;)if(d3[x2]===null)x2++;else if(d3[j2]===null)j2--;else if(h3[x2]===a3[k2])v3[k2]=v2(d3[x2],p4[k2]),x2++,k2++;else if(h3[j2]===a3[w2])v3[w2]=v2(d3[j2],p4[w2]),j2--,w2--;else if(h3[x2]===a3[w2])v3[w2]=v2(d3[x2],p4[w2]),r6(s4,v3[w2+1],d3[x2]),x2++,w2--;else if(h3[j2]===a3[k2])v3[k2]=v2(d3[j2],p4[k2]),r6(s4,d3[x2],d3[j2]),j2--,k2++;else if(m3===void 0&&(m3=u4(a3,k2,w2),y3=u4(h3,x2,j2)),m3.has(h3[x2]))if(m3.has(h3[j2])){let e6=y3.get(a3[k2]),t7=e6!==void 0?d3[e6]:null;if(t7===null){let e7=r6(s4,d3[x2]);v2(e7,p4[k2]),v3[k2]=e7}else v3[k2]=v2(t7,p4[k2]),r6(s4,d3[x2],t7),d3[e6]=null;k2++}else M2(d3[j2]),j2--;else M2(d3[x2]),x2++;for(;k2<=w2;){let e6=r6(s4,v3[w2+1]);v2(e6,p4[k2]),v3[k2++]=e6}for(;x2<=j2;){let e6=d3[x2++];e6!==null&&M2(e6)}return this.ut=a3,m2(s4,v3),T}});function YearMonth(){let scale=this.timeScale,currentDay=this.timeScale.start,ticks=[],currentMonth=currentDay.getMonth(),firstDayOfNextMonth=new Date(currentDay.getFullYear(),currentMonth,1,1),textBaseLine=this.settings.scaleHeight*.25,firstDayOfPrevMonthX=scale.dateToPx(firstDayOfNextMonth);for(;firstDayOfNextMonth<=scale.end;){let str=`${firstDayOfNextMonth.toLocaleString("default",{month:"long"})} ${firstDayOfNextMonth.getFullYear()}`;firstDayOfNextMonth.setMonth(firstDayOfNextMonth.getMonth()+1,1);let firstDayOfNextMonthX=scale.dateToPx(firstDayOfNextMonth),textX=firstDayOfPrevMonthX+(firstDayOfNextMonthX-firstDayOfPrevMonthX)/2;ticks.push({id:str,tpl:b2`
      <g>

        <line
          x1=${firstDayOfNextMonthX}
          x2=${firstDayOfNextMonthX}
          y1=${0}
          y2=${this.settings.scaleHeight/2}
          class="line"       
        />   
        
        <text x=${textX} y=${textBaseLine} 
             class="text small">${str}</text>                
      </g>
      `}),firstDayOfPrevMonthX=firstDayOfNextMonthX}return b2`<g id="yearMonth">
  ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}  
  </g>`}function DayHeader(){let scale=this.timeScale,currentDay=new Date(scale.startMs),ticks=[];for(let day=0;day<=scale.totalDays-1;day++){let x2=day*scale.pxPerDay,textX=x2+scale.pxPerDay/2,currDate=currentDay.getDate();ticks.push({id:day,tpl:b2`
      <g>             
        
        <line
          x1=${x2}
          x2=${x2}
          y1=${this.settings.scaleHeight/2}
          y2=${this.settings.scaleHeight}
          class="line"       
        />   
        <text 
          id=${day} 
          x=${textX} 
          y=${this.settings.scaleHeight*.75} 
          class="text small">
          ${currDate}
        </text>

   
      </g>`}),currentDay.setDate(currentDay.getDate()+1)}return b2`
  <g id="dayHeader">
    ${YearMonth.bind(this)()}
    <line
        x1=${0}
        x2=${this.settings.width}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight/2}
        class="line"
        
      />
    ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}   
  </g>`}var import_dayjs=__toESM(require_dayjs_min(),1),MsInDAY=24*3600*1e3;function getDates(begin,end){let dates=[],s4=new Date(begin);for(s4.setHours(0,0,0,0);s4.getTime()<=end;)dates.push(s4.getTime()),s4=(0,import_dayjs.default)(s4).add(1,"day").toDate();return dates}function getWeeks(begin,end){let dates=[],s4=new Date(begin.setHours(0,0,0,0)),day=s4.getDay();day!==1&&s4.setDate(s4.getDate()-day+1),dates.push(new Date(s4.getTime()));let e6=new Date(end.setHours(0,0,0,0)),eDay=e6.getDay();for(eDay!==1&&e6.setDate(e6.getDate()+(7-eDay)),dates.push(new Date(e6.getTime()));s4<e6;)s4.setDate(s4.getDate()+7),dates.push(new Date(s4.getTime()));return dates}function p2s(arr){return arr.map(p4=>`${p4[0]},${p4[1]}`).join(" ")}function getWeekNumber(date){let startDate=new Date(date.getFullYear(),0,1),days=Math.floor((date.getTime()-startDate.getTime())/(24*60*60*1e3));return Math.ceil(days/7)+1}var import_dayjs2=__toESM(require_dayjs_min(),1);function WeekHeader(){let weeks=getWeeks(this.timeScale.start,this.timeScale.end),ticks=[],d3=this.timeScale.pxPerDay,len=weeks.length-1,oneFourthScaleH=this.settings.scaleHeight/4;for(let i6=0;i6<len;i6++){let cur=new Date(weeks[i6]),x2=this.timeScale.dateToPx(cur),curDay=cur.getDate(),prevDay=(0,import_dayjs2.default)(cur).subtract(1,"day").toDate().getDate(),id="week_"+i6+"_"+prevDay+"-"+curDay,textMargin=this.settings.scaleHeight/6,textOffsetY=this.settings.scaleHeight-textMargin,weekTextOffsetY=oneFourthScaleH*2+textMargin,weekNumber=getWeekNumber((0,import_dayjs2.default)(cur).add(1,"day").toDate());ticks.push({id,tpl:b2`
      <g id=${id}> 
          <text x=${x2-3} y=${textOffsetY} class="text small end">
          ${prevDay}
        </text>       

        <line
          x1=${x2}
          x2=${x2}
          y1=${this.settings.scaleHeight/2}
          y2=${this.settings.scaleHeight}
          class="line"       
        />    
        <text x=${x2+3} y=${textOffsetY} class="text small start">
          ${curDay}
        </text>          
        <text x=${x2+3*d3} y=${weekTextOffsetY} 
          class="text tiny start">
            Week ${weekNumber}
        </text>    
      </g>`})}return b2`
    <g id="weekHeader">
      ${YearMonth.bind(this)()}
      <line
        x1=${0}
        x2=${this.settings.width}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight/2}
        class="line"
        
      />
      ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}
     
    </g>
  `}function Year(years){years.unshift(this.timeScale.startMs),years.push(this.timeScale.end.getTime());let ticks=[],currYear=this.timeScale.start.getFullYear(),lastYear=this.timeScale.end.getFullYear(),currX1=0,maxPx=this.timeScale.dateToPx(this.timeScale.end),oneFourthScaleH=this.settings.scaleHeight/4,y3=0,h3=oneFourthScaleH*2;for(;currYear<=lastYear;){let nextYear=new Date(currYear+1,0,1,1),currX2=this.timeScale.dateToPx(nextYear);currX2>maxPx&&(currX2=maxPx),ticks.push({id:"y_"+currYear,tpl:b2`
      <g>
      
        <line
          x1=${currX2}
          x2=${currX2}
          y1=${y3}
          y2=${h3}
          class="line"       
        />   
          <text 
            x=${(currX2-currX1)/2+currX1} 
            y=${this.settings.scaleHeight*.25} 
            class="text small">
            ${currYear}
          </text>        
      </g>`}),currYear=nextYear.getFullYear(),currX1=currX2}return b2`<g id="year">
   ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}  
  </g>`}function MonthHeader(){let MONTH=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],months=getDates(this.timeScale.startMs,this.timeScale.end.getTime()).filter(v3=>new Date(v3).getDate()===1);months.unshift(this.timeScale.startMs),months.push(this.timeScale.end.getTime());let ticks=[],len=months.length-1;for(let i6=0;i6<len;i6++){let month=new Date(months[i6]).getMonth(),x2=this.timeScale.dateToPx(new Date(months[i6])),t6=(months[i6+1]-months[i6])/this.timeScale.msPerPx,id="hm_"+month,textX=x2+t6/2,line=b2`
    
      <line
        x1=${x2}
        x2=${x2}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight}
        class="line"       
      />    
      `;ticks.push({id,tpl:b2`
      <g>
        ${i6===0?null:line}
        ${t6>30?b2`
          <text x=${textX} y=${this.settings.scaleHeight*.75} class="text small">
            ${MONTH[month]}
          </text>`:null}
      </g>
      `})}let years=months.filter(v3=>new Date(v3).getMonth()===0);return b2`
    <g id="monthHeader">
      ${Year.bind(this)(years)}     
      <line
        x1=${0}
        x2=${this.settings.width}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight/2}
        class="line"
        
      />
       ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}  
    </g>
  `}var import_dayjs3=__toESM(require_dayjs_min(),1);function Grid(settings){let getDayWeekends=()=>{let scale=this.timeScale,currentDay=new Date(scale.startMs),ticks=[],weekendRectH=settings.height;for(let day=0;day<=scale.totalDays-1;day++){let dayOfWeek=currentDay.getDay(),isWeekend=dayOfWeek===0||dayOfWeek===6,x2=day*scale.pxPerDay;isWeekend&&ticks.push({id:currentDay.toDateString(),tpl:b2`<rect x=${x2} y=${0} width=${scale.pxPerDay} height=${weekendRectH} class="weekend" />`}),currentDay.setDate(currentDay.getDate()+1)}return b2`
  <g id="weekends">
    ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}   
  </g>`},getWeekWeekends=()=>{let weeks=getWeeks(this.timeScale.start,this.timeScale.end),ticks=[],y0=0,RH=settings.height,d3=this.timeScale.pxPerDay,len=weeks.length-1;for(let i6=0;i6<len;i6++){let cur=new Date(weeks[i6]),x2=this.timeScale.dateToPx(cur),curDay=cur.getDate(),prevDay=(0,import_dayjs3.default)(cur).subtract(1,"day").toDate(),id="week_"+i6+"_"+prevDay+"-"+curDay;ticks.push({id,tpl:b2`      
        <rect x=${x2-d3*2} y=${y0} width=${d3*2} height=${RH} class="weekend"/>                 
      `})}return b2`
    <g id="weekends">
      ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}     
    </g>
  `},items=[],filteredItems=this.schedule.items.filter(x2=>!x2.hidden);for(let i6=0;i6<filteredItems.length;i6++){let y1=(i6+1)*settings.rowHeight+settings.lineWidth,y0=i6*settings.rowHeight+settings.lineWidth,background=b2``;filteredItems[i6].type==="group"&&(background=b2`
      <rect
        x=${0}
        y=${y0}
        width=${settings.width}
        height=${settings.rowHeight}        
        
        class="group-bg-color"      
      ></rect>
    `),items.push({id:i6,tpl:b2`
        ${background}
        <line key=${i6} x1="0" x2=${settings.width} y1=${y1} y2=${y1} class="line"/>`})}let weekend=null;return this.timeScale.viewMode==="week"&&(weekend=getWeekWeekends()),this.timeScale.viewMode==="day"&&(weekend=getDayWeekends()),b2`   
  ${weekend}
  <g id="grid">
  
    <line        
        x1=${0}
        x2=${settings.width}
        y1=${settings.lineWidth}
        y2=${settings.lineWidth}
        class="line"
        
      />
    ${c4(items,i6=>i6.id,i6=>i6.tpl)}           
  </g>
`}function createRoundedPathString(p4){let pathCoords=p4.map(i6=>({x:i6[0],y:i6[1]})),path=["M"+pathCoords[0].x+","+pathCoords[0].y],curveRadius=3,lastInd=pathCoords.length-1;pathCoords[lastInd-1].x<pathCoords[lastInd].x?pathCoords[lastInd].x+=curveRadius/2:pathCoords[lastInd].x-=curveRadius/2;for(let i6=0;i6<pathCoords.length;i6++){let c2Index=i6+1>lastInd?(i6+1)%pathCoords.length:i6+1,c3Index=i6+2>lastInd?(i6+2)%pathCoords.length:i6+2,c1=pathCoords[i6],c22=pathCoords[c2Index],c32=pathCoords[c3Index],c1c2Distance=Math.sqrt(Math.pow(c1.x-c22.x,2)+Math.pow(c1.y-c22.y,2)),c1c2DistanceRatio=(c1c2Distance-curveRadius)/c1c2Distance,c1c2CurvePoint=[((1-c1c2DistanceRatio)*c1.x+c1c2DistanceRatio*c22.x).toFixed(1),((1-c1c2DistanceRatio)*c1.y+c1c2DistanceRatio*c22.y).toFixed(1)],c2c3Distance=Math.sqrt(Math.pow(c22.x-c32.x,2)+Math.pow(c22.y-c32.y,2)),c2c3DistanceRatio=curveRadius/c2c3Distance;if(i6!==lastInd)if(path.push("L"+c1c2CurvePoint.join(",")),i6===lastInd-1)path.push("L"+c22.x+","+c22.y);else{let c2c3CurvePoint=[((1-c2c3DistanceRatio)*c22.x+c2c3DistanceRatio*c32.x).toFixed(1),((1-c2c3DistanceRatio)*c22.y+c2c3DistanceRatio*c32.y).toFixed(1)];path.push("Q"+c22.x+","+c22.y+","+c2c3CurvePoint.join(","))}}return path.join(" ")}function getSortedItems(s4,schedule){switch(s4.sortActivities){case"default":return schedule.items;case"finish":return[...schedule.items].sort((a3,b3)=>{let diff=a3.earlyFinish.getTime()-b3.earlyFinish.getTime();return diff===0?sortByIndex(a3,b3,schedule):diff});case"start":return[...schedule.items].sort((a3,b3)=>{let diff=a3.earlyStart.getTime()-b3.earlyStart.getTime();return diff===0?sortByIndex(a3,b3,schedule):diff})}}function sortByIndex(a3,b3,schedule){let aInd=schedule.items.findIndex(x2=>x2.id===a3.id),bInd=schedule.items.findIndex(x2=>x2.id===b3.id);return aInd-bInd}function LinkLines(){let itemsIdsMap=this.schedule.itemsIndex,_items=getSortedItems(this.settings,this.schedule),hiddenItems=new Set(_items.filter(x2=>x2.hidden==!0).map(x2=>x2.id));return b2`
    <g class="link-lines" >
      ${this.schedule.dependencies.sort((a3,b3)=>{let aa=+(itemsIdsMap.get(a3.predecessor).crit&&itemsIdsMap.get(a3.successor).crit),bb=+(itemsIdsMap.get(b3.predecessor).crit&&itemsIdsMap.get(b3.successor).crit);return aa-bb}).filter(x2=>!hiddenItems.has(x2.predecessor)&&!hiddenItems.has(x2.successor)).map(s4=>renderLink.bind(this)(s4,_items,itemsIdsMap.get(s4.predecessor.toString()),itemsIdsMap.get(s4.successor.toString())))}
    </g>`}function renderLink(l3,sortedItems,source,target){let targetItem=target??this.schedule.itemsIndex.get(l3.successor.toString()),sourceItem=source??this.schedule.itemsIndex.get(l3.predecessor.toString());if(!targetItem||!targetItem.earlyStart||!targetItem.earlyFinish||!sourceItem||!sourceItem.earlyStart||!sourceItem.earlyFinish)return null;let y0=this.settings.rowHeight/2,i6=sortedItems.filter(x2=>!x2.hidden).findIndex(x2=>x2.id===sourceItem.id),j2=sortedItems.filter(x2=>!x2.hidden).findIndex(x2=>x2.id===targetItem.id),gap=12,arrow=3,mgap=targetItem.type==="milestone"?this.settings.barHeight/2:0,y1=y0+i6*this.settings.rowHeight,y22=y0+j2*this.settings.rowHeight,vgap=this.settings.barHeight/2+4;y1>y22&&(vgap=-vgap);let sEndX=this.timeScale.dateToPx(sourceItem.earlyFinish),sStartX=this.timeScale.dateToPx(sourceItem.earlyStart),eEndX=this.timeScale.dateToPx(targetItem.earlyFinish),eStartX=this.timeScale.dateToPx(targetItem.earlyStart),drawLineWithArrow=(p1,p22)=>{let id=`${l3.predecessor}-${l3.successor}-${l3.type}`,cssClass="link";return sourceItem.crit&&targetItem.crit&&(cssClass+=" crit"),b2`
    <g 
      id=${id} 
      class=${cssClass}
      data-source=${l3.predecessor} 
      data-target=${l3.successor} 
      data-link-type=${l3.type}>
      <path d=${createRoundedPathString(p1)} class="link-line" ></path>     
      <polygon points=${p2s(p22)} class="line-arrow" />
    </g>`};if(l3.type==="FS"){let x1=sEndX,x2=eStartX-mgap,p1=[[x1,y1],[x1+gap,y1]];x2-x1>=2*gap?p1.push([x1+gap,y22]):(p1.push([x1+gap,y22-vgap]),p1.push([x2-gap,y22-vgap]),p1.push([x2-gap,y22])),p1.push([x2-arrow,y22]);let p22=[[x2-arrow,y22-arrow],[x2,y22],[x2-arrow,y22+arrow]];return drawLineWithArrow(p1,p22)}if(l3.type==="FF"){let x1=sEndX,x2=eEndX+mgap,p1=[[x1,y1],[x1+gap,y1]];x2<=x1?p1.push([x1+gap,y22]):(p1.push([x1+gap,y22-vgap]),p1.push([x2+gap,y22-vgap]),p1.push([x2+gap,y22])),p1.push([x2+arrow,y22]);let p22=[[x2+arrow,y22-arrow],[x2,y22],[x2+arrow,y22+arrow]];return drawLineWithArrow(p1,p22)}if(l3.type==="SS"){let x1=sStartX,x2=eStartX-mgap,p1=[[x1,y1],[x1-gap,y1]];x1<=x2?p1.push([x1-gap,y22]):(p1.push([x1-gap,y22-vgap]),p1.push([x2-gap,y22-vgap]),p1.push([x2-gap,y22])),p1.push([x2-arrow,y22]);let p22=[[x2-arrow,y22-arrow],[x2,y22],[x2-arrow,y22+arrow]];return drawLineWithArrow(p1,p22)}if(l3.type==="SF"){let x1=sStartX,x2=eEndX+mgap,p1=[[x1,y1],[x1-gap,y1]];x1-x2>=2*gap?p1.push([x1-gap,y22]):(p1.push([x1-gap,y22-vgap]),p1.push([x2+gap,y22-vgap]),p1.push([x2+gap,y22])),p1.push([x2+arrow,y22]);let p22=[[x2+arrow,y22-arrow],[x2,y22],[x2+arrow,y22+arrow]];return drawLineWithArrow(p1,p22)}return null}function renderMilestone(x2,cy,barHeight,handler,id,v3){let halfBarHeight=barHeight/2;if(isNaN(x2)||isNaN(halfBarHeight))throw Error(`Invalid args: x: ${x2}; barHeight: ${barHeight}`);let points=[[0,halfBarHeight],[halfBarHeight,0],[barHeight,halfBarHeight],[halfBarHeight,barHeight]].map(p4=>`${p4[0]},${p4[1]}`).join(" "),cssClass=v3.crit?"milestone crit":"milestone";return{id,tpl:b2`
    
    <svg 
      x=${x2-halfBarHeight}
      y=${cy}
      id=${id}     
      data-item-id=${v3.id}               
      class="gantt-bar"                  
    >
      
      <polygon
        points=${points}
        class=${cssClass}            
        @click=${handler}
      />
      <circle
        class="ctl-start"
        data-id=${v3.id}
        cx=${halfBarHeight}
        cy=${halfBarHeight}
        r=${6}          
      />
    </svg>
  `}}function getControlGap(settings){return settings.rowHeight/6}function Bar(settings){let dataDateX=this.timeScale.dateToPx(this.schedule.dataDate),y0=(settings.rowHeight-settings.barHeight)/2,todayX=this.timeScale.dateToPx(new Date(new Date().setHours(0,0,0,0))),scale=this.timeScale,bars=getSortedItems(this.settings,this.schedule).filter(x2=>!x2.hidden).map((v3,i6)=>{let id="bar_"+v3.id,handler=()=>{if(this.suppressClick)return;let ev=new CustomEvent("item-click",{detail:v3});this.dispatchEvent(ev)},x2=scale.dateToPx(v3.earlyStart),y3=y0+i6*settings.rowHeight,grHeight=settings.barHeight/3;v3.type==="group"&&(y3=(settings.rowHeight-grHeight)/2+i6*settings.rowHeight);let cy=settings.barHeight/2+1;if(v3.type==="milestone")return renderMilestone.bind(this)(x2,y3,settings.barHeight,handler,id,v3);let w1=scale.pxForTimeSpan(v3.earlyStart,v3.earlyFinish);if(isNaN(w1))throw Error("Invalid argument: v: "+v3);let progressDate=v3.getProgressDate(),w2=scale.pxForTimeSpan(v3.earlyStart,progressDate),barCss2="gantt-bar";barCss2+=v3.type==="group"?" group":"";let controlRadius=settings.rowHeight/6,controlGap=getControlGap(settings),controlBorder=1,controlsOffset=controlRadius*2+controlGap+controlBorder*2,isDelayed=v3.type==="activity"&&v3.delayDays>0,borderCssClass=v3.crit?"bar-inner-border crit":"bar-inner-border";isDelayed&&(borderCssClass+=" delayed");let barBorder=b2`
    <rect
      x=${controlsOffset}
      y="1"
      width=${w1}
      height=${v3.type==="group"?grHeight:settings.barHeight}    
      rx=${1.8}
      ry=${1.8}
      class=${borderCssClass}
    
      @click=${handler}    
    />
    `,backBar=b2`
      <rect
        x=${controlsOffset}        
        y="1"
        width=${w1}
        height=${v3.type==="group"?grHeight:settings.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${handler}    
      />
      `,frontBarCss="front";isDelayed&&(frontBarCss+=" delayed");let frontBar=w2>1e-6?b2`
          <rect
            y="1"
            x=${controlsOffset}            
            width=${w2}
            height=${v3.type==="group"?grHeight:settings.barHeight}
            rx=${1.8}
            ry=${1.8}
            class=${frontBarCss}
            @click=${handler}
            />`:null;if(isDelayed){let end=Math.min(new Date().setHours(0,0,0,0),v3.earlyFinish.getTime()),delayW=scale.pxForTimeSpan(v3.earlyStart,new Date(end)),delayBar=w2>1e-6?b2`
            <rect
              y="1"
              x=${controlsOffset}            
              width=${delayW}
              height=${settings.barHeight}
              rx=${1.8}
              ry=${1.8}
              class="delay"
              @click=${handler}
              />`:null;frontBar=b2`
        ${delayBar}${frontBar}
      `}let controls=b2``;return this.settings.enableChartInteractions===!0&&v3.type==="activity"&&(controls=b2`
        <circle
          class=${v3.type+" ctl-start"}
          data-id=${v3.id}           
          cx=${controlBorder+controlRadius}
          cy=${cy}
          r=${controlRadius}
        />
        <circle
          class=${v3.type+" ctl-finish"}
          data-id=${v3.id}
          cx=${w1+controlsOffset+controlGap+controlRadius}
          cy=${cy}
          r=${controlRadius}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${controlsOffset+controlGap}
            y="1"
            height=${settings.barHeight} 
            width=${settings.barHeight} 
            style="opacity:0"
          />
          <svg 
            y="1"
            x=${controlsOffset+controlGap}
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
      `),{id,tpl:b2` 
     
      <svg 
        x=${x2-controlsOffset} 
        y=${y3-1}              
        id=${id}
        key=${i6}       
        .item=${v3}
        data-item-id=${v3.id}        
        class=${barCss2}
        style=${v3.color?`--gantt-bar-group-front-fill: ${v3.color}; --gantt-bar-group-back-fill: ${v3.color}; --gantt-bar-inner-border-color:  ${v3.color};`:""}
       
      >      
        ${backBar}
        ${frontBar}
        ${barBorder}
        ${controls}
    
      </svg>
    `}});return b2`
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
      
      ${c4(bars,i6=>i6.id,i6=>i6.tpl)} 
    </g>
  `}var import_dayjs4=__toESM(require_dayjs_min(),1);function renderMilestone2(x2,cy,barHeight,handler,id,v3){let halfBarHeight=barHeight/2,points=[[0,halfBarHeight],[halfBarHeight,0],[barHeight,halfBarHeight],[halfBarHeight,barHeight]].map(p4=>`${p4[0]},${p4[1]}`).join(" "),baseline=b2``;if(this.baselineSchedule){let bl=this.baselineSchedule.itemsIndex.get(v3.id);if(bl){let blStart=bl.earlyStart;baseline=b2`
        <svg 
          x=${this.timeScale.dateToPx(blStart)-halfBarHeight}
          y=${cy+3}
          id=${id+"-bl"}     
          data-item-id=${v3.id}               
          class="gantt-bar baseline"                  
        >        
          <polygon
            points=${points}
            class="milestone"            
            @click=${handler}
          />         
        </svg>
      `}}return{id,tpl:b2`
      ${baseline}
    `}}function BarBaseline(settings){if(!this.baselineSchedule)return;let dataDateX=this.timeScale.dateToPx(this.baselineSchedule.dataDate),y0=(settings.rowHeight-settings.barHeight)/2,todayX=this.timeScale.dateToPx(new Date(new Date().setHours(0,0,0,0))),scale=this.timeScale,bars=getSortedItems(this.settings,this.schedule).filter(x2=>!x2.hidden).map((v3,i6)=>{let id="bar_"+v3.id+"_baseline",x2=scale.dateToPx(v3.earlyStart),y3=y0+i6*settings.rowHeight,grHeight=settings.barHeight/3;if(v3.type==="group"&&(y3=(settings.rowHeight-grHeight)/2+i6*settings.rowHeight),v3.type==="milestone")return renderMilestone2.bind(this)(x2,y3,settings.barHeight,()=>{},id,v3);let barCss2="gantt-bar";barCss2+=v3.type==="group"?" group":"";let controlRadius=settings.rowHeight/6,controlGap=getControlGap(settings),controlsOffset=controlRadius*2+controlGap+1*2,barBaseline=b2``;if(this.baselineSchedule){let bl=this.baselineSchedule.itemsIndex.get(v3.id);if(bl){let progressDate=(0,import_dayjs4.default)(bl.earlyStart).add(bl.progressDays,"days").toDate(),progressW=scale.pxForTimeSpan(bl.earlyStart,progressDate);barBaseline=b2`
          <svg 
          x=${scale.dateToPx(bl.earlyStart)-controlsOffset} 
          y=${y3-1}              
          id=${id}
          key=${i6}       
          .item=${v3}
          data-item-id=${v3.id}        
          class=${barCss2}          
          >     
              <rect
                id=${"bl-"+bl.id}
                x=${controlsOffset}
                y="4"
                width=${scale.pxForTimeSpan(bl.earlyStart,bl.earlyFinish)}
                height=${bl.type==="group"?grHeight:settings.barHeight}
                rx=${1.8}
                ry=${1.8}
                class="back baseline"                    
              />
              <rect
                id=${"bl-progress"+bl.id}
                x=${controlsOffset}
                y="4"
                width=${progressW}
                height=${bl.type==="group"?grHeight:settings.barHeight}
                rx=${1.8}
                ry=${1.8}
                class="front baseline"                    
              />
          </svg>
        `}}return{id,tpl:b2` 
        ${barBaseline}
      `}});return b2`
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
      
      ${c4(bars,i6=>i6.id,i6=>i6.tpl)} 
    </g>
  `}function QuarterHeader(){let Q_START_MONTH=[0,3,6,9],months=getDates(this.timeScale.startMs,this.timeScale.end.getTime()).filter(v3=>{let cur=new Date(v3);return cur.getDate()===1&&Q_START_MONTH.includes(cur.getMonth())});months.unshift(this.timeScale.startMs),months.push(this.timeScale.end.getTime());let ticks=[],len=months.length-1;for(let i6=0;i6<len;i6++){let currMonthNo=new Date(months[i6]).getMonth()+1,currQ=Math.ceil(currMonthNo/3),x2=this.timeScale.dateToPx(new Date(months[i6])),t6=(months[i6+1]-months[i6])/this.timeScale.msPerPx,id="hm_"+currMonthNo,textX=x2+t6/2,line=b2`
    
      <line
        x1=${x2}
        x2=${x2}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight}
        class="line"       
      />    
      `;ticks.push({id,tpl:b2`
      <g>
        ${i6===0?null:line}
        ${t6>30?b2`
          <text x=${textX} y=${this.settings.scaleHeight*.75} class="text small">
            ${"Q"+currQ}
          </text>`:null}
      </g>
      `})}let years=months.filter(v3=>new Date(v3).getMonth()===0);return b2`
    <g id="monthHeader">
      ${Year.bind(this)(years)}     
      <line
        x1=${0}
        x2=${this.settings.width}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight/2}
        class="line"
        
      />
       ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}  
    </g>
  `}function YearHeader(){let months=getDates(this.timeScale.startMs,this.timeScale.end.getTime()).filter(v3=>{let cur=new Date(v3);return cur.getDate()===1&&cur.getMonth()===0});months.unshift(this.timeScale.startMs),months.push(this.timeScale.end.getTime());let ticks=[],len=months.length-1;for(let i6=0;i6<len;i6++){let currY=new Date(months[i6]).getFullYear(),x2=this.timeScale.dateToPx(new Date(months[i6])),t6=(months[i6+1]-months[i6])/this.timeScale.msPerPx,id="hm_"+currY,textX=x2+t6/2,line=b2`
    
      <line
        x1=${x2}
        x2=${x2}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight}
        class="line"       
      />    
      `;ticks.push({id,tpl:b2`
      <g>
        ${i6===0?null:line}
        ${t6>30?b2`
          <text x=${textX} y=${this.settings.scaleHeight*.75} class="text small">
               &nbsp;
          </text>`:null}
      </g>
      `})}let years=months.filter(v3=>new Date(v3).getMonth()===0);return b2`
    <g id="monthHeader">
      ${Year.bind(this)(years)}     
      <line
        x1=${0}
        x2=${this.settings.width}
        y1=${this.settings.scaleHeight/2}
        y2=${this.settings.scaleHeight/2}
        class="line"
     
      />
       ${c4(ticks,i6=>i6.id,i6=>i6.tpl)}  
    </g>
  `}function Gantt(){let box=`0 0 ${this.settings.width} ${this.settings.height}`,linkLines=this.settings.showDependencies?LinkLines.bind(this)():null;return b2`
    <svg id="gantt" 
      width=${this.settings.width} 
      height=${this.settings.height} 
      viewBox=${box}>
    
     

      ${Grid.bind(this)(this.settings)}        
      ${BarBaseline.bind(this)(this.settings)}   
      ${linkLines}
      ${Bar.bind(this)(this.settings)}     
     
    </svg>
  `}function getHeader(settings){let res;switch(settings.timeScaleMode){case"day":res=DayHeader.bind(this)();break;case"month":res=MonthHeader.bind(this)();break;case"week":res=WeekHeader.bind(this)();break;case"quarter":res=QuarterHeader.bind(this)();break;case"year":res=YearHeader.bind(this)();break;case"auto":this.timeScale.totalDays<=90?res=DayHeader.bind(this)():this.timeScale.totalDays<=180?res=WeekHeader.bind(this)():this.timeScale.totalDays<=365?res=MonthHeader.bind(this)():this.timeScale.totalDays<=365*2?res=QuarterHeader.bind(this)():res=YearHeader.bind(this)();break}let box=`0 0 ${this.settings.width} ${this.settings.scaleHeight}`;return b2`
   <svg id="gantt-h" 
      width=${this.settings.width} 
      height=${this.settings.scaleHeight} 
      viewBox=${box}>
      <defs>
        <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>              
          <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
        </linearGradient>       
      </defs>
      ${res}
    </svg>
    `}var controlsCss=i`
  :host {
    --gantt-active-ctl-fill: #ffbf5e;
    --gantt-active-ctl-stroke: #ffa011;
    --gantt-inactive-ctl-fill: #f0f0f0;
    --gantt-inactive-ctl-stroke: #929292;
    --ctl-stroke-width: 1px;
  }

  .gantt-bar:hover .ctl-start:not([disabled]),
  .gantt-bar:hover .ctl-finish:not([disabled]),
  .gantt-bar:hover .ctl-resize-start,
  .gantt-bar:hover .ctl-resize-end {
    opacity: 1;
  }
  /* 
  fill: var(--gantt-inactive-ctl-fill); */

  .ctl-start[active],
  .ctl-finish[active],
  .ctl-start:not([disabled]):hover,
  .ctl-finish:not([disabled]):hover {
    opacity: 1;
    cursor: grabbed;
    fill: var(--gantt-active-ctl-fill, #ffbf5e);
    stroke: var(--gantt-active-ctl-stroke, #60584c);
  }

  .ctl-start,
  .ctl-finish {
    cursor: grab;
    opacity: 0;
    position: relative;
    display: block;
    fill: var(--gantt-inactive-ctl-fill, #f0f0f0);
    stroke: var(--gantt-inactive-ctl-stroke, #929292);
    stroke-width: var(--ctl-stroke-width, 1px);
  }
  .ctl-start[disabled],
  .ctl-finish[disabled] {
    opacity: 0;
    cursor: default;
  }

  .ctl-resize-start[active],
  .ctl-resize-end[active],
  .ctl-resize-start:hover,
  .ctl-resize-end:hover {
    opacity: 1;
    fill: var(--gantt-active-ctl-fill);
    stroke: var(--gantt-active-ctl-fill);
  }
  .ctl-resize-start,
  .ctl-resize-end {
    cursor: ew-resize;
    opacity: 0;
    fill: var(--gantt-inactive-ctl-fill);
    stroke: var(--gantt-inactive-ctl-fill);
  }
`;var linkLineCss=i`
  :host {
    --gantt-link-line-hover-stroke-width: 2.5;
    --gantt-link-line-stroke: #ffa011;
    --gantt-link-line-stroke-width: 1.5px;
  }
  .link:hover .link-line {
    stroke-width: var(--gantt-link-line-hover-stroke-width, 2.5);
    cursor: pointer;
  }
  .link:hover .link-line,
  .link:hover .line-arrow {
    stroke-width: var(--gantt-link-line-hover-stroke-width, 2.5);
    stroke: var(--gantt-link-line-stroke, #ffa011);
    cursor: pointer;
  }
  .link.crit:hover .line-arrow {
    stroke: var(--gantt-critical-path-color);
  }

  .link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    fill: none;
    stroke-width: var(--gantt-link-line-stroke-width, 1.5px);
  }
  .line-arrow {
    stroke: unset;
    fill: var(--gantt-link-line-stroke, #ffa011);
  }

  .link.crit .link-line {
    stroke: var(--gantt-critical-path-color);
  }

  .link.crit .line-arrow {
    fill: var(--gantt-critical-path-color);
  }

  .add-link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    stroke-width: 2;
    stroke-dasharray: 5;
  }
`;var barCss=i`
  :host {
    --gantt-milestone-color: #d33daf;
    --gantt-bar-back-fill: #83d78c;
    --gantt-bar-front-fill: #46ad51;
    --gantt-bar-group-back-fill: #3db9d3;
    --gantt-bar-group-front-fill: #299cb4;
    --gantt-bar-today-line-stroke: #f04134;
    --gantt-bar-today-line-stroke-width: 1px;
    --gantt-bar-data-line-stroke: #06b9f1;
    --gantt-bar-data-line-stroke-width: 1px;
    --gantt-bar-inner-border-color: var(--gantt-chart-bg-color);
    --gantt-bar-outer-border-color: var(--gantt-chart-bg-color);
    --gantt-critical-path-color: #2d22f5;

    --gantt-bar-front-delayed-fill: #0f751a;
    --gantt-delay-fill-color: #46ad51;
    --gantt-delayed-border-color: #0f751a;

    --gantt-baseline-color: #bcbcbc;
    --gantt-baseline-dark: #9d9d9d;
  }

  .gantt-bar {
    cursor: pointer;
  }
  .milestone {
    fill: var(--gantt-milestone-color, #d33daf);
    stroke: unset;
  }
  .milestone.crit {
    stroke: var(--gantt-bar-inner-border-color);
  }

  .bar-outer-border {
    stroke: var(--gantt-bar-outer-border-color);
    stroke-width: 1px;
    fill: transparent;
  }

  .bar-inner-border {
    stroke: var(--gantt-bar-inner-border-color);
    stroke-width: 1px;
    fill: transparent;
  }

  .gantt-bar .back {
    fill: var(--gantt-bar-back-fill, #65c16f);
  }
  .gantt-bar[warning] .back {
    fill: var(--gantt-bar-warning-back-fill, #faad14);
  }
  .gantt-bar[danger] .back {
    fill: var(--gantt-bar-danger-back-fill, #f5222d);
  }

  .gantt-bar .delayed {
    --gantt-bar-inner-border-color: var(--gantt-delayed-border-color);
  }

  .gantt-bar .front {
    fill: var(--gantt-bar-front-fill, #46ad51);
  }

  .gantt-bar .delay {
    fill: var(--gantt-delay-fill-color, #46ad51);
  }

  .gantt-bar .front.delayed {
    fill: var(--gantt-bar-front-delayed-fill, #46ad51);
  }

  .gantt-bar.group .back {
    fill: var(--gantt-bar-group-back-fill, #3db9d3);
  }
  .gantt-bar.group .front {
    fill: var(--gantt-bar-group-front-fill, #299cb4);
  }

  .today-line {
    stroke: var(--gantt-bar-today-line-stroke, #f04134);
    stroke-width: var(--gantt-bar-today-line-stroke-width, 1px);
  }
  .today-circle {
    fill: var(--gantt-bar-today-line-stroke, #f04134);
  }
  .data-date-line {
    stroke: var(--gantt-bar-data-line-stroke);
    stroke-width: var(--gantt-bar-data-line-stroke-width, 1px);
  }
  .data-date-circle {
    fill: var(--gantt-bar-data-line-stroke);
  }

  .bar-inner-border.crit.delayed,
  .crit {
    --gantt-bar-inner-border-color: var(--gantt-critical-path-color);
  }
  .baseline {
    --gantt-milestone-color: var(--gantt-baseline-color);
    --gantt-bar-back-fill: var(--gantt-baseline-color);

    --gantt-bar-front-fill: var(--gantt-baseline-dark);
    --gantt-bar-group-back-fill: var(--gantt-baseline-color);
    --gantt-bar-group-front-fill: var(--gantt-baseline-dark);
    --gantt-bar-today-line-stroke: var(--gantt-baseline-dark);
    --gantt-bar-data-line-stroke: var(--gantt-baseline-dark);
  }
`;var layoutCss=i`
  :host {
    --gantt-layout-bar-height: 16px;
    --gantt-layout-row-height: 40px;
    --gantt-layout-time-scale-height: 60px;
    --gantt-chart-bg-color: #fff;
    --gantt-layout-line-stroke: #eee;
    --gantt-layout-line-scale-stroke: #b7b7b7;
    --gantt-layout-line-width: 1px;
    --gantt-layout-text-fill: #222;
    --gantt-layout-font-size: 14px;
    --gantt-layout-small-text-fill: #999;
    --gantt-layout-small-font-size: 12px;
    --gantt-layout-tiny-text-fill: #999;
    --gantt-layout-tiny-font-size: 8px;
    --gantt-day-header-weekend-fill: rgba(252, 248, 227, 0.6);
    --gantt-group-bar-bg-fill: #299cb412;
  }

  .box {
    fill: var(--gantt-chart-bg-color, #fff);
  }

  .line {
    stroke: var(--gantt-layout-line-stroke, #eee);
    stroke-width: var(--gantt-layout-line-width);
  }

  /* .line.flip {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(180deg);
  } */

  /* .line.scale {
    fill: var(--gantt-layout-line-scale-stroke);
    
    stroke-width: 0;
  } */

  .text {
    text-anchor: middle;
    fill: var(--gantt-layout-text-fill);
    dominant-baseline: central;
    font-size: var(--gantt-layout-font-size);
  }

  .text.start {
    text-anchor: start;
  }
  .text.end {
    text-anchor: end;
  }

  .text.small {
    fill: var(--gantt-layout-small-text-fill);
    font-size: var(--gantt-layout-small-font-size);
  }
  .text.tiny {
    fill: var(--gantt-layout-tiny-text-fill);
    font-size: var(--gantt-layout-tiny-font-size);
  }

  .weekend {
    fill: var(--gantt-day-header-weekend-fill);
  }

  .labels {
    margin-top: calc(var(--gantt-layout-line-width) / 2);
  }

  .lbl {
    display: flex;
    align-items: center;
    cursor: pointer;
    height: var(--gantt-layout-row-height);
    box-sizing: border-box;
    border-top: var(--gantt-layout-line-width) solid
      var(--gantt-layout-line-stroke);
  }
  .lbl:hover {
    color: #1582dc;
  }
  .group-bg-color {
    fill: var(--gantt-group-bar-bg-fill, §#299cb412);
  }
`;function findNotAllowedItems(s4,startId){return getPrecedingClosures(s4,startId)}function getPrecedingClosures(s4,startId){let notAllowedItems=new Set;for(let d3 of s4.dependencies.filter(x2=>x2.successor===startId))notAllowedItems.add(d3.predecessor),getPrecedingClosures(s4,d3.predecessor).forEach(x2=>notAllowedItems.add(x2));return notAllowedItems}function configureAddLink(){let svg2=this.shadowRoot.getElementById("gantt");function isStart(el){return el.classList.contains("ctl-start")}function isFinish(el){return el.classList.contains("ctl-finish")}let addLink=(s4,e6)=>{let sid=s4.dataset.id,eid=e6.dataset.id;if(sid===eid)return;let startNode=this.schedule.itemsIndex.get(sid),endNode=this.schedule.itemsIndex.get(eid),startType=isStart(s4)?"S":"F",endType=isStart(e6)?"S":"F";startNode.type==="milestone"&&(startType="F"),endNode.type==="milestone"&&(endType="S");let link={predecessor:sid,successor:eid,type:`${startType}${endType}`,lag:0};if(this.schedule.dependencies.find(x2=>x2.predecessor===sid&&x2.successor===eid))return;let isCanceled=!1,evArgs={link,cancel:()=>{isCanceled=!0}},ev=new CustomEvent("before-link-added",{detail:evArgs});this.dispatchEvent(ev),isCanceled||(this.schedule.dependencies.push(link),this.requestUpdate())},NS="http://www.w3.org/2000/svg",moving=!1,start=null,line=null,hideFinish=!1,notAllowedItems=new Set,getControlX=ctl=>ctl.parentElement.x.baseVal.value+ctl.cx.baseVal.value,getControlY=ctl=>ctl.parentElement.y.baseVal.value+ctl.cy.baseVal.value;svg2.addEventListener("mousedown",e6=>{if(!isStart(e6.target)&&!isFinish(e6.target))return;e6.preventDefault(),start=e6.target;let isDependencyStart=isStart(start);hideFinish=this.settings.disableSF&&isDependencyStart,hideFinish&&this.shadowRoot.querySelectorAll(".activity.ctl-finish").forEach(e7=>e7.toggleAttribute("disabled",!0));let sid=start.dataset.id;notAllowedItems=findNotAllowedItems(this.schedule,sid),notAllowedItems.add(sid);let existingDeps=this.schedule.dependencies.filter(x3=>x3.predecessor===sid);for(let e7 of existingDeps)notAllowedItems.add(e7.successor);Array.from(hideFinish?this.shadowRoot.querySelectorAll(".activity.ctl-start"):this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish")).filter(x3=>!notAllowedItems.has(x3.dataset.id)).forEach(elem=>{elem.toggleAttribute("active",!0)}),moving=!0,line=document.createElementNS(NS,"line");let x2=getControlX(start).toString(),y3=getControlY(start).toString();line.setAttribute("x1",x2),line.setAttribute("y1",y3),line.setAttribute("x2",x2),line.setAttribute("y2",y3),line.classList.add("add-link-line"),svg2.appendChild(line)}),svg2.addEventListener("mousemove",e6=>{let target=e6.target;if(moving)if(e6.preventDefault(),isStart(target)||isFinish(target)){let x2=getControlX(target).toString(),y3=getControlY(target).toString();line.setAttribute("x2",x2),line.setAttribute("y2",y3)}else{let x2=e6.clientX,y3=e6.clientY,rect=svg2.getBoundingClientRect();line.setAttribute("x2",(x2-rect.left).toString()),line.setAttribute("y2",(y3-rect.top).toString())}});let resetMovingControls=e6=>{moving&&(e6.preventDefault(),e6.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(elem=>{elem.toggleAttribute("active",!1),elem.toggleAttribute("disabled",!1)}),moving=!1,line&&(svg2.removeChild(line),line=null))};svg2.addEventListener("mouseup",e6=>{resetMovingControls(e6);let target=e6.target,isCtrl=isStart(target)||isFinish(target);if(hideFinish&&isFinish(target)){start=null,hideFinish=!1;return}start&&isCtrl&&addLink(start,target),start=null,hideFinish=!1}),this.addEventListener("mouseout",e6=>{resetMovingControls(e6),start=null,hideFinish=!1})}var svg,resizeItem=(itm,diffMs,resizeStart)=>{if(!svg)return;let diffDays=Math.abs(Math.round(diffMs/MsInDAY));resizeStart?diffMs>0?itm.setWorkingDaysDuration(Math.max(itm.duration-diffDays,1)):itm.setWorkingDaysDuration(itm.duration+diffDays):diffMs<0?itm.setWorkingDaysDuration(Math.max(itm.duration-diffDays,1)):itm.setWorkingDaysDuration(itm.duration+diffDays)};function configureResizeItem(){svg=this.shadowRoot.getElementById("gantt");let moving=!1,movingStarted=!1,barSvg,itemId,item,resizeStart=!1,initialX;function isResizeControl(e6){let p4=e6.composedPath(),_resizeStart=!1,_resizeEnd=!1;for(let x2 of p4)if(_resizeStart=x2.classList?.contains("ctl-resize-start"),_resizeEnd=x2.classList?.contains("ctl-resize-end"),_resizeStart||_resizeEnd)break;return _resizeStart||_resizeEnd?(resizeStart=_resizeStart,!0):!1}let resetMovement=()=>{resizeStart=!1,moving=!1,barSvg=void 0,initialX=void 0,item=void 0,movingStarted=!1},cancelEvent=e6=>{e6.preventDefault(),e6.stopPropagation(),e6.stopImmediatePropagation()},onMouseDown=e6=>{!isResizeControl(e6)||moving||(movingStarted=!0,initialX=e6.clientX,barSvg=e6.composedPath().find(x2=>x2.classList.contains("gantt-bar")),itemId=barSvg.dataset.itemId,itemId&&(cancelEvent(e6),item=this.schedule.itemsIndex.get(itemId)))},onMouseMove=async e6=>{if(!movingStarted)return;cancelEvent(e6),moving=!0;let dir=e6.movementX>0?1:-1,diff=Math.abs(initialX-e6.clientX)*this.timeScale.msPerPx*dir;diff!==0&&(Math.abs(diff)<MsInDAY||(resizeItem(item,diff,resizeStart),initialX=e6.clientX,this.requestUpdate()))},onMouseUp=e6=>{if(movingStarted){if(moving){this.___lastMovement=new Date().getTime();let ev=new CustomEvent("item-resized",{detail:item});this.dispatchEvent(ev)}resetMovement(),cancelEvent(e6)}};svg.addEventListener("mousedown",onMouseDown),svg.addEventListener("mousemove",onMouseMove),svg.addEventListener("mouseup",onMouseUp),this.addEventListener("mouseout",()=>{resetMovement()})}var WcGanttSettings=class{constructor(){this.disableSF=!1;this.timeScaleMode="week";this.showDependencies=!0;this.showLabels=!0;this.showCriticalPath=!0;this.startDate=new Date(new Date().setHours(0,0,0,0));this.dataDate=new Date(new Date().setHours(0,0,0,0));this.baselineDate=new Date(new Date().setHours(0,0,0,0));this.enableChartInteractions=!0;this.defaultActivityDurationWorkingDays=14}};var import_dayjs6=__toESM(require_dayjs_min(),1);var import_dayjs5=__toESM(require_dayjs_min(),1);var TreeNode=class _TreeNode{constructor(schedule,id){this.schedule=schedule;this.id=id;this.startDate=this.schedule.itemsIndex.get(this.id).earlyStart;this.endDate=this.schedule.itemsIndex.get(this.id).earlyFinish}get children(){return this.schedule.dependencies.filter(l3=>l3.predecessor===this.id).filter(l3=>{let current=this.schedule.itemsIndex.get(this.id),currentEndWithLag=(0,import_dayjs5.default)(current.earlyFinish).add(l3.lag,"days").toDate().setHours(0,0,0,0),successorDate=this.__getSucDate(l3).setHours(0,0,0,0),diff=successorDate-currentEndWithLag;return diff===1||diff===0?!0:this.schedule.itemsIndex.get(l3.successor).getNextWorkingDay(new Date(currentEndWithLag)).getTime()===successorDate}).map(x2=>new _TreeNode(this.schedule,x2.successor))}__getSucDate(l3){let successor=this.schedule.itemsIndex.get(l3.successor);if(l3.type.endsWith("F"))return successor.earlyFinish;if(l3.type.endsWith("S"))return successor.earlyStart}};function findLongestPath(startItemId,schedule){let longestPathResult={longestDuration:0,path:[]},dfs=(currentNodeId,path,currentDuration)=>{if(currentNodeId===null)return;let currentNode=new TreeNode(schedule,currentNodeId),nodeDuration=currentNode.endDate.getTime()-currentNode.startDate.getTime(),newDuration=currentDuration+nodeDuration;path.push(currentNode.id),!currentNode.children||currentNode.children.length===0?newDuration>=longestPathResult.longestDuration&&(longestPathResult.longestDuration=newDuration,longestPathResult.path=[...path]):currentNode.children.forEach(child=>{dfs(child.id,path,newDuration)}),path.pop()};return dfs(startItemId,[],0),longestPathResult.longestDuration=longestPathResult.longestDuration/MsInDAY,longestPathResult}var Item=class{constructor(s4){this.s=s4;this._execOrder=-1;this.nested=[];this.id=crypto.randomUUID();this.name=this.id;this._calendar={name:"default",id:"default",weekDays:[!0,!0,!0,!0,!0,!0,!0],freeDays:[]};this.progressDays=0;this.type="activity";this._durationWorkingDays=this.s.defaultActivityDurationDays;this.crit=!1;this._earlyStart=void 0}set execOrder(v3){this._execOrder=this.type==="group"?Number.MAX_VALUE:v3}get execOrder(){return this.type==="group"?Number.MAX_VALUE:this._execOrder}get calendar(){return this._calendar}set calendar(c5){if(!c5){this._calendar={name:"default",id:"default",weekDays:[!0,!0,!0,!0,!0,!0,!0],freeDays:[]};return}if(c5.weekDays.every(x2=>x2===!1))throw Error("Invalid calendar: should have at least 1 working day of week");this._calendar=structuredClone(c5);for(let fd of this._calendar.freeDays)fd.start=new Date(fd.start).setHours(0,0,0,0),fd.end=new Date(fd.end).setHours(23,59,59,999),fd.nextWorkingDay=(0,import_dayjs6.default)(fd.end).add(1,"day").toDate().setHours(0,0,0,0),fd.previousWorkingDay=(0,import_dayjs6.default)(fd.start).subtract(1,"day").toDate().setHours(0,0,0,0)}get dataDate(){return new Date(new Date(Math.max(this.s.dataDate?.getTime()??this.s.startDate.getTime())).setHours(0,0,0,0))}get durationWorkingDays(){if(this.type==="milestone")return 0;if(this.type!=="group")return this._durationWorkingDays;if(this.nested.length===0)return 0;let startTimes=[],endTimes=[];for(let i6 of this.nested)startTimes.push(i6.earlyStart.getTime()),endTimes.push(i6.earlyFinish.getTime());let minStart=Math.max(...startTimes),maxEnd=Math.max(...endTimes);return this.getWorkingDaysBetweenDates(new Date(minStart),new Date(maxEnd)).length}get duration(){if(this.type==="milestone")return 0;if(this.type!=="group")return(0,import_dayjs6.default)(this.earlyFinish).diff(this.earlyStart,"days");if(this.nested.length===0)return 0;let startTimes=[],endTimes=[];for(let i6 of this.nested)startTimes.push(i6.earlyStart.getTime()),endTimes.push(i6.earlyFinish.getTime());let minStart=Math.min(...startTimes),maxEnd=Math.max(...endTimes);return(0,import_dayjs6.default)(maxEnd).diff(minStart,"days")}setWorkingDaysDuration(workingDays){this.type!=="group"&&this.type!=="milestone"&&(this._durationWorkingDays=workingDays)}get lateStart(){return this.earlyStart}get lateFinish(){return this.earlyFinish}addWorkingDays(startDate,days){let d3=new Date(startDate),sign=Math.sign(days);d3.setHours(0,0,0,0);let date=d3,absDays=Math.abs(days);for(let daysAdded=0;daysAdded<absDays;daysAdded++)date=new Date(this.getNextWorkingDay(date,sign));return date}getWorkingDay(d3){let date=new Date(d3);return date.setHours(0,0,0,0),this.isWorkingDay(date)?date:this.getNextWorkingDay(date)}getNextWorkingDay(d3,direction=1){let currentDate=new Date(d3);for(currentDate.setDate(currentDate.getDate()+direction);!this.isWorkingDay(currentDate);)currentDate.setDate(currentDate.getDate()+direction);return currentDate}isWorkingDay(d3){let isFreeDay=!1;for(let fd of this.calendar.freeDays){let dMs=d3.getTime();if(dMs>=fd.start&&dMs<=fd.end){isFreeDay=!0;break}}let isFreeWeekday=this.calendar.weekDays[d3.getDay()]===!1;return!isFreeDay&&!isFreeWeekday}__getEarlyStartBasedOnDependency(d3){let pred=this.s.itemsIndex.get(d3.predecessor);if(!pred)return this.defaultStartDate;let addDays=pred.type==="milestone"?0:1,out;switch(d3.type){case"FS":{out=new Date(this.addWorkingDays(pred.earlyFinish.getTime(),d3.lag+addDays));break}case"FF":{let diff=d3.lag-this.durationWorkingDays,calculatedDate=this.addWorkingDays(pred.earlyFinish.getTime(),diff+addDays).getTime();out=new Date(Math.max(this.defaultStartDate.getTime(),calculatedDate));break}case"SS":out=this.addWorkingDays(pred.earlyStart.getTime(),d3.lag);break;case"SF":{let diff=(d3.lag+this.durationWorkingDays)*-1;out=this.addWorkingDays(pred.earlyStart.getTime(),diff);break}}return out}get isStarted(){return this.progressDays>0}set defaultStartDate(value){let invalidValue=value==null||value.getTime==null||isNaN(value.getTime());this._defaultStartDate=invalidValue?this.getWorkingDay(this.s.startDate.getTime()).setHours(0,0,0,0):this.getWorkingDay(value.getTime()).setHours(0,0,0,0)}get defaultStartDate(){return this._defaultStartDate==null&&(this._defaultStartDate=new Date(this.getWorkingDay(this.s.startDate.getTime())).getTime()),new Date(this._defaultStartDate)}__getEarlyStartBasedOnSFDependency(d3){let suc=this.s.itemsIndex.get(d3.successor);return this.addWorkingDays(suc.earlyFinish.getTime(),d3.lag)}get delayDays(){let today=new Date().setHours(0,0,0,0),startsInFuture=this.earlyStart>=new Date(today),isFinished=this.durationWorkingDays===this.progressDays;if(startsInFuture||isFinished)return 0;let expectedProgressDate=Math.min(today,this.earlyFinish.getTime()),actualProgressDate=this.getProgressDate();return(0,import_dayjs6.default)(expectedProgressDate).diff(actualProgressDate,"days")>0?this.getWorkingDaysBetweenDates(actualProgressDate,new Date(expectedProgressDate)).length:0}getWorkingDaysBetweenDates(start,end){let s4=(0,import_dayjs6.default)(start),e6=(0,import_dayjs6.default)(end),c5=s4,res=[];for(;c5.isBefore(e6);)c5=c5.add(1,"day"),res.push(c5.toDate());return res}_calcEarlyStart(){if(this.type==="group")return new Date(Math.min(...this.nested.map(x2=>x2.earlyStart.getTime())));let predDeps=(this.s.dependencies??[]).filter(x2=>x2.successor===this.id&&x2.type!=="SF"),succeedingDep=(this.s.dependencies??[]).filter(x2=>x2.predecessor===this.id&&x2.type==="SF");if(predDeps.length===0&&succeedingDep.length===0)return this.defaultStartDate;let earlyStarts=predDeps.map(pd=>this.__getEarlyStartBasedOnDependency(pd).getTime()),sfEarlyStarts=succeedingDep.map(sd=>this.__getEarlyStartBasedOnSFDependency(sd).getTime());earlyStarts.push(...sfEarlyStarts);let res=this.getWorkingDay(Math.max(...earlyStarts));return new Date(res)}refreshStartEnd(){this._earlyStart=this._calcEarlyStart(),this._earlyFinish=this._calcEarlyFinish()}getProgressDate(){let out=this.addWorkingDays(this.earlyStart.getTime(),Math.min(this.progressDays,this.durationWorkingDays)-1);return out.setHours(23,59,59,999),out}get earlyStart(){return this._earlyStart||(this._earlyStart=this._calcEarlyStart()),this._earlyStart}_calcEarlyFinish(){if(this.type==="group")return this._earlyFinish=new Date(Math.max(...this.nested.map(x2=>x2.earlyFinish.getTime()))),this._earlyFinish;if(this.type==="milestone")return this._earlyFinish=this.earlyStart,this._earlyFinish;let res=this.addWorkingDays(this.earlyStart.getTime(),this._durationWorkingDays-1);return res.setHours(23,59,59,999),this._earlyFinish=res,this._earlyFinish}get earlyFinish(){return this._earlyFinish||(this._earlyFinish=this._calcEarlyFinish()),this._earlyFinish}},Schedule=class{constructor(startDate,dataDate,items,dependencies,defaultActivityDurationDays=14){this.defaultActivityDurationDays=defaultActivityDurationDays;this.startDate=new Date;this.dataDate=new Date;this.items=[];this.dependencies=[];this.__nonGroups=["activity","buffer","milestone"];this.startDate=new Date(startDate.setHours(0,0,0,0)),this.dataDate=new Date(dataDate.setHours(0,0,0,0)),this.itemsIndex=new Map,this.items=this._flattenItems(items),this.items.forEach(x2=>{this.itemsIndex.set(x2.id,x2)}),this.dependencies=dependencies.filter(x2=>this.itemsIndex.has(x2.predecessor)&&this.itemsIndex.has(x2.successor)),this.items.forEach(x2=>{this.itemsIndex.set(x2.id,x2),x2.execOrder=this.getExecutionOrder(x2)});for(let i6 of[...this.items].sort((a3,b3)=>a3.execOrder-b3.execOrder))i6.refreshStartEnd()}get endDate(){let ef=this.items.map(x2=>x2.earlyFinish.getTime());return new Date(Math.max(...ef))}get durationDays(){return(0,import_dayjs6.default)(this.endDate).diff(this.startDate,"days")}getExecutionOrder(i6){let deps=this.dependencies.filter(x2=>x2.successor===i6.id),orders=[];for(let endDep of deps){let dep=endDep,successors=new Set;for(;dep!=null&&successors.has(dep.predecessor);)successors.add(dep.successor),dep=this.dependencies.find(x2=>x2.successor===dep.predecessor);orders.push(successors.size)}return Math.max(...orders)}_flattenItems(items){let flatArray=[];for(let item of items){let i6=new Item(this);i6.hidden=item.hidden,i6.id=item.id,i6.name=item.name,flatArray.push(i6),item.type==="group"||item.nested&&Array.isArray(item.nested)&&!this.__nonGroups.includes(item.type)?(i6.nested=[],i6.type="group",i6.color=item.color,i6.nested=this._flattenItems(item.nested??[]),flatArray.push(...i6.nested)):(item.calendar&&(i6.calendar=item.calendar),item.defaultStartDate!=null&&(i6.defaultStartDate=item.defaultStartDate),i6.setWorkingDaysDuration(item.duration!=null&&item.duration>0?item.duration:i6.duration),i6.progressDays=item.progressDays??0,i6.type=this.__nonGroups.includes(item.type)?item.type:"activity")}return flatArray}updateCriticalPath(){let nonGroups=this.items.filter(x2=>x2.type!=="group"),minItems=nonGroups.filter(x2=>x2.earlyStart.getTime()===Math.min(...nonGroups.map(r7=>r7.earlyStart.getTime()))),maxItems=nonGroups.filter(x2=>x2.earlyFinish.getTime()===Math.max(...nonGroups.map(r7=>r7.earlyFinish.getTime()))),critItems=[];for(let x2 of minItems){let lp=findLongestPath(x2.id,this);maxItems.map(x3=>x3.id).includes(lp.path[lp.path.length-1])&&critItems.push(...lp.path)}for(let i6 of this.items)i6.crit=critItems.includes(i6.id)}};var viewModeMultiplier={auto:0,year:30,quarter:20,month:4,week:2,day:1},TimeScale=class{constructor(start,end,viewMode,viewPortWidth){this.viewPortWidth=viewPortWidth;if(!(start instanceof Date)||isNaN(start.getTime()))throw Error("Invalid argument: start");if(!(end instanceof Date)||isNaN(end.getTime()))throw Error("Invalid argument: end");this.viewMode=viewMode,this.start=start,this.end=end}get start(){return this._start}set start(v3){this._start=new Date(v3.setHours(0,0,0,0))}get startMs(){return this.start.getTime()}get pxPerWeek(){return this.pxPerDay*7}get pxPerDay(){return this.viewMode==="auto"?this.viewPortWidth/this.totalDays:Math.round(30/viewModeMultiplier[this.viewMode])}get msPerPx(){return 864e5/this.pxPerDay}get end(){return this._end}set end(v3){this._end=new Date(v3.setHours(0,0,0,0))}get totalDays(){return Math.round(Math.abs((this.startMs-this.endMs)/864e5))}get endMs(){return this.end.getTime()}pxToMs(px){return px*this.msPerPx}msToPx(ms){return ms/this.msPerPx}dateToPx(date){let ms=date.getTime()-this.startMs;return this.msToPx(ms)}pxToDate(px){let ms=this.pxToMs(px);return new Date(this.startMs+ms)}pxForTimeSpan(start,end){let span=end.getTime()-start.getTime();return this.msToPx(span)}};var import_dayjs7=__toESM(require_dayjs_min(),1);var styles=i`
  svg {
    display: block;
  }
  :host {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    flex-wrap: nowrap;
    white-space: nowrap;
  }
  .gantt {
    height: fit-content;
    overflow: hidden;
    overflow-x: scroll;
    scrollbar-width: none;
  }
  .gantt-v {
    overflow: hidden;
    overflow-y: auto;
    display: flex;
    height: 100%;
  }

  .time-scale {
    width: auto;
    overflow: hidden;
    overflow-x: auto;
    scrollbar-width: thin;
  }

  .time-scale {
    transform: rotateX(180deg);
    overflow-x: auto;
  }
  .time-scale > svg {
    transform: rotateX(180deg);
  }

  .labels-container {
    box-shadow: 1px 0px 6px 1px #88888878;
    clip-path: inset(0px -20px 0px 0px);

    height: fit-content;
    box-sizing: border-box;
    z-index: 1;
    margin: 0;
    padding: 0;
    margin-top: calc(var(--gantt-layout-line-width) / 2);
  }
  .time-scale-container {
    display: flex;
  }
  .time-scale-margin {
    box-shadow: 1px 0px 6px 1px #88888878;
    clip-path: inset(0px -20px 0px 0px);
    flex-shrink: 0;
    z-index: 1;
    overflow: hidden;
  }
`;var WcGantt=class extends r5{constructor(){super(...arguments);this.labelsReady=!1;this.___lastMovement=0;this.interactionReady=!1;this.scrollReady=!1}getLabelsElement(){return this.renderRoot.querySelector("slot[data-labels]")?.assignedElements({flatten:!0})[0]}configureLabelsObserver(){if(this.settings.showLabels){let config={childList:!0,subtree:!0,attributes:!0,characterData:!0},updateLabelsWidth=()=>{this.requestUpdate()},labelsElement=this.getLabelsElement(),obs=new MutationObserver(updateLabelsWidth);obs.observe(labelsElement,config),labelsElement.shadowRoot&&obs.observe(labelsElement.shadowRoot,config)}this.labelsReady=!0}firstUpdated(){this.configureLabelsObserver(),this.requestUpdate()}updated(){!this.items||this.items.length===0||this.labelsReady&&!this.interactionReady&&this.setupInteractions()}willUpdate(_changedProperties){if(!this.items||this.items.length===0)return;let defaultOpts=new WcGanttSettings,cssSettings=this.getSettingsBasedOnComputedCSS();this.settings={...defaultOpts,...cssSettings,labelsWidth:0,width:0,height:0,...this.options},(_changedProperties.has("settings")||_changedProperties.has("items")||_changedProperties.has("dependencies"))&&(this.schedule=new Schedule(this.settings.startDate,this.settings.dataDate,this.items??[],this.dependencies??[],this.settings.defaultActivityDurationWorkingDays),this.baselineItems.length>0&&(this.baselineSchedule=new Schedule(this.settings.startDate,this.settings.baselineDate,this.baselineItems??[],this.baselineDependencies??[])));let dimensions=this.calculateDimensions();this.settings={...this.settings,...dimensions},this.settings.showCriticalPath&&this.schedule.updateCriticalPath();let timeScaleStart=Math.min(this.settings.startDate.getTime(),this.settings.dataDate.getTime(),this.settings.baselineDate.getTime(),this.schedule.startDate.getTime(),this.baselineSchedule?.startDate.getTime()??Number.MAX_VALUE),timeScaleEnd=Math.max(this.schedule.endDate.getTime(),this.baselineSchedule?.endDate.getTime()??Number.MIN_VALUE);this.timeScale=new TimeScale((0,import_dayjs7.default)(timeScaleStart).subtract(5,"days").toDate(),(0,import_dayjs7.default)(timeScaleEnd).add(7,"days").toDate(),this.settings.timeScaleMode,this.settings.width);let widthOfData=this.timeScale.dateToPx(this.timeScale.end);widthOfData>this.settings.width?this.settings.width=widthOfData:this.timeScale.end=this.timeScale.pxToDate(this.settings.width)}getSettingsBasedOnComputedCSS(){let rowHeight=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),scaleHeight=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),barHeight=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),lineWidth=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-line-width"));return{rowHeight,scaleHeight,barHeight,lineWidth}}calculateDimensions(){let height=this.schedule.items.filter(x2=>!x2.hidden).length*this.settings.rowHeight,r7=this.getLabelsElement()?.getBoundingClientRect(),labelsWidth=Math.ceil(r7?.width??0);if(this.timeScaleMarginElement&&(this.timeScaleMarginElement.style.width=labelsWidth+"px"),!this.ganttVElement)return;let width=this.ganttVElement.clientWidth-labelsWidth;return this.timeScaleElement&&(this.timeScaleElement.style.width=width+"px"),{labelsWidth,width,height}}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.settings.enableChartInteractions===!1||this.interactionReady||(await this.updateComplete,configureAddLink.bind(this)(),configureResizeItem.bind(this)(),this.configureDependencyClick(),this.interactionReady=!0)}configureDependencyClick(){let links=this.shadowRoot.getElementById("gantt").querySelectorAll(".link"),handler=e6=>{let linkEl=e6.currentTarget,dep={predecessor:linkEl.dataset.source,successor:linkEl.dataset.target,type:linkEl.dataset.linkType},ev=new CustomEvent("dependency-click",{detail:dep});this.dispatchEvent(ev)};for(let l3 of links)l3.onclick=handler}get timeScaleElement(){return this.__timeScaleEl||(this.__timeScaleEl=this.renderRoot.querySelector(".time-scale")),this.__timeScaleEl}get timeScaleMarginElement(){return this.__timeScaleMarginEl||(this.__timeScaleMarginEl=this.renderRoot.querySelector(".time-scale-margin")),this.__timeScaleMarginEl}get ganttElement(){return this.__ganttEl||(this.__ganttEl=this.renderRoot.querySelector(".gantt")),this.__ganttEl}get ganttVElement(){return this.__ganttVEl||(this.__ganttVEl=this.renderRoot.querySelector(".gantt-v")),this.__ganttVEl}render(){if(!this.items||this.items.length===0)return"No data";let labels=this.settings.showLabels?x`
          <slot name="labels" data-labels>
            <div class="labels">
              ${this.schedule.items.map(x2=>x`<div class="lbl">${x2.name}</div>`)}
            </div>
          </slot>
        `:x``,timeScale=this.labelsReady?x`<div class="time-scale" @scroll=${this.onScroll}>
          ${getHeader.bind(this)(this.settings)}
        </div>`:"",gantt=this.labelsReady?x`<div class="gantt" @scroll=${this.onScroll}>
          ${Gantt.bind(this)()}
        </div>`:"";return x`
      <div class="time-scale-container">
        <div class="time-scale-margin">
          <slot name="top-left-corner"></slot>
        </div>
        ${timeScale}
      </div>

      <div class="gantt-v">
        <div class="labels-container">${labels}</div>
        ${gantt}
      </div>
    `}onScroll(e6){e6.target===this.ganttElement&&this.timeScaleElement.scroll({left:this.ganttElement.scrollLeft}),e6.target===this.timeScaleElement&&this.ganttElement.scroll({left:this.timeScaleElement.scrollLeft})}};WcGantt.styles=[styles,layoutCss,controlsCss,linkLineCss,barCss],__decorateClass([n3({type:Object,attribute:!1})],WcGantt.prototype,"options",2),__decorateClass([n3({type:Array,attribute:!1})],WcGantt.prototype,"items",2),__decorateClass([n3({type:Array,attribute:!1})],WcGantt.prototype,"dependencies",2),__decorateClass([n3({type:Array,attribute:!1})],WcGantt.prototype,"baselineItems",2),__decorateClass([n3({type:Array,attribute:!1})],WcGantt.prototype,"baselineDependencies",2),WcGantt=__decorateClass([t("wc-gantt")],WcGantt);export{Item,Schedule,WcGantt,WcGanttSettings};
/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/repeat.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
//# sourceMappingURL=WcGantt.js.map
