import{a as r}from"./chunk-ZTPJUSTV.js";import{f as D}from"./chunk-GXQ4NC5B.js";import{ca as d,ha as $,q as o,w as h}from"./chunk-MVOKRJHC.js";import{a,b as m}from"./chunk-2NFLSA4Y.js";var u=(()=>{class s{constructor(t){this.httpClient=t}getMovies(){return this.httpClient.get(r.API_END_POINTS.MOVIES)}getMovieById(t){return this.httpClient.get(`${r.API_END_POINTS.MOVIES}/${t}`).pipe(o(e=>e))}getDirectors(){return this.httpClient.get(r.API_END_POINTS.DIRECTORS).pipe(o(i=>i.map(e=>({id:e.id,firstname:e.firstname,lastname:e.lastname.toUpperCase()}))))}getDirectorById(t){return this.httpClient.get(`${r.API_END_POINTS.DIRECTORS}/${t}`).pipe(o(e=>({id:e.id,firstname:e.firstname,lastname:e.lastname.toUpperCase()})))}deleteMovie(t){return this.httpClient.delete(`${r.API_END_POINTS.MOVIES}/${t}`)}resetDatabase(t){return this.httpClient.post(`${r.API_END_POINTS.RESET_DB}/${t}`,{})}getMoviesWithDirectors(){let t=this.getMovies(),i=this.getDirectors();return h([t,i]).pipe(o(([I,n])=>I.map(c=>m(a({},c),{director:n.find(p=>p.id===c.directorId)}))))}getMovieByIdWithDirector(t){let i=this.getMovieById(t),e=this.getDirectors();return h([i,e]).pipe(o(([n,c])=>m(a({},n),{director:c.find(p=>p.id===n.directorId)})))}static{this.\u0275fac=function(i){return new(i||s)($(D))}}static{this.\u0275prov=d({token:s,factory:s.\u0275fac,providedIn:"root"})}}return s})();export{u as a};