import{A as j,C as B,Ea as ne,F as V,H as z,Ha as K,Ia as m,La as S,M as U,Pa as re,Pd as ce,Ra as oe,W as M,X as W,Z as C,bb as ae,c as k,ca as h,da as l,f as g,fa as T,g as ee,ha as a,ia as R,m as x,pa as u,q as F,r as te,sc as _,u as ie,x as se}from"./chunk-RDBCIR3G.js";import{a as P}from"./chunk-2NFLSA4Y.js";var Z;try{Z=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Z=!1}var f=(()=>{let e=class e{constructor(t){this._platformId=t,this.isBrowser=this._platformId?ce(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||Z)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}};e.\u0275fac=function(s){return new(s||e)(a(re))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var D;function Ee(){if(D==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>D=!0}))}finally{D=D||!1}return D}function G(i){return Ee()?i:!!i.capture}var b;function ht(){if(b==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return b=!1,b;if("scrollBehavior"in document.documentElement.style)b=!0;else{let i=Element.prototype.scrollTo;i?b=!/\{\s*\[native code\]\s*\}/.test(i.toString()):b=!1}}return b}var H;function we(){if(H==null){let i=typeof document<"u"?document.head:null;H=!!(i&&(i.createShadowRoot||i.attachShadow))}return H}function de(i){if(we()){let e=i.getRootNode?i.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&e instanceof ShadowRoot)return e}return null}function Ae(){let i=typeof document<"u"&&document?document.activeElement:null;for(;i&&i.shadowRoot;){let e=i.shadowRoot.activeElement;if(e===i)break;i=e}return i}function E(i){return i.composedPath?i.composedPath()[0]:i.target}function lt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ut(i,...e){return e.length?e.some(o=>i[o]):i.altKey||i.shiftKey||i.ctrlKey||i.metaKey}function Ce(i,e=0){return Te(i)?Number(i):arguments.length===2?e:0}function Te(i){return!isNaN(parseFloat(i))&&!isNaN(Number(i))}function Y(i){return Array.isArray(i)?i:[i]}function mt(i){return i==null?"":typeof i=="string"?i:`${i}px`}function w(i){return i instanceof S?i.nativeElement:i}var Re=(()=>{let e=class e{create(t){return typeof MutationObserver>"u"?null:new MutationObserver(t)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ue=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({providers:[Re]});let i=e;return i})();var fe=new Set,I,Se=(()=>{let e=class e{constructor(t,s){this._platform=t,this._nonce=s,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Oe}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&De(t,this._nonce),this._matchMedia(t)}};e.\u0275fac=function(s){return new(s||e)(a(f),a(oe,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function De(i,e){if(!fe.has(i))try{I||(I=document.createElement("style"),e&&I.setAttribute("nonce",e),I.setAttribute("type","text/css"),document.head.appendChild(I)),I.sheet&&(I.sheet.insertRule(`@media ${i} {body{ }}`,0),fe.add(i))}catch(o){console.error(o)}}function Oe(i){return{matches:i==="all"||i==="",media:i,addListener:()=>{},removeListener:()=>{}}}var me=(()=>{let e=class e{constructor(t,s){this._mediaMatcher=t,this._zone=s,this._queries=new Map,this._destroySubject=new g}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return _e(Y(t)).some(n=>this._registerQuery(n).mql.matches)}observe(t){let n=_e(Y(t)).map(c=>this._registerQuery(c).observable),r=te(n);return r=ie(r.pipe(z(1)),r.pipe(M(1),V(0))),r.pipe(F(c=>{let d={matches:!1,breakpoints:{}};return c.forEach(({matches:p,query:v})=>{d.matches=d.matches||p,d.breakpoints[v]=p}),d}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let s=this._mediaMatcher.matchMedia(t),r={observable:new k(c=>{let d=p=>this._zone.run(()=>c.next(p));return s.addListener(d),()=>{s.removeListener(d)}}).pipe(W(s),F(({matches:c})=>({query:t,matches:c})),C(this._destroySubject)),mql:s};return this._queries.set(t,r),r}};e.\u0275fac=function(s){return new(s||e)(a(Se),a(m))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function _e(i){return i.map(e=>e.split(",")).reduce((e,o)=>e.concat(o)).map(e=>e.trim())}var Me=(()=>{let e=class e{constructor(t){this._platform=t}isDisabled(t){return t.hasAttribute("disabled")}isVisible(t){return Le(t)&&getComputedStyle(t).visibility==="visible"}isTabbable(t){if(!this._platform.isBrowser)return!1;let s=Ne(Ke(t));if(s&&(pe(s)===-1||!this.isVisible(s)))return!1;let n=t.nodeName.toLowerCase(),r=pe(t);return t.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!Ue(t)?!1:n==="audio"?t.hasAttribute("controls")?r!==-1:!1:n==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||t.hasAttribute("controls"):t.tabIndex>=0}isFocusable(t,s){return We(t)&&!this.isDisabled(t)&&(s?.ignoreVisibility||this.isVisible(t))}};e.\u0275fac=function(s){return new(s||e)(a(f))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function Ne(i){try{return i.frameElement}catch{return null}}function Le(i){return!!(i.offsetWidth||i.offsetHeight||typeof i.getClientRects=="function"&&i.getClientRects().length)}function Pe(i){let e=i.nodeName.toLowerCase();return e==="input"||e==="select"||e==="button"||e==="textarea"}function je(i){return Ve(i)&&i.type=="hidden"}function Be(i){return ze(i)&&i.hasAttribute("href")}function Ve(i){return i.nodeName.toLowerCase()=="input"}function ze(i){return i.nodeName.toLowerCase()=="a"}function be(i){if(!i.hasAttribute("tabindex")||i.tabIndex===void 0)return!1;let e=i.getAttribute("tabindex");return!!(e&&!isNaN(parseInt(e,10)))}function pe(i){if(!be(i))return null;let e=parseInt(i.getAttribute("tabindex")||"",10);return isNaN(e)?-1:e}function Ue(i){let e=i.nodeName.toLowerCase(),o=e==="input"&&i.type;return o==="text"||o==="password"||e==="select"||e==="textarea"}function We(i){return je(i)?!1:Pe(i)||Be(i)||i.hasAttribute("contenteditable")||be(i)}function Ke(i){return i.ownerDocument&&i.ownerDocument.defaultView||window}var X=class{get enabled(){return this._enabled}set enabled(e){this._enabled=e,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}constructor(e,o,t,s,n=!1,r){this._element=e,this._checker=o,this._ngZone=t,this._document=s,this._injector=r,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,n||this.attachAnchors()}destroy(){let e=this._startAnchor,o=this._endAnchor;e&&(e.removeEventListener("focus",this.startAnchorListener),e.remove()),o&&(o.removeEventListener("focus",this.endAnchorListener),o.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusInitialElement(e)))})}focusFirstTabbableElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusFirstTabbableElement(e)))})}focusLastTabbableElementWhenReady(e){return new Promise(o=>{this._executeOnStable(()=>o(this.focusLastTabbableElement(e)))})}_getRegionBoundary(e){let o=this._element.querySelectorAll(`[cdk-focus-region-${e}], [cdkFocusRegion${e}], [cdk-focus-${e}]`);return e=="start"?o.length?o[0]:this._getFirstTabbableElement(this._element):o.length?o[o.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(e){let o=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(o){if(!this._checker.isFocusable(o)){let t=this._getFirstTabbableElement(o);return t?.focus(e),!!t}return o.focus(e),!0}return this.focusFirstTabbableElement(e)}focusFirstTabbableElement(e){let o=this._getRegionBoundary("start");return o&&o.focus(e),!!o}focusLastTabbableElement(e){let o=this._getRegionBoundary("end");return o&&o.focus(e),!!o}hasAttached(){return this._hasAttached}_getFirstTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let o=e.children;for(let t=0;t<o.length;t++){let s=o[t].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(o[t]):null;if(s)return s}return null}_getLastTabbableElement(e){if(this._checker.isFocusable(e)&&this._checker.isTabbable(e))return e;let o=e.children;for(let t=o.length-1;t>=0;t--){let s=o[t].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(o[t]):null;if(s)return s}return null}_createAnchor(){let e=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,e),e.classList.add("cdk-visually-hidden"),e.classList.add("cdk-focus-trap-anchor"),e.setAttribute("aria-hidden","true"),e}_toggleAnchorTabIndex(e,o){e?o.setAttribute("tabindex","0"):o.removeAttribute("tabindex")}toggleAnchors(e){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(e,this._startAnchor),this._toggleAnchorTabIndex(e,this._endAnchor))}_executeOnStable(e){this._injector?ae(e,{injector:this._injector}):setTimeout(e)}},Jt=(()=>{let e=class e{constructor(t,s,n){this._checker=t,this._ngZone=s,this._injector=R(ne),this._document=n}create(t,s=!1){return new X(t,this._checker,this._ngZone,this._document,s,this._injector)}};e.\u0275fac=function(s){return new(s||e)(a(Me),a(m),a(_))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function He(i){return i.buttons===0||i.detail===0}function Ze(i){let e=i.touches&&i.touches[0]||i.changedTouches&&i.changedTouches[0];return!!e&&e.identifier===-1&&(e.radiusX==null||e.radiusX===1)&&(e.radiusY==null||e.radiusY===1)}var Ge=new T("cdk-input-modality-detector-options"),$e={ignoreKeys:[18,17,224,91,16]},Ie=650,A=G({passive:!0,capture:!0}),Ye=(()=>{let e=class e{get mostRecentModality(){return this._modality.value}constructor(t,s,n,r){this._platform=t,this._mostRecentTarget=null,this._modality=new ee(null),this._lastTouchMs=0,this._onKeydown=c=>{this._options?.ignoreKeys?.some(d=>d===c.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=E(c))},this._onMousedown=c=>{Date.now()-this._lastTouchMs<Ie||(this._modality.next(He(c)?"keyboard":"mouse"),this._mostRecentTarget=E(c))},this._onTouchstart=c=>{if(Ze(c)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=E(c)},this._options=P(P({},$e),r),this.modalityDetected=this._modality.pipe(M(1)),this.modalityChanged=this.modalityDetected.pipe(U()),t.isBrowser&&s.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,A),n.addEventListener("mousedown",this._onMousedown,A),n.addEventListener("touchstart",this._onTouchstart,A)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,A),document.removeEventListener("mousedown",this._onMousedown,A),document.removeEventListener("touchstart",this._onTouchstart,A))}};e.\u0275fac=function(s){return new(s||e)(a(f),a(m),a(_),a(Ge,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var L=function(i){return i[i.IMMEDIATE=0]="IMMEDIATE",i[i.EVENTUAL=1]="EVENTUAL",i}(L||{}),Qe=new T("cdk-focus-monitor-default-options"),N=G({passive:!0,capture:!0}),ei=(()=>{let e=class e{constructor(t,s,n,r,c){this._ngZone=t,this._platform=s,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new g,this._rootNodeFocusAndBlurListener=d=>{let p=E(d);for(let v=p;v;v=v.parentElement)d.type==="focus"?this._onFocus(d,v):this._onBlur(d,v)},this._document=r,this._detectionMode=c?.detectionMode||L.IMMEDIATE}monitor(t,s=!1){let n=w(t);if(!this._platform.isBrowser||n.nodeType!==1)return x();let r=de(n)||this._getDocument(),c=this._elementInfo.get(n);if(c)return s&&(c.checkChildren=!0),c.subject;let d={checkChildren:s,subject:new g,rootNode:r};return this._elementInfo.set(n,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(t){let s=w(t),n=this._elementInfo.get(s);n&&(n.subject.complete(),this._setClasses(s),this._elementInfo.delete(s),this._removeGlobalListeners(n))}focusVia(t,s,n){let r=w(t),c=this._getDocument().activeElement;r===c?this._getClosestElementsInfo(r).forEach(([d,p])=>this._originChanged(d,s,p)):(this._setOrigin(s),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((t,s)=>this.stopMonitoring(s))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(t){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(t)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:t&&this._isLastInteractionFromInputLabel(t)?"mouse":"program"}_shouldBeAttributedToTouch(t){return this._detectionMode===L.EVENTUAL||!!t?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(t,s){t.classList.toggle("cdk-focused",!!s),t.classList.toggle("cdk-touch-focused",s==="touch"),t.classList.toggle("cdk-keyboard-focused",s==="keyboard"),t.classList.toggle("cdk-mouse-focused",s==="mouse"),t.classList.toggle("cdk-program-focused",s==="program")}_setOrigin(t,s=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=t,this._originFromTouchInteraction=t==="touch"&&s,this._detectionMode===L.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?Ie:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(t,s){let n=this._elementInfo.get(s),r=E(t);!n||!n.checkChildren&&s!==r||this._originChanged(s,this._getFocusOrigin(r),n)}_onBlur(t,s){let n=this._elementInfo.get(s);!n||n.checkChildren&&t.relatedTarget instanceof Node&&s.contains(t.relatedTarget)||(this._setClasses(s),this._emitOrigin(n,null))}_emitOrigin(t,s){t.subject.observers.length&&this._ngZone.run(()=>t.subject.next(s))}_registerGlobalListeners(t){if(!this._platform.isBrowser)return;let s=t.rootNode,n=this._rootNodeFocusListenerCount.get(s)||0;n||this._ngZone.runOutsideAngular(()=>{s.addEventListener("focus",this._rootNodeFocusAndBlurListener,N),s.addEventListener("blur",this._rootNodeFocusAndBlurListener,N)}),this._rootNodeFocusListenerCount.set(s,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(C(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(t){let s=t.rootNode;if(this._rootNodeFocusListenerCount.has(s)){let n=this._rootNodeFocusListenerCount.get(s);n>1?this._rootNodeFocusListenerCount.set(s,n-1):(s.removeEventListener("focus",this._rootNodeFocusAndBlurListener,N),s.removeEventListener("blur",this._rootNodeFocusAndBlurListener,N),this._rootNodeFocusListenerCount.delete(s))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(t,s,n){this._setClasses(t,s),this._emitOrigin(n,s),this._lastFocusOrigin=s}_getClosestElementsInfo(t){let s=[];return this._elementInfo.forEach((n,r)=>{(r===t||n.checkChildren&&r.contains(t))&&s.push([r,n])}),s}_isLastInteractionFromInputLabel(t){let{_mostRecentTarget:s,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!s||s===t||t.nodeName!=="INPUT"&&t.nodeName!=="TEXTAREA"||t.disabled)return!1;let r=t.labels;if(r){for(let c=0;c<r.length;c++)if(r[c].contains(s))return!0}return!1}};e.\u0275fac=function(s){return new(s||e)(a(m),a(f),a(Ye),a(_,8),a(Qe,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var y=function(i){return i[i.NONE=0]="NONE",i[i.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",i[i.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",i}(y||{}),ge="cdk-high-contrast-black-on-white",ve="cdk-high-contrast-white-on-black",q="cdk-high-contrast-active",qe=(()=>{let e=class e{constructor(t,s){this._platform=t,this._document=s,this._breakpointSubscription=R(me).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return y.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let s=this._document.defaultView||window,n=s&&s.getComputedStyle?s.getComputedStyle(t):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(t.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return y.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return y.BLACK_ON_WHITE}return y.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(q,ge,ve),this._hasCheckedHighContrastMode=!0;let s=this.getHighContrastMode();s===y.BLACK_ON_WHITE?t.add(q,ge):s===y.WHITE_ON_BLACK&&t.add(q,ve)}}};e.\u0275fac=function(s){return new(s||e)(a(f),a(_))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),ti=(()=>{let e=class e{constructor(t){t._applyBodyHighContrastModeCssClasses()}};e.\u0275fac=function(s){return new(s||e)(a(qe))},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[ue]});let i=e;return i})();var Je=new T("cdk-dir-doc",{providedIn:"root",factory:et});function et(){return R(_)}var tt=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function it(i){let e=i?.toLowerCase()||"";return e==="auto"&&typeof navigator<"u"&&navigator?.language?tt.test(navigator.language)?"rtl":"ltr":e==="rtl"?"rtl":"ltr"}var _i=(()=>{let e=class e{constructor(t){if(this.value="ltr",this.change=new K,t){let s=t.body?t.body.dir:null,n=t.documentElement?t.documentElement.dir:null;this.value=it(s||n||"ltr")}}ngOnDestroy(){this.change.complete()}};e.\u0275fac=function(s){return new(s||e)(a(Je,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var J=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({});let i=e;return i})();var st=20,Ki=(()=>{let e=class e{constructor(t,s,n){this._ngZone=t,this._platform=s,this._scrolled=new g,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(t){this.scrollContainers.has(t)||this.scrollContainers.set(t,t.elementScrolled().subscribe(()=>this._scrolled.next(t)))}deregister(t){let s=this.scrollContainers.get(t);s&&(s.unsubscribe(),this.scrollContainers.delete(t))}scrolled(t=st){return this._platform.isBrowser?new k(s=>{this._globalSubscription||this._addGlobalListener();let n=t>0?this._scrolled.pipe(B(t)).subscribe(s):this._scrolled.subscribe(s);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):x()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((t,s)=>this.deregister(s)),this._scrolled.complete()}ancestorScrolled(t,s){let n=this.getAncestorScrollContainers(t);return this.scrolled(s).pipe(j(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(t){let s=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,t)&&s.push(r)}),s}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(t,s){let n=w(s),r=t.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let t=this._getWindow();return se(t.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}};e.\u0275fac=function(s){return new(s||e)(a(m),a(f),a(_,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var nt=20,Hi=(()=>{let e=class e{constructor(t,s,n){this._platform=t,this._change=new g,this._changeListener=r=>{this._change.next(r)},this._document=n,s.runOutsideAngular(()=>{if(t.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let t=this._getWindow();t.removeEventListener("resize",this._changeListener),t.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let t={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),t}getViewportRect(){let t=this.getViewportScrollPosition(),{width:s,height:n}=this.getViewportSize();return{top:t.top,left:t.left,bottom:t.top+n,right:t.left+s,height:n,width:s}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let t=this._document,s=this._getWindow(),n=t.documentElement,r=n.getBoundingClientRect(),c=-r.top||t.body.scrollTop||s.scrollY||n.scrollTop||0,d=-r.left||t.body.scrollLeft||s.scrollX||n.scrollLeft||0;return{top:c,left:d}}change(t=nt){return t>0?this._change.pipe(B(t)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let t=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:t.innerWidth,height:t.innerHeight}:{width:0,height:0}}};e.\u0275fac=function(s){return new(s||e)(a(f),a(m),a(_,8))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var ye=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({});let i=e;return i})(),Zi=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=u({type:e}),e.\u0275inj=l({imports:[J,ye,J,ye]});let i=e;return i})();export{f as a,G as b,ht as c,de as d,Ae as e,E as f,lt as g,ut as h,Ce as i,Y as j,mt as k,w as l,Me as m,Jt as n,He as o,Ze as p,ei as q,ti as r,_i as s,J as t,Ki as u,Hi as v,Zi as w};
