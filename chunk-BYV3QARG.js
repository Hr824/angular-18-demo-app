import{Ba as ae,e as f}from"./chunk-BNZ7BCDF.js";import{A as P,C as j,Ea as se,F as B,H as V,Ha as W,Ia as _,M as z,Ma as S,Qa as ne,Sa as re,W as x,X as U,Z as A,c as k,da as d,ea as l,f as p,g as J,ga as C,ia as o,ja as T,m as O,q as M,qa as h,r as ee,rb as oe,u as te,x as ie}from"./chunk-TKWDX6SU.js";import{a as L}from"./chunk-2NFLSA4Y.js";var H;try{H=typeof Intl<"u"&&Intl.v8BreakIterator}catch{H=!1}var u=(()=>{class t{constructor(e){this._platformId=e,this.isBrowser=this._platformId?ae(this._platformId):typeof document=="object"&&!!document,this.EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent),this.TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent),this.BLINK=this.isBrowser&&!!(window.chrome||H)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT,this.WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT,this.IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window),this.FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent),this.ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT,this.SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT}static{this.\u0275fac=function(i){return new(i||t)(o(ne))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var R;function ye(){if(R==null&&typeof window<"u")try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:()=>R=!0}))}finally{R=R||!1}return R}function Z(t){return ye()?t:!!t.capture}var v;function dt(){if(v==null){if(typeof document!="object"||!document||typeof Element!="function"||!Element)return v=!1,v;if("scrollBehavior"in document.documentElement.style)v=!0;else{let t=Element.prototype.scrollTo;t?v=!/\{\s*\[native code\]\s*\}/.test(t.toString()):v=!1}}return v}var K;function Ee(){if(K==null){let t=typeof document<"u"?document.head:null;K=!!(t&&(t.createShadowRoot||t.attachShadow))}return K}function ce(t){if(Ee()){let s=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<"u"&&ShadowRoot&&s instanceof ShadowRoot)return s}return null}function we(){let t=typeof document<"u"&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let s=t.shadowRoot.activeElement;if(s===t)break;t=s}return t}function y(t){return t.composedPath?t.composedPath()[0]:t.target}function lt(){return typeof __karma__<"u"&&!!__karma__||typeof jasmine<"u"&&!!jasmine||typeof jest<"u"&&!!jest||typeof Mocha<"u"&&!!Mocha}function ht(t,...s){return s.length?s.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}function Ae(t,s=0){return Ce(t)?Number(t):arguments.length===2?s:0}function Ce(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function $(t){return Array.isArray(t)?t:[t]}function _t(t){return t==null?"":typeof t=="string"?t:`${t}px`}function E(t){return t instanceof S?t.nativeElement:t}var Te=(()=>{class t{create(e){return typeof MutationObserver>"u"?null:new MutationObserver(e)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var he=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=l({providers:[Te]})}}return t})();var ue=new Set,b,Se=(()=>{class t{constructor(e,i){this._platform=e,this._nonce=i,this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):De}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&Re(e,this._nonce),this._matchMedia(e)}static{this.\u0275fac=function(i){return new(i||t)(o(u),o(re,8))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Re(t,s){if(!ue.has(t))try{b||(b=document.createElement("style"),s&&b.setAttribute("nonce",s),b.setAttribute("type","text/css"),document.head.appendChild(b)),b.sheet&&(b.sheet.insertRule(`@media ${t} {body{ }}`,0),ue.add(t))}catch(e){console.error(e)}}function De(t){return{matches:t==="all"||t==="",media:t,addListener:()=>{},removeListener:()=>{}}}var _e=(()=>{class t{constructor(e,i){this._mediaMatcher=e,this._zone=i,this._queries=new Map,this._destroySubject=new p}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return fe($(e)).some(n=>this._registerQuery(n).mql.matches)}observe(e){let n=fe($(e)).map(a=>this._registerQuery(a).observable),r=ee(n);return r=te(r.pipe(V(1)),r.pipe(x(1),B(0))),r.pipe(M(a=>{let c={matches:!1,breakpoints:{}};return a.forEach(({matches:m,query:g})=>{c.matches=c.matches||m,c.breakpoints[g]=m}),c}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),r={observable:new k(a=>{let c=m=>this._zone.run(()=>a.next(m));return i.addListener(c),()=>{i.removeListener(c)}}).pipe(U(i),M(({matches:a})=>({query:e,matches:a})),A(this._destroySubject)),mql:i};return this._queries.set(e,r),r}static{this.\u0275fac=function(i){return new(i||t)(o(Se),o(_))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function fe(t){return t.map(s=>s.split(",")).reduce((s,e)=>s.concat(e)).map(s=>s.trim())}var xe=(()=>{class t{constructor(e){this._platform=e}isDisabled(e){return e.hasAttribute("disabled")}isVisible(e){return Ne(e)&&getComputedStyle(e).visibility==="visible"}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=Fe(We(e));if(i&&(me(i)===-1||!this.isVisible(i)))return!1;let n=e.nodeName.toLowerCase(),r=me(e);return e.hasAttribute("contenteditable")?r!==-1:n==="iframe"||n==="object"||this._platform.WEBKIT&&this._platform.IOS&&!ze(e)?!1:n==="audio"?e.hasAttribute("controls")?r!==-1:!1:n==="video"?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute("controls"):e.tabIndex>=0}isFocusable(e,i){return Ue(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static{this.\u0275fac=function(i){return new(i||t)(o(u))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Fe(t){try{return t.frameElement}catch{return null}}function Ne(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects=="function"&&t.getClientRects().length)}function Le(t){let s=t.nodeName.toLowerCase();return s==="input"||s==="select"||s==="button"||s==="textarea"}function Pe(t){return Be(t)&&t.type=="hidden"}function je(t){return Ve(t)&&t.hasAttribute("href")}function Be(t){return t.nodeName.toLowerCase()=="input"}function Ve(t){return t.nodeName.toLowerCase()=="a"}function ve(t){if(!t.hasAttribute("tabindex")||t.tabIndex===void 0)return!1;let s=t.getAttribute("tabindex");return!!(s&&!isNaN(parseInt(s,10)))}function me(t){if(!ve(t))return null;let s=parseInt(t.getAttribute("tabindex")||"",10);return isNaN(s)?-1:s}function ze(t){let s=t.nodeName.toLowerCase(),e=s==="input"&&t.type;return e==="text"||e==="password"||s==="select"||s==="textarea"}function Ue(t){return Pe(t)?!1:Le(t)||je(t)||t.hasAttribute("contenteditable")||ve(t)}function We(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var q=class{get enabled(){return this._enabled}set enabled(s){this._enabled=s,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(s,this._startAnchor),this._toggleAnchorTabIndex(s,this._endAnchor))}constructor(s,e,i,n,r=!1,a){this._element=s,this._checker=e,this._ngZone=i,this._document=n,this._injector=a,this._hasAttached=!1,this.startAnchorListener=()=>this.focusLastTabbableElement(),this.endAnchorListener=()=>this.focusFirstTabbableElement(),this._enabled=!0,r||this.attachAnchors()}destroy(){let s=this._startAnchor,e=this._endAnchor;s&&(s.removeEventListener("focus",this.startAnchorListener),s.remove()),e&&(e.removeEventListener("focus",this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener("focus",this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener("focus",this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(s)))})}focusFirstTabbableElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(s)))})}focusLastTabbableElementWhenReady(s){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(s)))})}_getRegionBoundary(s){let e=this._element.querySelectorAll(`[cdk-focus-region-${s}], [cdkFocusRegion${s}], [cdk-focus-${s}]`);return s=="start"?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(s){let e=this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(s),!!i}return e.focus(s),!0}return this.focusFirstTabbableElement(s)}focusFirstTabbableElement(s){let e=this._getRegionBoundary("start");return e&&e.focus(s),!!e}focusLastTabbableElement(s){let e=this._getRegionBoundary("end");return e&&e.focus(s),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(s){if(this._checker.isFocusable(s)&&this._checker.isTabbable(s))return s;let e=s.children;for(let i=0;i<e.length;i++){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(n)return n}return null}_getLastTabbableElement(s){if(this._checker.isFocusable(s)&&this._checker.isTabbable(s))return s;let e=s.children;for(let i=e.length-1;i>=0;i--){let n=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(n)return n}return null}_createAnchor(){let s=this._document.createElement("div");return this._toggleAnchorTabIndex(this._enabled,s),s.classList.add("cdk-visually-hidden"),s.classList.add("cdk-focus-trap-anchor"),s.setAttribute("aria-hidden","true"),s}_toggleAnchorTabIndex(s,e){s?e.setAttribute("tabindex","0"):e.removeAttribute("tabindex")}toggleAnchors(s){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(s,this._startAnchor),this._toggleAnchorTabIndex(s,this._endAnchor))}_executeOnStable(s){this._injector?oe(s,{injector:this._injector}):setTimeout(s)}},Jt=(()=>{class t{constructor(e,i,n){this._checker=e,this._ngZone=i,this._injector=T(se),this._document=n}create(e,i=!1){return new q(e,this._checker,this._ngZone,this._document,i,this._injector)}static{this.\u0275fac=function(i){return new(i||t)(o(xe),o(_),o(f))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function Ke(t){return t.buttons===0||t.detail===0}function He(t){let s=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!s&&s.identifier===-1&&(s.radiusX==null||s.radiusX===1)&&(s.radiusY==null||s.radiusY===1)}var Ze=new C("cdk-input-modality-detector-options"),Ge={ignoreKeys:[18,17,224,91,16]},be=650,w=Z({passive:!0,capture:!0}),$e=(()=>{class t{get mostRecentModality(){return this._modality.value}constructor(e,i,n,r){this._platform=e,this._mostRecentTarget=null,this._modality=new J(null),this._lastTouchMs=0,this._onKeydown=a=>{this._options?.ignoreKeys?.some(c=>c===a.keyCode)||(this._modality.next("keyboard"),this._mostRecentTarget=y(a))},this._onMousedown=a=>{Date.now()-this._lastTouchMs<be||(this._modality.next(Ke(a)?"keyboard":"mouse"),this._mostRecentTarget=y(a))},this._onTouchstart=a=>{if(He(a)){this._modality.next("keyboard");return}this._lastTouchMs=Date.now(),this._modality.next("touch"),this._mostRecentTarget=y(a)},this._options=L(L({},Ge),r),this.modalityDetected=this._modality.pipe(x(1)),this.modalityChanged=this.modalityDetected.pipe(z()),e.isBrowser&&i.runOutsideAngular(()=>{n.addEventListener("keydown",this._onKeydown,w),n.addEventListener("mousedown",this._onMousedown,w),n.addEventListener("touchstart",this._onTouchstart,w)})}ngOnDestroy(){this._modality.complete(),this._platform.isBrowser&&(document.removeEventListener("keydown",this._onKeydown,w),document.removeEventListener("mousedown",this._onMousedown,w),document.removeEventListener("touchstart",this._onTouchstart,w))}static{this.\u0275fac=function(i){return new(i||t)(o(u),o(_),o(f),o(Ze,8))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var N=function(t){return t[t.IMMEDIATE=0]="IMMEDIATE",t[t.EVENTUAL=1]="EVENTUAL",t}(N||{}),Ye=new C("cdk-focus-monitor-default-options"),F=Z({passive:!0,capture:!0}),ei=(()=>{class t{constructor(e,i,n,r,a){this._ngZone=e,this._platform=i,this._inputModalityDetector=n,this._origin=null,this._windowFocused=!1,this._originFromTouchInteraction=!1,this._elementInfo=new Map,this._monitoredElementCount=0,this._rootNodeFocusListenerCount=new Map,this._windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=window.setTimeout(()=>this._windowFocused=!1)},this._stopInputModalityDetector=new p,this._rootNodeFocusAndBlurListener=c=>{let m=y(c);for(let g=m;g;g=g.parentElement)c.type==="focus"?this._onFocus(c,g):this._onBlur(c,g)},this._document=r,this._detectionMode=a?.detectionMode||N.IMMEDIATE}monitor(e,i=!1){let n=E(e);if(!this._platform.isBrowser||n.nodeType!==1)return O();let r=ce(n)||this._getDocument(),a=this._elementInfo.get(n);if(a)return i&&(a.checkChildren=!0),a.subject;let c={checkChildren:i,subject:new p,rootNode:r};return this._elementInfo.set(n,c),this._registerGlobalListeners(c),c.subject}stopMonitoring(e){let i=E(e),n=this._elementInfo.get(i);n&&(n.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(n))}focusVia(e,i,n){let r=E(e),a=this._getDocument().activeElement;r===a?this._getClosestElementsInfo(r).forEach(([c,m])=>this._originChanged(c,i,m)):(this._setOrigin(i),typeof r.focus=="function"&&r.focus(n))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getDocument(){return this._document||document}_getWindow(){return this._getDocument().defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?"touch":"program":this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?"mouse":"program"}_shouldBeAttributedToTouch(e){return this._detectionMode===N.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle("cdk-focused",!!i),e.classList.toggle("cdk-touch-focused",i==="touch"),e.classList.toggle("cdk-keyboard-focused",i==="keyboard"),e.classList.toggle("cdk-mouse-focused",i==="mouse"),e.classList.toggle("cdk-program-focused",i==="program")}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e==="touch"&&i,this._detectionMode===N.IMMEDIATE){clearTimeout(this._originTimeoutId);let n=this._originFromTouchInteraction?be:1;this._originTimeoutId=setTimeout(()=>this._origin=null,n)}})}_onFocus(e,i){let n=this._elementInfo.get(i),r=y(e);!n||!n.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),n)}_onBlur(e,i){let n=this._elementInfo.get(i);!n||n.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(n,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,n=this._rootNodeFocusListenerCount.get(i)||0;n||this._ngZone.runOutsideAngular(()=>{i.addEventListener("focus",this._rootNodeFocusAndBlurListener,F),i.addEventListener("blur",this._rootNodeFocusAndBlurListener,F)}),this._rootNodeFocusListenerCount.set(i,n+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener("focus",this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(A(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let n=this._rootNodeFocusListenerCount.get(i);n>1?this._rootNodeFocusListenerCount.set(i,n-1):(i.removeEventListener("focus",this._rootNodeFocusAndBlurListener,F),i.removeEventListener("blur",this._rootNodeFocusAndBlurListener,F),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener("focus",this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,n){this._setClasses(e,i),this._emitOrigin(n,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((n,r)=>{(r===e||n.checkChildren&&r.contains(e))&&i.push([r,n])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:n}=this._inputModalityDetector;if(n!=="mouse"||!i||i===e||e.nodeName!=="INPUT"&&e.nodeName!=="TEXTAREA"||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(i))return!0}return!1}static{this.\u0275fac=function(i){return new(i||t)(o(_),o(u),o($e),o(f,8),o(Ye,8))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var I=function(t){return t[t.NONE=0]="NONE",t[t.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",t[t.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",t}(I||{}),pe="cdk-high-contrast-black-on-white",ge="cdk-high-contrast-white-on-black",Q="cdk-high-contrast-active",Qe=(()=>{class t{constructor(e,i){this._platform=e,this._document=i,this._breakpointSubscription=T(_e).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return I.NONE;let e=this._document.createElement("div");e.style.backgroundColor="rgb(1,2,3)",e.style.position="absolute",this._document.body.appendChild(e);let i=this._document.defaultView||window,n=i&&i.getComputedStyle?i.getComputedStyle(e):null,r=(n&&n.backgroundColor||"").replace(/ /g,"");switch(e.remove(),r){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return I.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return I.BLACK_ON_WHITE}return I.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(Q,pe,ge),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===I.BLACK_ON_WHITE?e.add(Q,pe):i===I.WHITE_ON_BLACK&&e.add(Q,ge)}}static{this.\u0275fac=function(i){return new(i||t)(o(u),o(f))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})(),ti=(()=>{class t{constructor(e){e._applyBodyHighContrastModeCssClasses()}static{this.\u0275fac=function(i){return new(i||t)(o(Qe))}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=l({imports:[he]})}}return t})();var Xe=new C("cdk-dir-doc",{providedIn:"root",factory:Je});function Je(){return T(f)}var et=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function tt(t){let s=t?.toLowerCase()||"";return s==="auto"&&typeof navigator<"u"&&navigator?.language?et.test(navigator.language)?"rtl":"ltr":s==="rtl"?"rtl":"ltr"}var _i=(()=>{class t{constructor(e){if(this.value="ltr",this.change=new W,e){let i=e.body?e.body.dir:null,n=e.documentElement?e.documentElement.dir:null;this.value=tt(i||n||"ltr")}}ngOnDestroy(){this.change.complete()}static{this.\u0275fac=function(i){return new(i||t)(o(Xe,8))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var X=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=l({})}}return t})();var it=20,Ki=(()=>{class t{constructor(e,i,n){this._ngZone=e,this._platform=i,this._scrolled=new p,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=n}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=it){return this._platform.isBrowser?new k(i=>{this._globalSubscription||this._addGlobalListener();let n=e>0?this._scrolled.pipe(j(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{n.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):O()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let n=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(P(r=>!r||n.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((n,r)=>{this._scrollableContainsElement(r,e)&&i.push(r)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let n=E(i),r=e.getElementRef().nativeElement;do if(n==r)return!0;while(n=n.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{let e=this._getWindow();return ie(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}static{this.\u0275fac=function(i){return new(i||t)(o(_),o(u),o(f,8))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var st=20,Hi=(()=>{class t{constructor(e,i,n){this._platform=e,this._change=new p,this._changeListener=r=>{this._change.next(r)},this._document=n,i.runOutsideAngular(()=>{if(e.isBrowser){let r=this._getWindow();r.addEventListener("resize",this._changeListener),r.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){let e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:n}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+n,right:e.left+i,height:n,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),n=e.documentElement,r=n.getBoundingClientRect(),a=-r.top||e.body.scrollTop||i.scrollY||n.scrollTop||0,c=-r.left||e.body.scrollLeft||i.scrollX||n.scrollLeft||0;return{top:a,left:c}}change(e=st){return e>0?this._change.pipe(j(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static{this.\u0275fac=function(i){return new(i||t)(o(u),o(_),o(f,8))}}static{this.\u0275prov=d({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();var Ie=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=l({})}}return t})(),Zi=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=h({type:t})}static{this.\u0275inj=l({imports:[X,Ie,X,Ie]})}}return t})();export{u as a,Z as b,dt as c,ce as d,we as e,y as f,lt as g,ht as h,Ae as i,$ as j,_t as k,E as l,xe as m,Jt as n,Ke as o,He as p,ei as q,ti as r,_i as s,X as t,Ki as u,Hi as v,Zi as w};