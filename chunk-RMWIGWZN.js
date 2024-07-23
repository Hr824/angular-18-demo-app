import{B as Ut,C as me,E as jt,I as zt,K as Se,L as Wt,N as Jt,P as Qt,U as it,W as ge,ca as Yt,da as nt,e as It,ga as He,ha as Ve,i as Be,ia as $e,k as _e,l as et,m as Ft,o as Ge,oa as qt,p as Bt,r as Le,s as Gt,t as Lt,ta as ot,u as Ht,v as tt,va as st,w as Vt,x as $t,z as H}from"./chunk-MYYLYVTS.js";var S="top",k="bottom",R="right",C="left",Ue="auto",Z=[S,k,R,C],Q="start",re="end",Kt="clippingParents",je="viewport",ve="popper",Zt="reference",rt=Z.reduce(function(t,e){return t.concat([e+"-"+Q,e+"-"+re])},[]),ze=[].concat(Z,[Ue]).reduce(function(t,e){return t.concat([e,e+"-"+Q,e+"-"+re])},[]),Di="beforeRead",Ti="read",Oi="afterRead",Si="beforeMain",Mi="main",Ci="afterMain",Ai="beforeWrite",Ei="write",Ri="afterWrite",Xt=[Di,Ti,Oi,Si,Mi,Ci,Ai,Ei,Ri];function x(t){return t?(t.nodeName||"").toLowerCase():null}function w(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function V(t){var e=w(t).Element;return t instanceof e||t instanceof Element}function A(t){var e=w(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function ye(t){if(typeof ShadowRoot>"u")return!1;var e=w(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function xi(t){var e=t.state;Object.keys(e.elements).forEach(function(i){var n=e.styles[i]||{},o=e.attributes[i]||{},s=e.elements[i];!A(s)||!x(s)||(Object.assign(s.style,n),Object.keys(o).forEach(function(a){var r=o[a];r===!1?s.removeAttribute(a):s.setAttribute(a,r===!0?"":r)}))})}function Pi(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach(function(n){var o=e.elements[n],s=e.attributes[n]||{},a=Object.keys(e.styles.hasOwnProperty(n)?e.styles[n]:i[n]),r=a.reduce(function(l,d){return l[d]="",l},{});!A(o)||!x(o)||(Object.assign(o.style,r),Object.keys(s).forEach(function(l){o.removeAttribute(l)}))})}}var ei={name:"applyStyles",enabled:!0,phase:"write",fn:xi,effect:Pi,requires:["computeStyles"]};function P(t){return t.split("-")[0]}var W=Math.max,ae=Math.min,Y=Math.round;function be(){var t=navigator.userAgentData;return t!=null&&t.brands&&Array.isArray(t.brands)?t.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function Me(){return!/^((?!chrome|android).)*safari/i.test(be())}function $(t,e,i){e===void 0&&(e=!1),i===void 0&&(i=!1);var n=t.getBoundingClientRect(),o=1,s=1;e&&A(t)&&(o=t.offsetWidth>0&&Y(n.width)/t.offsetWidth||1,s=t.offsetHeight>0&&Y(n.height)/t.offsetHeight||1);var a=V(t)?w(t):window,r=a.visualViewport,l=!Me()&&i,d=(n.left+(l&&r?r.offsetLeft:0))/o,c=(n.top+(l&&r?r.offsetTop:0))/s,_=n.width/o,h=n.height/s;return{width:_,height:h,top:c,right:d+_,bottom:c+h,left:d,x:d,y:c}}function le(t){var e=$(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function Ce(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&ye(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function G(t){return w(t).getComputedStyle(t)}function at(t){return["table","td","th"].indexOf(x(t))>=0}function I(t){return((V(t)?t.ownerDocument:t.document)||window.document).documentElement}function q(t){return x(t)==="html"?t:t.assignedSlot||t.parentNode||(ye(t)?t.host:null)||I(t)}function ti(t){return!A(t)||G(t).position==="fixed"?null:t.offsetParent}function Ni(t){var e=/firefox/i.test(be()),i=/Trident/i.test(be());if(i&&A(t)){var n=G(t);if(n.position==="fixed")return null}var o=q(t);for(ye(o)&&(o=o.host);A(o)&&["html","body"].indexOf(x(o))<0;){var s=G(o);if(s.transform!=="none"||s.perspective!=="none"||s.contain==="paint"||["transform","perspective"].indexOf(s.willChange)!==-1||e&&s.willChange==="filter"||e&&s.filter&&s.filter!=="none")return o;o=o.parentNode}return null}function J(t){for(var e=w(t),i=ti(t);i&&at(i)&&G(i).position==="static";)i=ti(i);return i&&(x(i)==="html"||x(i)==="body"&&G(i).position==="static")?e:i||Ni(t)||e}function ce(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function de(t,e,i){return W(t,ae(e,i))}function ii(t,e,i){var n=de(t,e,i);return n>i?i:n}function Ae(){return{top:0,right:0,bottom:0,left:0}}function Ee(t){return Object.assign({},Ae(),t)}function Re(t,e){return e.reduce(function(i,n){return i[n]=t,i},{})}var ki=function(e,i){return e=typeof e=="function"?e(Object.assign({},i.rects,{placement:i.placement})):e,Ee(typeof e!="number"?e:Re(e,Z))};function Ii(t){var e,i=t.state,n=t.name,o=t.options,s=i.elements.arrow,a=i.modifiersData.popperOffsets,r=P(i.placement),l=ce(r),d=[C,R].indexOf(r)>=0,c=d?"height":"width";if(!(!s||!a)){var _=ki(o.padding,i),h=le(s),u=l==="y"?S:C,b=l==="y"?k:R,m=i.rects.reference[c]+i.rects.reference[l]-a[l]-i.rects.popper[c],f=a[l]-i.rects.reference[l],y=J(s),T=y?l==="y"?y.clientHeight||0:y.clientWidth||0:0,O=m/2-f/2,p=_[u],g=T-h[c]-_[b],v=T/2-h[c]/2+O,D=de(p,v,g),N=l;i.modifiersData[n]=(e={},e[N]=D,e.centerOffset=D-v,e)}}function Fi(t){var e=t.state,i=t.options,n=i.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=e.elements.popper.querySelector(o),!o)||Ce(e.elements.popper,o)&&(e.elements.arrow=o))}var lt={name:"arrow",enabled:!0,phase:"main",fn:Ii,effect:Fi,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function U(t){return t.split("-")[1]}var Bi={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Gi(t,e){var i=t.x,n=t.y,o=e.devicePixelRatio||1;return{x:Y(i*o)/o||0,y:Y(n*o)/o||0}}function ni(t){var e,i=t.popper,n=t.popperRect,o=t.placement,s=t.variation,a=t.offsets,r=t.position,l=t.gpuAcceleration,d=t.adaptive,c=t.roundOffsets,_=t.isFixed,h=a.x,u=h===void 0?0:h,b=a.y,m=b===void 0?0:b,f=typeof c=="function"?c({x:u,y:m}):{x:u,y:m};u=f.x,m=f.y;var y=a.hasOwnProperty("x"),T=a.hasOwnProperty("y"),O=C,p=S,g=window;if(d){var v=J(i),D="clientHeight",N="clientWidth";if(v===w(i)&&(v=I(i),G(v).position!=="static"&&r==="absolute"&&(D="scrollHeight",N="scrollWidth")),v=v,o===S||(o===C||o===R)&&s===re){p=k;var E=_&&v===g&&g.visualViewport?g.visualViewport.height:v[D];m-=E-n.height,m*=l?1:-1}if(o===C||(o===S||o===k)&&s===re){O=R;var M=_&&v===g&&g.visualViewport?g.visualViewport.width:v[N];u-=M-n.width,u*=l?1:-1}}var F=Object.assign({position:r},d&&Bi),j=c===!0?Gi({x:u,y:m},w(i)):{x:u,y:m};if(u=j.x,m=j.y,l){var B;return Object.assign({},F,(B={},B[p]=T?"0":"",B[O]=y?"0":"",B.transform=(g.devicePixelRatio||1)<=1?"translate("+u+"px, "+m+"px)":"translate3d("+u+"px, "+m+"px, 0)",B))}return Object.assign({},F,(e={},e[p]=T?m+"px":"",e[O]=y?u+"px":"",e.transform="",e))}function Li(t){var e=t.state,i=t.options,n=i.gpuAcceleration,o=n===void 0?!0:n,s=i.adaptive,a=s===void 0?!0:s,r=i.roundOffsets,l=r===void 0?!0:r,d={placement:P(e.placement),variation:U(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:o,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ni(Object.assign({},d,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:a,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ni(Object.assign({},d,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var oi={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Li,data:{}};var We={passive:!0};function Hi(t){var e=t.state,i=t.instance,n=t.options,o=n.scroll,s=o===void 0?!0:o,a=n.resize,r=a===void 0?!0:a,l=w(e.elements.popper),d=[].concat(e.scrollParents.reference,e.scrollParents.popper);return s&&d.forEach(function(c){c.addEventListener("scroll",i.update,We)}),r&&l.addEventListener("resize",i.update,We),function(){s&&d.forEach(function(c){c.removeEventListener("scroll",i.update,We)}),r&&l.removeEventListener("resize",i.update,We)}}var si={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:Hi,data:{}};var Vi={left:"right",right:"left",bottom:"top",top:"bottom"};function we(t){return t.replace(/left|right|bottom|top/g,function(e){return Vi[e]})}var $i={start:"end",end:"start"};function Je(t){return t.replace(/start|end/g,function(e){return $i[e]})}function ue(t){var e=w(t),i=e.pageXOffset,n=e.pageYOffset;return{scrollLeft:i,scrollTop:n}}function he(t){return $(I(t)).left+ue(t).scrollLeft}function ct(t,e){var i=w(t),n=I(t),o=i.visualViewport,s=n.clientWidth,a=n.clientHeight,r=0,l=0;if(o){s=o.width,a=o.height;var d=Me();(d||!d&&e==="fixed")&&(r=o.offsetLeft,l=o.offsetTop)}return{width:s,height:a,x:r+he(t),y:l}}function dt(t){var e,i=I(t),n=ue(t),o=(e=t.ownerDocument)==null?void 0:e.body,s=W(i.scrollWidth,i.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=W(i.scrollHeight,i.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),r=-n.scrollLeft+he(t),l=-n.scrollTop;return G(o||i).direction==="rtl"&&(r+=W(i.clientWidth,o?o.clientWidth:0)-s),{width:s,height:a,x:r,y:l}}function pe(t){var e=G(t),i=e.overflow,n=e.overflowX,o=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+o+n)}function Qe(t){return["html","body","#document"].indexOf(x(t))>=0?t.ownerDocument.body:A(t)&&pe(t)?t:Qe(q(t))}function X(t,e){var i;e===void 0&&(e=[]);var n=Qe(t),o=n===((i=t.ownerDocument)==null?void 0:i.body),s=w(n),a=o?[s].concat(s.visualViewport||[],pe(n)?n:[]):n,r=e.concat(a);return o?r:r.concat(X(q(a)))}function De(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Ui(t,e){var i=$(t,!1,e==="fixed");return i.top=i.top+t.clientTop,i.left=i.left+t.clientLeft,i.bottom=i.top+t.clientHeight,i.right=i.left+t.clientWidth,i.width=t.clientWidth,i.height=t.clientHeight,i.x=i.left,i.y=i.top,i}function ri(t,e,i){return e===je?De(ct(t,i)):V(e)?Ui(e,i):De(dt(I(t)))}function ji(t){var e=X(q(t)),i=["absolute","fixed"].indexOf(G(t).position)>=0,n=i&&A(t)?J(t):t;return V(n)?e.filter(function(o){return V(o)&&Ce(o,n)&&x(o)!=="body"}):[]}function ut(t,e,i,n){var o=e==="clippingParents"?ji(t):[].concat(e),s=[].concat(o,[i]),a=s[0],r=s.reduce(function(l,d){var c=ri(t,d,n);return l.top=W(c.top,l.top),l.right=ae(c.right,l.right),l.bottom=ae(c.bottom,l.bottom),l.left=W(c.left,l.left),l},ri(t,a,n));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}function xe(t){var e=t.reference,i=t.element,n=t.placement,o=n?P(n):null,s=n?U(n):null,a=e.x+e.width/2-i.width/2,r=e.y+e.height/2-i.height/2,l;switch(o){case S:l={x:a,y:e.y-i.height};break;case k:l={x:a,y:e.y+e.height};break;case R:l={x:e.x+e.width,y:r};break;case C:l={x:e.x-i.width,y:r};break;default:l={x:e.x,y:e.y}}var d=o?ce(o):null;if(d!=null){var c=d==="y"?"height":"width";switch(s){case Q:l[d]=l[d]-(e[c]/2-i[c]/2);break;case re:l[d]=l[d]+(e[c]/2-i[c]/2);break;default:}}return l}function ee(t,e){e===void 0&&(e={});var i=e,n=i.placement,o=n===void 0?t.placement:n,s=i.strategy,a=s===void 0?t.strategy:s,r=i.boundary,l=r===void 0?Kt:r,d=i.rootBoundary,c=d===void 0?je:d,_=i.elementContext,h=_===void 0?ve:_,u=i.altBoundary,b=u===void 0?!1:u,m=i.padding,f=m===void 0?0:m,y=Ee(typeof f!="number"?f:Re(f,Z)),T=h===ve?Zt:ve,O=t.rects.popper,p=t.elements[b?T:h],g=ut(V(p)?p:p.contextElement||I(t.elements.popper),l,c,a),v=$(t.elements.reference),D=xe({reference:v,element:O,strategy:"absolute",placement:o}),N=De(Object.assign({},O,D)),E=h===ve?N:v,M={top:g.top-E.top+y.top,bottom:E.bottom-g.bottom+y.bottom,left:g.left-E.left+y.left,right:E.right-g.right+y.right},F=t.modifiersData.offset;if(h===ve&&F){var j=F[o];Object.keys(M).forEach(function(B){var te=[R,k].indexOf(B)>=0?1:-1,ie=[S,k].indexOf(B)>=0?"y":"x";M[B]+=j[ie]*te})}return M}function ht(t,e){e===void 0&&(e={});var i=e,n=i.placement,o=i.boundary,s=i.rootBoundary,a=i.padding,r=i.flipVariations,l=i.allowedAutoPlacements,d=l===void 0?ze:l,c=U(n),_=c?r?rt:rt.filter(function(b){return U(b)===c}):Z,h=_.filter(function(b){return d.indexOf(b)>=0});h.length===0&&(h=_);var u=h.reduce(function(b,m){return b[m]=ee(t,{placement:m,boundary:o,rootBoundary:s,padding:a})[P(m)],b},{});return Object.keys(u).sort(function(b,m){return u[b]-u[m]})}function zi(t){if(P(t)===Ue)return[];var e=we(t);return[Je(t),e,Je(e)]}function Wi(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var o=i.mainAxis,s=o===void 0?!0:o,a=i.altAxis,r=a===void 0?!0:a,l=i.fallbackPlacements,d=i.padding,c=i.boundary,_=i.rootBoundary,h=i.altBoundary,u=i.flipVariations,b=u===void 0?!0:u,m=i.allowedAutoPlacements,f=e.options.placement,y=P(f),T=y===f,O=l||(T||!b?[we(f)]:zi(f)),p=[f].concat(O).reduce(function(fe,K){return fe.concat(P(K)===Ue?ht(e,{placement:K,boundary:c,rootBoundary:_,padding:d,flipVariations:b,allowedAutoPlacements:m}):K)},[]),g=e.rects.reference,v=e.rects.popper,D=new Map,N=!0,E=p[0],M=0;M<p.length;M++){var F=p[M],j=P(F),B=U(F)===Q,te=[S,k].indexOf(j)>=0,ie=te?"width":"height",L=ee(e,{placement:F,boundary:c,rootBoundary:_,altBoundary:h,padding:d}),z=te?B?R:C:B?k:S;g[ie]>v[ie]&&(z=we(z));var Pe=we(z),ne=[];if(s&&ne.push(L[j]<=0),r&&ne.push(L[z]<=0,L[Pe]<=0),ne.every(function(fe){return fe})){E=F,N=!1;break}D.set(F,ne)}if(N)for(var Ne=b?3:1,qe=function(K){var Oe=p.find(function(Ie){var oe=D.get(Ie);if(oe)return oe.slice(0,K).every(function(Ke){return Ke})});if(Oe)return E=Oe,"break"},Te=Ne;Te>0;Te--){var ke=qe(Te);if(ke==="break")break}e.placement!==E&&(e.modifiersData[n]._skip=!0,e.placement=E,e.reset=!0)}}var pt={name:"flip",enabled:!0,phase:"main",fn:Wi,requiresIfExists:["offset"],data:{_skip:!1}};function Ji(t,e,i){var n=P(t),o=[C,S].indexOf(n)>=0?-1:1,s=typeof i=="function"?i(Object.assign({},e,{placement:t})):i,a=s[0],r=s[1];return a=a||0,r=(r||0)*o,[C,R].indexOf(n)>=0?{x:r,y:a}:{x:a,y:r}}function Qi(t){var e=t.state,i=t.options,n=t.name,o=i.offset,s=o===void 0?[0,0]:o,a=ze.reduce(function(c,_){return c[_]=Ji(_,e.rects,s),c},{}),r=a[e.placement],l=r.x,d=r.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=d),e.modifiersData[n]=a}var ft={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Qi};function Yi(t){var e=t.state,i=t.name;e.modifiersData[i]=xe({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var ai={name:"popperOffsets",enabled:!0,phase:"read",fn:Yi,data:{}};function _t(t){return t==="x"?"y":"x"}function qi(t){var e=t.state,i=t.options,n=t.name,o=i.mainAxis,s=o===void 0?!0:o,a=i.altAxis,r=a===void 0?!1:a,l=i.boundary,d=i.rootBoundary,c=i.altBoundary,_=i.padding,h=i.tether,u=h===void 0?!0:h,b=i.tetherOffset,m=b===void 0?0:b,f=ee(e,{boundary:l,rootBoundary:d,padding:_,altBoundary:c}),y=P(e.placement),T=U(e.placement),O=!T,p=ce(y),g=_t(p),v=e.modifiersData.popperOffsets,D=e.rects.reference,N=e.rects.popper,E=typeof m=="function"?m(Object.assign({},e.rects,{placement:e.placement})):m,M=typeof E=="number"?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),F=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(v){if(s){var B,te=p==="y"?S:C,ie=p==="y"?k:R,L=p==="y"?"height":"width",z=v[p],Pe=z+f[te],ne=z-f[ie],Ne=u?-N[L]/2:0,qe=T===Q?D[L]:N[L],Te=T===Q?-N[L]:-D[L],ke=e.elements.arrow,fe=u&&ke?le(ke):{width:0,height:0},K=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Ae(),Oe=K[te],Ie=K[ie],oe=de(0,D[L],fe[L]),Ke=O?D[L]/2-Ne-oe-Oe-M.mainAxis:qe-oe-Oe-M.mainAxis,mi=O?-D[L]/2+Ne+oe+Ie+M.mainAxis:Te+oe+Ie+M.mainAxis,Ze=e.elements.arrow&&J(e.elements.arrow),gi=Ze?p==="y"?Ze.clientTop||0:Ze.clientLeft||0:0,Mt=(B=F?.[p])!=null?B:0,vi=z+Ke-Mt-gi,yi=z+mi-Mt,Ct=de(u?ae(Pe,vi):Pe,z,u?W(ne,yi):ne);v[p]=Ct,j[p]=Ct-z}if(r){var At,bi=p==="x"?S:C,wi=p==="x"?k:R,se=v[g],Fe=g==="y"?"height":"width",Et=se+f[bi],Rt=se-f[wi],Xe=[S,C].indexOf(y)!==-1,xt=(At=F?.[g])!=null?At:0,Pt=Xe?Et:se-D[Fe]-N[Fe]-xt+M.altAxis,Nt=Xe?se+D[Fe]+N[Fe]-xt-M.altAxis:Rt,kt=u&&Xe?ii(Pt,se,Nt):de(u?Pt:Et,se,u?Nt:Rt);v[g]=kt,j[g]=kt-se}e.modifiersData[n]=j}}var mt={name:"preventOverflow",enabled:!0,phase:"main",fn:qi,requiresIfExists:["offset"]};function gt(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function vt(t){return t===w(t)||!A(t)?ue(t):gt(t)}function Ki(t){var e=t.getBoundingClientRect(),i=Y(e.width)/t.offsetWidth||1,n=Y(e.height)/t.offsetHeight||1;return i!==1||n!==1}function yt(t,e,i){i===void 0&&(i=!1);var n=A(e),o=A(e)&&Ki(e),s=I(e),a=$(t,o,i),r={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(n||!n&&!i)&&((x(e)!=="body"||pe(s))&&(r=vt(e)),A(e)?(l=$(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):s&&(l.x=he(s))),{x:a.left+r.scrollLeft-l.x,y:a.top+r.scrollTop-l.y,width:a.width,height:a.height}}function Zi(t){var e=new Map,i=new Set,n=[];t.forEach(function(s){e.set(s.name,s)});function o(s){i.add(s.name);var a=[].concat(s.requires||[],s.requiresIfExists||[]);a.forEach(function(r){if(!i.has(r)){var l=e.get(r);l&&o(l)}}),n.push(s)}return t.forEach(function(s){i.has(s.name)||o(s)}),n}function bt(t){var e=Zi(t);return Xt.reduce(function(i,n){return i.concat(e.filter(function(o){return o.phase===n}))},[])}function wt(t){var e;return function(){return e||(e=new Promise(function(i){Promise.resolve().then(function(){e=void 0,i(t())})})),e}}function Dt(t){var e=t.reduce(function(i,n){var o=i[n.name];return i[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,i},{});return Object.keys(e).map(function(i){return e[i]})}var li={placement:"bottom",modifiers:[],strategy:"absolute"};function ci(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function di(t){t===void 0&&(t={});var e=t,i=e.defaultModifiers,n=i===void 0?[]:i,o=e.defaultOptions,s=o===void 0?li:o;return function(r,l,d){d===void 0&&(d=s);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},li,s),modifiersData:{},elements:{reference:r,popper:l},attributes:{},styles:{}},_=[],h=!1,u={state:c,setOptions:function(y){var T=typeof y=="function"?y(c.options):y;m(),c.options=Object.assign({},s,c.options,T),c.scrollParents={reference:V(r)?X(r):r.contextElement?X(r.contextElement):[],popper:X(l)};var O=bt(Dt([].concat(n,c.options.modifiers)));return c.orderedModifiers=O.filter(function(p){return p.enabled}),b(),u.update()},forceUpdate:function(){if(!h){var y=c.elements,T=y.reference,O=y.popper;if(ci(T,O)){c.rects={reference:yt(T,J(O),c.options.strategy==="fixed"),popper:le(O)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(M){return c.modifiersData[M.name]=Object.assign({},M.data)});for(var p=0;p<c.orderedModifiers.length;p++){if(c.reset===!0){c.reset=!1,p=-1;continue}var g=c.orderedModifiers[p],v=g.fn,D=g.options,N=D===void 0?{}:D,E=g.name;typeof v=="function"&&(c=v({state:c,options:N,name:E,instance:u})||c)}}}},update:wt(function(){return new Promise(function(f){u.forceUpdate(),f(c)})}),destroy:function(){m(),h=!0}};if(!ci(r,l))return u;u.setOptions(d).then(function(f){!h&&d.onFirstUpdate&&d.onFirstUpdate(f)});function b(){c.orderedModifiers.forEach(function(f){var y=f.name,T=f.options,O=T===void 0?{}:T,p=f.effect;if(typeof p=="function"){var g=p({state:c,name:y,instance:u,options:O}),v=function(){};_.push(g||v)}})}function m(){_.forEach(function(f){return f()}),_=[]}return u}}var Xi=[si,ai,oi,ei],Tt=di({defaultModifiers:Xi});var en={animation:!0,transitionTimerDelayMs:5};function tn(t,e){return!e||typeof t.closest>"u"?null:t.closest(e)}function fi(t=document){let e=t?.activeElement;return e?e.shadowRoot?fi(e.shadowRoot):e:null}var{transitionTimerDelayMs:Kl}=en;var Ye=(t,e)=>e?e.some(i=>i.contains(t)):!1,ui=(t,e)=>!e||tn(t,e)!=null,nn=(()=>{let t=()=>/iPad|iPhone|iPod/.test(navigator.userAgent)||/Macintosh/.test(navigator.userAgent)&&navigator.maxTouchPoints&&navigator.maxTouchPoints>2,e=()=>/Android/.test(navigator.userAgent);return typeof navigator<"u"?!!navigator.userAgent&&(t()||e()):!1})(),on=t=>nn?()=>setTimeout(()=>t(),100):t;function sn(t,e,i,n,o,s,a,r){i&&t.runOutsideAngular(on(()=>{let l=h=>{let u=h.target;return h.button===2||Ye(u,a)?!1:i==="inside"?Ye(u,s)&&ui(u,r):i==="outside"?!Ye(u,s):ui(u,r)||!Ye(u,s)},d=_e(e,"keydown").pipe(Le(o),et(h=>h.key==="Escape"),Gt(h=>h.preventDefault())),c=_e(e,"mousedown").pipe(Be(l),Le(o)),_=_e(e,"mouseup").pipe(Lt(c),et(([h,u])=>u),Bt(0),Le(o));Ft([d.pipe(Be(h=>0)),_.pipe(Be(h=>1))]).subscribe(h=>t.run(()=>n(h)))}))}var rn=["a[href]","button:not([disabled])",'input:not([disabled]):not([type="hidden"])',"select:not([disabled])","textarea:not([disabled])","[contenteditable]",'[tabindex]:not([tabindex="-1"])'].join(", ");var an=(()=>{let e=class e{constructor(){this._element=H(st).documentElement}isRTL(){return(this._element.getAttribute("dir")||"").toLowerCase()==="rtl"}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=tt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),ln=/\s+/,cn=/  +/gi,dn={top:["top"],bottom:["bottom"],start:["left","right"],left:["left"],end:["right","left"],right:["right"],"top-start":["top-start","top-end"],"top-left":["top-start"],"top-end":["top-end","top-start"],"top-right":["top-end"],"bottom-start":["bottom-start","bottom-end"],"bottom-left":["bottom-start"],"bottom-end":["bottom-end","bottom-start"],"bottom-right":["bottom-end"],"start-top":["left-start","right-start"],"left-top":["left-start"],"start-bottom":["left-end","right-end"],"left-bottom":["left-end"],"end-top":["right-start","left-start"],"right-top":["right-start"],"end-bottom":["right-end","left-end"],"right-bottom":["right-end"]};function un(t,e){let[i,n]=dn[t];return e&&n||i}var hn=/^left/,pn=/^right/,fn=/^start/,_n=/^end/;function mn(t,e){let[i,n]=e.split("-"),o=i.replace(hn,"start").replace(pn,"end"),s=[o];if(n){let a=n;(i==="left"||i==="right")&&(a=a.replace(fn,"top").replace(_n,"bottom")),s.push(`${o}-${a}`)}return t&&(s=s.map(a=>`${t}-${a}`)),s.join(" ")}function hi({placement:t,baseClass:e},i){let n=Array.isArray(t)?t:t.split(ln),o=["top","bottom","start","end","top-start","top-end","bottom-start","bottom-end","start-top","start-bottom","end-top","end-bottom"],s=n.findIndex(d=>d==="auto");s>=0&&o.forEach(function(d){n.find(c=>c.search("^"+d)!==-1)==null&&n.splice(s++,1,d)});let a=n.map(d=>un(d,i.isRTL()));return{placement:a.shift(),modifiers:[{name:"bootstrapClasses",enabled:!!e,phase:"write",fn({state:d}){let c=new RegExp(e+"(-[a-z]+)*","gi"),_=d.elements.popper,h=d.placement,u=_.className;u=u.replace(c,""),u+=` ${mn(e,h)}`,u=u.trim().replace(cn," "),_.className=u}},pt,mt,lt,{enabled:!0,name:"flip",options:{fallbackPlacements:a}},{enabled:!0,name:"preventOverflow",phase:"main",fn:function(){}}]}}function pi(t){return t}function gn(){let t=H(an),e=null;return{createPopper(i){if(!e){let o=(i.updatePopperOptions||pi)(hi(i,t));e=Tt(i.hostElement,i.targetElement,o)}},update(){e&&e.update()},setOptions(i){if(e){let o=(i.updatePopperOptions||pi)(hi(i,t));e.setOptions(o)}},destroy(){e&&(e.destroy(),e=null)}}}function vn(t){return e=>(e.modifiers.push(ft,{name:"offset",options:{offset:()=>t}}),e)}var Zl=new Date(1882,10,12),Xl=new Date(2174,10,25);var ec=1e3*60*60*24;var St=1080,yn=24*St,bn=12*St+793,tc=29*yn+bn,ic=11*St+204;var wn=(()=>{let e=class e{constructor(){this.autoClose=!0,this.placement=["bottom-start","bottom-end","top-start","top-end"],this.popperOptions=n=>n,this.container=null}};e.\u0275fac=function(o){return new(o||e)},e.\u0275prov=tt({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})(),Dn=(()=>{let e=class e{constructor(){this._disabled=!1,this.nativeElement=H(Se).nativeElement,this.tabindex=0}set disabled(n){this._disabled=n===""||n===!0}get disabled(){return this._disabled}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=me({type:e,selectors:[["","ngbDropdownItem",""]],hostAttrs:[1,"dropdown-item"],hostVars:3,hostBindings:function(o,s){o&2&&(Yt("tabIndex",s.disabled?-1:s.tabindex),ge("disabled",s.disabled))},inputs:{tabindex:"tabindex",disabled:"disabled"},standalone:!0});let t=e;return t})();var Tn=(()=>{let e=class e{constructor(){this.dropdown=H(_i),this.nativeElement=H(Se).nativeElement}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=me({type:e,selectors:[["","ngbDropdownMenu",""]],contentQueries:function(o,s,a){if(o&1&&He(a,Dn,4),o&2){let r;Ve(r=$e())&&(s.menuItems=r)}},hostAttrs:[1,"dropdown-menu"],hostVars:2,hostBindings:function(o,s){o&1&&nt("keydown.ArrowUp",function(r){return s.dropdown.onKeyDown(r)})("keydown.ArrowDown",function(r){return s.dropdown.onKeyDown(r)})("keydown.Home",function(r){return s.dropdown.onKeyDown(r)})("keydown.End",function(r){return s.dropdown.onKeyDown(r)})("keydown.Enter",function(r){return s.dropdown.onKeyDown(r)})("keydown.Space",function(r){return s.dropdown.onKeyDown(r)})("keydown.Tab",function(r){return s.dropdown.onKeyDown(r)})("keydown.Shift.Tab",function(r){return s.dropdown.onKeyDown(r)}),o&2&&ge("show",s.dropdown.isOpen())},standalone:!0});let t=e;return t})(),Ot=(()=>{let e=class e{constructor(){this.dropdown=H(_i),this.nativeElement=H(Se).nativeElement}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=me({type:e,selectors:[["","ngbDropdownAnchor",""]],hostAttrs:[1,"dropdown-toggle"],hostVars:3,hostBindings:function(o,s){o&2&&(it("aria-expanded",s.dropdown.isOpen()),ge("show",s.dropdown.isOpen()))},standalone:!0});let t=e;return t})(),nc=(()=>{let e=class e extends Ot{};e.\u0275fac=(()=>{let n;return function(s){return(n||(n=zt(e)))(s||e)}})(),e.\u0275dir=me({type:e,selectors:[["","ngbDropdownToggle",""]],hostAttrs:[1,"dropdown-toggle"],hostVars:3,hostBindings:function(o,s){o&1&&nt("click",function(){return s.dropdown.toggle()})("keydown.ArrowUp",function(r){return s.dropdown.onKeyDown(r)})("keydown.ArrowDown",function(r){return s.dropdown.onKeyDown(r)})("keydown.Home",function(r){return s.dropdown.onKeyDown(r)})("keydown.End",function(r){return s.dropdown.onKeyDown(r)})("keydown.Tab",function(r){return s.dropdown.onKeyDown(r)})("keydown.Shift.Tab",function(r){return s.dropdown.onKeyDown(r)}),o&2&&(it("aria-expanded",s.dropdown.isOpen()),ge("show",s.dropdown.isOpen()))},standalone:!0,features:[qt([{provide:Ot,useExisting:Ht(()=>e)}]),Qt]});let t=e;return t})(),_i=(()=>{let e=class e{constructor(){this._changeDetector=H(ot),this._config=H(wn),this._document=H(st),this._ngZone=H(Jt),this._nativeElement=H(Se).nativeElement,this._destroyCloseHandlers$=new It,this._bodyContainer=null,this._positioning=gn(),this.autoClose=this._config.autoClose,this._open=!1,this.placement=this._config.placement,this.popperOptions=this._config.popperOptions,this.container=this._config.container,this.openChange=new Wt}ngOnInit(){this.display||(this.display=this._nativeElement.closest(".navbar")?"static":"dynamic")}ngAfterContentInit(){this._ngZone.onStable.pipe(Ge(1)).subscribe(()=>{this._applyPlacementClasses(),this._open&&this._setCloseHandlers()})}ngOnChanges(n){if(n.container&&this._open&&this._applyContainer(this.container),n.placement&&!n.placement.firstChange&&(this._positioning.setOptions({hostElement:this._anchor.nativeElement,targetElement:this._bodyContainer||this._menu.nativeElement,placement:this.placement}),this._applyPlacementClasses()),n.dropdownClass){let{currentValue:o,previousValue:s}=n.dropdownClass;this._applyCustomDropdownClass(o,s)}n.autoClose&&this._open&&(this.autoClose=n.autoClose.currentValue,this._setCloseHandlers())}isOpen(){return this._open}open(){this._open||(this._open=!0,this._applyContainer(this.container),this.openChange.emit(!0),this._setCloseHandlers(),this._anchor&&(this._anchor.nativeElement.focus(),this.display==="dynamic"&&this._ngZone.runOutsideAngular(()=>{this._positioning.createPopper({hostElement:this._anchor.nativeElement,targetElement:this._bodyContainer||this._menu.nativeElement,placement:this.placement,updatePopperOptions:n=>this.popperOptions(vn([0,2])(n))}),this._applyPlacementClasses(),this._zoneSubscription=this._ngZone.onStable.subscribe(()=>this._positionMenu())})))}_setCloseHandlers(){this._destroyCloseHandlers$.next(),sn(this._ngZone,this._document,this.autoClose,n=>{this.close(),n===0&&this._anchor.nativeElement.focus()},this._destroyCloseHandlers$,this._menu?[this._menu.nativeElement]:[],this._anchor?[this._anchor.nativeElement]:[],".dropdown-item,.dropdown-divider")}close(){this._open&&(this._open=!1,this._resetContainer(),this._positioning.destroy(),this._zoneSubscription?.unsubscribe(),this._destroyCloseHandlers$.next(),this.openChange.emit(!1),this._changeDetector.markForCheck())}toggle(){this.isOpen()?this.close():this.open()}ngOnDestroy(){this.close()}onKeyDown(n){let{key:o}=n,s=this._getMenuElements(),a=-1,r=null,l=this._isEventFromToggle(n);if(!l&&s.length&&s.forEach((d,c)=>{d.contains(n.target)&&(r=d),d===fi(this._document)&&(a=c)}),o===" "||o==="Enter"){r&&(this.autoClose===!0||this.autoClose==="inside")&&_e(r,"click").pipe(Ge(1)).subscribe(()=>this.close());return}if(o==="Tab"){if(n.target&&this.isOpen()&&this.autoClose)if(this._anchor.nativeElement===n.target){this.container==="body"&&!n.shiftKey?(this._menu.nativeElement.setAttribute("tabindex","0"),this._menu.nativeElement.focus(),this._menu.nativeElement.removeAttribute("tabindex")):n.shiftKey&&this.close();return}else if(this.container==="body"){let d=this._menu.nativeElement.querySelectorAll(rn);n.shiftKey&&n.target===d[0]?(this._anchor.nativeElement.focus(),n.preventDefault()):!n.shiftKey&&n.target===d[d.length-1]&&(this._anchor.nativeElement.focus(),this.close())}else _e(n.target,"focusout").pipe(Ge(1)).subscribe(({relatedTarget:d})=>{this._nativeElement.contains(d)||this.close()});return}if(l||r){if(this.open(),s.length){switch(o){case"ArrowDown":a=Math.min(a+1,s.length-1);break;case"ArrowUp":if(this._isDropup()&&a===-1){a=s.length-1;break}a=Math.max(a-1,0);break;case"Home":a=0;break;case"End":a=s.length-1;break}s[a].focus()}n.preventDefault()}}_isDropup(){return this._nativeElement.classList.contains("dropup")}_isEventFromToggle(n){return this._anchor.nativeElement.contains(n.target)}_getMenuElements(){return this._menu?this._menu.menuItems.filter(({disabled:n})=>!n).map(({nativeElement:n})=>n):[]}_positionMenu(){let n=this._menu;this.isOpen()&&n&&(this.display==="dynamic"?(this._positioning.update(),this._applyPlacementClasses()):this._applyPlacementClasses(this._getFirstPlacement(this.placement)))}_getFirstPlacement(n){return Array.isArray(n)?n[0]:n.split(" ")[0]}_resetContainer(){this._menu&&this._nativeElement.appendChild(this._menu.nativeElement),this._bodyContainer&&(this._document.body.removeChild(this._bodyContainer),this._bodyContainer=null)}_applyContainer(n=null){if(this._resetContainer(),n==="body"){let o=this._menu.nativeElement,s=this._bodyContainer=this._bodyContainer||this._document.createElement("div");s.style.position="absolute",o.style.position="static",s.style.zIndex="1055",s.appendChild(o),this._document.body.appendChild(s)}this._applyCustomDropdownClass(this.dropdownClass)}_applyCustomDropdownClass(n,o){let s=this.container==="body"?this._bodyContainer:this._nativeElement;s&&(o&&s.classList.remove(o),n&&s.classList.add(n))}_applyPlacementClasses(n){if(this._menu){n||(n=this._getFirstPlacement(this.placement)),this._nativeElement.classList.remove("dropup","dropdown"),this.display==="static"?this._menu.nativeElement.setAttribute("data-bs-popper","static"):this._menu.nativeElement.removeAttribute("data-bs-popper");let o=n.search("^top")!==-1?"dropup":"dropdown";this._nativeElement.classList.add(o),this._bodyContainer&&(this._bodyContainer.classList.remove("dropup","dropdown"),this._bodyContainer.classList.add(o))}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=me({type:e,selectors:[["","ngbDropdown",""]],contentQueries:function(o,s,a){if(o&1&&(He(a,Tn,5),He(a,Ot,5)),o&2){let r;Ve(r=$e())&&(s._menu=r.first),Ve(r=$e())&&(s._anchor=r.first)}},hostVars:2,hostBindings:function(o,s){o&2&&ge("show",s.isOpen())},inputs:{autoClose:"autoClose",dropdownClass:"dropdownClass",_open:[0,"open","_open"],placement:"placement",popperOptions:"popperOptions",container:"container",display:"display"},outputs:{openChange:"openChange"},exportAs:["ngbDropdown"],standalone:!0,features:[jt]});let t=e;return t})();var oc=(()=>{let e=class e{};e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=Ut({type:e}),e.\u0275inj=Vt({});let t=e;return t})();var sc=new $t("live announcer delay",{providedIn:"root",factory:()=>100});export{Dn as a,Tn as b,nc as c,_i as d,oc as e};
