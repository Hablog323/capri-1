import{y as v,z as a,A as w,B as H,C as M,D as x,E as I,G as N,H as P,I as O,J as B,K as z,L as T,M as D}from"./runtime-core.esm-bundler-5bfe6798.js";const W="http://www.w3.org/2000/svg",l=typeof document<"u"?document:null,h=l&&l.createElement("template"),q={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const r=t?l.createElementNS(W,e):l.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:e=>l.createTextNode(e),createComment:e=>l.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>l.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,r,s){const c=n?n.previousSibling:t.lastChild;if(r&&(r===s||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{h.innerHTML=i?`<svg>${e}</svg>`:e;const f=h.content;if(i){const o=f.firstChild;for(;o.firstChild;)f.appendChild(o.firstChild);f.removeChild(o)}t.insertBefore(f,n)}return[c?c.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function $(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function j(e,t,n){const i=e.style,r=a(n);if(n&&!r){for(const s in n)m(i,s,n[s]);if(t&&!a(t))for(const s in t)n[s]==null&&m(i,s,"")}else{const s=i.display;r?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=s)}}const g=/\s*!important$/;function m(e,t,n){if(N(n))n.forEach(i=>m(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=F(e,t);g.test(n)?e.setProperty(P(i),n.replace(g,""),"important"):e[i]=n}}const S=["Webkit","Moz","ms"],p={};function F(e,t){const n=p[t];if(n)return n;let i=O(t);if(i!=="filter"&&i in e)return p[t]=i;i=B(i);for(let r=0;r<S.length;r++){const s=S[r]+i;if(s in e)return p[t]=s}return t}const b="http://www.w3.org/1999/xlink";function G(e,t,n,i,r){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(b,t.slice(6,t.length)):e.setAttributeNS(b,t,n);else{const s=z(t);n==null||s&&!T(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function J(e,t,n,i,r,s,c){if(t==="innerHTML"||t==="textContent"){i&&c(i,r,s),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const o=n??"";(e.value!==o||e.tagName==="OPTION")&&(e.value=o),n==null&&e.removeAttribute(t);return}let f=!1;if(n===""||n==null){const o=typeof e[t];o==="boolean"?n=T(n):n==null&&o==="string"?(n="",f=!0):o==="number"&&(n=0,f=!0)}try{e[t]=n}catch{}f&&e.removeAttribute(t)}function K(e,t,n,i){e.addEventListener(t,n,i)}function U(e,t,n,i){e.removeEventListener(t,n,i)}function X(e,t,n,i,r=null){const s=e._vei||(e._vei={}),c=s[t];if(i&&c)c.value=i;else{const[f,o]=Q(t);if(i){const R=s[t]=V(i,r);K(e,f,R,o)}else c&&(U(e,f,c,o),s[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function Q(e){let t;if(A.test(e)){t={};let i;for(;i=e.match(A);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):P(e.slice(2)),t]}let d=0;const Y=Promise.resolve(),Z=()=>d||(Y.then(()=>d=0),d=Date.now());function V(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;D(y(i,n.value),t,5,[i])};return n.value=e,n.attached=Z(),n}function y(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>r=>!r._stopped&&i&&i(r))}else return t}const C=/^on[a-z]/,k=(e,t,n,i,r=!1,s,c,f,o)=>{t==="class"?$(e,i,r):t==="style"?j(e,n,i):x(t)?I(t)||X(e,t,n,i,c):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):tt(e,t,i,r))?J(e,t,i,s,c,f,o):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),G(e,t,i,r))};function tt(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&C.test(t)&&v(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||C.test(t)&&a(n)?!1:t in e}const _=M({patchProp:k},q);let u,E=!1;function et(){return u||(u=w(_))}function nt(){return u=E?u:H(_),E=!0,u}const rt=(...e)=>{const t=et().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=L(i);if(!r)return;const s=t._component;!v(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const c=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),c},t},st=(...e)=>{const t=nt().createApp(...e),{mount:n}=t;return t.mount=i=>{const r=L(i);if(r)return n(r,!0,r instanceof SVGElement)},t};function L(e){return a(e)?document.querySelector(e):e}export{st as a,rt as c};
