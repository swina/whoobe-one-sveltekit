import{S as N,i as q,s as K,e as y,c as b,b as c,g as u,F as p,d as r,H as O,l as _,G as A,k as v,I as L,m as w,J as j,K as B,w as F,x as P,a as C,y as S,L as G,M as J,N as T,q as E,o as H,B as z}from"../chunks/vendor-9e9ec985.js";import{w as k}from"../chunks/whoobe-0b5ab813.js";function D(f){let e,a;return{c(){e=y("link"),this.h()},l(s){e=b(s,"LINK",{rel:!0,href:!0}),this.h()},h(){c(e,"rel","stylesheet"),c(e,"href",a="https://fonts.googleapis.com/css?family="+f[0].fonts.join("|"))},m(s,t){u(s,e,t)},p,d(s){s&&r(e)}}}function Q(f){let e,a=f[0].html+"",s;return{c(){e=new O,s=_(),this.h()},l(t){e=A(t),s=_(),this.h()},h(){e.a=s},m(t,o){e.m(a,t,o),u(t,s,o)},p,d(t){t&&r(s),t&&e.d()}}}function R(f){let e,a,s,t=f[0]&&f[0].fonts.length&&D(f),o=f[0]&&Q(f);return{c(){t&&t.c(),e=_(),a=v(),o&&o.c(),s=_()},l(l){const i=L('[data-svelte="svelte-1rcx7ec"]',document.head);t&&t.l(i),e=_(),i.forEach(r),a=w(l),o&&o.l(l),s=_()},m(l,i){t&&t.m(document.head,null),j(document.head,e),u(l,a,i),o&&o.m(l,i),u(l,s,i)},p(l,[i]){l[0]&&l[0].fonts.length&&t.p(l,i),l[0]&&o.p(l,i)},i:p,o:p,d(l){t&&t.d(l),r(e),l&&r(a),o&&o.d(l),l&&r(s)}}}function U(f){return[k.hasOwnProperty("header")?k.header:null]}class V extends N{constructor(e){super();q(this,e,U,R,K,{})}}function W(f){let e,a;return{c(){e=y("link"),this.h()},l(s){e=b(s,"LINK",{rel:!0,href:!0}),this.h()},h(){c(e,"rel","stylesheet"),c(e,"href",a="https://fonts.googleapis.com/css?family="+f[0].fonts.join("|"))},m(s,t){u(s,e,t)},p,d(s){s&&r(e)}}}function X(f){let e,a=f[0].html+"",s;return{c(){e=new O,s=_(),this.h()},l(t){e=A(t),s=_(),this.h()},h(){e.a=s},m(t,o){e.m(a,t,o),u(t,s,o)},p,d(t){t&&r(s),t&&e.d()}}}function Y(f){let e,a,s,t=f[0]&&f[0].fonts.length&&W(f),o=f[0]&&X(f);return{c(){t&&t.c(),e=_(),a=v(),o&&o.c(),s=_()},l(l){const i=L('[data-svelte="svelte-fzjqyi"]',document.head);t&&t.l(i),e=_(),i.forEach(r),a=w(l),o&&o.l(l),s=_()},m(l,i){t&&t.m(document.head,null),j(document.head,e),u(l,a,i),o&&o.m(l,i),u(l,s,i)},p(l,[i]){l[0]&&l[0].fonts.length&&t.p(l,i),l[0]&&o.p(l,i)},i:p,o:p,d(l){t&&t.d(l),r(e),l&&r(a),o&&o.d(l),l&&r(s)}}}function Z(f){return[k.hasOwnProperty("footer")?k.footer:null]}class x extends N{constructor(e){super();q(this,e,Z,Y,K,{})}}function ee(f){let e,a,s,t,o,l,i,g,d,$;o=new V({});const I=f[2].default,h=B(I,f,f[1],null);return d=new x({}),{c(){e=y("link"),a=y("link"),t=v(),F(o.$$.fragment),l=v(),i=y("main"),h&&h.c(),g=v(),F(d.$$.fragment),this.h()},l(n){const m=L('[data-svelte="svelte-1l2f6q5"]',document.head);e=b(m,"LINK",{rel:!0,href:!0}),a=b(m,"LINK",{rel:!0,href:!0}),m.forEach(r),t=w(n),P(o.$$.fragment,n),l=w(n),i=b(n,"MAIN",{});var M=C(i);h&&h.l(M),M.forEach(r),g=w(n),P(d.$$.fragment,n),this.h()},h(){c(e,"rel","stylesheet"),c(e,"href","https://fonts.googleapis.com/icon?family=Material+Icons"),c(a,"rel","stylesheet"),c(a,"href",s="https://fonts.googleapis.com/css?family="+f[0].join("|"))},m(n,m){j(document.head,e),j(document.head,a),u(n,t,m),S(o,n,m),u(n,l,m),u(n,i,m),h&&h.m(i,null),u(n,g,m),S(d,n,m),$=!0},p(n,[m]){(!$||m&1&&s!==(s="https://fonts.googleapis.com/css?family="+n[0].join("|")))&&c(a,"href",s),h&&h.p&&(!$||m&2)&&G(h,I,n,n[1],$?T(I,n[1],m,null):J(n[1]),null)},i(n){$||(E(o.$$.fragment,n),E(h,n),E(d.$$.fragment,n),$=!0)},o(n){H(o.$$.fragment,n),H(h,n),H(d.$$.fragment,n),$=!1},d(n){r(e),r(a),n&&r(t),z(o,n),n&&r(l),n&&r(i),h&&h.d(n),n&&r(g),z(d,n)}}}function te(f,e,a){let{$$slots:s={},$$scope:t}=e,o=Object.keys(k.pages).map(l=>[...k.pages[l].fonts]);return o=Array.prototype.concat.apply([],o),f.$$set=l=>{"$$scope"in l&&a(1,t=l.$$scope)},[o,t,s]}class oe extends N{constructor(e){super();q(this,e,te,ee,K,{})}}export{oe as default};