import{Aa as m,a as o,b as n,i as c,j as h,v as p,y as a}from"./chunk-BYXBJPPA.js";var R=(()=>{let i=class i{constructor(t){this.httpClient=t,this.MOVIE_API_URL="api/movies",this.DIRECTOR_API_URL="api/directors"}getMovies(){return this.httpClient.get(this.MOVIE_API_URL)}getDirectors(){return this.httpClient.get(this.DIRECTOR_API_URL)}deleteMovie(t){return this.httpClient.delete(`${this.MOVIE_API_URL}/${t}`)}resetDatabase(t){return this.httpClient.post(`commands/resetdb/${t}`,{})}getMoviesWithDirectors(){let t=this.getMovies(),r=this.getDirectors();return h([t,r]).pipe(c(([d,I])=>d.map(s=>n(o({},s),{director:I.find(l=>l.id===s.directorId)}))))}};i.\u0275fac=function(r){return new(r||i)(a(m))},i.\u0275prov=p({token:i,factory:i.\u0275fac,providedIn:"root"});let e=i;return e})();export{R as a};
