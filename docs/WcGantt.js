var Ee=Object.defineProperty;var ke=Object.getOwnPropertyDescriptor;var Q=(n,t,e,s)=>{for(var i=s>1?void 0:s?ke(t,e):t,r=n.length-1,o;r>=0;r--)(o=n[r])&&(i=(s?o(t,e,i):o(i))||i);return s&&i&&Ee(t,e,i),i};function M(n,t){let e=new Date(n.valueOf());return e.setDate(e.getDate()+t),e}function Dt(n,t){let e=[],s=new Date(n);for(s.setHours(1,0,0,0);s.getTime()<=t;)e.push(s.getTime()),s=M(s,1);return e}function Ct(n,t){let e=[],s=new Date(n.getFullYear(),n.getMonth(),n.getDate(),1),i=s.getDay();i!==1&&s.setDate(s.getDate()-i+1),e.push(new Date(s.getTime()));let r=new Date(t.getFullYear(),t.getMonth(),t.getDate(),1),o=r.getDay();for(o!==1&&r.setDate(r.getDate()+(7-o)),e.push(new Date(r.getTime()));s<r;)s.setDate(s.getDate()+7),e.push(new Date(s.getTime()));return e}function Tt(n,t){return n&&t?n>t?t:n:n||t}function Mt(n,t){return n&&t?n<t?t:n:n||t}function Ht(n){return n.map(t=>`${t[0]},${t[1]}`).join(" ")}function Pt(n){let t=new Date(n.getFullYear(),0,1),e=Math.floor((n.getTime()-t.getTime())/(24*60*60*1e3));return Math.ceil(e/7)+1}var It=n=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(n,t)}):customElements.define(n,t)};var tt=globalThis,et=tt.ShadowRoot&&(tt.ShadyCSS===void 0||tt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,xt=Symbol(),Lt=new WeakMap,B=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==xt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o,e=this.t;if(et&&t===void 0){let s=e!==void 0&&e.length===1;s&&(t=Lt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&Lt.set(e,t))}return t}toString(){return this.cssText}},Gt=n=>new B(typeof n=="string"?n:n+"",void 0,xt),k=(n,...t)=>{let e=n.length===1?n[0]:t.reduce((s,i,r)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new B(e,n,xt)},vt=(n,t)=>{if(et)n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let e of t){let s=document.createElement("style"),i=tt.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,n.appendChild(s)}},nt=et?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(let s of t.cssRules)e+=s.cssText;return Gt(e)})(n):n;var{is:De,defineProperty:Ce,getOwnPropertyDescriptor:Te,getOwnPropertyNames:Me,getOwnPropertySymbols:He,getPrototypeOf:Pe}=Object,H=globalThis,Rt=H.trustedTypes,Ie=Rt?Rt.emptyScript:"",bt=H.reactiveElementPolyfillSupport,W=(n,t)=>n,j={toAttribute(n,t){switch(t){case Boolean:n=n?Ie:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},st=(n,t)=>!De(n,t),Vt={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:st};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),H.litPropertyMetadata??(H.litPropertyMetadata=new WeakMap);var D=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=Vt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){let s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&Ce(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){let{get:i,set:r}=Te(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get(){return i==null?void 0:i.call(this)},set(o){let a=i==null?void 0:i.call(this);r.call(this,o),this.requestUpdate(t,a,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Vt}static _$Ei(){if(this.hasOwnProperty(W("elementProperties")))return;let t=Pe(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(W("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(W("properties"))){let e=this.properties,s=[...Me(e),...He(e)];for(let i of s)this.createProperty(i,e[i])}let t=this[Symbol.metadata];if(t!==null){let e=litPropertyMetadata.get(t);if(e!==void 0)for(let[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(let[e,s]of this.elementProperties){let i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){let e=[];if(Array.isArray(t)){let s=new Set(t.flat(1/0).reverse());for(let i of s)e.unshift(nt(i))}else t!==void 0&&e.push(nt(t));return e}static _$Eu(t,e){let s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){let t=new Map,e=this.constructor.elementProperties;for(let s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){let t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostConnected)==null?void 0:s.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var s;return(s=e.hostDisconnected)==null?void 0:s.call(e)})}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$EC(t,e){var r;let s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){let o=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:j).toAttribute(e,s.type);this._$Em=t,o==null?this.removeAttribute(i):this.setAttribute(i,o),this._$Em=null}}_$AK(t,e){var r;let s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){let o=s.getPropertyOptions(i),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:j;this._$Em=i,this[i]=a.fromAttribute(e,o.type),this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){if(s??(s=this.constructor.getPropertyOptions(t)),!(s.hasChanged??st)(this[t],e))return;this.P(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,s){this._$AL.has(t)||this._$AL.set(t,e),s.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var s;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(let[r,o]of this._$Ep)this[r]=o;this._$Ep=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[r,o]of i)o.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],o)}let t=!1,e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(s=this._$EO)==null||s.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(e)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(s=>{var i;return(i=s.hostUpdated)==null?void 0:i.call(s)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[W("elementProperties")]=new Map,D[W("finalized")]=new Map,bt==null||bt({ReactiveElement:D}),(H.reactiveElementVersions??(H.reactiveElementVersions=[])).push("2.0.4");var Le={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:st},Ge=(n=Le,t,e)=>{let{kind:s,metadata:i}=e,r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(e.name,n),s==="accessor"){let{name:o}=e;return{set(a){let h=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,h,n)},init(a){return a!==void 0&&this.P(o,void 0,n),a}}}if(s==="setter"){let{name:o}=e;return function(a){let h=this[o];t.call(this,a),this.requestUpdate(o,h,n)}}throw Error("Unsupported decorator location: "+s)};function it(n){return(t,e)=>typeof e=="object"?Ge(n,t,e):((s,i,r)=>{let o=i.hasOwnProperty(r);return i.constructor.createProperty(r,o?{...s,wrapped:!0}:s),o?Object.getOwnPropertyDescriptor(i,r):void 0})(n,t,e)}var q=globalThis,ot=q.trustedTypes,Ut=ot?ot.createPolicy("lit-html",{createHTML:n=>n}):void 0,_t="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,At="?"+C,Re=`<${At}>`,R=document,X=()=>R.createComment(""),J=n=>n===null||typeof n!="object"&&typeof n!="function",Wt=Array.isArray,jt=n=>Wt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",St=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ot=/-->/g,Nt=/>/g,L=RegExp(`>|${St}(?:([^\\s"'>=/]+)(${St}*=${St}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zt=/'/g,Ft=/"/g,Yt=/^(?:script|style|textarea|title)$/i,qt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),Z=qt(1),v=qt(2),T=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Bt=new WeakMap,G=R.createTreeWalker(R,129);function Xt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ut!==void 0?Ut.createHTML(t):t}var Jt=(n,t)=>{let e=n.length-1,s=[],i,r=t===2?"<svg>":"",o=Y;for(let a=0;a<e;a++){let h=n[a],c,d,l=-1,u=0;for(;u<h.length&&(o.lastIndex=u,d=o.exec(h),d!==null);)u=o.lastIndex,o===Y?d[1]==="!--"?o=Ot:d[1]!==void 0?o=Nt:d[2]!==void 0?(Yt.test(d[2])&&(i=RegExp("</"+d[2],"g")),o=L):d[3]!==void 0&&(o=L):o===L?d[0]===">"?(o=i??Y,l=-1):d[1]===void 0?l=-2:(l=o.lastIndex-d[2].length,c=d[1],o=d[3]===void 0?L:d[3]==='"'?Ft:zt):o===Ft||o===zt?o=L:o===Ot||o===Nt?o=Y:(o=L,i=void 0);let p=o===L&&n[a+1].startsWith("/>")?" ":"";r+=o===Y?h+Re:l>=0?(s.push(c),h.slice(0,l)+_t+h.slice(l)+C+p):h+C+(l===-2?a:p)}return[Xt(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),s]},K=class n{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let r=0,o=0,a=t.length-1,h=this.parts,[c,d]=Jt(t,e);if(this.el=n.createElement(c,s),G.currentNode=this.el.content,e===2){let l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=G.nextNode())!==null&&h.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(let l of i.getAttributeNames())if(l.endsWith(_t)){let u=d[o++],p=i.getAttribute(l).split(C),m=/([.?@])?(.*)/.exec(u);h.push({type:1,index:r,name:m[2],strings:p,ctor:m[1]==="."?lt:m[1]==="?"?ct:m[1]==="@"?ht:U}),i.removeAttribute(l)}else l.startsWith(C)&&(h.push({type:6,index:r}),i.removeAttribute(l));if(Yt.test(i.tagName)){let l=i.textContent.split(C),u=l.length-1;if(u>0){i.textContent=ot?ot.emptyScript:"";for(let p=0;p<u;p++)i.append(l[p],X()),G.nextNode(),h.push({type:2,index:++r});i.append(l[u],X())}}}else if(i.nodeType===8)if(i.data===At)h.push({type:2,index:r});else{let l=-1;for(;(l=i.data.indexOf(C,l+1))!==-1;)h.push({type:7,index:r}),l+=C.length-1}r++}}static createElement(t,e){let s=R.createElement("template");return s.innerHTML=t,s}};function V(n,t,e=n,s){var o,a;if(t===T)return t;let i=s!==void 0?(o=e._$Co)==null?void 0:o[s]:e._$Cl,r=J(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),r===void 0?i=void 0:(i=new r(n),i._$AT(n,e,s)),s!==void 0?(e._$Co??(e._$Co=[]))[s]=i:e._$Cl=i),i!==void 0&&(t=V(n,i._$AS(n,t.values),i,s)),t}var at=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){let{el:{content:e},parts:s}=this._$AD,i=((t==null?void 0:t.creationScope)??R).importNode(e,!0);G.currentNode=i;let r=G.nextNode(),o=0,a=0,h=s[0];for(;h!==void 0;){if(o===h.index){let c;h.type===2?c=new N(r,r.nextSibling,this,t):h.type===1?c=new h.ctor(r,h.name,h.strings,this,t):h.type===6&&(c=new dt(r,this,t)),this._$AV.push(c),h=s[++a]}o!==(h==null?void 0:h.index)&&(r=G.nextNode(),o++)}return G.currentNode=R,i}p(t){let e=0;for(let s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}},N=class n{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode,e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=V(this,t,e),J(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==T&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):jt(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==S&&J(this._$AH)?this._$AA.nextSibling.data=t:this.T(R.createTextNode(t)),this._$AH=t}$(t){var r;let{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=K.createElement(Xt(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(e);else{let o=new at(i,this),a=o.u(this.options);o.p(e),this.T(a),this._$AH=o}}_$AC(t){let e=Bt.get(t.strings);return e===void 0&&Bt.set(t.strings,e=new K(t)),e}k(t){Wt(this._$AH)||(this._$AH=[],this._$AR());let e=this._$AH,s,i=0;for(let r of t)i===e.length?e.push(s=new n(this.S(X()),this.S(X()),this,this.options)):s=e[i],s._$AI(r),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,e);t&&t!==this._$AB;){let i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}},U=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,r){this.type=1,this._$AH=S,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=S}_$AI(t,e=this,s,i){let r=this.strings,o=!1;if(r===void 0)t=V(this,t,e,0),o=!J(t)||t!==this._$AH&&t!==T,o&&(this._$AH=t);else{let a=t,h,c;for(t=r[0],h=0;h<r.length-1;h++)c=V(this,a[s+h],e,h),c===T&&(c=this._$AH[h]),o||(o=!J(c)||c!==this._$AH[h]),c===S?t=S:t!==S&&(t+=(c??"")+r[h+1]),this._$AH[h]=c}o&&!i&&this.j(t)}j(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},lt=class extends U{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===S?void 0:t}},ct=class extends U{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==S)}},ht=class extends U{constructor(t,e,s,i,r){super(t,e,s,i,r),this.type=5}_$AI(t,e=this){if((t=V(this,t,e,0)??S)===T)return;let s=this._$AH,i=t===S&&s!==S||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==S&&(s===S||i);i&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}},dt=class{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}},Kt={P:_t,A:C,C:At,M:1,L:Jt,R:at,D:jt,V,I:N,H:U,N:ct,U:ht,B:lt,F:dt},wt=q.litHtmlPolyfillSupport;wt==null||wt(K,N),(q.litHtmlVersions??(q.litHtmlVersions=[])).push("3.1.2");var Et=(n,t,e)=>{let s=(e==null?void 0:e.renderBefore)??t,i=s._$litPart$;if(i===void 0){let r=(e==null?void 0:e.renderBefore)??null;s._$litPart$=i=new N(t.insertBefore(X(),r),r,void 0,e??{})}return i._$AI(n),i};var P=class extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;let t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){let e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return T}},Zt;P._$litElement$=!0,P.finalized=!0,(Zt=globalThis.litElementHydrateSupport)==null||Zt.call(globalThis,{LitElement:P});var kt=globalThis.litElementPolyfillSupport;kt==null||kt({LitElement:P});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.4");var Qt=n=>{let t=n.nested==null&&(!n.type||n.type==="activity");return t&&!n.type&&(n.type="activity"),t},te=n=>{let t="type"in n&&n.nested==null&&!("percent"in n)&&n.type==="milestone";return t&&(n.end=n.start),t},pt=n=>{var e,s;let t="nested"in n&&Array.isArray(n.nested)&&n.nested.length>0&&(!n.type||n.type==="group");if(t){n.type="group";let i=ee(n);n.start=new Date(Math.min(((e=n.start)==null?void 0:e.getTime())??1/0,i.start)),n.end=new Date(Math.max(((s=n.end)==null?void 0:s.getTime())??-1/0,i.end))}return t};function ee(n){var s,i,r;let t=0,e=0;for(let o of n.nested)if(o.type==="group"||o.nested&&o.nested.length>0){let a=ee(o);t=t>0?Math.min(t,a.start):a.start,e=Math.max(e,a.end)}else t=t>0?Math.min(t,((s=o.start)==null?void 0:s.getTime())??1/0):(i=o.start)==null?void 0:i.getTime(),e=Math.max(e,((r=o.end)==null?void 0:r.getTime())??-1/0);return{start:t,end:e}}var ne={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},se=n=>(...t)=>({_$litDirective$:n,values:t}),ut=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this._$Ct=t,this._$AM=e,this._$Ci=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}};var{I:Ve}=Kt;var ie=()=>document.createComment(""),z=(n,t,e)=>{var r;let s=n._$AA.parentNode,i=t===void 0?n._$AB:t._$AA;if(e===void 0){let o=s.insertBefore(ie(),i),a=s.insertBefore(ie(),i);e=new Ve(o,a,n,n.options)}else{let o=e._$AB.nextSibling,a=e._$AM,h=a!==n;if(h){let c;(r=e._$AQ)==null||r.call(e,n),e._$AM=n,e._$AP!==void 0&&(c=n._$AU)!==a._$AU&&e._$AP(c)}if(o!==i||h){let c=e._$AA;for(;c!==o;){let d=c.nextSibling;s.insertBefore(c,i),c=d}}}return e},I=(n,t,e=n)=>(n._$AI(t,e),n),Ue={},re=(n,t=Ue)=>n._$AH=t,oe=n=>n._$AH,mt=n=>{var s;(s=n._$AP)==null||s.call(n,!1,!0);let t=n._$AA,e=n._$AB.nextSibling;for(;t!==e;){let i=t.nextSibling;t.remove(),t=i}};var ae=(n,t,e)=>{let s=new Map;for(let i=t;i<=e;i++)s.set(n[i],i);return s},_=se(class extends ut{constructor(n){if(super(n),n.type!==ne.CHILD)throw Error("repeat() can only be used in text expressions")}dt(n,t,e){let s;e===void 0?e=t:t!==void 0&&(s=t);let i=[],r=[],o=0;for(let a of n)i[o]=s?s(a,o):o,r[o]=e(a,o),o++;return{values:r,keys:i}}render(n,t,e){return this.dt(n,t,e).values}update(n,[t,e,s]){let i=oe(n),{values:r,keys:o}=this.dt(t,e,s);if(!Array.isArray(i))return this.ut=o,r;let a=this.ut??(this.ut=[]),h=[],c,d,l=0,u=i.length-1,p=0,m=r.length-1;for(;l<=u&&p<=m;)if(i[l]===null)l++;else if(i[u]===null)u--;else if(a[l]===o[p])h[p]=I(i[l],r[p]),l++,p++;else if(a[u]===o[m])h[m]=I(i[u],r[m]),u--,m--;else if(a[l]===o[m])h[m]=I(i[l],r[m]),z(n,h[m+1],i[l]),l++,m--;else if(a[u]===o[p])h[p]=I(i[u],r[p]),z(n,i[l],i[u]),u--,p++;else if(c===void 0&&(c=ae(o,p,m),d=ae(a,l,u)),c.has(a[l]))if(c.has(a[u])){let f=d.get(o[p]),y=f!==void 0?i[f]:null;if(y===null){let b=z(n,i[l]);I(b,r[p]),h[p]=b}else h[p]=I(y,r[p]),z(n,i[l],y),i[f]=null;p++}else mt(i[u]),u--;else mt(i[l]),l++;for(;p<=m;){let f=z(n,h[m+1]);I(f,r[p]),h[p++]=f}for(;l<=u;){let f=i[l++];f!==null&&mt(f)}return this.ut=o,re(n,h),T}});function ft(n){let t=n.timeScale,e=new Date(n.start),s=[],i=n.scaleHeight/4,r=0,o=i*2,a=e.getMonth(),h=new Date(e.getFullYear(),a,1,1),c=n.scaleHeight*.25,d=t.dateToPx(h),l=0;for(;h<=t.end;){let p=`${h.toLocaleString("default",{month:"long"})} ${h.getFullYear()}`;h.setMonth(h.getMonth()+1,1);let m=t.dateToPx(h),f=d+(m-d)/2;s.push({id:p,tpl:v`
      <g>
        <rect 
          x=${m} 
          height=${o} width="1"
          y=${r} class="line scale flip" />
        
        <text x=${f} y=${c} 
             class="text small">${p}</text>                
      </g>
      `}),d=m,l++}return v`<g id="yearMonth">
  ${_(s,u=>u.id,u=>u.tpl)}  
  </g>`}function le(n){let t=n.timeScale,e=new Date(t.startMs),s=[],i=n.height-n.scaleHeight;for(let r=0;r<=t.totalDays-1;r++){let o=e.getDay(),a=o===0||o===6,h=r*t.pxPerDay,c=h+t.pxPerDay/2,d=n.scaleHeight/4,l=d*3,u=d,p=a?v`<rect x=${h} y=${n.scaleHeight} width=${t.pxPerDay} height=${i} class="weekend" />`:null,m=e.getDate();s.push({id:r,tpl:v`
      <g>
        ${p}
        <rect x=${h} y=${l} width="1" height=${u}
          class="line scale day"          
        />
        <text 
          id=${r} 
          x=${c} 
          y=${n.scaleHeight*.75} 
          class="text small">
          ${m}
        </text>

   
      </g>`}),e.setDate(e.getDate()+1)}return v`
  <g id="dayHeader">
    ${ft({...n})}
    
    ${_(s,r=>r.id,r=>r.tpl)}   
  </g>`}function ce(n){let t=Ct(n.timeScale.start,n.timeScale.end),e=[],s=n.scaleHeight,i=n.height-s,r=n.timeScale.pxPerDay,o=t.length-1,a=n.scaleHeight/4,h=a*3,c=a;for(let d=0;d<o;d++){let l=new Date(t[d]),u=n.timeScale.dateToPx(l),p=l.getDate(),m=M(l,-1).getDate(),f="week_"+d+"_"+m+"-"+p,y=n.scaleHeight/6,b=n.scaleHeight-y,A=a*2+y,w=Pt(M(l,1));e.push({id:f,tpl:v`
      <g id=${f}>
        <rect x=${u-r*2} y=${s} width=${r*2} height=${i} 
          class="weekend"/>
          <text x=${u-3} y=${b} class="text small end">
          ${m}
        </text>       
        <rect x=${u} width="1" y=${h} height=${c}         
          class="line scale"/>
        <text x=${u+3} y=${b} class="text small start">
          ${p}
        </text>        
        <text x=${u+3*r} y=${A} 
          class="text tiny start">
            Week ${w}
        </text>    
      </g>`})}return v`
    <g id="weekHeader">
      ${ft({...n})}

      ${_(e,d=>d.id,d=>d.tpl)}
     
    </g>
  `}function he(n,t){n.unshift(t.timeScale.startMs),n.push(t.timeScale.end.getTime());let e=[],s=t.timeScale.start.getFullYear(),i=t.timeScale.end.getFullYear(),r=0,o=t.timeScale.dateToPx(t.timeScale.end),a=t.scaleHeight/4,h=0,c=a*2;for(;s<=i;){let d=new Date(s+1,0,1,1),l=t.timeScale.dateToPx(d);l>o&&(l=o),e.push({id:"y_"+s,tpl:v`
      <g>
        <rect x=${l} y=${h} width="1" height=${c}
        class="line scale flip" />      
          <text 
            x=${(l-r)/2+r} 
            y=${t.scaleHeight*.25} 
            class="text small">
            ${s}
          </text>        
      </g>`}),s=d.getFullYear(),r=l}return v`<g id="year">
   ${_(e,d=>d.id,d=>d.tpl)}  
  </g>`}function de(n){let t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],s=Dt(n.timeScale.startMs,n.timeScale.end.getTime()).filter(d=>new Date(d).getDate()===1);s.unshift(n.timeScale.startMs),s.push(n.timeScale.end.getTime());let i=[],r=s.length-1,o=n.scaleHeight/4,a=o*3,h=o;for(let d=0;d<r;d++){let u=new Date(s[d]).getMonth(),p=n.timeScale.dateToPx(new Date(s[d])),m=(s[d+1]-s[d])/n.timeScale.msPerPx,f="hm_"+u,y=p+m/2,b=v`
      <rect 
        x=${p}         
        y=${a} 
        width="1"
        height=${h}       
        class="line scale" />`;i.push({id:f,tpl:v`
      <g>
        ${d===0?null:b}
        ${m>30?v`
          <text x=${y} y=${n.scaleHeight*.75} class="text small">
            ${t[u]}
          </text>`:null}
      </g>
      `})}let c=s.filter(d=>new Date(d).getMonth()===0);return v`
    <g id="monthHeader">
      ${he(c,n)}     
       ${_(i,d=>d.id,d=>d.tpl)}  
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
  `}function ue(n){let t=n.map(r=>({x:r[0],y:r[1]})),e=["M"+t[0].x+","+t[0].y],s=5,i=t.length-1;t[i-1].x<t[i].x?t[i].x+=s/2:t[i].x-=s/2;for(let r=0;r<t.length;r++){let o=r+1>t.length-1?(r+1)%t.length:r+1,a=r+2>t.length-1?(r+2)%t.length:r+2,h=t[r],c=t[o],d=t[a],l=Math.sqrt(Math.pow(h.x-c.x,2)+Math.pow(h.y-c.y,2)),u=(l-s)/l,p=[((1-u)*h.x+u*c.x).toFixed(1),((1-u)*h.y+u*c.y).toFixed(1)],m=Math.sqrt(Math.pow(c.x-d.x,2)+Math.pow(c.y-d.y,2)),f=s/m;if(r!==i)if(e.push("L"+p.join(",")),r===i-1)e.push("L"+c.x+","+c.y);else{let y=[((1-f)*c.x+f*d.x).toFixed(1),((1-f)*c.y+f*d.y).toFixed(1)];e.push("Q"+c.x+","+c.y+","+y.join(","))}}return e.join(" ")}var Oe;function me(n){Oe=n;let t=new Map;return n.data.forEach(e=>{t.set(e.id.toString(),e)}),v`
    <g class="link-lines" >
      ${n.data.map(e=>e.links?e.links.map(s=>Ne(s,n,t.get(s.source.toString()),t.get(s.target.toString()))):null)}
    </g>`}function Ne(n,t,e,s){let i=s??t.data.find(g=>g.id.toString()===n.target.toString()),r=e??t.data.find(g=>g.id.toString()===n.source.toString());if(!i||!i.start||!i.end||!r||!r.start||!r.end)return null;let o=t.rowHeight/2+t.scaleHeight,a=t.data.findIndex(g=>g.id===r.id),h=t.data.findIndex(g=>g.id===i.id),c=12,d=6,l=i.type==="milestone"?t.barHeight/2:0,u=o+a*t.rowHeight,p=o+h*t.rowHeight,m=t.barHeight/2+4;u>p&&(m=-m);let f=t.timeScale.dateToPx(r.end),y=t.timeScale.dateToPx(r.start),b=t.timeScale.dateToPx(i.end),A=t.timeScale.dateToPx(i.start),w=(g,$)=>{let x=`${n.source}-${n.target}-${n.type}`;return v`
    <g 
      id=${x} 
      class="link"
      data-source=${n.source} 
      data-target=${n.target} 
      data-link-type=${n.type}>
      <path d=${ue(g)} class="link-line" ></path>     
      <polygon points=${Ht($)} class="line-arrow" />
    </g>`};if(n.type==="FS"){let g=f,$=A-l,x=[[g,u],[g+c,u]];$-g>=2*c?x.push([g+c,p]):(x.push([g+c,p-m]),x.push([$-c,p-m]),x.push([$-c,p])),x.push([$-d,p]);let E=[[$-d,p-d],[$,p],[$-d,p+d]];return w(x,E)}if(n.type==="FF"){let g=f,$=b+l,x=[[g,u],[g+c,u]];$<=g?x.push([g+c,p]):(x.push([g+c,p-m]),x.push([$+c,p-m]),x.push([$+c,p])),x.push([$+d,p]);let E=[[$+d,p-d],[$,p],[$+d,p+d]];return w(x,E)}if(n.type==="SS"){let g=y,$=A-l,x=[[g,u],[g-c,u]];g<=$?x.push([g-c,p]):(x.push([g-c,p-m]),x.push([$-c,p-m]),x.push([$-c,p])),x.push([$-d,p]);let E=[[$-d,p-d],[$,p],[$-d,p+d]];return w(x,E)}if(n.type==="SF"){let g=y,$=b+l,x=[[g,u],[g-c,u]];g-$>=2*c?x.push([g-c,p]):(x.push([g-c,p-m]),x.push([$+c,p-m]),x.push([$+c,p])),x.push([$+d,p]);let E=[[$+d,p-d],[$,p],[$+d,p+d]];return w(x,E)}return null}function ze(n,t,e,s,i,r){let o=e/2,a=[[0,o],[o,0],[e,o],[o,e]].map(h=>`${h[0]},${h[1]}`).join(" ");return{id:i,tpl:v`
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
  `}}function fe(n){let t=(n.rowHeight-n.barHeight)/2+n.scaleHeight,e=n.timeScale.dateToPx(new Date),s=n.timeScale,i=n.data.map((r,o)=>{let a="bar_"+r.id;if(!r.start||!r.end)return null;let h=()=>{if(this.suppressClick)return;let yt=new CustomEvent("item-click",{detail:r});this.dispatchEvent(yt)},c=s.dateToPx(r.start),d=t+o*n.rowHeight,l=n.barHeight/2;if(r.type==="milestone")return ze(c,d,n.barHeight,h,a,r);let u=s.pxForTimeSpan(r.start,r.end),p=u*r.percent,m="gantt-bar";m+=r.type==="group"?" group":"";let f=!1,y=!1;n.showDelay&&(c+p<e&&r.percent<.999999&&(f=!0,y=!1),c+u<e&&r.percent<.999999&&(f=!1,y=!0));let b=n.rowHeight/6,A=n.rowHeight/6,w=1,g=b*2+A+w*2,$=v`
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
            />`:null,E=v``;return r.type==="activity"&&(E=v`
        <circle
          class=${r.type+" ctl-start"}
          data-id=${r.id}           
          cx=${w+b}
          cy=${l}
          r=${b}
        />
        <circle
          class=${r.type+" ctl-finish"}
          data-id=${r.id}
          cx=${u+g+A+b}
          cy=${l}
          r=${b}
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
        .item=${r}
        data-item-id=${r.id}        
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
      
      ${_(i,r=>r.id,r=>r.tpl)} 
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
`;function be(){let n=this.shadowRoot.getElementById("gantt");function t(l){return l.classList.contains("ctl-start")}function e(l){return l.classList.contains("ctl-finish")}let s=(l,u)=>{let p=l.dataset.id,m=u.dataset.id;if(p===m)return;let f=this.settings.data.find($=>$.id.toString()===p),y=this.settings.data.find($=>$.id.toString()===m),b=t(l)?"S":"F",A=t(u)?"S":"F";f.type==="milestone"&&(b="F"),y.type==="milestone"&&(A="S");let w={source:p,target:m,type:`${b}${A}`},g=this.settings.data.find($=>$.id==p);if(g){if(g.links.find($t=>$t.source===w.source&&$t.target===w.target&&$t.type===w.type))return;let x=!1,E={link:w,cancel:()=>{x=!0}},yt=new CustomEvent("before-link-added",{detail:E});this.dispatchEvent(yt),x||(g.links.push(w),this.requestUpdate())}},i="http://www.w3.org/2000/svg",r=!1,o=null,a=null,h=l=>l.parentElement.x.baseVal.value+l.cx.baseVal.value,c=l=>l.parentElement.y.baseVal.value+l.cy.baseVal.value;n.addEventListener("mousedown",l=>{if(!t(l.target)&&!e(l.target))return;l.preventDefault(),o=l.target;let u=o.parentElement;this.shadowRoot.querySelectorAll(".activity.ctl-start,.activity.ctl-finish").forEach(f=>{f.setAttribute("active","active")}),r=!0,a=document.createElementNS(i,"line");let p=h(o).toString(),m=c(o).toString();a.setAttribute("x1",p),a.setAttribute("y1",m),a.setAttribute("x2",p),a.setAttribute("y2",m),a.classList.add("add-link-line"),n.appendChild(a)}),n.addEventListener("mousemove",l=>{let u=l.target;if(r)if(l.preventDefault(),t(u)||e(u)){let p=h(u).toString(),m=c(u).toString();a.setAttribute("x2",p),a.setAttribute("y2",m)}else{let p=l.clientX,m=l.clientY,f=n.getBoundingClientRect();a.setAttribute("x2",(p-f.left).toString()),a.setAttribute("y2",(m-f.top).toString())}});let d=l=>{r&&(l.preventDefault(),l.stopPropagation(),this.shadowRoot.querySelectorAll(".ctl-start,.ctl-finish").forEach(u=>{u.removeAttribute("active")}),r=!1,a&&(n.removeChild(a),a=null))};n.addEventListener("mouseup",l=>{d(l);let u=l.target,p=t(u)||e(u);o&&p&&s(o,u),o=null}),this.addEventListener("mouseout",l=>{d(l)})}var F=(n,t,e)=>{if(e){let s=new Date(n.start.getTime()+t);t>0&&n.end.getTime()-s.getTime()<864e5&&(n.end=new Date(n.end.getTime()+t)),n.start=s}else{let s=new Date(n.end.getTime()+t);t<0&&s.getTime()-n.start.getTime()<864e5&&(n.start=new Date(n.start.getTime()+t)),n.end=s}};function we(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,i,r,o,a=!1,h=!1;function c(f){let y=f.parentElement;return a=y.classList.contains("ctl-resize-start"),h=y.classList.contains("ctl-resize-end"),y.tagName==="g"&&(a||h)}let d=()=>{a=!1,h=!1,t=!1,i=void 0,s=0,o=void 0,e=!1,this.suppressClick},l=f=>{f.preventDefault(),f.stopPropagation(),f.stopImmediatePropagation()},u=f=>{let y=f.target;!c(y)||t||(e=!0,i=y.parentElement.parentElement,r=i.dataset.itemId,r&&(l(f),s=i.x.baseVal.value,o=this.settings.data.find(b=>b.id.toString()===r)))},p=async f=>{if(!e)return;l(f),t=!0;let y=f.movementX*this.settings.timeScale.msPerPx;for(let b of o.parents)a&&o.start.getTime()===b.start.getTime()&&F(b,y,a),h&&o.end.getTime()===b.end.getTime()&&F(b,y,a);F(o,y,a),this.requestUpdate()},m=f=>{if(e){if(t){this.___lastMovement=new Date().getTime();let y=new CustomEvent("item-resized",{detail:o});this.dispatchEvent(y)}d(),l(f)}};n.addEventListener("mousedown",u),n.addEventListener("mousemove",p),n.addEventListener("mouseup",m),this.addEventListener("mouseout",f=>{d()})}function _e(){let n=this.shadowRoot.getElementById("gantt"),t=!1,e=!1,s=0,i,r,o,a;function h(m){let f=m;return f.tagName==="rect"&&(f.classList.contains("back")||f.classList.contains("front"))}let c=()=>{t=!1,i=void 0,s=0,r=void 0,a=void 0,e=!1,this.suppressClick},d=m=>{m.preventDefault(),m.stopPropagation(),m.stopImmediatePropagation()},l=m=>{let f=m.target;!h(f)||t||(e=!0,r=f,i=f.parentElement,o=i.dataset.itemId,o&&(d(m),s=i.x.baseVal.value,a=this.settings.data.find(y=>y.id.toString()===o)))},u=async m=>{if(!e)return;d(m),t=!0;let f=m.movementX*this.settings.timeScale.msPerPx;if(pt(a))for(let y of a.nested)y.start=new Date(y.start.getTime()+f),y.end=new Date(y.end.getTime()+f);for(let y of a.parents)a.start.getTime()===y.start.getTime()?F(y,f,!0):a.end.getTime()===y.end.getTime()&&F(y,f,!1);a.start=new Date(a.start.getTime()+f),a.end=new Date(a.end.getTime()+f),this.requestUpdate()},p=m=>{if(e){if(t){this.___lastMovement=new Date().getTime();let f=new CustomEvent("item-moved",{detail:a});this.dispatchEvent(f)}c(),d(m)}};n.addEventListener("mousedown",l),n.addEventListener("mousemove",u),n.addEventListener("mouseup",p),this.addEventListener("mouseout",m=>{c()})}var Ae=864e5,gt=class{constructor(t,e,s){this.viewMode=s;let i=new Date(t);i.setHours(1,0,0,0);let r=new Date(e);r.setHours(1,0,0,0),this.start=i,this.end=r,this.startMs=i.getTime(),this.endMs=r.getTime(),this.totalDays=Math.round(Math.abs((this.startMs-r.getTime())/Ae));let o={month:3,week:4,day:5},a=5;this.totalDays>365?a=1*o[s]:this.totalDays>155?a=4*o[s]:this.totalDays>30&&(a=6*o[s]),this.pxPerDay=a,this.pxPerWeek=a*7,this.msPerPx=Ae/a}pxToMs(t){return t*this.msPerPx}msToPx(t){return t/this.msPerPx}dateToPx(t){let e=t.getTime()-this.startMs;return this.msToPx(e)}pxToDate(t){let e=this.pxToMs(t);return new Date(this.startMs+e)}pxForTimeSpan(t,e){let s=e.getTime()-t.getTime();return this.msToPx(s)}};var O=class extends P{constructor(){super(...arguments);this.___lastMovement=0;this.interactionReady=!1}connectedCallback(){super.connectedCallback()}updateSettings(){let e=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-row-height")),s=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-time-scale-height")),i=parseFloat(getComputedStyle(this).getPropertyValue("--gantt-layout-bar-height")),r=this.flattenData(this.data),o=this.options.minDate??null,a=this.options.maxDate??null;r.forEach(c=>{o=Tt(o,c.start),a=Mt(a,c.end)}),o=o||new Date,a=a||new Date;let h={viewMode:"week",showDelay:!0,showLinks:!0,showLabels:!0};this.settings={...h,...this.options,start:o,end:a,width:0,height:0,scaleHeight:s,rowHeight:e,barHeight:i,data:r,timeScale:void 0,...this.options},this.settings.timeScale=new gt(M(o,-1),M(a,7),this.settings.viewMode),this.settings.width=this.settings.timeScale.totalDays*this.settings.timeScale.pxPerDay,this.settings.height=this.settings.data.length*this.settings.rowHeight+this.settings.scaleHeight,this.setupInteractions()}flattenData(e,s,i){var a;let r=[],o=0;for(let h of e){this.validateItem(h);let c=h;c.parents=[],i&&(c.parents=[...i.parents??[],i]),c.path=s?s+"."+o:o.toString(),c.id??(c.id=c.path),r.push(c),((a=h.nested)==null?void 0:a.length)>0&&r.push(...this.flattenData(h.nested,c.path,c)),o++}return r}validateItem(e){if(!(pt(e)||Qt(e)||te(e)))throw Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text);e.start??(e.start=new Date),e.end??(e.end=M(e.start,5)),e.start>e.end&&Error("Gantt item is not valid: id:"+e.id+"; text: "+e.text+"; End before start")}get suppressClick(){return new Date().getTime()-this.___lastMovement<100}async setupInteractions(){this.interactionReady||(await this.updateComplete,be.bind(this)(),_e.bind(this)(),we.bind(this)(),this.interactionReady=!0)}render(){if(!this.data||this.data.length===0)return"No data";this.updateSettings();let e=this.settings.showLabels?Z`
          <div class="labels">
            ${this.settings.data.map(s=>Z`<div class="lbl">${s.text}</div>`)}
          </div>
        `:Z``;return Z`
      ${e}
      <div class="gantt">${ge.bind(this)()}</div>
    `}};O.styles=[k`
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
    `,ve,ye,$e,xe],Q([it({type:Object,attribute:!1})],O.prototype,"options",2),Q([it({type:Array,attribute:!1})],O.prototype,"data",2),O=Q([It("wc-gantt")],O);export{O as WCGantt};
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
