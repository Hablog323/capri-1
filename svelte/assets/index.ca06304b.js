var Mt=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);import{n as Z,s as Q,S as ae,a as ie,e as se,b as I,t as S,g as De,c as E,f as xe,d as m,h as Ce,j as ye,o as Ut,k as M,l as G,m as U,p as Dt,q as xt,r as D,u as Ft,v as ht,w as P,x as R,y as C,z as F,A as Fe,B as Ge,C as pt,D as dt,E as _t,F as Gt,G as kt,H as zt,I as j,J as q,K as L,L as W,M as b,N as Bt,O as Kt}from"./index.b54d5cb1.js";import ke from"./Counter.island.617ff8ed.js";import qt from"./Expandable.island.6692da73.js";import Wt from"./MediaQuery.island.9f93346d.js";var ko=Mt((k,z)=>{const Xt=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};Xt();const ne=[];function je(t,e=Z){let r;const n=new Set;function s(a){if(Q(t,a)&&(t=a,r)){const f=!ne.length;for(const c of n)c[1](),ne.push(c,t);if(f){for(let c=0;c<ne.length;c+=2)ne[c][0](ne[c+1]);ne.length=0}}}function o(a){s(a(t))}function i(a,f=Z){const c=[a,f];return n.add(c),n.size===1&&(r=e(s)||Z),a(t),()=>{n.delete(c),n.size===0&&(r(),r=null)}}return{set:s,update:o,subscribe:i}}const gt="__SVELTE_PILOT_ROUTER__",mt="__SVELTE_PILOT_ROUTE__",Le="__SVELTE_PILOT_CHILDREN__";function ze(t){let e=t[0].key,r,n,s=Be(t);return{c(){s.c(),r=se()},l(o){s.l(o),r=se()},m(o,i){s.m(o,i),I(o,r,i),n=!0},p(o,i){i&1&&Q(e,e=o[0].key)?(De(),E(s,1,1,Z),xe(),s=Be(o),s.c(),S(s,1),s.m(r.parentNode,r)):s.p(o,i)},i(o){n||(S(s),n=!0)},o(o){E(s),n=!1},d(o){o&&m(r),s.d(o)}}}function Be(t){let e,r,n;const s=[t[2]];var o=t[1];function i(a){let f={};for(let c=0;c<s.length;c+=1)f=Ft(f,s[c]);return{props:f}}return o&&(e=new o(i())),{c(){e&&M(e.$$.fragment),r=se()},l(a){e&&G(e.$$.fragment,a),r=se()},m(a,f){e&&U(e,a,f),I(a,r,f),n=!0},p(a,f){const c=f&4?Dt(s,[xt(a[2])]):{};if(o!==(o=a[1])){if(e){De();const u=e;E(u.$$.fragment,1,0,()=>{D(u,1)}),xe()}o?(e=new o(i()),M(e.$$.fragment),S(e.$$.fragment,1),U(e,r.parentNode,r)):e=null}else o&&e.$set(c)},i(a){n||(e&&S(e.$$.fragment,a),n=!0)},o(a){e&&E(e.$$.fragment,a),n=!1},d(a){a&&m(r),e&&D(e,a)}}}function Qt(t){let e,r,n=t[0]&&t[1]&&ze(t);return{c(){n&&n.c(),e=se()},l(s){n&&n.l(s),e=se()},m(s,o){n&&n.m(s,o),I(s,e,o),r=!0},p(s,[o]){s[0]&&s[1]?n?(n.p(s,o),o&3&&S(n,1)):(n=ze(s),n.c(),S(n,1),n.m(e.parentNode,e)):n&&(De(),E(n,1,1,()=>{n=null}),xe())},i(s){r||(S(n),r=!0)},o(s){E(n),r=!1},d(s){n&&n.d(s),s&&m(e)}}}function Vt(t,e,r){let{name:n="default"}=e,s,o,i;const a=Ce(Le),f=je();ye(Le,{subscribe:f.subscribe});const c=a.subscribe(({routerViews:u,ssrState:h}={})=>{var l;r(0,s=u==null?void 0:u[n]),r(1,o=((l=s==null?void 0:s.component)==null?void 0:l.default)||(s==null?void 0:s.component)),r(2,i={...s==null?void 0:s.props,...h==null?void 0:h[n].data}),f.set({routerViews:s==null?void 0:s.children,ssrState:h==null?void 0:h[n].children})});return Ut(c),t.$$set=u=>{"name"in u&&r(3,n=u.name)},[s,o,i,n]}class Jt extends ae{constructor(e){super(),ie(this,e,Vt,Qt,Q,{name:3})}}const Yt=/^[^/]+/,Zt=/^(:\w|\()/,er=/:\w|\(/,tr=/^(?::(\w+))?(?:\(([^)]+)\))?/;class rr{constructor(e){this.root=this.createNode(),e&&Object.entries(e).forEach(r=>this.add(...r))}createNode({regex:e,param:r,handler:n}={}){return{regex:e,param:r,handler:n,children:{string:{},regex:{}}}}add(e,r){return this.parseOptim(e,r,this.root),this}parseOptim(e,r,n){if(er.test(e))this.parse(e,r,n);else{const s=n.children.string[e];s?s.handler=r:n.children.string[e]=this.createNode({handler:r})}}parse(e,r,n){if(Zt.test(e)){const s=e.match(tr);if(s){let o=n.children.regex[s[0]];o||(o=n.children.regex[s[0]]=this.createNode({regex:s[2]?new RegExp("^"+s[2]):Yt,param:s[1]})),s[0].length===e.length?o.handler=r:this.parseOptim(e.slice(s[0].length),r,o)}}else{const s=e[0];let o=n.children.string[s];o||(o=n.children.string[s]=this.createNode()),this.parse(e.slice(1),r,o)}}find(e){return this.findOptim(e,this.root,{})}findOptim(e,r,n){const s=r.children.string[e];return s&&s.handler!==void 0?{handler:s.handler,params:n}:this.findRecursive(e,r,n)}findRecursive(e,r,n){let s=r.children.string[e[0]];if(s){const o=this.findRecursive(e.slice(1),s,n);if(o)return o}for(const o in r.children.regex)if(s=r.children.regex[o],s.regex){const i=e.match(s.regex);if(i){if(i[0].length===e.length&&s.handler!==void 0)return s.param&&(n[s.param]=decodeURIComponent(i[0])),{handler:s.handler,params:n};{const a=this.findOptim(e.slice(i[0].length),s,n);if(a)return s.param&&(n[s.param]=decodeURIComponent(i[0])),a}}}return null}}function yt(t,{radix:e,defaults:r}={}){if(t==null)return r;const n=parseInt(t,e);return isNaN(n)?r:n}function bt(t,{defaults:e}={}){if(t==null)return e;const r=parseFloat(t);return isNaN(r)?e:r}function vt(t,{defaults:e}={}){if(t==null)return e;const r=Number(t);return isNaN(r)?e:r}function nr(t,{empty:e=!0,defaults:r}={}){if(t==null)return r;const n=["1","true","yes"],s=["0","false","no"];return e===!0?n.push(""):e===!1&&s.push(""),n.includes(t)?!0:s.includes(t)?!1:r}function $t(t,{defaults:e}={}){return t==null?e:String(t)}function sr(t,{radix:e,defaults:r,dedup:n,splitComma:s}={}){return we($e(t,s).map(o=>yt(o,{radix:e})),r,n)}function or(t,{defaults:e,dedup:r,splitComma:n}={}){return we($e(t,n).map(s=>bt(s)),e,r)}function ar(t,{defaults:e,dedup:r,splitComma:n}={}){return we($e(t,n).map(s=>vt(s)),e,r)}function ir(t,{defaults:e,dedup:r,splitComma:n}={}){return we($e(t,n).map(s=>$t(s)),e,r)}function $e(t,e=!1){if(t==null)return[];let r=t instanceof Array?t:[t];return e&&(r=r.join(",").split(",")),r}function we(t,e=void 0,r=!0){const n=t.filter((s,o)=>s!=null&&(r?t.indexOf(s)===o:!0));return n.length?n:e}class Ke{constructor(e){this.source=e}get(e){const r=this.source instanceof Function?this.source():this.source;if(r instanceof URLSearchParams)return r.get(e);{const n=r[e];return n instanceof Array?n[0]:n}}getAll(e){const r=this.source instanceof Function?this.source():this.source;return r instanceof URLSearchParams?r.getAll(e):r[e]}int(e,{defaults:r,radix:n}={}){return yt(this.get(e),{defaults:r,radix:n})}float(e,{defaults:r}={}){return bt(this.get(e),{defaults:r})}number(e,{defaults:r}={}){return vt(this.get(e),{defaults:r})}bool(e,{empty:r=!0,defaults:n}={}){return nr(this.get(e),{empty:r,defaults:n})}string(e,{defaults:r}={}){return $t(this.get(e),{defaults:r})}arrayOfInt(e,{radix:r,defaults:n,dedup:s,splitComma:o}={}){return sr(this.getAll(e),{radix:r,defaults:n,dedup:s,splitComma:o})}arrayOfFloat(e,{defaults:r,dedup:n,splitComma:s}={}){return or(this.getAll(e),{defaults:r,dedup:n,splitComma:s})}arrayOfNumber(e,{defaults:r,dedup:n,splitComma:s}={}){return ar(this.getAll(e),{defaults:r,dedup:n,splitComma:s})}arrayOfString(e,{defaults:r,dedup:n,splitComma:s}={}){return ir(this.getAll(e),{defaults:r,dedup:n,splitComma:s})}}const cr=typeof window=="object"&&window.history?"client":"server";function fr(t,e){e instanceof URLSearchParams?e.forEach((r,n)=>t.append(n,r)):Object.entries(e).forEach(([r,n])=>{n!=null&&(Array.isArray(n)?n.forEach(s=>t.append(r,String(s))):t.append(r,String(n)))})}class Ee extends Error{constructor(e){super(),this.location=e}}class ur{constructor({routes:e,base:r,pathQuery:n,mode:s=cr}){var o;this.beforeChangeHooks=[],this.afterChangeHooks=[],this.updateHooks=[],this.urlRouter=new rr(this.flatRoutes(e)),this.base=r,this.pathQuery=n,this.mode=s,this.onPopStateWrapper=()=>this.onPopState(),this.mode==="client"&&(window.addEventListener("popstate",this.onPopStateWrapper),(o=history.state)!=null&&o.__position__||history.replaceState({__position__:history.length},""),this.replace({path:location.href,state:history.state}))}flatRoutes(e,r=[],n=[],s={}){const o=e.filter(a=>!Array.isArray(a)&&!a.path),i=o.map(a=>a.name);r=r.filter(a=>!i.includes(a.name)).concat(o);for(const a of e)if(a instanceof Array)this.flatRoutes(a,r,n,s);else if(a.path||a.children){const f=[...n,r.filter(c=>c.name!==a.name).concat(a)];a.path?s[a.path]=f:a.children&&this.flatRoutes(a.children,r,f,s)}return s}handle(e,r){return Promise.resolve().then(()=>{var y;const n=this.parseLocation(e),s=this.urlRouter.find(n.path);if(!s)return null;const{routerViews:o,metaSetters:i,propSetters:a,keySetters:f,beforeEnterHooks:c,beforeLeaveHooks:u,asyncComponentPromises:h,loadFns:l,ssrState:_}=this.resolveRoute(s.handler),p={...n,params:new Ke(s.params),meta:{},_routerViews:o,_beforeLeaveHooks:u,_metaSetters:i,_propSetters:a,_keySetters:f};return this.updateRouteMeta(p),this.runGuardHooks((((y=this.current)==null?void 0:y._beforeLeaveHooks)||[]).concat(this.beforeChangeHooks,c),p,()=>Promise.all(h).then(d=>this.runGuardHooks(d.filter($=>"beforeEnter"in $).map($=>$.beforeEnter),p,()=>(this.updateRouteProps(p),this.updateRouteKeys(p),this.mode==="client"&&(this.current=p),this.emit("update",p),this.emit("afterChange",p,this.current),this.mode==="client"?{route:p,ssrState:null}:Promise.all(l.map($=>$(p,r))).then(()=>({route:p,ssrState:_}))))))})}locationToInternalURL(e){var n,s;typeof e=="string"&&(e={path:e});const r=new URL(e.path,"file:");return r.pathname=r.pathname.replace(/:([a-z]\w*)/ig,(o,i)=>{var a;return encodeURIComponent((a=e.params)==null?void 0:a[i])}),e.query&&fr(r.searchParams,e.query),e.hash&&(r.hash=e.hash),/^\w+:/.test(e.path)&&(this.base&&r.pathname.startsWith(this.base)?r.pathname=r.pathname.slice(this.base.length):this.pathQuery&&(r.pathname=r.searchParams.get(this.pathQuery)||"/",r.searchParams.delete(this.pathQuery))),(s=(n=r.searchParams).sort)==null||s.call(n),r}internalURLtoHref(e){if(this.pathQuery){const r=new URL(e.href);return e.pathname!=="/"&&r.searchParams.set(this.pathQuery,e.pathname),r.search+r.hash}else return(this.base?this.base.endsWith("/")?this.base+e.pathname.slice(1):e.pathname==="/"?this.base:this.base+e.pathname:e.pathname)+e.search+e.hash}parseLocation(e){const r=this.locationToInternalURL(e);return{path:r.pathname,query:new Ke(r.searchParams),search:r.search,hash:r.hash,state:typeof e=="string"||!e.state?{}:e.state,href:this.internalURLtoHref(r)}}href(e){return this.internalURLtoHref(this.locationToInternalURL(e))}runGuardHooks(e,r,n){let s=Promise.resolve(null);for(const o of e)s=s.then(()=>Promise.resolve(o(r,this.current)).then(i=>{if(i===!0||i===void 0)return null;throw i===!1?new Ee:new Ee(i)}));return s=s.then(n,o=>{if(o instanceof Ee)return o.location?this.handle(o.location):null;throw o}),s}resolveRoute(e){const r={},n=[],s=[],o=[],i=[],a=[],f=[],c=[],u=this.mode==="server"?{}:null;let h=r,l=u;for(const _ of e){this.resolveRouterViews(_,!0,h,n,s,o,i,a,f,c,l);const p=_[_.length-1].name||"default";h=h[p].children={},l&&(l=l[p].children={})}return{routerViews:r,metaSetters:n,propSetters:s,keySetters:o,beforeEnterHooks:i,beforeLeaveHooks:a,asyncComponentPromises:f,loadFns:c,ssrState:u}}resolveRouterViews(e,r,n,s,o,i,a,f,c,u,h){e.forEach(l=>{var V,T;const{name:_="default",component:p,props:y,key:d,meta:$,beforeEnter:A,beforeLeave:x,children:O}=l,w=n[_]={name:_};if(A&&a.push(A),x&&f.push(x),$&&s.push($),y&&(y instanceof Function?o.push(g=>w.props=y(g)):w.props=y),d&&i.push(g=>w.key=d(g)),h&&(h[_]={}),p instanceof Function&&!p.prototype){const g=p();g.then(N=>{l.component=w.component=N,w.component.load&&h&&H(w.component.load,h[_])}),c.push(g)}else w.component=p,(V=w.component)!=null&&V.beforeEnter&&a.push(w.component.beforeEnter),((T=w.component)==null?void 0:T.load)&&h&&H(w.component.load,h[_]);function H(g,N){u.push((J,ge)=>g(w.props||{},J,ge).then(fe=>N.data=fe))}O&&(!r||l!==e[e.length-1])&&(w.children={},this.resolveRouterViews(O.filter(g=>!(g instanceof Array)&&!g.path),!1,w.children,s,o,i,a,f,c,u,h?h[_].children={}:null))})}updateRoute(e){this.updateRouteMeta(e),this.updateRouteProps(e),this.updateRouteKeys(e)}updateRouteMeta(e){const r=e.meta={};e._metaSetters.forEach(n=>Object.assign(r,n instanceof Function?n(e):n))}updateRouteProps(e){e._propSetters.forEach(r=>r(e))}updateRouteKeys(e){e._keySetters.forEach(r=>r(e))}setState(e){this.current&&(Object.assign(this.current.state,e),this.mode==="client"&&history.replaceState({...this.current.state,__position__:history.state.__position__},""),this.updateRoute(this.current),this.emit("update",this.current))}push(e){this.handle(e).then(r=>{this.mode==="client"&&r&&history.pushState({...r.route.state,__position__:history.state.__position__+1},"",r.route.href)})}replace(e){this.handle(e).then(r=>{this.mode==="client"&&r&&history.replaceState({...r.route.state,__position__:history.state.__position__},"",r.route.href)})}onPopState(e){this.handle({path:location.href,state:{...history.state,...e}}).then(r=>{var n;r?history.replaceState({...r.route.state,__position__:((n=history.state)==null?void 0:n.__position__)||history.length},"",r.route.href):this.silentGo(this.current.state.__position__-history.state.__position__)})}silentGo(e,r){const n=()=>{window.removeEventListener("popstate",n),window.addEventListener("popstate",this.onPopStateWrapper),r&&r()};window.removeEventListener("popstate",this.onPopStateWrapper),window.addEventListener("popstate",n),history.go(e)}go(e,r){r?this.silentGo(e,()=>this.onPopState(r)):history.go(e)}back(e){return this.go(-1,e)}forward(e){return this.go(1,e)}on(e,r){var n;e==="beforeChange"?this.beforeChangeHooks.push(r):e==="beforeCurrentRouteLeave"?(n=this.current)==null||n._beforeLeaveHooks.push(r):e==="update"?this.updateHooks.push(r):e==="afterChange"&&this.afterChangeHooks.push(r)}off(e,r){e==="beforeChange"?this.beforeChangeHooks=this.beforeChangeHooks.filter(n=>n!==r):e==="beforeCurrentRouteLeave"&&this.current?this.current._beforeLeaveHooks=this.current._beforeLeaveHooks.filter(n=>n!==r):e==="update"?this.updateHooks=this.updateHooks.filter(n=>n!==r):e==="afterChange"&&(this.afterChangeHooks=this.afterChangeHooks.filter(n=>n!==r))}once(e,r){const n=(...s)=>{this.off(e,n),r(...s)};this.on(e,n)}emit(e,r,n){e==="update"?this.updateHooks.forEach(s=>s(r)):e==="afterChange"&&this.afterChangeHooks.forEach(s=>s(r,n))}}function lr(t){let e,r;return e=new Jt({}),{c(){M(e.$$.fragment)},l(n){G(e.$$.fragment,n)},m(n,s){U(e,n,s),r=!0},p:Z,i(n){r||(S(e.$$.fragment,n),r=!0)},o(n){E(e.$$.fragment,n),r=!1},d(n){D(e,n)}}}function hr(t,e,r){let{router:n}=e,{ssrState:s}=e;const o=je(),i=je();ye(gt,n),ye(mt,{subscribe:i.subscribe}),ye(Le,{subscribe:o.subscribe});let a=!1;n.on("update",f),n.current&&f(n.current);function f(c){s&&(a?(Object.keys(s).forEach(u=>delete s[u]),r(0,s=null)):a=!0),o.set({routerViews:c._routerViews,ssrState:s}),i.set(c)}return t.$$set=c=>{"router"in c&&r(1,n=c.router),"ssrState"in c&&r(0,s=c.ssrState)},[s,n]}class pr extends ae{constructor(e){super(),ie(this,e,hr,lr,Q,{router:1,ssrState:0})}}function dr(){this.__data__=[],this.size=0}function wt(t,e){return t===e||t!==t&&e!==e}function Te(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}var _r=Array.prototype,gr=_r.splice;function mr(t){var e=this.__data__,r=Te(e,t);if(r<0)return!1;var n=e.length-1;return r==n?e.pop():gr.call(e,r,1),--this.size,!0}function yr(t){var e=this.__data__,r=Te(e,t);return r<0?void 0:e[r][1]}function br(t){return Te(this.__data__,t)>-1}function vr(t,e){var r=this.__data__,n=Te(r,t);return n<0?(++this.size,r.push([t,e])):r[n][1]=e,this}function B(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}B.prototype.clear=dr;B.prototype.delete=mr;B.prototype.get=yr;B.prototype.has=br;B.prototype.set=vr;function $r(){this.__data__=new B,this.size=0}function wr(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}function Tr(t){return this.__data__.get(t)}function Ar(t){return this.__data__.has(t)}var Sr=typeof global=="object"&&global&&global.Object===Object&&global;const Tt=Sr;var Er=typeof self=="object"&&self&&self.Object===Object&&self,Or=Tt||Er||Function("return this")();const K=Or;var Pr=K.Symbol;const oe=Pr;var At=Object.prototype,Rr=At.hasOwnProperty,Cr=At.toString,ue=oe?oe.toStringTag:void 0;function jr(t){var e=Rr.call(t,ue),r=t[ue];try{t[ue]=void 0;var n=!0}catch{}var s=Cr.call(t);return n&&(e?t[ue]=r:delete t[ue]),s}var Lr=Object.prototype,Ir=Lr.toString;function Hr(t){return Ir.call(t)}var Nr="[object Null]",Mr="[object Undefined]",qe=oe?oe.toStringTag:void 0;function _e(t){return t==null?t===void 0?Mr:Nr:qe&&qe in Object(t)?jr(t):Hr(t)}function St(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var Ur="[object AsyncFunction]",Dr="[object Function]",xr="[object GeneratorFunction]",Fr="[object Proxy]";function Et(t){if(!St(t))return!1;var e=_e(t);return e==Dr||e==xr||e==Ur||e==Fr}var Gr=K["__core-js_shared__"];const Oe=Gr;var We=function(){var t=/[^.]+$/.exec(Oe&&Oe.keys&&Oe.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}();function kr(t){return!!We&&We in t}var zr=Function.prototype,Br=zr.toString;function te(t){if(t!=null){try{return Br.call(t)}catch{}try{return t+""}catch{}}return""}var Kr=/[\\^$.*+?()[\]{}|]/g,qr=/^\[object .+?Constructor\]$/,Wr=Function.prototype,Xr=Object.prototype,Qr=Wr.toString,Vr=Xr.hasOwnProperty,Jr=RegExp("^"+Qr.call(Vr).replace(Kr,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function Yr(t){if(!St(t)||kr(t))return!1;var e=Et(t)?Jr:qr;return e.test(te(t))}function Zr(t,e){return t==null?void 0:t[e]}function ce(t,e){var r=Zr(t,e);return Yr(r)?r:void 0}var en=ce(K,"Map");const he=en;var tn=ce(Object,"create");const pe=tn;function rn(){this.__data__=pe?pe(null):{},this.size=0}function nn(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}var sn="__lodash_hash_undefined__",on=Object.prototype,an=on.hasOwnProperty;function cn(t){var e=this.__data__;if(pe){var r=e[t];return r===sn?void 0:r}return an.call(e,t)?e[t]:void 0}var fn=Object.prototype,un=fn.hasOwnProperty;function ln(t){var e=this.__data__;return pe?e[t]!==void 0:un.call(e,t)}var hn="__lodash_hash_undefined__";function pn(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=pe&&e===void 0?hn:e,this}function ee(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}ee.prototype.clear=rn;ee.prototype.delete=nn;ee.prototype.get=cn;ee.prototype.has=ln;ee.prototype.set=pn;function dn(){this.size=0,this.__data__={hash:new ee,map:new(he||B),string:new ee}}function _n(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function Ae(t,e){var r=t.__data__;return _n(e)?r[typeof e=="string"?"string":"hash"]:r.map}function gn(t){var e=Ae(this,t).delete(t);return this.size-=e?1:0,e}function mn(t){return Ae(this,t).get(t)}function yn(t){return Ae(this,t).has(t)}function bn(t,e){var r=Ae(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this}function re(t){var e=-1,r=t==null?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}re.prototype.clear=dn;re.prototype.delete=gn;re.prototype.get=mn;re.prototype.has=yn;re.prototype.set=bn;var vn=200;function $n(t,e){var r=this.__data__;if(r instanceof B){var n=r.__data__;if(!he||n.length<vn-1)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new re(n)}return r.set(t,e),this.size=r.size,this}function X(t){var e=this.__data__=new B(t);this.size=e.size}X.prototype.clear=$r;X.prototype.delete=wr;X.prototype.get=Tr;X.prototype.has=Ar;X.prototype.set=$n;var wn="__lodash_hash_undefined__";function Tn(t){return this.__data__.set(t,wn),this}function An(t){return this.__data__.has(t)}function be(t){var e=-1,r=t==null?0:t.length;for(this.__data__=new re;++e<r;)this.add(t[e])}be.prototype.add=be.prototype.push=Tn;be.prototype.has=An;function Sn(t,e){for(var r=-1,n=t==null?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function En(t,e){return t.has(e)}var On=1,Pn=2;function Ot(t,e,r,n,s,o){var i=r&On,a=t.length,f=e.length;if(a!=f&&!(i&&f>a))return!1;var c=o.get(t),u=o.get(e);if(c&&u)return c==e&&u==t;var h=-1,l=!0,_=r&Pn?new be:void 0;for(o.set(t,e),o.set(e,t);++h<a;){var p=t[h],y=e[h];if(n)var d=i?n(y,p,h,e,t,o):n(p,y,h,t,e,o);if(d!==void 0){if(d)continue;l=!1;break}if(_){if(!Sn(e,function($,A){if(!En(_,A)&&(p===$||s(p,$,r,n,o)))return _.push(A)})){l=!1;break}}else if(!(p===y||s(p,y,r,n,o))){l=!1;break}}return o.delete(t),o.delete(e),l}var Rn=K.Uint8Array;const Xe=Rn;function Cn(t){var e=-1,r=Array(t.size);return t.forEach(function(n,s){r[++e]=[s,n]}),r}function jn(t){var e=-1,r=Array(t.size);return t.forEach(function(n){r[++e]=n}),r}var Ln=1,In=2,Hn="[object Boolean]",Nn="[object Date]",Mn="[object Error]",Un="[object Map]",Dn="[object Number]",xn="[object RegExp]",Fn="[object Set]",Gn="[object String]",kn="[object Symbol]",zn="[object ArrayBuffer]",Bn="[object DataView]",Qe=oe?oe.prototype:void 0,Pe=Qe?Qe.valueOf:void 0;function Kn(t,e,r,n,s,o,i){switch(r){case Bn:if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case zn:return!(t.byteLength!=e.byteLength||!o(new Xe(t),new Xe(e)));case Hn:case Nn:case Dn:return wt(+t,+e);case Mn:return t.name==e.name&&t.message==e.message;case xn:case Gn:return t==e+"";case Un:var a=Cn;case Fn:var f=n&Ln;if(a||(a=jn),t.size!=e.size&&!f)return!1;var c=i.get(t);if(c)return c==e;n|=In,i.set(t,e);var u=Ot(a(t),a(e),n,s,o,i);return i.delete(t),u;case kn:if(Pe)return Pe.call(t)==Pe.call(e)}return!1}function qn(t,e){for(var r=-1,n=e.length,s=t.length;++r<n;)t[s+r]=e[r];return t}var Wn=Array.isArray;const ve=Wn;function Xn(t,e,r){var n=e(t);return ve(t)?n:qn(n,r(t))}function Qn(t,e){for(var r=-1,n=t==null?0:t.length,s=0,o=[];++r<n;){var i=t[r];e(i,r,t)&&(o[s++]=i)}return o}function Vn(){return[]}var Jn=Object.prototype,Yn=Jn.propertyIsEnumerable,Ve=Object.getOwnPropertySymbols,Zn=Ve?function(t){return t==null?[]:(t=Object(t),Qn(Ve(t),function(e){return Yn.call(t,e)}))}:Vn;const es=Zn;function ts(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}function de(t){return t!=null&&typeof t=="object"}var rs="[object Arguments]";function Je(t){return de(t)&&_e(t)==rs}var Pt=Object.prototype,ns=Pt.hasOwnProperty,ss=Pt.propertyIsEnumerable,os=Je(function(){return arguments}())?Je:function(t){return de(t)&&ns.call(t,"callee")&&!ss.call(t,"callee")};const as=os;function is(){return!1}var Rt=typeof k=="object"&&k&&!k.nodeType&&k,Ye=Rt&&typeof z=="object"&&z&&!z.nodeType&&z,cs=Ye&&Ye.exports===Rt,Ze=cs?K.Buffer:void 0,fs=Ze?Ze.isBuffer:void 0,us=fs||is;const Ie=us;var ls=9007199254740991,hs=/^(?:0|[1-9]\d*)$/;function ps(t,e){var r=typeof t;return e=e==null?ls:e,!!e&&(r=="number"||r!="symbol"&&hs.test(t))&&t>-1&&t%1==0&&t<e}var ds=9007199254740991;function Ct(t){return typeof t=="number"&&t>-1&&t%1==0&&t<=ds}var _s="[object Arguments]",gs="[object Array]",ms="[object Boolean]",ys="[object Date]",bs="[object Error]",vs="[object Function]",$s="[object Map]",ws="[object Number]",Ts="[object Object]",As="[object RegExp]",Ss="[object Set]",Es="[object String]",Os="[object WeakMap]",Ps="[object ArrayBuffer]",Rs="[object DataView]",Cs="[object Float32Array]",js="[object Float64Array]",Ls="[object Int8Array]",Is="[object Int16Array]",Hs="[object Int32Array]",Ns="[object Uint8Array]",Ms="[object Uint8ClampedArray]",Us="[object Uint16Array]",Ds="[object Uint32Array]",v={};v[Cs]=v[js]=v[Ls]=v[Is]=v[Hs]=v[Ns]=v[Ms]=v[Us]=v[Ds]=!0;v[_s]=v[gs]=v[Ps]=v[ms]=v[Rs]=v[ys]=v[bs]=v[vs]=v[$s]=v[ws]=v[Ts]=v[As]=v[Ss]=v[Es]=v[Os]=!1;function xs(t){return de(t)&&Ct(t.length)&&!!v[_e(t)]}function Fs(t){return function(e){return t(e)}}var jt=typeof k=="object"&&k&&!k.nodeType&&k,le=jt&&typeof z=="object"&&z&&!z.nodeType&&z,Gs=le&&le.exports===jt,Re=Gs&&Tt.process,ks=function(){try{var t=le&&le.require&&le.require("util").types;return t||Re&&Re.binding&&Re.binding("util")}catch{}}();const et=ks;var tt=et&&et.isTypedArray,zs=tt?Fs(tt):xs;const Lt=zs;var Bs=Object.prototype,Ks=Bs.hasOwnProperty;function qs(t,e){var r=ve(t),n=!r&&as(t),s=!r&&!n&&Ie(t),o=!r&&!n&&!s&&Lt(t),i=r||n||s||o,a=i?ts(t.length,String):[],f=a.length;for(var c in t)(e||Ks.call(t,c))&&!(i&&(c=="length"||s&&(c=="offset"||c=="parent")||o&&(c=="buffer"||c=="byteLength"||c=="byteOffset")||ps(c,f)))&&a.push(c);return a}var Ws=Object.prototype;function Xs(t){var e=t&&t.constructor,r=typeof e=="function"&&e.prototype||Ws;return t===r}function Qs(t,e){return function(r){return t(e(r))}}var Vs=Qs(Object.keys,Object);const Js=Vs;var Ys=Object.prototype,Zs=Ys.hasOwnProperty;function eo(t){if(!Xs(t))return Js(t);var e=[];for(var r in Object(t))Zs.call(t,r)&&r!="constructor"&&e.push(r);return e}function to(t){return t!=null&&Ct(t.length)&&!Et(t)}function ro(t){return to(t)?qs(t):eo(t)}function rt(t){return Xn(t,ro,es)}var no=1,so=Object.prototype,oo=so.hasOwnProperty;function ao(t,e,r,n,s,o){var i=r&no,a=rt(t),f=a.length,c=rt(e),u=c.length;if(f!=u&&!i)return!1;for(var h=f;h--;){var l=a[h];if(!(i?l in e:oo.call(e,l)))return!1}var _=o.get(t),p=o.get(e);if(_&&p)return _==e&&p==t;var y=!0;o.set(t,e),o.set(e,t);for(var d=i;++h<f;){l=a[h];var $=t[l],A=e[l];if(n)var x=i?n(A,$,l,e,t,o):n($,A,l,t,e,o);if(!(x===void 0?$===A||s($,A,r,n,o):x)){y=!1;break}d||(d=l=="constructor")}if(y&&!d){var O=t.constructor,w=e.constructor;O!=w&&"constructor"in t&&"constructor"in e&&!(typeof O=="function"&&O instanceof O&&typeof w=="function"&&w instanceof w)&&(y=!1)}return o.delete(t),o.delete(e),y}var io=ce(K,"DataView");const He=io;var co=ce(K,"Promise");const Ne=co;var fo=ce(K,"Set");const Me=fo;var uo=ce(K,"WeakMap");const Ue=uo;var nt="[object Map]",lo="[object Object]",st="[object Promise]",ot="[object Set]",at="[object WeakMap]",it="[object DataView]",ho=te(He),po=te(he),_o=te(Ne),go=te(Me),mo=te(Ue),Y=_e;(He&&Y(new He(new ArrayBuffer(1)))!=it||he&&Y(new he)!=nt||Ne&&Y(Ne.resolve())!=st||Me&&Y(new Me)!=ot||Ue&&Y(new Ue)!=at)&&(Y=function(t){var e=_e(t),r=e==lo?t.constructor:void 0,n=r?te(r):"";if(n)switch(n){case ho:return it;case po:return nt;case _o:return st;case go:return ot;case mo:return at}return e});const ct=Y;var yo=1,ft="[object Arguments]",ut="[object Array]",me="[object Object]",bo=Object.prototype,lt=bo.hasOwnProperty;function vo(t,e,r,n,s,o){var i=ve(t),a=ve(e),f=i?ut:ct(t),c=a?ut:ct(e);f=f==ft?me:f,c=c==ft?me:c;var u=f==me,h=c==me,l=f==c;if(l&&Ie(t)){if(!Ie(e))return!1;i=!0,u=!1}if(l&&!u)return o||(o=new X),i||Lt(t)?Ot(t,e,r,n,s,o):Kn(t,e,f,r,n,s,o);if(!(r&yo)){var _=u&&lt.call(t,"__wrapped__"),p=h&&lt.call(e,"__wrapped__");if(_||p){var y=_?t.value():t,d=p?e.value():e;return o||(o=new X),s(y,d,r,n,o)}}return l?(o||(o=new X),ao(t,e,r,n,s,o)):!1}function It(t,e,r,n,s){return t===e?!0:t==null||e==null||!de(t)&&!de(e)?t!==t&&e!==e:vo(t,e,r,n,It,s)}function $o(t,e){return It(t,e)}function wo(t){let e,r,n,s,o,i;const a=t[10].default,f=ht(a,t,t[9],null);return{c(){e=P("a"),f&&f.c(),this.h()},l(c){e=R(c,"A",{href:!0,class:!0,style:!0});var u=C(e);f&&f.l(u),u.forEach(m),this.h()},h(){F(e,"href",r=t[2].href),F(e,"class",n="router-link "+t[0]),F(e,"style",t[1]),Fe(e,"router-link-active",t[3])},m(c,u){I(c,e,u),f&&f.m(e,null),s=!0,o||(i=[Ge(e,"click",t[5]),Ge(e,"click",t[11])],o=!0)},p(c,[u]){f&&f.p&&(!s||u&512)&&pt(f,a,c,c[9],s?_t(a,c[9],u,null):dt(c[9]),null),(!s||u&4&&r!==(r=c[2].href))&&F(e,"href",r),(!s||u&1&&n!==(n="router-link "+c[0]))&&F(e,"class",n),(!s||u&2)&&F(e,"style",c[1]),u&9&&Fe(e,"router-link-active",c[3])},i(c){s||(S(f,c),s=!0)},o(c){E(f,c),s=!1},d(c){c&&m(e),f&&f.d(c),o=!1,Gt(i)}}}function To(t,e,r){let n,s,o,{$$slots:i={},$$scope:a}=e,{class:f=""}=e,{style:c=""}=e,{to:u}=e,{replace:h=!1}=e;const l=Ce(gt),_=Ce(mt);kt(t,_,d=>r(8,o=d));function p(d){d.preventDefault();const $=o;n.href===$.href&&$o({...n.state,__position__:null},{...$.state,__position__:null})||(h?l.replace(u):l.push(u))}function y(d){zt.call(this,t,d)}return t.$$set=d=>{"class"in d&&r(0,f=d.class),"style"in d&&r(1,c=d.style),"to"in d&&r(6,u=d.to),"replace"in d&&r(7,h=d.replace),"$$scope"in d&&r(9,a=d.$$scope)},t.$$.update=()=>{t.$$.dirty&64&&r(2,n=l.parseLocation(u)),t.$$.dirty&260&&r(3,s=n.path===o.path)},[f,c,n,s,_,p,u,h,o,a,i,y]}class Ht extends ae{constructor(e){super(),ie(this,e,To,wo,Q,{class:0,style:1,to:6,replace:7})}}function Ao(t){let e;return{c(){e=j("Home")},l(r){e=L(r,"Home")},m(r,n){I(r,e,n)},d(r){r&&m(e)}}}function So(t){let e,r,n,s,o,i,a,f,c,u;return c=new Ht({props:{to:"..",$$slots:{default:[Ao]},$$scope:{ctx:t}}}),{c(){e=P("main"),r=P("h1"),n=j("This page is completely static."),s=q(),o=P("section"),i=j(`An since it does not contain any interactive islands, no JavaScript is
    shipped to the browser. Async data: `),a=j(t[0]),f=q(),M(c.$$.fragment)},l(h){e=R(h,"MAIN",{});var l=C(e);r=R(l,"H1",{});var _=C(r);n=L(_,"This page is completely static."),_.forEach(m),s=W(l),o=R(l,"SECTION",{});var p=C(o);i=L(p,`An since it does not contain any interactive islands, no JavaScript is
    shipped to the browser. Async data: `),a=L(p,t[0]),p.forEach(m),f=W(l),G(c.$$.fragment,l),l.forEach(m)},m(h,l){I(h,e,l),b(e,r),b(r,n),b(e,s),b(e,o),b(o,i),b(o,a),b(e,f),U(c,e,null),u=!0},p(h,[l]){(!u||l&1)&&Bt(a,h[0]);const _={};l&2&&(_.$$scope={dirty:l,ctx:h}),c.$set(_)},i(h){u||(S(c.$$.fragment,h),u=!0)},o(h){E(c.$$.fragment,h),u=!1},d(h){h&&m(e),D(c)}}}async function Eo(t,e,r){return{ssrState:await Nt()}}function Nt(){return new Promise(t=>{setTimeout(()=>t("loaded"),0)})}function Oo(t,e,r){let{ssrState:n}=e;return Kt(async()=>{r(0,n=await Nt())}),t.$$set=s=>{"ssrState"in s&&r(0,n=s.ssrState)},[n]}class Po extends ae{constructor(e){super(),ie(this,e,Oo,So,Q,{ssrState:0})}}const Ro=Object.freeze(Object.defineProperty({__proto__:null,default:Po,load:Eo},Symbol.toStringTag,{value:"Module"}));function Co(t){let e,r;const n=t[1].default,s=ht(n,t,t[0],null);return{c(){e=P("div"),s&&s.c(),this.h()},l(o){e=R(o,"DIV",{class:!0});var i=C(e);s&&s.l(i),i.forEach(m),this.h()},h(){F(e,"class","box")},m(o,i){I(o,e,i),s&&s.m(e,null),r=!0},p(o,[i]){s&&s.p&&(!r||i&1)&&pt(s,n,o,o[0],r?_t(n,o[0],i,null):dt(o[0]),null)},i(o){r||(S(s,o),r=!0)},o(o){E(s,o),r=!1},d(o){o&&m(e),s&&s.d(o)}}}function jo(t,e,r){let{$$slots:n={},$$scope:s}=e;return console.log("Rendering ServerContent. This should only happen during build or in SPA mode."),t.$$set=o=>{"$$scope"in o&&r(0,s=o.$$scope)},[s,n]}class Lo extends ae{constructor(e){super(),ie(this,e,jo,Co,Q,{})}}function Io(t){let e,r;return{c(){e=P("span"),r=j("Click to expand"),this.h()},l(n){e=R(n,"SPAN",{slot:!0});var s=C(e);r=L(s,"Click to expand"),s.forEach(m),this.h()},h(){F(e,"slot","title")},m(n,s){I(n,e,s),b(e,r)},p:Z,d(n){n&&m(e)}}}function Ho(t){let e,r,n,s;return{c(){e=j("The code for "),r=P("code"),n=j("ServerContent"),s=j(" won't show up in the client bundle.")},l(o){e=L(o,"The code for "),r=R(o,"CODE",{});var i=C(r);n=L(i,"ServerContent"),i.forEach(m),s=L(o," won't show up in the client bundle.")},m(o,i){I(o,e,i),I(o,r,i),b(r,n),I(o,s,i)},p:Z,d(o){o&&m(e),o&&m(r),o&&m(s)}}}function No(t){let e,r,n;return r=new Lo({props:{$$slots:{default:[Ho]},$$scope:{ctx:t}}}),{c(){e=P("div"),M(r.$$.fragment),this.h()},l(s){e=R(s,"DIV",{slot:!0});var o=C(e);G(r.$$.fragment,o),o.forEach(m),this.h()},h(){F(e,"slot","body")},m(s,o){I(s,e,o),U(r,e,null),n=!0},p(s,o){const i={};o&1&&(i.$$scope={dirty:o,ctx:s}),r.$set(i)},i(s){n||(S(r.$$.fragment,s),n=!0)},o(s){E(r.$$.fragment,s),n=!1},d(s){s&&m(e),D(r)}}}function Mo(t){let e;return{c(){e=j("Link to another page")},l(r){e=L(r,"Link to another page")},m(r,n){I(r,e,n)},d(r){r&&m(e)}}}function Uo(t){let e,r,n,s,o,i,a,f,c,u,h,l,_,p,y,d,$,A,x,O,w,H,V;return l=new ke({}),d=new ke({props:{counter:100}}),A=new qt({props:{$$slots:{body:[No],title:[Io]},$$scope:{ctx:t}}}),O=new Wt({}),H=new Ht({props:{to:"about",$$slots:{default:[Mo]},$$scope:{ctx:t}}}),{c(){e=P("main"),r=P("h1"),n=j("Partial hydration with Svelte and "),s=P("i"),o=j("Capri"),i=q(),a=P("section"),f=j("This page is static, but contains some dynamic parts."),c=q(),u=P("section"),h=j("Here is a simple counter: "),M(l.$$.fragment),_=q(),p=P("section"),y=j("And here is another one, independent from the one above: "),M(d.$$.fragment),$=q(),M(A.$$.fragment),x=q(),M(O.$$.fragment),w=q(),M(H.$$.fragment)},l(T){e=R(T,"MAIN",{});var g=C(e);r=R(g,"H1",{});var N=C(r);n=L(N,"Partial hydration with Svelte and "),s=R(N,"I",{});var J=C(s);o=L(J,"Capri"),J.forEach(m),N.forEach(m),i=W(g),a=R(g,"SECTION",{});var ge=C(a);f=L(ge,"This page is static, but contains some dynamic parts."),ge.forEach(m),c=W(g),u=R(g,"SECTION",{});var fe=C(u);h=L(fe,"Here is a simple counter: "),G(l.$$.fragment,fe),fe.forEach(m),_=W(g),p=R(g,"SECTION",{});var Se=C(p);y=L(Se,"And here is another one, independent from the one above: "),G(d.$$.fragment,Se),Se.forEach(m),$=W(g),G(A.$$.fragment,g),x=W(g),G(O.$$.fragment,g),w=W(g),G(H.$$.fragment,g),g.forEach(m)},m(T,g){I(T,e,g),b(e,r),b(r,n),b(r,s),b(s,o),b(e,i),b(e,a),b(a,f),b(e,c),b(e,u),b(u,h),U(l,u,null),b(e,_),b(e,p),b(p,y),U(d,p,null),b(e,$),U(A,e,null),b(e,x),U(O,e,null),b(e,w),U(H,e,null),V=!0},p(T,[g]){const N={};g&1&&(N.$$scope={dirty:g,ctx:T}),A.$set(N);const J={};g&1&&(J.$$scope={dirty:g,ctx:T}),H.$set(J)},i(T){V||(S(l.$$.fragment,T),S(d.$$.fragment,T),S(A.$$.fragment,T),S(O.$$.fragment,T),S(H.$$.fragment,T),V=!0)},o(T){E(l.$$.fragment,T),E(d.$$.fragment,T),E(A.$$.fragment,T),E(O.$$.fragment,T),E(H.$$.fragment,T),V=!1},d(T){T&&m(e),D(l),D(d),D(A),D(O),D(H)}}}class Do extends ae{constructor(e){super(),ie(this,e,null,Uo,Q,{})}}const xo=Object.freeze(Object.defineProperty({__proto__:null,default:Do},Symbol.toStringTag,{value:"Module"})),Fo=[{path:"/",component:xo},{path:"/about",component:Ro}],Go=new ur({routes:Fo,base:"/capri/svelte/",mode:"client"});new pr({target:document.body,props:{router:Go}})});export default ko();
