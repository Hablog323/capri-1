function w(){}function q(t,n){for(const e in n)t[e]=n[e];return t}function B(t){return t()}function S(){return Object.create(null)}function x(t){t.forEach(B)}function M(t){return typeof t=="function"}function rt(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}function z(t){return Object.keys(t).length===0}function lt(t,n,e,i){if(t){const r=T(t,n,e,i);return t[0](r)}}function T(t,n,e,i){return t[1]&&i?q(e.ctx.slice(),t[1](i(n))):e.ctx}function ct(t,n,e,i){if(t[2]&&i){const r=t[2](i(e));if(n.dirty===void 0)return r;if(typeof r=="object"){const f=[],l=Math.max(n.dirty.length,r.length);for(let o=0;o<l;o+=1)f[o]=n.dirty[o]|r[o];return f}return n.dirty|r}return n.dirty}function ut(t,n,e,i,r,f){if(r){const l=T(n,e,i,f);t.p(l,r)}}function ot(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}let b=!1;function D(){b=!0}function F(){b=!1}function H(t,n,e,i){for(;t<n;){const r=t+(n-t>>1);e(r)<=i?t=r+1:n=r}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<n.length;u++){const s=n[u];s.claim_order!==void 0&&c.push(s)}n=c}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let r=0;for(let c=0;c<n.length;c++){const u=n[c].claim_order,s=(r>0&&n[e[r]].claim_order<=u?r+1:H(1,r,m=>n[e[m]].claim_order,u))-1;i[c]=e[s]+1;const a=s+1;e[a]=c,r=Math.max(a,r)}const f=[],l=[];let o=n.length-1;for(let c=e[r]+1;c!=0;c=i[c-1]){for(f.push(n[c-1]);o>=c;o--)l.push(n[o]);o--}for(;o>=0;o--)l.push(n[o]);f.reverse(),l.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<l.length;c++){for(;u<f.length&&l[c].claim_order>=f[u].claim_order;)u++;const s=u<f.length?f[u]:null;t.insertBefore(l[c],s)}}function P(t,n){if(b){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function ft(t,n,e){t.insertBefore(n,e||null)}function at(t,n,e){b&&!e?P(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function W(t){t.parentNode&&t.parentNode.removeChild(t)}function G(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function st(){return k(" ")}function dt(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function J(t){return Array.from(t.childNodes)}function K(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function L(t,n,e,i,r=!1){K(t);const f=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r||(t.claim_info.last_index=l),o}}for(let l=t.claim_info.last_index-1;l>=0;l--){const o=t[l];if(n(o)){const c=e(o);return c===void 0?t.splice(l,1):t[l]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,o}}return i()})();return f.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,f}function Q(t,n,e,i){return L(t,r=>r.nodeName===n,r=>{const f=[];for(let l=0;l<r.attributes.length;l++){const o=r.attributes[l];e[o.name]||f.push(o.name)}f.forEach(l=>r.removeAttribute(l))},()=>i(n))}function ht(t,n,e){return Q(t,n,e,G)}function R(t,n){return L(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function mt(t){return R(t," ")}function pt(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}let h;function _(t){h=t}function V(){if(!h)throw new Error("Function called outside component initialization");return h}function yt(t){V().$$.on_mount.push(t)}const d=[],j=[],y=[],C=[],X=Promise.resolve();let v=!1;function Y(){v||(v=!0,X.then(O))}function E(t){y.push(t)}const $=new Set;let p=0;function O(){const t=h;do{for(;p<d.length;){const n=d[p];p++,_(n),Z(n.$$)}for(_(null),d.length=0,p=0;j.length;)j.pop()();for(let n=0;n<y.length;n+=1){const e=y[n];$.has(e)||($.add(e),e())}y.length=0}while(d.length);for(;C.length;)C.pop()();v=!1,$.clear(),_(t)}function Z(t){if(t.fragment!==null){t.update(),x(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const g=new Set;let U;function tt(t,n){t&&t.i&&(g.delete(t),t.i(n))}function gt(t,n,e,i){if(t&&t.o){if(g.has(t))return;g.add(t),U.c.push(()=>{g.delete(t),i&&(e&&t.d(1),i())}),t.o(n)}else i&&i()}function xt(t){t&&t.c()}function bt(t,n){t&&t.l(n)}function nt(t,n,e,i){const{fragment:r,after_update:f}=t.$$;r&&r.m(n,e),i||E(()=>{const l=t.$$.on_mount.map(B).filter(M);t.$$.on_destroy?t.$$.on_destroy.push(...l):x(l),t.$$.on_mount=[]}),f.forEach(E)}function et(t,n){const e=t.$$;e.fragment!==null&&(x(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function it(t,n){t.$$.dirty[0]===-1&&(d.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function $t(t,n,e,i,r,f,l,o=[-1]){const c=h;_(t);const u=t.$$={fragment:null,ctx:[],props:f,update:w,not_equal:r,bound:S(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(c?c.$$.context:[])),callbacks:S(),dirty:o,skip_bound:!1,root:n.target||c.$$.root};l&&l(u.root);let s=!1;if(u.ctx=e?e(t,n.props||{},(a,m,...N)=>{const A=N.length?N[0]:m;return u.ctx&&r(u.ctx[a],u.ctx[a]=A)&&(!u.skip_bound&&u.bound[a]&&u.bound[a](A),s&&it(t,a)),m}):[],u.update(),s=!0,x(u.before_update),u.fragment=i?i(u.ctx):!1,n.target){if(n.hydrate){D();const a=J(n.target);u.fragment&&u.fragment.l(a),a.forEach(W)}else u.fragment&&u.fragment.c();n.intro&&tt(t.$$.fragment),nt(t,n.target,n.anchor,n.customElement),F(),O()}_(c)}class wt{$destroy(){et(this,1),this.$destroy=w}$on(n,e){if(!M(e))return w;const i=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return i.push(e),()=>{const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}$set(n){this.$$set&&!z(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}}export{et as A,yt as B,ft as C,wt as S,st as a,J as b,ht as c,R as d,G as e,W as f,mt as g,_t as h,$t as i,at as j,P as k,dt as l,pt as m,w as n,lt as o,xt as p,bt as q,x as r,rt as s,k as t,nt as u,ut as v,ot as w,ct as x,tt as y,gt as z};
