import{u as t,v as a,y as e,_ as s,a as n,i as r,s as c,b as l,S as i,e as o,t as v,c as f,g as u,h as m,j as h,d as g,f as d,w as p,k as E,l as D,x as I,q as V,A as y,n as b,z as k,m as H,p as x}from"./client.7e51fe0e.js";function R(t){return function(){var a,e=H(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var s=H(this).constructor;a=Reflect.construct(e,arguments,s)}else a=e.apply(this,arguments);return x(this,a)}}function L(t,a,e){var s=t.slice();return s[1]=a[e],s}function j(t,a,e){var s=t.slice();return s[4]=a[e],s}function A(t,a,e){var s=t.slice();return s[7]=a[e],s}function M(t){var a,e,s,n,r,c,l,i=t[7].title+"",V=t[7].result+"";return{c:function(){a=o("div"),e=o("div"),s=v(i),n=f(),r=o("div"),c=v(V),l=f(),this.h()},l:function(t){a=u(t,"DIV",{class:!0});var o=m(a);e=u(o,"DIV",{class:!0});var v=m(e);s=h(v,i),v.forEach(g),n=d(o),r=u(o,"DIV",{class:!0});var f=m(r);c=h(f,V),f.forEach(g),l=d(o),o.forEach(g),this.h()},h:function(){p(e,"class","game-result-title"),p(r,"class","game-result-value svelte-1mivc83"),p(a,"class","game-result svelte-1mivc83")},m:function(t,i){E(t,a,i),D(a,e),D(e,s),D(a,n),D(a,r),D(r,c),D(a,l)},p:function(t,a){1&a&&i!==(i=t[7].title+"")&&I(s,i),1&a&&V!==(V=t[7].result+"")&&I(c,V)},d:function(t){t&&g(a)}}}function T(t){var a,e,s,n,r,c,l=t[4].title+"";return{c:function(){a=o("div"),e=o("a"),s=v(l),c=f(),this.h()},l:function(t){a=u(t,"DIV",{class:!0});var n=m(a);e=u(n,"A",{title:!0,href:!0,class:!0});var r=m(e);s=h(r,l),r.forEach(g),c=d(n),n.forEach(g),this.h()},h:function(){p(e,"title",n=t[4].url),p(e,"href",r=t[4].url),p(e,"class","svelte-1mivc83"),p(a,"class","game-link svelte-1mivc83")},m:function(t,n){E(t,a,n),D(a,e),D(e,s),D(a,c)},p:function(t,a){1&a&&l!==(l=t[4].title+"")&&I(s,l),1&a&&n!==(n=t[4].url)&&p(e,"title",n),1&a&&r!==(r=t[4].url)&&p(e,"href",r)},d:function(t){t&&g(a)}}}function w(t){var a,e,s,n,r,c,l,i,V,y,b=t[1].author+"",k=t[1].ago+"",H=t[1].html+"";return{c:function(){a=o("div"),e=o("div"),s=v(b),n=f(),r=o("div"),c=v(k),i=f(),V=o("div"),y=f(),this.h()},l:function(t){a=u(t,"DIV",{class:!0});var l=m(a);e=u(l,"DIV",{class:!0});var o=m(e);s=h(o,b),o.forEach(g),n=d(l),r=u(l,"DIV",{class:!0,title:!0});var v=m(r);c=h(v,k),v.forEach(g),i=d(l),V=u(l,"DIV",{class:!0}),m(V).forEach(g),y=d(l),l.forEach(g),this.h()},h:function(){p(e,"class","game-comment-author"),p(r,"class","game-comment-created"),p(r,"title",l=t[1].timestamp),p(V,"class","game-comment-body svelte-1mivc83"),p(a,"class","game-comment")},m:function(t,l){E(t,a,l),D(a,e),D(e,s),D(a,n),D(a,r),D(r,c),D(a,i),D(a,V),V.innerHTML=H,D(a,y)},p:function(t,a){1&a&&b!==(b=t[1].author+"")&&I(s,b),1&a&&k!==(k=t[1].ago+"")&&I(c,k),1&a&&l!==(l=t[1].timestamp)&&p(r,"title",l),1&a&&H!==(H=t[1].html+"")&&(V.innerHTML=H)},d:function(t){t&&g(a)}}}function S(t){var a,s,n,r,c,l,i,H,x,R,S,q,B,C,P,z,N,$,_,F,G,J,K,O,Q,U,W,X,Y,Z,tt,at,et,st,nt,rt,ct,lt,it,ot,vt,ft,ut,mt,ht,gt,dt=t[0].name+"",pt=t[0].html+"",Et=t[0].event.name+"",Dt=t[0].subsubtype+"",It=t[0].ago+"";document.title=a=t[0].name+" - bradur's games";for(var Vt=t[0].results,yt=[],bt=0;bt<Vt.length;bt+=1)yt[bt]=M(A(t,Vt,bt));for(var kt=t[0].links,Ht=[],xt=0;xt<kt.length;xt+=1)Ht[xt]=T(j(t,kt,xt));for(var Rt=t[0].comments,Lt=[],jt=0;jt<Rt.length;jt+=1)Lt[jt]=w(L(t,Rt,jt));return{c:function(){s=f(),n=o("a"),r=v("<- Back"),c=f(),l=o("div"),i=o("h1"),H=v(dt),x=f(),R=o("div"),S=f(),q=o("div"),B=o("div"),C=f(),P=o("div"),z=o("div"),N=o("h2"),$=v("Info"),_=f(),F=o("div"),G=v(Et),J=f(),K=o("span"),O=v("("),Q=v(Dt),U=v(")"),W=f(),X=o("div"),Y=v(It),tt=f(),at=o("div"),et=o("h2"),st=v("Results"),nt=f();for(var t=0;t<yt.length;t+=1)yt[t].c();rt=f(),ct=o("div"),lt=o("h2"),it=v("Links"),ot=f();for(var a=0;a<Ht.length;a+=1)Ht[a].c();vt=f(),ft=o("div"),ut=o("h2"),mt=v("Comments"),ht=f(),gt=o("div");for(var e=0;e<Lt.length;e+=1)Lt[e].c();this.h()},l:function(t){V('[data-svelte="svelte-lg4nti"]',document.head).forEach(g),s=d(t),n=u(t,"A",{class:!0,href:!0});var a=m(n);r=h(a,"<- Back"),a.forEach(g),c=d(t),l=u(t,"DIV",{class:!0});var e=m(l);i=u(e,"H1",{class:!0});var o=m(i);H=h(o,dt),o.forEach(g),x=d(e),R=u(e,"DIV",{class:!0}),m(R).forEach(g),S=d(e),q=u(e,"DIV",{class:!0});var v=m(q);B=u(v,"DIV",{class:!0,style:!0}),m(B).forEach(g),C=d(v),P=u(v,"DIV",{class:!0});var f=m(P);z=u(f,"DIV",{class:!0});var p=m(z);N=u(p,"H2",{});var E=m(N);$=h(E,"Info"),E.forEach(g),_=d(p),F=u(p,"DIV",{class:!0});var D=m(F);G=h(D,Et),J=d(D),K=u(D,"SPAN",{class:!0});var I=m(K);O=h(I,"("),Q=h(I,Dt),U=h(I,")"),I.forEach(g),D.forEach(g),W=d(p),X=u(p,"DIV",{class:!0,title:!0});var y=m(X);Y=h(y,It),y.forEach(g),p.forEach(g),tt=d(f),at=u(f,"DIV",{class:!0});var b=m(at);et=u(b,"H2",{});var k=m(et);st=h(k,"Results"),k.forEach(g),nt=d(b);for(var L=0;L<yt.length;L+=1)yt[L].l(b);b.forEach(g),rt=d(f),ct=u(f,"DIV",{class:!0});var j=m(ct);lt=u(j,"H2",{});var A=m(lt);it=h(A,"Links"),A.forEach(g),ot=d(j);for(var M=0;M<Ht.length;M+=1)Ht[M].l(j);j.forEach(g),f.forEach(g),v.forEach(g),vt=d(e),ft=u(e,"DIV",{class:!0});var T=m(ft);ut=u(T,"H2",{});var w=m(ut);mt=h(w,"Comments"),w.forEach(g),ht=d(T),gt=u(T,"DIV",{class:!0});for(var Z=m(gt),pt=0;pt<Lt.length;pt+=1)Lt[pt].l(Z);Z.forEach(g),T.forEach(g),e.forEach(g),this.h()},h:function(){p(n,"class","nav-back svelte-1mivc83"),p(n,"href","games"),p(i,"class","game-title svelte-1mivc83"),p(R,"class","game-content svelte-1mivc83"),p(B,"class","game-cover-img svelte-1mivc83"),y(B,"background-image","url('"+t[0].cover+"')"),p(K,"class","game-event-type"),p(F,"class","game-event"),p(X,"class","game-publish-date"),p(X,"title",Z=t[0].timestamp),p(z,"class","game-meta-section svelte-1mivc83"),p(at,"class","game-meta-section svelte-1mivc83"),p(ct,"class","game-meta-section svelte-1mivc83"),p(P,"class","game-meta svelte-1mivc83"),p(q,"class","game-meta-container svelte-1mivc83"),p(gt,"class","game-comments-container"),p(ft,"class","game-comments svelte-1mivc83"),p(l,"class","game-container svelte-1mivc83")},m:function(t,a){E(t,s,a),E(t,n,a),D(n,r),E(t,c,a),E(t,l,a),D(l,i),D(i,H),D(l,x),D(l,R),R.innerHTML=pt,D(l,S),D(l,q),D(q,B),D(q,C),D(q,P),D(P,z),D(z,N),D(N,$),D(z,_),D(z,F),D(F,G),D(F,J),D(F,K),D(K,O),D(K,Q),D(K,U),D(z,W),D(z,X),D(X,Y),D(P,tt),D(P,at),D(at,et),D(et,st),D(at,nt);for(var e=0;e<yt.length;e+=1)yt[e].m(at,null);D(P,rt),D(P,ct),D(ct,lt),D(lt,it),D(ct,ot);for(var o=0;o<Ht.length;o+=1)Ht[o].m(ct,null);D(l,vt),D(l,ft),D(ft,ut),D(ut,mt),D(ft,ht),D(ft,gt);for(var v=0;v<Lt.length;v+=1)Lt[v].m(gt,null)},p:function(t,s){var n=e(s,1)[0];if(1&n&&a!==(a=t[0].name+" - bradur's games")&&(document.title=a),1&n&&dt!==(dt=t[0].name+"")&&I(H,dt),1&n&&pt!==(pt=t[0].html+"")&&(R.innerHTML=pt),1&n&&y(B,"background-image","url('"+t[0].cover+"')"),1&n&&Et!==(Et=t[0].event.name+"")&&I(G,Et),1&n&&Dt!==(Dt=t[0].subsubtype+"")&&I(Q,Dt),1&n&&It!==(It=t[0].ago+"")&&I(Y,It),1&n&&Z!==(Z=t[0].timestamp)&&p(X,"title",Z),1&n){var r;for(Vt=t[0].results,r=0;r<Vt.length;r+=1){var c=A(t,Vt,r);yt[r]?yt[r].p(c,n):(yt[r]=M(c),yt[r].c(),yt[r].m(at,null))}for(;r<yt.length;r+=1)yt[r].d(1);yt.length=Vt.length}if(1&n){var l;for(kt=t[0].links,l=0;l<kt.length;l+=1){var i=j(t,kt,l);Ht[l]?Ht[l].p(i,n):(Ht[l]=T(i),Ht[l].c(),Ht[l].m(ct,null))}for(;l<Ht.length;l+=1)Ht[l].d(1);Ht.length=kt.length}if(1&n){var o;for(Rt=t[0].comments,o=0;o<Rt.length;o+=1){var v=L(t,Rt,o);Lt[o]?Lt[o].p(v,n):(Lt[o]=w(v),Lt[o].c(),Lt[o].m(gt,null))}for(;o<Lt.length;o+=1)Lt[o].d(1);Lt.length=Rt.length}},i:b,o:b,d:function(t){t&&g(s),t&&g(n),t&&g(c),t&&g(l),k(yt,t),k(Ht,t),k(Lt,t)}}}function q(t){return B.apply(this,arguments)}function B(){return(B=t(a.mark(function t(s){var n,r,c,l,i,o,v,f;return a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=s.params,s.query,r=e(n.slug,3),c=r[0],l=r[1],i=r[2],o="games/".concat(c,"/").concat(l,"/").concat(i,".json"),t.next=5,this.fetch(o);case 5:return v=t.sent,t.next=8,v.json();case 8:if(f=t.sent,200!==v.status){t.next=13;break}return t.abrupt("return",{game:f});case 13:this.error(v.status,f.message);case 14:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function C(t,a,e){var s=a.game;return t.$set=function(t){"game"in t&&e(0,s=t.game)},[s]}export default(function(t){s(e,i);var a=R(e);function e(t){var s;return n(this,e),s=a.call(this),r(l(s),t,C,S,c,{game:0}),s}return e}());export{q as preload};
