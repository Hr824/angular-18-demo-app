import{a as O,c as V,e as P}from"./chunk-5J2FSTKC.js";import"./chunk-W5XLQXLF.js";import{a as E,b as M}from"./chunk-ECCECWUM.js";import"./chunk-PSCJD4XD.js";import{Ab as f,Bb as c,Lb as s,Md as I,Nb as b,Tb as T,Va as a,db as S,kb as x,kd as y,lb as D,mb as v,nb as k,oa as C,pb as h,rb as u,tb as L,ub as w,vb as d,wb as l,xb as m,ya as p,yb as g,za as _}from"./chunk-RDBCIR3G.js";import"./chunk-2NFLSA4Y.js";var N=(t,o)=>o.id,A=()=>[y,P,V];function K(t,o){if(t&1){let e=g();d(0,"button",11),f("click",function(){p(e);let i=c(3);return _(i.deleteAllItems())}),s(1,"Vider la liste"),l()}}function z(t,o){t&1&&(s(0," \xA0 "),d(1,"span",10),s(2,"Nombre maximum de t\xE2ches atteint"),l())}function F(t,o){if(t&1&&x(0,K,2,0,"button",9)(1,z,3,0,"span",10),t&2){let e=c(2);u(e.todos().length>0?0:-1),a(),u(e.todos().length>=e.nbTodosMax?1:-1)}}function J(t,o){if(t&1){let e=g();d(0,"div",13),s(1),d(2,"button",14),f("click",function(){let i=p(e).$implicit,r=c(3);return _(r.deleteItem(i))}),s(3,"X"),l()()}if(t&2){let e=o.$implicit;h("cdkDragData",e.id),a(),b(" ",e.title," ")}}function $(t,o){if(t&1){let e=g();d(0,"div",12),f("cdkDropListDropped",function(i){p(e);let r=c(2);return _(r.drop(i))}),L(1,J,4,2,"div",13,N),l()}if(t&2){let e=c(2);a(),w(e.todos())}}function j(t,o){if(t&1){let e=g();d(0,"div",2),m(1,"div",5),d(2,"div",6)(3,"div")(4,"button",7),f("click",function(){p(e);let i=c();return _(i.addItem())}),s(5,"Ajouter une t\xE2che"),l(),s(6,"\xA0 "),x(7,F,2,2),l(),m(8,"br"),x(9,$,3,0,"div",8),l(),m(10,"div",5),l()}if(t&2){let e=c();a(4),h("disabled",e.todos().length>=e.nbTodosMax)("ngClass",e.todos().length>=e.nbTodosMax?"btn btn-outline-secondary btn-sm rounded-pill":"btn btn-outline-info btn-sm rounded-pill"),a(3),u(e.todos()?7:-1),a(2),u(e.todos()&&e.todos().length>0?9:-1)}}function B(t,o){t&1&&m(0,"app-loader")}var Y=(()=>{let o=class o{constructor(){this.theme="Cdk",this.theme1="Drag and Drop",this.page="Liste simple",this.localStorageKey="todos",this.nbTodosMax=8,this.todosTab=window.localStorage?localStorage.getItem(this.localStorageKey):null,this.todos=S(this.todosTab?JSON.parse(this.todosTab):[{id:1,title:"Nouvelle t\xE2che (n\xB01)"}])}drop(n){O(this.todos(),n.previousIndex,n.currentIndex),this.setLocalStorageItem(this.localStorageKey,JSON.stringify(this.todos()))}addItem(){if(this.todos().length<this.nbTodosMax){let n=this.todos().length===0?0:this.todos().reduce((i,r)=>i.id>r.id?i:r).id;this.todos().push({id:n+1,title:"Nouvelle t\xE2che (n\xB0"+(n+1)+")"}),this.setLocalStorageItem(this.localStorageKey,JSON.stringify(this.todos()))}}deleteItem(n){let i=this.todos().findIndex(r=>r.id===n.id);i>-1&&(this.todos().splice(i,1),this.setLocalStorageItem(this.localStorageKey,JSON.stringify(this.todos())))}deleteAllItems(){this.todos.set([]),this.setLocalStorageItem(this.localStorageKey,JSON.stringify(this.todos()))}setLocalStorageItem(n,i){window.localStorage&&localStorage.setItem(n,i)}};o.\u0275fac=function(i){return new(i||o)},o.\u0275cmp=C({type:o,selectors:[["app-simple-list"]],standalone:!0,features:[T],decls:16,vars:4,consts:[[1500],[3,"theme","theme1","page"],[1,"row"],[1,"col-12"],[1,"mg-page-title"],[1,"col-1"],[1,"col-10"],[3,"click","disabled","ngClass"],["cdkDropList","",1,"todo-list"],[1,"btn","btn-sm","btn-outline-danger","rounded-pill"],[1,"text-danger"],[1,"btn","btn-sm","btn-outline-danger","rounded-pill",3,"click"],["cdkDropList","",1,"todo-list",3,"cdkDropListDropped"],["cdkDrag","",1,"todo-box",3,"cdkDragData"],[1,"btn","btn-sm","btn-outline-danger",3,"click"]],template:function(i,r){i&1&&(m(0,"app-breadcrumb",1),d(1,"div",2)(2,"div",3)(3,"div",4)(4,"h3"),s(5,"Drag and Drop (Liste simple)"),l(),d(6,"div"),s(7," - Liste avec Drag and Drop pour ordonner les t\xE2ches "),l(),d(8,"div"),s(9," - Utilisation du localStorage pour la persistance des donn\xE9es "),l(),d(10,"div"),s(11),l()()()(),x(12,j,11,4)(13,B,1,0),v(14,12,A,null,13,null,null,0,D),k()),i&2&&(h("theme",r.theme)("theme1",r.theme1)("page",r.page),a(11),b(" - Pour l'exemple, ",r.nbTodosMax," t\xE2ches maximum dans la liste "))},dependencies:[I,E,M],styles:[".todo-list[_ngcontent-%COMP%]{width:400px;max-width:100%;border:solid 1px #ccc;min-height:60px;display:block;background:#fff;border-radius:4px;overflow:hidden}.todo-box[_ngcontent-%COMP%]{padding:12px 10px;border-bottom:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{border:none;box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .5s cubic-bezier(0,0,.2,1)}.todo-box[_ngcontent-%COMP%]:last-child{border:none}.todo-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .todo-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"]});let t=o;return t})();export{Y as SimpleListComponent};
