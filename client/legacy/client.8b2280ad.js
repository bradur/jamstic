function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function r(t,r){if(t){if("string"==typeof t)return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?e(t,r):void 0}}function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=t[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!e||r.length!==e);n=!0);}catch(t){o=!0,a=t}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}}(t,e)||r(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var o,a,i=(function(e){var r=function(e){var r,n=Object.prototype,o=n.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof m?e:m,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw a;return k()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=S(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=f(t,e,r);if("normal"===u.type){if(n=r.done?v:p,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var l="suspendedStart",p="suspendedYield",h="executing",v="completed",d={};function m(){}function g(){}function y(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,$=x&&x(x(P([])));$&&$!==n&&o.call($,i)&&(b=$);var w=y.prototype=m.prototype=Object.create(b);function _(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function E(e,r){var n;this._invoke=function(a,i){function c(){return new r(function(n,c){!function n(a,i,c,u){var s=f(e[a],e,i);if("throw"!==s.type){var l=s.arg,p=l.value;return p&&"object"===t(p)&&o.call(p,"__await")?r.resolve(p.__await).then(function(t){n("next",t,c,u)},function(t){n("throw",t,c,u)}):r.resolve(p).then(function(t){l.value=t,c(l)},function(t){return n("throw",t,c,u)})}u(s.arg)}(a,i,n,c)})}return n=n?n.then(c,c):c()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,d):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function R(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:k}}function k(){return{value:r,done:!0}}return g.prototype=w.constructor=y,y.constructor=g,y[u]=g.displayName="GeneratorFunction",e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(w),t},e.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[c]=function(){return this},e.AsyncIterator=E,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new E(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},_(w),w[u]="Generator",w[i]=function(){return this},w.toString=function(){return"[object Generator]"},e.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(R),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),s=o.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),R(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;R(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),d}},e}(e.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}}(o={exports:{}},o.exports),o.exports);function c(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function u(t){return function(){var e=this,r=arguments;return new Promise(function(n,o){var a=t.apply(e,r);function i(t){c(a,n,o,i,u,"next",t)}function u(t){c(a,n,o,i,u,"throw",t)}i(void 0)})}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(e,r){return!r||"object"!==t(r)&&"function"!=typeof r?f(e):r}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}function v(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||r(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(){}function y(t,e){for(var r in e)t[r]=e[r];return t}function b(t){return t()}function x(){return Object.create(null)}function $(t){t.forEach(b)}function w(t){return"function"==typeof t}function _(e,r){return e!=e?r==r:e!==r||e&&"object"===t(e)||"function"==typeof e}function E(t,e,r,n){return t[1]&&n?y(r.ctx.slice(),t[1](n(e))):r.ctx}function S(t,e){t.appendChild(e)}function L(t,e,r){t.insertBefore(e,r||null)}function R(t){t.parentNode.removeChild(t)}function j(t,e){for(var r=0;r<t.length;r+=1)t[r]&&t[r].d(e)}function P(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function A(){return k(" ")}function O(){return k("")}function N(t,e,r){null==r?t.removeAttribute(e):t.getAttribute(e)!==r&&t.setAttribute(e,r)}function C(t){return Array.from(t.childNodes)}function I(t,e,r,n){for(var o=0;o<t.length;o+=1){var a=t[o];if(a.nodeName===e){for(var i=0;i<a.attributes.length;){var c=a.attributes[i];r[c.name]?i++:a.removeAttribute(c.name)}return t.splice(o,1)[0]}}return n?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):P(e)}function q(t,e){for(var r=0;r<t.length;r+=1){var n=t[r];if(3===n.nodeType)return n.data=""+e,t.splice(r,1)[0]}return k(e)}function D(t){return q(t," ")}function U(t,e){e=""+e,t.data!==e&&(t.data=e)}function T(t,e,r,n){t.style.setProperty(e,r,n?"important":"")}function G(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;return Array.from(e.querySelectorAll(t))}function F(t){a=t}function H(){if(!a)throw new Error("Function called outside component initialization");return a}function B(t){H().$$.on_mount.push(t)}var J=[],M=[],V=[],K=[],Y=Promise.resolve(),z=!1;function W(t){V.push(t)}var X=!1,Q=new Set;function Z(){if(!X){X=!0;do{for(var t=0;t<J.length;t+=1){var e=J[t];F(e),tt(e.$$)}for(J.length=0;M.length;)M.pop()();for(var r=0;r<V.length;r+=1){var n=V[r];Q.has(n)||(Q.add(n),n())}V.length=0}while(J.length);for(;K.length;)K.pop()();z=!1,X=!1,Q.clear()}}function tt(t){if(null!==t.fragment){t.update(),$(t.before_update);var e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}var et,rt=new Set;function nt(){et={r:0,c:[],p:et}}function ot(){et.r||$(et.c),et=et.p}function at(t,e){t&&t.i&&(rt.delete(t),t.i(e))}function it(t,e,r,n){if(t&&t.o){if(rt.has(t))return;rt.add(t),et.c.push(function(){rt.delete(t),n&&(r&&t.d(1),n())}),t.o(e)}}function ct(t,e){for(var r={},n={},o={$$scope:1},a=t.length;a--;){var i=t[a],c=e[a];if(c){for(var u in i)u in c||(n[u]=1);for(var s in c)o[s]||(r[s]=c[s],o[s]=1);t[a]=c}else for(var f in i)o[f]=1}for(var l in n)l in r||(r[l]=void 0);return r}function ut(e){return"object"===t(e)&&null!==e?e:{}}function st(t){t&&t.c()}function ft(t,e){t&&t.l(e)}function lt(t,e,r){var n=t.$$,o=n.fragment,a=n.on_mount,i=n.on_destroy,c=n.after_update;o&&o.m(e,r),W(function(){var e=a.map(b).filter(w);i?i.push.apply(i,v(e)):$(e),t.$$.on_mount=[]}),c.forEach(W)}function pt(t,e){var r=t.$$;null!==r.fragment&&($(r.on_destroy),r.fragment&&r.fragment.d(e),r.on_destroy=r.fragment=null,r.ctx=[])}function ht(t,e){-1===t.$$.dirty[0]&&(J.push(t),z||(z=!0,Y.then(Z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,r,n,o,i){var c=arguments.length>6&&void 0!==arguments[6]?arguments[6]:[-1],u=a;F(t);var s=e.props||{},f=t.$$={fragment:null,ctx:null,props:i,update:g,not_equal:o,bound:x(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:x(),dirty:c},l=!1;if(f.ctx=r?r(t,s,function(e,r){var n=!(arguments.length<=2)&&arguments.length-2?arguments.length<=2?void 0:arguments[2]:r;return f.ctx&&o(f.ctx[e],f.ctx[e]=n)&&(f.bound[e]&&f.bound[e](n),l&&ht(t,e)),r}):[],f.update(),l=!0,$(f.before_update),f.fragment=!!n&&n(f.ctx),e.target){if(e.hydrate){var p=C(e.target);f.fragment&&f.fragment.l(p),p.forEach(R)}else f.fragment&&f.fragment.c();e.intro&&at(t.$$.fragment),lt(t,e.target,e.anchor),Z()}F(u)}var dt=function(){function t(){d(this,t)}var e,r,n;return e=t,(r=[{key:"$destroy",value:function(){pt(this,1),this.$destroy=g}},{key:"$on",value:function(t,e){var r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),function(){var t=r.indexOf(e);-1!==t&&r.splice(t,1)}}},{key:"$set",value:function(){}}])&&m(e.prototype,r),n&&m(e,n),t}(),mt=[];function gt(t){var e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,n=[];function o(r){if(_(t,r)&&(t=r,e)){for(var o=!mt.length,a=0;a<n.length;a+=1){var i=n[a];i[1](),mt.push(i,t)}if(o){for(var c=0;c<mt.length;c+=2)mt[c][0](mt[c+1]);mt.length=0}}}return{set:o,update:function(e){o(e(t))},subscribe:function(a){var i=[a,arguments.length>1&&void 0!==arguments[1]?arguments[1]:g];return n.push(i),1===n.length&&(e=r(o)||g),a(t),function(){var t=n.indexOf(i);-1!==t&&n.splice(t,1),0===n.length&&(e(),e=null)}}}}var yt={},bt=function(){return{}};function xt(t){return function(){var e,r=s(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function $t(t){var e,r,o,a,i,c,u,s,f,l,p;return{c:function(){e=P("nav"),r=P("ul"),o=P("li"),a=P("a"),i=k("blog"),u=A(),s=P("li"),f=P("a"),l=k("games"),this.h()},l:function(t){var n=C(e=I(t,"NAV",{class:!0})),c=C(r=I(n,"UL",{class:!0})),p=C(o=I(c,"LI",{class:!0})),h=C(a=I(p,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));i=q(h,"blog"),h.forEach(R),p.forEach(R),u=D(c);var v=C(s=I(c,"LI",{class:!0})),d=C(f=I(v,"A",{rel:!0,"aria-current":!0,href:!0,class:!0}));l=q(d,"games"),d.forEach(R),v.forEach(R),c.forEach(R),n.forEach(R),this.h()},h:function(){N(a,"rel","prefetch"),N(a,"aria-current",c="blog"===t[0]?"page":void 0),N(a,"href","blog"),N(a,"class","svelte-xpuord"),N(o,"class","svelte-xpuord"),N(f,"rel","prefetch"),N(f,"aria-current",p="games"===t[0]?"page":void 0),N(f,"href","games"),N(f,"class","svelte-xpuord"),N(s,"class","svelte-xpuord"),N(r,"class","svelte-xpuord"),N(e,"class","svelte-xpuord")},m:function(t,n){L(t,e,n),S(e,r),S(r,o),S(o,a),S(a,i),S(r,u),S(r,s),S(s,f),S(f,l)},p:function(t,e){var r=n(e,1)[0];1&r&&c!==(c="blog"===t[0]?"page":void 0)&&N(a,"aria-current",c),1&r&&p!==(p="games"===t[0]?"page":void 0)&&N(f,"aria-current",p)},i:g,o:g,d:function(t){t&&R(e)}}}function wt(t,e,r){var n=e.segment;return t.$set=function(t){"segment"in t&&r(0,n=t.segment)},[n]}var _t=function(t){h(r,dt);var e=xt(r);function r(t){var n;return d(this,r),vt(f(n=e.call(this)),t,wt,$t,_,{segment:0}),n}return r}();function Et(t){return function(){var e,r=s(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function St(e){var r,o,a,i=new _t({props:{segment:e[0]}}),c=e[2].default,u=function(t,e,r,n){if(t){var o=E(t,e,r,n);return t[0](o)}}(c,e,e[1],null);return{c:function(){st(i.$$.fragment),r=A(),o=P("main"),u&&u.c(),this.h()},l:function(t){ft(i.$$.fragment,t),r=D(t);var e=C(o=I(t,"MAIN",{class:!0}));u&&u.l(e),e.forEach(R),this.h()},h:function(){N(o,"class","svelte-12o83v3")},m:function(t,e){lt(i,t,e),L(t,r,e),L(t,o,e),u&&u.m(o,null),a=!0},p:function(e,r){var o=n(r,1)[0],a={};1&o&&(a.segment=e[0]),i.$set(a),u&&u.p&&2&o&&u.p(E(c,e,e[1],null),function(e,r,n,o){if(e[2]&&o){var a=e[2](o(n));if(void 0===r.dirty)return a;if("object"===t(a)){for(var i=[],c=Math.max(r.dirty.length,a.length),u=0;u<c;u+=1)i[u]=r.dirty[u]|a[u];return i}return r.dirty|a}return r.dirty}(c,e[1],o,null))},i:function(t){a||(at(i.$$.fragment,t),at(u,t),a=!0)},o:function(t){it(i.$$.fragment,t),it(u,t),a=!1},d:function(t){pt(i,t),t&&R(r),t&&R(o),u&&u.d(t)}}}function Lt(t,e,r){var n=e.segment,o=e.$$slots,a=void 0===o?{}:o,i=e.$$scope;return t.$set=function(t){"segment"in t&&r(0,n=t.segment),"$$scope"in t&&r(1,i=t.$$scope)},[n,i,a]}var Rt=function(t){h(r,dt);var e=Et(r);function r(t){var n;return d(this,r),vt(f(n=e.call(this)),t,Lt,St,_,{segment:0}),n}return r}();function jt(t){return function(){var e,r=s(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function Pt(t){var e,r,n=t[1].stack+"";return{c:function(){e=P("pre"),r=k(n)},l:function(t){var o=C(e=I(t,"PRE",{}));r=q(o,n),o.forEach(R)},m:function(t,n){L(t,e,n),S(e,r)},p:function(t,e){2&e&&n!==(n=t[1].stack+"")&&U(r,n)},d:function(t){t&&R(e)}}}function kt(t){var e,r,o,a,i,c,u,s,f,l=t[1].message+"";document.title=e=t[0];var p=t[2]&&t[1].stack&&Pt(t);return{c:function(){r=A(),o=P("h1"),a=k(t[0]),i=A(),c=P("p"),u=k(l),s=A(),p&&p.c(),f=O(),this.h()},l:function(e){G('[data-svelte="svelte-4sldlf"]',document.head).forEach(R),r=D(e);var n=C(o=I(e,"H1",{class:!0}));a=q(n,t[0]),n.forEach(R),i=D(e);var h=C(c=I(e,"P",{class:!0}));u=q(h,l),h.forEach(R),s=D(e),p&&p.l(e),f=O(),this.h()},h:function(){N(o,"class","svelte-1uosf9p"),N(c,"class","svelte-1uosf9p")},m:function(t,e){L(t,r,e),L(t,o,e),S(o,a),L(t,i,e),L(t,c,e),S(c,u),L(t,s,e),p&&p.m(t,e),L(t,f,e)},p:function(t,r){var o=n(r,1)[0];1&o&&e!==(e=t[0])&&(document.title=e),1&o&&U(a,t[0]),2&o&&l!==(l=t[1].message+"")&&U(u,l),t[2]&&t[1].stack?p?p.p(t,o):((p=Pt(t)).c(),p.m(f.parentNode,f)):p&&(p.d(1),p=null)},i:g,o:g,d:function(t){t&&R(r),t&&R(o),t&&R(i),t&&R(c),t&&R(s),p&&p.d(t),t&&R(f)}}}function At(t,e,r){var n=e.status,o=e.error;return t.$set=function(t){"status"in t&&r(0,n=t.status),"error"in t&&r(1,o=t.error)},[n,o,!1]}var Ot=function(t){h(r,dt);var e=jt(r);function r(t){var n;return d(this,r),vt(f(n=e.call(this)),t,At,kt,_,{status:0,error:1}),n}return r}();function Nt(t){return function(){var e,r=s(t);if(function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()){var n=s(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function Ct(t){var e,r,n=[t[4].props],o=t[4].component;function a(t){for(var e={},r=0;r<n.length;r+=1)e=y(e,n[r]);return{props:e}}if(o)var i=new o(a());return{c:function(){i&&st(i.$$.fragment),e=O()},l:function(t){i&&ft(i.$$.fragment,t),e=O()},m:function(t,n){i&&lt(i,t,n),L(t,e,n),r=!0},p:function(t,r){var c=16&r?ct(n,[ut(t[4].props)]):{};if(o!==(o=t[4].component)){if(i){nt();var u=i;it(u.$$.fragment,1,0,function(){pt(u,1)}),ot()}o?(st((i=new o(a())).$$.fragment),at(i.$$.fragment,1),lt(i,e.parentNode,e)):i=null}else o&&i.$set(c)},i:function(t){r||(i&&at(i.$$.fragment,t),r=!0)},o:function(t){i&&it(i.$$.fragment,t),r=!1},d:function(t){t&&R(e),i&&pt(i,t)}}}function It(t){var e,r=new Ot({props:{error:t[0],status:t[1]}});return{c:function(){st(r.$$.fragment)},l:function(t){ft(r.$$.fragment,t)},m:function(t,n){lt(r,t,n),e=!0},p:function(t,e){var n={};1&e&&(n.error=t[0]),2&e&&(n.status=t[1]),r.$set(n)},i:function(t){e||(at(r.$$.fragment,t),e=!0)},o:function(t){it(r.$$.fragment,t),e=!1},d:function(t){pt(r,t)}}}function qt(t){var e,r,n,o,a=[It,Ct],i=[];function c(t,e){return t[0]?0:1}return e=c(t),r=i[e]=a[e](t),{c:function(){r.c(),n=O()},l:function(t){r.l(t),n=O()},m:function(t,r){i[e].m(t,r),L(t,n,r),o=!0},p:function(t,o){var u=e;(e=c(t))===u?i[e].p(t,o):(nt(),it(i[u],1,1,function(){i[u]=null}),ot(),(r=i[e])||(r=i[e]=a[e](t)).c(),at(r,1),r.m(n.parentNode,n))},i:function(t){o||(at(r),o=!0)},o:function(t){it(r),o=!1},d:function(t){i[e].d(t),t&&R(n)}}}function Dt(t){for(var e,r=[{segment:t[2][0]},t[3].props],o={$$slots:{default:[qt]},$$scope:{ctx:t}},a=0;a<r.length;a+=1)o=y(o,r[a]);var i=new Rt({props:o});return{c:function(){st(i.$$.fragment)},l:function(t){ft(i.$$.fragment,t)},m:function(t,r){lt(i,t,r),e=!0},p:function(t,e){var o=n(e,1)[0],a=12&o?ct(r,[4&o&&{segment:t[2][0]},8&o&&ut(t[3].props)]):{};83&o&&(a.$$scope={dirty:o,ctx:t}),i.$set(a)},i:function(t){e||(at(i.$$.fragment,t),e=!0)},o:function(t){it(i.$$.fragment,t),e=!1},d:function(t){pt(i,t)}}}function Ut(t,e,r){var n,o,a=e.stores,i=e.error,c=e.status,u=e.segments,s=e.level0,f=e.level1,l=void 0===f?null:f;return n=yt,o=a,H().$$.context.set(n,o),t.$set=function(t){"stores"in t&&r(5,a=t.stores),"error"in t&&r(0,i=t.error),"status"in t&&r(1,c=t.status),"segments"in t&&r(2,u=t.segments),"level0"in t&&r(3,s=t.level0),"level1"in t&&r(4,l=t.level1)},[i,c,u,s,l,a]}var Tt,Gt=function(t){h(r,dt);var e=Nt(r);function r(t){var n;return d(this,r),vt(f(n=e.call(this)),t,Ut,Dt,_,{stores:5,error:0,status:1,segments:2,level0:3,level1:4}),n}return r}(),Ft=[/^\/games.json$/,/^\/games\/(.+).json$/,/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],Ht=[{js:function(){return import("./index.ce867302.js")},css:["legacy/client.8b2280ad.css"]},{js:function(){return import("./index.475534ec.js")},css:["legacy/index.475534ec.css","legacy/client.8b2280ad.css"]},{js:function(){return import("./[...slug].113fc10b.js")},css:["legacy/[...slug].113fc10b.css","legacy/client.8b2280ad.css"]},{js:function(){return import("./index.f5767096.js")},css:["legacy/index.f5767096.css","legacy/client.8b2280ad.css"]},{js:function(){return import("./[slug].e904830a.js")},css:["legacy/[slug].e904830a.css","legacy/client.8b2280ad.css"]}],Bt=(Tt=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/games\/?$/,parts:[{i:1}]},{pattern:/^\/games\/(.+)\/?$/,parts:[null,{i:2,params:function(t){return{slug:Tt(t[1]).split("/")}}}]},{pattern:/^\/blog\/?$/,parts:[{i:3}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:4,params:function(t){return{slug:Tt(t[1])}}}]}]);function Jt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{replaceState:!1},r=se(new URL(t,document.baseURI));return r?(ie[e.replaceState?"replaceState":"pushState"]({id:ne},"",t),le(r,null).then(function(){})):(location.href=t,new Promise(function(t){}))}var Mt,Vt,Kt,Yt,zt,Wt="undefined"!=typeof __SAPPER__&&__SAPPER__,Xt=!1,Qt=[],Zt="{}",te={page:gt({}),preloading:gt(null),session:gt(Wt&&Wt.session)};te.session.subscribe(function(){var t=u(i.mark(function t(e){var r,n,o,a,c,u;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(Yt=e,Xt){t.next=3;break}return t.abrupt("return");case 3:return zt=!0,r=se(new URL(location.href)),n=Vt={},t.next=8,me(r);case 8:if(o=t.sent,a=o.redirect,c=o.props,u=o.branch,n===Vt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,he(a,u,c,r.page);case 16:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}());var ee,re=null;var ne,oe=1;var ae,ie="undefined"!=typeof history?history:{pushState:function(t,e,r){},replaceState:function(t,e,r){},scrollRestoration:""},ce={};function ue(e){var r=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(function(e){var o=n(/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," "))),3),a=o[1],i=o[2],c=void 0===i?"":i;"string"==typeof r[a]&&(r[a]=[r[a]]),"object"===t(r[a])?r[a].push(c):r[a]=c}),r}function se(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Wt.baseUrl))return null;var e=t.pathname.slice(Wt.baseUrl.length);if(""===e&&(e="/"),!Ft.some(function(t){return t.test(e)}))for(var r=0;r<Bt.length;r+=1){var n=Bt[r],o=n.pattern.exec(e);if(o){var a=ue(t.search),i=n.parts[n.parts.length-1],c=i.params?i.params(o):{},u={host:location.host,path:e,query:a,params:c};return{href:t.href,route:n,match:o,page:u}}}}function fe(){return{x:pageXOffset,y:pageYOffset}}function le(t,e,r,n){return pe.apply(this,arguments)}function pe(){return(pe=u(i.mark(function t(e,r,n,o){var a,c,u,s,f,l,p,h,v;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r?ne=r:(a=fe(),ce[ne]=a,r=ne=++oe,ce[ne]=n?a:{x:0,y:0}),ne=r,Mt&&te.preloading.set(!0),c=re&&re.href===e.href?re.promise:me(e),re=null,u=Vt={},t.next=8,c;case 8:if(s=t.sent,f=s.redirect,l=s.props,p=s.branch,u===Vt){t.next=14;break}return t.abrupt("return");case 14:return t.next=16,he(f,p,l,e.page);case 16:document.activeElement&&document.activeElement.blur(),n||(h=ce[r],o&&(v=document.getElementById(o.slice(1)))&&(h={x:0,y:v.getBoundingClientRect().top}),ce[ne]=h,h&&scrollTo(h.x,h.y));case 18:case"end":return t.stop()}},t)}))).apply(this,arguments)}function he(t,e,r,n){return ve.apply(this,arguments)}function ve(){return(ve=u(i.mark(function t(e,r,n,o){var a,c;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=2;break}return t.abrupt("return",Jt(e.location,{replaceState:!0}));case 2:if(te.page.set(o),te.preloading.set(!1),!Mt){t.next=8;break}Mt.$set(n),t.next=17;break;case 8:return n.stores={page:{subscribe:te.page.subscribe},preloading:{subscribe:te.preloading.subscribe},session:te.session},t.next=11,Kt;case 11:if(t.t0=t.sent,n.level0={props:t.t0},a=document.querySelector("#sapper-head-start"),c=document.querySelector("#sapper-head-end"),a&&c){for(;a.nextSibling!==c;)xe(a.nextSibling);xe(a),xe(c)}Mt=new Gt({target:ee,props:n,hydrate:!0});case 17:Qt=r,Zt=JSON.stringify(o.query),Xt=!0,zt=!1;case 21:case"end":return t.stop()}},t)}))).apply(this,arguments)}function de(t,e,r,n){if(n!==Zt)return!0;var o=Qt[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(r.slice(1,t+2)))||void 0))}function me(t){return ge.apply(this,arguments)}function ge(){return(ge=u(i.mark(function t(e){var r,n,o,a,c,s,f,l,p,h,v;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.page,o=n.path.split("/").filter(Boolean),a=null,c={error:null,status:200,segments:[o[0]]},s={fetch:function(t){function e(e,r){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(t,e){return fetch(t,e)}),redirect:function(t,e){if(a&&(a.statusCode!==t||a.location!==e))throw new Error("Conflicting redirects");a={statusCode:t,location:e}},error:function(t,e){c.error="string"==typeof e?new Error(e):e,c.status=t}},Kt||(Kt=Wt.preloaded[0]||bt.call(s,{host:n.host,path:n.path,query:n.query,params:{}},Yt)),l=1,t.prev=7,p=JSON.stringify(n.query),h=r.pattern.exec(n.path),v=!1,t.next=13,Promise.all(r.parts.map(function(){var t=u(i.mark(function t(r,a){var u,f,d,m,g,y;return i.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(u=o[a],de(a,u,h,p)&&(v=!0),c.segments[l]=o[a+1],r){t.next=5;break}return t.abrupt("return",{segment:u});case 5:if(f=l++,zt||v||!Qt[a]||Qt[a].part!==r.i){t.next=8;break}return t.abrupt("return",Qt[a]);case 8:return v=!1,t.next=11,be(Ht[r.i]);case 11:if(d=t.sent,m=d.default,g=d.preload,!Xt&&Wt.preloaded[a+1]){t.next=25;break}if(!g){t.next=21;break}return t.next=18,g.call(s,{host:n.host,path:n.path,query:n.query,params:r.params?r.params(e.match):{}},Yt);case 18:t.t0=t.sent,t.next=22;break;case 21:t.t0={};case 22:y=t.t0,t.next=26;break;case 25:y=Wt.preloaded[a+1];case 26:return t.abrupt("return",c["level".concat(f)]={component:m,props:y,segment:u,match:h,part:r.i});case 27:case"end":return t.stop()}},t)}));return function(e,r){return t.apply(this,arguments)}}()));case 13:f=t.sent,t.next=21;break;case 16:t.prev=16,t.t0=t.catch(7),c.error=t.t0,c.status=500,f=[];case 21:return t.abrupt("return",{redirect:a,props:c,branch:f});case 22:case"end":return t.stop()}},t,null,[[7,16]])}))).apply(this,arguments)}function ye(t){var e="client/".concat(t);if(!document.querySelector('link[href="'.concat(e,'"]')))return new Promise(function(t,r){var n=document.createElement("link");n.rel="stylesheet",n.href=e,n.onload=function(){return t()},n.onerror=r,document.head.appendChild(n)})}function be(t){var e="string"==typeof t.css?[]:t.css.map(ye);return e.unshift(t.js()),Promise.all(e).then(function(t){return t[0]})}function xe(t){t.parentNode.removeChild(t)}function $e(t){var e=se(new URL(t,document.baseURI));if(e)return re&&t===re.href||function(t,e){re={href:t,promise:e}}(t,me(e)),re.promise}function we(t){clearTimeout(ae),ae=setTimeout(function(){_e(t)},20)}function _e(t){var e=Se(t.target);e&&"prefetch"===e.rel&&$e(e.href)}function Ee(e){if(1===function(t){return null===t.which?t.button:t.which}(e)&&!(e.metaKey||e.ctrlKey||e.shiftKey||e.defaultPrevented)){var r=Se(e.target);if(r&&r.href){var n="object"===t(r.href)&&"SVGAnimatedString"===r.href.constructor.name,o=String(n?r.href.baseVal:r.href);if(o!==location.href){if(!r.hasAttribute("download")&&"external"!==r.getAttribute("rel")&&(n?!r.target.baseVal:!r.target)){var a=new URL(o);if(a.pathname!==location.pathname||a.search!==location.search){var i=se(a);if(i)le(i,null,r.hasAttribute("sapper-noscroll"),a.hash),e.preventDefault(),ie.pushState({id:ne},"",a.href)}}}else location.hash||e.preventDefault()}}}function Se(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Le(t){if(ce[ne]=fe(),t.state){var e=se(new URL(location.href));e?le(e,t.state.id):location.href=location.href}else(function(t){ne=t})(oe=oe+1),ie.replaceState({id:ne},"",location.href)}!function(t){var e;"scrollRestoration"in ie&&(ie.scrollRestoration="manual"),e=t.target,ee=e,addEventListener("click",Ee),addEventListener("popstate",Le),addEventListener("touchstart",_e),addEventListener("mousemove",we),Promise.resolve().then(function(){var t=location,e=t.hash,r=t.href;ie.replaceState({id:oe},"",r);var n,o,a,i,c,u,s,f,l=new URL(location.href);if(Wt.error)return n=location,o=n.host,a=n.pathname,i=n.search,c=Wt.session,u=Wt.preloaded,s=Wt.status,f=Wt.error,Kt||(Kt=u&&u[0]),void he(null,[],{error:f,status:s,session:c,level0:{props:Kt},level1:{props:{status:s,error:f},component:Ot},segments:u},{host:o,path:a,query:ue(i),params:{}});var p=se(l);return p?le(p,oe,!0,e):void 0})}({target:document.querySelector("#sapper")});export{T as A,dt as S,h as _,d as a,f as b,A as c,R as d,P as e,D as f,I as g,C as h,vt as i,q as j,L as k,S as l,s as m,g as n,B as o,l as p,G as q,Jt as r,_ as s,k as t,u,i as v,N as w,U as x,n as y,j as z};
