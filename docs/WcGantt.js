var Ee=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var Z=(n,t,e,s)=>{for(var r=s>1?void 0:s?ke(t,e):t,i=n.length-1,o;i>=0;i--)(o=n[i])&&(r=(s?o(t,e,r):o(r))||r);return s&&r&&Ee(t,e,r),r};function M(n,t){let e=new Date(n.valueOf());return e.setDate(e.getDate()+t),e}function Dt(n,t){let e=[],s=new Date(n);for(s.setHours(1,0,0,0);s.getTime()<=t;)e.push(s.getTime()),s=M(s,1);return e}function Ct(n,t){let e=[],s=new Date(n.getFullYear(),n.getMonth(),n.getDate(),1),r=s.getDay();r!==1&&s.setDate(s.getDate()-r+1),e.push(new Date(s.getTime()));let i=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1),o=i.getDay();for(o!==1&&i.setDate(i.getDate()+(7-o)),e.push(new Date(i.getTime()));s<i;)s.setDate(s.getDate()+7),e.push(new Date(s.getTime()));return e}function Tt(n,t){return n&&t?n>t?t:n:n||t}function Mt(n,t){return n&&t?n<t?t:n:n||t}function Ht(n){return n.map(t=>`${t[0]},${t[1]}`).join(" ")}function Pt(n){let t=new Date(n.getFullYear(),0,1),e=Math.floor((n.getTime()-t.getTime())/(24*60*60*1e3));return Math.ceil(e/7)+1}var It=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var Q=globalThis,tt=Q.ShadowRoot&&(Q.ShadyCSS===void 0||Q.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$t=Symbol(),Lt=new WeakMap,B=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==$t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(tt&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Lt.set(e,t))}return t}toString(){return this.cssText}},Gt=n=>new B(typeof n=="string"?n:n+"",void 0,$t),k=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,r,i)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(r)+n[i+1],n[0]);return new B(e,n,$t)},xt=(n,t)=>{if(tt)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),r=Q.litNonce;r!==void 0&&s.setAttribute("nonce",r),s.textContent=e.cssText,n.appendChild(s)}},et=tt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Gt(e)})(n):n;var{is:De,defineProperty:Ce,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Me,getOwnPropertySymbols:He,getPrototypeOf:Pe}=Object,H=globalThis,Rt=H.trustedTypes,Ie=Rt?Rt.emptyScript:"",vt=H.reactiveElementPolyfillSupport,W=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Ie:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},nt=(n,t)=>!De(n,t),Vt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:nt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);var D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),r=this.getPropertyDescriptor(t,s,e);r!==void 0&&Ce(this.prototype,t,r)}}static getPropertyDescriptor(t,e,s){let{get:r,set:i}=Te(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return r==null?void 0:r.call(this)},set(o){let a=r==null?void 0:r.call(this);i.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let t=Pe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let e=this.properties,s=[...Me(e),...He(e)];for(let r of s)this.createProperty(r,e[r])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,r]of e)this.elementProperties.set(s,r)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let r=this._$Eu(e,s);r!==void 0&&this._$Eh.set(r,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let r of s)e.unshift(et(r))}else t!==void 0&&e.push(et(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return xt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var i;let s=this.constructor.elementProperties.get(t),r=this.constructor._$Eu(t,s);if(r!==void 0&&s.reflect===!0){let o=(((i=s.converter)==null?void 0:i.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$Em=null}}_$AK(t,e){var i;let s=this.constructor,r=s._$Eh.get(t);if(r!==void 0&&this._$Em!==r){let o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((i=o.converter)==null?void 0:i.fromAttribute)!==void 0?o.converter:j;this._$Em=r,this[r]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??nt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[i,o]of this._$Ep)this[i]=o;this._$Ep=void 0}let r=this.constructor.elementProperties;if(r.size>0)for(let[i,o]of r)o.wrapped!==!0||this._$AL.has(i)||this[i]===void 0||this.P(i,this[i],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(r=>{var i;return(i=r.hostUpdate)==null?void 0:i.call(r)}),this.update(e)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostUpdated)==null?void 0:r.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[W("elementProperties")]=new Map,D[W("finalized")]=new Map,vt==null||vt({ReactiveElement:D}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.4");var Le={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:nt},Ge=(n=Le,t,e)=>{let{kind:s,metadata:r}=e,i=globalThis.litPropertyMetadata.get(r);if(i===void 0&&globalThis.litPropertyMetadata.set(r,i=new Map),i.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(a){let h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,n)},init(a){return a!==void 0&&this.P(o,void 0,n),a}}}if(s==="setter"){let{name:o}=e;return function(a){let h=this[o];t.call(this,a),this.requestUpdate(o,h,n)}}throw Error("Unsupported decorator location: "+s)};function st(n){return(t,e)=>typeof e=="object"?Ge(n,t,e):((s,r,i)=>{let o=r.hasOwnProperty(i);return r.constructor.createProperty(i,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(r,i):void 0})(n,t,e)}var q=globalThis,it=q.trustedTypes,Ut=it?it.createPolicy("lit-html",{createHTML:n=>n}):void 0,wt="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,_t="?"+C,Re=`<${_t}>`,R=document,X=()=>R.createComment(""),J=n=>n===null||typeof n!="object"&&typeof n!="function",Wt=Array.isArray,jt=n=>Wt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",St=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Nt=/>/g,L=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ft=/"/g,Yt=/^(?:script|style|textarea|title)$/i,qt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),At=qt(1),v=qt(2),T=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),Bt=new WeakMap,G=R.createTreeWalker(R,129);function Xt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}var Jt=(n,t)=>{let e=n.length-1,s=[],r,i=t===2?"<svg>":"",o=Y;for(let a=0;a<e;a++){let h=n[a],c,d,l=-1,u=0;for(;u<h.length&&(o.lastIndex=u,d=o.exec(h),d!==null);)u=o.lastIndex,o===Y?d[1]==="!--"?o=Ot:d[1]!==void 0?o=Nt:d[2]!==void 0?(Yt.test(d[2])&&(r=RegExp("</"+d[2],"g")),o=L):d[3]!==void 0&&(o=L):o===L?d[0]===">"?(o=r??Y,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?L:d[3]==='"'?Ft:zt):o===Ft||o===zt?o=L:o===Ot||o===Nt?o=Y:(o=L,r=void 0);let p=o===L&&n[a+1].startsWith("/>")?" ":"";i+=o===Y?h+Re:l>=0?(s.push(c),h.slice(0,l)+wt+h.slice(l)+C+p):h+C+(l===-2?a:p)}return[Xt(n,i+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},K=class n{constructor({strings:t,_$litType$:e},s){let r;this.parts=[];let i=0,o=0,a=t.length-1,h=this.parts,[c,d]=Jt(t,e);if(this.el=n.createElement(c,s),G.currentNode=this.el.content,e===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(r=G.nextNode())!==null&&h.length<a;){if(r.nodeType===1){if(r.hasAttributes())for(let l of r.getAttributeNames())if(l.endsWith(wt)){let u=d[o++],p=r.getAttribute(l).split(C),m=/([.?@])?(.*)/.exec(u);h.push({type:1,index:i,name:m[2],strings:p,ctor:m[1]==="."?at:m[1]==="?"?lt:m[1]==="@"?ct:U}),r.removeAttribute(l)}else l.startsWith(C)&&(h.push({type:6,index:i}),r.removeAttribute(l));if(Yt.test(r.tagName)){let l=r.textContent.split(C),u=l.length-1;if(u>0){r.textContent=it?it.emptyScript:"";for(let p=0;p<u;p++)r.append(l[p],X()),G.nextNode(),h.push({type:2,index:++i});r.append(l[u],X())}}}else if(r.nodeType===8)if(r.data===_t)h.push({type:2,index:i});else{let l=-1;for(;(l=r.data.indexOf(C,l+1))!==-1;)h.push({type:7,index:i}),l+=C.length-1}i++}}static createElement(t,e){let s=R.createElement("template");return s.innerHTML=t,s}};function V(n,t,e=n,s){var o,a;if(t===T)return t;let r=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,i=J(t)?void 0:t._$litDirective$;return(r==null?void 0:r.constructor)!==i&&((a=r==null?void 0:r._$AO)==null||a.call(r,!1),i===void 0?r=void 0:(r=new i(n),r._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=r:e._$Cl=r),r!==void 0&&(t=V(n,r._$AS(n,t.values),r,s)),t}var ot=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,r=((t==null?void 0:t.creationScope)??R).importNode(e,!0);G.currentNode=r;let i=G.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new N(i,i.nextSibling,this,t):h.type===1?c=new h.ctor(i,h.name,h.strings,this,t):h.type===6&&(c=new ht(i,this,t)),this._$AV.push(c),h=s[++a]}o!==(h==null?void 0:h.index)&&(i=G.nextNode(),o++)}return G.currentNode=R,r}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},N=class n{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,r){this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=r,this._$Cv=(r==null?void 0:r.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),J(t)?t===b||t==null||t===""?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==b&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var i;let{values:e,_$litType$:s}=t,r=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(Xt(s.h,s.h[0]),this.options)),s);if(((i=this._$AH)==null?void 0:i._$AD)===r)this._$AH.p(e);else{let o=new ot(r,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Bt.get(t.strings);return e===void 0&&Bt.set(t.strings,e=new K(t)),e}k(t){Wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,r=0;for(let i of t)r===e.length?e.push(s=new n(this.S(X()),this.S(X()),this,this.options)):s=e[r],s._$AI(i),r++;r<e.length&&(this._$AR(s&&s._$AB.nextSibling,r),e.length=r)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let r=t.nextSibling;t.remove(),t=r}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,r,i){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=e,this._$AM=r,this.options=i,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}_$AI(t,e=this,s,r){let i=this.strings,o=!1;if(i===void 0)t=V(this,t,e,0),o=!J(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{let a=t,h,c;for(t=i[0],h=0;h<i.length-1;h++)c=V(this,a[s+h],e,h),c===T&&(c=this._$AH[h]),o||(o=!J(c)||c!==this._$AH[h]),c===b?t=b:t!==b&&(t+=(c??"")+i[h+1]),this._$AH[h]=c}o&&!r&&this.j(t)}j(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},at=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===b?void 0:t}},lt=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==b)}},ct=class extends U{constructor(t,e,s,r,i){super(t,e,s,r,i),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??b)===T)return;let s=this._$AH,r=t===b&&s!==b||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,i=t!==b&&(s===b||r);r&&this.element.removeEventListener(this.name,this,s),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ht=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}},Kt={P:wt,A:C,C:_t,M:1,L:Jt,R:ot,D:jt,V,I:N,H:U,N:lt,U:ct,B:at,F:ht},bt=q.litHtmlPolyfillSupport;bt==null||bt(K,N),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.2");var Et=(n,t,e)=>{let s=(e==null?void 0:e.renderBefore)??t,r=s._$litPart$;if(r===void 0){let i=(e==null?void 0:e.renderBefore)??null;s._$litPart$=r=new N(t.insertBefore(X(),i),i,void 0,e??{})}return r._$AI(n),r};var P=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}},Zt;P._$litElement$=!0,P.finalized=!0,(Zt=globalThis.litElementHydrateSupport)==null||Zt.call(globalThis,{LitElement:P});var kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Qt=n=>{let t=!("nested"in n)&&(!n.type||n.type==="activity");return t&&!n.type&&(n.type="activity"),t},te=n=>{let t="type"in n&&!("nested"in n)&&!("percent"in n)&&n.type==="milestone";return t&&(n.end=n.start),t},dt=n=>{var e,s;let t="nested"in n&&Array.isArray(n.nested)&&n.nested.length>0&&(!n.type||n.type==="group");if(t){n.type="group";let r=ee(n);n.start=new Date(Math.min(((e=n.start)==null?void 0:e.getTime())??1/0,r.start)),n.end=new Date(Math.max(((s=n.end)==null?void 0:s.getTime())??-1/0,r.end))}return t};function ee(n){var s,r,i;let t=0,e=0;for(let o of n.nested)if(o.type==="group"||o.nested&&o.nested.length>0){let a=ee(o);t=t>0?Math.min(t,a.start):a.start,e=Math.max(e,a.end)}else t=t>0?Math.min(t,((s=o.start)==null?void 0:s.getTime())??1/0):(r=o.start)==null?void 0:r.getTime(),e=Math.max(e,((i=o.end)==null?void 0:i.getTime())??-1/0);return{start:t,end:e}}var ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},se=n=>(...t)=>({_$litDirective$:n,values:t}),pt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Ve}=Kt;var re=()=>document.createComment(""),z=(n,t,e)=>{var i;let s=n._$AA.parentNode,r=t===void 0?n._$AB:t._$AA;if(e===void 0){let o=s.insertBefore(re(),r),a=s.insertBefore(re(),r);e=new Ve(o,a,n,n.options)}else{let o=e._$AB.nextSibling,a=e._$AM,h=a!==n;if(h){let c;(i=e._$AQ)==null||i.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==a._$AU&&e._$AP(c)}if(o!==r||h){let c=e._$AA;for(;c!==o;){let d=c.nextSibling;s.insertBefore(c,r),c=d}}}return e},I=(n,t,e=n)=>(n._$AI(t,e),n),Ue={},ie=(n,t=Ue)=>n._$AH=t,oe=n=>n._$AH,ut=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let r=t.nextSibling;t.remove(),t=r}};var ae=(n,t,e)=>{let s=new Map;for(let r=t;r<=e;r++)s.set(n[r],r);return s},_=se(class extends pt{constructor(n){if(super(n),n.type!==ne.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let r=[],i=[],o=0;for(let a of n)r[o]=s?s(a,o):o,i[o]=e(a,o),o++;return{values:i,keys:r}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,s]){let r=oe(n),{values:i,keys:o}=this.dt(t,e,s);if(!Array.isArray(r))return this.ut=o,i;let a=this.ut??(this.ut=[]),h=[],c,d,l=0,u=r.length-1,p=0,m=i.length-1;for(;l<=u&&p<=m;)if(r[l]===null)l++;else if(r[u]===null)u--;else if(a[l]===o[p])h[p]=I(r[l],i[p]),l++,p++;else if(a[u]===o[m])h[m]=I(r[u],i[m]),u--,m--;else if(a[l]===o[m])h[m]=I(r[l],i[m]),z(n,h[m+1],r[l]),l++,m--;else if(a[u]===o[p])h[p]=I(r[u],i[p]),z(n,r[l],r[u]),u--,p++;else if(c===void 0&&(c=ae(o,p,m),d=ae(a,l,u)),c.has(a[l]))if(c.has(a[u])){let f=d.get(o[p]),y=f!==void 0?r[f]:null;if(y===null){let S=z(n,r[l]);I(S,i[p]),h[p]=S}else h[p]=I(y,i[p]),z(n,r[l],y),r[f]=null;p++}else ut(r[u]),u--;else ut(r[l]),l++;for(;p<=m;){let f=z(n,h[m+1]);I(f,i[p]),h[p++]=f}for(;l<=u;){let f=r[l++];f!==null&&ut(f)}return this.ut=o,ie(n,h),T}});function mt(n){let t=n.timeScale,e=new Date(n.start),s=[],r=n.scaleHeight/4,i=0,o=r*2,a=e.getMonth(),h=new Date(e.getFullYear(),a,1,1),c=n.scaleHeight*.25,d=t.dateToPx(h),l=0;for(;h<=t.end;){let p=`${h.toLocaleString("default",{month:"long"})} ${h.getFullYear()}`;h.setMonth(h.getMonth()+1,1);let m=t.dateToPx(h),f=d+(m-d)/2;s.push({id:p,tpl:v`
      <g>
        <rect 
          x=${m} 
          height=${o} width="1"
          y=${i} class="line scale flip" />
        
        <text x=${f} y=${c} 
             class="text small">${p}</text>                
      </g>
      `}),d=m,l++}return v`<g id="yearMonth">
  ${_(s,u=>u.id,u=>u.tpl)}  
  </g>`}function le(n){let t=n.timeScale,e=new Date(t.startMs),s=[],r=n.height-n.scaleHeight;for(let i=0;i<=t.totalDays-1;i++){let o=e.getDay(),a=o===0||o===6,h=i*t.pxPerDay,c=h+t.pxPerDay/2,d=n.scaleHeight/4,l=d*3,u=d,p=a?v`<rect x=${h} y=${n.scaleHeight} width=${t.pxPerDay} height=${r} class="weekend" />`:null,m=e.getDate();s.push({id:i,tpl:v`
      <g>
        ${p}
        <rect x=${h} y=${l} width="1" height=${u}
          class="line scale day"          
        />
        <text 
          id=${i} 
          x=${c} 
          y=${n.scaleHeight*.75} 
          class="text small">
          ${m}
        </text>

   
      </g>`}),e.setDate(e.getDate()+1)}return v`
  <g id="dayHeader">
    ${mt({...n})}
    
    ${_(s,i=>i.id,i=>i.tpl)}   
  </g>`}function ce(n){let t=Ct(n.timeScale.start,n.timeScale.end),e=[],s=n.scaleHeight,r=n.height-s,i=n.timeScale.pxPerDay,o=t.length-1,a=n.scaleHeight/4,h=a*3,c=a;for(let d=0;d<o;d++){let l=new Date(t[d]),u=n.timeScale.dateToPx(l),p=l.getDate(),m=M(l,-1).getDate(),f="week_"+d+"_"+m+"-"+p,y=n.scaleHeight/6,S=n.scaleHeight-y,A=a*2+y,w=Pt(M(l,1));e.push({id:f,tpl:v`
      <g id=${f}>
        <rect x=${u-i*2} y=${s} width=${i*2} height=${r} 
          class="weekend"/>
          <text x=${u-3} y=${S} class="text small end">
          ${m}
        </text>       
        <rect x=${u} width="1" y=${h} height=${c}         
          class="line scale"/>
        <text x=${u+3} y=${S} class="text small start">
          ${p}
        </text>        
        <text x=${u+3*i} y=${A} 
          class="text tiny start">
            Week ${w}
        </text>    
      </g>`})}return v`
    <g id="weekHeader">
      ${mt({...n})}

      ${_(e,d=>d.id,d=>d.tpl)}
     
    </g>
  `}function he(n,t){n.unshift(t.timeScale.startMs),n.push(t.timeScale.end.getTime());let e=[],s=t.timeScale.start.getFullYear(),r=t.timeScale.end.getFullYear(),i=0,o=t.timeScale.dateToPx(t.timeScale.end),a=t.scaleHeight/4,h=0,c=a*2;for(;s<=r;){let d=new Date(s+1,0,1,1),l=t.timeScale.dateToPx(d);l>o&&(l=o),e.push({id:"y_"+s,tpl:v`
      <g>
        <rect x=${l} y=${h} width="1" height=${c}
        class="line scale flip" />      
          <text 
            x=${(l-i)/2+i} 
            y=${t.scaleHeight*.25} 
            class="text small">
            ${s}
          </text>        
      </g>`}),s=d.getFullYear(),i=l}return v`<g id="year">
   ${_(e,d=>d.id,d=>d.tpl)}  
  </g>`}function de(n){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=Dt(n.timeScale.startMs,n.timeScale.end.getTime()).filter(d=>new Date(d).getDate()===1);s.unshift(n.timeScale.startMs),s.push(n.timeScale.end.getTime());let r=[],i=s.length-1,o=n.scaleHeight/4,a=o*3,h=o;for(let d=0;d<i;d++){let u=new Date(s[d]).getMonth(),p=n.timeScale.dateToPx(new Date(s[d])),m=(s[d+1]-s[d])/n.timeScale.msPerPx,f="hm_"+u,y=p+m/2,S=v`
      <rect 
        x=${p}         
        y=${a} 
        width="1"
        height=${h}       
        class="line scale" />`;r.push({id:f,tpl:v`
      <g>
        ${d===0?null:S}
        ${m>30?v`
          <text x=${y} y=${n.scaleHeight*.75} class="text small">
            ${t[u]}
          </text>`:null}
      </g>
      `})}let c=s.filter(d=>new Date(d).getMonth()===0);return v`
    <g id="monthHeader">
      ${he(c,n)}     
       ${_(r,d=>d.id,d=>d.tpl)}  
    </g>
  `}function pe(n){let t=[];for(let e=0;e<n.data.length;e++){let s=(e+1)*n.rowHeight+n.scaleHeight;t.push({id:e,tpl:v`
        <line key=${e} x1="0" x2=${n.width} y1=${s} y2=${s} class="line"/>`})}return v`
    <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight}
        y2=${n.scaleHeight}
        class="line"
        
      />
    <g id="grid">
      ${_(t,e=>e.id,e=>e.tpl)}     
      
    </g>
  `}function ue(n){let t=n.map(i=>({x:i[0],y:i[1]})),e=["M"+t[0].x+","+t[0].y],s=5,r=t.length-1;t[r-1].x<t[r].x?t[r].x+=s/2:t[r].x-=s/2;for(let i=0;i<t.length;i++){let o=i+1>t.length-1?(i+1)%t.length:i+1,a=i+2>t.length-1?(i+2)%t.length:i+2,h=t[i],c=t[o],d=t[a],l=Math.sqrt(Math.pow(h.x-c.x,2)+Math.pow(h.y-c.y,2)),u=(l-s)/l,p=[((1-u)*h.x+u*c.x).toFixed(1),((1-u)*h.y+u*c.y).toFixed(1)],m=Math.sqrt(Math.pow(c.x-d.x,2)+Math.pow(c.y-d.y,2)),f=s/m;if(i!==r)if(e.push("L"+p.join(",")),i===r-1)e.push("L"+c.x+","+c.y);else{let y=[((1-f)*c.x+f*d.x).toFixed(1),((1-f)*c.y+f*d.y).toFixed(1)];e.push("Q"+c.x+","+c.y+","+y.join(","))}}return e.join(" ")}var Oe;function me(n){Oe=n;let t=new Map;return n.data.forEach(e=>{t.set(e.id.toString(),e)}),v`
    <g class="link-lines" >
      ${n.data.map(e=>e.links?e.links.map(s=>Ne(s,n,t.get(s.source.toString()),t.get(s.target.toString()))):null)}
    </g>`}function Ne(n,t,e,s){let r=s??t.data.find(g=>g.id.toString()===n.target.toString()),i=e??t.data.find(g=>g.id.toString()===n.source.toString());if(!r||!r.start||!r.end||!i||!i.start||!i.end)return null;let o=t.rowHeight/2+t.scaleHeight,a=t.data.findIndex(g=>g.id===i.id),h=t.data.findIndex(g=>g.id===r.id),c=12,d=6,l=r.type==="milestone"?t.barHeight/2:0,u=o+a*t.rowHeight,p=o+h*t.rowHeight,m=t.barHeight/2+4;u>p&&(m=-m);let f=t.timeScale.dateToPx(i.end),y=t.timeScale.dateToPx(i.start),S=t.timeScale.dateToPx(r.end),A=t.timeScale.dateToPx(r.start),w=(g,$)=>{let x=`${n.source}-${n.target}-${n.type}`;return v`
    <g 
      id=${x} 
      class="link"
      data-source=${n.source} 
      data-target=${n.target} 
      data-link-type=${n.type}>
      <path d=${ue(g)} class="link-line" ></path>     
      <polygon points=${Ht($)} class="line-arrow" />
    </g>`};if(n.type==="FS"){let g=f,$=A-l,x=[[g,u],[g+c,u]];$-g>=2*c?x.push([g+c,p]):(x.push([g+c,p-m]),x.push([$-c,p-m]),x.push([$-c,p])),x.push([$-d,p]);let E=[[$-d,p-d],[$,p],[$-d,p+d]];return w(x,E)}if(n.type==="FF"){let g=f,$=S+l,x=[[g,u],[g+c,u]];$<=g?x.push([g+c,p]):(x.push([g+c,p-m]),x.push([$+c,p-m]),x.push([$+c,p])),x.push([$+d,p]);let E=[[$+d,p-d],[$,p],[$+d,p+d]];return w(x,E)}if(n.type==="SS"){let g=y,$=A-l,x=[[g,u],[g-c,u]];g<=$?x.push([g-c,p]):(x.push([g-c,p-m]),x.push([$-c,p-m]),x.push([$-c,p])),x.push([$-d,p]);let E=[[$-d,p-d],[$,p],[$-d,p+d]];return w(x,E)}if(n.type==="SF"){let g=y,$=S+l,x=[[g,u],[g-c,u]];g-$>=2*c?x.push([g-c,p]):(x.push([g-c,p-m]),x.push([$+c,p-m]),x.push([$+c,p])),x.push([$+d,p]);let E=[[$+d,p-d],[$,p],[$+d,p+d]];return w(x,E)}return null}function ze(n,t,e,s,r,i){let o=e/2,a=[[0,o],[o,0],[e,o],[o,e]].map(h=>`${h[0]},${h[1]}`).join(" ");return{id:r,tpl:v`
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
  `}}function fe(n){let t=(n.rowHeight-n.barHeight)/2+n.scaleHeight,e=n.timeScale.dateToPx(new Date),s=n.timeScale,r=n.data.map((i,o)=>{let a="bar_"+i.id;if(!i.start||!i.end)return null;let h=()=>{if(this.suppressClick)return;let gt=new CustomEvent("item-click",{detail:i});this.dispatchEvent(gt)},c=s.dateToPx(i.start),d=t+o*n.rowHeight,l=n.barHeight/2;if(i.type==="milestone")return ze(c,d,n.barHeight,h,a,i);let u=s.pxForTimeSpan(i.start,i.end),p=u*i.percent,m="gantt-bar";m+=i.type==="group"?" group":"";let f=!1,y=!1;n.showDelay&&(c+p<e&&i.percent<.999999&&(f=!0,y=!1),c+u<e&&i.percent<.999999&&(f=!1,y=!0));let S=n.rowHeight/6,A=n.rowHeight/6,w=1,g=S*2+A+w*2,$=v`
      <rect
        x=${g}
        width=${u}
        height=${n.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${h}    
      />
      `,x=p>1e-6?v`
            <rect
            x=${g}
            width=${p}
            height=${n.barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${h}
            />`:null,E=v``;return i.type==="activity"&&(E=v`
        <circle
          class=${i.type+" ctl-start"}
          data-id=${i.id}           
          cx=${w+S}
          cy=${l}
          r=${S}
        />
        <circle
          class=${i.type+" ctl-finish"}
          data-id=${i.id}
          cx=${u+g+A+S}
          cy=${l}
          r=${S}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${g+A}
            height=${n.barHeight} 
            width=${n.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${g+A}
            height=${n.barHeight} 
            width=${n.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${g+A-.5+n.barHeight/2} 
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
      `),{id:a,tpl:v`
      <svg 
        x=${c-g} y=${d}              
        id=${a}
        key=${o}       
        .item=${i}
        data-item-id=${i.id}        
        class=${m}
        ?warning=${f}
        ?danger=${y}
      >      
        ${$}
        ${x}
        ${E}
    
      </svg>
    `}});return v`
    <g>      
        <line             
          x1=${e}
          x2=${e}
          y1=${n.scaleHeight}
          y2=${n.height}
          class="today-line"
        />
      
      ${_(r,i=>i.id,i=>i.tpl)} 
    </g>
  `}function ge(){let n=`0 0 ${this.settings.width} ${this.settings.height}`,t=this.settings.showLinks?me.bind(this)(this.settings):null;return v`
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
          
      ${pe.bind(this)(this.settings)}       
  
      ${Fe.bind(this)(this.settings)}
      ${t}
      ${fe.bind(this)(this.settings)}     
    </svg>
  `}function Fe(n){switch(n.viewMode){case"day":return le.bind(this)(n);case"month":return de.bind(this)(n);case"week":return ce.bind(this)(n)}}var ye=k`
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
`;var $e=k`
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
`;var xe=k`
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
`;var ve=k`
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
`;function Se(){let n=this.shadowRoot.getElementById("gantt");function t(l){return l.classList.contains("ctl-start")}function e(l){return l.classList.contains("ctl-finish")}let s=(l,u)=>{let p=l.dataset.id,m=u.dataset.id;if(p===m)return;let f=this.settings.data.find($=>$.id.toString()===p),y=this.settings.data.find($=>$.id.toString()===m),S=t(l)?"S":"F",A=t(u)?"S":"F";f.type==="milestone"&&(S="F"),y.type==="milestone"&&(A="S");let w={source:p,target:m,type:`${S}${A}`},g=this.settings.data.find($=>$.id==p);if(g){if(g.links.find(yt=>yt.source===w.source&&yt.target===w.target&&yt.type===w.type))return;let x=!1,E={link:w,cancel:()=>{x=!0}},gt=new CustomEvent("before-link-added",{detail:E});this.dispatchEvent(gt),x||(g.links.push(w),this.requestUpdate())}},r="http://www.w3.org/2000/svg",i=!1,o=null,a=null,h=l=>l.parentElement.x.baseVal.value+l.cx.baseVal.value,c=l=>l.parentElement.y.baseVal.value+l.cy.baseVal.value;n.addEventListener("mousedown",l=>{if(!t(l.target)&&!e(l.target))return;l.preventDefault(),o=l.target;let u=o.parentElement;this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish").forEach(f=>{f.setAttribute("active","active")}),i=!0,a=document.createElementNS(r,"line");let p=h(o).toString(),m=c(o).toString();a.setAttribute("x1",p),a.setAttribute("y1",m),a.setAttribute("x2",p),a.setAttribute("y2",m),a.classList.add("add-link-line"),n.appendChild(a)}),n.addEventListener("mousemove",l=>{let u=l.target;if(i)if(l.preventDefault(),t(u)||e(u)){let p=h(u).toString(),m=c(u).toString();a.setAttribute("x2",p),a.setAttribute("y2",m)}else{let p=l.clientX,m=l.clientY,f=n.getBoundingClientRect();a.setAttribute("x2",(p-f.left).toString()),a.setAttribute("y2",(m-f.top).toString())}});let d=l=>{i&&(l.preventDefault(),l.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(u=>{u.removeAttribute("active")}),i=!1,a&&(n.removeChild(a),a=null))};n.addEventListener("mouseup",l=>{d(l);let u=l.target,p=t(u)||e(u);o&&p&&s(o,u),o=null}),this.addEventListener("mouseout",l=>{d(l)})}var F=(n,t,e)=>{if(e){let s=new Date(n.start.getTime()+t);t>0&&n.end.getTime()-s.getTime()<864e5&&(n.end=new Date(n.end.getTime()+t)),n.start=s}else{let s=new Date(n.end.getTime()+t);t<0&&s.getTime()-n.start.getTime()<864e5&&(n.start=new Date(n.start.getTime()+t)),n.end=s}};function we(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,r,i,o,a=!1,h=!1;function c(f){let y=f.parentElement;return a=y.classList.contains("ctl-resize-start"),h=y.classList.contains("ctl-resize-end"),y.tagName==="g"&&(a||h)}let d=()=>{a=!1,h=!1,t=!1,r=void 0,s=0,o=void 0,e=!1,this.suppressClick},l=f=>{f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation()},u=f=>{let y=f.target;!c(y)||t||(e=!0,r=y.parentElement.parentElement,i=r.dataset.itemId,i&&(l(f),s=r.x.baseVal.value,o=this.settings.data.find(S=>S.id.toString()===i)))},p=async f=>{if(!e)return;l(f),t=!0;let y=f.movementX*this.settings.timeScale.msPerPx;for(let S of o.parents)a&&o.start.getTime()===S.start.getTime()&&F(S,y,a),h&&o.end.getTime()===S.end.getTime()&&F(S,y,a);F(o,y,a),this.requestUpdate()},m=f=>{if(e){if(t){this.___lastMovement=new Date().getTime();let y=new CustomEvent("item-resized",{detail:o});this.dispatchEvent(y)}d(),l(f)}};n.addEventListener("mousedown",u),n.addEventListener("mousemove",p),n.addEventListener("mouseup",m),this.addEventListener("mouseout",f=>{d()})}function _e(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,r,i,o,a;function h(m){let f=m;return f.tagName==="rect"&&(f.classList.contains("back")||f.classList.contains("front"))}let c=()=>{t=!1,r=void 0,s=0,i=void 0,a=void 0,e=!1,this.suppressClick},d=m=>{m.preventDefault(),m.stopPropagation(),m.stopImmediatePropagation()},l=m=>{let f=m.target;!h(f)||t||(e=!0,i=f,r=f.parentElement,o=r.dataset.itemId,o&&(d(m),s=r.x.baseVal.value,a=this.settings.data.find(y=>y.id.toString()===o)))},u=async m=>{if(!e)return;d(m),t=!0;let f=m.movementX*this.settings.timeScale.msPerPx;if(dt(a))for(let y of a.nested)y.start=new Date(y.start.getTime()+f),y.end=new Date(y.end.getTime()+f);for(let y of a.parents)a.start.getTime()===y.start.getTime()?F(y,f,!0):a.end.getTime()===y.end.getTime()&&F(y,f,!1);a.start=new Date(a.start.getTime()+f),a.end=new Date(a.end.getTime()+f),this.requestUpdate()},p=m=>{if(e){if(t){this.___lastMovement=new Date().getTime();let f=new CustomEvent("item-moved",{detail:a});this.dispatchEvent(f)}c(),d(m)}};n.addEventListener("mousedown",l),n.addEventListener("mousemove",u),n.addEventListener("mouseup",p),this.addEventListener("mouseout",m=>{c()})}var Ae=864e5,ft=class{constructor(t,e,s){this.viewMode=s;let r=new Date(t);r.setHours(1,0,0,0);let i=new Date(e);i.setHours(1,0,0,0),this.start=r,this.end=i,this.startMs=r.getTime(),this.endMs=i.getTime(),this.totalDays=Math.round(Math.abs((this.startMs-i.getTime())/Ae));let o={month:3,week:4,day:5},a=5;this.totalDays>365?a=1*o[s]:this.totalDays>155?a=4*o[s]:this.totalDays>30&&(a=6*o[s]),this.pxPerDay=a,this.pxPerWeek=a*7,this.msPerPx=Ae/a}pxToMs(t){return t*this.msPerPx}msToPx(t){return t/this.msPerPx}dateToPx(t){let e=t.getTime()-this.startMs;return this.msToPx(e)}pxToDate(t){let e=this.pxToMs(t);return new Date(this.startMs+e)}pxForTimeSpan(t,e){let s=e.getTime()-t.getTime();return this.msToPx(s)}};var O=class extends P{constructor(){super(...arguments);this.___lastMovement=0;this.interactionReady=!1}connectedCallback(){super.connectedCallback()}updateSettings(){let e=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),s=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),r=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),i=this.flattenData(this.data),o=null,a=null;i.forEach(c=>{o=Tt(o,c.start),a=Mt(a,c.end)}),o=o||new Date,a=a||new Date;let h={viewMode:"week",showDelay:!0,showLinks:!0,showLabels:!0};this.settings={...h,...this.options,start:o,end:a,width:0,height:0,scaleHeight:s,rowHeight:e,barHeight:r,data:i,timeScale:void 0},this.settings.timeScale=new ft(M(o,-1),M(a,7),this.settings.viewMode),this.settings.width=this.settings.timeScale.totalDays*this.settings.timeScale.pxPerDay,this.settings.height=this.settings.data.length*this.settings.rowHeight+this.settings.scaleHeight,this.setupInteractions()}flattenData(e,s,r){var a;let i=[],o=0;for(let h of e){this.validateItem(h);let c=h;c.parents=[],r&&(c.parents=[...r.parents??[],r]),c.path=s?s+"."+o:o.toString(),c.id??(c.id=c.path),i.push(c),((a=h.nested)==null?void 0:a.length)>0&&i.push(...this.flattenData(h.nested,c.path,c)),o++}return i}validateItem(e){if(!(dt(e)||Qt(e)||te(e)))throw Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text);e.start??(e.start=new Date),e.end??(e.end=M(e.start,5)),e.start>e.end&&Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text+"; End before start")}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.interactionReady||(await this.updateComplete,Se.bind(this)(),_e.bind(this)(),we.bind(this)(),this.interactionReady=!0)}render(){return!this.data||this.data.length===0?"No data":(this.updateSettings(),At`<div class="labels">
        ${this.settings.data.map(e=>At`<div class="lbl">${e.text}</div>`)}
      </div>
      <div class="gantt">${ge.bind(this)()}</div>`)}};O.styles=[k`
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
    `,ve,ye,$e,xe],Z([st({type:Object,attribute:!1})],O.prototype,"options",2),Z([st({type:Array,attribute:!1})],O.prototype,"data",2),O=Z([It("wc-gantt")],O);export{O as WCGantt};
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
