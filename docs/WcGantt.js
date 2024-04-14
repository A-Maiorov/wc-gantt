var Ae=Object.defineProperty;var Ee=Object.getOwnPropertyDescriptor;var Z=(n,t,e,s)=>{for(var r=s>1?void 0:s?Ee(t,e):t,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Ae(t,e,r),r};function T(n,t){let e=new Date(n.valueOf());return e.setDate(e.getDate()+t),e}function kt(n,t){let e=[],s=new Date(n);for(s.setHours(1,0,0,0);s.getTime()<=t;)e.push(s.getTime()),s=T(s,1);return e}function Dt(n,t){let e=[],s=new Date(n.getFullYear(),n.getMonth(),n.getDate(),1),r=s.getDay();r!==1&&s.setDate(s.getDate()-r+1),e.push(new Date(s.getTime()));let i=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1),o=i.getDay();for(o!==1&&i.setDate(i.getDate()+(7-o)),e.push(new Date(i.getTime()));s<i;)s.setDate(s.getDate()+7),e.push(new Date(s.getTime()));return e}function Ct(n,t){return n&&t?n>t?t:n:n||t}function Mt(n,t){return n&&t?n<t?t:n:n||t}function Tt(n){return n.map(t=>`${t[0]},${t[1]}`).join(" ")}function Ht(n){let t=new Date(n.getFullYear(),0,1),e=Math.floor((n.getTime()-t.getTime())/(24*60*60*1e3));return Math.ceil(e/7)+1}var Pt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var Q=globalThis,tt=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,yt=Symbol(),Lt=new WeakMap,F=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==yt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Lt.set(e,t))}return t}toString(){return this.cssText}},It=n=>new F(typeof n=="string"?n:n+"",void 0,yt),k=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new F(e,n,yt)},$t=(n,t)=>{if(tt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=Q.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},et=tt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return It(e)})(n):n;var{is:ke,defineProperty:De,getOwnPropertyDescriptor:Ce,getOwnPropertyNames:Me,getOwnPropertySymbols:Te,getPrototypeOf:He}=Object,H=globalThis,Rt=H.trustedTypes,Pe=Rt?Rt.emptyScript:"",xt=H.reactiveElementPolyfillSupport,W=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Pe:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},nt=(n,t)=>!ke(n,t),Gt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);var D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Gt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&De(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=Ce(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){let a=r==null?void 0:r.call(this);i.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Gt}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let t=He(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let e=this.properties,s=[...Me(e),...Te(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(et(r))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return $t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:j;this._$Em=r,this[r]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??nt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[W("elementProperties")]=new Map,D[W("finalized")]=new Map,xt==null||xt({ReactiveElement:D}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.4");var Le={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:nt},Ie=(n=Le,t,e)=>{let{kind:s,metadata:r}=e,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,n)},init(a){return a!==void 0&&this.P(o,void 0,n),a}}}if(s==="setter"){let{name:o}=e;return function(a){let c=this[o];t.call(this,a),this.requestUpdate(o,c,n)}}throw Error("Unsupported decorator location: "+s)};function st(n){return(t,e)=>typeof e=="object"?Ie(n,t,e):((s,r,i)=>{let o=r.hasOwnProperty(i);return r.constructor.createProperty(i,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(r,i):void 0})(n,t,e)}var q=globalThis,it=q.trustedTypes,Vt=it?it.createPolicy("lit-html",{createHTML:n=>n}):void 0,bt="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,wt="?"+C,Re=`<${wt}>`,G=document,X=()=>G.createComment(""),J=n=>n===null||typeof n!="object"&&typeof n!="function",Ft=Array.isArray,Wt=n=>Ft(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",vt=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ut=/-->/g,Ot=/>/g,I=RegExp(`>|${vt}(?:([^\\s"'>=/]+)(${vt}*=${vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Nt=/'/g,zt=/"/g,jt=/^(?:script|style|textarea|title)$/i,Yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),_t=Yt(1),S=Yt(2),M=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Bt=new WeakMap,R=G.createTreeWalker(G,129);function qt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Vt!==void 0?Vt.createHTML(t):t}var Xt=(n,t)=>{let e=n.length-1,s=[],r,i=t===2?"<svg>":"",o=Y;for(let a=0;a<e;a++){let c=n[a],p,h,l=-1,u=0;for(;u<c.length&&(o.lastIndex=u,h=o.exec(c),h!==null);)u=o.lastIndex,o===Y?h[1]==="!--"?o=Ut:h[1]!==void 0?o=Ot:h[2]!==void 0?(jt.test(h[2])&&(r=RegExp("</"+h[2],"g")),o=I):h[3]!==void 0&&(o=I):o===I?h[0]===">"?(o=r??Y,l=-1):h[1]===void 0?l=-2:(l=o.lastIndex-h[2].length,p=h[1],o=h[3]===void 0?I:h[3]==='"'?zt:Nt):o===zt||o===Nt?o=I:o===Ut||o===Ot?o=Y:(o=I,r=void 0);let d=o===I&&n[a+1].startsWith("/>")?" ":"";i+=o===Y?c+Re:l>=0?(s.push(p),c.slice(0,l)+bt+c.slice(l)+C+d):c+C+(l===-2?a:d)}return[qt(n,i+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},K=class n{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0,a=t.length-1,c=this.parts,[p,h]=Xt(t,e);if(this.el=n.createElement(p,s),R.currentNode=this.el.content,e===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=R.nextNode())!==null&&c.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let l of r.getAttributeNames())if(l.endsWith(bt)){let u=h[o++],d=r.getAttribute(l).split(C),m=/([.?@])?(.*)/.exec(u);c.push({type:1,index:i,name:m[2],strings:d,ctor:m[1]==="."?at:m[1]==="?"?lt:m[1]==="@"?ct:U}),r.removeAttribute(l)}else l.startsWith(C)&&(c.push({type:6,index:i}),r.removeAttribute(l));if(jt.test(r.tagName)){let l=r.textContent.split(C),u=l.length-1;if(u>0){r.textContent=it?it.emptyScript:"";for(let d=0;d<u;d++)r.append(l[d],X()),R.nextNode(),c.push({type:2,index:++i});r.append(l[u],X())}}}else if(r.nodeType===8)if(r.data===wt)c.push({type:2,index:i});else{let l=-1;for(;(l=r.data.indexOf(C,l+1))!==-1;)c.push({type:7,index:i}),l+=C.length-1}i++}}static createElement(t,e){let s=G.createElement("template");return s.innerHTML=t,s}};function V(n,t,e=n,s){var o,a;if(t===M)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,i=J(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=V(n,r._$AS(n,t.values),r,s)),t}var ot=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??G).importNode(e,!0);R.currentNode=r;let i=R.nextNode(),o=0,a=0,c=s[0];for(;c!==void 0;){if(o===c.index){let p;c.type===2?p=new N(i,i.nextSibling,this,t):c.type===1?p=new c.ctor(i,c.name,c.strings,this,t):c.type===6&&(p=new ht(i,this,t)),this._$AV.push(p),c=s[++a]}o!==(c==null?void 0:c.index)&&(i=R.nextNode(),o++)}return R.currentNode=G,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},N=class n{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),J(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Wt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==w&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){var i;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(qt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{let o=new ot(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Bt.get(t.strings);return e===void 0&&Bt.set(t.strings,e=new K(t)),e}k(t){Ft(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new n(this.S(X()),this.S(X()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w}_$AI(t,e=this,s,r){let i=this.strings,o=!1;if(i===void 0)t=V(this,t,e,0),o=!J(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{let a=t,c,p;for(t=i[0],c=0;c<i.length-1;c++)p=V(this,a[s+c],e,c),p===M&&(p=this._$AH[c]),o||(o=!J(p)||p!==this._$AH[c]),p===w?t=w:t!==w&&(t+=(p??"")+i[c+1]),this._$AH[c]=p}o&&!r&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}},lt=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==w)}},ct=class extends U{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??w)===M)return;let s=this._$AH,r=t===w&&s!==w||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==w&&(s===w||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ht=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}},Jt={P:bt,A:C,C:wt,M:1,L:Xt,R:ot,D:Wt,V,I:N,H:U,N:lt,U:ct,B:at,F:ht},St=q.litHtmlPolyfillSupport;St==null||St(K,N),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.2");var At=(n,t,e)=>{let s=(e==null?void 0:e.renderBefore)??t,r=s._$litPart$;if(r===void 0){let i=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new N(t.insertBefore(X(),i),i,void 0,e??{})}return r._$AI(n),r};var P=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=At(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return M}},Kt;P._$litElement$=!0,P.finalized=!0,(Kt=globalThis.litElementHydrateSupport)==null||Kt.call(globalThis,{LitElement:P});var Et=globalThis.litElementPolyfillSupport;Et==null||Et({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Zt=n=>{let t=!("nested"in n)&&(!n.type||n.type==="activity");return t&&!n.type&&(n.type="activity"),t},Qt=n=>{let t="type"in n&&!("nested"in n)&&!("percent"in n)&&n.type==="milestone";return t&&(n.end=n.start),t},z=n=>{var e,s;let t="nested"in n&&Array.isArray(n.nested)&&n.nested.length>0&&(!n.type||n.type==="group");if(t){n.type="group";let r=te(n);n.start=new Date(Math.min(((e=n.start)==null?void 0:e.getTime())??1/0,r.start)),n.end=new Date(Math.max(((s=n.end)==null?void 0:s.getTime())??-1/0,r.end))}return t};function te(n){var s,r,i;let t=0,e=0;for(let o of n.nested)if(o.type==="group"||o.nested&&o.nested.length>0){let a=te(o);t=t>0?Math.min(t,a.start):a.start,e=Math.max(e,a.end)}else t=t>0?Math.min(t,((s=o.start)==null?void 0:s.getTime())??1/0):(r=o.start)==null?void 0:r.getTime(),e=Math.max(e,((i=o.end)==null?void 0:i.getTime())??-1/0);return{start:t,end:e}}var ee={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},ne=n=>(...t)=>({_$litDirective$:n,values:t}),dt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Ge}=Jt;var se=()=>document.createComment(""),B=(n,t,e)=>{var i;let s=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){let o=s.insertBefore(se(),r),a=s.insertBefore(se(),r);e=new Ge(o,a,n,n.options)}else{let o=e._$AB.nextSibling,a=e._$AM,c=a!==n;if(c){let p;(i=e._$AQ)==null||i.call(e,n),e._$AM=n,e._$AP!==void 0&&(p=n._$AU)!==a._$AU&&e._$AP(p)}if(o!==r||c){let p=e._$AA;for(;p!==o;){let h=p.nextSibling;s.insertBefore(p,r),p=h}}}return e},L=(n,t,e=n)=>(n._$AI(t,e),n),Ve={},re=(n,t=Ve)=>n._$AH=t,ie=n=>n._$AH,pt=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let r=t.nextSibling;t.remove(),t=r}};var oe=(n,t,e)=>{let s=new Map;for(let r=t;r<=e;r++)s.set(n[r],r);return s},A=ne(class extends dt{constructor(n){if(super(n),n.type!==ee.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let r=[],i=[],o=0;for(let a of n)r[o]=s?s(a,o):o,i[o]=e(a,o),o++;return{values:i,keys:r}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,s]){let r=ie(n),{values:i,keys:o}=this.dt(t,e,s);if(!Array.isArray(r))return this.ut=o,i;let a=this.ut??(this.ut=[]),c=[],p,h,l=0,u=r.length-1,d=0,m=i.length-1;for(;l<=u&&d<=m;)if(r[l]===null)l++;else if(r[u]===null)u--;else if(a[l]===o[d])c[d]=L(r[l],i[d]),l++,d++;else if(a[u]===o[m])c[m]=L(r[u],i[m]),u--,m--;else if(a[l]===o[m])c[m]=L(r[l],i[m]),B(n,c[m+1],r[l]),l++,m--;else if(a[u]===o[d])c[d]=L(r[u],i[d]),B(n,r[l],r[u]),u--,d++;else if(p===void 0&&(p=oe(o,d,m),h=oe(a,l,u)),p.has(a[l]))if(p.has(a[u])){let f=h.get(o[d]),g=f!==void 0?r[f]:null;if(g===null){let x=B(n,r[l]);L(x,i[d]),c[d]=x}else c[d]=L(g,i[d]),B(n,r[l],g),r[f]=null;d++}else pt(r[u]),u--;else pt(r[l]),l++;for(;d<=m;){let f=B(n,c[m+1]);L(f,i[d]),c[d++]=f}for(;l<=u;){let f=r[l++];f!==null&&pt(f)}return this.ut=o,re(n,c),M}});function ut(n){let t=n.timeScale,e=new Date(n.start),s=[],r=n.scaleHeight/4,i=0,o=r*2,a=e.getMonth(),c=new Date(e.getFullYear(),a,1,1),p=n.scaleHeight*.25,h=t.dateToPx(c),l=0;for(;c<=t.end;){let d=`${c.toLocaleString("default",{month:"long"})} ${c.getFullYear()}`;c.setMonth(c.getMonth()+1,1);let m=t.dateToPx(c),f=h+(m-h)/2;s.push({id:d,tpl:S`
      <g>
        <rect 
          x=${m} 
          height=${o} width="1"
          y=${i} class="line scale flip" />
        
        <text x=${f} y=${p} 
             class="text small">${d}</text>                
      </g>
      `}),h=m,l++}return S`<g id="yearMonth">
  ${A(s,u=>u.id,u=>u.tpl)}  
  </g>`}function ae(n){let t=n.timeScale,e=new Date(t.startMs),s=[],r=n.height-n.scaleHeight;for(let i=0;i<=t.totalDays-1;i++){let o=e.getDay(),a=o===0||o===6,c=i*t.pxPerDay,p=c+t.pxPerDay/2,h=n.scaleHeight/4,l=h*3,u=h,d=a?S`<rect x=${c} y=${n.scaleHeight} width=${t.pxPerDay} height=${r} class="weekend" />`:null,m=e.getDate();s.push({id:i,tpl:S`
      <g>
        ${d}
        <rect x=${c} y=${l} width="1" height=${u}
          class="line scale day"          
        />
        <text 
          id=${i} 
          x=${p} 
          y=${n.scaleHeight*.75} 
          class="text small">
          ${m}
        </text>

   
      </g>`}),e.setDate(e.getDate()+1)}return S`
  <g id="dayHeader">
    ${ut({...n})}
    
    ${A(s,i=>i.id,i=>i.tpl)}   
  </g>`}function le(n){let t=Dt(n.timeScale.start,n.timeScale.end),e=[],s=n.scaleHeight,r=n.height-s,i=n.timeScale.pxPerDay,o=t.length-1,a=n.scaleHeight/4,c=a*3,p=a;for(let h=0;h<o;h++){let l=new Date(t[h]),u=n.timeScale.dateToPx(l),d=l.getDate(),m=T(l,-1).getDate(),f="week_"+h+"_"+m+"-"+d,g=n.scaleHeight/6,x=n.scaleHeight-g,b=a*2+g,_=Ht(T(l,1));e.push({id:f,tpl:S`
      <g id=${f}>
        <rect x=${u-i*2} y=${s} width=${i*2} height=${r} 
          class="weekend"/>
          <text x=${u-3} y=${x} class="text small end">
          ${m}
        </text>       
        <rect x=${u} width="1" y=${c} height=${p}         
          class="line scale"/>
        <text x=${u+3} y=${x} class="text small start">
          ${d}
        </text>        
        <text x=${u+3*i} y=${b} 
          class="text tiny start">
            Week ${_}
        </text>    
      </g>`})}return S`
    <g id="weekHeader">
      ${ut({...n})}

      ${A(e,h=>h.id,h=>h.tpl)}
     
    </g>
  `}function ce(n,t){n.unshift(t.timeScale.startMs),n.push(t.timeScale.end.getTime());let e=[],s=t.timeScale.start.getFullYear(),r=t.timeScale.end.getFullYear(),i=0,o=t.timeScale.dateToPx(t.timeScale.end),a=t.scaleHeight/4,c=0,p=a*2;for(;s<=r;){let h=new Date(s+1,0,1,1),l=t.timeScale.dateToPx(h);l>o&&(l=o),e.push({id:"y_"+s,tpl:S`
      <g>
        <rect x=${l} y=${c} width="1" height=${p}
        class="line scale flip" />      
          <text 
            x=${(l-i)/2+i} 
            y=${t.scaleHeight*.25} 
            class="text small">
            ${s}
          </text>        
      </g>`}),s=h.getFullYear(),i=l}return S`<g id="year">
   ${A(e,h=>h.id,h=>h.tpl)}  
  </g>`}function he(n){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=kt(n.timeScale.startMs,n.timeScale.end.getTime()).filter(h=>new Date(h).getDate()===1);s.unshift(n.timeScale.startMs),s.push(n.timeScale.end.getTime());let r=[],i=s.length-1,o=n.scaleHeight/4,a=o*3,c=o;for(let h=0;h<i;h++){let u=new Date(s[h]).getMonth(),d=n.timeScale.dateToPx(new Date(s[h])),m=(s[h+1]-s[h])/n.timeScale.msPerPx,f="hm_"+u,g=d+m/2,x=S`
      <rect 
        x=${d}         
        y=${a} 
        width="1"
        height=${c}       
        class="line scale" />`;r.push({id:f,tpl:S`
      <g>
        ${h===0?null:x}
        ${m>30?S`
          <text x=${g} y=${n.scaleHeight*.75} class="text small">
            ${t[u]}
          </text>`:null}
      </g>
      `})}let p=s.filter(h=>new Date(h).getMonth()===0);return S`
    <g id="monthHeader">
      ${ce(p,n)}     
       ${A(r,h=>h.id,h=>h.tpl)}  
    </g>
  `}function de(n){let t=[];for(let e=0;e<n.data.length;e++){let s=(e+1)*n.rowHeight+n.scaleHeight;t.push({id:e,tpl:S`
        <line key=${e} x1="0" x2=${n.width} y1=${s} y2=${s} class="line"/>`})}return S`
    <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight}
        y2=${n.scaleHeight}
        class="line"
        
      />
    <g id="grid">
      ${A(t,e=>e.id,e=>e.tpl)}     
      
    </g>
  `}function pe(n){let t=n.map(i=>({x:i[0],y:i[1]})),e=["M"+t[0].x+","+t[0].y],s=5,r=t.length-1;t[r-1].x<t[r].x?t[r].x+=s/2:t[r].x-=s/2;for(let i=0;i<t.length;i++){let o=i+1>t.length-1?(i+1)%t.length:i+1,a=i+2>t.length-1?(i+2)%t.length:i+2,c=t[i],p=t[o],h=t[a],l=Math.sqrt(Math.pow(c.x-p.x,2)+Math.pow(c.y-p.y,2)),u=(l-s)/l,d=[((1-u)*c.x+u*p.x).toFixed(1),((1-u)*c.y+u*p.y).toFixed(1)],m=Math.sqrt(Math.pow(p.x-h.x,2)+Math.pow(p.y-h.y,2)),f=s/m;if(i!==r)if(e.push("L"+d.join(",")),i===r-1)e.push("L"+p.x+","+p.y);else{let g=[((1-f)*p.x+f*h.x).toFixed(1),((1-f)*p.y+f*h.y).toFixed(1)];e.push("Q"+p.x+","+p.y+","+g.join(","))}}return e.join(" ")}var Ue;function ue(n){Ue=n;let t=new Map;return n.data.forEach(e=>{t.set(e.id.toString(),e)}),S`
    <g class="link-lines" >
      ${n.data.map(e=>e.links?e.links.map(s=>Oe(s,n,t.get(s.source.toString()),t.get(s.target.toString()))):null)}
    </g>`}function Oe(n,t,e,s){let r=s??t.data.find(y=>y.id.toString()===n.target.toString()),i=e??t.data.find(y=>y.id.toString()===n.source.toString());if(!r||!r.start||!r.end||!i||!i.start||!i.end)return null;let o=t.rowHeight/2+t.scaleHeight,a=t.data.findIndex(y=>y.id===i.id),c=t.data.findIndex(y=>y.id===r.id),p=12,h=6,l=r.type==="milestone"?t.barHeight/2:0,u=o+a*t.rowHeight,d=o+c*t.rowHeight,m=t.barHeight/2+4;u>d&&(m=-m);let f=t.timeScale.dateToPx(i.end),g=t.timeScale.dateToPx(i.start),x=t.timeScale.dateToPx(r.end),b=t.timeScale.dateToPx(r.start),_=(y,$)=>{let v=`${n.source}-${n.target}-${n.type}`;return S`
    <g 
      id=${v} 
      class="link"
      data-source=${n.source} 
      data-target=${n.target} 
      data-link-type=${n.type}>
      <path d=${pe(y)} class="link-line" ></path>     
      <polygon points=${Tt($)} class="line-arrow" />
    </g>`};if(n.type==="FS"){let y=f,$=b-l,v=[[y,u],[y+p,u]];$-y>=2*p?v.push([y+p,d]):(v.push([y+p,d-m]),v.push([$-p,d-m]),v.push([$-p,d])),v.push([$-h,d]);let E=[[$-h,d-h],[$,d],[$-h,d+h]];return _(v,E)}if(n.type==="FF"){let y=f,$=x+l,v=[[y,u],[y+p,u]];$<=y?v.push([y+p,d]):(v.push([y+p,d-m]),v.push([$+p,d-m]),v.push([$+p,d])),v.push([$+h,d]);let E=[[$+h,d-h],[$,d],[$+h,d+h]];return _(v,E)}if(n.type==="SS"){let y=g,$=b-l,v=[[y,u],[y-p,u]];y<=$?v.push([y-p,d]):(v.push([y-p,d-m]),v.push([$-p,d-m]),v.push([$-p,d])),v.push([$-h,d]);let E=[[$-h,d-h],[$,d],[$-h,d+h]];return _(v,E)}if(n.type==="SF"){let y=g,$=x+l,v=[[y,u],[y-p,u]];y-$>=2*p?v.push([y-p,d]):(v.push([y-p,d-m]),v.push([$+p,d-m]),v.push([$+p,d])),v.push([$+h,d]);let E=[[$+h,d-h],[$,d],[$+h,d+h]];return _(v,E)}return null}function Ne(n,t,e,s,r,i){let o=e/2,a=[[0,o],[o,0],[e,o],[o,e]].map(c=>`${c[0]},${c[1]}`).join(" ");return{id:r,tpl:S`
    <svg 
      x=${n-o}
      y=${t}
      id=${r}     
      data-item-id=${i.id}               
      class="gantt-bar"                  
    >
      <polygon
        points=${a}
        class="milestone"            
        @click=${s}
      />
      <circle
        class="ctl-start"
        data-id=${i.id}
        cx=${o}
        cy=${o}
        r=${6}          
      />
    </svg>
  `}}function me(n){let t=(n.rowHeight-n.barHeight)/2+n.scaleHeight,e=n.timeScale.dateToPx(new Date),s=n.timeScale,r=n.data.map((i,o)=>{let a="bar_"+i.id;if(!i.start||!i.end)return null;let c=()=>{if(this.suppressClick)return;let ft=new CustomEvent("item-click",{detail:i});this.dispatchEvent(ft)},p=s.dateToPx(i.start),h=t+o*n.rowHeight,l=n.barHeight/2;if(i.type==="milestone")return Ne(p,h,n.barHeight,c,a,i);let u=s.pxForTimeSpan(i.start,i.end),d=u*i.percent,m="gantt-bar";m+=i.type==="group"?" group":"";let f=!1,g=!1;n.showDelay&&(p+d<e&&i.percent<.999999&&(f=!0,g=!1),p+u<e&&i.percent<.999999&&(f=!1,g=!0));let x=n.rowHeight/6,b=n.rowHeight/6,_=1,y=x*2+b+_*2,$=S`
      <rect
        x=${y}
        width=${u}
        height=${n.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${c}    
      />
      `,v=d>1e-6?S`
            <rect
            x=${y}
            width=${d}
            height=${n.barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${c}
            />`:null,E=S``;return i.type==="activity"&&(E=S`
        <circle
          class=${i.type+" ctl-start"}
          data-id=${i.id}           
          cx=${_+x}
          cy=${l}
          r=${x}
        />
        <circle
          class=${i.type+" ctl-finish"}
          data-id=${i.id}
          cx=${u+y+b+x}
          cy=${l}
          r=${x}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${y+b}
            height=${n.barHeight} 
            width=${n.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${y+b}
            height=${n.barHeight} 
            width=${n.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${y+b-.5+n.barHeight/2} 
            y="2" width="1px" height=${n.barHeight-4}/>
        </g>
        <g class="ctl-resize-end">
          <rect 
            x=${u}
            height=${n.barHeight} 
            width=${n.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${u}
            height=${n.barHeight} 
            width=${n.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${u-.5+n.barHeight/2} 
            y="2" width="1px" height=${n.barHeight-4}/>
        </g>
      `),{id:a,tpl:S`
      <svg 
        x=${p-y} y=${h}              
        id=${a}
        key=${o}       
        .item=${i}
        data-item-id=${i.id}        
        class=${m}
        ?warning=${f}
        ?danger=${g}
      >      
        ${$}
        ${v}
        ${E}
    
      </svg>
    `}});return S`
    <g>      
        <line             
          x1=${e}
          x2=${e}
          y1=${n.scaleHeight}
          y2=${n.height}
          class="today-line"
        />
      
      ${A(r,i=>i.id,i=>i.tpl)} 
    </g>
  `}function fe(){let n=`0 0 ${this.settings.width} ${this.settings.height}`,t=this.settings.showLinks?ue.bind(this)(this.settings):null;return S`
    <svg id="gantt" 
      width=${this.settings.width} 
      height=${this.settings.height} 
      viewBox=${n}>
      <defs>
        <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>              
          <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
        </linearGradient>       
      </defs>
          
      ${de.bind(this)(this.settings)}       
  
      ${ze.bind(this)(this.settings)}
      ${t}
      ${me.bind(this)(this.settings)}     
    </svg>
  `}function ze(n){switch(n.viewMode){case"day":return ae.bind(this)(n);case"month":return he.bind(this)(n);case"week":return le.bind(this)(n)}}var ge=k`
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
`;var ye=k`
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
`;var $e=k`
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
`;var xe=k`
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
  }

  .box {
    fill: var(--gantt-chart-bg-color, #fff);
  }

  .line {
    stroke: var(--gantt-layout-line-stroke, #eee);
    stroke-width: var(--gantt-layout-line-width);
  }

  .line.flip {
    transform-box: fill-box;
    transform-origin: center;
    transform: rotate(180deg);
  }

  .line.scale {
    fill: url(#lineScaleGrad);
    stroke-width: 0;
  }

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
    margin-top: calc(
      var(--gantt-layout-time-scale-height) - var(--gantt-layout-line-width) / 2
    );
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
`;function ve(){let n=this.shadowRoot.getElementById("gantt");function t(l){return l.classList.contains("ctl-start")}function e(l){return l.classList.contains("ctl-finish")}let s=(l,u)=>{let d=l.dataset.id,m=u.dataset.id;if(d===m)return;let f=this.settings.data.find($=>$.id.toString()===d),g=this.settings.data.find($=>$.id.toString()===m),x=t(l)?"S":"F",b=t(u)?"S":"F";f.type==="milestone"&&(x="F"),g.type==="milestone"&&(b="S");let _={source:d,target:m,type:`${x}${b}`},y=this.settings.data.find($=>$.id==d);if(y){if(y.links.find(gt=>gt.source===_.source&&gt.target===_.target&&gt.type===_.type))return;let v=!1,E={link:_,cancel:()=>{v=!0}},ft=new CustomEvent("before-link-added",{detail:E});this.dispatchEvent(ft),v||(y.links.push(_),this.requestUpdate())}},r="http://www.w3.org/2000/svg",i=!1,o=null,a=null,c=l=>l.parentElement.x.baseVal.value+l.cx.baseVal.value,p=l=>l.parentElement.y.baseVal.value+l.cy.baseVal.value;n.addEventListener("mousedown",l=>{if(!t(l.target)&&!e(l.target))return;l.preventDefault(),o=l.target;let u=o.parentElement;this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish").forEach(f=>{f.setAttribute("active","active")}),i=!0,a=document.createElementNS(r,"line");let d=c(o).toString(),m=p(o).toString();a.setAttribute("x1",d),a.setAttribute("y1",m),a.setAttribute("x2",d),a.setAttribute("y2",m),a.classList.add("add-link-line"),n.appendChild(a)}),n.addEventListener("mousemove",l=>{let u=l.target;if(i)if(l.preventDefault(),t(u)||e(u)){let d=c(u).toString(),m=p(u).toString();a.setAttribute("x2",d),a.setAttribute("y2",m)}else{let d=l.clientX,m=l.clientY,f=n.getBoundingClientRect();a.setAttribute("x2",(d-f.left).toString()),a.setAttribute("y2",(m-f.top).toString())}});let h=l=>{i&&(l.preventDefault(),l.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(u=>{u.removeAttribute("active")}),i=!1,a&&(n.removeChild(a),a=null))};n.addEventListener("mouseup",l=>{h(l);let u=l.target,d=t(u)||e(u);o&&d&&s(o,u),o=null}),this.addEventListener("mouseout",l=>{h(l)})}function Se(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,r,i,o,a;function c(m){let f=m;return f.tagName==="rect"&&(f.classList.contains("back")||f.classList.contains("front"))}let p=()=>{t=!1,r=void 0,s=0,i=void 0,a=void 0,e=!1,this.suppressClick},h=m=>{m.preventDefault(),m.stopPropagation(),m.stopImmediatePropagation()},l=m=>{let f=m.target;!c(f)||t||(e=!0,i=f,r=f.parentElement,o=r.dataset.itemId,o&&(h(m),s=r.x.baseVal.value,a=this.settings.data.find(g=>g.id.toString()===o)))},u=async m=>{if(!e)return;h(m),t=!0;let f=m.movementX*this.settings.timeScale.msPerPx;if(z(a))for(let g of a.nested)g.start=new Date(g.start.getTime()+f),g.end=new Date(g.end.getTime()+f);a.start=new Date(a.start.getTime()+f),a.end=new Date(a.end.getTime()+f),this.requestUpdate()},d=m=>{if(e){if(t){this.___lastMovement=new Date().getTime();let f=new CustomEvent("item-moved",{detail:a});this.dispatchEvent(f)}p(),h(m)}};n.addEventListener("mousedown",l),n.addEventListener("mousemove",u),n.addEventListener("mouseup",d),this.addEventListener("mouseout",m=>{p()})}var be=864e5,mt=class{constructor(t,e,s){this.viewMode=s;let r=new Date(t);r.setHours(1,0,0,0);let i=new Date(e);i.setHours(1,0,0,0),this.start=r,this.end=i,this.startMs=r.getTime(),this.endMs=i.getTime(),this.totalDays=Math.round(Math.abs((this.startMs-i.getTime())/be));let o={month:3,week:4,day:5},a=5;this.totalDays>365?a=1*o[s]:this.totalDays>155?a=4*o[s]:this.totalDays>30&&(a=6*o[s]),this.pxPerDay=a,this.pxPerWeek=a*7,this.msPerPx=be/a}pxToMs(t){return t*this.msPerPx}msToPx(t){return t/this.msPerPx}dateToPx(t){let e=t.getTime()-this.startMs;return this.msToPx(e)}pxToDate(t){let e=this.pxToMs(t);return new Date(this.startMs+e)}pxForTimeSpan(t,e){let s=e.getTime()-t.getTime();return this.msToPx(s)}};function _e(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,r,i,o,a=!1,c=!1;function p(g){let x=g.parentElement;return a=x.classList.contains("ctl-resize-start"),c=x.classList.contains("ctl-resize-end"),x.tagName==="g"&&(a||c)}let h=()=>{a=!1,c=!1,t=!1,r=void 0,s=0,o=void 0,e=!1,this.suppressClick},l=g=>{g.preventDefault(),g.stopPropagation(),g.stopImmediatePropagation()},u=g=>{let x=g.target;!p(x)||t||(e=!0,r=x.parentElement.parentElement,i=r.dataset.itemId,i&&(l(g),s=r.x.baseVal.value,o=this.settings.data.find(b=>b.id.toString()===i)))},d=async g=>{if(!e)return;l(g),t=!0;let x=g.movementX*this.settings.timeScale.msPerPx;if(z(o))for(let b of o.nested)m(b,x);m(o,x),this.requestUpdate()},m=(g,x)=>{if(a){let b=new Date(g.start.getTime()+x);x>0&&g.end.getTime()-b.getTime()<864e5&&(g.end=new Date(g.end.getTime()+x)),g.start=b}else{let b=new Date(g.end.getTime()+x);x<0&&b.getTime()-g.start.getTime()<864e5&&(g.start=new Date(g.start.getTime()+x)),g.end=b}},f=g=>{if(e){if(t){this.___lastMovement=new Date().getTime();let x=new CustomEvent("item-resized",{detail:o});this.dispatchEvent(x)}h(),l(g)}};n.addEventListener("mousedown",u),n.addEventListener("mousemove",d),n.addEventListener("mouseup",f),this.addEventListener("mouseout",g=>{h()})}var O=class extends P{constructor(){super(...arguments);this.___lastMovement=0;this.interactionReady=!1}connectedCallback(){super.connectedCallback()}updateSettings(){let e=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),s=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),r=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),i=this.flattenData(this.data),o=null,a=null;i.forEach(p=>{o=Ct(o,p.start),a=Mt(a,p.end)}),o=o||new Date,a=a||new Date;let c={viewMode:"week",showDelay:!0,showLinks:!0,showLabels:!0};this.settings={...c,...this.options,start:o,end:a,width:0,height:0,scaleHeight:s,rowHeight:e,barHeight:r,data:i,timeScale:void 0},this.settings.timeScale=new mt(T(o,-1),T(a,7),this.settings.viewMode),this.settings.width=this.settings.timeScale.totalDays*this.settings.timeScale.pxPerDay,this.settings.height=this.settings.data.length*this.settings.rowHeight+this.settings.scaleHeight,this.setupInteractions()}flattenData(e,s){var o;let r=[],i=0;for(let a of e){this.validateItem(a);let c=a;c.path=s?s+"."+i:i.toString(),c.id??(c.id=c.path),r.push(c),((o=a.nested)==null?void 0:o.length)>0&&r.push(...this.flattenData(a.nested,c.path)),i++}return r}validateItem(e){if(!(z(e)||Zt(e)||Qt(e)))throw Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text);e.start??(e.start=new Date),e.end??(e.end=T(e.start,5)),e.start>e.end&&Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text+"; End before start")}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.interactionReady||(await this.updateComplete,ve.bind(this)(),Se.bind(this)(),_e.bind(this)(),this.interactionReady=!0)}render(){return!this.data||this.data.length===0?"No data":(this.updateSettings(),_t`<div class="labels">
        ${this.settings.data.map(e=>_t`<div class="lbl">${e.text}</div>`)}
      </div>
      <div class="gantt">${fe.bind(this)()}</div>`)}};O.styles=[k`
      :host {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        flex-wrap: nowrap;
        white-space: nowrap;
      }
      .gantt {
        overflow: auto;
      }
    `,xe,ge,ye,$e],Z([st({type:Object,attribute:!1})],O.prototype,"options",2),Z([st({type:Array,attribute:!1})],O.prototype,"data",2),O=Z([Pt("wc-gantt")],O);export{O as WCGantt};
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
