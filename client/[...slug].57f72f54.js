import{S as s,i as e,s as a,e as t,t as l,a as c,b as r,f as n,g as h,d as o,c as m,l as i,h as f,j as v,m as g,q as u,r as d,n as E,p}from"./client.11939054.js";function I(s,e,a){const t=s.slice();return t[1]=e[a],t}function D(s,e,a){const t=s.slice();return t[4]=e[a],t}function V(s,e,a){const t=s.slice();return t[7]=e[a],t}function b(s){let e,a,u,d,E,p,I,D=s[7].title+"",V=s[7].result+"";return{c(){e=t("div"),a=t("div"),u=l(D),d=c(),E=t("div"),p=l(V),I=c(),this.h()},l(s){e=r(s,"DIV",{class:!0});var t=n(e);a=r(t,"DIV",{class:!0});var l=n(a);u=h(l,D),l.forEach(o),d=m(t),E=r(t,"DIV",{class:!0});var c=n(E);p=h(c,V),c.forEach(o),I=m(t),t.forEach(o),this.h()},h(){i(a,"class","game-result-title"),i(E,"class","game-result-value svelte-fsh916"),i(e,"class","game-result svelte-fsh916")},m(s,t){f(s,e,t),v(e,a),v(a,u),v(e,d),v(e,E),v(E,p),v(e,I)},p(s,e){1&e&&D!==(D=s[7].title+"")&&g(u,D),1&e&&V!==(V=s[7].result+"")&&g(p,V)},d(s){s&&o(e)}}}function k(s){let e,a,u,d,E,p,I=s[4].title+"";return{c(){e=t("div"),a=t("a"),u=l(I),p=c(),this.h()},l(s){e=r(s,"DIV",{class:!0});var t=n(e);a=r(t,"A",{title:!0,href:!0,class:!0});var l=n(a);u=h(l,I),l.forEach(o),p=m(t),t.forEach(o),this.h()},h(){i(a,"title",d=s[4].url),i(a,"href",E=s[4].url),i(a,"class","svelte-fsh916"),i(e,"class","game-link svelte-fsh916")},m(s,t){f(s,e,t),v(e,a),v(a,u),v(e,p)},p(s,e){1&e&&I!==(I=s[4].title+"")&&g(u,I),1&e&&d!==(d=s[4].url)&&i(a,"title",d),1&e&&E!==(E=s[4].url)&&i(a,"href",E)},d(s){s&&o(e)}}}function y(s){let e,a,u,d,E,p,I,D,V,b,k=s[1].author+"",y=s[1].ago+"",H=s[1].html+"";return{c(){e=t("div"),a=t("div"),u=l(k),d=c(),E=t("div"),p=l(y),D=c(),V=t("div"),b=c(),this.h()},l(s){e=r(s,"DIV",{class:!0});var t=n(e);a=r(t,"DIV",{class:!0});var l=n(a);u=h(l,k),l.forEach(o),d=m(t),E=r(t,"DIV",{class:!0,title:!0});var c=n(E);p=h(c,y),c.forEach(o),D=m(t),V=r(t,"DIV",{class:!0}),n(V).forEach(o),b=m(t),t.forEach(o),this.h()},h(){i(a,"class","game-comment-author"),i(E,"class","game-comment-created"),i(E,"title",I=s[1].timestamp),i(V,"class","game-comment-body svelte-fsh916"),i(e,"class","game-comment")},m(s,t){f(s,e,t),v(e,a),v(a,u),v(e,d),v(e,E),v(E,p),v(e,D),v(e,V),V.innerHTML=H,v(e,b)},p(s,e){1&e&&k!==(k=s[1].author+"")&&g(u,k),1&e&&y!==(y=s[1].ago+"")&&g(p,y),1&e&&I!==(I=s[1].timestamp)&&i(E,"title",I),1&e&&H!==(H=s[1].html+"")&&(V.innerHTML=H)},d(s){s&&o(e)}}}function H(s){let e,a,H,L,j,A,C,M,N,T,$,x,S,q,w,P,R,z,B,F,G,J,K,O,Q,U,W,X,Y,Z,_,ss,es,as,ts,ls,cs,rs,ns,hs,os,ms,is,fs,vs,gs,us,ds,Es,ps,Is,Ds,Vs,bs,ks=s[0].name+"",ys=s[0].html+"",Hs=s[0].eventName+"",Ls=s[0].subsubtype+"",js=s[0].theme+"",As=s[0].ago+"";document.title=e=s[0].name+" - bradur's games";let Cs=s[0].results.all,Ms=[];for(let e=0;e<Cs.length;e+=1)Ms[e]=b(V(s,Cs,e));let Ns=s[0].links,Ts=[];for(let e=0;e<Ns.length;e+=1)Ts[e]=k(D(s,Ns,e));let $s=s[0].comments,xs=[];for(let e=0;e<$s.length;e+=1)xs[e]=y(I(s,$s,e));return{c(){a=c(),H=t("div"),L=t("div"),j=t("a"),A=l("<- back"),C=c(),M=t("div"),N=t("h1"),T=l(ks),$=c(),x=t("div"),S=c(),q=t("div"),w=t("div"),P=c(),R=t("div"),z=t("div"),B=t("h2"),F=l("Info"),G=c(),J=t("div"),K=l(Hs),O=c(),Q=t("span"),U=l("("),W=l(Ls),X=l(")"),Y=c(),Z=t("span"),_=l("("),ss=l(js),es=l(")"),as=c(),ts=t("div"),ls=l(As),rs=c(),ns=t("div"),hs=t("h2"),os=l("Results"),ms=c();for(let s=0;s<Ms.length;s+=1)Ms[s].c();is=c(),fs=t("div"),vs=t("h2"),gs=l("Links"),us=c();for(let s=0;s<Ts.length;s+=1)Ts[s].c();ds=c(),Es=t("div"),ps=t("h2"),Is=l("Comments"),Ds=c(),Vs=t("div");for(let s=0;s<xs.length;s+=1)xs[s].c();this.h()},l(s){u('[data-svelte="svelte-18ofl54"]',document.head).forEach(o),a=m(s),H=r(s,"DIV",{class:!0,style:!0});var e=n(H);L=r(e,"DIV",{class:!0});var t=n(L);j=r(t,"A",{class:!0,href:!0});var l=n(j);A=h(l,"<- back"),l.forEach(o),t.forEach(o),C=m(e),M=r(e,"DIV",{class:!0});var c=n(M);N=r(c,"H1",{class:!0});var i=n(N);T=h(i,ks),i.forEach(o),$=m(c),x=r(c,"DIV",{class:!0}),n(x).forEach(o),S=m(c),q=r(c,"DIV",{class:!0});var f=n(q);w=r(f,"DIV",{class:!0,style:!0}),n(w).forEach(o),P=m(f),R=r(f,"DIV",{class:!0});var v=n(R);z=r(v,"DIV",{class:!0});var g=n(z);B=r(g,"H2",{});var d=n(B);F=h(d,"Info"),d.forEach(o),G=m(g),J=r(g,"DIV",{class:!0});var E=n(J);K=h(E,Hs),O=m(E),Q=r(E,"SPAN",{class:!0});var p=n(Q);U=h(p,"("),W=h(p,Ls),X=h(p,")"),p.forEach(o),Y=m(E),Z=r(E,"SPAN",{class:!0});var I=n(Z);_=h(I,"("),ss=h(I,js),es=h(I,")"),I.forEach(o),E.forEach(o),as=m(g),ts=r(g,"DIV",{class:!0,title:!0});var D=n(ts);ls=h(D,As),D.forEach(o),g.forEach(o),rs=m(v),ns=r(v,"DIV",{class:!0});var V=n(ns);hs=r(V,"H2",{});var b=n(hs);os=h(b,"Results"),b.forEach(o),ms=m(V);for(let s=0;s<Ms.length;s+=1)Ms[s].l(V);V.forEach(o),is=m(v),fs=r(v,"DIV",{class:!0});var k=n(fs);vs=r(k,"H2",{});var y=n(vs);gs=h(y,"Links"),y.forEach(o),us=m(k);for(let s=0;s<Ts.length;s+=1)Ts[s].l(k);k.forEach(o),v.forEach(o),f.forEach(o),ds=m(c),Es=r(c,"DIV",{class:!0});var cs=n(Es);ps=r(cs,"H2",{});var bs=n(ps);Is=h(bs,"Comments"),bs.forEach(o),Ds=m(cs),Vs=r(cs,"DIV",{class:!0});var ys=n(Vs);for(let s=0;s<xs.length;s+=1)xs[s].l(ys);ys.forEach(o),cs.forEach(o),c.forEach(o),e.forEach(o),this.h()},h(){i(j,"class","nav-back svelte-fsh916"),i(j,"href","games"),i(L,"class","page-nav svelte-fsh916"),i(N,"class","game-title svelte-fsh916"),i(x,"class","game-content svelte-fsh916"),i(w,"class","game-cover-img svelte-fsh916"),d(w,"background-image","url('"+s[0].cover+"')"),i(Q,"class","game-event-type"),i(Z,"class","game-event-theme"),i(J,"class","game-event"),i(ts,"class","game-publish-date"),i(ts,"title",cs=s[0].timestamp),i(z,"class","game-meta-section svelte-fsh916"),i(ns,"class","game-meta-section svelte-fsh916"),i(fs,"class","game-meta-section svelte-fsh916"),i(R,"class","game-meta svelte-fsh916"),i(q,"class","game-meta-container svelte-fsh916"),i(Vs,"class","game-comments-container"),i(Es,"class","game-comments svelte-fsh916"),i(M,"class","game-container svelte-fsh916"),i(H,"class","page-container svelte-fsh916"),i(H,"style",bs=s[0].coverColors.css)},m(s,e){f(s,a,e),f(s,H,e),v(H,L),v(L,j),v(j,A),v(H,C),v(H,M),v(M,N),v(N,T),v(M,$),v(M,x),x.innerHTML=ys,v(M,S),v(M,q),v(q,w),v(q,P),v(q,R),v(R,z),v(z,B),v(B,F),v(z,G),v(z,J),v(J,K),v(J,O),v(J,Q),v(Q,U),v(Q,W),v(Q,X),v(J,Y),v(J,Z),v(Z,_),v(Z,ss),v(Z,es),v(z,as),v(z,ts),v(ts,ls),v(R,rs),v(R,ns),v(ns,hs),v(hs,os),v(ns,ms);for(let s=0;s<Ms.length;s+=1)Ms[s].m(ns,null);v(R,is),v(R,fs),v(fs,vs),v(vs,gs),v(fs,us);for(let s=0;s<Ts.length;s+=1)Ts[s].m(fs,null);v(M,ds),v(M,Es),v(Es,ps),v(ps,Is),v(Es,Ds),v(Es,Vs);for(let s=0;s<xs.length;s+=1)xs[s].m(Vs,null)},p(s,[a]){if(1&a&&e!==(e=s[0].name+" - bradur's games")&&(document.title=e),1&a&&ks!==(ks=s[0].name+"")&&g(T,ks),1&a&&ys!==(ys=s[0].html+"")&&(x.innerHTML=ys),1&a&&d(w,"background-image","url('"+s[0].cover+"')"),1&a&&Hs!==(Hs=s[0].eventName+"")&&g(K,Hs),1&a&&Ls!==(Ls=s[0].subsubtype+"")&&g(W,Ls),1&a&&js!==(js=s[0].theme+"")&&g(ss,js),1&a&&As!==(As=s[0].ago+"")&&g(ls,As),1&a&&cs!==(cs=s[0].timestamp)&&i(ts,"title",cs),1&a){let e;for(Cs=s[0].results.all,e=0;e<Cs.length;e+=1){const t=V(s,Cs,e);Ms[e]?Ms[e].p(t,a):(Ms[e]=b(t),Ms[e].c(),Ms[e].m(ns,null))}for(;e<Ms.length;e+=1)Ms[e].d(1);Ms.length=Cs.length}if(1&a){let e;for(Ns=s[0].links,e=0;e<Ns.length;e+=1){const t=D(s,Ns,e);Ts[e]?Ts[e].p(t,a):(Ts[e]=k(t),Ts[e].c(),Ts[e].m(fs,null))}for(;e<Ts.length;e+=1)Ts[e].d(1);Ts.length=Ns.length}if(1&a){let e;for($s=s[0].comments,e=0;e<$s.length;e+=1){const t=I(s,$s,e);xs[e]?xs[e].p(t,a):(xs[e]=y(t),xs[e].c(),xs[e].m(Vs,null))}for(;e<xs.length;e+=1)xs[e].d(1);xs.length=$s.length}1&a&&bs!==(bs=s[0].coverColors.css)&&i(H,"style",bs)},i:E,o:E,d(s){s&&o(a),s&&o(H),p(Ms,s),p(Ts,s),p(xs,s)}}}async function L({params:s,query:e}){const[a,t,l]=s.slug,c=`games/${a}/${t}/${l}.json`,r=await this.fetch(c),n=await r.json();if(200===r.status)return{game:n};this.error(r.status,n.message)}function j(s,e,a){let{game:t}=e;return s.$set=s=>{"game"in s&&a(0,t=s.game)},[t]}export default class extends s{constructor(s){super(),e(this,s,j,H,a,{game:0})}}export{L as preload};