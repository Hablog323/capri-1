import{q as c,C as d,g as l,F as o,w as s}from"./web-fef02691.js";const h=s("<capri-children></capri-children>");function u(a,r,e){const n=e.getAttribute("data-hk");if(!n)throw new Error("Can't hydrate an element without a data-hk attribute.");e.querySelector("capri-children")&&(r.children=(()=>{const t=c(h);return t.style.setProperty("display","contents"),d(t,""),t._$owner=l(),t})());const i=n.slice(0,-1);o(()=>a(r),e.parentElement,{renderId:i})}export{u as default};
