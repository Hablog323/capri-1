import{q as u,v as f}from"./preact.module.4b7772f4.js";const m="modulepreload",c={},d="/capri/preact/",h=function(o,n){return!n||n.length===0?o():Promise.all(n.map(e=>{if(e=`${d}${e}`,e in c)return;c[e]=!0;const s=e.endsWith(".css"),i=s?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${i}`))return;const r=document.createElement("link");if(r.rel=s?"stylesheet":m,s||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),s)return new Promise((a,l)=>{r.addEventListener("load",a),r.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>o())};function p(t,o,n){return u(f(t,o),n.parentElement)}const E={"/src/Counter.island.tsx":()=>h(()=>import("./Counter.island.e46a89fe.js").then(function(t){return t.b}),["assets/Counter.island.e46a89fe.js","assets/preact.module.4b7772f4.js"])},C=document.querySelectorAll("script[data-island]");C.forEach(t=>{const o=t.getAttribute("data-island"),n=t.getAttribute("data-key");if(!o||!n)throw new Error("Missing attribute");const e=E[o];e&&e().then(s=>{const i=s[n],r=t.textContent?JSON.parse(t.textContent):{};p(i,r,t.previousElementSibling)}).catch(console.error)});
