import{S as t,i as s,s as a,a as e,e as n,t as o,q as i,d as l,c as r,b as c,f as h,g as u,l as p,h as f,j as d,m,n as v}from"./client.11939054.js";function g(t){let s,a,g,x,j,E,w,H=t[0].title+"",b=t[0].html+"";return document.title=s=t[0].title,{c(){a=e(),g=n("div"),x=n("h1"),j=o(H),E=e(),w=n("div"),this.h()},l(t){i('[data-svelte="svelte-iu3vwn"]',document.head).forEach(l),a=r(t),g=c(t,"DIV",{class:!0});var s=h(g);x=c(s,"H1",{});var e=h(x);j=u(e,H),e.forEach(l),E=r(s),w=c(s,"DIV",{class:!0}),h(w).forEach(l),s.forEach(l),this.h()},h(){p(w,"class","content svelte-1n5lxkt"),p(g,"class","post-page svelte-1n5lxkt")},m(t,s){f(t,a,s),f(t,g,s),d(g,x),d(x,j),d(g,E),d(g,w),w.innerHTML=b},p(t,[a]){1&a&&s!==(s=t[0].title)&&(document.title=s),1&a&&H!==(H=t[0].title+"")&&m(j,H),1&a&&b!==(b=t[0].html+"")&&(w.innerHTML=b)},i:v,o:v,d(t){t&&l(a),t&&l(g)}}}async function x({params:t,query:s}){const a=await this.fetch(`blog/${t.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function j(t,s,a){let{post:e}=s;return t.$set=t=>{"post"in t&&a(0,e=t.post)},[e]}export default class extends t{constructor(t){super(),s(this,t,j,g,a,{post:0})}}export{x as preload};