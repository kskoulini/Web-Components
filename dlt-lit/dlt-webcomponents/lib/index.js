/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$2=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$4=Symbol(),n$5=new Map;class s$3{constructor(t,n){if(this._$cssResult$=!0,n!==e$4)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$5.get(this.cssText);return t$2&&void 0===e&&(n$5.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$4=t=>new s$3("string"==typeof t?t:t+"",e$4),r$2=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$3(o,e$4)},i$3=(e,n)=>{t$2?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$4(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$2;const e$3=window.trustedTypes,r$1=e$3?e$3.emptyScript:"",h$1=window.reactiveElementPolyfillSupport,o$3={toAttribute(t,i){switch(i){case Boolean:t=t?r$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},n$4=(t,i)=>i!==t&&(i==i||t==t),l$3={attribute:!0,type:String,converter:o$3,reflect:!1,hasChanged:n$4};class a$1 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=l$3){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$3}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Eg)&&void 0!==i?i:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Eg)||void 0===i||i.splice(this._$Eg.indexOf(t)>>>0,1);}_$Em(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$ES(t,i,s=l$3){var e,r;const h=this.constructor._$Eh(t,s);if(void 0!==h&&!0===s.reflect){const n=(null!==(r=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==r?r:o$3.toAttribute)(i,s.type);this._$Ei=t,null==n?this.removeAttribute(h):this.setAttribute(h,n),this._$Ei=null;}}_$AK(t,i){var s,e,r;const h=this.constructor,n=h._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=h.getPropertyOptions(n),l=t.converter,a=null!==(r=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==r?r:o$3.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||n$4)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ep=this._$E_());}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$EU();}catch(t){throw i=!1,this._$EU(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Eg)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$EU(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$ES(i,this[i],t))),this._$EC=void 0),this._$EU();}updated(t){}firstUpdated(t){}}a$1.finalized=!0,a$1.elementProperties=new Map,a$1.elementStyles=[],a$1.shadowRootOptions={mode:"open"},null==h$1||h$1({ReactiveElement:a$1}),(null!==(s$2=globalThis.reactiveElementVersions)&&void 0!==s$2?s$2:globalThis.reactiveElementVersions=[]).push("1.3.2");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$1;const i$2=globalThis.trustedTypes,s$1=i$2?i$2.createPolicy("lit-html",{createHTML:t=>t}):void 0,e$2=`lit$${(Math.random()+"").slice(9)}$`,o$2="?"+e$2,n$3=`<${o$2}>`,l$2=document,h=(t="")=>l$2.createComment(t),r=t=>null===t||"object"!=typeof t&&"function"!=typeof t,d=Array.isArray,u=t=>{var i;return d(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,a=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,_=/'/g,m=/"/g,g=/^(?:script|style|textarea|title)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),$=p(1),b=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),T=new WeakMap,x=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new N(i.insertBefore(h(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},A=l$2.createTreeWalker(l$2,129,null,!1),C=(t,i)=>{const o=t.length-1,l=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<o;i++){const s=t[i];let o,u,p=-1,$=0;for(;$<s.length&&(d.lastIndex=$,u=d.exec(s),null!==u);)$=d.lastIndex,d===c?"!--"===u[1]?d=v:void 0!==u[1]?d=a:void 0!==u[2]?(g.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=f):void 0!==u[3]&&(d=f):d===f?">"===u[0]?(d=null!=h?h:c,p=-1):void 0===u[1]?p=-2:(p=d.lastIndex-u[2].length,o=u[1],d=void 0===u[3]?f:'"'===u[3]?m:_):d===m||d===_?d=f:d===v||d===a?d=c:(d=f,h=void 0);const y=d===f&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+n$3:p>=0?(l.push(o),s.slice(0,p)+"$lit$"+s.slice(p)+e$2+y):s+e$2+(-2===p?(l.push(void 0),i):y);}const u=r+(t[o]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return [void 0!==s$1?s$1.createHTML(u):u,l]};class E{constructor({strings:t,_$litType$:s},n){let l;this.parts=[];let r=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,s);if(this.el=E.createElement(v,n),A.currentNode=this.el.content,2===s){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=A.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(e$2)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(e$2),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?M:"?"===i[1]?H:"@"===i[1]?I:S});}else c.push({type:6,index:r});}for(const i of t)l.removeAttribute(i);}if(g.test(l.tagName)){const t=l.textContent.split(e$2),s=t.length-1;if(s>0){l.textContent=i$2?i$2.emptyScript:"";for(let i=0;i<s;i++)l.append(t[i],h()),A.nextNode(),c.push({type:2,index:++r});l.append(t[s],h());}}}else if(8===l.nodeType)if(l.data===o$2)c.push({type:2,index:r});else {let t=-1;for(;-1!==(t=l.data.indexOf(e$2,t+1));)c.push({type:7,index:r}),t+=e$2.length-1;}r++;}}static createElement(t,i){const s=l$2.createElement("template");return s.innerHTML=t,s}}function P(t,i,s=t,e){var o,n,l,h;if(i===b)return i;let d=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=r(i)?void 0:i._$litDirective$;return (null==d?void 0:d.constructor)!==u&&(null===(n=null==d?void 0:d._$AO)||void 0===n||n.call(d,!1),void 0===u?d=void 0:(d=new u(t),d._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=d:s._$Cu=d),void 0!==d&&(i=P(t,d._$AS(t,i.values),d,e)),i}class V{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:l$2).importNode(s,!0);A.currentNode=o;let n=A.nextNode(),h=0,r=0,d=e[0];for(;void 0!==d;){if(h===d.index){let i;2===d.type?i=new N(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}h!==(null==d?void 0:d.index)&&(n=A.nextNode(),h++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class N{constructor(t,i,s,e){var o;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=P(this,t,i),r(t)?t===w||null==t||""===t?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==b&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):u(t)?this.S(t):this.$(t);}M(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t));}$(t){this._$AH!==w&&r(this._$AH)?this._$AA.nextSibling.data=t:this.k(l$2.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new V(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t;}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new E(t)),i}S(t){d(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new N(this.M(h()),this.M(h()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class S{constructor(t,i,s,e,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=w;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=P(this,t,i,0),n=!r(t)||t!==this._$AH&&t!==b,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=P(this,e[s+l],i,l),h===b&&(h=this._$AH[l]),n||(n=!r(h)||h!==this._$AH[l]),h===w?t=w:t!==w&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.C(t);}C(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class M extends S{constructor(){super(...arguments),this.type=3;}C(t){this.element[this.name]=t===w?void 0:t;}}const k=i$2?i$2.emptyScript:"";class H extends S{constructor(){super(...arguments),this.type=4;}C(t){t&&t!==w?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name);}}class I extends S{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=P(this,t,i,0))&&void 0!==s?s:w)===b)return;const e=this._$AH,o=t===w&&e!==w||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==w&&(e===w||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){P(this,t);}}const z=window.litHtmlPolyfillSupport;null==z||z(E,N),(null!==(t$1=globalThis.litHtmlVersions)&&void 0!==t$1?t$1:globalThis.litHtmlVersions=[]).push("2.2.4");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$1,o$1;class s extends a$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=x(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return b}}s.finalized=!0,s._$litElement$=!0,null===(l$1=globalThis.litElementHydrateSupport)||void 0===l$1||l$1.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o$1=globalThis.litElementVersions)&&void 0!==o$1?o$1:globalThis.litElementVersions=[]).push("3.2.0");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n$1=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$1=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e$1(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i$1(e,n)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i;}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const o=e(class extends i{constructor(t$1){var i;if(super(t$1),t$1.type!==t.ATTRIBUTE||"class"!==t$1.name||(null===(i=t$1.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return " "+Object.keys(t).filter((i=>t[i])).join(" ")+" "}update(i,[s]){var r,o;if(void 0===this.et){this.et=new Set,void 0!==i.strings&&(this.st=new Set(i.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(const t in s)s[t]&&!(null===(r=this.st)||void 0===r?void 0:r.has(t))&&this.et.add(t);return this.render(s)}const e=i.element.classList;this.et.forEach((t=>{t in s||(e.remove(t),this.et.delete(t));}));for(const t in s){const i=!!s[t];i===this.et.has(t)||(null===(o=this.st)||void 0===o?void 0:o.has(t))||(i?(e.add(t),this.et.add(t)):(e.remove(t),this.et.delete(t)));}return b}});

/**
 * Button kinds.
 */
var BUTTON_VARIANT;
(function (BUTTON_VARIANT) {
    /**
     * Primary button.
     */
    BUTTON_VARIANT["PRIMARY"] = "primary";
    /**
     * Secondary button.
     */
    BUTTON_VARIANT["SECONDARY"] = "secondary";
    /**
     * Tertiary button.
     */
    BUTTON_VARIANT["TERTIARY"] = "tertiary";
    /**
     * Emphasis button.
     */
    BUTTON_VARIANT["EMPHASIS"] = "emphasis";
    /**
     * Icon button.
     */
    BUTTON_VARIANT["ICON"] = "icon";
})(BUTTON_VARIANT || (BUTTON_VARIANT = {}));
/**
 * Button size.
 */
var BUTTON_SIZE;
(function (BUTTON_SIZE) {
    /**
     * Regular size.
     */
    BUTTON_SIZE["REGULAR"] = "";
    /**
     * Small size.
     */
    BUTTON_SIZE["SMALL"] = "sm";
    /**
     * Large size.
     */
    BUTTON_SIZE["LARGE"] = "lg";
})(BUTTON_SIZE || (BUTTON_SIZE = {}));

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const l=l=>null!=l?l:w;

/**
 * A variant of `lit-html/directives/if-defined` which stops rendering if the given value is `null` in addition to `undefined`.
 * @param The value.
 */
var ifNonNull = value => l(value !== null && value !== void 0 ? value : undefined);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");

var css_248z = r$2`/* =====================================================
    BUTTONS SPECIFIC VARIABLES
   ------------------------------------------------------
  */
.dlt-button {
  --dlt-buttons-line-height: calc(var(--dlt-sizing-md) - 2px);
  --dlt-buttons-line-height-sm: calc(var(--dlt-sizing-sm) - 2px);
  --dlt-buttons-line-height-lg: calc(var(--dlt-sizing-lg) - 2px);
  --dlt-buttons-accent-line-height: calc(var(--dlt-sizing-md) - 4px);
  --dlt-buttons-accent-line-height-sm: calc(var(--dlt-sizing-sm) - 4px);
  --dlt-buttons-accent-line-height-lg: calc(var(--dlt-sizing-lg) - 4px);
}

/* Used for heart icon active from Cards */
/*!
*
* Copyright (c) 2019-2022 Software AG, Darmstadt, Germany and/or Software AG USA Inc., Reston, VA, USA,
* and/or its subsidiaries and/or its affiliates and/or their licensors.
*
*/
@font-face {
  font-family: "dlt-icons";
  src: url("../fonts/dlt-icons.ttf?od1yfv") format("truetype"), url("../fonts/dlt-icons.woff?od1yfv") format("woff"), url("../fonts/dlt-icons.svg?od1yfv#dlt-icons") format("svg");
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
[class^=dlt-icon-], [class*=" dlt-icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: "dlt-icons" !important;
  speak: never;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.dlt-icon-shutdown:before {
  content: "\\e914";
}

.dlt-icon-signout:before {
  content: "\\e982";
}

.dlt-icon-signin:before {
  content: "\\e983";
}

.dlt-icon-unavailable:before {
  content: "\\e984";
}

.dlt-icon-check-circle:before {
  content: "\\e911";
}

.dlt-icon-plus-circle:before {
  content: "\\e912";
}

.dlt-icon-minus-circle:before {
  content: "\\e913";
}

.dlt-icon-clock:before {
  content: "\\e915";
}

.dlt-icon-alarm:before {
  content: "\\e916";
}

.dlt-icon-buy:before {
  content: "\\e917";
}

.dlt-icon-calendar:before {
  content: "\\e918";
}

.dlt-icon-calendar-add:before {
  content: "\\e919";
}

.dlt-icon-calendar-remove:before {
  content: "\\e91a";
}

.dlt-icon-chat:before {
  content: "\\e91b";
}

.dlt-icon-cloud:before {
  content: "\\e91c";
}

.dlt-icon-cloud-upload:before {
  content: "\\e91d";
}

.dlt-icon-cloud-download:before {
  content: "\\e91e";
}

.dlt-icon-cloud-minus:before {
  content: "\\e91f";
}

.dlt-icon-cloud-plus:before {
  content: "\\e920";
}

.dlt-icon-cloud-restricted:before {
  content: "\\e921";
}

.dlt-icon-cloud-checked:before {
  content: "\\e922";
}

.dlt-icon-cloud-remote-working:before {
  content: "\\e923";
}

.dlt-icon-cloud-search:before {
  content: "\\e924";
}

.dlt-icon-cloud-settings:before {
  content: "\\e925";
}

.dlt-icon-cloud-unavailable:before {
  content: "\\e926";
}

.dlt-icon-cloud-error:before {
  content: "\\e927";
}

.dlt-icon-add-stage:before {
  content: "\\e928";
}

.dlt-icon-add-user:before {
  content: "\\e929";
}

.dlt-icon-env-permission:before {
  content: "\\e92a";
}

.dlt-icon-add-identity-provider:before {
  content: "\\e92b";
}

.dlt-icon-customize:before {
  content: "\\e92c";
}

.dlt-icon-edit:before {
  content: "\\e92d";
}

.dlt-icon-save:before {
  content: "\\e92e";
}

.dlt-icon-save-commit:before {
  content: "\\e92f";
}

.dlt-icon-duplicate:before {
  content: "\\e930";
}

.dlt-icon-delete:before {
  content: "\\e931";
}

.dlt-icon-erase:before {
  content: "\\e932";
}

.dlt-icon-close:before {
  content: "\\e933";
}

.dlt-icon-cut:before {
  content: "\\e934";
}

.dlt-icon-copy:before {
  content: "\\e935";
}

.dlt-icon-paste:before {
  content: "\\e936";
}

.dlt-icon-download:before {
  content: "\\e937";
}

.dlt-icon-upload:before {
  content: "\\e938";
}

.dlt-icon-move-step:before {
  content: "\\e939";
}

.dlt-icon-fullscreen:before {
  content: "\\e93a";
}

.dlt-icon-fullscreen-exit:before {
  content: "\\e93b";
}

.dlt-icon-graph:before {
  content: "\\e93c";
}

.dlt-icon-filter:before {
  content: "\\e93d";
}

.dlt-icon-group:before {
  content: "\\e93e";
}

.dlt-icon-ungroup:before {
  content: "\\e93f";
}

.dlt-icon-list:before {
  content: "\\e940";
}

.dlt-icon-mail:before {
  content: "\\e941";
}

.dlt-icon-more-menu:before {
  content: "\\e942";
}

.dlt-icon-password-hide:before {
  content: "\\e943";
}

.dlt-icon-password-show:before {
  content: "\\e944";
}

.dlt-icon-print:before {
  content: "\\e945";
}

.dlt-icon-restore:before {
  content: "\\e946";
}

.dlt-icon-refresh:before {
  content: "\\e947";
}

.dlt-icon-undo:before {
  content: "\\e948";
}

.dlt-icon-redo:before {
  content: "\\e949";
}

.dlt-icon-check:before {
  content: "\\e910";
}

.dlt-icon-plus:before {
  content: "\\e94a";
}

.dlt-icon-minus:before {
  content: "\\e94b";
}

.dlt-icon-equals:before {
  content: "\\e985";
}

.dlt-icon-history:before {
  content: "\\e94c";
}

.dlt-icon-cross-circle:before {
  content: "\\e94d";
}

.dlt-icon-send:before {
  content: "\\e94e";
}

.dlt-icon-attach:before {
  content: "\\e94f";
}

.dlt-icon-share:before {
  content: "\\e950";
}

.dlt-icon-cam:before {
  content: "\\e951";
}

.dlt-icon-zoom-in:before {
  content: "\\e952";
}

.dlt-icon-zoom-out:before {
  content: "\\e953";
}

.dlt-icon-checkbox-selected:before {
  content: "\\e900";
}

.dlt-icon-checkbox-unselected:before {
  content: "\\e901";
}

.dlt-icon-bookmark:before {
  content: "\\e902";
}

.dlt-icon-unbookmark:before {
  content: "\\e903";
}

.dlt-icon-heart:before {
  content: "\\e904";
}

.dlt-icon-unheart:before {
  content: "\\e905";
}

.dlt-icon-star:before {
  content: "\\e906";
}

.dlt-icon-unstar:before {
  content: "\\e907";
}

.dlt-icon-link:before {
  content: "\\e908";
}

.dlt-icon-unlink:before {
  content: "\\e909";
}

.dlt-icon-connected:before {
  content: "\\e90a";
}

.dlt-icon-disconnected:before {
  content: "\\e90b";
}

.dlt-icon-lock:before {
  content: "\\e90c";
}

.dlt-icon-unlock:before {
  content: "\\e90d";
}

.dlt-icon-expand:before {
  content: "\\e90e";
}

.dlt-icon-collapse:before {
  content: "\\e90f";
}

.dlt-icon-app-switcher:before {
  content: "\\e954";
}

.dlt-icon-hamburger:before {
  content: "\\e955";
}

.dlt-icon-help:before {
  content: "\\e956";
}

.dlt-icon-home:before {
  content: "\\e957";
}

.dlt-icon-notification:before {
  content: "\\e958";
}

.dlt-icon-profile:before {
  content: "\\e959";
}

.dlt-icon-search:before {
  content: "\\e95a";
}

.dlt-icon-settings:before {
  content: "\\e95b";
}

.dlt-icon-dropdown:before {
  content: "\\e987";
}

.dlt-icon-panel-control-down:before {
  content: "\\e989";
}

.dlt-icon-panel-control-right:before {
  content: "\\e98a";
}

.dlt-icon-panel-control-left:before {
  content: "\\e992";
}

.dlt-icon-panel-control-up:before {
  content: "\\e993";
}

.dlt-icon-arrow-left:before {
  content: "\\e95c";
}

.dlt-icon-arrow-right:before {
  content: "\\e95d";
}

.dlt-icon-arrow-up:before {
  content: "\\e95e";
}

.dlt-icon-arrow-down:before {
  content: "\\e95f";
}

.dlt-icon-chevron-left:before {
  content: "\\e960";
}

.dlt-icon-chevron-right:before {
  content: "\\e961";
}

.dlt-icon-chevron-up:before {
  content: "\\e962";
}

.dlt-icon-chevron-down:before {
  content: "\\e963";
}

.dlt-icon-caret-left:before {
  content: "\\e964";
}

.dlt-icon-caret-right:before {
  content: "\\e965";
}

.dlt-icon-caret-up:before {
  content: "\\e966";
}

.dlt-icon-caret-down:before {
  content: "\\e967";
}

.dlt-icon-chevron-circle-left:before {
  content: "\\e968";
}

.dlt-icon-chevron-circle-right:before {
  content: "\\e969";
}

.dlt-icon-chevron-circle-up:before {
  content: "\\e96a";
}

.dlt-icon-chevron-circle-down:before {
  content: "\\e96b";
}

.dlt-icon-chevron-double-left:before {
  content: "\\e96c";
}

.dlt-icon-chevron-double-right:before {
  content: "\\e96d";
}

.dlt-icon-chevron-double-up:before {
  content: "\\e96e";
}

.dlt-icon-chevron-double-down:before {
  content: "\\e96f";
}

.dlt-icon-chevron-breadcrumb:before {
  content: "\\e970";
}

.dlt-icon-sort-arrow:before {
  content: "\\e994";
}

.dlt-icon-up-down-arrows:before {
  content: "\\e971";
}

.dlt-icon-arrow-advance:before {
  content: "\\e972";
}

.dlt-icon-fast-rewind:before {
  content: "\\e973";
}

.dlt-icon-rewind:before {
  content: "\\e974";
}

.dlt-icon-play:before {
  content: "\\e975";
}

.dlt-icon-pause:before {
  content: "\\e976";
}

.dlt-icon-stop:before {
  content: "\\e979";
}

.dlt-icon-forward:before {
  content: "\\e977";
}

.dlt-icon-fast-forward:before {
  content: "\\e978";
}

.dlt-icon-pause-circle:before {
  content: "\\ea20";
}

.dlt-icon-stop-circle:before {
  content: "\\e97a";
}

.dlt-icon-play-circle:before {
  content: "\\e97b";
}

.dlt-icon-volume:before {
  content: "\\ea28";
}

.dlt-icon-volume_low:before {
  content: "\\ea25";
}

.dlt-icon-volume_high:before {
  content: "\\ea24";
}

.dlt-icon-volume_zero:before {
  content: "\\ea26";
}

.dlt-icon-volume_mute:before {
  content: "\\ea27";
}

.dlt-icon-error:before {
  content: "\\e97c";
  color: #e0000e;
}

.dlt-icon-info:before {
  content: "\\e97d";
  color: #1c8ce3;
}

.dlt-icon-success:before {
  content: "\\e97e";
  color: #a0b909;
}

.dlt-icon-warning:before {
  content: "\\e97f";
  color: #ff801f;
}

.dlt-icon-exclamation:before {
  content: "\\e995";
}

.dlt-icon-enter-bottom:before {
  content: "\\e997";
}

.dlt-icon-enter-left:before {
  content: "\\e99a";
}

.dlt-icon-enter-right:before {
  content: "\\e99e";
}

.dlt-icon-enter-top:before {
  content: "\\e9bb";
}

.dlt-icon-exit-bottom:before {
  content: "\\e9bc";
}

.dlt-icon-exit-left:before {
  content: "\\e9bd";
}

.dlt-icon-exit-right:before {
  content: "\\e9be";
}

.dlt-icon-exit-top:before {
  content: "\\e9c6";
}

.dlt-icon-export:before {
  content: "\\e9cf";
}

.dlt-icon-import:before {
  content: "\\ea03";
}

.dlt-icon-folder-aggregate:before {
  content: "\\ea04";
}

.dlt-icon-folder-open:before {
  content: "\\ea05";
}

.dlt-icon-grid-off:before {
  content: "\\ea06";
}

.dlt-icon-grid-on:before {
  content: "\\ea07";
}

.dlt-icon-input-output:before {
  content: "\\ea08";
}

.dlt-icon-trigger:before {
  content: "\\ea09";
}

.dlt-icon-variable-on:before {
  content: "\\ea0a";
}

.dlt-icon-variable:before {
  content: "\\ea0b";
}

.dlt-icon-student-male:before {
  content: "\\ea0c";
}

.dlt-icon-free-forever:before {
  content: "\\ea0d";
}

.dlt-icon-free-trial:before {
  content: "\\ea0e";
}

.dlt-icon-pricing:before {
  content: "\\ea0f";
}

.dlt-icon-phone:before {
  content: "\\ea10";
}

.dlt-icon-overview:before {
  content: "\\ea11";
}

.dlt-icon-impressum:before {
  content: "\\ea12";
}

.dlt-icon-globe:before {
  content: "\\ea13";
}

.dlt-icon-copyright:before {
  content: "\\ea14";
}

.dlt-icon-codefork:before {
  content: "\\ea15";
}

.dlt-icon-area-chart:before {
  content: "\\ea16";
}

.dlt-icon-stages:before {
  content: "\\ea17";
}

.dlt-icon-management:before {
  content: "\\ea18";
}

.dlt-icon-thumbs-up:before {
  content: "\\ea19";
}

.dlt-icon-thumbs-down:before {
  content: "\\ea1a";
}

.dlt-icon-wrench:before {
  content: "\\ea1b";
}

.dlt-icon-book:before {
  content: "\\ea1c";
}

.dlt-icon-announcement:before {
  content: "\\ea1d";
}

.dlt-icon-spy:before {
  content: "\\ea1e";
}

.dlt-icon-accessibility-settings:before {
  content: "\\e980";
}

.dlt-icon-objects:before {
  content: "\\e981";
}

.dlt-icon-string:before {
  content: "\\e986";
}

.dlt-icon-html-code:before {
  content: "\\e988";
}

.dlt-icon-slides:before {
  content: "\\e98b";
}

.dlt-icon-utility:before {
  content: "\\e98c";
}

.dlt-icon-versions:before {
  content: "\\e98d";
}

.dlt-icon-comment:before {
  content: "\\ea1f";
}

.dlt-icon-note:before {
  content: "\\e98e";
}

.dlt-icon-keyboard:before {
  content: "\\e98f";
}

.dlt-icon-console:before {
  content: "\\e990";
}

.dlt-icon-devices:before {
  content: "\\e991";
}

.dlt-icon-partners:before {
  content: "\\e996";
}

.dlt-icon-monitoring:before {
  content: "\\e998";
}

.dlt-icon-logs:before {
  content: "\\e999";
}

.dlt-icon-package:before {
  content: "\\e99b";
}

.dlt-icon-packages:before {
  content: "\\e99c";
}

.dlt-icon-adjust:before {
  content: "\\e99d";
}

.dlt-icon-contrast:before {
  content: "\\e99f";
}

.dlt-icon-accounting:before {
  content: "\\e9a0";
}

.dlt-icon-add-tag:before {
  content: "\\e9a1";
}

.dlt-icon-badge:before {
  content: "\\e9a2";
}

.dlt-icon-bar-chart:before {
  content: "\\e9a3";
}

.dlt-icon-bluetooth-symbol:before {
  content: "\\e9a4";
}

.dlt-icon-body:before {
  content: "\\e9a5";
}

.dlt-icon-breadcrumb:before {
  content: "\\e9a6";
}

.dlt-icon-briefcase:before {
  content: "\\e9a7";
}

.dlt-icon-bug:before {
  content: "\\e9a8";
}

.dlt-icon-building:before {
  content: "\\e9a9";
}

.dlt-icon-button:before {
  content: "\\e9aa";
}

.dlt-icon-calculator:before {
  content: "\\e9ab";
}

.dlt-icon-car:before {
  content: "\\e9ac";
}

.dlt-icon-card:before {
  content: "\\e9ad";
}

.dlt-icon-case:before {
  content: "\\e9ae";
}

.dlt-icon-centralized-network:before {
  content: "\\e9af";
}

.dlt-icon-circle:before {
  content: "\\e9b0";
}

.dlt-icon-clipboard-with-a-tick:before {
  content: "\\e9b1";
}

.dlt-icon-code:before {
  content: "\\e9b2";
}

.dlt-icon-column:before {
  content: "\\e9b3";
}

.dlt-icon-compass:before {
  content: "\\e9b4";
}

.dlt-icon-contacts-book:before {
  content: "\\e9b5";
}

.dlt-icon-contract:before {
  content: "\\e9b6";
}

.dlt-icon-dashboard:before {
  content: "\\e9b7";
}

.dlt-icon-database:before {
  content: "\\e9b8";
}

.dlt-icon-database-administrator:before {
  content: "\\e9b9";
}

.dlt-icon-data-transfer:before {
  content: "\\e9ba";
}

.dlt-icon-department:before {
  content: "\\e9bf";
}

.dlt-icon-deploy:before {
  content: "\\e9c0";
}

.dlt-icon-desktop:before {
  content: "\\e9c1";
}

.dlt-icon-document:before {
  content: "\\e9c2";
}

.dlt-icon-documents:before {
  content: "\\e9c3";
}

.dlt-icon-document-with-a-check-mark:before {
  content: "\\e9c4";
}

.dlt-icon-document-with-code:before {
  content: "\\e9c5";
}

.dlt-icon-edit-file:before {
  content: "\\e9c7";
}

.dlt-icon-environment:before {
  content: "\\e9c8";
}

.dlt-icon-external-link:before {
  content: "\\e9c9";
}

.dlt-icon-flag-outline:before {
  content: "\\e9ca";
}

.dlt-icon-flow:before {
  content: "\\e9cb";
}

.dlt-icon-flow-chart:before {
  content: "\\e9cc";
}

.dlt-icon-folder:before {
  content: "\\e9cd";
}

.dlt-icon-footer:before {
  content: "\\e9ce";
}

.dlt-icon-header:before {
  content: "\\e9d0";
}

.dlt-icon-gift:before {
  content: "\\e9d1";
}

.dlt-icon-goal:before {
  content: "\\e9d2";
}

.dlt-icon-grid:before {
  content: "\\e9d3";
}

.dlt-icon-hashtag:before {
  content: "\\e9d4";
}

.dlt-icon-health-examine:before {
  content: "\\e9d5";
}

.dlt-icon-identification-documents:before {
  content: "\\e9d6";
}

.dlt-icon-invoice:before {
  content: "\\e9d7";
}

.dlt-icon-key:before {
  content: "\\e9d8";
}

.dlt-icon-landing-page:before {
  content: "\\e9d9";
}

.dlt-icon-light-bulb-outline:before {
  content: "\\e9da";
}

.dlt-icon-marker:before {
  content: "\\e9db";
}

.dlt-icon-mind-map:before {
  content: "\\e9dc";
}

.dlt-icon-network:before {
  content: "\\e9dd";
}

.dlt-icon-online:before {
  content: "\\e9de";
}

.dlt-icon-open-folder:before {
  content: "\\e9df";
}

.dlt-icon-open-document:before {
  content: "\\e9e0";
}

.dlt-icon-pages:before {
  content: "\\e9e1";
}

.dlt-icon-palette:before {
  content: "\\e9e2";
}

.dlt-icon-parking:before {
  content: "\\e9e3";
}

.dlt-icon-password:before {
  content: "\\e9e4";
}

.dlt-icon-photo-gallery:before {
  content: "\\e9e5";
}

.dlt-icon-picture:before {
  content: "\\e9e6";
}

.dlt-icon-pie-chart:before {
  content: "\\e9e7";
}

.dlt-icon-price-tag:before {
  content: "\\e9e8";
}

.dlt-icon-process:before {
  content: "\\e9e9";
}

.dlt-icon-product:before {
  content: "\\e9ea";
}

.dlt-icon-qr-code:before {
  content: "\\e9eb";
}

.dlt-icon-robot:before {
  content: "\\e9ec";
}

.dlt-icon-row:before {
  content: "\\e9ed";
}

.dlt-icon-ruler:before {
  content: "\\e9ee";
}

.dlt-icon-ruler-pencil:before {
  content: "\\e9ef";
}

.dlt-icon-rules:before {
  content: "\\e9f0";
}

.dlt-icon-sales-performance:before {
  content: "\\e9f1";
}

.dlt-icon-sensor:before {
  content: "\\e9f2";
}

.dlt-icon-server:before {
  content: "\\e9f3";
}

.dlt-icon-sheet-of-paper:before {
  content: "\\e9f4";
}

.dlt-icon-shield:before {
  content: "\\e9f5";
}

.dlt-icon-small-business:before {
  content: "\\e9f6";
}

.dlt-icon-stacked-organizational-chart:before {
  content: "\\e9f7";
}

.dlt-icon-storage:before {
  content: "\\e9f8";
}

.dlt-icon-submit-document:before {
  content: "\\e9f9";
}

.dlt-icon-tab:before {
  content: "\\e9fa";
}

.dlt-icon-table:before {
  content: "\\e9fb";
}

.dlt-icon-tag:before {
  content: "\\e9fc";
}

.dlt-icon-target:before {
  content: "\\e9fd";
}

.dlt-icon-team:before {
  content: "\\e9fe";
}

.dlt-icon-temperature:before {
  content: "\\e9ff";
}

.dlt-icon-text-input:before {
  content: "\\ea00";
}

.dlt-icon-wireless-network:before {
  content: "\\ea01";
}

.dlt-icon-workspace:before {
  content: "\\ea02";
}

.dlt-icon-blockly:before {
  content: "\\ea21";
}

.dlt-icon-intelligence:before {
  content: "\\ea22";
}

.dlt-icon-replace:before {
  content: "\\ea23";
}

.dlt-icon-account-disable:before {
  content: "\\ea29";
}

.dlt-icon-account-enable:before {
  content: "\\ea2a";
}

.dlt-icon-facebook:before {
  content: "\\ea2b";
}

.dlt-icon-instagram:before {
  content: "\\ea2c";
}

.dlt-icon-linkedin:before {
  content: "\\ea2d";
}

.dlt-icon-pinterest:before {
  content: "\\ea2e";
}

.dlt-icon-twitter:before {
  content: "\\ea2f";
}

.dlt-icon-youtube:before {
  content: "\\ea30";
}

:host {
  display: inline-block;
  overflow: hidden;
}

.dlt-button {
  color: var(--dlt-color-text-interactive-primary, #1776BF);
  text-decoration: none;
  padding: 0 var(--dlt-spacing-1-x-half, 0.75rem);
  font-family: var(--dlt-font-family-base, "Roboto", "Helvetica", Arial, sans-serif);
  font-size: var(--dlt-font-size-xs, 0.875rem);
  font-weight: var(--dlt-font-weight-regular, 400);
  line-height: var(--dlt-buttons-line-height, 30px);
  cursor: pointer;
  border-radius: var(--dlt-border-radii-default, 0);
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) transparent;
  outline: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) transparent;
  outline-offset: -2px;
  margin: 0;
  display: inline-flex;
  align-items: center;
}

/* Primary Buttons with states -- Start --*/
.dlt-button-primary {
  color: var(--dlt-color-text-interactive-inverse, #FFF);
  background-color: var(--dlt-color-background-interactive-primary-default, #1776BF);
}
.dlt-button-primary:hover:not(:active):enabled, .dlt-button-primary:focus {
  color: var(--dlt-color-text-interactive-primary, #1776BF);
  background-color: var(--dlt-color-background-interactive-primary-hover, #FFF);
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline-offset: -2px;
}
.dlt-button-primary:focus {
  background-color: var(--dlt-color-background-interactive-primary-focus, #FFF);
}
.dlt-button-primary:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  cursor: not-allowed;
}
.dlt-button-primary:active {
  background-color: var(--dlt-color-background-interactive-primary-active, #0F4C7B);
  border-color: var(--dlt-color-background-interactive-primary-active, #0F4C7B);
  outline: none;
  color: var(--dlt-color-text-interactive-inverse, #FFF);
}

/* Primary Buttons with states -- End -- */
/* Secondary Buttons with states -- Start --  */
.dlt-button-secondary {
  background-color: var(--dlt-color-background-interactive-secondary-default, #FFF);
  border-color: var(--dlt-color-background-interactive-primary-default, #1776BF);
}
.dlt-button-secondary:hover:not(:disabled), .dlt-button-secondary:focus {
  background-color: var(--dlt-color-background-interactive-secondary-default, #FFF);
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline-offset: -2px;
}
.dlt-button-secondary:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  cursor: not-allowed;
}
.dlt-button-secondary:active {
  color: var(--dlt-color-text-interactive-primary, #1776BF) !important;
  background-color: var(--dlt-color-background-interactive-secondary-active, #CDE6F9) !important;
  border-color: var(--dlt-color-background-interactive-primary-default, #1776BF) !important;
}

/* Secondary Buttons with states -- End --  */
/* Secondary White Buttons with states -- Start --  */
.dlt-button-secondary-inverse {
  background-color: transparent;
  border-color: var(--dlt-color-text-interactive-inverse, #FFF);
  color: var(--dlt-color-text-interactive-inverse, #FFF);
}
.dlt-button-secondary-inverse:hover:not(:disabled), .dlt-button-secondary-inverse:focus {
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-text-interactive-inverse, #FFF);
  outline: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) var(--dlt-color-text-interactive-inverse, #FFF);
  outline-offset: -2px;
  color: var(--dlt-color-text-interactive-inverse, #FFF);
  text-decoration: none;
}
.dlt-button-secondary-inverse:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  cursor: not-allowed;
}
.dlt-button-secondary-inverse:active {
  color: var(--dlt-color-text-interactive-inverse, #FFF) !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
}

/* Secondary White Buttons with states -- End --  */
/* Tertiary Buttons with states -- Start --  */
.dlt-button-tertiary {
  background-color: transparent;
  border-color: transparent;
  color: var(--dlt-color-text-interactive-primary, #1776BF);
}
.dlt-button-tertiary:hover:not(:disabled), .dlt-button-tertiary:focus {
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline-offset: -2px;
  color: var(--dlt-color-text-interactive-primary, #1776BF);
  text-decoration: none;
}
.dlt-button-tertiary:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  cursor: not-allowed;
}
.dlt-button-tertiary:active {
  color: var(--dlt-color-text-interactive-primary, #1776BF) !important;
  background-color: var(--dlt-color-background-interactive-secondary-active, #CDE6F9) !important;
  border-color: var(--dlt-color-background-interactive-primary-default, #1776BF) !important;
}

.dlt-button-tertiary-inverse {
  background-color: transparent;
  border-color: transparent;
  color: var(--dlt-color-text-interactive-inverse, #FFF);
}
.dlt-button-tertiary-inverse:hover:not(:disabled), .dlt-button-tertiary-inverse:focus {
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-text-interactive-inverse, #FFF);
  outline: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) var(--dlt-color-text-interactive-inverse, #FFF);
  outline-offset: -2px;
  color: var(--dlt-color-text-interactive-inverse, #FFF);
  text-decoration: none;
}
.dlt-button-tertiary-inverse:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  cursor: not-allowed;
}
.dlt-button-tertiary-inverse:active {
  color: var(--dlt-color-text-interactive-inverse, #FFF) !important;
  background-color: rgba(0, 0, 0, 0.2) !important;
}

/* Secondary White Buttons with states -- End --  */
/* Emphasis Buttons with states -- Start --  */
.dlt-button-emphasis {
  color: var(--dlt-color-text-interactive-inverse, #FFF);
  border: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-accent-default, #E0007F);
  background: var(--dlt-color-background-interactive-accent-default, #E0007F);
  border-radius: var(--dlt-border-radii-emphasis, 20px);
  line-height: var(--dlt-buttons-accent-line-height, 28px);
  outline: none;
}
.dlt-button-emphasis:hover:not(:focus):enabled, .dlt-button-emphasis:focus {
  border: var(--dlt-border-width-hover, 2px) var(--dlt-border-style-hover, solid) var(--dlt-color-background-interactive-accent-default, #E0007F);
  color: var(--dlt-color-background-interactive-accent-default, #E0007F);
  background: var(--dlt-color-background-interactive-accent-hover, #FFF);
  outline: none;
}
.dlt-button-emphasis:focus {
  background-color: var(--dlt-color-background-interactive-accent-focus, #FFF);
}
.dlt-button-emphasis:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  cursor: not-allowed;
  color: var(--dlt-color-text-interactive-inverse, #FFF);
}
.dlt-button-emphasis:active {
  color: var(--dlt-color-text-interactive-inverse, #FFF) !important;
  background-color: var(--dlt-color-background-interactive-accent-active, #7A0045) !important;
  border-color: var(--dlt-color-background-interactive-accent-active, #7A0045) !important;
  outline: none;
}

/* Icon Button --Start--*/
.dlt-button-icon {
  background-color: transparent;
  padding: 0;
  margin: 0;
  justify-content: center;
  height: var(--dlt-sizing-md, 2rem);
  width: var(--dlt-sizing-md, 2rem);
  cursor: pointer;
}
.dlt-button-icon:not(.btn-selected):not(:active):hover:enabled, .dlt-button-icon:focus {
  border: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
}
.dlt-button-icon:disabled {
  opacity: var(--dlt-opacity-disabled, 0.5);
  color: var(--dlt-color-text-interactive-primary, #1776BF);
  cursor: not-allowed;
}
.dlt-button-icon:active:enabled {
  color: var(--dlt-color-text-interactive-primary, #1776BF);
  background-color: var(--dlt-color-background-interactive-secondary-active, #CDE6F9);
  border-color: var(--dlt-color-background-interactive-primary-default, #1776BF);
  outline: var(--dlt-border-width-default, 1px) var(--dlt-border-style-default, solid) var(--dlt-color-background-interactive-primary-default, #1776BF);
}
.dlt-button-icon .dlt-icon {
  font-size: var(--dlt-font-size-xxl, 1.5rem);
}

/*Icon Button -- End --*/
/* Emphasis Buttons with states -- End --*/
/* Button sizing -- Start --*/
.dlt-button--lg {
  line-height: var(--dlt-buttons-line-height-lg, 38px);
  padding: 0 var(--dlt-spacing-2-x, 1rem);
}

.dlt-button--sm {
  line-height: var(--dlt-buttons-line-height-sm, 22px);
  font-size: var(--dlt-font-size-xxs, 0.75rem);
  padding: 0 var(--dlt-spacing-1-x, 0.5rem);
}

.dlt-icon--lg {
  font-size: var(--dlt-font-size-xxl, 1.5rem);
  float: left;
  margin-right: 0.5rem;
}`;

/**
 * An example element.ß
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let DltButton = class DltButton extends s {
    constructor() {
        super(...arguments);
        /**
         * `true` if there is a non-icon content.
         */
        //  private hasMainContent = true;
        /**
          * `true` if the button should have input focus when the page loads.
          */
        this.autofocus = false;
        /**
         * `true` if the button should be disabled.
         */
        this.disabled = false;
        /**
         * Button icon layout.
         */
        this.iconLayout = false;
        /**
         * Button icon only layout.
         */
        this.iconOnly = false;
        /**
         * `true` if expressive theme enabled.
         */
        this.isExpressive = false;
        /**
         * Button variant.
         */
        this.variant = BUTTON_VARIANT.PRIMARY;
        /**
         * The a11y role for `<a>`.
         */
        this.linkRole = 'button';
        /**
         * Icon name for icon button
         */
        this.icon = '';
        /**
         * Button size.
         */
        this.size = BUTTON_SIZE.REGULAR;
    }
    render() {
        const { autofocus, disabled, download, href, hreflang, isExpressive, linkRole, variant, ping, rel, size, target, type, icon, iconOnly } = this;
        const classes = o({
            [`dlt-button`]: true,
            [`dlt-button-${variant}`]: variant,
            [`dlt-button--disabled`]: disabled,
            [`dlt-button-icon`]: iconOnly,
            [`dlt-button--sm`]: size === 'sm' && !isExpressive,
            [`dlt-button--lg`]: size === 'lg',
        });
        const icon_class = o({
            [`dlt-icon--lg`]: !iconOnly,
            [`dlt-icon`]: iconOnly,
            [icon]: icon
        });
        if (href) {
            return disabled
                ? $ `
            <p id="button" part="button" class="${classes}">
              <slot></slot>
            </p>
          `
                : $ `
            <a
              id="button"
              part="button"
              role="${ifNonNull(linkRole)}"
              class="${classes}"
              download="${ifNonNull(download)}"
              href="${ifNonNull(href)}"
              hreflang="${ifNonNull(hreflang)}"
              ping="${ifNonNull(ping)}"
              rel="${ifNonNull(rel)}"
              target="${ifNonNull(target)}"
              type="${ifNonNull(type)}">
              <slot></slot>
            </a>
          `;
        }
        return icon
            ? $ `
      <button
        id="button"
        part="button"
        class="${classes}"
        ?autofocus="${autofocus}"
        ?disabled="${disabled}"
        type="${ifNonNull(type)}">
        <i class="${icon_class}"></i>
        <slot></slot>
      </button>
    `
            : $ `
    <button
      id="button"
      part="button"
      class="${classes}"
      ?autofocus="${autofocus}"
      ?disabled="${disabled}"
      type="${ifNonNull(type)}">      
      <slot></slot>
    </button>
  `;
    }
};
DltButton.styles = css_248z;
__decorate([
    e$1({ type: Boolean, reflect: true })
], DltButton.prototype, "autofocus", void 0);
__decorate([
    e$1({ type: Boolean, reflect: true })
], DltButton.prototype, "disabled", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "download", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "href", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "hreflang", void 0);
__decorate([
    e$1({ type: Boolean, reflect: true, attribute: 'show-icon' })
], DltButton.prototype, "iconLayout", void 0);
__decorate([
    e$1({ type: Boolean, reflect: true, attribute: 'icon-only' })
], DltButton.prototype, "iconOnly", void 0);
__decorate([
    e$1({ type: Boolean, reflect: true })
], DltButton.prototype, "isExpressive", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "variant", void 0);
__decorate([
    e$1({ attribute: 'link-role' })
], DltButton.prototype, "linkRole", void 0);
__decorate([
    e$1({ attribute: 'icon' })
], DltButton.prototype, "icon", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "ping", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "rel", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "size", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "target", void 0);
__decorate([
    e$1({ reflect: true })
], DltButton.prototype, "type", void 0);
DltButton = __decorate([
    n$1('dlt-button')
], DltButton);
//# sourceMappingURL=index.js.map
