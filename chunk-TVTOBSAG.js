import{$ as te,Ca as se,Fa as D,Ia as ce,M as J,U as X,V as ee,aa as T,bb as k,c as S,ca as f,f as Z,fa as c,fc as ue,g as I,h as H,ha as a,ia as d,ja as ne,k as Y,lc as F,ma as re,q as W,ra as ie,wa as oe}from"./chunk-LS5FHDU7.js";import{a as m,b as O}from"./chunk-2NFLSA4Y.js";function M(e,t){let i=!t?.manualCleanup;i&&!t?.injector&&oe(M);let n=i?t?.injector?.get(D)??d(D):null,r=Me(t?.equal),o;t?.requireSync?o=k({kind:0},{equal:r}):o=k({kind:1,value:t?.initialValue},{equal:r});let s=e.subscribe({next:u=>o.set({kind:1,value:u}),error:u=>{if(t?.rejectErrors)throw u;o.set({kind:2,error:u})}});if(t?.requireSync&&o().kind===0)throw new T(601,!1);return n?.onDestroy(s.unsubscribe.bind(s)),F(()=>{let u=o();switch(u.kind){case 1:return u.value;case 2:throw u.error;case 0:throw new T(601,!1)}},{equal:t?.equal})}function Me(e=Object.is){return(t,i)=>t.kind===1&&i.kind===1&&e(t.value,i.value)}var N={};function E(e,t){if(N[e]=(N[e]||0)+1,typeof t=="function")return U(e,(...n)=>O(m({},t(...n)),{type:e}));switch(t?t._as:"empty"){case"empty":return U(e,()=>({type:e}));case"props":return U(e,n=>O(m({},n),{type:e}));default:throw new Error("Unexpected config.")}}function x(){return{_as:"props",_p:void 0}}function U(e,t){return Object.defineProperty(t,"type",{value:e,writable:!1})}var be="@ngrx/store/init",R=(()=>{let t=class t extends I{constructor(){super({type:be})}next(n){if(typeof n=="function")throw new TypeError(`
        Dispatch expected an object, instead it received a function.
        If you're using the createAction function, make sure to invoke the function
        before dispatching the action. For example, someAction should be someAction().`);if(typeof n>"u")throw new TypeError("Actions must be objects");if(typeof n.type>"u")throw new TypeError("Actions must have a type property");super.next(n)}complete(){}ngOnDestroy(){super.complete()}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),_e=[R],Se=new c("@ngrx/store Internal Root Guard"),ae=new c("@ngrx/store Internal Initial State"),q=new c("@ngrx/store Initial State"),Ie=new c("@ngrx/store Reducer Factory"),de=new c("@ngrx/store Internal Reducer Factory Provider"),Fe=new c("@ngrx/store Initial Reducers"),_=new c("@ngrx/store Internal Initial Reducers"),Ut=new c("@ngrx/store Store Features"),le=new c("@ngrx/store Internal Store Reducers"),_t=new c("@ngrx/store Internal Feature Reducers"),Nt=new c("@ngrx/store Internal Feature Configs"),Pt=new c("@ngrx/store Internal Store Features"),zt=new c("@ngrx/store Internal Feature Reducers Token"),Vt=new c("@ngrx/store Feature Reducers"),fe=new c("@ngrx/store User Provided Meta Reducers"),j=new c("@ngrx/store Meta Reducers"),pe=new c("@ngrx/store Internal Resolved Meta Reducers"),ye=new c("@ngrx/store User Runtime Checks Config"),he=new c("@ngrx/store Internal User Runtime Checks Config"),v=new c("@ngrx/store Internal Runtime Checks"),je=new c("@ngrx/store Check if Action types are unique"),me=new c("@ngrx/store Root Store Provider"),$t=new c("@ngrx/store Feature State Provider");function Ne(e,t={}){let i=Object.keys(e),n={};for(let o=0;o<i.length;o++){let s=i[o];typeof e[s]=="function"&&(n[s]=e[s])}let r=Object.keys(n);return function(s,u){s=s===void 0?t:s;let l=!1,p={};for(let y=0;y<r.length;y++){let h=r[y],C=n[h],G=s[h],Q=C(G,u);p[h]=Q,l=l||Q!==G}return l?p:s}}function Pe(e,t){return Object.keys(e).filter(i=>i!==t).reduce((i,n)=>Object.assign(i,{[n]:e[n]}),{})}function we(...e){return function(t){if(e.length===0)return t;let i=e[e.length-1];return e.slice(0,-1).reduceRight((r,o)=>o(r),i(t))}}function Ae(e,t){return Array.isArray(t)&&t.length>0&&(e=we.apply(null,[...t,e])),(i,n)=>{let r=e(i);return(o,s)=>(o=o===void 0?n:o,r(o,s))}}function ze(e){let t=Array.isArray(e)&&e.length>0?we(...e):i=>i;return(i,n)=>(i=t(i),(r,o)=>(r=r===void 0?n:r,i(r,o)))}var g=class extends S{},w=class extends R{},Ve="@ngrx/store/update-reducers",P=(()=>{let t=class t extends I{get currentReducers(){return this.reducers}constructor(n,r,o,s){super(s(o,r)),this.dispatcher=n,this.initialState=r,this.reducers=o,this.reducerFactory=s}addFeature(n){this.addFeatures([n])}addFeatures(n){let r=n.reduce((o,{reducers:s,reducerFactory:u,metaReducers:l,initialState:p,key:y})=>{let h=typeof s=="function"?ze(l)(s,p):Ae(u,l)(s,p);return o[y]=h,o},{});this.addReducers(r)}removeFeature(n){this.removeFeatures([n])}removeFeatures(n){this.removeReducers(n.map(r=>r.key))}addReducer(n,r){this.addReducers({[n]:r})}addReducers(n){this.reducers=m(m({},this.reducers),n),this.updateReducers(Object.keys(n))}removeReducer(n){this.removeReducers([n])}removeReducers(n){n.forEach(r=>{this.reducers=Pe(this.reducers,r)}),this.updateReducers(n)}updateReducers(n){this.next(this.reducerFactory(this.reducers,this.initialState)),this.dispatcher.next({type:Ve,features:n})}ngOnDestroy(){this.complete()}};t.\u0275fac=function(r){return new(r||t)(a(w),a(q),a(Fe),a(Ie))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),$e=[P,{provide:g,useExisting:P},{provide:w,useExisting:R}],K=(()=>{let t=class t extends Z{ngOnDestroy(){this.complete()}};t.\u0275fac=(()=>{let n;return function(o){return(n||(n=se(t)))(o||t)}})(),t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),qe=[K],A=class extends S{},Re=(()=>{let t=class t extends I{constructor(n,r,o,s){super(s);let l=n.pipe(Y(H)).pipe(te(r)),p={state:s},y=l.pipe(ee(Ke,p));this.stateSubscription=y.subscribe(({state:h,action:C})=>{this.next(h),o.next(C)}),this.state=M(this,{manualCleanup:!0,requireSync:!0})}ngOnDestroy(){this.stateSubscription.unsubscribe(),this.complete()}};t.INIT=be,t.\u0275fac=function(r){return new(r||t)(a(R),a(g),a(K),a(q))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})();function Ke(e={state:void 0},[t,i]){let{state:n}=e;return{state:i(n,t),action:t}}var Le=[Re,{provide:A,useExisting:Re}],b=(()=>{let t=class t extends S{constructor(n,r,o){super(),this.actionsObserver=r,this.reducerManager=o,this.source=n,this.state=n.state}select(n,...r){return Ge.call(null,n,...r)(this)}selectSignal(n,r){return F(()=>n(this.state()),r)}lift(n){let r=new t(this,this.actionsObserver,this.reducerManager);return r.operator=n,r}dispatch(n){this.actionsObserver.next(n)}next(n){this.actionsObserver.next(n)}error(n){this.actionsObserver.error(n)}complete(){this.actionsObserver.complete()}addReducer(n,r){this.reducerManager.addReducer(n,r)}removeReducer(n){this.reducerManager.removeReducer(n)}};t.\u0275fac=function(r){return new(r||t)(a(A),a(R),a(P))},t.\u0275prov=f({token:t,factory:t.\u0275fac});let e=t;return e})(),Be=[b];function Ge(e,t,...i){return function(r){let o;if(typeof e=="string"){let s=[t,...i].filter(Boolean);o=r.pipe(X(e,...s))}else if(typeof e=="function")o=r.pipe(W(s=>e(s,t)));else throw new TypeError(`Unexpected type '${typeof e}' in select operator, expected 'string' or 'function'`);return o.pipe(J())}}var L="https://ngrx.io/guide/store/configuration/runtime-checks";function ve(e){return e===void 0}function ge(e){return e===null}function xe(e){return Array.isArray(e)}function Qe(e){return typeof e=="string"}function Ze(e){return typeof e=="boolean"}function He(e){return typeof e=="number"}function Ce(e){return typeof e=="object"&&e!==null}function Ye(e){return Ce(e)&&!xe(e)}function We(e){if(!Ye(e))return!1;let t=Object.getPrototypeOf(e);return t===Object.prototype||t===null}function z(e){return typeof e=="function"}function Je(e){return z(e)&&e.hasOwnProperty("\u0275cmp")}function Xe(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function et(e){return e instanceof c?d(e):e}function tt(e){return typeof e=="function"?e():e}function nt(e,t){return e.concat(t)}function rt(){if(d(b,{optional:!0,skipSelf:!0}))throw new TypeError("The root Store has been provided more than once. Feature modules should provide feature states instead.");return"guarded"}function it(e,t){return function(i,n){let r=t.action(n)?V(n):n,o=e(i,r);return t.state()?V(o):o}}function V(e){Object.freeze(e);let t=z(e);return Object.getOwnPropertyNames(e).forEach(i=>{if(!i.startsWith("\u0275")&&Xe(e,i)&&(!t||i!=="caller"&&i!=="callee"&&i!=="arguments")){let n=e[i];(Ce(n)||z(n))&&!Object.isFrozen(n)&&V(n)}}),e}function ot(e,t){return function(i,n){if(t.action(n)){let o=$(n);Ee(o,"action")}let r=e(i,n);if(t.state()){let o=$(r);Ee(o,"state")}return r}}function $(e,t=[]){return(ve(e)||ge(e))&&t.length===0?{path:["root"],value:e}:Object.keys(e).reduce((n,r)=>{if(n)return n;let o=e[r];return Je(o)?n:ve(o)||ge(o)||He(o)||Ze(o)||Qe(o)||xe(o)?!1:We(o)?$(o,[...t,r]):{path:[...t,r],value:o}},!1)}function Ee(e,t){if(e===!1)return;let i=e.path.join("."),n=new Error(`Detected unserializable ${t} at "${i}". ${L}#strict${t}serializability`);throw n.value=e.value,n.unserializablePath=i,n}function st(e,t){return function(i,n){if(t.action(n)&&!ce.isInAngularZone())throw new Error(`Action '${n.type}' running outside NgZone. ${L}#strictactionwithinngzone`);return e(i,n)}}function ct(e){return ue()?m({strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!0,strictActionImmutability:!0,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1},e):{strictStateSerializability:!1,strictActionSerializability:!1,strictStateImmutability:!1,strictActionImmutability:!1,strictActionWithinNgZone:!1,strictActionTypeUniqueness:!1}}function ut({strictActionSerializability:e,strictStateSerializability:t}){return i=>e||t?ot(i,{action:n=>e&&!B(n),state:()=>t}):i}function at({strictActionImmutability:e,strictStateImmutability:t}){return i=>e||t?it(i,{action:n=>e&&!B(n),state:()=>t}):i}function B(e){return e.type.startsWith("@ngrx")}function dt({strictActionWithinNgZone:e}){return t=>e?st(t,{action:i=>e&&!B(i)}):t}function lt(e){return[{provide:he,useValue:e},{provide:ye,useFactory:pt,deps:[he]},{provide:v,deps:[ye],useFactory:ct},{provide:j,multi:!0,deps:[v],useFactory:at},{provide:j,multi:!0,deps:[v],useFactory:ut},{provide:j,multi:!0,deps:[v],useFactory:dt}]}function ft(){return[{provide:je,multi:!0,deps:[v],useFactory:yt}]}function pt(e){return e}function yt(e){if(!e.strictActionTypeUniqueness)return;let t=Object.entries(N).filter(([,i])=>i>1).map(([i])=>i);if(t.length)throw new Error(`Action types are registered more than once, ${t.map(i=>`"${i}"`).join(", ")}. ${L}#strictactiontypeuniqueness`)}function ht(e={},t={}){return[{provide:Se,useFactory:rt},{provide:ae,useValue:t.initialState},{provide:q,useFactory:tt,deps:[ae]},{provide:_,useValue:e},{provide:le,useExisting:e instanceof c?e:_},{provide:Fe,deps:[_,[new ne(le)]],useFactory:et},{provide:fe,useValue:t.metaReducers?t.metaReducers:[]},{provide:pe,deps:[j,fe],useFactory:nt},{provide:de,useValue:t.reducerFactory?t.reducerFactory:Ne},{provide:Ie,deps:[de,pe],useFactory:Ae},_e,$e,qe,Le,Be,lt(t.runtimeChecks),ft()]}function mt(){d(R),d(g),d(K),d(b),d(Se,{optional:!0}),d(je,{optional:!0})}var Rt=[{provide:me,useFactory:mt},{provide:re,multi:!0,useFactory(){return()=>d(me)}}];function qt(e,t){return ie([...ht(e,t),Rt])}function Kt(...e){let t=e.pop(),i=e.map(n=>n.type);return{reducer:t,types:i}}function Lt(e,...t){let i=new Map;for(let n of t)for(let r of n.types){let o=i.get(r);if(o){let s=(u,l)=>n.reducer(o(u,l),l);i.set(r,s)}else i.set(r,n.reducer)}return function(n=e,r){let o=i.get(r.type);return o?o(n,r):n}}var Oe=E("[Cart] Add article",x()),Te=E("[Cart] Remove article",x()),De=E("[Cart] Update Article Quantity",x()),ke=E("[Cart] Clear Cart");var Ht=(()=>{let t=class t{constructor(n){this.store=n}addArticle(n,r){this.store.dispatch(Oe({article:n,maxQuantity:r}))}removeArticle(n){this.store.dispatch(Te({articleId:n}))}updateQuantity(n,r){this.store.dispatch(De({articleId:n,quantity:r}))}clearCart(){this.store.dispatch(ke())}getCartArticles(){return this.store.select(n=>n.cart.articles)}getCartNbArticles(){return this.store.select(n=>n.cart.articles.reduce((r,o)=>r+o.quantity,0))}getCartTotalPrice(){return this.store.select(n=>n.cart.articles.reduce((r,o)=>r+o.unitPrice*o.quantity,0))}};t.\u0275fac=function(r){return new(r||t)(a(b))},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{E as a,me as b,$t as c,K as d,b as e,qt as f,Kt as g,Lt as h,Oe as i,Te as j,De as k,ke as l,Ht as m};