/*! For license information please see secret.bundle.js.LICENSE.txt */
(()=>{"use strict";var e,n,r,t={"./src/pages/secret/index.js":(e,n,r)=>{r.r(n);r("./node_modules/bootstrap/dist/css/bootstrap.min.css"),r("./node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"),r("./node_modules/bootstrap-icons/font/bootstrap-icons.css");var t=r("./node_modules/aos/dist/aos.js"),a=r.n(t),o=(r("./node_modules/aos/dist/aos.css"),r("./node_modules/typed.js/dist/typed.module.js")),i=(r("./src/shared/css/font.css"),r("./src/shared/html/topnav.html")),d=r("./src/shared/html/footer.html");document.addEventListener("DOMContentLoaded",(function(){var e=document.createElement("div");if(e.innerHTML=i.default,document.body.insertBefore(e,document.body.firstChild),a().init(),document.querySelector("#typed-text"))new o.default("#typed-text",{strings:["This is the home page.","It is great for content about your and/or your organization."],typeSpeed:100,loop:!0,loopCount:1/0});var n,r=document.createElement("div");r.innerHTML=d.default,document.body.appendChild(r),n=(new Date).getFullYear(),document.querySelector("#copyright-year").textContent=n}))},"./src/shared/html/footer.html":(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='<footer class="bg-light">\n  <div class="container">\n    <div class="row py-3">\n      <div class="col-md-6 d-flex align-items-center" data-aos="fade-up" data-aos-duration="500">\n        <p class="mb-0">&copy; <span id="copyright-year"></span> Your Company. All Rights Reserved.</p>\n      </div>\n      <div class="col-md-6" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">\n        <ul class="nav justify-content-end">\n          <li class="nav-item m-2 p-1">\n            <a class="nav-link" href="#">Terms &amp; Conditions</a>\n          </li>\n          <li class="nav-item m-2 p-1">\n            <a class="nav-link" href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>\n          </li>\n          <li class="nav-item m-2 p-1">\n            <a class="nav-link" href="#" title="Instagram"><i class="bi bi-instagram"></i></a>\n          </li>\n          <li class="nav-item m-2 p-1">\n            <a class="nav-link" href="#" title="Facebook"><i class="bi bi-facebook"></i></a>\n          </li>\n          <li class="nav-item m-2 p-1">\n            <a class="nav-link" href="#" title="Twitter"><i class="bi bi-twitter"></i></a>\n          </li>\n          <li class="nav-item m-2 p-1">\n            <a class="nav-link" href="#" title="TikTok"><i class="bi bi-tiktok"></i></a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</footer>\n'},"./src/shared/html/topnav.html":(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});const t='<header>\n  <nav class="navbar navbar-expand-lg navbar-light bg-light">\n    <div class="container-fluid">\n      <a class="navbar-brand m-2 p-1" href="#" data-aos="zoom-in" data-aos-duration="500">Brand</a>\n      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">\n        <span class="navbar-toggler-icon"></span>\n      </button>\n      <div class="collapse navbar-collapse" id="navbarNav">\n        <ul class="navbar-nav ms-auto">\n          <li class="nav-item m-2 p-1" data-aos="fade-down" data-aos-duration="500" data-aos-delay="100">\n            <a class="nav-link" href="/"><i class="bi bi-house"></i> Home</a>\n          </li>\n          <li class="nav-item m-2 p-1" data-aos="fade-down" data-aos-duration="500" data-aos-delay="200">\n            <a class="nav-link" href="/about"><i class="bi bi-info-circle"></i> About</a>\n          </li>\n          <li class="nav-item m-2 p-1" data-aos="fade-down" data-aos-duration="500" data-aos-delay="300">\n            <a class="nav-link" href="signup"><i class="bi bi-envelope"></i> Contact</a>\n          </li>\n          <li class="nav-item dropdown m-2 p-1" data-aos="fade-down" data-aos-duration="500" data-aos-delay="400">\n            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">\n              <i class="bi bi-list"></i> Services\n            </a>\n            <ul class="dropdown-menu m-2 p-1" aria-labelledby="navbarDropdown">\n              <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="500"><a class="dropdown-item" href="#">Service 1</a></li>\n              <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="600"><a class="dropdown-item" href="#">Service 2</a></li>\n              <li data-aos="fade-up" data-aos-duration="500" data-aos-delay="700"><a class="dropdown-item" href="#">Service 3</a></li>\n            </ul>\n          </li>\n        </ul>\n      <a href="/login"  <button id="authButton" class="btn btn-outline-primary m-2 p-1" type="button" data-aos="fade-left" data-aos-duration="500" data-aos-delay="500">Login</button></a>\n      </div>\n    </div>\n  </nav>\n</header>\n'},"./src/shared/css/font.css":(e,n,r)=>{r.r(n);var t=r("./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},a={};function o(e){var n=a[e];if(void 0!==n){if(void 0!==n.error)throw n.error;return n.exports}var r=a[e]={id:e,exports:{}};try{var i={id:e,module:r,factory:t[e],require:o};o.i.forEach((function(e){e(i)})),r=i.module,i.factory.call(r.exports,r,r.exports,i.require)}catch(e){throw r.error=e,e}return r.exports}o.m=t,o.c=a,o.i=[],e=[],o.O=(n,r,t,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,t,a]=e[c],d=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(o.O).every((e=>o.O[e](r[s])))?r.splice(s--,1):(d=!1,a<i&&(i=a));if(d){e.splice(c--,1);var l=t();void 0!==l&&(n=l)}}return n}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,t,a]},o.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return o.d(n,{a:n}),n},o.d=(e,n)=>{for(var r in n)o.o(n,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},o.hu=e=>e+"."+o.h()+".hot-update.js",o.miniCssF=e=>{},o.hmrF=()=>"secret."+o.h()+".hot-update.json",o.h=()=>"4fa506ccbeabf53ca8b1",o.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),n={},r="hello-world:",o.l=(e,t,a,i)=>{if(n[e])n[e].push(t);else{var d,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var u=l[c];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==r+a){d=u;break}}d||(s=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.setAttribute("data-webpack",r+a),d.src=e),n[e]=[t];var p=(r,t)=>{d.onerror=d.onload=null,clearTimeout(f);var a=n[e];if(delete n[e],d.parentNode&&d.parentNode.removeChild(d),a&&a.forEach((e=>e(t))),r)return r(t)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=p.bind(null,d.onerror),d.onload=p.bind(null,d.onload),s&&document.head.appendChild(d)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,n,r,t={},a=o.c,i=[],d=[],s="idle",l=0,c=[];function u(e){s=e;for(var n=[],r=0;r<d.length;r++)n[r]=d[r].call(null,e);return Promise.all(n)}function p(){0==--l&&u("ready").then((function(){if(0===l){var e=c;c=[];for(var n=0;n<e.length;n++)e[n]()}}))}function f(e){if("idle"!==s)throw new Error("check() is only allowed in idle status");return u("check").then(o.hmrM).then((function(r){return r?u("prepare").then((function(){var t=[];return n=[],Promise.all(Object.keys(o.hmrC).reduce((function(e,a){return o.hmrC[a](r.c,r.r,r.m,e,n,t),e}),[])).then((function(){return n=function(){return e?v(e):u("ready").then((function(){return t}))},0===l?n():new Promise((function(e){c.push((function(){e(n())}))}));var n}))})):u(m()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==s?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+s+")")})):v(e)}function v(e){e=e||{},m();var t=n.map((function(n){return n(e)}));n=void 0;var a=t.map((function(e){return e.error})).filter(Boolean);if(a.length>0)return u("abort").then((function(){throw a[0]}));var o=u("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var i,d=u("apply"),s=function(e){i||(i=e)},l=[];return t.forEach((function(e){if(e.apply){var n=e.apply(s);if(n)for(var r=0;r<n.length;r++)l.push(n[r])}})),Promise.all([o,d]).then((function(){return i?u("fail").then((function(){throw i})):r?v(e).then((function(e){return l.forEach((function(n){e.indexOf(n)<0&&e.push(n)})),e})):u("idle").then((function(){return l}))}))}function m(){if(r)return n||(n=[]),Object.keys(o.hmrI).forEach((function(e){r.forEach((function(r){o.hmrI[e](r,n)}))})),r=void 0,!0}o.hmrD=t,o.i.push((function(c){var v,m,b,y,g=c.module,_=function(n,r){var t=a[r];if(!t)return n;var o=function(o){if(t.hot.active){if(a[o]){var d=a[o].parents;-1===d.indexOf(r)&&d.push(r)}else i=[r],e=o;-1===t.children.indexOf(o)&&t.children.push(o)}else console.warn("[HMR] unexpected require("+o+") from disposed module "+r),i=[];return n(o)},d=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&"e"!==c&&Object.defineProperty(o,c,d(c));return o.e=function(e){return function(e){switch(s){case"ready":u("prepare");case"prepare":return l++,e.then(p,p),e;default:return e}}(n.e(e))},o}(c.require,c.id);g.hot=(v=c.id,m=g,y={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:b=e!==v,_requireSelf:function(){i=m.parents.slice(),e=b?void 0:v,o(v)},active:!0,accept:function(e,n,r){if(void 0===e)y._selfAccepted=!0;else if("function"==typeof e)y._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)y._acceptedDependencies[e[t]]=n||function(){},y._acceptedErrorHandlers[e[t]]=r;else y._acceptedDependencies[e]=n||function(){},y._acceptedErrorHandlers[e]=r},decline:function(e){if(void 0===e)y._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var n=0;n<e.length;n++)y._declinedDependencies[e[n]]=!0;else y._declinedDependencies[e]=!0},dispose:function(e){y._disposeHandlers.push(e)},addDisposeHandler:function(e){y._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=y._disposeHandlers.indexOf(e);n>=0&&y._disposeHandlers.splice(n,1)},invalidate:function(){switch(this._selfInvalidated=!0,s){case"idle":n=[],Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)})),u("ready");break;case"ready":Object.keys(o.hmrI).forEach((function(e){o.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(r=r||[]).push(v)}},check:f,apply:h,status:function(e){if(!e)return s;d.push(e)},addStatusHandler:function(e){d.push(e)},removeStatusHandler:function(e){var n=d.indexOf(e);n>=0&&d.splice(n,1)},data:t[v]},e=void 0,y),g.parents=i,g.children=[],i=[],c.require=_})),o.hmrC={},o.hmrI={}})(),o.p="/",(()=>{if("undefined"!=typeof document){var e=(e,n,r,t,a)=>{var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";return o.onerror=o.onload=r=>{if(o.onerror=o.onload=null,"load"===r.type)t();else{var i=r&&("load"===r.type?"missing":r.type),d=r&&r.target&&r.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+d+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=d,o.parentNode&&o.parentNode.removeChild(o),a(s)}},o.href=n,r?r.parentNode.insertBefore(o,r.nextSibling):document.head.appendChild(o),o},n=(e,n)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var a=(i=r[t]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===n))return i}var o=document.getElementsByTagName("style");for(t=0;t<o.length;t++){var i;if((a=(i=o[t]).getAttribute("data-href"))===e||a===n)return i}},r=[],t=[],a=e=>({dispose:()=>{for(var e=0;e<r.length;e++){var n=r[e];n.parentNode&&n.parentNode.removeChild(n)}r.length=0},apply:()=>{for(var e=0;e<t.length;e++)t[e].rel="stylesheet";t.length=0}});o.hmrC.miniCss=(i,d,s,l,c,u)=>{c.push(a),i.forEach((a=>{var i=o.miniCssF(a),d=o.p+i,s=n(i,d);s&&l.push(new Promise(((n,o)=>{var i=e(a,d,s,(()=>{i.as="style",i.rel="preload",n()}),o);r.push(s),t.push(i)})))}))}}})(),(()=>{var e,n,r,t,a,i=o.hmrS_jsonp=o.hmrS_jsonp||{secret:0},d={};function s(n,r){return e=r,new Promise(((e,r)=>{d[n]=e;var t=o.p+o.hu(n),a=new Error;o.l(t,(e=>{if(d[n]){d[n]=void 0;var t=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;a.message="Loading hot update chunk "+n+" failed.\n("+t+": "+o+")",a.name="ChunkLoadError",a.type=t,a.request=o,r(a)}}))}))}function l(e){function d(e){for(var n=[e],r={},t=n.map((function(e){return{chain:[e],id:e}}));t.length>0;){var a=t.pop(),i=a.id,d=a.chain,l=o.c[i];if(l&&(!l.hot._selfAccepted||l.hot._selfInvalidated)){if(l.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:i};if(l.hot._main)return{type:"unaccepted",chain:d,moduleId:i};for(var c=0;c<l.parents.length;c++){var u=l.parents[c],p=o.c[u];if(p){if(p.hot._declinedDependencies[i])return{type:"declined",chain:d.concat([u]),moduleId:i,parentId:u};-1===n.indexOf(u)&&(p.hot._acceptedDependencies[i]?(r[u]||(r[u]=[]),s(r[u],[i])):(delete r[u],n.push(u),t.push({chain:d.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:r}}function s(e,n){for(var r=0;r<n.length;r++){var t=n[r];-1===e.indexOf(t)&&e.push(t)}}o.f&&delete o.f.jsonpHmr,n=void 0;var l={},c=[],u={},p=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var f in r)if(o.o(r,f)){var h,v=r[f],m=!1,b=!1,y=!1,g="";switch((h=v?d(f):{type:"disposed",moduleId:f}).chain&&(g="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+g));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+g));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(m=new Error("Aborted because "+f+" is not accepted"+g));break;case"accepted":e.onAccepted&&e.onAccepted(h),b=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),y=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(b)for(f in u[f]=v,s(c,h.outdatedModules),h.outdatedDependencies)o.o(h.outdatedDependencies,f)&&(l[f]||(l[f]=[]),s(l[f],h.outdatedDependencies[f]));y&&(s(c,[h.moduleId]),u[f]=p)}r=void 0;for(var _,w=[],E=0;E<c.length;E++){var k=c[E],j=o.c[k];j&&(j.hot._selfAccepted||j.hot._main)&&u[k]!==p&&!j.hot._selfInvalidated&&w.push({module:k,require:j.hot._requireSelf,errorHandler:j.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var n,r=c.slice();r.length>0;){var a=r.pop(),d=o.c[a];if(d){var s={},u=d.hot._disposeHandlers;for(E=0;E<u.length;E++)u[E].call(null,s);for(o.hmrD[a]=s,d.hot.active=!1,delete o.c[a],delete l[a],E=0;E<d.children.length;E++){var p=o.c[d.children[E]];p&&((e=p.parents.indexOf(a))>=0&&p.parents.splice(e,1))}}}for(var f in l)if(o.o(l,f)&&(d=o.c[f]))for(_=l[f],E=0;E<_.length;E++)n=_[E],(e=d.children.indexOf(n))>=0&&d.children.splice(e,1)},apply:function(n){for(var r in u)o.o(u,r)&&(o.m[r]=u[r]);for(var t=0;t<a.length;t++)a[t](o);for(var i in l)if(o.o(l,i)){var d=o.c[i];if(d){_=l[i];for(var s=[],p=[],f=[],h=0;h<_.length;h++){var v=_[h],m=d.hot._acceptedDependencies[v],b=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==s.indexOf(m))continue;s.push(m),p.push(b),f.push(v)}}for(var y=0;y<s.length;y++)try{s[y].call(null,_)}catch(r){if("function"==typeof p[y])try{p[y](r,{moduleId:i,dependencyId:f[y]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:f[y],error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:f[y],error:r}),e.ignoreErrored||n(r)}}}for(var g=0;g<w.length;g++){var E=w[g],k=E.module;try{E.require(k)}catch(r){if("function"==typeof E.errorHandler)try{E.errorHandler(r,{moduleId:k,module:o.c[k]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:t,originalError:r}),e.ignoreErrored||(n(t),n(r))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:k,error:r}),e.ignoreErrored||n(r)}}return c}}}self.webpackHotUpdatehello_world=(n,t,i)=>{for(var s in t)o.o(t,s)&&(r[s]=t[s],e&&e.push(s));i&&a.push(i),d[n]&&(d[n](),d[n]=void 0)},o.hmrI.jsonp=function(e,n){r||(r={},a=[],t=[],n.push(l)),o.o(r,e)||(r[e]=o.m[e])},o.hmrC.jsonp=function(e,d,c,u,p,f){p.push(l),n={},t=d,r=c.reduce((function(e,n){return e[n]=!1,e}),{}),a=[],e.forEach((function(e){o.o(i,e)&&void 0!==i[e]?(u.push(s(e,f)),n[e]=!0):n[e]=!1})),o.f&&(o.f.jsonpHmr=function(e,r){n&&o.o(n,e)&&!n[e]&&(r.push(s(e)),n[e]=!0)})},o.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(o.p+o.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},o.O.j=e=>0===i[e];var c=(e,n)=>{var r,t,[a,d,s]=n,l=0;if(a.some((e=>0!==i[e]))){for(r in d)o.o(d,r)&&(o.m[r]=d[r]);if(s)var c=s(o)}for(e&&e(n);l<a.length;l++)t=a[l],o.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return o.O(c)},u=self.webpackChunkhello_world=self.webpackChunkhello_world||[];u.forEach(c.bind(null,0)),u.push=c.bind(null,u.push.bind(u))})();var i=o.O(void 0,["vendors-node_modules_aos_dist_aos_js-node_modules_bootstrap_dist_js_bootstrap_bundle_min_js-n-1d2116"],(()=>o("./src/pages/secret/index.js")));i=o.O(i)})();
//# sourceMappingURL=secret.bundle.js.map