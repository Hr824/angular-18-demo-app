import{a as P}from"./chunk-BT7PFHYO.js";import{b as O}from"./chunk-STE2JQDU.js";import{$ as I,A as u,Ba as F,J as _,M as m,O as d,S as b,X as g,Z as C,_ as y,aa as o,ba as e,c as E,ca as c,fa as M,ga as w,ha as D,oa as i,pa as v,qa as f,ra as T,wa as h,z as S}from"./chunk-25QLPEOY.js";function L(l,t){if(l&1&&(o(0,"div",0)(1,"div",1),i(2),e(),o(3,"div",2)(4,"p",3)(5,"span",4),i(6,"Ann\xE9e"),e(),i(7),e(),o(8,"p",3)(9,"span",4),i(10,"Dur\xE9e"),e(),i(11),e(),o(12,"p",3)(13,"span",4),i(14,"R\xE9alisateur"),e(),i(15),e(),o(16,"p",3)(17,"span",4),i(18,"Synopsis"),e(),i(19," :"),c(20,"br"),i(21),e()()()),l&2){let p,r,n,a,x,s=w();m(2),v((p=s.movie())==null?null:p.title),m(5),f(" : ",(r=s.movie())==null?null:r.year,""),m(4),f(" : ",(n=s.movie())==null?null:n.duration,""),m(4),T(" : ",(a=s.movie())==null||a.director==null?null:a.director.firstname," ",(a=s.movie())==null||a.director==null?null:a.director.lastname,""),m(6),f(" ",(x=s.movie())==null?null:x.synopsis,"")}}var $=(()=>{let t=class t{constructor(){this.movie=_()}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["app-child"]],inputs:{movie:[1,"movie"]},standalone:!0,features:[h],decls:1,vars:1,consts:[[1,"card","border-info","mb-3",2,"max-width","18rem"],[1,"card-header","text-center","fw-bold"],[1,"card-body"],[1,"card-text"],[1,"fw-semibold","fst-italic"]],template:function(n,a){n&1&&b(0,L,22,6,"div",0),n&2&&C(a.movie()?0:-1)}});let l=t;return l})();var W=(l,t)=>t.id;function j(l,t){if(l&1&&(o(0,"option",7),i(1),e()),l&2){let p=t.$implicit;D("value",p.id),m(),v(p.title)}}var U=(()=>{let t=class t{constructor(){this.theme=d("Signals"),this.page=d("Input"),this.movies=d([]),this.subscriptions=new E,this.movieService=S(P),this.selectedOption=d("0"),this.selectedMovie=F(()=>this.movies().filter(r=>r.id.toString()===this.selectedOption())[0])}ngOnInit(){this.getMovies()}ngOnDestroy(){this.subscriptions.unsubscribe()}getMovies(){let r=this.movieService.getMoviesWithDirectors();this.subscriptions.add(r.subscribe({next:n=>{this.movies.set(n)}}))}onChange(r){let n=r.target;this.selectedOption.set(n.value)}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["app-parent"]],standalone:!0,features:[h],decls:21,vars:3,consts:[[3,"theme","page"],[1,"row"],[1,"col-12"],[1,"mg-page-title"],[1,"col-2"],["aria-label","S\xE9lection film",1,"form-select",3,"change"],["value","0"],[3,"value"],[1,"col-10"],[3,"movie"]],template:function(n,a){n&1&&(c(0,"app-breadcrumb",0),o(1,"div",1)(2,"div",2)(3,"div",3)(4,"h3"),i(5,"Input Signals"),e(),o(6,"div"),i(7,' - 1 composant "parent" contenant la dropdownlist '),e(),o(8,"div"),i(9,' - 1 composant "enfant" contenant les d\xE9tails du film '),e(),o(10,"div"),i(11,' - Le film s\xE9lectionn\xE9 dans le composant "parent" est pass\xE9 au composant "enfant" avec un "input signal" '),e()()()(),o(12,"div",1)(13,"div",4)(14,"select",5),M("change",function(s){return a.onChange(s)}),o(15,"option",6),i(16,"S\xE9lectionnez un film"),e(),y(17,j,2,2,"option",7,W),e()(),o(19,"div",8),c(20,"app-child",9),e()()),n&2&&(g("theme",a.theme())("page",a.page()),m(17),I(a.movies()),m(3),g("movie",a.selectedMovie()))},dependencies:[O,$]});let l=t;return l})();export{U as ParentComponent};
