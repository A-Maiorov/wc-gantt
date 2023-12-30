var Pt=Object.defineProperty;var Le=Object.getOwnPropertyDescriptor;var Oe=(n,t)=>{for(var e in t)Pt(n,e,{get:t[e],enumerable:!0})};var nt=(n,t,e,s)=>{for(var r=s>1?void 0:s?Le(t,e):t,o=n.length-1,i;o>=0;o--)(i=n[o])&&(r=(s?i(t,e,r):i(r))||r);return s&&r&&Pt(t,e,r),r};var Rt=(n,t,e)=>{if(!t.has(n))throw TypeError("Cannot "+e)};var bt=(n,t,e)=>(Rt(n,t,"read from private field"),e?e.call(n):t.get(n)),It=(n,t,e)=>{if(t.has(n))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(n):t.set(n,e)},Ut=(n,t,e,s)=>(Rt(n,t,"write to private field"),s?s.call(n,e):t.set(n,e),e);var Nt={};Oe(Nt,{DAY:()=>R,addDays:()=>I,formatDay:()=>Pe,formatMonth:()=>vt,getDates:()=>U,getWeekNumber:()=>wt,maxDate:()=>At,minDate:()=>_t,p2s:()=>kt});var R=864e5;function I(n,t){let e=new Date(n.valueOf());return e.setDate(e.getDate()+t),e}function U(n,t){let e=[],s=new Date(n);for(s.setHours(24,0,0,0);s.getTime()<=t;)e.push(s.getTime()),s=I(s,1);return e}function vt(n){let t=n.getFullYear(),e=n.getMonth()+1;return`${t}/${e>9?e:`0${e}`}`}function Pe(n){let t=n.getMonth()+1,e=n.getDate();return`${t}/${e}`}function _t(n,t){return n&&t?n>t?t:n:n||t}function At(n,t){return n&&t?n<t?t:n:n||t}function kt(n){return n.map(t=>`${t[0]},${t[1]}`).join(" ")}function wt(n){n.setHours(0,0,0,0),n.setDate(n.getDate()+3-(n.getDay()+6)%7);var t=new Date(n.getFullYear(),0,4);return 1+Math.round(((n.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)}var zt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var st=globalThis,rt=st.ShadowRoot&&(st.ShadyCSS===void 0||st.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Et=Symbol(),Bt=new WeakMap,Y=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==Et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(rt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Bt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Bt.set(e,t))}return t}toString(){return this.cssText}},jt=n=>new Y(typeof n=="string"?n:n+"",void 0,Et),C=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,o)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[o+1],n[0]);return new Y(e,n,Et)},St=(n,t)=>{if(rt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=st.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},it=rt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return jt(e)})(n):n;var{is:Re,defineProperty:Ie,getOwnPropertyDescriptor:Ue,getOwnPropertyNames:Ne,getOwnPropertySymbols:ze,getPrototypeOf:Be}=Object,H=globalThis,Wt=H.trustedTypes,je=Wt?Wt.emptyScript:"",Ct=H.reactiveElementPolyfillSupport,J=(n,t)=>n,K={toAttribute(n,t){switch(t){case Boolean:n=n?je:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},ot=(n,t)=>!Re(n,t),Gt={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ot};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);var D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ie(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:o}=Ue(this.prototype,t)??{get(){return this[e]},set(i){this[e]=i}};return{get(){return r==null?void 0:r.call(this)},set(i){let a=r==null?void 0:r.call(this);o.call(this,i),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gt}static _$Ei(){if(this.hasOwnProperty(J("elementProperties")))return;let t=Be(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(J("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(J("properties"))){let e=this.properties,s=[...Ne(e),...ze(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(it(r))}else t!==void 0&&e.push(it(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return St(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EO(t,e){var o;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let i=(((o=s.converter)==null?void 0:o.toAttribute)!==void 0?s.converter:K).toAttribute(e,s.type);this._$Em=t,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(t,e){var o;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let i=s.getPropertyOptions(r),a=typeof i.converter=="function"?{fromAttribute:i.converter}:((o=i.converter)==null?void 0:o.fromAttribute)!==void 0?i.converter:K;this._$Em=r,this[r]=a.fromAttribute(e,i.type),this._$Em=null}}requestUpdate(t,e,s,r=!1,o){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??ot)(r?o:this[t],e))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.C(o,this[o],i)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$E_)==null||s.forEach(r=>{var o;return(o=r.hostUpdate)==null?void 0:o.call(r)}),this.update(e)):this._$ET()}catch(r){throw t=!1,this._$ET(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EO(e,this[e]))),this._$ET()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[J("elementProperties")]=new Map,D[J("finalized")]=new Map,Ct==null||Ct({ReactiveElement:D}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.2");var We={attribute:!0,type:String,converter:K,reflect:!1,hasChanged:ot},Ge=(n=We,t,e)=>{let{kind:s,metadata:r}=e,o=globalThis.litPropertyMetadata.get(r);if(o===void 0&&globalThis.litPropertyMetadata.set(r,o=new Map),o.set(e.name,n),s==="accessor"){let{name:i}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(i,c,n)},init(a){return a!==void 0&&this.C(i,void 0,n),a}}}if(s==="setter"){let{name:i}=e;return function(a){let c=this[i];t.call(this,a),this.requestUpdate(i,c,n)}}throw Error("Unsupported decorator location: "+s)};function at(n){return(t,e)=>typeof e=="object"?Ge(n,t,e):((s,r,o)=>{let i=r.hasOwnProperty(o);return r.constructor.createProperty(o,i?{...s,wrapped:!0}:s),i?Object.getOwnPropertyDescriptor(r,o):void 0})(n,t,e)}var Q=globalThis,ct=Q.trustedTypes,Ft=ct?ct.createPolicy("lit-html",{createHTML:n=>n}):void 0,Tt="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,Ht="?"+M,Fe=`<${Ht}>`,B=document,Z=()=>B.createComment(""),tt=n=>n===null||typeof n!="object"&&typeof n!="function",Xt=Array.isArray,Qt=n=>Xt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",Dt=`[ 	
\f\r]`,X=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vt=/-->/g,qt=/>/g,N=RegExp(`>|${Dt}(?:([^\\s"'>=/]+)(${Dt}*=${Dt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Yt=/'/g,Jt=/"/g,Zt=/^(?:script|style|textarea|title)$/i,te=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),ee=te(1),y=te(2),T=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Kt=new WeakMap,z=B.createTreeWalker(B,129);function ne(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ft!==void 0?Ft.createHTML(t):t}var se=(n,t)=>{let e=n.length-1,s=[],r,o=t===2?"<svg>":"",i=X;for(let a=0;a<e;a++){let c=n[a],u,d,l=-1,p=0;for(;p<c.length&&(i.lastIndex=p,d=i.exec(c),d!==null);)p=i.lastIndex,i===X?d[1]==="!--"?i=Vt:d[1]!==void 0?i=qt:d[2]!==void 0?(Zt.test(d[2])&&(r=RegExp("</"+d[2],"g")),i=N):d[3]!==void 0&&(i=N):i===N?d[0]===">"?(i=r??X,l=-1):d[1]===void 0?l=-2:(l=i.lastIndex-d[2].length,u=d[1],i=d[3]===void 0?N:d[3]==='"'?Jt:Yt):i===Jt||i===Yt?i=N:i===Vt||i===qt?i=X:(i=N,r=void 0);let f=i===N&&n[a+1].startsWith("/>")?" ":"";o+=i===X?c+Fe:l>=0?(s.push(u),c.slice(0,l)+Tt+c.slice(l)+M+f):c+M+(l===-2?a:f)}return[ne(n,o+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},et=class n{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let o=0,i=0,a=t.length-1,c=this.parts,[u,d]=se(t,e);if(this.el=n.createElement(u,s),z.currentNode=this.el.content,e===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=z.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let l of r.getAttributeNames())if(l.endsWith(Tt)){let p=d[i++],f=r.getAttribute(l).split(M),h=/([.?@])?(.*)/.exec(p);c.push({type:1,index:o,name:h[2],strings:f,ctor:h[1]==="."?ht:h[1]==="?"?dt:h[1]==="@"?ut:W}),r.removeAttribute(l)}else l.startsWith(M)&&(c.push({type:6,index:o}),r.removeAttribute(l));if(Zt.test(r.tagName)){let l=r.textContent.split(M),p=l.length-1;if(p>0){r.textContent=ct?ct.emptyScript:"";for(let f=0;f<p;f++)r.append(l[f],Z()),z.nextNode(),c.push({type:2,index:++o});r.append(l[p],Z())}}}else if(r.nodeType===8)if(r.data===Ht)c.push({type:2,index:o});else{let l=-1;for(;(l=r.data.indexOf(M,l+1))!==-1;)c.push({type:7,index:o}),l+=M.length-1}o++}}static createElement(t,e){let s=B.createElement("template");return s.innerHTML=t,s}};function j(n,t,e=n,s){var i,a;if(t===T)return t;let r=s!==void 0?(i=e._$Co)==null?void 0:i[s]:e._$Cl,o=tt(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==o&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),o===void 0?r=void 0:(r=new o(n),r._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=j(n,r._$AS(n,t.values),r,s)),t}var pt=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??B).importNode(e,!0);z.currentNode=r;let o=z.nextNode(),i=0,a=0,c=s[0];for(;c!==void 0;){if(i===c.index){let u;c.type===2?u=new F(o,o.nextSibling,this,t):c.type===1?u=new c.ctor(o,c.name,c.strings,this,t):c.type===6&&(u=new mt(o,this,t)),this._$AV.push(u),c=s[++a]}i!==(c==null?void 0:c.index)&&(o=z.nextNode(),i++)}return z.currentNode=B,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},F=class n{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=j(this,t,e),tt(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&tt(this._$AH)?this._$AA.nextSibling.data=t:this.$(B.createTextNode(t)),this._$AH=t}g(t){var o;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=et.createElement(ne(s.h,s.h[0]),this.options)),s);if(((o=this._$AH)==null?void 0:o._$AD)===r)this._$AH.p(e);else{let i=new pt(r,this),a=i.u(this.options);i.p(e),this.$(a),this._$AH=i}}_$AC(t){let e=Kt.get(t.strings);return e===void 0&&Kt.set(t.strings,e=new et(t)),e}T(t){Xt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let o of t)r===e.length?e.push(s=new n(this.k(Z()),this.k(Z()),this,this.options)):s=e[r],s._$AI(o),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},W=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=o,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}_$AI(t,e=this,s,r){let o=this.strings,i=!1;if(o===void 0)t=j(this,t,e,0),i=!tt(t)||t!==this._$AH&&t!==T,i&&(this._$AH=t);else{let a=t,c,u;for(t=o[0],c=0;c<o.length-1;c++)u=j(this,a[s+c],e,c),u===T&&(u=this._$AH[c]),i||(i=!tt(u)||u!==this._$AH[c]),u===w?t=w:t!==w&&(t+=(u??"")+o[c+1]),this._$AH[c]=u}i&&!r&&this.O(t)}O(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ht=class extends W{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===w?void 0:t}},dt=class extends W{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}},ut=class extends W{constructor(t,e,s,r,o){super(t,e,s,r,o),this.type=5}_$AI(t,e=this){if((t=j(this,t,e,0)??w)===T)return;let s=this._$AH,r=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},mt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}},re={j:Tt,P:M,A:Ht,C:1,M:se,L:pt,R:Qt,V:j,D:F,I:W,H:dt,N:ut,U:ht,B:mt},Mt=Q.litHtmlPolyfillSupport;Mt==null||Mt(et,F),(Q.litHtmlVersions??(Q.litHtmlVersions=[])).push("3.1.0");var ie=(n,t,e)=>{let s=(e==null?void 0:e.renderBefore)??t,r=s._$litPart$;if(r===void 0){let o=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new F(t.insertBefore(Z(),o),o,void 0,e??{})}return r._$AI(n),r};var L=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=ie(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}},oe;L._$litElement$=!0,L.finalized=!0,(oe=globalThis.litElementHydrateSupport)==null||oe.call(globalThis,{LitElement:L});var Lt=globalThis.litElementPolyfillSupport;Lt==null||Lt({LitElement:L});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.2");var ae=n=>{let t=!("nested"in n)&&(!n.type||n.type==="activity");return t&&!n.type&&(n.type="activity"),t},le=n=>"type"in n&&!("nested"in n)&&!("percent"in n)&&n.type==="milestone",ce=n=>{let t="nested"in n&&Array.isArray(n.nested)&&(!n.type||n.type==="group");return t&&!n.type&&(n.type="group"),t};function pe({width:n,height:t,offsetY:e,thickWidth:s,maxTextWidth:r}){let o=s/2,i=n-s,a=t-s;return y`
    <g id="layout">
      <rect x=${o} y=${o} width=${i} height=${a} 
      class="line thick box" />
      <line
        x1=${0}
        x2=${n}
        y1=${e-o}
        y2=${e-o}
        class="line thick"
        
      />
      <line
        x1=${r}
        x2=${n}
        y1=${e/2}
        y2=${e/2}
        class="line"
      />
    </g>
  `}var he={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},de=n=>(...t)=>({_$litDirective$:n,values:t}),ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{D:Ve}=re;var ue=()=>document.createComment(""),V=(n,t,e)=>{var o;let s=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){let i=s.insertBefore(ue(),r),a=s.insertBefore(ue(),r);e=new Ve(i,a,n,n.options)}else{let i=e._$AB.nextSibling,a=e._$AM,c=a!==n;if(c){let u;(o=e._$AQ)==null||o.call(e,n),e._$AM=n,e._$AP!==void 0&&(u=n._$AU)!==a._$AU&&e._$AP(u)}if(i!==r||c){let u=e._$AA;for(;u!==i;){let d=u.nextSibling;s.insertBefore(u,r),u=d}}}return e},O=(n,t,e=n)=>(n._$AI(t,e),n),qe={},me=(n,t=qe)=>n._$AH=t,fe=n=>n._$AH,gt=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let r=t.nextSibling;t.remove(),t=r}};var ge=(n,t,e)=>{let s=new Map;for(let r=t;r<=e;r++)s.set(n[r],r);return s},E=de(class extends ft{constructor(n){if(super(n),n.type!==he.CHILD)throw Error("repeat() can only be used in text expressions")}ht(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let r=[],o=[],i=0;for(let a of n)r[i]=s?s(a,i):i,o[i]=e(a,i),i++;return{values:o,keys:r}}render(n,t,e){return this.ht(n,t,e).values}update(n,[t,e,s]){let r=fe(n),{values:o,keys:i}=this.ht(t,e,s);if(!Array.isArray(r))return this.dt=i,o;let a=this.dt??(this.dt=[]),c=[],u,d,l=0,p=r.length-1,f=0,h=o.length-1;for(;l<=p&&f<=h;)if(r[l]===null)l++;else if(r[p]===null)p--;else if(a[l]===i[f])c[f]=O(r[l],o[f]),l++,f++;else if(a[p]===i[h])c[h]=O(r[p],o[h]),p--,h--;else if(a[l]===i[h])c[h]=O(r[l],o[h]),V(n,c[h+1],r[l]),l++,h--;else if(a[p]===i[f])c[f]=O(r[p],o[f]),V(n,r[l],r[p]),p--,f++;else if(u===void 0&&(u=ge(i,f,h),d=ge(a,l,p)),u.has(a[l]))if(u.has(a[p])){let m=d.get(i[f]),g=m!==void 0?r[m]:null;if(g===null){let k=V(n,r[l]);O(k,o[f]),c[f]=k}else c[f]=O(g,o[f]),V(n,r[l],g),r[m]=null;f++}else gt(r[p]),p--;else gt(r[l]),l++;for(;f<=h;){let m=V(n,c[h+1]);O(m,o[f]),c[f++]=m}for(;l<=p;){let m=r[l++];m!==null&&gt(m)}return this.dt=i,me(n,c),T}});function $t({dates:n,unit:t,offsetY:e,minTime:s,maxTime:r,maxTextWidth:o}){let i=n.filter(l=>new Date(l).getDate()===1);i.unshift(s),i.push(r);let a=[],c=o,u=e/2,d=i.length-1;for(let l=0;l<d;l++){let p=new Date(i[l]),f=vt(p),h=c+(i[l]-s)/t,m=(i[l+1]-i[l])/t,g="m_"+f;a.push({id:g,tpl:y`
      <g>
        <line x1=${h} x2=${h} y1=${0} y2=${u} class="line" />
        ${m>50?y`<text x=${h+m/2} y=${e*.25} 
              class="text small">${f}</text>`:null}
      </g>
      `})}return y`<g id="yearMonth">
  ${E(a,l=>l.id,l=>l.tpl)}  
  </g>`}function $e({unit:n,minTime:t,maxTime:e,height:s,offsetY:r,maxTextWidth:o}){let i=U(t,e),a=[],c=o,u=r/2,d=s-u,l=i.length-1;for(let p=0;p<l;p++){let f=new Date(i[p]),h=f.getDay(),m=c+(i[p]-t)/n,g=(i[p+1]-i[p])/n,k="hd_"+h+"_"+p,b=f.getDate(),$=m+g/2;a.push({id:k,tpl:y`
      <g>
        ${h===0||h===6?y`<rect id="xyz" x=${m} y=${u} width=${g} height=${d} class="weekend" />`:null}
        <line x1=${m} x2=${m} y1=${u} y2=${r} class="line"/>
        <text x=${$} y=${r*.75} class="text small">
          ${b}
        </text>
        ${p===l-1?y`<line
              x1=${m+g}
              x2=${m+g}
              y1=${u}
              y2=${r}
              class="line"              
            />`:null}
      </g>`})}return y`
    <g id="dayHeader">
      ${$t({unit:n,dates:i,offsetY:r,minTime:t,maxTime:e,maxTextWidth:o})}
      
      ${E(a,p=>p.id,p=>p.tpl)}   
    </g>`}function ye({unit:n,minTime:t,maxTime:e,height:s,offsetY:r,maxTextWidth:o}){let i=U(t,e),a=i.filter(h=>new Date(h).getDay()===0);a.push(e);let c=[],u=o,d=r,l=s-d,p=864e5/n,f=a.length-1;for(let h=0;h<f;h++){let m=new Date(a[h]),g=u+(a[h]-t)/n,k=m.getDate(),b=I(m,-1).getDate(),$="week_"+h+"_"+b+"-"+k,A=r-10,v=wt(I(m,1));c.push({id:$,tpl:y`
      <g id=${$}>
        <rect x=${g-p} y=${d} width=${p*2} height=${l} 
          class="weekend"/>
          <text x=${g-3} y=${A} class="text small end">
          ${b}
        </text>       
        <line x1=${g} x2=${g} y1=${r/2} y2=${r} 
          class="line"/>
        <text x=${g+3} y=${A} class="text small start">
          ${k}
        </text>        
        <text x=${g+3+25} y=${A-13} 
          class="text tiny">
            Week ${v}
        </text>    
      </g>`})}return y`
    <g id="weekHeader">
      ${$t({unit:n,dates:i,offsetY:r,minTime:t,maxTime:e,maxTextWidth:o})}

      ${E(c,h=>h.id,h=>h.tpl)}
     
    </g>
  `}function xe({months:n,unit:t,offsetY:e,minTime:s,maxTime:r,maxTextWidth:o}){let i=n.filter(l=>new Date(l).getMonth()===0);i.unshift(s),i.push(r);let a=[],c=o,u=e/2,d=i.length-1;for(let l=0;l<d;l++){let p=new Date(i[l]),f=c+(i[l]-s)/t,h=(i[l+1]-i[l])/t,m="y_"+p.getFullYear();a.push({id:m,tpl:y`
      <g>
        <line x1=${f} x2=${f} y1=${0} y2=${u} 
        class="line" />
        ${h>35?y`
          <text x=${f+h/2} y=${e*.25} 
          class="text small">
            ${p.getFullYear()}
          </text>`:null}
      </g>`})}return y`<g id="year">
   ${E(a,l=>l.id,l=>l.tpl)}  
  </g>`}function be({unit:n,minTime:t,maxTime:e,offsetY:s,maxTextWidth:r}){let o=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=U(t,e).filter(p=>new Date(p).getDate()===1);a.unshift(t),a.push(e);let c=[],u=r,d=s/2,l=a.length-1;for(let p=0;p<l;p++){let h=new Date(a[p]).getMonth(),m=u+(a[p]-t)/n,g=(a[p+1]-a[p])/n,k="hm_"+h,b=m+g/2;c.push({id:k,tpl:y`
      <g>
        <line x1=${m} x2=${m} y1=${d} y2=${s} 
        class="line" />
        ${g>30?y`
          <text x=${b} y=${s*.75} class="text small">
            ${o[h]}
          </text>`:null}
      </g>
      `})}return y`
    <g id="monthHeader">
      ${xe({unit:n,months:a,offsetY:s,minTime:t,maxTime:e,maxTextWidth:r})}     
       ${E(c,p=>p.id,p=>p.tpl)}  
    </g>
  `}function ve({length:n,width:t,height:e,offsetY:s,rowHeight:r,maxTextWidth:o}){let i=[];for(let a=0;a<n;a++){let c=(a+1)*r+s;i.push({id:a,tpl:y`
        <line key=${a} x1="0" x2=${t} y1=${c} y2=${c} class="line"/>`})}return y`
    <g id="grid">
      ${E(i,a=>a.id,a=>a.tpl)}     

      <line
        x1=${o}
        x2=${o}
        y1="0"
        y2=${e}
        class="line thick"
      />
    </g>
  `}function _e({data:n,rowHeight:t,offsetY:e}){let s=o=>{let i=new CustomEvent("item-click",{detail:o});this.dispatchEvent(i)},r=n.map((o,i)=>({id:"lbl_"+i,tpl:y`
      <text
        key=${i}
        x="10"
        y=${(i+.5)*t+e}
        class="gantt-label text start"        
        @click=${()=>s(o)}
      >
        ${o.text}
      </text>`}));return y`
    <g id="labels">
      ${E(r,o=>o.id,o=>o.tpl)}     
    </g>`}function Ae(n){let t=n.map(o=>({x:o[0],y:o[1]})),e=["M"+t[0].x+","+t[0].y],s=5,r=t.length-1;t[r-1].x<t[r].x?t[r].x+=s/2:t[r].x-=s/2;for(let o=0;o<t.length;o++){let i=o+1>t.length-1?(o+1)%t.length:o+1,a=o+2>t.length-1?(o+2)%t.length:o+2,c=t[o],u=t[i],d=t[a],l=Math.sqrt(Math.pow(c.x-u.x,2)+Math.pow(c.y-u.y,2)),p=(l-s)/l,f=[((1-p)*c.x+p*u.x).toFixed(1),((1-p)*c.y+p*u.y).toFixed(1)],h=Math.sqrt(Math.pow(u.x-d.x,2)+Math.pow(u.y-d.y,2)),m=s/h;if(o!==r)if(e.push("L"+f.join(",")),o===r-1)e.push("L"+u.x+","+u.y);else{let g=[((1-m)*u.x+m*d.x).toFixed(1),((1-m)*u.y+m*d.y).toFixed(1)];e.push("Q"+u.x+","+u.y+","+g.join(","))}}return e.join(" ")}function ke({data:n,unit:t,offsetY:e,minTime:s,rowHeight:r,barHeight:o,maxTextWidth:i}){let a=i,c=r/2+e,u={};return n.forEach((d,l)=>{u[d.id.toString()]=l}),y`
    <g class="link-line-arrow">
      ${n.map((d,l)=>!d.end||!d.start||!d.links?null:d.links.map(p=>{let f=u[p.target],h=n[f];if(!h||!h.start||!h.end)return null;let m=12,g=6,k=h.type==="milestone"?o/2:0,b=c+l*r,$=c+f*r,A=o/2+4;if(b>$&&(A=-A),p.type==="FS"){let v=a+(d.end.getTime()-s)/t,x=a+(h.start.getTime()-s)/t-k,_=[[v,b],[v+m,b]];x-v>=2*m?_.push([v+m,$]):(_.push([v+m,$-A]),_.push([x-m,$-A]),_.push([x-m,$])),_.push([x-g,$]);let S=[[x-g,$-g],[x,$],[x-g,$+g]];return yt(_,S)}if(p.type==="FF"){let v=a+(d.end.getTime()-s)/t,x=a+(h.end.getTime()-s)/t+k,_=[[v,b],[v+m,b]];x<=v?_.push([v+m,$]):(_.push([v+m,$-A]),_.push([x+m,$-A]),_.push([x+m,$])),_.push([x+g,$]);let S=[[x+g,$-g],[x,$],[x+g,$+g]];return yt(_,S)}if(p.type==="SS"){let v=a+(d.start.getTime()-s)/t,x=a+(h.start.getTime()-s)/t-k,_=[[v,b],[v-m,b]];v<=x?_.push([v-m,$]):(_.push([v-m,$-A]),_.push([x-m,$-A]),_.push([x-m,$])),_.push([x-g,$]);let S=[[x-g,$-g],[x,$],[x-g,$+g]];return yt(_,S)}if(p.type==="SF"){let v=a+(d.start.getTime()-s)/t,x=a+(h.end.getTime()-s)/t+k,_=[[v,b],[v-m,b]];v-x>=2*m?_.push([v-m,$]):(_.push([v-m,$-A]),_.push([x+m,$-A]),_.push([x+m,$])),_.push([x+g,$]);let S=[[x+g,$-g],[x,$],[x+g,$+g]];return yt(_,S)}return null}))}
    </g>`}function yt(n,t){return y`
  <g>
    <path d=${Ae(n)} class="link-line" />
    <polygon points=${kt(t)} class="line-arrow" />
  </g>`}function we({data:n,unit:t,height:e,offsetY:s,minTime:r,showDelay:o,rowHeight:i,barHeight:a,maxTextWidth:c,current:u}){let d=c,l=(i-a)/2+s,p=d+(u-r)/t,f=n.map((h,m)=>{let g="bar_"+h.id;if(!h.end||!h.start)return null;let k=()=>{let G=new CustomEvent("item-click",{detail:h});this.dispatchEvent(G)},b=d+(h.start.getTime()-r)/t,$=l+m*i,A=$+a/2;if(h.type==="milestone"){let G=a/2,He=[[b,A-G],[b+G,A],[b,A+G],[b-G,A]].map(Ot=>`${Ot[0]},${Ot[1]}`).join(" ");return{id:g,tpl:y`
        <g id=${g}
          key=${m}
          class="gantt-bar"                  
        >
          <polygon
            points=${He}
            class="milestone"            
            @click=${k}
          />
          <circle
            class="gantt-ctrl-start"
            data-id=${h.id}
            cx=${b}
            cy=${A}
            r=${6}          
          />
        </g>
      `}}let v=(h.end.getTime()-h.start.getTime())/t,x=v*h.percent,_="gantt-bar";_+=h.type==="group"?" group":"";let S=!1,xt=!1;return o&&(b+x<p&&h.percent<.999999&&(S=!0,xt=!1),b+v<p&&h.percent<.999999&&(S=!1,xt=!0)),{id:g,tpl:y`
      <g id=${g}
        key=${m}
        class=${_}
        ?warning=${S}
        ?danger=${xt}
      >      
        <rect
          x=${b}
          y=${$}
          width=${v}
          height=${a}
          rx=${1.8}
          ry=${1.8}
          class="back"      
          @click=${k}    
        />
        ${x>1e-6?y`
          <rect
            x=${b}
            y=${$}
            width=${x}
            height=${a}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${k}
          />
        `:null}
        ${h.type==="group"?null:y`
          <g>
            <circle
              class="gantt-ctrl-start"
              data-id=${h.id}
              cx=${b-12}
              cy=${A}
              r=${6}
            />
            <circle
              class="gantt-ctrl-finish"
              data-id=${h.id}
              cx=${b+v+12}
              cy=${A}
              r=${6}
            />
          </g>
        `}
      </g>
    `}});return y`
    <g>
      ${u>r?y`
          <line             
            x1=${p}
            x2=${p}
            y1=${s}
            y2=${e}
            class="today-line"
          />
        `:null}
      ${E(f,h=>h.id,h=>h.tpl)} 
    </g>
  `}var Ye={day:864e5/28,week:7*864e5/56,month:30*864e5/56};function Je(){}function Ee({data:n=[],onClick:t=Je,viewMode:e="week",maxTextWidth:s=140,offsetY:r=60,rowHeight:o=40,barHeight:i=16,thickWidth:a=1.4,showLinks:c=!0,showDelay:u=!0,start:d=new Date,end:l=new Date}){let p=Ye[e],f=d.getTime()-p*48,h=l.getTime()+p*48,m=(h-f)/p+s,g=n.length*o+r,k=`0 0 ${m} ${g}`,b=Date.now(),$={unit:p,height:g,offsetY:r,minTime:f,maxTime:h,maxTextWidth:s};return y`
    <svg id="gantt" width=${m} height=${g} viewBox=${k}>
      ${pe.bind(this)({width:m,height:g,offsetY:r,thickWidth:a,maxTextWidth:s})}       
      ${Ke.bind(this)(e,$)}
      ${ve.bind(this)({length:n.length,width:m,height:g,offsetY:r,rowHeight:o,maxTextWidth:s})}
       
      ${s>0?_e.bind(this)({data:n,offsetY:r,rowHeight:o}):null}
      ${c?ke.bind(this)({data:n,unit:p,offsetY:r,minTime:f,rowHeight:o,barHeight:i,maxTextWidth:s}):null}
      ${we.bind(this)({data:n,unit:p,height:g,current:b,offsetY:r,minTime:f,showDelay:u,rowHeight:o,barHeight:i,maxTextWidth:s})}
     
    </svg>
  `}function Ke(n,t){switch(n){case"day":return $e.bind(this)(t);case"month":return be.bind(this)(t);case"week":return ye.bind(this)(t)}}var Se=C`
  :host {
    --gantt-active-ctl-fill: #ffbf5e;
    --gantt-active-ctl-stroke: #ffa011;
    --gantt-inactive-ctl-fill: #f0f0f0;
    --gantt-inactive-ctl-stroke: #929292;
    --gantt-ctl-stroke-width: 1px;
  }

  .gantt-bar:hover .gantt-ctrl-start,
  .gantt-bar:hover .gantt-ctrl-finish {
    opacity: 1;
  }

  .gantt-ctrl-start[active],
  .gantt-ctrl-finish[active],
  .gantt-ctrl-start:hover,
  .gantt-ctrl-finish:hover {
    opacity: 1;
    fill: var(--gantt-active-ctl-fill, #ffbf5e);
    stroke: var(--gantt-active-ctl-stroke, #ffa011);
  }

  .gantt-ctrl-start,
  .gantt-ctrl-finish {
    opacity: 0;
    position: relative;
    display: block;
    fill: var(--gantt-inactive-ctl-fill, #f0f0f0);
    stroke: var(--gantt-inactive-ctl-stroke, #929292);
    stroke-width: var(--gantt-ctl-stroke-width, 1px);
  }
`;var Ce=C`
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

  .add-link-line {
    stroke: var(--gantt-link-line-stroke, #ffa011);
    stroke-width: 2;
    stroke-dasharray: 5;
  }
`;var De=C`
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
  }

  .gantt-bar {
    cursor: pointer;
  }
  .milestone {
    fill: var(--gantt-milestone-color, #d33daf);
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
`;var Me=C`
  :host {
    --gantt-chart-bg-color: #fff;
    --gantt-layout-line-stroke: #eee;
    --gantt-layout-line-stroke-width: 1px;
    --gantt-layout-thick-line-stroke-width: 1.4px;
    --gantt-layout-text-fill: #222;
    --gantt-layout-font-size: 14px;
    --gantt-layout-small-text-fill: #999;
    --gantt-layout-small-font-size: 12px;
    --gantt-layout-tiny-text-fill: #999;
    --gantt-layout-tiny-font-size: 8px;
    --gantt-day-header-weekend-fill: rgba(252, 248, 227, 0.6);
  }

  .box {
    fill: var(--gantt-chart-bg-color, #fff);
  }

  .line {
    stroke: var(--gantt-layout-line-stroke, #eee);
    stroke-width: var(--gantt-layout-line-stroke-width, 1px);
  }

  .line.thick {
    stroke-width: var(--gantt-layout-thick-line-stroke-width, 1.4px);
  }

  .text {
    text-anchor: middle;
    fill: var(--gantt-layout-text-fill, #222);
    dominant-baseline: central;
    font-size: var(--gantt-layout-font-size, 14px);
  }

  .text.start {
    text-anchor: start;
  }
  .text.end {
    text-anchor: end;
  }

  .text.small {
    fill: var(--gantt-layout-small-text-fill, #999);
    font-size: var(--gantt-layout-small-font-size, 12px);
  }
  .text.tiny {
    fill: var(--gantt-layout-tiny-text-fill, #999);
    font-size: var(--gantt-layout-tiny-font-size, 8px);
  }

  .weekend {
    fill: var(--gantt-day-header-weekend-fill, rgba(252, 248, 227, 0.6));
  }

  .gantt-label {
    cursor: pointer;
  }
  .gantt-label:hover {
    fill: #1582dc;
  }
`;function Te(n,t){function e(d){return d.classList.contains("gantt-ctrl-start")}function s(d){return d.classList.contains("gantt-ctrl-finish")}let r=(d,l)=>{let p=parseInt(d.dataset.id),f=parseInt(l.dataset.id);if(p===f)return;let h=t.data.find(A=>A.id===p),m=t.data.find(A=>A.id===f),g=e(d)?"S":"F",k=e(l)?"S":"F";h.type==="milestone"&&(g="F"),m.type==="milestone"&&(k="S");let b={source:p,target:f,type:`${g}${k}`},$=t.data.find(A=>A.id==p);if($){if($.links.find(S=>S.source===b.source&&S.target===b.target&&S.type===b.type))return;let v=!1,x={link:b,cancel:()=>{v=!0}},_=new CustomEvent("before-link-added",{detail:x});this.dispatchEvent(_),v||($.links.push(b),this.requestUpdate())}},o="http://www.w3.org/2000/svg",i=!1,a=null,c=null;n.addEventListener("mousedown",d=>{if(!e(d.target)&&!s(d.target))return;d.preventDefault(),a=d.target,this.shadowRoot.querySelectorAll(".gantt-ctrl-start,.gantt-ctrl-finish").forEach(f=>{f.setAttribute("active","active")}),i=!0,c=document.createElementNS(o,"line");let l=a.getAttribute("cx"),p=a.getAttribute("cy");c.setAttribute("x1",l),c.setAttribute("y1",p),c.setAttribute("x2",l),c.setAttribute("y2",p),c.classList.add("add-link-line"),n.appendChild(c)}),n.addEventListener("mousemove",d=>{let l=d.target;if(i)if(d.preventDefault(),e(l)||s(l)){let p=l.getAttribute("cx"),f=l.getAttribute("cy");c.setAttribute("x2",p),c.setAttribute("y2",f)}else{let p=d.clientX,f=d.clientY,h=n.getBoundingClientRect();c.setAttribute("x2",(p-h.left).toString()),c.setAttribute("y2",(f-h.top).toString())}});let u=d=>{i&&(d.preventDefault(),d.stopPropagation(),this.shadowRoot.querySelectorAll(".gantt-ctrl-start,.gantt-ctrl-finish").forEach(l=>{l.removeAttribute("active")}),i=!1,c&&(n.removeChild(c),c=null))};n.addEventListener("mouseup",d=>{u(d);let l=d.target,p=e(l)||s(l);a&&p&&r(a,l),a=null}),this.addEventListener("mouseout",d=>{u(d)})}var q,P=class extends L{constructor(){super(...arguments);It(this,q,void 0)}connectedCallback(){super.connectedCallback()}updateSettings(){let e=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-thick-line-stroke-width")),s=null,r=null;this.data.forEach(o=>{s=_t(s,o.start),r=At(r,o.end)}),s=s||new Date,r=r||new Date,Ut(this,q,{viewMode:"week",barHeight:16,rowHeight:40,offsetY:60,...this.options,thickWidth:e,start:s,end:r,data:this.flattenData(this.data)})}flattenData(e,s){var i;let r=[],o=0;for(let a of e)this.validateItem(a),a.path=s?s+"."+o:o.toString(),a.id??(a.id=a.path),r.push(a),((i=a.nested)==null?void 0:i.length)>0&&r.push(...this.flattenData(a.nested,a.path)),o++;return r}validateItem(e){if(!(ce(e)||ae(e)||le(e)))throw Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text);e.start??(e.start=new Date),e.end??(e.end=I(e.start,1)),e.start>e.end&&Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text+"; End before start")}firstUpdated(){let e=this.shadowRoot.getElementById("gantt");Te.bind(this)(e,bt(this,q))}render(){return this.updateSettings(),ee`${Ee.bind(this)(bt(this,q))}`}};q=new WeakMap,P.styles=[C`
      :host {
        display: block;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
      }
    `,Me,Se,Ce,De],nt([at({type:Object,attribute:!1})],P.prototype,"options",2),nt([at({type:Array,attribute:!1})],P.prototype,"data",2),P=nt([zt("wc-gantt")],P);export{P as SVGGantt,Nt as utils};
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
//# sourceMappingURL=index.js.map
