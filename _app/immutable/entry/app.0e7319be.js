import{S as z,i as B,s as C,a as j,e as d,c as U,b as w,d as h,f as P,g as E,h as v,j as W,o as F,k as G,l as H,m as J,n as D,p,q as K,r as M,u as Q,v as A,t as X,w as I,x as b,y as k,z as O,A as R,B as L}from"../chunks/index.2ed5b141.js";const Y="modulepreload",Z=function(a,t){return new URL(a,t).href},T={},c=function(t,i,n){if(!i||i.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(i.map(l=>{if(l=Z(l,n),l in T)return;T[l]=!0;const e=l.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(!!n)for(let _=r.length-1;_>=0;_--){const m=r[_];if(m.href===l&&(!e||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${o}`))return;const s=document.createElement("link");if(s.rel=e?"stylesheet":Y,e||(s.as="script",s.crossOrigin=""),s.href=l,document.head.appendChild(s),e)return new Promise((_,m)=>{s.addEventListener("load",_),s.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t()).catch(l=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=l,window.dispatchEvent(e),!e.defaultPrevented)throw l})},rt={};function $(a){let t,i,n;var r=a[1][0];function l(e){return{props:{data:e[3],form:e[2]}}}return r&&(t=b(r,l(a)),a[12](t)),{c(){t&&k(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&R(t,e,o),w(e,i,o),n=!0},p(e,o){const u={};if(o&8&&(u.data=e[3]),o&4&&(u.form=e[2]),o&2&&r!==(r=e[1][0])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(t=b(r,l(e)),e[12](t),k(t.$$.fragment),E(t.$$.fragment,1),R(t,i.parentNode,i)):t=null}else r&&t.$set(u)},i(e){n||(t&&E(t.$$.fragment,e),n=!0)},o(e){t&&h(t.$$.fragment,e),n=!1},d(e){a[12](null),e&&v(i),t&&L(t,e)}}}function x(a){let t,i,n;var r=a[1][0];function l(e){return{props:{data:e[3],$$slots:{default:[tt]},$$scope:{ctx:e}}}}return r&&(t=b(r,l(a)),a[11](t)),{c(){t&&k(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&R(t,e,o),w(e,i,o),n=!0},p(e,o){const u={};if(o&8&&(u.data=e[3]),o&8215&&(u.$$scope={dirty:o,ctx:e}),o&2&&r!==(r=e[1][0])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(t=b(r,l(e)),e[11](t),k(t.$$.fragment),E(t.$$.fragment,1),R(t,i.parentNode,i)):t=null}else r&&t.$set(u)},i(e){n||(t&&E(t.$$.fragment,e),n=!0)},o(e){t&&h(t.$$.fragment,e),n=!1},d(e){a[11](null),e&&v(i),t&&L(t,e)}}}function tt(a){let t,i,n;var r=a[1][1];function l(e){return{props:{data:e[4],form:e[2]}}}return r&&(t=b(r,l(a)),a[10](t)),{c(){t&&k(t.$$.fragment),i=d()},l(e){t&&O(t.$$.fragment,e),i=d()},m(e,o){t&&R(t,e,o),w(e,i,o),n=!0},p(e,o){const u={};if(o&16&&(u.data=e[4]),o&4&&(u.form=e[2]),o&2&&r!==(r=e[1][1])){if(t){A();const s=t;h(s.$$.fragment,1,0,()=>{L(s,1)}),P()}r?(t=b(r,l(e)),e[10](t),k(t.$$.fragment),E(t.$$.fragment,1),R(t,i.parentNode,i)):t=null}else r&&t.$set(u)},i(e){n||(t&&E(t.$$.fragment,e),n=!0)},o(e){t&&h(t.$$.fragment,e),n=!1},d(e){a[10](null),e&&v(i),t&&L(t,e)}}}function V(a){let t,i=a[6]&&y(a);return{c(){t=G("div"),i&&i.c(),this.h()},l(n){t=H(n,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var r=J(t);i&&i.l(r),r.forEach(v),this.h()},h(){D(t,"id","svelte-announcer"),D(t,"aria-live","assertive"),D(t,"aria-atomic","true"),p(t,"position","absolute"),p(t,"left","0"),p(t,"top","0"),p(t,"clip","rect(0 0 0 0)"),p(t,"clip-path","inset(50%)"),p(t,"overflow","hidden"),p(t,"white-space","nowrap"),p(t,"width","1px"),p(t,"height","1px")},m(n,r){w(n,t,r),i&&i.m(t,null)},p(n,r){n[6]?i?i.p(n,r):(i=y(n),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(n){n&&v(t),i&&i.d()}}}function y(a){let t;return{c(){t=K(a[7])},l(i){t=M(i,a[7])},m(i,n){w(i,t,n)},p(i,n){n&128&&Q(t,i[7])},d(i){i&&v(t)}}}function et(a){let t,i,n,r,l;const e=[x,$],o=[];function u(_,m){return _[1][1]?0:1}t=u(a),i=o[t]=e[t](a);let s=a[5]&&V(a);return{c(){i.c(),n=j(),s&&s.c(),r=d()},l(_){i.l(_),n=U(_),s&&s.l(_),r=d()},m(_,m){o[t].m(_,m),w(_,n,m),s&&s.m(_,m),w(_,r,m),l=!0},p(_,[m]){let g=t;t=u(_),t===g?o[t].p(_,m):(A(),h(o[g],1,1,()=>{o[g]=null}),P(),i=o[t],i?i.p(_,m):(i=o[t]=e[t](_),i.c()),E(i,1),i.m(n.parentNode,n)),_[5]?s?s.p(_,m):(s=V(_),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i(_){l||(E(i),l=!0)},o(_){h(i),l=!1},d(_){o[t].d(_),_&&v(n),s&&s.d(_),_&&v(r)}}}function it(a,t,i){let{stores:n}=t,{page:r}=t,{constructors:l}=t,{components:e=[]}=t,{form:o}=t,{data_0:u=null}=t,{data_1:s=null}=t;W(n.page.notify);let _=!1,m=!1,g=null;F(()=>{const f=n.page.subscribe(()=>{_&&(i(6,m=!0),X().then(()=>{i(7,g=document.title||"untitled page")}))});return i(5,_=!0),f});function N(f){I[f?"unshift":"push"](()=>{e[1]=f,i(0,e)})}function S(f){I[f?"unshift":"push"](()=>{e[0]=f,i(0,e)})}function q(f){I[f?"unshift":"push"](()=>{e[0]=f,i(0,e)})}return a.$$set=f=>{"stores"in f&&i(8,n=f.stores),"page"in f&&i(9,r=f.page),"constructors"in f&&i(1,l=f.constructors),"components"in f&&i(0,e=f.components),"form"in f&&i(2,o=f.form),"data_0"in f&&i(3,u=f.data_0),"data_1"in f&&i(4,s=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&n.page.set(r)},[e,l,o,u,s,_,m,g,n,r,N,S,q]}class ot extends z{constructor(t){super(),B(this,t,it,et,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const st=[()=>c(()=>import("../nodes/0.9c19034e.js"),["../nodes/0.9c19034e.js","../chunks/index.2ed5b141.js","../assets/0.88b7e876.css"],import.meta.url),()=>c(()=>import("../nodes/1.169a65b7.js"),["../nodes/1.169a65b7.js","../chunks/index.2ed5b141.js","../chunks/singletons.a3eaefac.js"],import.meta.url),()=>c(()=>import("../nodes/2.beb0d615.js"),["../nodes/2.beb0d615.js","../chunks/index.2ed5b141.js"],import.meta.url),()=>c(()=>import("../nodes/3.9f965bd3.js"),["../nodes/3.9f965bd3.js","../chunks/index.2ed5b141.js","../chunks/TheTeam.2214833c.js"],import.meta.url),()=>c(()=>import("../nodes/4.7a1ed146.js"),["../nodes/4.7a1ed146.js","../chunks/index.2ed5b141.js","../chunks/TheTeam.2214833c.js"],import.meta.url),()=>c(()=>import("../nodes/5.3ea3e1fc.js"),["../nodes/5.3ea3e1fc.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/6.7c397f5d.js"),["../nodes/6.7c397f5d.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js","../chunks/PersonProjects.71c92f44.js"],import.meta.url),()=>c(()=>import("../nodes/7.7283c823.js"),["../nodes/7.7283c823.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/8.2356de18.js"),["../nodes/8.2356de18.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js","../chunks/PersonProjects.71c92f44.js"],import.meta.url),()=>c(()=>import("../nodes/9.29750f46.js"),["../nodes/9.29750f46.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/10.58072b75.js"),["../nodes/10.58072b75.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/11.94976524.js"),["../nodes/11.94976524.js","../chunks/index.2ed5b141.js"],import.meta.url),()=>c(()=>import("../nodes/12.9cfe15a1.js"),["../nodes/12.9cfe15a1.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/13.4e880fae.js"),["../nodes/13.4e880fae.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/14.06f2ea5d.js"),["../nodes/14.06f2ea5d.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/15.348ace38.js"),["../nodes/15.348ace38.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/16.0d3da0e2.js"),["../nodes/16.0d3da0e2.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/17.baf24c03.js"),["../nodes/17.baf24c03.js","../chunks/index.2ed5b141.js","../chunks/PersonTitle.d04a396f.js"],import.meta.url),()=>c(()=>import("../nodes/18.4e3bacb3.js"),["../nodes/18.4e3bacb3.js","../chunks/index.2ed5b141.js"],import.meta.url)],at=[],_t={"/":[2],"/alliance":[3],"/co-creation":[4],"/team/alvie":[5],"/team/ivana":[6],"/team/jana":[7],"/team/justyna":[8],"/team/katarzyna":[9],"/team/madelin":[10],"/team/raquel":[11],"/team/rita":[12],"/team/savvoula":[13],"/team/shan":[14],"/team/shweta":[15],"/team/valentina":[16],"/team/zsuzsanna":[17],"/why":[18]},lt={handleError:({error:a})=>{console.error(a)}};export{_t as dictionary,lt as hooks,rt as matchers,st as nodes,ot as root,at as server_loads};
