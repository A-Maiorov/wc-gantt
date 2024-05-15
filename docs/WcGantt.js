var Ce=Object.defineProperty;var Me=Object.getOwnPropertyDescriptor;var st=(e,t,n,s)=>{for(var i=s>1?void 0:s?Me(t,n):t,r=e.length-1,o;r>=0;r--)(o=e[r])&&(i=(s?o(t,n,i):o(i))||i);return s&&i&&Ce(t,n,i),i};function T(e,t){let n=new Date(e.valueOf());return n.setDate(n.getDate()+t),n}function Ht(e,t){let n=[],s=new Date(e);for(s.setHours(1,0,0,0);s.getTime()<=t;)n.push(s.getTime()),s=T(s,1);return n}function it(e,t){let n=[],s=new Date(e.getFullYear(),e.getMonth(),e.getDate(),1),i=s.getDay();i!==1&&s.setDate(s.getDate()-i+1),n.push(new Date(s.getTime()));let r=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1),o=r.getDay();for(o!==1&&r.setDate(r.getDate()+(7-o)),n.push(new Date(r.getTime()));s<r;)s.setDate(s.getDate()+7),n.push(new Date(s.getTime()));return n}function Pt(e,t){return e&&t?e>t?t:e:e||t}function Lt(e,t){return e&&t?e<t?t:e:e||t}function It(e){return e.map(t=>`${t[0]},${t[1]}`).join(" ")}function Rt(e){let t=new Date(e.getFullYear(),0,1),n=Math.floor((e.getTime()-t.getTime())/(24*60*60*1e3));return Math.ceil(n/7)+1}var Gt=e=>(t,n)=>{n!==void 0?n.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};var rt=globalThis,ot=rt.ShadowRoot&&(rt.ShadyCSS===void 0||rt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wt=Symbol(),Vt=new WeakMap,j=class{constructor(t,n,s){if(this._$cssResult$=!0,s!==wt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o,n=this.t;if(ot&&t===void 0){let s=n!==void 0&&n.length===1;s&&(t=Vt.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Vt.set(n,t))}return t}toString(){return this.cssText}},Ut=e=>new j(typeof e=="string"?e:e+"",void 0,wt),D=(e,...t)=>{let n=e.length===1?e[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new j(n,e,wt)},_t=(e,t)=>{if(ot)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(let n of t){let s=document.createElement("style"),i=rt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=n.cssText,e.appendChild(s)}},at=ot?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(let s of t.cssRules)n+=s.cssText;return Ut(n)})(e):e;var{is:He,defineProperty:Pe,getOwnPropertyDescriptor:Le,getOwnPropertyNames:Ie,getOwnPropertySymbols:Re,getPrototypeOf:Ge}=Object,P=globalThis,Ot=P.trustedTypes,Ve=Ot?Ot.emptyScript:"",Et=P.reactiveElementPolyfillSupport,Y=(e,t)=>e,X={toAttribute(e,t){switch(t){case Boolean:e=e?Ve:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},lt=(e,t)=>!He(e,t),Nt={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:lt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),P.litPropertyMetadata??(P.litPropertyMetadata=new WeakMap);var C=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Nt){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,n);i!==void 0&&Pe(this.prototype,t,i)}}static getPropertyDescriptor(t,n,s){let{get:i,set:r}=Le(this.prototype,t)??{get(){return this[n]},set(o){this[n]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){let a=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Nt}static _$Ei(){if(this.hasOwnProperty(Y("elementProperties")))return;let t=Ge(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Y("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Y("properties"))){let n=this.properties,s=[...Ie(n),...Re(n)];for(let i of s)this.createProperty(i,n[i])}let t=this[Symbol.metadata];if(t!==null){let n=litPropertyMetadata.get(t);if(n!==void 0)for(let[s,i]of n)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[n,s]of this.elementProperties){let i=this._$Eu(n,s);i!==void 0&&this._$Eh.set(i,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let n=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)n.unshift(at(i))}else t!==void 0&&n.push(at(t));return n}static _$Eu(t,n){let s=n.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(n=>this.enableUpdating=n),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(n=>n(this))}addController(t){var n;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((n=t.hostConnected)==null||n.call(t))}removeController(t){var n;(n=this._$EO)==null||n.delete(t)}_$E_(){let t=new Map,n=this.constructor.elementProperties;for(let s of n.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return _t(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostConnected)==null?void 0:s.call(n)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(n=>{var s;return(s=n.hostDisconnected)==null?void 0:s.call(n)})}attributeChangedCallback(t,n,s){this._$AK(t,s)}_$EC(t,n){var r;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:X).toAttribute(n,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,n){var r;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:X;this._$Em=i,this[i]=a.fromAttribute(n,o.type),this._$Em=null}}requestUpdate(t,n,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??lt)(this[t],n))return;this.P(t,n,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,s){this._$AL.has(t)||this._$AL.set(t,n),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1,n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(n)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(n)}willUpdate(t){}_$AE(t){var n;(n=this._$EO)==null||n.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(n=>this._$EC(n,this[n]))),this._$EU()}updated(t){}firstUpdated(t){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[Y("elementProperties")]=new Map,C[Y("finalized")]=new Map,Et==null||Et({ReactiveElement:C}),(P.reactiveElementVersions??(P.reactiveElementVersions=[])).push("2.0.4");var Ue={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:lt},Oe=(e=Ue,t,n)=>{let{kind:s,metadata:i}=n,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(n.name,e),s==="accessor"){let{name:o}=n;return{set(a){let h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,e)},init(a){return a!==void 0&&this.P(o,void 0,e),a}}}if(s==="setter"){let{name:o}=n;return function(a){let h=this[o];t.call(this,a),this.requestUpdate(o,h,e)}}throw Error("Unsupported decorator location: "+s)};function ct(e){return(t,n)=>typeof n=="object"?Oe(e,t,n):((s,i,r)=>{let o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,n)}var K=globalThis,dt=K.trustedTypes,zt=dt?dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Dt="$lit$",M=`lit$${(Math.random()+"").slice(9)}$`,Tt="?"+M,Ne=`<${Tt}>`,V=document,Q=()=>V.createComment(""),Z=e=>e===null||typeof e!="object"&&typeof e!="function",Yt=Array.isArray,Xt=e=>Yt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",At=`[ 	
\f\r]`,J=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Wt=/-->/g,Ft=/>/g,R=RegExp(`>|${At}(?:([^\\s"'>=/]+)(${At}*=${At}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Bt=/'/g,qt=/"/g,Jt=/^(?:script|style|textarea|title)$/i,Kt=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),et=Kt(1),y=Kt(2),H=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),jt=new WeakMap,G=V.createTreeWalker(V,129);function Qt(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return zt!==void 0?zt.createHTML(t):t}var Zt=(e,t)=>{let n=e.length-1,s=[],i,r=t===2?"<svg>":"",o=J;for(let a=0;a<n;a++){let h=e[a],d,p,l=-1,m=0;for(;m<h.length&&(o.lastIndex=m,p=o.exec(h),p!==null);)m=o.lastIndex,o===J?p[1]==="!--"?o=Wt:p[1]!==void 0?o=Ft:p[2]!==void 0?(Jt.test(p[2])&&(i=RegExp("</"+p[2],"g")),o=R):p[3]!==void 0&&(o=R):o===R?p[0]===">"?(o=i??J,l=-1):p[1]===void 0?l=-2:(l=o.lastIndex-p[2].length,d=p[1],o=p[3]===void 0?R:p[3]==='"'?qt:Bt):o===qt||o===Bt?o=R:o===Wt||o===Ft?o=J:(o=R,i=void 0);let c=o===R&&e[a+1].startsWith("/>")?" ":"";r+=o===J?h+Ne:l>=0?(s.push(d),h.slice(0,l)+Dt+h.slice(l)+M+c):h+M+(l===-2?a:c)}return[Qt(e,r+(e[n]||"<?>")+(t===2?"</svg>":"")),s]},tt=class e{constructor({strings:t,_$litType$:n},s){let i;this.parts=[];let r=0,o=0,a=t.length-1,h=this.parts,[d,p]=Zt(t,n);if(this.el=e.createElement(d,s),G.currentNode=this.el.content,n===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=G.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(Dt)){let m=p[o++],c=i.getAttribute(l).split(M),u=/([.?@])?(.*)/.exec(m);h.push({type:1,index:r,name:u[2],strings:c,ctor:u[1]==="."?ut:u[1]==="?"?mt:u[1]==="@"?ft:O}),i.removeAttribute(l)}else l.startsWith(M)&&(h.push({type:6,index:r}),i.removeAttribute(l));if(Jt.test(i.tagName)){let l=i.textContent.split(M),m=l.length-1;if(m>0){i.textContent=dt?dt.emptyScript:"";for(let c=0;c<m;c++)i.append(l[c],Q()),G.nextNode(),h.push({type:2,index:++r});i.append(l[m],Q())}}}else if(i.nodeType===8)if(i.data===Tt)h.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(M,l+1))!==-1;)h.push({type:7,index:r}),l+=M.length-1}r++}}static createElement(t,n){let s=V.createElement("template");return s.innerHTML=t,s}};function U(e,t,n=e,s){var o,a;if(t===H)return t;let i=s!==void 0?(o=n._$Co)==null?void 0:o[s]:n._$Cl,r=Z(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,n,s)),s!==void 0?(n._$Co??(n._$Co=[]))[s]=i:n._$Cl=i),i!==void 0&&(t=U(e,i._$AS(e,t.values),i,s)),t}var pt=class{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:n},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??V).importNode(n,!0);G.currentNode=i;let r=G.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let d;h.type===2?d=new W(r,r.nextSibling,this,t):h.type===1?d=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(d=new gt(r,this,t)),this._$AV.push(d),h=s[++a]}o!==(h==null?void 0:h.index)&&(r=G.nextNode(),o++)}return G.currentNode=V,i}p(t){let n=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,n),n+=s.strings.length-2):s._$AI(t[n])),n++}},W=class e{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,n,s,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,n=this._$AM;return n!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=U(this,t,n),Z(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==H&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Xt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==S&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.T(V.createTextNode(t)),this._$AH=t}$(t){var r;let{values:n,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=tt.createElement(Qt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(n);else{let o=new pt(i,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let n=jt.get(t.strings);return n===void 0&&jt.set(t.strings,n=new tt(t)),n}k(t){Yt(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,s,i=0;for(let r of t)i===n.length?n.push(s=new e(this.S(Q()),this.S(Q()),this,this.options)):s=n[i],s._$AI(r),i++;i<n.length&&(this._$AR(s&&s._$AB.nextSibling,i),n.length=i)}_$AR(t=this._$AA.nextSibling,n){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,n);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var n;this._$AM===void 0&&(this._$Cv=t,(n=this._$AP)==null||n.call(this,t))}},O=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,s,i,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=n,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}_$AI(t,n=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=U(this,t,n,0),o=!Z(t)||t!==this._$AH&&t!==H,o&&(this._$AH=t);else{let a=t,h,d;for(t=r[0],h=0;h<r.length-1;h++)d=U(this,a[s+h],n,h),d===H&&(d=this._$AH[h]),o||(o=!Z(d)||d!==this._$AH[h]),d===S?t=S:t!==S&&(t+=(d??"")+r[h+1]),this._$AH[h]=d}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ut=class extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},mt=class extends O{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},ft=class extends O{constructor(t,n,s,i,r){super(t,n,s,i,r),this.type=5}_$AI(t,n=this){if((t=U(this,t,n,0)??S)===H)return;let s=this._$AH,i=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==S&&(s===S||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n;typeof this._$AH=="function"?this._$AH.call(((n=this.options)==null?void 0:n.host)??this.element,t):this._$AH.handleEvent(t)}},gt=class{constructor(t,n,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){U(this,t)}},te={P:Dt,A:M,C:Tt,M:1,L:Zt,R:pt,D:Xt,V:U,I:W,H:O,N:mt,U:ft,B:ut,F:gt},kt=K.litHtmlPolyfillSupport;kt==null||kt(tt,W),(K.litHtmlVersions??(K.litHtmlVersions=[])).push("3.1.2");var Ct=(e,t,n)=>{let s=(n==null?void 0:n.renderBefore)??t,i=s._$litPart$;if(i===void 0){let r=(n==null?void 0:n.renderBefore)??null;s._$litPart$=i=new W(t.insertBefore(Q(),r),r,void 0,n??{})}return i._$AI(e),i};var L=class extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var n;let t=super.createRenderRoot();return(n=this.renderOptions).renderBefore??(n.renderBefore=t.firstChild),t}update(t){let n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ct(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return H}},ee;L._$litElement$=!0,L.finalized=!0,(ee=globalThis.litElementHydrateSupport)==null||ee.call(globalThis,{LitElement:L});var Mt=globalThis.litElementPolyfillSupport;Mt==null||Mt({LitElement:L});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var ne=e=>{let t=e.nested==null&&(!e.type||e.type==="activity");return t&&!e.type&&(e.type="activity"),t},se=e=>{let t="type"in e&&e.nested==null&&e.percent==null&&e.type==="milestone";return t&&(e.end=e.start),t},yt=e=>{var n,s;let t="nested"in e&&Array.isArray(e.nested)&&e.nested.length>0&&(!e.type||e.type==="group");if(t){e.type="group";let i=ie(e);e.start=new Date(Math.min(((n=e.start)==null?void 0:n.getTime())??1/0,i.start)),e.end=new Date(Math.max(((s=e.end)==null?void 0:s.getTime())??-1/0,i.end))}return t};function ie(e){var s,i,r;let t=0,n=0;for(let o of e.nested)if(o.type==="group"||o.nested&&o.nested.length>0){let a=ie(o);t=t>0?Math.min(t,a.start):a.start,n=Math.max(n,a.end)}else t=t>0?Math.min(t,((s=o.start)==null?void 0:s.getTime())??1/0):(i=o.start)==null?void 0:i.getTime(),n=Math.max(n,((r=o.end)==null?void 0:r.getTime())??-1/0);return{start:t,end:n}}var re={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},oe=e=>(...t)=>({_$litDirective$:e,values:t}),$t=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,n,s){this._$Ct=t,this._$AM=n,this._$Ci=s}_$AS(t,n){return this.update(t,n)}update(t,n){return this.render(...n)}};var{I:ze}=te;var ae=()=>document.createComment(""),F=(e,t,n)=>{var r;let s=e._$AA.parentNode,i=t===void 0?e._$AB:t._$AA;if(n===void 0){let o=s.insertBefore(ae(),i),a=s.insertBefore(ae(),i);n=new ze(o,a,e,e.options)}else{let o=n._$AB.nextSibling,a=n._$AM,h=a!==e;if(h){let d;(r=n._$AQ)==null||r.call(n,e),n._$AM=e,n._$AP!==void 0&&(d=e._$AU)!==a._$AU&&n._$AP(d)}if(o!==i||h){let d=n._$AA;for(;d!==o;){let p=d.nextSibling;s.insertBefore(d,i),d=p}}}return n},I=(e,t,n=e)=>(e._$AI(t,n),e),We={},le=(e,t=We)=>e._$AH=t,ce=e=>e._$AH,xt=e=>{var s;(s=e._$AP)==null||s.call(e,!1,!0);let t=e._$AA,n=e._$AB.nextSibling;for(;t!==n;){let i=t.nextSibling;t.remove(),t=i}};var he=(e,t,n)=>{let s=new Map;for(let i=t;i<=n;i++)s.set(e[i],i);return s},w=oe(class extends $t{constructor(e){if(super(e),e.type!==re.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,n){let s;n===void 0?n=t:t!==void 0&&(s=t);let i=[],r=[],o=0;for(let a of e)i[o]=s?s(a,o):o,r[o]=n(a,o),o++;return{values:r,keys:i}}render(e,t,n){return this.dt(e,t,n).values}update(e,[t,n,s]){let i=ce(e),{values:r,keys:o}=this.dt(t,n,s);if(!Array.isArray(i))return this.ut=o,r;let a=this.ut??(this.ut=[]),h=[],d,p,l=0,m=i.length-1,c=0,u=r.length-1;for(;l<=m&&c<=u;)if(i[l]===null)l++;else if(i[m]===null)m--;else if(a[l]===o[c])h[c]=I(i[l],r[c]),l++,c++;else if(a[m]===o[u])h[u]=I(i[m],r[u]),m--,u--;else if(a[l]===o[u])h[u]=I(i[l],r[u]),F(e,h[u+1],i[l]),l++,u--;else if(a[m]===o[c])h[c]=I(i[m],r[c]),F(e,i[l],i[m]),m--,c++;else if(d===void 0&&(d=he(o,c,u),p=he(a,l,m)),d.has(a[l]))if(d.has(a[m])){let f=p.get(o[c]),x=f!==void 0?i[f]:null;if(x===null){let _=F(e,i[l]);I(_,r[c]),h[c]=_}else h[c]=I(x,r[c]),F(e,i[l],x),i[f]=null;c++}else xt(i[m]),m--;else xt(i[l]),l++;for(;c<=u;){let f=F(e,h[u+1]);I(f,r[c]),h[c++]=f}for(;l<=m;){let f=i[l++];f!==null&&xt(f)}return this.ut=o,le(e,h),H}});function vt(e){let t=e.timeScale,n=new Date(e.start),s=[],i=n.getMonth(),r=new Date(n.getFullYear(),i,1,1),o=e.scaleHeight*.25,a=t.dateToPx(r);for(;r<=t.end;){let d=`${r.toLocaleString("default",{month:"long"})} ${r.getFullYear()}`;r.setMonth(r.getMonth()+1,1);let p=t.dateToPx(r),l=a+(p-a)/2;s.push({id:d,tpl:y`
      <g>

        <line
          x1=${p}
          x2=${p}
          y1=${0}
          y2=${e.scaleHeight/2}
          class="line"       
        />   
        
        <text x=${l} y=${o} 
             class="text small">${d}</text>                
      </g>
      `}),a=p}return y`<g id="yearMonth">
  ${w(s,h=>h.id,h=>h.tpl)}  
  </g>`}function de(e){let t=e.timeScale,n=new Date(t.startMs),s=[];for(let i=0;i<=t.totalDays-1;i++){let r=i*t.pxPerDay,o=r+t.pxPerDay/2,a=n.getDate();s.push({id:i,tpl:y`
      <g>             
        
        <line
          x1=${r}
          x2=${r}
          y1=${e.scaleHeight/2}
          y2=${e.scaleHeight}
          class="line"       
        />   
        <text 
          id=${i} 
          x=${o} 
          y=${e.scaleHeight*.75} 
          class="text small">
          ${a}
        </text>

   
      </g>`}),n.setDate(n.getDate()+1)}return y`
  <g id="dayHeader">
    ${vt({...e})}
    <line
        x1=${0}
        x2=${e.width}
        y1=${e.scaleHeight/2}
        y2=${e.scaleHeight/2}
        class="line"
        
      />
    ${w(s,i=>i.id,i=>i.tpl)}   
  </g>`}function pe(e){let t=it(e.timeScale.start,e.timeScale.end),n=[],s=e.timeScale.pxPerDay,i=t.length-1,r=e.scaleHeight/4;for(let o=0;o<i;o++){let a=new Date(t[o]),h=e.timeScale.dateToPx(a),d=a.getDate(),p=T(a,-1).getDate(),l="week_"+o+"_"+p+"-"+d,m=e.scaleHeight/6,c=e.scaleHeight-m,u=r*2+m,f=Rt(T(a,1));n.push({id:l,tpl:y`
      <g id=${l}> 
          <text x=${h-3} y=${c} class="text small end">
          ${p}
        </text>       

        <line
          x1=${h}
          x2=${h}
          y1=${e.scaleHeight/2}
          y2=${e.scaleHeight}
          class="line"       
        />    
        <text x=${h+3} y=${c} class="text small start">
          ${d}
        </text>          
        <text x=${h+3*s} y=${u} 
          class="text tiny start">
            Week ${f}
        </text>    
      </g>`})}return y`
    <g id="weekHeader">
      ${vt({...e})}
      <line
        x1=${0}
        x2=${e.width}
        y1=${e.scaleHeight/2}
        y2=${e.scaleHeight/2}
        class="line"
        
      />
      ${w(n,o=>o.id,o=>o.tpl)}
     
    </g>
  `}function ue(e,t){e.unshift(t.timeScale.startMs),e.push(t.timeScale.end.getTime());let n=[],s=t.timeScale.start.getFullYear(),i=t.timeScale.end.getFullYear(),r=0,o=t.timeScale.dateToPx(t.timeScale.end),a=t.scaleHeight/4,h=0,d=a*2;for(;s<=i;){let p=new Date(s+1,0,1,1),l=t.timeScale.dateToPx(p);l>o&&(l=o),n.push({id:"y_"+s,tpl:y`
      <g>
      
        <line
          x1=${l}
          x2=${l}
          y1=${h}
          y2=${d}
          class="line"       
        />   
          <text 
            x=${(l-r)/2+r} 
            y=${t.scaleHeight*.25} 
            class="text small">
            ${s}
          </text>        
      </g>`}),s=p.getFullYear(),r=l}return y`<g id="year">
   ${w(n,p=>p.id,p=>p.tpl)}  
  </g>`}function me(e){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=Ht(e.timeScale.startMs,e.timeScale.end.getTime()).filter(a=>new Date(a).getDate()===1);s.unshift(e.timeScale.startMs),s.push(e.timeScale.end.getTime());let i=[],r=s.length-1;for(let a=0;a<r;a++){let d=new Date(s[a]).getMonth(),p=e.timeScale.dateToPx(new Date(s[a])),l=(s[a+1]-s[a])/e.timeScale.msPerPx,m="hm_"+d,c=p+l/2,u=y`
    
      <line
        x1=${p}
        x2=${p}
        y1=${e.scaleHeight/2}
        y2=${e.scaleHeight}
        class="line"       
      />    
      `;i.push({id:m,tpl:y`
      <g>
        ${a===0?null:u}
        ${l>30?y`
          <text x=${c} y=${e.scaleHeight*.75} class="text small">
            ${t[d]}
          </text>`:null}
      </g>
      `})}let o=s.filter(a=>new Date(a).getMonth()===0);return y`
    <g id="monthHeader">
      ${ue(o,e)}     
      <line
        x1=${0}
        x2=${e.width}
        y1=${e.scaleHeight/2}
        y2=${e.scaleHeight/2}
        class="line"
        
      />
       ${w(i,a=>a.id,a=>a.tpl)}  
    </g>
  `}function fe(e){let t=[];for(let s=0;s<e.data.length;s++){let i=(s+1)*e.rowHeight+e.lineWidth,r=s*e.rowHeight+e.lineWidth,o=y``;e.data[s].type==="group"&&(o=y`
      <rect
        x=${0}
        y=${r}
        width=${e.width}
        height=${e.rowHeight}        
        
        class="group-bg-color"      
      ></rect>
    `),t.push({id:s,tpl:y`
        ${o}
        <line key=${s} x1="0" x2=${e.width} y1=${i} y2=${i} class="line"/>`})}let n=null;return this.settings.timeScale.viewMode==="week"&&(n=Be(e)),this.settings.timeScale.viewMode==="day"&&(n=Fe(e)),y`   
    ${n}
    <g id="grid">
    
      <line
          QQ
          x1=${0}
          x2=${e.width}
          y1=${e.lineWidth}
          y2=${e.lineWidth}
          class="line"
          
        />
      ${w(t,s=>s.id,s=>s.tpl)}           
    </g>
  `}function Fe(e){let t=e.timeScale,n=new Date(t.startMs),s=[],i=e.height;for(let r=0;r<=t.totalDays-1;r++){let o=n.getDay(),a=o===0||o===6,h=r*t.pxPerDay;a&&s.push({id:n.toDateString(),tpl:y`<rect x=${h} y=${0} width=${t.pxPerDay} height=${i} class="weekend" />`}),n.setDate(n.getDate()+1)}return y`
  <g id="weekends">
    ${w(s,r=>r.id,r=>r.tpl)}   
  </g>`}function Be(e){let t=it(e.timeScale.start,e.timeScale.end),n=[],s=0,i=e.height,r=e.timeScale.pxPerDay,o=t.length-1;for(let a=0;a<o;a++){let h=new Date(t[a]),d=e.timeScale.dateToPx(h),p=h.getDate(),l=T(h,-1).getDate(),m="week_"+a+"_"+l+"-"+p;n.push({id:m,tpl:y`      
        <rect x=${d-r*2} y=${s} width=${r*2} height=${i} class="weekend"/>                 
      `})}return y`
    <g id="weekends">
      ${w(n,a=>a.id,a=>a.tpl)}     
    </g>
  `}function ge(e){let t=e.map(r=>({x:r[0],y:r[1]})),n=["M"+t[0].x+","+t[0].y],s=3,i=t.length-1;t[i-1].x<t[i].x?t[i].x+=s/2:t[i].x-=s/2;for(let r=0;r<t.length;r++){let o=r+1>i?(r+1)%t.length:r+1,a=r+2>i?(r+2)%t.length:r+2,h=t[r],d=t[o],p=t[a],l=Math.sqrt(Math.pow(h.x-d.x,2)+Math.pow(h.y-d.y,2)),m=(l-s)/l,c=[((1-m)*h.x+m*d.x).toFixed(1),((1-m)*h.y+m*d.y).toFixed(1)],u=Math.sqrt(Math.pow(d.x-p.x,2)+Math.pow(d.y-p.y,2)),f=s/u;if(r!==i)if(n.push("L"+c.join(",")),r===i-1)n.push("L"+d.x+","+d.y);else{let x=[((1-f)*d.x+f*p.x).toFixed(1),((1-f)*d.y+f*p.y).toFixed(1)];n.push("Q"+d.x+","+d.y+","+x.join(","))}}return n.join(" ")}var qe;function ye(e){qe=e;let t=new Map;return e.data.forEach(n=>{t.set(n.id.toString(),n)}),y`
    <g class="link-lines" >
      ${e.data.map(n=>n.links?n.links.map(s=>je(s,e,t.get(s.source.toString()),t.get(s.target.toString()))):null)}
    </g>`}function je(e,t,n,s){let i=s??t.data.find($=>$.id.toString()===e.target.toString()),r=n??t.data.find($=>$.id.toString()===e.source.toString());if(!i||!i.start||!i.end||!r||!r.start||!r.end)return null;let o=t.rowHeight/2,a=t.data.findIndex($=>$.id===r.id),h=t.data.findIndex($=>$.id===i.id),d=12,p=3,l=i.type==="milestone"?t.barHeight/2:0,m=o+a*t.rowHeight,c=o+h*t.rowHeight,u=t.barHeight/2+4;m>c&&(u=-u);let f=t.timeScale.dateToPx(r.end),x=t.timeScale.dateToPx(r.start),_=t.timeScale.dateToPx(i.end),A=t.timeScale.dateToPx(i.start),b=($,g)=>{let v=`${e.source}-${e.target}-${e.type}`;return y`
    <g 
      id=${v} 
      class="link"
      data-source=${e.source} 
      data-target=${e.target} 
      data-link-type=${e.type}>
      <path d=${ge($)} class="link-line" ></path>     
      <polygon points=${It(g)} class="line-arrow" />
    </g>`};if(e.type==="FS"){let $=f,g=A-l,v=[[$,m],[$+d,m]];g-$>=2*d?v.push([$+d,c]):(v.push([$+d,c-u]),v.push([g-d,c-u]),v.push([g-d,c])),v.push([g-p,c]);let k=[[g-p,c-p],[g,c],[g-p,c+p]];return b(v,k)}if(e.type==="FF"){let $=f,g=_+l,v=[[$,m],[$+d,m]];g<=$?v.push([$+d,c]):(v.push([$+d,c-u]),v.push([g+d,c-u]),v.push([g+d,c])),v.push([g+p,c]);let k=[[g+p,c-p],[g,c],[g+p,c+p]];return b(v,k)}if(e.type==="SS"){let $=x,g=A-l,v=[[$,m],[$-d,m]];$<=g?v.push([$-d,c]):(v.push([$-d,c-u]),v.push([g-d,c-u]),v.push([g-d,c])),v.push([g-p,c]);let k=[[g-p,c-p],[g,c],[g-p,c+p]];return b(v,k)}if(e.type==="SF"){let $=x,g=_+l,v=[[$,m],[$-d,m]];$-g>=2*d?v.push([$-d,c]):(v.push([$-d,c-u]),v.push([g+d,c-u]),v.push([g+d,c])),v.push([g+p,c]);let k=[[g+p,c-p],[g,c],[g+p,c+p]];return b(v,k)}return null}function Ye(e,t,n,s,i,r){let o=n/2,a=[[0,o],[o,0],[n,o],[o,n]].map(h=>`${h[0]},${h[1]}`).join(" ");return{id:i,tpl:y`
    <svg 
      x=${e-o}
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
  `}}function $e(e){let t=(e.rowHeight-e.barHeight)/2,n=e.timeScale.dateToPx(new Date(new Date().setHours(1,0,0,0))),s=e.timeScale,i=e.data.map((r,o)=>{let a="bar_"+r.id;if(!r.start||!r.end)return null;let h=()=>{if(this.suppressClick)return;let Te=new CustomEvent("item-click",{detail:r});this.dispatchEvent(Te)},d=s.dateToPx(r.start),p=t+o*e.rowHeight,l=e.barHeight/3;r.type==="group"&&(p=(e.rowHeight-l)/2+o*e.rowHeight);let m=e.barHeight/2+1;if(r.type==="milestone")return Ye(d,p,e.barHeight,h,a,r);let c=s.pxForTimeSpan(r.start,r.end),u=c*r.percent,f="gantt-bar";f+=r.type==="group"?" group":"";let x=!1,_=!1;e.showDelay&&(d+u<n&&r.percent<.999999&&(x=!0,_=!1),d+c<n&&r.percent<.999999&&(x=!1,_=!0));let A=e.rowHeight/6,b=e.rowHeight/6,$=1,g=A*2+b+$*2,v=y`
    <rect
      x=${g}
      y="1"
      width=${c}
      height=${r.type==="group"?l:e.barHeight}
      rx=${1.8}
      ry=${1.8}
      class="bar-border"      
      @click=${h}    
    />
    `,k=y`
      <rect
        x=${g}        
        y="1"
        width=${c}
        height=${r.type==="group"?l:e.barHeight}
        rx=${1.8}
        ry=${1.8}
        class="back"      
        @click=${h}    
      />
      `,St=u>1e-6?y`
          <rect
            y="1"
            x=${g}            
            width=${u}
            height=${r.type==="group"?l:e.barHeight}
            rx=${1.8}
            ry=${1.8}
            class="front"
            @click=${h}
            />`:null,z=y``;return r.type==="activity"&&(z=y`
        <circle
          class=${r.type+" ctl-start"}
          data-id=${r.id}           
          cx=${$+A}
          cy=${m}
          r=${A}
        />
        <circle
          class=${r.type+" ctl-finish"}
          data-id=${r.id}
          cx=${c+g+b+A}
          cy=${m}
          r=${A}
        />
        <g class="ctl-resize-start">
          <rect 
            x=${g+b}
            y="1"
            height=${e.barHeight} 
            width=${e.barHeight} 
            style="opacity:0"
          />
          <svg 
            y="1"
            x=${g+b}
            height=${e.barHeight} 
            width=${e.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${g+b-.5+e.barHeight/2} 
            y="3" width="1px" height=${e.barHeight-4}/>
        </g>
        <g class="ctl-resize-end">
          <rect 
            y="1"
            x=${c}
            height=${e.barHeight} 
            width=${e.barHeight} 
            style="opacity:0"
          />
          <svg 
            x=${c}
            y="1"
            height=${e.barHeight} 
            width=${e.barHeight} 
            viewBox="0 -960 960 960" >
            <path d="M280-320 120-480l160-160 43 43-88 87h490l-87-88 42-42 160 160-160 160-42-42 87-88H235l87 88-42 42Z"/>
          </svg>
          <rect 
            x=${c-.5+e.barHeight/2} 
            y="3" width="1px" height=${e.barHeight-4}/>
        </g>
      `),{id:a,tpl:y` 
      <svg 
        x=${d-g} 
        y=${p-1}              
        id=${a}
        key=${o}       
        .item=${r}
        data-item-id=${r.id}        
        class=${f}
        ?warning=${x}
        ?danger=${_}
      >     
       
        ${k}
        ${St}
        ${v}
        ${z}
    
      </svg>
    `}});return y`
    <g>      
        <line             
          x1=${n}
          x2=${n}
          y1=${0}
          y2=${e.height}
          class="today-line"
        />
      
      ${w(i,r=>r.id,r=>r.tpl)} 
    </g>
  `}function xe(){let e=`0 0 ${this.settings.width} ${this.settings.height}`,t=this.settings.showLinks?ye.bind(this)(this.settings):null;return y`
    <svg id="gantt" 
      width=${this.settings.width} 
      height=${this.settings.height} 
      viewBox=${e}>
    
     

      ${fe.bind(this)(this.settings)}           
      ${t}
      ${$e.bind(this)(this.settings)}     
     
    </svg>
  `}function ve(e){let t;switch(e.viewMode){case"day":t=de.bind(this)(e);break;case"month":t=me.bind(this)(e);break;case"week":t=pe.bind(this)(e);break}let n=`0 0 ${this.settings.width} ${this.settings.scaleHeight}`;return y`
   <svg id="gantt-h" 
      width=${this.settings.width} 
      height=${this.settings.scaleHeight} 
      viewBox=${n}>
      <defs>
        <linearGradient id="lineScaleGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="var(--gantt-layout-line-scale-stroke)"/>              
          <stop offset="100%" stop-color="var(--gantt-chart-bg-color)"/>
        </linearGradient>       
      </defs>
      ${t}
    </svg>
    `}var be=D`
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
`;var Se=D`
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
`;var we=D`
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
`;var _e=D`
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
`;function Ee(){let e=this.shadowRoot.getElementById("gantt");function t(l){return l.classList.contains("ctl-start")}function n(l){return l.classList.contains("ctl-finish")}let s=(l,m)=>{let c=l.dataset.id,u=m.dataset.id;if(c===u)return;let f=this.settings.data.find(g=>g.id.toString()===c),x=this.settings.data.find(g=>g.id.toString()===u),_=t(l)?"S":"F",A=t(m)?"S":"F";f.type==="milestone"&&(_="F"),x.type==="milestone"&&(A="S");let b={source:c,target:u,type:`${_}${A}`},$=this.settings.data.find(g=>g.id==c);if($){if($.links.find(z=>z.source===b.source&&z.target===b.target&&z.type===b.type))return;let v=!1,k={link:b,cancel:()=>{v=!0}},St=new CustomEvent("before-link-added",{detail:k});this.dispatchEvent(St),v||($.links.push(b),this.requestUpdate())}},i="http://www.w3.org/2000/svg",r=!1,o=null,a=null,h=l=>l.parentElement.x.baseVal.value+l.cx.baseVal.value,d=l=>l.parentElement.y.baseVal.value+l.cy.baseVal.value;e.addEventListener("mousedown",l=>{if(!t(l.target)&&!n(l.target))return;l.preventDefault(),o=l.target;let m=o.parentElement;this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish").forEach(f=>{f.setAttribute("active","active")}),r=!0,a=document.createElementNS(i,"line");let c=h(o).toString(),u=d(o).toString();a.setAttribute("x1",c),a.setAttribute("y1",u),a.setAttribute("x2",c),a.setAttribute("y2",u),a.classList.add("add-link-line"),e.appendChild(a)}),e.addEventListener("mousemove",l=>{let m=l.target;if(r)if(l.preventDefault(),t(m)||n(m)){let c=h(m).toString(),u=d(m).toString();a.setAttribute("x2",c),a.setAttribute("y2",u)}else{let c=l.clientX,u=l.clientY,f=e.getBoundingClientRect();a.setAttribute("x2",(c-f.left).toString()),a.setAttribute("y2",(u-f.top).toString())}});let p=l=>{r&&(l.preventDefault(),l.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(m=>{m.removeAttribute("active")}),r=!1,a&&(e.removeChild(a),a=null))};e.addEventListener("mouseup",l=>{p(l);let m=l.target,c=t(m)||n(m);o&&c&&s(o,m),o=null}),this.addEventListener("mouseout",l=>{p(l)})}var B,nt,q=(e,t,n,s)=>{if(!B)return;let i=B.getBoundingClientRect();if(n){let r=new Date(e.start.getTime()+t);if(t>0){t<864e5&&(t=864e5,r=new Date(e.start.getTime()+t));let o=s?nt.pxToDate(s-i.left).getTime():e.start.getTime();if(e.start.getTime()>o)return!1}else{t>864e5*-1&&(t=864e5*-1,r=new Date(e.start.getTime()+t));let o=s?nt.pxToDate(s-i.left).getTime():e.start.getTime();if(e.start.getTime()<o)return!1}e.start=r}else{let r=new Date(e.end.getTime()+t);if(t<0){t>864e5*-1&&(t=864e5*-1,r=new Date(e.end.getTime()+t));let o=s?nt.pxToDate(s-i.left).getTime():e.end.getTime();if(e.end.getTime()<o)return!1}else{t<864e5&&(t=864e5,r=new Date(e.end.getTime()+t));let o=s?nt.pxToDate(s-i.left).getTime():e.end.getTime();if(e.end.getTime()>o)return!1}e.end=r}return!0};function Ae(){B=this.shadowRoot.getElementById("gantt"),nt=this.settings.timeScale;let e=!1,t=!1,n,s,i,r=!1,o=!1;function a(c){var _,A;let u=c.composedPath(),f=!1,x=!1;for(let b of u)if(f=(_=b.classList)==null?void 0:_.contains("ctl-resize-start"),x=(A=b.classList)==null?void 0:A.contains("ctl-resize-end"),f||x)break;return f||x?(r=f,o=x,!0):!1}let h=()=>{r=!1,o=!1,e=!1,n=void 0,i=void 0,t=!1,this.suppressClick},d=c=>{c.preventDefault(),c.stopPropagation(),c.stopImmediatePropagation()},p=c=>{!a(c)||e||(t=!0,n=c.composedPath().find(u=>u.classList.contains("gantt-bar")),s=n.dataset.itemId,s&&(d(c),i=this.settings.data.find(u=>u.id.toString()===s)))},l=async c=>{if(!t)return;d(c),e=!0;let u=c.movementX*this.settings.timeScale.msPerPx;if(u===0)return;if(q(i,u,r,c.clientX))for(let x of i.parents)r&&i.start.getTime()===x.start.getTime()&&q(x,u,r,c.clientX),o&&i.end.getTime()===x.end.getTime()&&q(x,u,r,c.clientX);this.requestUpdate()},m=c=>{if(t){if(e){this.___lastMovement=new Date().getTime();let u=new CustomEvent("item-resized",{detail:i});this.dispatchEvent(u)}h(),d(c)}};B.addEventListener("mousedown",p),B.addEventListener("mousemove",l),B.addEventListener("mouseup",m),this.addEventListener("mouseout",c=>{h()})}function ke(){let e=this.shadowRoot.getElementById("gantt"),t=!1,n=!1,s,i,r,o;function a(u){let f=u;return f.tagName==="rect"&&(f.classList.contains("back")||f.classList.contains("front")||f.classList.contains("bar-border"))}let h=()=>{t=!1,i=void 0,o=void 0,n=!1,s=void 0,this.suppressClick},d=u=>{u.preventDefault(),u.stopPropagation(),u.stopImmediatePropagation()},p=u=>{let f=u.target;!a(f)||t||(s=u.clientX,n=!0,i=f.parentElement,r=i.dataset.itemId,r&&(d(u),o=this.settings.data.find(x=>x.id.toString()===r)))},l=this.settings.timeScale.pxPerDay,m=async u=>{if(n===!1||s===void 0||(d(u),t=!0,Math.abs(s-u.clientX)<l))return;let f=u.movementX>0?1:-1;if(yt(o))for(let x of o.nested)x.start=new Date(x.start.getTime()+864e5*f),x.end=new Date(x.end.getTime()+864e5*f);for(let x of o.parents)o.start.getTime()===x.start.getTime()?q(x,864e5*f,!0):o.end.getTime()===x.end.getTime()&&q(x,864e5*f,!1);o.start=new Date(o.start.getTime()+864e5*f),o.end=new Date(o.end.getTime()+864e5*f),s+=l*f,this.requestUpdate()},c=u=>{if(n){if(t){this.___lastMovement=new Date().getTime();let f=new CustomEvent("item-moved",{detail:o});this.dispatchEvent(f)}h(),d(u)}};e.addEventListener("mousedown",p),e.addEventListener("mousemove",m),e.addEventListener("mouseup",c),this.addEventListener("mouseout",u=>{h()})}var De=864e5,bt=class{constructor(t,n,s){this.viewMode=s;let i=new Date(t);i.setHours(1,0,0,0);let r=new Date(n);r.setHours(1,0,0,0),this.start=i,this.end=r,this.startMs=i.getTime(),this.endMs=r.getTime(),this.totalDays=Math.round(Math.abs((this.startMs-r.getTime())/De));let o={month:3,week:4,day:5},a=5;this.totalDays>365?a=1*o[s]:this.totalDays>155?a=4*o[s]:this.totalDays>30&&(a=6*o[s]),this.pxPerDay=a,this.pxPerWeek=a*7,this.msPerPx=De/a}pxToMs(t){return t*this.msPerPx}msToPx(t){return t/this.msPerPx}dateToPx(t){let n=t.getTime()-this.startMs;return this.msToPx(n)}pxToDate(t){let n=this.pxToMs(t);return new Date(this.startMs+n)}pxForTimeSpan(t,n){let s=n.getTime()-t.getTime();return this.msToPx(s)}};var N=class extends L{constructor(){super(...arguments);this.___lastMovement=0;this.interactionReady=!1;this.scrollReady=!1}connectedCallback(){super.connectedCallback()}updateSettings(){var p,l;let n=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),s=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),i=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),r=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-line-width")),o=this.flattenData(this.data),a=((p=this.options)==null?void 0:p.minDate)??null,h=((l=this.options)==null?void 0:l.maxDate)??null;o.forEach(m=>{a=Pt(a,m.start),h=Lt(h,m.end)}),a=a||new Date,h=h||new Date;let d={viewMode:"week",showDelay:!0,showLinks:!0,showLabels:!0};this.settings={...d,...this.options,start:a,end:h,labelsWidth:0,width:0,height:0,scaleHeight:s,rowHeight:n,barHeight:i,lineWidth:r,data:o,timeScale:void 0,...this.options},this.settings.timeScale=new bt(T(a,-1),T(h,7),this.settings.viewMode),this.settings.width=this.settings.timeScale.totalDays*this.settings.timeScale.pxPerDay,this.settings.height=this.settings.data.length*this.settings.rowHeight,this.setupInteractions()}flattenData(n,s,i){var a;let r=[],o=0;for(let h of n){this.validateItem(h);let d=h;d.parents=[],i&&(d.parents=[...i.parents??[],i]),d.path=s?s+"."+o:o.toString(),d.id??(d.id=d.path),r.push(d),((a=h.nested)==null?void 0:a.length)>0&&r.push(...this.flattenData(h.nested,d.path,d)),o++}return r}validateItem(n){if(!(yt(n)||ne(n)||se(n)))throw Error("Gantt item is not valid: id:"+n.id+"; text: "+n.text);n.start??(n.start=new Date),n.end??(n.end=T(n.start,5)),n.start.setHours(1,0,0,0),n.end.setHours(1,0,0,0),n.start>n.end&&Error("Gantt item is not valid: id:"+n.id+"; text: "+n.text+"; End before start")}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.interactionReady||(await this.updateComplete,Ee.bind(this)(),ke.bind(this)(),Ae.bind(this)(),this.interactionReady=!0)}get timeScaleElement(){return this.__timeScaleEl||(this.__timeScaleEl=this.renderRoot.querySelector(".time-scale")),this.__timeScaleEl}get ganttElement(){return this.__ganttEl||(this.__ganttEl=this.renderRoot.querySelector(".gantt")),this.__ganttEl}updated(){if(!this.data||this.data.length===0||this.scrollReady)return;let n=this.renderRoot.querySelector("slot").assignedElements({flatten:!0})[0];if(!n)return;let s={childList:!0,subtree:!0,attributes:!0,characterData:!0},i=()=>{let o=n.clientWidth??0;this.settings.labelsWidth=o,this.timeScaleElement.style.marginLeft=o+"px";let a=this.renderRoot.querySelector(".gantt-v");this.timeScaleElement.style.marginRight=a.offsetWidth-a.clientWidth+"px",this.requestUpdate()},r=new MutationObserver(i);r.observe(n,s),n.shadowRoot&&r.observe(n.shadowRoot,s),i(),this.scrollReady=!0}render(){if(!this.data||this.data.length===0)return"No data";this.updateSettings();let n=this.settings.showLabels?et`
          <div class="labels">
            ${this.settings.data.map(s=>et`<div class="lbl">${s.text}</div>`)}
          </div>
        `:et``;return et`
      <div class="time-scale" @scroll=${this.onScroll}>
        ${ve.bind(this)(this.settings)}
      </div>
      <div class="gantt-v">
        <div class="labels-container">
          <slot>${n}</slot>
        </div>
        <div class="gantt" @scroll=${this.onScroll}>${xe.bind(this)()}</div>
      </div>
    `}onScroll(n){n.target===this.ganttElement&&this.timeScaleElement.scroll({left:this.ganttElement.scrollLeft}),n.target===this.timeScaleElement&&this.ganttElement.scroll({left:this.timeScaleElement.scrollLeft})}};N.styles=[D`
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
    `,_e,be,Se,we],st([ct({type:Object,attribute:!1})],N.prototype,"options",2),st([ct({type:Array,attribute:!1})],N.prototype,"data",2),N=st([Gt("wc-gantt")],N);export{N as WCGantt};
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
