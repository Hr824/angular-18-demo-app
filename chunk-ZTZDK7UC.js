import{f as d}from"./chunk-ORSCQZVQ.js";import{$ as h,a,b as c,ea as m,r as o,x as p}from"./chunk-DQSZQC6N.js";var C=(()=>{let e=class e{constructor(t){this.httpClient=t,this.MOVIE_API_URL="api/movies",this.DIRECTOR_API_URL="api/directors"}getMovies(){return this.httpClient.get(this.MOVIE_API_URL)}getDirectors(){return this.httpClient.get(this.DIRECTOR_API_URL).pipe(o(i=>i.map(r=>({id:r.id,firstname:r.firstname,lastname:r.lastname.toUpperCase()}))))}deleteMovie(t){return this.httpClient.delete(`${this.MOVIE_API_URL}/${t}`)}resetDatabase(t){return this.httpClient.post(`commands/resetdb/${t}`,{})}getMoviesWithDirectors(){let t=this.getMovies(),i=this.getDirectors();return p([t,i]).pipe(o(([l,I])=>l.map(n=>c(a({},n),{director:I.find(f=>f.id===n.directorId)}))))}};e.\u0275fac=function(i){return new(i||e)(m(d))},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{C as a};