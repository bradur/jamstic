import{u as a,v as t,z as e,_ as s,a as r,b as n,c,i as l,s as o,d as i,S as f,f as h,t as u,e as v,j as m,k as g,l as d,g as p,h as E,w as D,m as I,n as V,x as y,q as b,A as k,o as H,y as x}from"./client.0f107297.js";function R(a){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(a){return!1}}();return function(){var e,s=r(a);if(t){var c=r(this).constructor;e=Reflect.construct(s,arguments,c)}else e=s.apply(this,arguments);return n(this,e)}}function L(a,t,e){var s=a.slice();return s[1]=t[e],s}function A(a,t,e){var s=a.slice();return s[4]=t[e],s}function j(a,t,e){var s=a.slice();return s[7]=t[e],s}function C(a){var t,e,s,r,n,c,l,o=a[7].title+"",i=a[7].result+"";return{c:function(){t=h("div"),e=h("div"),s=u(o),r=v(),n=h("div"),c=u(i),l=v(),this.h()},l:function(a){t=m(a,"DIV",{class:!0});var f=g(t);e=m(f,"DIV",{class:!0});var h=g(e);s=d(h,o),h.forEach(p),r=E(f),n=m(f,"DIV",{class:!0});var u=g(n);c=d(u,i),u.forEach(p),l=E(f),f.forEach(p),this.h()},h:function(){D(e,"class","game-result-title"),D(n,"class","game-result-value svelte-fsh916"),D(t,"class","game-result svelte-fsh916")},m:function(a,o){I(a,t,o),V(t,e),V(e,s),V(t,r),V(t,n),V(n,c),V(t,l)},p:function(a,t){1&t&&o!==(o=a[7].title+"")&&y(s,o),1&t&&i!==(i=a[7].result+"")&&y(c,i)},d:function(a){a&&p(t)}}}function M(a){var t,e,s,r,n,c,l=a[4].title+"";return{c:function(){t=h("div"),e=h("a"),s=u(l),c=v(),this.h()},l:function(a){t=m(a,"DIV",{class:!0});var r=g(t);e=m(r,"A",{title:!0,href:!0,class:!0});var n=g(e);s=d(n,l),n.forEach(p),c=E(r),r.forEach(p),this.h()},h:function(){D(e,"title",r=a[4].url),D(e,"href",n=a[4].url),D(e,"class","svelte-fsh916"),D(t,"class","game-link svelte-fsh916")},m:function(a,r){I(a,t,r),V(t,e),V(e,s),V(t,c)},p:function(a,t){1&t&&l!==(l=a[4].title+"")&&y(s,l),1&t&&r!==(r=a[4].url)&&D(e,"title",r),1&t&&n!==(n=a[4].url)&&D(e,"href",n)},d:function(a){a&&p(t)}}}function N(a){var t,e,s,r,n,c,l,o,i,f,b=a[1].author+"",k=a[1].ago+"",H=a[1].html+"";return{c:function(){t=h("div"),e=h("div"),s=u(b),r=v(),n=h("div"),c=u(k),o=v(),i=h("div"),f=v(),this.h()},l:function(a){t=m(a,"DIV",{class:!0});var l=g(t);e=m(l,"DIV",{class:!0});var h=g(e);s=d(h,b),h.forEach(p),r=E(l),n=m(l,"DIV",{class:!0,title:!0});var u=g(n);c=d(u,k),u.forEach(p),o=E(l),i=m(l,"DIV",{class:!0}),g(i).forEach(p),f=E(l),l.forEach(p),this.h()},h:function(){D(e,"class","game-comment-author"),D(n,"class","game-comment-created"),D(n,"title",l=a[1].timestamp),D(i,"class","game-comment-body svelte-fsh916"),D(t,"class","game-comment")},m:function(a,l){I(a,t,l),V(t,e),V(e,s),V(t,r),V(t,n),V(n,c),V(t,o),V(t,i),i.innerHTML=H,V(t,f)},p:function(a,t){1&t&&b!==(b=a[1].author+"")&&y(s,b),1&t&&k!==(k=a[1].ago+"")&&y(c,k),1&t&&l!==(l=a[1].timestamp)&&D(n,"title",l),1&t&&H!==(H=a[1].html+"")&&(i.innerHTML=H)},d:function(a){a&&p(t)}}}function S(a){var t,s,r,n,c,l,o,i,f,R,S,T,w,P,q,z,$,_,B,F,G,J,K,O,Q,U,W,X,Y,Z,aa,ta,ea,sa,ra,na,ca,la,oa,ia,fa,ha,ua,va,ma,ga,da,pa,Ea,Da,Ia,Va,ya,ba,ka=a[0].name+"",Ha=a[0].html+"",xa=a[0].eventName+"",Ra=a[0].subsubtype+"",La=a[0].theme+"",Aa=a[0].ago+"";document.title=t=a[0].name+" - bradur's games";for(var ja=a[0].results.all,Ca=[],Ma=0;Ma<ja.length;Ma+=1)Ca[Ma]=C(j(a,ja,Ma));for(var Na=a[0].links,Sa=[],Ta=0;Ta<Na.length;Ta+=1)Sa[Ta]=M(A(a,Na,Ta));for(var wa=a[0].comments,Pa=[],qa=0;qa<wa.length;qa+=1)Pa[qa]=N(L(a,wa,qa));return{c:function(){s=v(),r=h("div"),n=h("div"),c=h("a"),l=u("<- back"),o=v(),i=h("div"),f=h("h1"),R=u(ka),S=v(),T=h("div"),w=v(),P=h("div"),q=h("div"),z=v(),$=h("div"),_=h("div"),B=h("h2"),F=u("Info"),G=v(),J=h("div"),K=u(xa),O=v(),Q=h("span"),U=u("("),W=u(Ra),X=u(")"),Y=v(),Z=h("span"),aa=u("("),ta=u(La),ea=u(")"),sa=v(),ra=h("div"),na=u(Aa),la=v(),oa=h("div"),ia=h("h2"),fa=u("Results"),ha=v();for(var a=0;a<Ca.length;a+=1)Ca[a].c();ua=v(),va=h("div"),ma=h("h2"),ga=u("Links"),da=v();for(var t=0;t<Sa.length;t+=1)Sa[t].c();pa=v(),Ea=h("div"),Da=h("h2"),Ia=u("Comments"),Va=v(),ya=h("div");for(var e=0;e<Pa.length;e+=1)Pa[e].c();this.h()},l:function(a){b('[data-svelte="svelte-18ofl54"]',document.head).forEach(p),s=E(a),r=m(a,"DIV",{class:!0,style:!0});var t=g(r);n=m(t,"DIV",{class:!0});var e=g(n);c=m(e,"A",{class:!0,href:!0});var h=g(c);l=d(h,"<- back"),h.forEach(p),e.forEach(p),o=E(t),i=m(t,"DIV",{class:!0});var u=g(i);f=m(u,"H1",{class:!0});var v=g(f);R=d(v,ka),v.forEach(p),S=E(u),T=m(u,"DIV",{class:!0}),g(T).forEach(p),w=E(u),P=m(u,"DIV",{class:!0});var D=g(P);q=m(D,"DIV",{class:!0,style:!0}),g(q).forEach(p),z=E(D),$=m(D,"DIV",{class:!0});var I=g($);_=m(I,"DIV",{class:!0});var V=g(_);B=m(V,"H2",{});var y=g(B);F=d(y,"Info"),y.forEach(p),G=E(V),J=m(V,"DIV",{class:!0});var k=g(J);K=d(k,xa),O=E(k),Q=m(k,"SPAN",{class:!0});var H=g(Q);U=d(H,"("),W=d(H,Ra),X=d(H,")"),H.forEach(p),Y=E(k),Z=m(k,"SPAN",{class:!0});var x=g(Z);aa=d(x,"("),ta=d(x,La),ea=d(x,")"),x.forEach(p),k.forEach(p),sa=E(V),ra=m(V,"DIV",{class:!0,title:!0});var L=g(ra);na=d(L,Aa),L.forEach(p),V.forEach(p),la=E(I),oa=m(I,"DIV",{class:!0});var A=g(oa);ia=m(A,"H2",{});var j=g(ia);fa=d(j,"Results"),j.forEach(p),ha=E(A);for(var C=0;C<Ca.length;C+=1)Ca[C].l(A);A.forEach(p),ua=E(I),va=m(I,"DIV",{class:!0});var M=g(va);ma=m(M,"H2",{});var N=g(ma);ga=d(N,"Links"),N.forEach(p),da=E(M);for(var ca=0;ca<Sa.length;ca+=1)Sa[ca].l(M);M.forEach(p),I.forEach(p),D.forEach(p),pa=E(u),Ea=m(u,"DIV",{class:!0});var ba=g(Ea);Da=m(ba,"H2",{});var Ha=g(Da);Ia=d(Ha,"Comments"),Ha.forEach(p),Va=E(ba),ya=m(ba,"DIV",{class:!0});for(var ja=g(ya),Ma=0;Ma<Pa.length;Ma+=1)Pa[Ma].l(ja);ja.forEach(p),ba.forEach(p),u.forEach(p),t.forEach(p),this.h()},h:function(){D(c,"class","nav-back svelte-fsh916"),D(c,"href","games"),D(n,"class","page-nav svelte-fsh916"),D(f,"class","game-title svelte-fsh916"),D(T,"class","game-content svelte-fsh916"),D(q,"class","game-cover-img svelte-fsh916"),k(q,"background-image","url('"+a[0].cover+"')"),D(Q,"class","game-event-type"),D(Z,"class","game-event-theme"),D(J,"class","game-event"),D(ra,"class","game-publish-date"),D(ra,"title",ca=a[0].timestamp),D(_,"class","game-meta-section svelte-fsh916"),D(oa,"class","game-meta-section svelte-fsh916"),D(va,"class","game-meta-section svelte-fsh916"),D($,"class","game-meta svelte-fsh916"),D(P,"class","game-meta-container svelte-fsh916"),D(ya,"class","game-comments-container"),D(Ea,"class","game-comments svelte-fsh916"),D(i,"class","game-container svelte-fsh916"),D(r,"class","page-container svelte-fsh916"),D(r,"style",ba=a[0].coverColors.css)},m:function(a,t){I(a,s,t),I(a,r,t),V(r,n),V(n,c),V(c,l),V(r,o),V(r,i),V(i,f),V(f,R),V(i,S),V(i,T),T.innerHTML=Ha,V(i,w),V(i,P),V(P,q),V(P,z),V(P,$),V($,_),V(_,B),V(B,F),V(_,G),V(_,J),V(J,K),V(J,O),V(J,Q),V(Q,U),V(Q,W),V(Q,X),V(J,Y),V(J,Z),V(Z,aa),V(Z,ta),V(Z,ea),V(_,sa),V(_,ra),V(ra,na),V($,la),V($,oa),V(oa,ia),V(ia,fa),V(oa,ha);for(var e=0;e<Ca.length;e+=1)Ca[e].m(oa,null);V($,ua),V($,va),V(va,ma),V(ma,ga),V(va,da);for(var h=0;h<Sa.length;h+=1)Sa[h].m(va,null);V(i,pa),V(i,Ea),V(Ea,Da),V(Da,Ia),V(Ea,Va),V(Ea,ya);for(var u=0;u<Pa.length;u+=1)Pa[u].m(ya,null)},p:function(a,s){var n=e(s,1)[0];if(1&n&&t!==(t=a[0].name+" - bradur's games")&&(document.title=t),1&n&&ka!==(ka=a[0].name+"")&&y(R,ka),1&n&&Ha!==(Ha=a[0].html+"")&&(T.innerHTML=Ha),1&n&&k(q,"background-image","url('"+a[0].cover+"')"),1&n&&xa!==(xa=a[0].eventName+"")&&y(K,xa),1&n&&Ra!==(Ra=a[0].subsubtype+"")&&y(W,Ra),1&n&&La!==(La=a[0].theme+"")&&y(ta,La),1&n&&Aa!==(Aa=a[0].ago+"")&&y(na,Aa),1&n&&ca!==(ca=a[0].timestamp)&&D(ra,"title",ca),1&n){var c;for(ja=a[0].results.all,c=0;c<ja.length;c+=1){var l=j(a,ja,c);Ca[c]?Ca[c].p(l,n):(Ca[c]=C(l),Ca[c].c(),Ca[c].m(oa,null))}for(;c<Ca.length;c+=1)Ca[c].d(1);Ca.length=ja.length}if(1&n){var o;for(Na=a[0].links,o=0;o<Na.length;o+=1){var i=A(a,Na,o);Sa[o]?Sa[o].p(i,n):(Sa[o]=M(i),Sa[o].c(),Sa[o].m(va,null))}for(;o<Sa.length;o+=1)Sa[o].d(1);Sa.length=Na.length}if(1&n){var f;for(wa=a[0].comments,f=0;f<wa.length;f+=1){var h=L(a,wa,f);Pa[f]?Pa[f].p(h,n):(Pa[f]=N(h),Pa[f].c(),Pa[f].m(ya,null))}for(;f<Pa.length;f+=1)Pa[f].d(1);Pa.length=wa.length}1&n&&ba!==(ba=a[0].coverColors.css)&&D(r,"style",ba)},i:H,o:H,d:function(a){a&&p(s),a&&p(r),x(Ca,a),x(Sa,a),x(Pa,a)}}}function T(a){return w.apply(this,arguments)}function w(){return(w=a(t.mark((function a(s){var r,n,c,l,o,i,f,h;return t.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=s.params,s.query,n=e(r.slug,3),c=n[0],l=n[1],o=n[2],i="games/".concat(c,"/").concat(l,"/").concat(o,".json"),a.next=5,this.fetch(i);case 5:return f=a.sent,a.next=8,f.json();case 8:if(h=a.sent,200!==f.status){a.next=13;break}return a.abrupt("return",{game:h});case 13:this.error(f.status,h.message);case 14:case"end":return a.stop()}}),a,this)})))).apply(this,arguments)}function P(a,t,e){var s=t.game;return a.$set=function(a){"game"in a&&e(0,s=a.game)},[s]}var q=function(a){s(e,f);var t=R(e);function e(a){var s;return c(this,e),s=t.call(this),l(i(s),a,P,S,o,{game:0}),s}return e}();export default q;export{T as preload};