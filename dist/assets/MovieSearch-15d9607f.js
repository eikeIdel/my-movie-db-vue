import{d as p,h as _,_ as h,o as M,c as m,e as n,i as b,v as S,u as v,j as w,k as D,a as g,w as k,F as f,f as I,p as R,l as j,g as T}from"./index-e56573cb.js";import{u as x,a as q,F as E,_ as N}from"./useGetMyMovies-42b93a37.js";function F(){const{getMyMovies:a,myMovies:c}=x(),i=p(!0),l=p(""),r=p({Search:[]}),u=_(()=>{if(r.value){let t=r.value.Search;return t.forEach(s=>{c.value.some(o=>o.imdbID===s.imdbID)?t[t.indexOf(s)].isMyMovie=!0:t[t.indexOf(s)].isMyMovie=!1}),t}});async function d(){if(!l.value)alert("No empty search allowed.");else if(i.value===!0){console.count("REQUEST"),await a();const s=`http://www.omdbapi.com/?apiKey=5a4d22b2&s=${l.value}&Type=movie`;await fetch(s,{method:"GET",redirect:"follow"}).then(e=>e.json()).then(e=>r.value=e).catch(e=>console.error("error:"+e))}else r.value={d:[{id:"fake123",l:"Test Movie",i:{imageUrl:"https://m.media-amazon.com/images/M/MV5BMjZiOTNlMzYtZWYwZS00YWJjLTk5NDgtODkwNjRhMDI0MjhjXkEyXkFqcGdeQXVyMjgyNjk3MzE@._V1_.jpg"},qid:"movie"}]}}return{query:l,onlyMovies:u,startSearch:d,useApi:i}}const y=a=>(R("data-v-8c3b586d"),a=a(),j(),a),P=y(()=>n("label",null,"Find your favorite Movie:",-1)),U=y(()=>n("button",{type:"submit"},"Start Search",-1)),V={__name:"MovieSearch",setup(a){const{movieDetails:c}=q(),{query:i,onlyMovies:l,startSearch:r,useApi:u}=F();u.value=!0;async function d(){await r()}function t(){console.log(c.value)}return(s,o)=>(M(),m(f,null,[n("button",{onClick:t},"Log"),n("form",{onSubmit:o[1]||(o[1]=D(e=>d(),["prevent"]))},[P,b(n("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>w(i)?i.value=e:null),name:"query"},null,512),[[S,v(i),void 0,{text:!0}]]),U],32),g(E,null,{default:k(()=>[(M(!0),m(f,null,I(v(l),e=>(M(),T(N,{id:e.id,Title:e.Title,Poster:e.Poster,Actors:e.Actors,Release:e.Release,imdbID:e.imdbID,key:e.imdbID,isMyMovie:s.isMyMovie,Plot:e.Plot,Director:e.Director,Runtime:e.Runtime},null,8,["id","Title","Poster","Actors","Release","imdbID","isMyMovie","Plot","Director","Runtime"]))),128))]),_:1})],64))}},O=h(V,[["__scopeId","data-v-8c3b586d"]]);export{O as default};