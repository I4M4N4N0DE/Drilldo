if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let l={};const u=e=>i(e,o),c={module:{uri:o},exports:l,require:u};s[o]=Promise.all(n.map((e=>c[e]||u(e)))).then((e=>(r(...e),l)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AboutView-2e4fd90e.js",revision:null},{url:"assets/AboutView-51a394bd.css",revision:null},{url:"assets/EditView-40e2538c.css",revision:null},{url:"assets/EditView-b080ffb4.js",revision:null},{url:"assets/ExploreView-82094329.css",revision:null},{url:"assets/ExploreView-b221f367.js",revision:null},{url:"assets/index-321b7b4c.js",revision:null},{url:"assets/index-5911b583.css",revision:null},{url:"assets/LoadView-4f5bc236.js",revision:null},{url:"assets/LoadView-822761c2.css",revision:null},{url:"assets/QuestionComponent-08ab841b.js",revision:null},{url:"assets/QuestionComponent-c567146a.css",revision:null},{url:"assets/QuestionControlComponent-dc23bfbe.js",revision:null},{url:"assets/QuestionControlComponent-f06eb5f5.css",revision:null},{url:"assets/TestView-8b8f5a3b.js",revision:null},{url:"assets/TestView-fa975b25.css",revision:null},{url:"favicon.ico",revision:"805ee662ac2c2e3aa977d1ac68323324"},{url:"icon-x128.png",revision:"7444488126593477d451b5a8d60e4a97"},{url:"icon-x192.png",revision:"1e0f6969ec0c41457d75e0b6070e3a58"},{url:"icon-x384.png",revision:"e312d464b310875deb3ce98670d4c6d4"},{url:"icon-x48.png",revision:"b4bea6b0cc0f1c804f0bfaca68ae7216"},{url:"icon-x512.png",revision:"15b73e537cdf8de9689ac5b3fca45b31"},{url:"icon-x72.png",revision:"24160e54500965598b748f54555b4bb3"},{url:"icon-x96.png",revision:"8673095ec122fed23c2f392f67491623"},{url:"icon.svg",revision:"fa86c5f29407b4777621aedc6628d3c8"},{url:"index.html",revision:"7ff4cb9eda9644d611577a60e3c27230"},{url:"registerSW.js",revision:"932dbf40535b4ca3dedd844d82437666"},{url:"data/paragraf4.json",revision:"85f49980deb7b57f8ebbb23f1f2fcdc1"},{url:"manifest.webmanifest",revision:"23a96e8b051b223a59356d98332a344c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
