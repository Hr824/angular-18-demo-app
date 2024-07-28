import{a as P,b as J}from"./chunk-VE3KPBZ3.js";import{$ as B,A as C,Aa as R,B as $,Ba as u,Ca as h,La as v,O as a,S as f,Sa as D,W as j,X as y,Y as F,Z as T,a as k,b as E,ca as p,da as c,ea as t,fa as e,ga as x,i as _,j as I,ka as L,sa as n,ta as l,va as O,w as g,z as A}from"./chunk-K2GECXOO.js";var U=(()=>{let i=class i{constructor(d){this.httpClient=d,this.BOOK_API_URL="api/books",this.AUTHOR_API_URL="api/authors"}getBooks(){return this.httpClient.get(this.BOOK_API_URL)}getAuthors(){return this.httpClient.get(this.AUTHOR_API_URL)}getBooksWithAuthors(){let d=this.getBooks(),m=this.getAuthors();return I([d,m]).pipe(_(([W,w])=>W.map(b=>E(k({},b),{author:w.find(H=>H.id===b.authorId)}))))}};i.\u0275fac=function(m){return new(m||i)(A(D))},i.\u0275prov=g({token:i,factory:i.\u0275fac,providedIn:"root"});let o=i;return o})();var S=(o,i)=>i.id,M=()=>[v];function N(o,i){if(o&1&&(t(0,"tr")(1,"td"),n(2),e(),t(3,"td"),n(4),e(),t(5,"td"),n(6),e()()),o&2){let r=i.$implicit;a(2),l(r.id),a(2),l(r.title),a(2),l(r.authorId)}}function q(o,i){if(o&1&&(t(0,"tr")(1,"td"),n(2),e(),t(3,"td"),n(4),e(),t(5,"td"),n(6),e()()),o&2){let r=i.$implicit;a(2),l(r.id),a(2),l(r.firstname),a(2),l(r.lastname)}}function z(o,i){if(o&1&&(t(0,"tr")(1,"td"),n(2),e(),t(3,"td"),n(4),e(),t(5,"td"),n(6),e()()),o&2){let r=i.$implicit;a(2),l(r.id),a(2),l(r.title),a(2),O("",r.author==null?null:r.author.firstname," ",r.author==null?null:r.author.lastname,"")}}function G(o,i){if(o&1&&(t(0,"div",11),n(1," R\xE9sultat du forkJoin() "),e(),t(2,"table",12)(3,"thead")(4,"tr")(5,"th",8),n(6,"Id Livre"),e(),t(7,"th",8),n(8,"Titre"),e(),t(9,"th",8),n(10,"Auteur"),e()()(),t(11,"tbody"),p(12,z,7,4,"tr",null,S),u(14,"async"),e()()),o&2){let r=L();a(12),c(h(14,0,r.booksWithAuthors$))}}function Q(o,i){o&1&&x(0,"app-loader")}var at=(()=>{let i=class i{constructor(){this.theme=f("RxJS"),this.page=f("forkJoin"),this.bookService=C(U)}ngOnInit(){this.books$=this.bookService.getBooks(),this.authors$=this.bookService.getAuthors(),this.booksWithAuthors$=this.bookService.getBooksWithAuthors()}};i.\u0275fac=function(m){return new(m||i)},i.\u0275cmp=$({type:i,selectors:[["app-forkjoin"]],standalone:!0,features:[R],decls:45,vars:6,consts:[[1500],[3,"theme","page"],[1,"row"],[1,"col-12"],[1,"mg-page-title"],[1,"col-6"],[1,"table"],[1,"table-success"],["scope","col"],[1,"table","table-warning"],[1,"row","mg-top-40"],[1,"text-decoration-underline"],[1,"table","table-striped"]],template:function(m,s){m&1&&(x(0,"app-breadcrumb",1),t(1,"div",2)(2,"div",3)(3,"div",4)(4,"h3"),n(5,"RxJS : Op\xE9rateur forkjoin()"),e(),t(6,"div"),n(7," - forkJoin() de 2 observables (Livres et Auteurs) "),e(),t(8,"div"),n(9,' - La jointure se fait sur la propri\xE9t\xE9 "Id Auteur" '),e()()()(),t(10,"div",2)(11,"div",5)(12,"table",6)(13,"thead",7)(14,"tr")(15,"th",8),n(16,"Id Livre"),e(),t(17,"th",8),n(18,"Titre"),e(),t(19,"th",8),n(20,"Id Auteur"),e()()(),t(21,"tbody"),p(22,N,7,3,"tr",null,S),u(24,"async"),e()()(),t(25,"div",5)(26,"table",6)(27,"thead",9)(28,"tr")(29,"th",8),n(30,"Id Auteur"),e(),t(31,"th",8),n(32,"Pr\xE9nom"),e(),t(33,"th",8),n(34,"Nom"),e()()(),t(35,"tbody"),p(36,q,7,3,"tr",null,S),u(38,"async"),e()()()(),t(39,"div",10)(40,"div",3),j(41,G,15,2)(42,Q,1,0),F(43,41,M,null,42,null,null,0,y),T(),e()()),m&2&&(B("theme",s.theme())("page",s.page()),a(22),c(h(24,2,s.books$)),a(14),c(h(38,4,s.authors$)))},dependencies:[J,P,v]});let o=i;return o})();export{at as ForkjoinComponent};
