import{S as h,i as f,s as p,k as _,H as g,l as r,I as v,d as i,m as w,G as y,g as m,F as c}from"../chunks/vendor-663b5ed2.js";import{w as d}from"../chunks/whoobe-bc21076d.js";function b(a){let s,o,t,l=d.pages[a[0]].html+"",u;return document.title=s=a[0],{c(){o=_(),t=new g,u=r(),this.h()},l(e){v('[data-svelte="svelte-15l8zy"]',document.head).forEach(i),o=w(e),t=y(e),u=r(),this.h()},h(){t.a=u},m(e,n){m(e,o,n),t.m(l,e,n),m(e,u,n)},p(e,[n]){n&1&&s!==(s=e[0])&&(document.title=s),n&1&&l!==(l=d.pages[e[0]].html+"")&&t.p(l)},i:c,o:c,d(e){e&&i(o),e&&i(u),e&&t.d()}}}const q=!0;async function S(a){return{props:{slug:a.params.slug}}}function k(a,s,o){let{slug:t}=s;return a.$$set=l=>{"slug"in l&&o(0,t=l.slug)},[t]}class z extends h{constructor(s){super();f(this,s,k,b,p,{slug:0})}}export{z as default,S as load,q as prerender};