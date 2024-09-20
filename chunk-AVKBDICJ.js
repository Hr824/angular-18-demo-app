import{$ as ie,Ca as ae,Fa as C,Ia as de,M as te,U as re,V as ne,Z as oe,aa as D,bb as _,c as R,ca as h,f as W,fa as c,g as A,h as J,ha as l,ia as f,ja as se,k as X,lc as k,ma as ce,q as ee,ra as ue,rc as j,wa as M}from"./chunk-CNPTLGMH.js";import{a as m,b as I}from"./chunk-2NFLSA4Y.js";function Ke(e){e||(M(Ke),e=f(C));let n=new R(t=>e.onDestroy(t.next.bind(t)));return t=>t.pipe(oe(n))}function U(e,n){let t=!n?.manualCleanup;t&&!n?.injector&&M(U);let r=t?n?.injector?.get(C)??f(C):null,i=Le(n?.equal),o;n?.requireSync?o=_({kind:0},{equal:i}):o=_({kind:1,value:n?.initialValue},{equal:i});let s=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{if(n?.rejectErrors)throw u;o.set({kind:2,error:u})}});if(n?.requireSync&&o().kind===0)throw new D(601,!1);return r?.onDestroy(s.unsubscribe.bind(s)),j(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new D(601,!1)}},{equal:n?.equal})}function Le(e=Object.is){return(n,t)=>n.kind===1&&t.kind===1&&e(n.value,t.value)}var z={};function E(e,n){if(z[e]=(z[e]||0)+1,typeof n=="function")return N(e,(...r)=>I(m({},n(...r)),{type:e}));switch(n?n._as:"empty"){case"empty":return N(e,()=>({type:e}));case"props":return N(e,r=>I(m({},r),{type:e}));default:throw new Error("Unexpected config.")}}function O(){return{_as:"props",_p:void 0}}function N(e,n){return Object.defineProperty(n,"type",{value:e,writable:!1})}var Ie="@ngrx/store/init",v=(()=>{class e extends A{constructor(){super({type:Ie})}next(t){if(typeof t=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof t>"u")throw new TypeError("Actions must be objects");if(typeof t.type>"u")throw new TypeError("Actions must have a type property");super.next(t)}complete(){}ngOnDestroy(){super.complete()}static{this.\u0275fac=function(r){return new(r||e)}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),Ge=[v],Ae=new c("@ngrx/store Internal Root Guard"),le=new c("@ngrx/store Internal Initial State"),L=new c("@ngrx/store Initial State"),Ce=new c("@ngrx/store Reducer Factory"),fe=new c("@ngrx/store Internal Reducer Factory Provider"),je=new c("@ngrx/store Initial Reducers"),P=new c("@ngrx/store Internal Initial Reducers"),tr=new c("@ngrx/store Store Features"),pe=new c("@ngrx/store Internal Store Reducers"),rr=new c("@ngrx/store Internal Feature Reducers"),nr=new c("@ngrx/store Internal Feature Configs"),or=new c("@ngrx/store Internal Store Features"),ir=new c("@ngrx/store Internal Feature Reducers Token"),sr=new c("@ngrx/store Feature Reducers"),ye=new c("@ngrx/store User Provided Meta Reducers"),x=new c("@ngrx/store Meta Reducers"),he=new c("@ngrx/store Internal Resolved Meta Reducers"),me=new c("@ngrx/store User Runtime Checks Config"),Re=new c("@ngrx/store Internal User Runtime Checks Config"),g=new c("@ngrx/store Internal Runtime Checks"),xe=new c("@ngrx/store Check if Action types are unique"),ve=new c("@ngrx/store Root Store Provider"),cr=new c("@ngrx/store Feature State Provider");function Qe(e,n={}){let t=Object.keys(e),r={};for(let o=0;o<t.length;o++){let s=t[o];typeof e[s]=="function"&&(r[s]=e[s])}let i=Object.keys(r);return function(s,u){s=s===void 0?n:s;let d=!1,p={};for(let a=0;a<i.length;a++){let y=i[a],qe=r[y],H=s[y],Y=qe(H,u);p[y]=Y,d=d||Y!==H}return d?p:s}}function Ze(e,n){return Object.keys(e).filter(t=>t!==n).reduce((t,r)=>Object.assign(t,{[r]:e[r]}),{})}function we(...e){return function(n){if(e.length===0)return n;let t=e[e.length-1];return e.slice(0,-1).reduceRight((i,o)=>o(i),t(n))}}function Te(e,n){return Array.isArray(n)&&n.length>0&&(e=we.apply(null,[...n,e])),(t,r)=>{let i=e(t);return(o,s)=>(o=o===void 0?r:o,i(o,s))}}function He(e){let n=Array.isArray(e)&&e.length>0?we(...e):t=>t;return(t,r)=>(t=n(t),(i,o)=>(i=i===void 0?r:i,t(i,o)))}var S=class extends R{},w=class extends v{},Ye="@ngrx/store/update-reducers",V=(()=>{class e extends A{get currentReducers(){return this.reducers}constructor(t,r,i,o){super(o(i,r)),this.dispatcher=t,this.initialState=r,this.reducers=i,this.reducerFactory=o}addFeature(t){this.addFeatures([t])}addFeatures(t){let r=t.reduce((i,{reducers:o,reducerFactory:s,metaReducers:u,initialState:d,key:p})=>{let a=typeof o=="function"?He(u)(o,d):Te(s,u)(o,d);return i[p]=a,i},{});this.addReducers(r)}removeFeature(t){this.removeFeatures([t])}removeFeatures(t){this.removeReducers(t.map(r=>r.key))}addReducer(t,r){this.addReducers({[t]:r})}addReducers(t){this.reducers=m(m({},this.reducers),t),this.updateReducers(Object.keys(t))}removeReducer(t){this.removeReducers([t])}removeReducers(t){t.forEach(r=>{this.reducers=Ze(this.reducers,r)}),this.updateReducers(t)}updateReducers(t){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Ye,features:t})}ngOnDestroy(){this.complete()}static{this.\u0275fac=function(r){return new(r||e)(l(w),l(L),l(je),l(Ce))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),We=[V,{provide:S,useExisting:V},{provide:w,useExisting:v}],B=(()=>{class e extends W{ngOnDestroy(){this.complete()}static{this.\u0275fac=(()=>{let t;return function(i){return(t||(t=ae(e)))(i||e)}})()}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),Je=[B],T=class extends R{},ge=(()=>{class e extends A{static{this.INIT=Ie}constructor(t,r,i,o){super(o);let u=t.pipe(X(J)).pipe(ie(r)),d={state:o},p=u.pipe(ne(Xe,d));this.stateSubscription=p.subscribe(({state:a,action:y})=>{this.next(a),i.next(y)}),this.state=U(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}static{this.\u0275fac=function(r){return new(r||e)(l(v),l(S),l(B),l(L))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})();function Xe(e={state:void 0},[n,t]){let{state:r}=e;return{state:t(r,n),action:n}}var et=[ge,{provide:T,useExisting:ge}],b=(()=>{class e extends R{constructor(t,r,i){super(),this.actionsObserver=r,this.reducerManager=i,this.source=t,this.state=t.state}select(t,...r){return rt.call(null,t,...r)(this)}selectSignal(t,r){return j(()=>t(this.state()),r)}lift(t){let r=new e(this,this.actionsObserver,this.reducerManager);return r.operator=t,r}dispatch(t){this.actionsObserver.next(t)}next(t){this.actionsObserver.next(t)}error(t){this.actionsObserver.error(t)}complete(){this.actionsObserver.complete()}addReducer(t,r){this.reducerManager.addReducer(t,r)}removeReducer(t){this.reducerManager.removeReducer(t)}static{this.\u0275fac=function(r){return new(r||e)(l(T),l(v),l(V))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac})}}return e})(),tt=[b];function rt(e,n,...t){return function(i){let o;if(typeof e=="string"){let s=[n,...t].filter(Boolean);o=i.pipe(re(e,...s))}else if(typeof e=="function")o=i.pipe(ee(s=>e(s,n)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(te())}}var G="https://ngrx.io/guide/store/configuration/runtime-checks";function Se(e){return e===void 0}function Ee(e){return e===null}function Oe(e){return Array.isArray(e)}function nt(e){return typeof e=="string"}function ot(e){return typeof e=="boolean"}function it(e){return typeof e=="number"}function De(e){return typeof e=="object"&&e!==null}function st(e){return De(e)&&!Oe(e)}function ct(e){if(!st(e))return!1;let n=Object.getPrototypeOf(e);return n===Object.prototype||n===null}function $(e){return typeof e=="function"}function ut(e){return $(e)&&e.hasOwnProperty("\u0275cmp")}function at(e,n){return Object.prototype.hasOwnProperty.call(e,n)}var dt=!1;function lt(){return dt}function be(e,n){return e===n}function ft(e,n,t){for(let r=0;r<e.length;r++)if(!t(e[r],n[r]))return!0;return!1}function Me(e,n=be,t=be){let r=null,i=null,o;function s(){r=null,i=null}function u(a=void 0){o={result:a}}function d(){o=void 0}function p(){if(o!==void 0)return o.result;if(!r)return i=e.apply(null,arguments),r=arguments,i;if(!ft(arguments,r,n))return i;let a=e.apply(null,arguments);return r=arguments,t(i,a)?i:(i=a,a)}return{memoized:p,reset:s,setResult:u,clearResult:d}}function F(...e){return yt(Me)(...e)}function pt(e,n,t,r){if(t===void 0){let o=n.map(s=>s(e));return r.memoized.apply(null,o)}let i=n.map(o=>o(e,t));return r.memoized.apply(null,[...i,t])}function yt(e,n={stateFn:pt}){return function(...t){let r=t;if(Array.isArray(r[0])){let[a,...y]=r;r=[...a,...y]}else r.length===1&&ht(r[0])&&(r=mt(r[0]));let i=r.slice(0,r.length-1),o=r[r.length-1],s=i.filter(a=>a.release&&typeof a.release=="function"),u=e(function(...a){return o.apply(null,a)}),d=Me(function(a,y){return n.stateFn.apply(null,[a,i,y,u])});function p(){d.reset(),u.reset(),s.forEach(a=>a.release())}return Object.assign(d.memoized,{release:p,projector:u.memoized,setResult:d.setResult,clearResult:d.clearResult})}}function _e(e){return F(n=>{let t=n[e];return!lt()&&k()&&!(e in n)&&console.warn(`@ngrx/store: The feature name "${e}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${e}', ...) or StoreModule.forFeature('${e}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`),t},n=>n)}function ht(e){return!!e&&typeof e=="object"&&Object.values(e).every(n=>typeof n=="function")}function mt(e){let n=Object.values(e),t=Object.keys(e),r=(...i)=>t.reduce((o,s,u)=>I(m({},o),{[s]:i[u]}),{});return[...n,r]}function Rt(e){return e instanceof c?f(e):e}function vt(e){return typeof e=="function"?e():e}function gt(e,n){return e.concat(n)}function St(){if(f(b,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function Et(e,n){return function(t,r){let i=n.action(r)?q(r):r,o=e(t,i);return n.state()?q(o):o}}function q(e){Object.freeze(e);let n=$(e);return Object.getOwnPropertyNames(e).forEach(t=>{if(!t.startsWith("\u0275")&&at(e,t)&&(!n||t!=="caller"&&t!=="callee"&&t!=="arguments")){let r=e[t];(De(r)||$(r))&&!Object.isFrozen(r)&&q(r)}}),e}function bt(e,n){return function(t,r){if(n.action(r)){let o=K(r);Fe(o,"action")}let i=e(t,r);if(n.state()){let o=K(i);Fe(o,"state")}return i}}function K(e,n=[]){return(Se(e)||Ee(e))&&n.length===0?{path:["root"],value:e}:Object.keys(e).reduce((r,i)=>{if(r)return r;let o=e[i];return ut(o)?r:Se(o)||Ee(o)||it(o)||ot(o)||nt(o)||Oe(o)?!1:ct(o)?K(o,[...n,i]):{path:[...n,i],value:o}},!1)}function Fe(e,n){if(e===!1)return;let t=e.path.join("."),r=new Error(`Detected unserializable ${n} at "${t}". ${G}#strict${n}serializability`);throw r.value=e.value,r.unserializablePath=t,r}function Ft(e,n){return function(t,r){if(n.action(r)&&!de.isInAngularZone())throw new Error(`Action '${r.type}' running outside NgZone. ${G}#strictactionwithinngzone`);return e(t,r)}}function It(e){return k()?m({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function At({strictActionSerializability:e,strictStateSerializability:n}){return t=>e||n?bt(t,{action:r=>e&&!Q(r),state:()=>n}):t}function Ct({strictActionImmutability:e,strictStateImmutability:n}){return t=>e||n?Et(t,{action:r=>e&&!Q(r),state:()=>n}):t}function Q(e){return e.type.startsWith("@ngrx")}function jt({strictActionWithinNgZone:e}){return n=>e?Ft(n,{action:t=>e&&!Q(t)}):n}function xt(e){return[{provide:Re,useValue:e},{provide:me,useFactory:Tt,deps:[Re]},{provide:g,deps:[me],useFactory:It},{provide:x,multi:!0,deps:[g],useFactory:Ct},{provide:x,multi:!0,deps:[g],useFactory:At},{provide:x,multi:!0,deps:[g],useFactory:jt}]}function wt(){return[{provide:xe,multi:!0,deps:[g],useFactory:Ot}]}function Tt(e){return e}function Ot(e){if(!e.strictActionTypeUniqueness)return;let n=Object.entries(z).filter(([,t])=>t>1).map(([t])=>t);if(n.length)throw new Error(`Action types are registered more than once, ${n.map(t=>`"${t}"`).join(", ")}. ${G}#strictactiontypeuniqueness`)}function Dt(e={},n={}){return[{provide:Ae,useFactory:St},{provide:le,useValue:n.initialState},{provide:L,useFactory:vt,deps:[le]},{provide:P,useValue:e},{provide:pe,useExisting:e instanceof c?e:P},{provide:je,deps:[P,[new se(pe)]],useFactory:Rt},{provide:ye,useValue:n.metaReducers?n.metaReducers:[]},{provide:he,deps:[x,ye],useFactory:gt},{provide:fe,useValue:n.reducerFactory?n.reducerFactory:Qe},{provide:Ce,deps:[fe,he],useFactory:Te},Ge,We,Je,et,tt,xt(n.runtimeChecks),wt()]}function Mt(){f(v),f(S),f(B),f(b),f(Ae,{optional:!0}),f(xe,{optional:!0})}var _t=[{provide:ve,useFactory:Mt},{provide:ce,multi:!0,useFactory(){return()=>f(ve)}}];function ur(e,n){return ue([...Dt(e,n),_t])}function ar(...e){let n=e.pop(),t=e.map(r=>r.type);return{reducer:n,types:t}}function dr(e,...n){let t=new Map;for(let r of n)for(let i of r.types){let o=t.get(i);if(o){let s=(u,d)=>r.reducer(o(u,d),d);t.set(i,s)}else t.set(i,r.reducer)}return function(r=e,i){let o=t.get(i.type);return o?o(r,i):r}}var ke=E("[Cart] Add article",O()),Ue=E("[Cart] Remove article",O()),Ne=E("[Cart] Update Article Quantity",O()),Pe=E("[Cart] Clear Cart");var Z=_e("cart"),ze=F(Z,e=>e.articles),Ve=F(Z,e=>e.articles.reduce((n,t)=>n+t.quantity,0)),$e=F(Z,e=>e.articles.reduce((n,t)=>n+t.unitPrice*t.quantity,0));var vr=(()=>{class e{constructor(t){this.store=t}addArticle(t,r){this.store.dispatch(ke({article:t,maxQuantity:r}))}removeArticle(t){this.store.dispatch(Ue({articleId:t}))}updateQuantity(t,r){this.store.dispatch(Ne({articleId:t,quantity:r}))}clearCart(){this.store.dispatch(Pe())}getCartArticles(){return this.store.select(ze)}getCartNbArticles(){return this.store.select(Ve)}getCartTotalPrice(){return this.store.select($e)}static{this.\u0275fac=function(r){return new(r||e)(l(b))}}static{this.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();export{Ke as a,E as b,ve as c,cr as d,B as e,b as f,ur as g,ar as h,dr as i,ke as j,Ue as k,Ne as l,Pe as m,vr as n};
