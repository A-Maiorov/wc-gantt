var De=Object.defineProperty;var Ce=Object.getOwnPropertyDescriptor;var tt=(n,t,e,s)=>{for(var i=s>1?void 0:s?Ce(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&De(t,e,i),i};function D(n,t){let e=new Date(n.valueOf());return e.setDate(e.getDate()+t),e}function Ct(n,t){let e=[],s=new Date(n);for(s.setHours(1,0,0,0);s.getTime()<=t;)e.push(s.getTime()),s=D(s,1);return e}function et(n,t){let e=[],s=new Date(n.getFullYear(),n.getMonth(),n.getDate(),1),i=s.getDay();i!==1&&s.setDate(s.getDate()-i+1),e.push(new Date(s.getTime()));let r=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1),o=r.getDay();for(o!==1&&r.setDate(r.getDate()+(7-o)),e.push(new Date(r.getTime()));s<r;)s.setDate(s.getDate()+7),e.push(new Date(s.getTime()));return e}function Tt(n,t){return n&&t?n>t?t:n:n||t}function Mt(n,t){return n&&t?n<t?t:n:n||t}function Ht(n){return n.map(t=>`${t[0]},${t[1]}`).join(" ")}function Pt(n){let t=new Date(n.getFullYear(),0,1),e=Math.floor((n.getTime()-t.getTime())/(24*60*60*1e3));return Math.ceil(e/7)+1}var Lt=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var nt=globalThis,st=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),It=new WeakMap,B=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(st&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=It.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&It.set(e,t))}return t}toString(){return this.cssText}},Rt=n=>new B(typeof n=="string"?n:n+"",void 0,vt),k=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new B(e,n,vt)},bt=(n,t)=>{if(st)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=nt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},it=st?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Rt(e)})(n):n;var{is:Te,defineProperty:Me,getOwnPropertyDescriptor:He,getOwnPropertyNames:Pe,getOwnPropertySymbols:Le,getPrototypeOf:Ie}=Object,H=globalThis,Gt=H.trustedTypes,Re=Gt?Gt.emptyScript:"",St=H.reactiveElementPolyfillSupport,q=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Re:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},rt=(n,t)=>!Te(n,t),Vt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Me(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=He(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){let a=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(q("elementProperties")))return;let t=Ie(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(q("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(q("properties"))){let e=this.properties,s=[...Pe(e),...Le(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(it(i))}else t!==void 0&&e.push(it(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:j;this._$Em=i,this[i]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??rt)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[q("elementProperties")]=new Map,C[q("finalized")]=new Map,St==null||St({ReactiveElement:C}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.4");var Ge={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:rt},Ve=(n=Ge,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(a){let c=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,c,n)},init(a){return a!==void 0&&this.P(o,void 0,n),a}}}if(s==="setter"){let{name:o}=e;return function(a){let c=this[o];t.call(this,a),this.requestUpdate(o,c,n)}}throw Error("Unsupported decorator location: "+s)};function ot(n){return(t,e)=>typeof e=="object"?Ve(n,t,e):((s,i,r)=>{let o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}var X=globalThis,lt=X.trustedTypes,Ut=lt?lt.createPolicy("lit-html",{createHTML:n=>n}):void 0,Et="$lit$",T=`lit$${(Math.random()+"").slice(9)}$`,At="?"+T,Ue=`<${At}>`,G=document,J=()=>G.createComment(""),K=n=>n===null||typeof n!="object"&&typeof n!="function",Bt=Array.isArray,qt=n=>Bt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",wt=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Nt=/>/g,I=RegExp(`>|${wt}(?:([^\\s"'>=/]+)(${wt}*=${wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Wt=/'/g,zt=/"/g,jt=/^(?:script|style|textarea|title)$/i,Yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Z=Yt(1),y=Yt(2),M=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ft=new WeakMap,R=G.createTreeWalker(G,129);function Xt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}var Jt=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":"",o=Y;for(let a=0;a<e;a++){let c=n[a],h,p,l=-1,u=0;for(;u<c.length&&(o.lastIndex=u,p=o.exec(c),p!==null);)u=o.lastIndex,o===Y?p[1]==="!--"?o=Ot:p[1]!==void 0?o=Nt:p[2]!==void 0?(jt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=I):p[3]!==void 0&&(o=I):o===I?p[0]===">"?(o=i??Y,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,h=p[1],o=p[3]===void 0?I:p[3]==='"'?zt:Wt):o===zt||o===Wt?o=I:o===Ot||o===Nt?o=Y:(o=I,i=void 0);let d=o===I&&n[a+1].startsWith("/>")?" ":"";r+=o===Y?c+Ue:l>=0?(s.push(h),c.slice(0,l)+Et+c.slice(l)+T+d):c+T+(l===-2?a:d)}return[Xt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},Q=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,a=t.length-1,c=this.parts,[h,p]=Jt(t,e);if(this.el=n.createElement(h,s),R.currentNode=this.el.content,e===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=R.nextNode())!==null&&c.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(Et)){let u=p[o++],d=i.getAttribute(l).split(T),m=/([.?@])?(.*)/.exec(u);c.push({type:1,index:r,name:m[2],strings:d,ctor:m[1]==="."?ht:m[1]==="?"?dt:m[1]==="@"?pt:U}),i.removeAttribute(l)}else l.startsWith(T)&&(c.push({type:6,index:r}),i.removeAttribute(l));if(jt.test(i.tagName)){let l=i.textContent.split(T),u=l.length-1;if(u>0){i.textContent=lt?lt.emptyScript:"";for(let d=0;d<u;d++)i.append(l[d],J()),R.nextNode(),c.push({type:2,index:++r});i.append(l[u],J())}}}else if(i.nodeType===8)if(i.data===At)c.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(T,l+1))!==-1;)c.push({type:7,index:r}),l+=T.length-1}r++}}static createElement(t,e){let s=G.createElement("template");return s.innerHTML=t,s}};function V(n,t,e=n,s){var o,a;if(t===M)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,r=K(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=V(n,i._$AS(n,t.values),i,s)),t}var ct=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??G).importNode(e,!0);R.currentNode=i;let r=R.nextNode(),o=0,a=0,c=s[0];for(;c!==void 0;){if(o===c.index){let h;c.type===2?h=new W(r,r.nextSibling,this,t):c.type===1?h=new c.ctor(r,c.name,c.strings,this,t):c.type===6&&(h=new ut(r,this,t)),this._$AV.push(h),c=s[++a]}o!==(c==null?void 0:c.index)&&(r=R.nextNode(),o++)}return R.currentNode=G,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},W=class n{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),K(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==M&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):qt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==S&&K(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){var r;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Q.createElement(Xt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{let o=new ct(i,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Ft.get(t.strings);return e===void 0&&Ft.set(t.strings,e=new Q(t)),e}k(t){Bt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new n(this.S(J()),this.S(J()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=V(this,t,e,0),o=!K(t)||t!==this._$AH&&t!==M,o&&(this._$AH=t);else{let a=t,c,h;for(t=r[0],c=0;c<r.length-1;c++)h=V(this,a[s+c],e,c),h===M&&(h=this._$AH[c]),o||(o=!K(h)||h!==this._$AH[c]),h===S?t=S:t!==S&&(t+=(h??"")+r[c+1]),this._$AH[c]=h}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ht=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},dt=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},pt=class extends U{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??S)===M)return;let s=this._$AH,i=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==S&&(s===S||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},ut=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}},Kt={P:Et,A:T,C:At,M:1,L:Jt,R:ct,D:qt,V,I:W,H:U,N:dt,U:pt,B:ht,F:ut},_t=X.litHtmlPolyfillSupport;_t==null||_t(Q,W),(X.litHtmlVersions??(X.litHtmlVersions=[])).push("3.1.2");var kt=(n,t,e)=>{let s=(e==null?void 0:e.renderBefore)??t,i=s._$litPart$;if(i===void 0){let r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new W(t.insertBefore(J(),r),r,void 0,e??{})}return i._$AI(n),i};var P=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=kt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return M}},Qt;P._$litElement$=!0,P.finalized=!0,(Qt=globalThis.litElementHydrateSupport)==null||Qt.call(globalThis,{LitElement:P});var Dt=globalThis.litElementPolyfillSupport;Dt==null||Dt({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Zt=n=>{let t=n.nested==null&&(!n.type||n.type==="activity");return t&&!n.type&&(n.type="activity"),t},te=n=>{let t="type"in n&&n.nested==null&&n.percent==null&&n.type==="milestone";return t&&(n.end=n.start),t},mt=n=>{var e,s;let t="nested"in n&&Array.isArray(n.nested)&&n.nested.length>0&&(!n.type||n.type==="group");if(t){n.type="group";let i=ee(n);n.start=new Date(Math.min(((e=n.start)==null?void 0:e.getTime())??1/0,i.start)),n.end=new Date(Math.max(((s=n.end)==null?void 0:s.getTime())??-1/0,i.end))}return t};function ee(n){var s,i,r;let t=0,e=0;for(let o of n.nested)if(o.type==="group"||o.nested&&o.nested.length>0){let a=ee(o);t=t>0?Math.min(t,a.start):a.start,e=Math.max(e,a.end)}else t=t>0?Math.min(t,((s=o.start)==null?void 0:s.getTime())??1/0):(i=o.start)==null?void 0:i.getTime(),e=Math.max(e,((r=o.end)==null?void 0:r.getTime())??-1/0);return{start:t,end:e}}var ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},se=n=>(...t)=>({_$litDirective$:n,values:t}),ft=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Oe}=Kt;var ie=()=>document.createComment(""),z=(n,t,e)=>{var r;let s=n._$AA.parentNode,i=t===void 0?n._$AB:t._$AA;if(e===void 0){let o=s.insertBefore(ie(),i),a=s.insertBefore(ie(),i);e=new Oe(o,a,n,n.options)}else{let o=e._$AB.nextSibling,a=e._$AM,c=a!==n;if(c){let h;(r=e._$AQ)==null||r.call(e,n),e._$AM=n,e._$AP!==void 0&&(h=n._$AU)!==a._$AU&&e._$AP(h)}if(o!==i||c){let h=e._$AA;for(;h!==o;){let p=h.nextSibling;s.insertBefore(h,i),h=p}}}return e},L=(n,t,e=n)=>(n._$AI(t,e),n),Ne={},re=(n,t=Ne)=>n._$AH=t,oe=n=>n._$AH,gt=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let i=t.nextSibling;t.remove(),t=i}};var ae=(n,t,e)=>{let s=new Map;for(let i=t;i<=e;i++)s.set(n[i],i);return s},_=se(class extends ft{constructor(n){if(super(n),n.type!==ne.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let i=[],r=[],o=0;for(let a of n)i[o]=s?s(a,o):o,r[o]=e(a,o),o++;return{values:r,keys:i}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,s]){let i=oe(n),{values:r,keys:o}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=o,r;let a=this.ut??(this.ut=[]),c=[],h,p,l=0,u=i.length-1,d=0,m=r.length-1;for(;l<=u&&d<=m;)if(i[l]===null)l++;else if(i[u]===null)u--;else if(a[l]===o[d])c[d]=L(i[l],r[d]),l++,d++;else if(a[u]===o[m])c[m]=L(i[u],r[m]),u--,m--;else if(a[l]===o[m])c[m]=L(i[l],r[m]),z(n,c[m+1],i[l]),l++,m--;else if(a[u]===o[d])c[d]=L(i[u],r[d]),z(n,i[l],i[u]),u--,d++;else if(h===void 0&&(h=ae(o,d,m),p=ae(a,l,u)),h.has(a[l]))if(h.has(a[u])){let f=p.get(o[d]),x=f!==void 0?i[f]:null;if(x===null){let b=z(n,i[l]);L(b,r[d]),c[d]=b}else c[d]=L(x,r[d]),z(n,i[l],x),i[f]=null;d++}else gt(i[u]),u--;else gt(i[l]),l++;for(;d<=m;){let f=z(n,c[m+1]);L(f,r[d]),c[d++]=f}for(;l<=u;){let f=i[l++];f!==null&&gt(f)}return this.ut=o,re(n,c),M}});function yt(n){let t=n.timeScale,e=new Date(n.start),s=[],i=e.getMonth(),r=new Date(e.getFullYear(),i,1,1),o=n.scaleHeight*.25,a=t.dateToPx(r);for(;r<=t.end;){let h=`${r.toLocaleString("default",{month:"long"})} ${r.getFullYear()}`;r.setMonth(r.getMonth()+1,1);let p=t.dateToPx(r),l=a+(p-a)/2;s.push({id:h,tpl:y`
      <g>

        <line
          x1=${p}
          x2=${p}
          y1=${0}
          y2=${n.scaleHeight/2}
          class="line"       
        />   
        
        <text x=${l} y=${o} 
             class="text small">${h}</text>                
      </g>
      `}),a=p}return y`<g id="yearMonth">
  ${_(s,c=>c.id,c=>c.tpl)}  
  </g>`}function le(n){let t=n.timeScale,e=new Date(t.startMs),s=[];for(let i=0;i<=t.totalDays-1;i++){let r=i*t.pxPerDay,o=r+t.pxPerDay/2,a=e.getDate();s.push({id:i,tpl:y`
      <g>             
        
        <line
          x1=${r}
          x2=${r}
          y1=${n.scaleHeight/2}
          y2=${n.scaleHeight}
          class="line"       
        />   
        <text 
          id=${i} 
          x=${o} 
          y=${n.scaleHeight*.75} 
          class="text small">
          ${a}
        </text>

   
      </g>`}),e.setDate(e.getDate()+1)}return y`
  <g id="dayHeader">
    ${yt({...n})}
    <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight/2}
        class="line"
        
      />
    ${_(s,i=>i.id,i=>i.tpl)}   
  </g>`}function ce(n){let t=et(n.timeScale.start,n.timeScale.end),e=[],s=n.timeScale.pxPerDay,i=t.length-1,r=n.scaleHeight/4;for(let o=0;o<i;o++){let a=new Date(t[o]),c=n.timeScale.dateToPx(a),h=a.getDate(),p=D(a,-1).getDate(),l="week_"+o+"_"+p+"-"+h,u=n.scaleHeight/6,d=n.scaleHeight-u,m=r*2+u,f=Pt(D(a,1));e.push({id:l,tpl:y`
      <g id=${l}> 
          <text x=${c-3} y=${d} class="text small end">
          ${p}
        </text>       

        <line
          x1=${c}
          x2=${c}
          y1=${n.scaleHeight/2}
          y2=${n.scaleHeight}
          class="line"       
        />    
        <text x=${c+3} y=${d} class="text small start">
          ${h}
        </text>          
        <text x=${c+3*s} y=${m} 
          class="text tiny start">
            Week ${f}
        </text>    
      </g>`})}return y`
    <g id="weekHeader">
      ${yt({...n})}
      <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight/2}
        class="line"
        
      />
      ${_(e,o=>o.id,o=>o.tpl)}
     
    </g>
  `}function he(n,t){n.unshift(t.timeScale.startMs),n.push(t.timeScale.end.getTime());let e=[],s=t.timeScale.start.getFullYear(),i=t.timeScale.end.getFullYear(),r=0,o=t.timeScale.dateToPx(t.timeScale.end),a=t.scaleHeight/4,c=0,h=a*2;for(;s<=i;){let p=new Date(s+1,0,1,1),l=t.timeScale.dateToPx(p);l>o&&(l=o),e.push({id:"y_"+s,tpl:y`
      <g>
      
        <line
          x1=${l}
          x2=${l}
          y1=${c}
          y2=${h}
          class="line"       
        />   
          <text 
            x=${(l-r)/2+r} 
            y=${t.scaleHeight*.25} 
            class="text small">
            ${s}
          </text>        
      </g>`}),s=p.getFullYear(),r=l}return y`<g id="year">
   ${_(e,p=>p.id,p=>p.tpl)}  
  </g>`}function de(n){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=Ct(n.timeScale.startMs,n.timeScale.end.getTime()).filter(a=>new Date(a).getDate()===1);s.unshift(n.timeScale.startMs),s.push(n.timeScale.end.getTime());let i=[],r=s.length-1;for(let a=0;a<r;a++){let h=new Date(s[a]).getMonth(),p=n.timeScale.dateToPx(new Date(s[a])),l=(s[a+1]-s[a])/n.timeScale.msPerPx,u="hm_"+h,d=p+l/2,m=y`
    
      <line
        x1=${p}
        x2=${p}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight}
        class="line"       
      />    
      `;i.push({id:u,tpl:y`
      <g>
        ${a===0?null:m}
        ${l>30?y`
          <text x=${d} y=${n.scaleHeight*.75} class="text small">
            ${t[h]}
          </text>`:null}
      </g>
      `})}let o=s.filter(a=>new Date(a).getMonth()===0);return y`
    <g id="monthHeader">
      ${he(o,n)}     
      <line
        x1=${0}
        x2=${n.width}
        y1=${n.scaleHeight/2}
        y2=${n.scaleHeight/2}
        class="line"
        
      />
       ${_(i,a=>a.id,a=>a.tpl)}  
    </g>
  `}function pe(n){let t=[];for(let s=0;s<n.data.length;s++){let i=(s+1)*n.rowHeight+n.lineWidth,r=s*n.rowHeight+n.lineWidth,o=y``;n.data[s].type==="group"&&(o=y`
      <rect
        x=${0}
        y=${r}
        width=${n.width}
        height=${n.rowHeight}        
        
        class="group-bg-color"      
      ></rect>
    `),t.push({id:s,tpl:y`
        ${o}
        <line key=${s} x1="0" x2=${n.width} y1=${i} y2=${i} class="line"/>`})}let e=null;return this.settings.timeScale.viewMode==="week"&&(e=ze(n)),this.settings.timeScale.viewMode==="day"&&(e=We(n)),y`   
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
      ${_(t,s=>s.id,s=>s.tpl)}           
    </g>
  `}function We(n){let t=n.timeScale,e=new Date(t.startMs),s=[],i=n.height;for(let r=0;r<=t.totalDays-1;r++){let o=e.getDay(),a=o===0||o===6,c=r*t.pxPerDay;a&&s.push({id:e.toDateString(),tpl:y`<rect x=${c} y=${0} width=${t.pxPerDay} height=${i} class="weekend" />`}),e.setDate(e.getDate()+1)}return y`
  <g id="weekends">
    ${_(s,r=>r.id,r=>r.tpl)}   
  </g>`}function ze(n){let t=et(n.timeScale.start,n.timeScale.end),e=[],s=0,i=n.height,r=n.timeScale.pxPerDay,o=t.length-1;for(let a=0;a<o;a++){let c=new Date(t[a]),h=n.timeScale.dateToPx(c),p=c.getDate(),l=D(c,-1).getDate(),u="week_"+a+"_"+l+"-"+p;e.push({id:u,tpl:y`      
        <rect x=${h-r*2} y=${s} width=${r*2} height=${i} class="weekend"/>                 
      `})}return y`
    <g id="weekends">
      ${_(e,a=>a.id,a=>a.tpl)}     
    </g>
  `}function ue(n){let t=n.map(r=>({x:r[0],y:r[1]})),e=["M"+t[0].x+","+t[0].y],s=3,i=t.length-1;t[i-1].x<t[i].x?t[i].x+=s/2:t[i].x-=s/2;for(let r=0;r<t.length;r++){let o=r+1>i?(r+1)%t.length:r+1,a=r+2>i?(r+2)%t.length:r+2,c=t[r],h=t[o],p=t[a],l=Math.sqrt(Math.pow(c.x-h.x,2)+Math.pow(c.y-h.y,2)),u=(l-s)/l,d=[((1-u)*c.x+u*h.x).toFixed(1),((1-u)*c.y+u*h.y).toFixed(1)],m=Math.sqrt(Math.pow(h.x-p.x,2)+Math.pow(h.y-p.y,2)),f=s/m;if(r!==i)if(e.push("L"+d.join(",")),r===i-1)e.push("L"+h.x+","+h.y);else{let x=[((1-f)*h.x+f*p.x).toFixed(1),((1-f)*h.y+f*p.y).toFixed(1)];e.push("Q"+h.x+","+h.y+","+x.join(","))}}return e.join(" ")}var Fe;function me(n){Fe=n;let t=new Map;return n.data.forEach(e=>{t.set(e.id.toString(),e)}),y`
    <g class="link-lines" >
      ${n.data.map(e=>e.links?e.links.map(s=>Be(s,n,t.get(s.source.toString()),t.get(s.target.toString()))):null)}
    </g>`}function Be(n,t,e,s){let i=s??t.data.find($=>$.id.toString()===n.target.toString()),r=e??t.data.find($=>$.id.toString()===n.source.toString());if(!i||!i.start||!i.end||!r||!r.start||!r.end)return null;let o=t.rowHeight/2,a=t.data.findIndex($=>$.id===r.id),c=t.data.findIndex($=>$.id===i.id),h=12,p=3,l=i.type==="milestone"?t.barHeight/2:0,u=o+a*t.rowHeight,d=o+c*t.rowHeight,m=t.barHeight/2+4;u>d&&(m=-m);let f=t.timeScale.dateToPx(r.end),x=t.timeScale.dateToPx(r.start),b=t.timeScale.dateToPx(i.end),E=t.timeScale.dateToPx(i.start),w=($,g)=>{let v=`${n.source}-${n.target}-${n.type}`;return y`
    <g 
      id=${v} 
      class="link"
      data-source=${n.source} 
      data-target=${n.target} 
      data-link-type=${n.type}>
      <path d=${ue($)} class="link-line" ></path>     
      <polygon points=${Ht(g)} class="line-arrow" />
    </g>`};if(n.type==="FS"){let $=f,g=E-l,v=[[$,u],[$+h,u]];g-$>=2*h?v.push([$+h,d]):(v.push([$+h,d-m]),v.push([g-h,d-m]),v.push([g-h,d])),v.push([g-p,d]);let A=[[g-p,d-p],[g,d],[g-p,d+p]];return w(v,A)}if(n.type==="FF"){let $=f,g=b+l,v=[[$,u],[$+h,u]];g<=$?v.push([$+h,d]):(v.push([$+h,d-m]),v.push([g+h,d-m]),v.push([g+h,d])),v.push([g+p,d]);let A=[[g+p,d-p],[g,d],[g+p,d+p]];return w(v,A)}if(n.type==="SS"){let $=x,g=E-l,v=[[$,u],[$-h,u]];$<=g?v.push([$-h,d]):(v.push([$-h,d-m]),v.push([g-h,d-m]),v.push([g-h,d])),v.push([g-p,d]);let A=[[g-p,d-p],[g,d],[g-p,d+p]];return w(v,A)}if(n.type==="SF"){let $=x,g=b+l,v=[[$,u],[$-h,u]];$-g>=2*h?v.push([$-h,d]):(v.push([$-h,d-m]),v.push([g+h,d-m]),v.push([g+h,d])),v.push([g+p,d]);let A=[[g+p,d-p],[g,d],[g+p,d+p]];return w(v,A)}return null}function qe(n,t,e,s,i,r){let o=e/2,a=[[0,o],[o,0],[e,o],[o,e]].map(c=>`${c[0]},${c[1]}`).join(" ");return{id:i,tpl:y`
    <svg 
      x=${n-o}
      y=${t}
      id=${i}     
      data-item-id=${r.id}               
      class="gantt-bar"                  
    >
      <polygon
        points=${a}
        class="milestone"            
        @click=${s}
      />
      <circle
        class="ctl-start"
        data-id=${r.id}
        cx=${o}
        cy=${o}
        r=${6}          
      />
    </svg>
  `}}function fe(n){let t=(n.rowHeight-n.barHeight)/2,e=n.timeScale.dateToPx(new Date(new Date().setHours(1,0,0,0))),s=n.timeScale,i=n.data.map((r,o)=>{let a="bar_"+r.id;if(!r.start||!r.end)return null;let c=()=>{if(this.suppressClick)return;let ke=new CustomEvent("item-click",{detail:r});this.dispatchEvent(ke)},h=s.dateToPx(r.start),p=t+o*n.rowHeight,l=n.barHeight/3;r.type==="group"&&(p=(n.rowHeight-l)/2+o*n.rowHeight);let u=n.barHeight/2+1;if(r.type==="milestone")return qe(h,p,n.barHeight,c,a,r);let d=s.pxForTimeSpan(r.start,r.end),m=d*r.percent,f="gantt-bar";f+=r.type==="group"?" group":"";let x=!1,b=!1;n.showDelay&&(h+m<e&&r.percent<.999999&&(x=!0,b=!1),h+d<e&&r.percent<.999999&&(x=!1,b=!0));let E=n.rowHeight/6,w=n.rowHeight/6,$=1,g=E*2+w+$*2,v=y`
    <rect
      x=${g}
      y="1"
      width=${d}
      height=${r.type==="group"?l:n.barHeight}
      rx=${1.8}
      ry=${1.8}
      class="bar-border"      
      @click=${c}    
    />
    `,A=y`
      <rect
        x=${g}        
        y="1"
        width=${d}
        height=${r.type==="group"?l:n.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${c}    
      />
      `,xt=m>1e-6?y`
          <rect
            y="1"
            x=${g}            
            width=${m}
            height=${r.type==="group"?l:n.barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${c}
            />`:null,N=y``;return r.type==="activity"&&(N=y`
        <circle
          class=${r.type+" ctl-start"}
          data-id=${r.id}           
          cx=${$+E}
          cy=${u}
          r=${E}
        />
        <circle
          class=${r.type+" ctl-finish"}
          data-id=${r.id}
          cx=${d+g+w+E}
          cy=${u}
          r=${E}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${g+w}
            y="1"
            height=${n.barHeight} 
            width=${n.barHeight} 
            style="opacity:0"
          />
          <svg 
            y="1"
            x=${g+w}
            height=${n.barHeight} 
            width=${n.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${g+w-.5+n.barHeight/2} 
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
      `),{id:a,tpl:y` 
      <svg 
        x=${h-g} 
        y=${p-1}              
        id=${a}
        key=${o}       
        .item=${r}
        data-item-id=${r.id}        
        class=${f}
        ?warning=${x}
        ?danger=${b}
      >     
       
        ${A}
        ${xt}
        ${v}
        ${N}
    
      </svg>
    `}});return y`
    <g>      
        <line             
          x1=${e}
          x2=${e}
          y1=${0}
          y2=${n.height}
          class="today-line"
        />
      
      ${_(i,r=>r.id,r=>r.tpl)} 
    </g>
  `}function ge(){let n=`0 0 ${this.settings.width} ${this.settings.height}`,t=this.settings.showLinks?me.bind(this)(this.settings):null;return y`
    <svg id="gantt" 
      width=${this.settings.width} 
      height=${this.settings.height} 
      viewBox=${n}>
    
     

      ${pe.bind(this)(this.settings)}           
      ${t}
      ${fe.bind(this)(this.settings)}     
     
    </svg>
  `}function ye(n){let t;switch(n.viewMode){case"day":t=le.bind(this)(n);break;case"month":t=de.bind(this)(n);break;case"week":t=ce.bind(this)(n);break}let e=`0 0 ${this.settings.width} ${this.settings.scaleHeight}`;return y`
   <svg id="gantt" 
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
    `}var $e=k`
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
`;var xe=k`
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
`;var ve=k`
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

  .bar-border {
    stroke: var(--gantt-chart-bg-color);
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
`;var be=k`
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
`;function Se(){let n=this.shadowRoot.getElementById("gantt");function t(l){return l.classList.contains("ctl-start")}function e(l){return l.classList.contains("ctl-finish")}let s=(l,u)=>{let d=l.dataset.id,m=u.dataset.id;if(d===m)return;let f=this.settings.data.find(g=>g.id.toString()===d),x=this.settings.data.find(g=>g.id.toString()===m),b=t(l)?"S":"F",E=t(u)?"S":"F";f.type==="milestone"&&(b="F"),x.type==="milestone"&&(E="S");let w={source:d,target:m,type:`${b}${E}`},$=this.settings.data.find(g=>g.id==d);if($){if($.links.find(N=>N.source===w.source&&N.target===w.target&&N.type===w.type))return;let v=!1,A={link:w,cancel:()=>{v=!0}},xt=new CustomEvent("before-link-added",{detail:A});this.dispatchEvent(xt),v||($.links.push(w),this.requestUpdate())}},i="http://www.w3.org/2000/svg",r=!1,o=null,a=null,c=l=>l.parentElement.x.baseVal.value+l.cx.baseVal.value,h=l=>l.parentElement.y.baseVal.value+l.cy.baseVal.value;n.addEventListener("mousedown",l=>{if(!t(l.target)&&!e(l.target))return;l.preventDefault(),o=l.target;let u=o.parentElement;this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish").forEach(f=>{f.setAttribute("active","active")}),r=!0,a=document.createElementNS(i,"line");let d=c(o).toString(),m=h(o).toString();a.setAttribute("x1",d),a.setAttribute("y1",m),a.setAttribute("x2",d),a.setAttribute("y2",m),a.classList.add("add-link-line"),n.appendChild(a)}),n.addEventListener("mousemove",l=>{let u=l.target;if(r)if(l.preventDefault(),t(u)||e(u)){let d=c(u).toString(),m=h(u).toString();a.setAttribute("x2",d),a.setAttribute("y2",m)}else{let d=l.clientX,m=l.clientY,f=n.getBoundingClientRect();a.setAttribute("x2",(d-f.left).toString()),a.setAttribute("y2",(m-f.top).toString())}});let p=l=>{r&&(l.preventDefault(),l.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(u=>{u.removeAttribute("active")}),r=!1,a&&(n.removeChild(a),a=null))};n.addEventListener("mouseup",l=>{p(l);let u=l.target,d=t(u)||e(u);o&&d&&s(o,u),o=null}),this.addEventListener("mouseout",l=>{p(l)})}var F=(n,t,e)=>{if(e){let s=new Date(n.start.getTime()+t);t>0&&n.end.getTime()-s.getTime()<864e5&&(n.end=new Date(n.end.getTime()+t)),n.start=s}else{let s=new Date(n.end.getTime()+t);t<0&&s.getTime()-n.start.getTime()<864e5&&(n.start=new Date(n.start.getTime()+t)),n.end=s}};function _e(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,i,r,o,a=!1,c=!1;function h(f){let x=f.parentElement;return a=x.classList.contains("ctl-resize-start"),c=x.classList.contains("ctl-resize-end"),x.tagName==="g"&&(a||c)}let p=()=>{a=!1,c=!1,t=!1,i=void 0,s=0,o=void 0,e=!1,this.suppressClick},l=f=>{f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation()},u=f=>{let x=f.target;!h(x)||t||(e=!0,i=x.parentElement.parentElement,r=i.dataset.itemId,r&&(l(f),s=i.x.baseVal.value,o=this.settings.data.find(b=>b.id.toString()===r)))},d=async f=>{if(!e)return;l(f),t=!0;let x=f.movementX*this.settings.timeScale.msPerPx;for(let b of o.parents)a&&o.start.getTime()===b.start.getTime()&&F(b,x,a),c&&o.end.getTime()===b.end.getTime()&&F(b,x,a);F(o,x,a),this.requestUpdate()},m=f=>{if(e){if(t){this.___lastMovement=new Date().getTime();let x=new CustomEvent("item-resized",{detail:o});this.dispatchEvent(x)}p(),l(f)}};n.addEventListener("mousedown",u),n.addEventListener("mousemove",d),n.addEventListener("mouseup",m),this.addEventListener("mouseout",f=>{p()})}function Ee(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,i,r,o,a;function c(m){let f=m;return f.tagName==="rect"&&(f.classList.contains("back")||f.classList.contains("front"))}let h=()=>{t=!1,i=void 0,s=0,r=void 0,a=void 0,e=!1,this.suppressClick},p=m=>{m.preventDefault(),m.stopPropagation(),m.stopImmediatePropagation()},l=m=>{let f=m.target;!c(f)||t||(e=!0,r=f,i=f.parentElement,o=i.dataset.itemId,o&&(p(m),s=i.x.baseVal.value,a=this.settings.data.find(x=>x.id.toString()===o)))},u=async m=>{if(!e)return;p(m),t=!0;let f=m.movementX*this.settings.timeScale.msPerPx;if(mt(a))for(let x of a.nested)x.start=new Date(x.start.getTime()+f),x.end=new Date(x.end.getTime()+f);for(let x of a.parents)a.start.getTime()===x.start.getTime()?F(x,f,!0):a.end.getTime()===x.end.getTime()&&F(x,f,!1);a.start=new Date(a.start.getTime()+f),a.end=new Date(a.end.getTime()+f),this.requestUpdate()},d=m=>{if(e){if(t){this.___lastMovement=new Date().getTime();let f=new CustomEvent("item-moved",{detail:a});this.dispatchEvent(f)}h(),p(m)}};n.addEventListener("mousedown",l),n.addEventListener("mousemove",u),n.addEventListener("mouseup",d),this.addEventListener("mouseout",m=>{h()})}var Ae=864e5,$t=class{constructor(t,e,s){this.viewMode=s;let i=new Date(t);i.setHours(1,0,0,0);let r=new Date(e);r.setHours(1,0,0,0),this.start=i,this.end=r,this.startMs=i.getTime(),this.endMs=r.getTime(),this.totalDays=Math.round(Math.abs((this.startMs-r.getTime())/Ae));let o={month:3,week:4,day:5},a=5;this.totalDays>365?a=1*o[s]:this.totalDays>155?a=4*o[s]:this.totalDays>30&&(a=6*o[s]),this.pxPerDay=a,this.pxPerWeek=a*7,this.msPerPx=Ae/a}pxToMs(t){return t*this.msPerPx}msToPx(t){return t/this.msPerPx}dateToPx(t){let e=t.getTime()-this.startMs;return this.msToPx(e)}pxToDate(t){let e=this.pxToMs(t);return new Date(this.startMs+e)}pxForTimeSpan(t,e){let s=e.getTime()-t.getTime();return this.msToPx(s)}};var O=class extends P{constructor(){super(...arguments);this.___lastMovement=0;this.interactionReady=!1;this.scrollReady=!1}connectedCallback(){super.connectedCallback()}updateSettings(){var p,l;let e=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),s=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),i=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),r=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-line-width")),o=this.flattenData(this.data),a=((p=this.options)==null?void 0:p.minDate)??null,c=((l=this.options)==null?void 0:l.maxDate)??null;o.forEach(u=>{a=Tt(a,u.start),c=Mt(c,u.end)}),a=a||new Date,c=c||new Date;let h={viewMode:"week",showDelay:!0,showLinks:!0,showLabels:!0};this.settings={...h,...this.options,start:a,end:c,labelsWidth:0,width:0,height:0,scaleHeight:s,rowHeight:e,barHeight:i,lineWidth:r,data:o,timeScale:void 0,...this.options},this.settings.timeScale=new $t(D(a,-1),D(c,7),this.settings.viewMode),this.settings.width=this.settings.timeScale.totalDays*this.settings.timeScale.pxPerDay,this.settings.height=this.settings.data.length*this.settings.rowHeight,this.setupInteractions()}flattenData(e,s,i){var a;let r=[],o=0;for(let c of e){this.validateItem(c);let h=c;h.parents=[],i&&(h.parents=[...i.parents??[],i]),h.path=s?s+"."+o:o.toString(),h.id??(h.id=h.path),r.push(h),((a=c.nested)==null?void 0:a.length)>0&&r.push(...this.flattenData(c.nested,h.path,h)),o++}return r}validateItem(e){if(!(mt(e)||Zt(e)||te(e)))throw Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text);e.start??(e.start=new Date),e.end??(e.end=D(e.start,5)),e.start.setHours(1,0,0,0),e.end.setHours(1,0,0,0),e.start>e.end&&Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text+"; End before start")}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.interactionReady||(await this.updateComplete,Se.bind(this)(),Ee.bind(this)(),_e.bind(this)(),this.interactionReady=!0)}get timeScaleElement(){return this.__timeScaleEl||(this.__timeScaleEl=this.renderRoot.querySelector(".time-scale")),this.__timeScaleEl}get ganttElement(){return this.__ganttEl||(this.__ganttEl=this.renderRoot.querySelector(".gantt")),this.__ganttEl}updated(){if(!this.data||this.data.length===0||this.scrollReady)return;let e=this.renderRoot.querySelector("slot").assignedElements({flatten:!0})[0];if(!e)return;let s={childList:!0,subtree:!0,attributes:!0,characterData:!0},i=()=>{let o=e.clientWidth??0;this.settings.labelsWidth=o,this.timeScaleElement.style.marginLeft=o+"px";let a=this.renderRoot.querySelector(".gantt-v");this.timeScaleElement.style.marginRight=a.offsetWidth-a.clientWidth+"px",this.requestUpdate()},r=new MutationObserver(i);r.observe(e,s),e.shadowRoot&&r.observe(e.shadowRoot,s),i(),this.scrollReady=!0}render(){if(!this.data||this.data.length===0)return"No data";this.updateSettings();let e=this.settings.showLabels?Z`
          <div class="labels">
            ${this.settings.data.map(s=>Z`<div class="lbl">${s.text}</div>`)}
          </div>
        `:Z``;return Z`
      <div class="time-scale" @scroll=${this.onScroll}>
        ${ye.bind(this)(this.settings)}
      </div>
      <div class="gantt-v">
        <div class="labels-container">
          <slot>${e}</slot>
        </div>
        <div class="gantt" @scroll=${this.onScroll}>${ge.bind(this)()}</div>
      </div>
    `}onScroll(e){e.target===this.ganttElement&&this.timeScaleElement.scroll({left:this.ganttElement.scrollLeft}),e.target===this.timeScaleElement&&this.ganttElement.scroll({left:this.timeScaleElement.scrollLeft})}};O.styles=[k`
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
        box-shadow: 6px 0 5px -4px #88888878;
        height: fit-content;
        box-sizing: border-box;
        z-index: 1;
        margin: 0;
        padding: 0;
        margin-top: calc(var(--gantt-layout-line-width) / 2);
      }
    `,be,$e,xe,ve],tt([ot({type:Object,attribute:!1})],O.prototype,"options",2),tt([ot({type:Array,attribute:!1})],O.prototype,"data",2),O=tt([Lt("wc-gantt")],O);export{O as WCGantt};
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
