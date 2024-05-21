var He=Object.defineProperty;var Pe=Object.getOwnPropertyDescriptor;var q=(n,t,e,i)=>{for(var s=i>1?void 0:i?Pe(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(s=(i?o(t,e,s):o(s))||s);return i&&s&&He(t,e,s),s};function C(n,t){let e=new Date(n.valueOf());return e.setDate(e.getDate()+t),e}function Tt(n,t){let e=[],i=new Date(n);for(i.setHours(1,0,0,0);i.getTime()<=t;)e.push(i.getTime()),i=C(i,1);return e}function st(n,t){let e=[],i=new Date(n.getFullYear(),n.getMonth(),n.getDate(),1),s=i.getDay();s!==1&&i.setDate(i.getDate()-s+1),e.push(new Date(i.getTime()));let r=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1),o=r.getDay();for(o!==1&&r.setDate(r.getDate()+(7-o)),e.push(new Date(r.getTime()));i<r;)i.setDate(i.getDate()+7),e.push(new Date(i.getTime()));return e}function Ht(n,t){return n&&t?n>t?t:n:n||t}function Pt(n,t){return n&&t?n<t?t:n:n||t}function Lt(n){return n.map(t=>`${t[0]},${t[1]}`).join(" ")}function It(n){let t=new Date(n.getFullYear(),0,1),e=Math.floor((n.getTime()-t.getTime())/(24*60*60*1e3));return Math.ceil(e/7)+1}var Rt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var rt=globalThis,ot=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,bt=Symbol(),Gt=new WeakMap,j=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==bt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(ot&&t===void 0){let i=e!==void 0&&e.length===1;i&&(t=Gt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&Gt.set(e,t))}return t}toString(){return this.cssText}},Ut=n=>new j(typeof n=="string"?n:n+"",void 0,bt),k=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((i,s,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[r+1],n[0]);return new j(e,n,bt)},wt=(n,t)=>{if(ot)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let i=document.createElement("style"),s=rt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,n.appendChild(i)}},at=ot?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let i of t.cssRules)e+=i.cssText;return Ut(e)})(n):n;var{is:Le,defineProperty:Ie,getOwnPropertyDescriptor:Re,getOwnPropertyNames:Ge,getOwnPropertySymbols:Ue,getPrototypeOf:Oe}=Object,L=globalThis,Ot=L.trustedTypes,Ve=Ot?Ot.emptyScript:"",St=L.reactiveElementPolyfillSupport,Y=(n,t)=>n,X={toAttribute(n,t){switch(t){case Boolean:n=n?Ve:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},lt=(n,t)=>!Le(n,t),Vt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),L.litPropertyMetadata??(L.litPropertyMetadata=new WeakMap);var M=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&Ie(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){let{get:s,set:r}=Re(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return s==null?void 0:s.call(this)},set(o){let a=s==null?void 0:s.call(this);r.call(this,o),this.requestUpdate(t,a,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=Oe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let e=this.properties,i=[...Ge(e),...Ue(e)];for(let s of i)this.createProperty(s,e[s])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(let[e,i]of this.elementProperties){let s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let i=new Set(t.flat(1/0).reverse());for(let s of i)e.unshift(at(s))}else t!==void 0&&e.push(at(t));return e}static _$Eu(t,e){let i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return wt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;let i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){let o=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:X).toAttribute(e,i.type);this._$Em=t,o==null?this.removeAttribute(s):this.setAttribute(s,o),this._$Em=null}}_$AK(t,e){var r;let i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){let o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:X;this._$Em=s,this[s]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??lt)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let s=this.constructor.elementProperties;if(s.size>0)for(let[r,o]of s)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};M.elementStyles=[],M.shadowRootOptions={mode:"open"},M[Y("elementProperties")]=new Map,M[Y("finalized")]=new Map,St==null||St({ReactiveElement:M}),(L.reactiveElementVersions??(L.reactiveElementVersions=[])).push("2.0.4");var Ne={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:lt},ze=(n=Ne,t,e)=>{let{kind:i,metadata:s}=e,r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,n),i==="accessor"){let{name:o}=e;return{set(a){let l=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,l,n)},init(a){return a!==void 0&&this.P(o,void 0,n),a}}}if(i==="setter"){let{name:o}=e;return function(a){let l=this[o];t.call(this,a),this.requestUpdate(o,l,n)}}throw Error("Unsupported decorator location: "+i)};function J(n){return(t,e)=>typeof e=="object"?ze(n,t,e):((i,s,r)=>{let o=s.hasOwnProperty(r);return s.constructor.createProperty(r,o?{...i,wrapped:!0}:i),o?Object.getOwnPropertyDescriptor(s,r):void 0})(n,t,e)}var Q=globalThis,ht=Q.trustedTypes,Nt=ht?ht.createPolicy("lit-html",{createHTML:n=>n}):void 0,At="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,Dt="?"+T,We=`<${Dt}>`,V=document,Z=()=>V.createComment(""),tt=n=>n===null||typeof n!="object"&&typeof n!="function",jt=Array.isArray,Yt=n=>jt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",_t=`[ 	
\f\r]`,K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,zt=/-->/g,Wt=/>/g,U=RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ft=/'/g,Bt=/"/g,Xt=/^(?:script|style|textarea|title)$/i,Jt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),nt=Jt(1),$=Jt(2),H=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),qt=new WeakMap,O=V.createTreeWalker(V,129);function Kt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nt!==void 0?Nt.createHTML(t):t}var Qt=(n,t)=>{let e=n.length-1,i=[],s,r=t===2?"<svg>":"",o=K;for(let a=0;a<e;a++){let l=n[a],h,u,c=-1,m=0;for(;m<l.length&&(o.lastIndex=m,u=o.exec(l),u!==null);)m=o.lastIndex,o===K?u[1]==="!--"?o=zt:u[1]!==void 0?o=Wt:u[2]!==void 0?(Xt.test(u[2])&&(s=RegExp("</"+u[2],"g")),o=U):u[3]!==void 0&&(o=U):o===U?u[0]===">"?(o=s??K,c=-1):u[1]===void 0?c=-2:(c=o.lastIndex-u[2].length,h=u[1],o=u[3]===void 0?U:u[3]==='"'?Bt:Ft):o===Bt||o===Ft?o=U:o===zt||o===Wt?o=K:(o=U,s=void 0);let d=o===U&&n[a+1].startsWith("/>")?" ":"";r+=o===K?l+We:c>=0?(i.push(h),l.slice(0,c)+At+l.slice(c)+T+d):l+T+(c===-2?a:d)}return[Kt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),i]},et=class n{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,o=0,a=t.length-1,l=this.parts,[h,u]=Qt(t,e);if(this.el=n.createElement(h,i),O.currentNode=this.el.content,e===2){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=O.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes())for(let c of s.getAttributeNames())if(c.endsWith(At)){let m=u[o++],d=s.getAttribute(c).split(T),p=/([.?@])?(.*)/.exec(m);l.push({type:1,index:r,name:p[2],strings:d,ctor:p[1]==="."?pt:p[1]==="?"?ut:p[1]==="@"?mt:z}),s.removeAttribute(c)}else c.startsWith(T)&&(l.push({type:6,index:r}),s.removeAttribute(c));if(Xt.test(s.tagName)){let c=s.textContent.split(T),m=c.length-1;if(m>0){s.textContent=ht?ht.emptyScript:"";for(let d=0;d<m;d++)s.append(c[d],Z()),O.nextNode(),l.push({type:2,index:++r});s.append(c[m],Z())}}}else if(s.nodeType===8)if(s.data===Dt)l.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(T,c+1))!==-1;)l.push({type:7,index:r}),c+=T.length-1}r++}}static createElement(t,e){let i=V.createElement("template");return i.innerHTML=t,i}};function N(n,t,e=n,i){var o,a;if(t===H)return t;let s=i!==void 0?(o=e._$Co)==null?void 0:o[i]:e._$Cl,r=tt(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((a=s==null?void 0:s._$AO)==null||a.call(s,!1),r===void 0?s=void 0:(s=new r(n),s._$AT(n,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=N(n,s._$AS(n,t.values),s,i)),t}var dt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??V).importNode(e,!0);O.currentNode=s;let r=O.nextNode(),o=0,a=0,l=i[0];for(;l!==void 0;){if(o===l.index){let h;l.type===2?h=new W(r,r.nextSibling,this,t):l.type===1?h=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(h=new gt(r,this,t)),this._$AV.push(h),l=i[++a]}o!==(l==null?void 0:l.index)&&(r=O.nextNode(),o++)}return O.currentNode=V,s}p(t){let e=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},W=class n{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),tt(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Yt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==w&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var r;let{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=et.createElement(Kt(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{let o=new dt(s,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=qt.get(t.strings);return e===void 0&&qt.set(t.strings,e=new et(t)),e}k(t){jt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,i,s=0;for(let r of t)s===e.length?e.push(i=new n(this.S(Z()),this.S(Z()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){let s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},z=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=w}_$AI(t,e=this,i,s){let r=this.strings,o=!1;if(r===void 0)t=N(this,t,e,0),o=!tt(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{let a=t,l,h;for(t=r[0],l=0;l<r.length-1;l++)h=N(this,a[i+l],e,l),h===H&&(h=this._$AH[l]),o||(o=!tt(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(h??"")+r[l+1]),this._$AH[l]=h}o&&!s&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},pt=class extends z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}},ut=class extends z{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}},mt=class extends z{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=N(this,t,e,0)??w)===H)return;let i=this._$AH,s=t===w&&i!==w||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==w&&(i===w||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},gt=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}},Zt={P:At,A:T,C:Dt,M:1,L:Qt,R:dt,D:Yt,V:N,I:W,H:z,N:ut,U:mt,B:pt,F:gt},Et=Q.litHtmlPolyfillSupport;Et==null||Et(et,W),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.1.2");var te=(n,t,e)=>{let i=(e==null?void 0:e.renderBefore)??t,s=i._$litPart$;if(s===void 0){let r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new W(t.insertBefore(Z(),r),r,void 0,e??{})}return s._$AI(n),s};var I=class extends M{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=te(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return H}},ee;I._$litElement$=!0,I.finalized=!0,(ee=globalThis.litElementHydrateSupport)==null||ee.call(globalThis,{LitElement:I});var kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:I});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var ne=n=>{let t=n.nested==null&&(!n.type||n.type==="activity");return t&&!n.type&&(n.type="activity"),t},ie=n=>{let t="type"in n&&n.nested==null&&n.percent==null&&n.type==="milestone";return t&&(n.end=n.start),t},ft=n=>{var e,i;let t="nested"in n&&Array.isArray(n.nested)&&n.nested.length>0&&(!n.type||n.type==="group");if(t){n.type="group";let s=se(n);n.start=new Date(Math.min(((e=n.start)==null?void 0:e.getTime())??1/0,s.start)),n.end=new Date(Math.max(((i=n.end)==null?void 0:i.getTime())??-1/0,s.end))}return t};function se(n){var i,s,r;let t=0,e=0;for(let o of n.nested)if(o.type==="group"||o.nested&&o.nested.length>0){let a=se(o);t=t>0?Math.min(t,a.start):a.start,e=Math.max(e,a.end)}else t=t>0?Math.min(t,((i=o.start)==null?void 0:i.getTime())??1/0):(s=o.start)==null?void 0:s.getTime(),e=Math.max(e,((r=o.end)==null?void 0:r.getTime())??-1/0);return{start:t,end:e}}var re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=n=>(...t)=>({_$litDirective$:n,values:t}),yt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Fe}=Zt;var ae=()=>document.createComment(""),F=(n,t,e)=>{var r;let i=n._$AA.parentNode,s=t===void 0?n._$AB:t._$AA;if(e===void 0){let o=i.insertBefore(ae(),s),a=i.insertBefore(ae(),s);e=new Fe(o,a,n,n.options)}else{let o=e._$AB.nextSibling,a=e._$AM,l=a!==n;if(l){let h;(r=e._$AQ)==null||r.call(e,n),e._$AM=n,e._$AP!==void 0&&(h=n._$AU)!==a._$AU&&e._$AP(h)}if(o!==s||l){let h=e._$AA;for(;h!==o;){let u=h.nextSibling;i.insertBefore(h,s),h=u}}}return e},R=(n,t,e=n)=>(n._$AI(t,e),n),Be={},le=(n,t=Be)=>n._$AH=t,ce=n=>n._$AH,$t=n=>{var i;(i=n._$AP)==null||i.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let s=t.nextSibling;t.remove(),t=s}};var he=(n,t,e)=>{let i=new Map;for(let s=t;s<=e;s++)i.set(n[s],s);return i},A=oe(class extends yt{constructor(n){if(super(n),n.type!==re.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);let s=[],r=[],o=0;for(let a of n)s[o]=i?i(a,o):o,r[o]=e(a,o),o++;return{values:r,keys:s}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,i]){let s=ce(n),{values:r,keys:o}=this.dt(t,e,i);if(!Array.isArray(s))return this.ut=o,r;let a=this.ut??(this.ut=[]),l=[],h,u,c=0,m=s.length-1,d=0,p=r.length-1;for(;c<=m&&d<=p;)if(s[c]===null)c++;else if(s[m]===null)m--;else if(a[c]===o[d])l[d]=R(s[c],r[d]),c++,d++;else if(a[m]===o[p])l[p]=R(s[m],r[p]),m--,p--;else if(a[c]===o[p])l[p]=R(s[c],r[p]),F(n,l[p+1],s[c]),c++,p--;else if(a[m]===o[d])l[d]=R(s[m],r[d]),F(n,s[c],s[m]),m--,d++;else if(h===void 0&&(h=he(o,d,p),u=he(a,c,m)),h.has(a[c]))if(h.has(a[m])){let g=u.get(o[d]),f=g!==void 0?s[g]:null;if(f===null){let b=F(n,s[c]);R(b,r[d]),l[d]=b}else l[d]=R(f,r[d]),F(n,s[c],f),s[g]=null;d++}else $t(s[m]),m--;else $t(s[c]),c++;for(;d<=p;){let g=F(n,l[p+1]);R(g,r[d]),l[d++]=g}for(;c<=m;){let g=s[c++];g!==null&&$t(g)}return this.ut=o,le(n,l),H}});function xt(n){let t=n.timeScale,e=new Date(n.start),i=[],s=e.getMonth(),r=new Date(e.getFullYear(),s,1,1),o=n.scaleHeight*.25,a=t.dateToPx(r);for(;r<=t.end;){let h=`${r.toLocaleString("default",{month:"long"})} ${r.getFullYear()}`;r.setMonth(r.getMonth()+1,1);let u=t.dateToPx(r),c=a+(u-a)/2;i.push({id:h,tpl:$`
      <g>

        <line
          x1=${u}
          x2=${u}
          y1=${0}
          y2=${n.scaleHeight/2}
          class="line"       
        />   
        
        <text x=${c} y=${o} 
             class="text small">${h}</text>                
      </g>
      `}),a=u}return $`<g id="yearMonth">
  ${A(i,l=>l.id,l=>l.tpl)}  
  </g>`}function de(n){let t=n.timeScale,e=new Date(t.startMs),i=[];for(let s=0;s<=t.totalDays-1;s++){let r=s*t.pxPerDay,o=r+t.pxPerDay/2,a=e.getDate();i.push({id:s,tpl:$`
      <g>             
        
        <line
          x1=${r}
          x2=${r}
          y1=${n.scaleHeight/2}
          y2=${n.scaleHeight}
          class="line"       
        />   
        <text 
          id=${s} 
          x=${o} 
          y=${n.scaleHeight*.75} 
          class="text small">
          ${a}
        </text>

   
      </g>`}),e.setDate(e.getDate()+1)}return $`
  <g id="dayHeader">
    ${xt({...n})}
    <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight/2}
        class="line"
        
      />
    ${A(i,s=>s.id,s=>s.tpl)}   
  </g>`}function pe(n){let t=st(n.timeScale.start,n.timeScale.end),e=[],i=n.timeScale.pxPerDay,s=t.length-1,r=n.scaleHeight/4;for(let o=0;o<s;o++){let a=new Date(t[o]),l=n.timeScale.dateToPx(a),h=a.getDate(),u=C(a,-1).getDate(),c="week_"+o+"_"+u+"-"+h,m=n.scaleHeight/6,d=n.scaleHeight-m,p=r*2+m,g=It(C(a,1));e.push({id:c,tpl:$`
      <g id=${c}> 
          <text x=${l-3} y=${d} class="text small end">
          ${u}
        </text>       

        <line
          x1=${l}
          x2=${l}
          y1=${n.scaleHeight/2}
          y2=${n.scaleHeight}
          class="line"       
        />    
        <text x=${l+3} y=${d} class="text small start">
          ${h}
        </text>          
        <text x=${l+3*i} y=${p} 
          class="text tiny start">
            Week ${g}
        </text>    
      </g>`})}return $`
    <g id="weekHeader">
      ${xt({...n})}
      <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight/2}
        class="line"
        
      />
      ${A(e,o=>o.id,o=>o.tpl)}
     
    </g>
  `}function ue(n,t){n.unshift(t.timeScale.startMs),n.push(t.timeScale.end.getTime());let e=[],i=t.timeScale.start.getFullYear(),s=t.timeScale.end.getFullYear(),r=0,o=t.timeScale.dateToPx(t.timeScale.end),a=t.scaleHeight/4,l=0,h=a*2;for(;i<=s;){let u=new Date(i+1,0,1,1),c=t.timeScale.dateToPx(u);c>o&&(c=o),e.push({id:"y_"+i,tpl:$`
      <g>
      
        <line
          x1=${c}
          x2=${c}
          y1=${l}
          y2=${h}
          class="line"       
        />   
          <text 
            x=${(c-r)/2+r} 
            y=${t.scaleHeight*.25} 
            class="text small">
            ${i}
          </text>        
      </g>`}),i=u.getFullYear(),r=c}return $`<g id="year">
   ${A(e,u=>u.id,u=>u.tpl)}  
  </g>`}function me(n){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],i=Tt(n.timeScale.startMs,n.timeScale.end.getTime()).filter(a=>new Date(a).getDate()===1);i.unshift(n.timeScale.startMs),i.push(n.timeScale.end.getTime());let s=[],r=i.length-1;for(let a=0;a<r;a++){let h=new Date(i[a]).getMonth(),u=n.timeScale.dateToPx(new Date(i[a])),c=(i[a+1]-i[a])/n.timeScale.msPerPx,m="hm_"+h,d=u+c/2,p=$`
    
      <line
        x1=${u}
        x2=${u}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight}
        class="line"       
      />    
      `;s.push({id:m,tpl:$`
      <g>
        ${a===0?null:p}
        ${c>30?$`
          <text x=${d} y=${n.scaleHeight*.75} class="text small">
            ${t[h]}
          </text>`:null}
      </g>
      `})}let o=i.filter(a=>new Date(a).getMonth()===0);return $`
    <g id="monthHeader">
      ${ue(o,n)}     
      <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight/2}
        class="line"
        
      />
       ${A(s,a=>a.id,a=>a.tpl)}  
    </g>
  `}function ge(n){let t=[];for(let i=0;i<n.data.length;i++){let s=(i+1)*n.rowHeight+n.lineWidth,r=i*n.rowHeight+n.lineWidth,o=$``;n.data[i].type==="group"&&(o=$`
      <rect
        x=${0}
        y=${r}
        width=${n.width}
        height=${n.rowHeight}        
        
        class="group-bg-color"      
      ></rect>
    `),t.push({id:i,tpl:$`
        ${o}
        <line key=${i} x1="0" x2=${n.width} y1=${s} y2=${s} class="line"/>`})}let e=null;return this.settings.timeScale.viewMode==="week"&&(e=je(n)),this.settings.timeScale.viewMode==="day"&&(e=qe(n)),$`   
    ${e}
    <g id="grid">
    
      <line
          QQ
          x1=${0}
          x2=${n.width}
          y1=${n.lineWidth}
          y2=${n.lineWidth}
          class="line"
          
        />
      ${A(t,i=>i.id,i=>i.tpl)}           
    </g>
  `}function qe(n){let t=n.timeScale,e=new Date(t.startMs),i=[],s=n.height;for(let r=0;r<=t.totalDays-1;r++){let o=e.getDay(),a=o===0||o===6,l=r*t.pxPerDay;a&&i.push({id:e.toDateString(),tpl:$`<rect x=${l} y=${0} width=${t.pxPerDay} height=${s} class="weekend" />`}),e.setDate(e.getDate()+1)}return $`
  <g id="weekends">
    ${A(i,r=>r.id,r=>r.tpl)}   
  </g>`}function je(n){let t=st(n.timeScale.start,n.timeScale.end),e=[],i=0,s=n.height,r=n.timeScale.pxPerDay,o=t.length-1;for(let a=0;a<o;a++){let l=new Date(t[a]),h=n.timeScale.dateToPx(l),u=l.getDate(),c=C(l,-1).getDate(),m="week_"+a+"_"+c+"-"+u;e.push({id:m,tpl:$`      
        <rect x=${h-r*2} y=${i} width=${r*2} height=${s} class="weekend"/>                 
      `})}return $`
    <g id="weekends">
      ${A(e,a=>a.id,a=>a.tpl)}     
    </g>
  `}function fe(n){let t=n.map(r=>({x:r[0],y:r[1]})),e=["M"+t[0].x+","+t[0].y],i=3,s=t.length-1;t[s-1].x<t[s].x?t[s].x+=i/2:t[s].x-=i/2;for(let r=0;r<t.length;r++){let o=r+1>s?(r+1)%t.length:r+1,a=r+2>s?(r+2)%t.length:r+2,l=t[r],h=t[o],u=t[a],c=Math.sqrt(Math.pow(l.x-h.x,2)+Math.pow(l.y-h.y,2)),m=(c-i)/c,d=[((1-m)*l.x+m*h.x).toFixed(1),((1-m)*l.y+m*h.y).toFixed(1)],p=Math.sqrt(Math.pow(h.x-u.x,2)+Math.pow(h.y-u.y,2)),g=i/p;if(r!==s)if(e.push("L"+d.join(",")),r===s-1)e.push("L"+h.x+","+h.y);else{let f=[((1-g)*h.x+g*u.x).toFixed(1),((1-g)*h.y+g*u.y).toFixed(1)];e.push("Q"+h.x+","+h.y+","+f.join(","))}}return e.join(" ")}function ye(n){let t=new Map;return n.data.forEach(e=>{t.set(e.id.toString(),e)}),$`
    <g class="link-lines" >
      ${n.links.map(e=>Ye(e,n,t.get(e.source.toString()),t.get(e.target.toString())))}
    </g>`}function Ye(n,t,e,i){let s=i??t.data.find(x=>x.id.toString()===n.target.toString()),r=e??t.data.find(x=>x.id.toString()===n.source.toString());if(!s||!s.start||!s.end||!r||!r.start||!r.end)return null;let o=t.rowHeight/2,a=t.data.findIndex(x=>x.id===r.id),l=t.data.findIndex(x=>x.id===s.id),h=12,u=3,c=s.type==="milestone"?t.barHeight/2:0,m=o+a*t.rowHeight,d=o+l*t.rowHeight,p=t.barHeight/2+4;m>d&&(p=-p);let g=t.timeScale.dateToPx(r.end),f=t.timeScale.dateToPx(r.start),b=t.timeScale.dateToPx(s.end),_=t.timeScale.dateToPx(s.start),E=(x,y)=>{let v=`${n.source}-${n.target}-${n.type}`,D="link";return r.crit&&s.crit&&(D+=" crit"),$`
    <g 
      id=${v} 
      class=${D}
      data-source=${n.source} 
      data-target=${n.target} 
      data-link-type=${n.type}>
      <path d=${fe(x)} class="link-line" ></path>     
      <polygon points=${Lt(y)} class="line-arrow" />
    </g>`};if(n.type==="FS"){let x=g,y=_-c,v=[[x,m],[x+h,m]];y-x>=2*h?v.push([x+h,d]):(v.push([x+h,d-p]),v.push([y-h,d-p]),v.push([y-h,d])),v.push([y-u,d]);let D=[[y-u,d-u],[y,d],[y-u,d+u]];return E(v,D)}if(n.type==="FF"){let x=g,y=b+c,v=[[x,m],[x+h,m]];y<=x?v.push([x+h,d]):(v.push([x+h,d-p]),v.push([y+h,d-p]),v.push([y+h,d])),v.push([y+u,d]);let D=[[y+u,d-u],[y,d],[y+u,d+u]];return E(v,D)}if(n.type==="SS"){let x=f,y=_-c,v=[[x,m],[x-h,m]];x<=y?v.push([x-h,d]):(v.push([x-h,d-p]),v.push([y-h,d-p]),v.push([y-h,d])),v.push([y-u,d]);let D=[[y-u,d-u],[y,d],[y-u,d+u]];return E(v,D)}if(n.type==="SF"){let x=f,y=b+c,v=[[x,m],[x-h,m]];x-y>=2*h?v.push([x-h,d]):(v.push([x-h,d-p]),v.push([y+h,d-p]),v.push([y+h,d])),v.push([y+u,d]);let D=[[y+u,d-u],[y,d],[y+u,d+u]];return E(v,D)}return null}function Xe(n,t,e,i,s,r){let o=e/2,a=[[0,o],[o,0],[e,o],[o,e]].map(l=>`${l[0]},${l[1]}`).join(" ");return{id:s,tpl:$`
    <svg 
      x=${n-o}
      y=${t}
      id=${s}     
      data-item-id=${r.id}               
      class="gantt-bar"                  
    >
      <polygon
        points=${a}
        class="milestone"            
        @click=${i}
      />
      <circle
        class="ctl-start"
        data-id=${r.id}
        cx=${o}
        cy=${o}
        r=${6}          
      />
    </svg>
  `}}function Je(n){return n.rowHeight/6}function $e(n){let t=(n.rowHeight-n.barHeight)/2,e=n.timeScale.dateToPx(new Date(new Date().setHours(1,0,0,0))),i=n.timeScale,s=n.data.map((r,o)=>{let a="bar_"+r.id;if(!r.start||!r.end)return null;let l=()=>{if(this.suppressClick)return;let Te=new CustomEvent("item-click",{detail:r});this.dispatchEvent(Te)},h=i.dateToPx(r.start),u=t+o*n.rowHeight,c=n.barHeight/3;r.type==="group"&&(u=(n.rowHeight-c)/2+o*n.rowHeight);let m=n.barHeight/2+1;if(r.type==="milestone")return Xe(h,u,n.barHeight,l,a,r);let d=i.pxForTimeSpan(r.start,r.end),p=d*r.percent,g="gantt-bar";g+=r.type==="group"?" group":"";let f=!1,b=!1;n.showDelay&&(h+p<e&&r.percent<.999999&&(f=!0,b=!1),h+d<e&&r.percent<.999999&&(f=!1,b=!0));let _=n.rowHeight/6,E=Je(n),x=1,y=_*2+E+x*2,v=r.crit?"bar-inner-border crit":"bar-inner-border",D=$`
    <rect
      x=${y}
      y="1"
      width=${d}
      height=${r.type==="group"?c:n.barHeight}
      rx=${1.8}
      ry=${1.8}
      class=${v}
      @click=${l}    
    />
    `,P=$`
      <rect
        x=${y}        
        y="1"
        width=${d}
        height=${r.type==="group"?c:n.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${l}    
      />
      `,Me=p>1e-6?$`
          <rect
            y="1"
            x=${y}            
            width=${p}
            height=${r.type==="group"?c:n.barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${l}
            />`:null,Mt=$``;return r.type==="activity"&&(Mt=$`
        <circle
          class=${r.type+" ctl-start"}
          data-id=${r.id}           
          cx=${x+_}
          cy=${m}
          r=${_}
        />
        <circle
          class=${r.type+" ctl-finish"}
          data-id=${r.id}
          cx=${d+y+E+_}
          cy=${m}
          r=${_}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${y+E}
            y="1"
            height=${n.barHeight} 
            width=${n.barHeight} 
            style="opacity:0"
          />
          <svg 
            y="1"
            x=${y+E}
            height=${n.barHeight} 
            width=${n.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${y+E-.5+n.barHeight/2} 
            y="3" width="1px" height=${n.barHeight-4}/>
        </g>
        <g class="ctl-resize-end">
          <rect 
            y="1"
            x=${d}
            height=${n.barHeight} 
            width=${n.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${d}
            y="1"
            height=${n.barHeight} 
            width=${n.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${d-.5+n.barHeight/2} 
            y="3" width="1px" height=${n.barHeight-4}/>
        </g>
      `),{id:a,tpl:$` 
      <svg 
        x=${h-y} 
        y=${u-1}              
        id=${a}
        key=${o}       
        .item=${r}
        data-item-id=${r.id}        
        class=${g}
        ?warning=${f}
        ?danger=${b}
      >     
       
        ${P}
        ${Me}
        ${D}
        ${Mt}
    
      </svg>
    `}});return $`
    <g>      
        <line             
          x1=${e}
          x2=${e}
          y1=${0}
          y2=${n.height}
          class="today-line"
        />
      
      ${A(s,r=>r.id,r=>r.tpl)} 
    </g>
  `}function xe(){let n=`0 0 ${this.settings.width} ${this.settings.height}`,t=this.settings.showLinks?ye.bind(this)(this.settings):null;return $`
    <svg id="gantt" 
      width=${this.settings.width} 
      height=${this.settings.height} 
      viewBox=${n}>
    
     

      ${ge.bind(this)(this.settings)}           
      ${t}
      ${$e.bind(this)(this.settings)}     
     
    </svg>
  `}function ve(n){let t;switch(n.viewMode){case"day":t=de.bind(this)(n);break;case"month":t=me.bind(this)(n);break;case"week":t=pe.bind(this)(n);break}let e=`0 0 ${this.settings.width} ${this.settings.scaleHeight}`;return $`
   <svg id="gantt-h" 
      width=${this.settings.width} 
      height=${this.settings.scaleHeight} 
      viewBox=${e}>
      <defs>
        <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>              
          <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
        </linearGradient>       
      </defs>
      ${t}
    </svg>
    `}var be=k`
  :host {
    --gantt-active-ctl-fill: #ffbf5e;
    --gantt-active-ctl-stroke: #ffa011;
    --gantt-inactive-ctl-fill: #f0f0f0;
    --gantt-inactive-ctl-stroke: #929292;
    --ctl-stroke-width: 1px;
  }

  .gantt-bar:hover .ctl-start,
  .gantt-bar:hover .ctl-finish,
  .gantt-bar:hover .ctl-resize-start,
  .gantt-bar:hover .ctl-resize-end {
    opacity: 1;
  }
  /* 
  fill: var(--gantt-inactive-ctl-fill); */

  .ctl-start[active],
  .ctl-finish[active],
  .ctl-start:hover,
  .ctl-finish:hover {
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
`;var we=k`
  :host {
    --gantt-link-line-hover-stroke-width: 2.5;
    --gantt-link-line-stroke: #ffa011;
    --gantt-link-line-stroke-width: 1.5px;
  }
  .link-line:hover {
    stroke-width: var(--gantt-link-line-hover-stroke-width, 2.5);
    cursor: pointer;
  }

  .link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    fill: none;
    stroke-width: var(--gantt-link-line-stroke-width, 1.5px);
  }
  .line-arrow {
    fill: var(--gantt-link-line-stroke, #ffa011);
  }

  .link.crit .link-line,
  .link.crit .link-arrow {
    stroke: var(--gantt-critical-path-color);
  }

  .add-link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    stroke-width: 2;
    stroke-dasharray: 5;
  }
`;var Se=k`
  :host {
    --gantt-milestone-color: #d33daf;
    --gantt-bar-back-fill: #65c16f;
    --gantt-bar-warning-back-fill: #faad14;
    --gantt-bar-danger-back-fill: #f5222d;
    --gantt-bar-front-fill: #46ad51;
    --gantt-bar-group-back-fill: #3db9d3;
    --gantt-bar-group-front-fill: #299cb4;
    --gantt-bar-today-line-stroke: #f04134;
    --gantt-bar-today-line-stroke-width: 1px;
    --gantt-bar-inner-border-color: var(--gantt-chart-bg-color);
    --gantt-bar-outer-border-color: var(--gantt-chart-bg-color);
    --gantt-critical-path-color: #2d22f5;
  }

  .gantt-bar {
    cursor: pointer;
  }
  .milestone {
    fill: var(--gantt-milestone-color, #d33daf);
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

  .crit {
    --gantt-bar-inner-border-color: var(--gantt-critical-path-color);
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
  .gantt-bar .front {
    fill: var(--gantt-bar-front-fill, #46ad51);
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
`;var _e=k`
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
`;function Ee(){let n=this.shadowRoot.getElementById("gantt");function t(c){return c.classList.contains("ctl-start")}function e(c){return c.classList.contains("ctl-finish")}let i=(c,m)=>{let d=c.dataset.id,p=m.dataset.id;if(d===p)return;let g=this.settings.data.find(P=>P.id.toString()===d),f=this.settings.data.find(P=>P.id.toString()===p),b=t(c)?"S":"F",_=t(m)?"S":"F";g.type==="milestone"&&(b="F"),f.type==="milestone"&&(_="S");let E={source:d,target:p,type:`${b}${_}`};if(this.settings.links.find(P=>P.source===d&&P.target===p))return;let y=!1,v={link:E,cancel:()=>{y=!0}},D=new CustomEvent("before-link-added",{detail:v});this.dispatchEvent(D),y||(this.settings.links.push(E),this.requestUpdate())},s="http://www.w3.org/2000/svg",r=!1,o=null,a=null,l=c=>c.parentElement.x.baseVal.value+c.cx.baseVal.value,h=c=>c.parentElement.y.baseVal.value+c.cy.baseVal.value;n.addEventListener("mousedown",c=>{if(!t(c.target)&&!e(c.target))return;c.preventDefault(),o=c.target,this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish").forEach(p=>{p.setAttribute("active","active")}),r=!0,a=document.createElementNS(s,"line");let m=l(o).toString(),d=h(o).toString();a.setAttribute("x1",m),a.setAttribute("y1",d),a.setAttribute("x2",m),a.setAttribute("y2",d),a.classList.add("add-link-line"),n.appendChild(a)}),n.addEventListener("mousemove",c=>{let m=c.target;if(r)if(c.preventDefault(),t(m)||e(m)){let d=l(m).toString(),p=h(m).toString();a.setAttribute("x2",d),a.setAttribute("y2",p)}else{let d=c.clientX,p=c.clientY,g=n.getBoundingClientRect();a.setAttribute("x2",(d-g.left).toString()),a.setAttribute("y2",(p-g.top).toString())}});let u=c=>{r&&(c.preventDefault(),c.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(m=>{m.removeAttribute("active")}),r=!1,a&&(n.removeChild(a),a=null))};n.addEventListener("mouseup",c=>{u(c);let m=c.target,d=t(m)||e(m);o&&d&&i(o,m),o=null}),this.addEventListener("mouseout",c=>{u(c)})}var it,B=(n,t,e)=>{if(it)if(e){let i=new Date(n.start.getTime()+t);t>0?t<864e5&&(t=864e5,i=new Date(n.start.getTime()+t)):t>864e5*-1&&(t=864e5*-1,i=new Date(n.start.getTime()+t)),n.start=i}else{let i=new Date(n.end.getTime()+t);t<0?t>864e5*-1&&(t=864e5*-1,i=new Date(n.end.getTime()+t)):t<864e5&&(t=864e5,i=new Date(n.end.getTime()+t)),n.end=i}};function Ae(){it=this.shadowRoot.getElementById("gantt");let n=!1,t=!1,e,i,s,r=!1,o=!1,a;function l(p){var _,E;let g=p.composedPath(),f=!1,b=!1;for(let x of g)if(f=(_=x.classList)==null?void 0:_.contains("ctl-resize-start"),b=(E=x.classList)==null?void 0:E.contains("ctl-resize-end"),f||b)break;return f||b?(r=f,o=b,!0):!1}let h=()=>{r=!1,o=!1,n=!1,e=void 0,a=void 0,s=void 0,t=!1,this.suppressClick},u=p=>{p.preventDefault(),p.stopPropagation(),p.stopImmediatePropagation()},c=p=>{!l(p)||n||(t=!0,a=p.clientX,e=p.composedPath().find(g=>g.classList.contains("gantt-bar")),i=e.dataset.itemId,i&&(u(p),s=this.settings.data.find(g=>g.id.toString()===i)))},m=async p=>{if(!t)return;u(p),n=!0;let g=p.movementX>0?1:-1,f=Math.abs(a-p.clientX)*this.settings.timeScale.msPerPx*g;if(f!==0&&!(Math.abs(f)<864e5)){B(s,f,r);for(let b of s.parents)r&&s.start.getTime()===b.start.getTime()&&B(b,f,r),o&&s.end.getTime()===b.end.getTime()&&B(b,f,r);a=p.clientX,this.requestUpdate()}},d=p=>{if(t){if(n){this.___lastMovement=new Date().getTime();let g=new CustomEvent("item-resized",{detail:s});this.dispatchEvent(g)}h(),u(p)}};it.addEventListener("mousedown",c),it.addEventListener("mousemove",m),it.addEventListener("mouseup",d),this.addEventListener("mouseout",()=>{h()})}function De(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,i,s,r,o;function a(p){let g=p;return g.tagName==="rect"&&(g.classList.contains("back")||g.classList.contains("front")||g.classList.contains("bar-inner-border")||g.classList.contains("bar-outer-border"))}let l=()=>{t=!1,s=void 0,o=void 0,e=!1,i=void 0,this.suppressClick},h=p=>{p.preventDefault(),p.stopPropagation(),p.stopImmediatePropagation()},u=p=>{let g=p.target;!a(g)||t||(i=p.clientX,e=!0,s=g.parentElement,r=s.dataset.itemId,r&&(h(p),o=this.settings.data.find(f=>f.id.toString()===r)))},c=this.settings.timeScale.pxPerDay,m=async p=>{if(e===!1||i===void 0)return;h(p),t=!0;let g=p.movementX>0?1:-1;if(!(Math.abs(i-p.clientX)<c)){if(ft(o))for(let f of o.nested)f.start=new Date(f.start.getTime()+864e5*g),f.end=new Date(f.end.getTime()+864e5*g);for(let f of o.parents)o.start.getTime()===f.start.getTime()?B(f,864e5*g,!0):o.end.getTime()===f.end.getTime()&&B(f,864e5*g,!1);o.start=new Date(o.start.getTime()+864e5*g),o.end=new Date(o.end.getTime()+864e5*g),i+=c*g,this.requestUpdate()}},d=p=>{if(e){if(t){this.___lastMovement=new Date().getTime();let g=new CustomEvent("item-moved",{detail:o});this.dispatchEvent(g)}l(),h(p)}};n.addEventListener("mousedown",u),n.addEventListener("mousemove",m),n.addEventListener("mouseup",d),this.addEventListener("mouseout",()=>{l()})}var ke=864e5,vt=class{constructor(t,e,i){this.viewMode=i;let s=new Date(t);s.setHours(1,0,0,0);let r=new Date(e);r.setHours(1,0,0,0),this.start=s,this.end=r,this.startMs=s.getTime(),this.endMs=r.getTime(),this.totalDays=Math.round(Math.abs((this.startMs-r.getTime())/ke));let o={month:3,week:4,day:5},a=5;this.totalDays>365?a=1*o[i]:this.totalDays>155?a=4*o[i]:this.totalDays>30&&(a=6*o[i]),this.pxPerDay=a,this.pxPerWeek=a*7,this.msPerPx=ke/a}pxToMs(t){return t*this.msPerPx}msToPx(t){return t/this.msPerPx}dateToPx(t){let e=t.getTime()-this.startMs;return this.msToPx(e)}pxToDate(t){let e=this.pxToMs(t);return new Date(this.startMs+e)}pxForTimeSpan(t,e){let i=e.getTime()-t.getTime();return this.msToPx(i)}};var Ct=class n{constructor(t,e){this.settings=t;this.id=e;this.startDate=this.settings.data.find(t=>t.id===this.id).start;this.endDate=this.settings.data.find(t=>t.id===this.id).end}get children(){return this.settings.links.filter(t=>t.source===this.id).map(t=>new n(this.settings,t.target))}};function Ce(n){let t={longestDuration:0,path:[]},e=(i,s,r)=>{if(i===null)return;let o=new Ct(this.settings,i),a=o.endDate.getTime()-o.startDate.getTime(),l=r+a;s.push(o.id),!o.children||o.children.length===0?l>t.longestDuration&&(t.longestDuration=l,t.path=[...s]):o.children.forEach(h=>{e(h.id,s,l)}),s.pop()};return e(n,[],0),t.longestDuration=t.longestDuration/864e5,t}var G=class extends I{constructor(){super(...arguments);this.___lastMovement=0;this.interactionReady=!1;this.scrollReady=!1}connectedCallback(){super.connectedCallback()}updateSettings(){var p,g;let e=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),i=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),s=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),r=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-line-width")),o=this.flattenData(this.data),a=((p=this.options)==null?void 0:p.minDate)??null,l=((g=this.options)==null?void 0:g.maxDate)??null;o.forEach(f=>{a=Ht(a,f.start),l=Pt(l,f.end)}),a=a||new Date,l=l||new Date;let h={viewMode:"week",showDelay:!0,showLinks:!0,showLabels:!0,showCriticalPath:!1};this.settings={...h,...this.options,start:a,end:l,labelsWidth:0,width:0,height:0,scaleHeight:i,rowHeight:e,barHeight:s,lineWidth:r,data:o,links:this.links,timeScale:void 0,...this.options},this.settings.timeScale=new vt(C(a,-1),C(l,7),this.settings.viewMode),this.settings.width=this.settings.timeScale.totalDays*this.settings.timeScale.pxPerDay,this.settings.height=this.settings.data.length*this.settings.rowHeight,this.setupInteractions();let u=this.settings.data.filter(f=>f.type!=="group"),c=u.filter(f=>f.start.getTime()===Math.min(...u.map(b=>b.start.getTime()))),m=u.filter(f=>f.end.getTime()===Math.max(...u.map(b=>b.end.getTime()))),d=[];for(let f of c){let b=Ce.bind(this)(f.id);m.map(_=>_.id).includes(b.path[b.path.length-1])&&d.push(...b.path)}for(let f of this.settings.data)f.crit=d.includes(f.id)}flattenData(e,i,s){var a;let r=[],o=0;for(let l of e){this.validateItem(l);let h=l;h.parents=[],s&&(h.parents=[...s.parents??[],s]),h.path=i?i+"."+o:o.toString(),h.id??(h.id=h.path),r.push(h),((a=l.nested)==null?void 0:a.length)>0&&r.push(...this.flattenData(l.nested,h.path,h)),o++}return r}validateItem(e){if(!(ft(e)||ne(e)||ie(e)))throw Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text);e.start??(e.start=new Date),e.end??(e.end=C(e.start,5)),e.start.setHours(1,0,0,0),e.end.setHours(1,0,0,0),e.start>e.end&&Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text+"; End before start")}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.interactionReady||(await this.updateComplete,Ee.bind(this)(),De.bind(this)(),Ae.bind(this)(),this.interactionReady=!0)}get timeScaleElement(){return this.__timeScaleEl||(this.__timeScaleEl=this.renderRoot.querySelector(".time-scale")),this.__timeScaleEl}get timeScaleMarginElement(){return this.__timeScaleMarginEl||(this.__timeScaleMarginEl=this.renderRoot.querySelector(".time-scale-margin")),this.__timeScaleMarginEl}get ganttElement(){return this.__ganttEl||(this.__ganttEl=this.renderRoot.querySelector(".gantt")),this.__ganttEl}updated(){if(!this.data||this.data.length===0||this.scrollReady)return;let e=this.renderRoot.querySelector("slot[data-labels]").assignedElements({flatten:!0})[0];if(!e)return;let i={childList:!0,subtree:!0,attributes:!0,characterData:!0},s=()=>{let o=e.getBoundingClientRect(),a=Math.round((o.width+Number.EPSILON)*10)/10;this.settings.labelsWidth=a,this.timeScaleMarginElement.style.width=a+"px";let l=this.renderRoot.querySelector(".gantt-v");this.timeScaleElement.style.marginRight=l.offsetWidth-l.clientWidth+"px",this.requestUpdate()},r=new MutationObserver(s);r.observe(e,i),e.shadowRoot&&r.observe(e.shadowRoot,i),s(),this.scrollReady=!0}render(){if(!this.data||this.data.length===0)return"No data";this.updateSettings();let e=this.settings.showLabels?nt`
          <div class="labels">
            ${this.settings.data.map(i=>nt`<div class="lbl">${i.text}</div>`)}
          </div>
        `:nt``;return nt`
      <div class="time-scale-container">
        <div class="time-scale-margin">
          <slot name="top-left-corner"></slot>
        </div>
        <div class="time-scale" @scroll=${this.onScroll}>
          ${ve.bind(this)(this.settings)}
        </div>
      </div>

      <div class="gantt-v">
        <div class="labels-container">
          <slot name="labels" data-labels>${e}</slot>
        </div>
        <div class="gantt" @scroll=${this.onScroll}>${xe.bind(this)()}</div>
      </div>
    `}onScroll(e){e.target===this.ganttElement&&this.timeScaleElement.scroll({left:this.ganttElement.scrollLeft}),e.target===this.timeScaleElement&&this.ganttElement.scroll({left:this.timeScaleElement.scrollLeft})}};G.styles=[k`
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
        overflow-y: scroll;
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
      }
    `,_e,be,we,Se],q([J({type:Object,attribute:!1})],G.prototype,"options",2),q([J({type:Array,attribute:!1})],G.prototype,"data",2),q([J({type:Array,attribute:!1})],G.prototype,"links",2),G=q([Rt("wc-gantt")],G);export{G as WCGantt};
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
