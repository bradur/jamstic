import{_ as t,a as n,i as r,s as e,b as o,S as s,g as c,t as a,j as f,k as u,l as i,d as l,u as h,m as p,o as v,v as g,f as d,q as m,h as y,w as R,n as E,x as b,c as j,e as x}from"./client.561858af.js";function q(t){return function(){var n,r=j(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var e=j(this).constructor;n=Reflect.construct(r,arguments,e)}else n=r.apply(this,arguments);return x(this,n)}}function k(t,n,r){var e=t.slice();return e[1]=n[r],e}function w(t){var n,r,e,o,s=t[1].title+"";return{c:function(){n=c("li"),r=c("a"),e=a(s),this.h()},l:function(t){n=f(t,"LI",{});var o=u(n);r=f(o,"A",{rel:!0,href:!0});var c=u(r);e=i(c,s),c.forEach(l),o.forEach(l),this.h()},h:function(){h(r,"rel","prefetch"),h(r,"href",o="blog/"+t[1].slug)},m:function(t,o){p(t,n,o),v(n,r),v(r,e)},p:function(t,n){1&n&&s!==(s=t[1].title+"")&&g(e,s),1&n&&o!==(o="blog/"+t[1].slug)&&h(r,"href",o)},d:function(t){t&&l(n)}}}function D(t){for(var n,r,e,o,s,g=t[0],j=[],x=0;x<g.length;x+=1)j[x]=w(k(t,g,x));return{c:function(){n=d(),r=c("h1"),e=a("Recent posts"),o=d(),s=c("ul");for(var t=0;t<j.length;t+=1)j[t].c();this.h()},l:function(t){m('[data-svelte="svelte-1w74l05"]',document.head).forEach(l),n=y(t),r=f(t,"H1",{});var c=u(r);e=i(c,"Recent posts"),c.forEach(l),o=y(t),s=f(t,"UL",{class:!0});for(var a=u(s),h=0;h<j.length;h+=1)j[h].l(a);a.forEach(l),this.h()},h:function(){document.title="Blog",h(s,"class","svelte-1hkq7r7")},m:function(t,c){p(t,n,c),p(t,r,c),v(r,e),p(t,o,c),p(t,s,c);for(var a=0;a<j.length;a+=1)j[a].m(s,null)},p:function(t,n){var r=R(n,1)[0];if(1&r){var e;for(g=t[0],e=0;e<g.length;e+=1){var o=k(t,g,e);j[e]?j[e].p(o,r):(j[e]=w(o),j[e].c(),j[e].m(s,null))}for(;e<j.length;e+=1)j[e].d(1);j.length=g.length}},i:E,o:E,d:function(t){t&&l(n),t&&l(r),t&&l(o),t&&l(s),b(j,t)}}}function L(t){t.params,t.query;return this.fetch("blog.json").then(function(t){return t.json()}).then(function(t){return{posts:t}})}function S(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}export default(function(c){t(f,s);var a=q(f);function f(t){var s;return n(this,f),s=a.call(this),r(o(s),t,S,D,e,{posts:0}),s}return f}());export{L as preload};
