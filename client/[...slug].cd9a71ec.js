import{S as e,i as s,s as t,e as a,t as l,a as c,b as r,f as n,g as i,d as m,c as o,l as h,h as v,j as f,m as g,q as u,r as d,n as E,p}from"./client.39bfc4f0.js";function I(e,s,t){const a=e.slice();return a[1]=s[t],a}function D(e,s,t){const a=e.slice();return a[4]=s[t],a}function V(e,s,t){const a=e.slice();return a[7]=s[t],a}function b(e){let s,t,u,d,E,p,I,D=e[7].title+"",V=e[7].result+"";return{c(){s=a("div"),t=a("div"),u=l(D),d=c(),E=a("div"),p=l(V),I=c(),this.h()},l(e){s=r(e,"DIV",{class:!0});var a=n(s);t=r(a,"DIV",{class:!0});var l=n(t);u=i(l,D),l.forEach(m),d=o(a),E=r(a,"DIV",{class:!0});var c=n(E);p=i(c,V),c.forEach(m),I=o(a),a.forEach(m),this.h()},h(){h(t,"class","game-result-title"),h(E,"class","game-result-value svelte-1mivc83"),h(s,"class","game-result svelte-1mivc83")},m(e,a){v(e,s,a),f(s,t),f(t,u),f(s,d),f(s,E),f(E,p),f(s,I)},p(e,s){1&s&&D!==(D=e[7].title+"")&&g(u,D),1&s&&V!==(V=e[7].result+"")&&g(p,V)},d(e){e&&m(s)}}}function k(e){let s,t,u,d,E,p,I=e[4].title+"";return{c(){s=a("div"),t=a("a"),u=l(I),p=c(),this.h()},l(e){s=r(e,"DIV",{class:!0});var a=n(s);t=r(a,"A",{title:!0,href:!0,class:!0});var l=n(t);u=i(l,I),l.forEach(m),p=o(a),a.forEach(m),this.h()},h(){h(t,"title",d=e[4].url),h(t,"href",E=e[4].url),h(t,"class","svelte-1mivc83"),h(s,"class","game-link svelte-1mivc83")},m(e,a){v(e,s,a),f(s,t),f(t,u),f(s,p)},p(e,s){1&s&&I!==(I=e[4].title+"")&&g(u,I),1&s&&d!==(d=e[4].url)&&h(t,"title",d),1&s&&E!==(E=e[4].url)&&h(t,"href",E)},d(e){e&&m(s)}}}function H(e){let s,t,u,d,E,p,I,D,V,b,k=e[1].author+"",H=e[1].ago+"",y=e[1].html+"";return{c(){s=a("div"),t=a("div"),u=l(k),d=c(),E=a("div"),p=l(H),D=c(),V=a("div"),b=c(),this.h()},l(e){s=r(e,"DIV",{class:!0});var a=n(s);t=r(a,"DIV",{class:!0});var l=n(t);u=i(l,k),l.forEach(m),d=o(a),E=r(a,"DIV",{class:!0,title:!0});var c=n(E);p=i(c,H),c.forEach(m),D=o(a),V=r(a,"DIV",{class:!0}),n(V).forEach(m),b=o(a),a.forEach(m),this.h()},h(){h(t,"class","game-comment-author"),h(E,"class","game-comment-created"),h(E,"title",I=e[1].timestamp),h(V,"class","game-comment-body svelte-1mivc83"),h(s,"class","game-comment")},m(e,a){v(e,s,a),f(s,t),f(t,u),f(s,d),f(s,E),f(E,p),f(s,D),f(s,V),V.innerHTML=y,f(s,b)},p(e,s){1&s&&k!==(k=e[1].author+"")&&g(u,k),1&s&&H!==(H=e[1].ago+"")&&g(p,H),1&s&&I!==(I=e[1].timestamp)&&h(E,"title",I),1&s&&y!==(y=e[1].html+"")&&(V.innerHTML=y)},d(e){e&&m(s)}}}function y(e){let s,t,y,L,j,M,T,$,x,A,q,w,B,C,R,S,N,P,z,F,G,J,K,O,Q,U,W,X,Y,Z,_,ee,se,te,ae,le,ce,re,ne,ie,me,oe,he,ve,fe,ge,ue=e[0].name+"",de=e[0].html+"",Ee=e[0].event.name+"",pe=e[0].subsubtype+"",Ie=e[0].ago+"";document.title=s=e[0].name+" - bradur's games";let De=e[0].results,Ve=[];for(let s=0;s<De.length;s+=1)Ve[s]=b(V(e,De,s));let be=e[0].links,ke=[];for(let s=0;s<be.length;s+=1)ke[s]=k(D(e,be,s));let He=e[0].comments,ye=[];for(let s=0;s<He.length;s+=1)ye[s]=H(I(e,He,s));return{c(){t=c(),y=a("a"),L=l("<- Back"),j=c(),M=a("div"),T=a("h1"),$=l(ue),x=c(),A=a("div"),q=c(),w=a("div"),B=a("div"),C=c(),R=a("div"),S=a("div"),N=a("h2"),P=l("Info"),z=c(),F=a("div"),G=l(Ee),J=c(),K=a("span"),O=l("("),Q=l(pe),U=l(")"),W=c(),X=a("div"),Y=l(Ie),_=c(),ee=a("div"),se=a("h2"),te=l("Results"),ae=c();for(let e=0;e<Ve.length;e+=1)Ve[e].c();le=c(),ce=a("div"),re=a("h2"),ne=l("Links"),ie=c();for(let e=0;e<ke.length;e+=1)ke[e].c();me=c(),oe=a("div"),he=a("h2"),ve=l("Comments"),fe=c(),ge=a("div");for(let e=0;e<ye.length;e+=1)ye[e].c();this.h()},l(e){u('[data-svelte="svelte-lg4nti"]',document.head).forEach(m),t=o(e),y=r(e,"A",{class:!0,href:!0});var s=n(y);L=i(s,"<- Back"),s.forEach(m),j=o(e),M=r(e,"DIV",{class:!0});var a=n(M);T=r(a,"H1",{class:!0});var l=n(T);$=i(l,ue),l.forEach(m),x=o(a),A=r(a,"DIV",{class:!0}),n(A).forEach(m),q=o(a),w=r(a,"DIV",{class:!0});var c=n(w);B=r(c,"DIV",{class:!0,style:!0}),n(B).forEach(m),C=o(c),R=r(c,"DIV",{class:!0});var h=n(R);S=r(h,"DIV",{class:!0});var v=n(S);N=r(v,"H2",{});var f=n(N);P=i(f,"Info"),f.forEach(m),z=o(v),F=r(v,"DIV",{class:!0});var g=n(F);G=i(g,Ee),J=o(g),K=r(g,"SPAN",{class:!0});var d=n(K);O=i(d,"("),Q=i(d,pe),U=i(d,")"),d.forEach(m),g.forEach(m),W=o(v),X=r(v,"DIV",{class:!0,title:!0});var E=n(X);Y=i(E,Ie),E.forEach(m),v.forEach(m),_=o(h),ee=r(h,"DIV",{class:!0});var p=n(ee);se=r(p,"H2",{});var I=n(se);te=i(I,"Results"),I.forEach(m),ae=o(p);for(let e=0;e<Ve.length;e+=1)Ve[e].l(p);p.forEach(m),le=o(h),ce=r(h,"DIV",{class:!0});var D=n(ce);re=r(D,"H2",{});var V=n(re);ne=i(V,"Links"),V.forEach(m),ie=o(D);for(let e=0;e<ke.length;e+=1)ke[e].l(D);D.forEach(m),h.forEach(m),c.forEach(m),me=o(a),oe=r(a,"DIV",{class:!0});var b=n(oe);he=r(b,"H2",{});var k=n(he);ve=i(k,"Comments"),k.forEach(m),fe=o(b),ge=r(b,"DIV",{class:!0});var H=n(ge);for(let e=0;e<ye.length;e+=1)ye[e].l(H);H.forEach(m),b.forEach(m),a.forEach(m),this.h()},h(){h(y,"class","nav-back svelte-1mivc83"),h(y,"href","games"),h(T,"class","game-title svelte-1mivc83"),h(A,"class","game-content svelte-1mivc83"),h(B,"class","game-cover-img svelte-1mivc83"),d(B,"background-image","url('"+e[0].cover+"')"),h(K,"class","game-event-type"),h(F,"class","game-event"),h(X,"class","game-publish-date"),h(X,"title",Z=e[0].timestamp),h(S,"class","game-meta-section svelte-1mivc83"),h(ee,"class","game-meta-section svelte-1mivc83"),h(ce,"class","game-meta-section svelte-1mivc83"),h(R,"class","game-meta svelte-1mivc83"),h(w,"class","game-meta-container svelte-1mivc83"),h(ge,"class","game-comments-container"),h(oe,"class","game-comments svelte-1mivc83"),h(M,"class","game-container svelte-1mivc83")},m(e,s){v(e,t,s),v(e,y,s),f(y,L),v(e,j,s),v(e,M,s),f(M,T),f(T,$),f(M,x),f(M,A),A.innerHTML=de,f(M,q),f(M,w),f(w,B),f(w,C),f(w,R),f(R,S),f(S,N),f(N,P),f(S,z),f(S,F),f(F,G),f(F,J),f(F,K),f(K,O),f(K,Q),f(K,U),f(S,W),f(S,X),f(X,Y),f(R,_),f(R,ee),f(ee,se),f(se,te),f(ee,ae);for(let e=0;e<Ve.length;e+=1)Ve[e].m(ee,null);f(R,le),f(R,ce),f(ce,re),f(re,ne),f(ce,ie);for(let e=0;e<ke.length;e+=1)ke[e].m(ce,null);f(M,me),f(M,oe),f(oe,he),f(he,ve),f(oe,fe),f(oe,ge);for(let e=0;e<ye.length;e+=1)ye[e].m(ge,null)},p(e,[t]){if(1&t&&s!==(s=e[0].name+" - bradur's games")&&(document.title=s),1&t&&ue!==(ue=e[0].name+"")&&g($,ue),1&t&&de!==(de=e[0].html+"")&&(A.innerHTML=de),1&t&&d(B,"background-image","url('"+e[0].cover+"')"),1&t&&Ee!==(Ee=e[0].event.name+"")&&g(G,Ee),1&t&&pe!==(pe=e[0].subsubtype+"")&&g(Q,pe),1&t&&Ie!==(Ie=e[0].ago+"")&&g(Y,Ie),1&t&&Z!==(Z=e[0].timestamp)&&h(X,"title",Z),1&t){let s;for(De=e[0].results,s=0;s<De.length;s+=1){const a=V(e,De,s);Ve[s]?Ve[s].p(a,t):(Ve[s]=b(a),Ve[s].c(),Ve[s].m(ee,null))}for(;s<Ve.length;s+=1)Ve[s].d(1);Ve.length=De.length}if(1&t){let s;for(be=e[0].links,s=0;s<be.length;s+=1){const a=D(e,be,s);ke[s]?ke[s].p(a,t):(ke[s]=k(a),ke[s].c(),ke[s].m(ce,null))}for(;s<ke.length;s+=1)ke[s].d(1);ke.length=be.length}if(1&t){let s;for(He=e[0].comments,s=0;s<He.length;s+=1){const a=I(e,He,s);ye[s]?ye[s].p(a,t):(ye[s]=H(a),ye[s].c(),ye[s].m(ge,null))}for(;s<ye.length;s+=1)ye[s].d(1);ye.length=He.length}},i:E,o:E,d(e){e&&m(t),e&&m(y),e&&m(j),e&&m(M),p(Ve,e),p(ke,e),p(ye,e)}}}async function L({params:e,query:s}){const[t,a,l]=e.slug,c=`games/${t}/${a}/${l}.json`,r=await this.fetch(c),n=await r.json();if(200===r.status)return{game:n};this.error(r.status,n.message)}function j(e,s,t){let{game:a}=s;return e.$set=(e=>{"game"in e&&t(0,a=e.game)}),[a]}export default class extends e{constructor(e){super(),s(this,e,j,y,t,{game:0})}}export{L as preload};
