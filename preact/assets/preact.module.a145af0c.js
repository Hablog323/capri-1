var P,d,B,Y,S,F,R,D={},j=[],Z=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(t,e){for(var _ in e)t[_]=e[_];return t}function z(t){var e=t.parentNode;e&&e.removeChild(t)}function ee(t,e,_){var r,l,o,s={};for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:s[o]=e[o];if(arguments.length>2&&(s.children=arguments.length>3?P.call(arguments,2):_),typeof t=="function"&&t.defaultProps!=null)for(o in t.defaultProps)s[o]===void 0&&(s[o]=t.defaultProps[o]);return w(t,s,r,l,null)}function w(t,e,_,r,l){var o={type:t,props:e,key:_,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:l==null?++B:l};return l==null&&d.vnode!=null&&d.vnode(o),o}function L(t){return t.children}function T(t,e){this.props=t,this.context=e}function x(t,e){if(e==null)return t.__?x(t.__,t.__.__k.indexOf(t)+1):null;for(var _;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null)return _.__e;return typeof t.type=="function"?x(t):null}function G(t){var e,_;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((_=t.__k[e])!=null&&_.__e!=null){t.__e=t.__c.base=_.__e;break}return G(t)}}function M(t){(!t.__d&&(t.__d=!0)&&S.push(t)&&!E.__r++||F!==d.debounceRendering)&&((F=d.debounceRendering)||setTimeout)(E)}function E(){for(var t;E.__r=S.length;)t=S.sort(function(e,_){return e.__v.__b-_.__v.__b}),S=[],t.some(function(e){var _,r,l,o,s,f;e.__d&&(s=(o=(_=e).__v).__e,(f=_.__P)&&(r=[],(l=k({},o)).__v=o.__v+1,W(f,o,l,_.__n,f.ownerSVGElement!==void 0,o.__h!=null?[s]:null,r,s==null?x(o):s,o.__h),K(r,o),o.__e!=s&&G(o)))})}function V(t,e,_,r,l,o,s,f,p,a){var n,h,c,i,u,b,v,y=r&&r.__k||j,g=y.length;for(_.__k=[],n=0;n<e.length;n++)if((i=_.__k[n]=(i=e[n])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?w(null,i,null,null,i):Array.isArray(i)?w(L,{children:i},null,null,null):i.__b>0?w(i.type,i.props,i.key,null,i.__v):i)!=null){if(i.__=_,i.__b=_.__b+1,(c=y[n])===null||c&&i.key==c.key&&i.type===c.type)y[n]=void 0;else for(h=0;h<g;h++){if((c=y[h])&&i.key==c.key&&i.type===c.type){y[h]=void 0;break}c=null}W(t,i,c=c||D,l,o,s,f,p,a),u=i.__e,(h=i.ref)&&c.ref!=h&&(v||(v=[]),c.ref&&v.push(c.ref,null,i),v.push(h,i.__c||u,i)),u!=null?(b==null&&(b=u),typeof i.type=="function"&&i.__k===c.__k?i.__d=p=q(i,p,t):p=J(t,i,c,y,u,p),typeof _.type=="function"&&(_.__d=p)):p&&c.__e==p&&p.parentNode!=t&&(p=x(c))}for(_.__e=b,n=g;n--;)y[n]!=null&&(typeof _.type=="function"&&y[n].__e!=null&&y[n].__e==_.__d&&(_.__d=x(r,n+1)),X(y[n],y[n]));if(v)for(n=0;n<v.length;n++)Q(v[n],v[++n],v[++n])}function q(t,e,_){for(var r,l=t.__k,o=0;l&&o<l.length;o++)(r=l[o])&&(r.__=t,e=typeof r.type=="function"?q(r,e,_):J(_,r,r,l,r.__e,e));return e}function te(t,e){return e=e||[],t==null||typeof t=="boolean"||(Array.isArray(t)?t.some(function(_){te(_,e)}):e.push(t)),e}function J(t,e,_,r,l,o){var s,f,p;if(e.__d!==void 0)s=e.__d,e.__d=void 0;else if(_==null||l!=o||l.parentNode==null)e:if(o==null||o.parentNode!==t)t.appendChild(l),s=null;else{for(f=o,p=0;(f=f.nextSibling)&&p<r.length;p+=2)if(f==l)break e;t.insertBefore(l,o),s=o}return s!==void 0?s:l.nextSibling}function _e(t,e,_,r,l){var o;for(o in _)o==="children"||o==="key"||o in e||N(t,o,null,_[o],r);for(o in e)l&&typeof e[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||_[o]===e[o]||N(t,o,e[o],_[o],r)}function I(t,e,_){e[0]==="-"?t.setProperty(e,_):t[e]=_==null?"":typeof _!="number"||Z.test(e)?_:_+"px"}function N(t,e,_,r,l){var o;e:if(e==="style")if(typeof _=="string")t.style.cssText=_;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)_&&e in _||I(t.style,e,"");if(_)for(e in _)r&&_[e]===r[e]||I(t.style,e,_[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+o]=_,_?r||t.addEventListener(e,o?$:O,o):t.removeEventListener(e,o?$:O,o);else if(e!=="dangerouslySetInnerHTML"){if(l)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in t)try{t[e]=_==null?"":_;break e}catch{}typeof _=="function"||(_!=null&&(_!==!1||e[0]==="a"&&e[1]==="r")?t.setAttribute(e,_):t.removeAttribute(e))}}function O(t){this.l[t.type+!1](d.event?d.event(t):t)}function $(t){this.l[t.type+!0](d.event?d.event(t):t)}function W(t,e,_,r,l,o,s,f,p){var a,n,h,c,i,u,b,v,y,g,C,H,U,m=e.type;if(e.constructor!==void 0)return null;_.__h!=null&&(p=_.__h,f=e.__e=_.__e,e.__h=null,o=[f]),(a=d.__b)&&a(e);try{e:if(typeof m=="function"){if(v=e.props,y=(a=m.contextType)&&r[a.__c],g=a?y?y.props.value:a.__:r,_.__c?b=(n=e.__c=_.__c).__=n.__E:("prototype"in m&&m.prototype.render?e.__c=n=new m(v,g):(e.__c=n=new T(v,g),n.constructor=m,n.render=oe),y&&y.sub(n),n.props=v,n.state||(n.state={}),n.context=g,n.__n=r,h=n.__d=!0,n.__h=[]),n.__s==null&&(n.__s=n.state),m.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=k({},n.__s)),k(n.__s,m.getDerivedStateFromProps(v,n.__s))),c=n.props,i=n.state,h)m.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(m.getDerivedStateFromProps==null&&v!==c&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(v,g),!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(v,n.__s,g)===!1||e.__v===_.__v){n.props=v,n.state=n.__s,e.__v!==_.__v&&(n.__d=!1),n.__v=e,e.__e=_.__e,e.__k=_.__k,e.__k.forEach(function(A){A&&(A.__=e)}),n.__h.length&&s.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(v,n.__s,g),n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(c,i,u)})}if(n.context=g,n.props=v,n.__v=e,n.__P=t,C=d.__r,H=0,"prototype"in m&&m.prototype.render)n.state=n.__s,n.__d=!1,C&&C(e),a=n.render(n.props,n.state,n.context);else do n.__d=!1,C&&C(e),a=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++H<25);n.state=n.__s,n.getChildContext!=null&&(r=k(k({},r),n.getChildContext())),h||n.getSnapshotBeforeUpdate==null||(u=n.getSnapshotBeforeUpdate(c,i)),U=a!=null&&a.type===L&&a.key==null?a.props.children:a,V(t,Array.isArray(U)?U:[U],e,_,r,l,o,s,f,p),n.base=e.__e,e.__h=null,n.__h.length&&s.push(n),b&&(n.__E=n.__=null),n.__e=!1}else o==null&&e.__v===_.__v?(e.__k=_.__k,e.__e=_.__e):e.__e=ne(_.__e,e,_,r,l,o,s,p);(a=d.diffed)&&a(e)}catch(A){e.__v=null,(p||o!=null)&&(e.__e=f,e.__h=!!p,o[o.indexOf(f)]=null),d.__e(A,e,_)}}function K(t,e){d.__c&&d.__c(e,t),t.some(function(_){try{t=_.__h,_.__h=[],t.some(function(r){r.call(_)})}catch(r){d.__e(r,_.__v)}})}function ne(t,e,_,r,l,o,s,f){var p,a,n,h=_.props,c=e.props,i=e.type,u=0;if(i==="svg"&&(l=!0),o!=null){for(;u<o.length;u++)if((p=o[u])&&"setAttribute"in p==!!i&&(i?p.localName===i:p.nodeType===3)){t=p,o[u]=null;break}}if(t==null){if(i===null)return document.createTextNode(c);t=l?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,c.is&&c),o=null,f=!1}if(i===null)h===c||f&&t.data===c||(t.data=c);else{if(o=o&&P.call(t.childNodes),a=(h=_.props||D).dangerouslySetInnerHTML,n=c.dangerouslySetInnerHTML,!f){if(o!=null)for(h={},u=0;u<t.attributes.length;u++)h[t.attributes[u].name]=t.attributes[u].value;(n||a)&&(n&&(a&&n.__html==a.__html||n.__html===t.innerHTML)||(t.innerHTML=n&&n.__html||""))}if(_e(t,c,h,l,f),n)e.__k=[];else if(u=e.props.children,V(t,Array.isArray(u)?u:[u],e,_,r,l&&i!=="foreignObject",o,s,o?o[0]:_.__k&&x(_,0),f),o!=null)for(u=o.length;u--;)o[u]!=null&&z(o[u]);f||("value"in c&&(u=c.value)!==void 0&&(u!==t.value||i==="progress"&&!u||i==="option"&&u!==h.value)&&N(t,"value",u,h.value,!1),"checked"in c&&(u=c.checked)!==void 0&&u!==t.checked&&N(t,"checked",u,h.checked,!1))}return t}function Q(t,e,_){try{typeof t=="function"?t(e):t.current=e}catch(r){d.__e(r,_)}}function X(t,e,_){var r,l;if(d.unmount&&d.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||Q(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,e)}r.base=r.__P=null}if(r=t.__k)for(l=0;l<r.length;l++)r[l]&&X(r[l],e,typeof t.type!="function");_||t.__e==null||z(t.__e),t.__e=t.__d=void 0}function oe(t,e,_){return this.constructor(t,_)}function re(t,e,_){var r,l,o;d.__&&d.__(t,e),l=(r=typeof _=="function")?null:_&&_.__k||e.__k,o=[],W(e,t=(!r&&_||e).__k=ee(L,null,[t]),l||D,D,e.ownerSVGElement!==void 0,!r&&_?[_]:l?null:e.firstChild?P.call(e.childNodes):null,o,!r&&_?_:l?l.__e:e.firstChild,r),K(o,t)}function le(t,e){re(t,e,le)}function ie(t,e,_){var r,l,o,s=k({},t.props);for(o in e)o=="key"?r=e[o]:o=="ref"?l=e[o]:s[o]=e[o];return arguments.length>2&&(s.children=arguments.length>3?P.call(arguments,2):_),w(t.type,s,r||t.key,l||t.ref,null)}function se(t,e){var _={__c:e="__cC"+R++,__:t,Consumer:function(r,l){return r.children(l)},Provider:function(r){var l,o;return this.getChildContext||(l=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(s){this.props.value!==s.value&&l.some(M)},this.sub=function(s){l.push(s);var f=s.componentWillUnmount;s.componentWillUnmount=function(){l.splice(l.indexOf(s),1),f&&f.call(s)}}),r.children}};return _.Provider.__=_.Consumer.contextType=_}P=j.slice,d={__e:function(t,e,_,r){for(var l,o,s;e=e.__;)if((l=e.__c)&&!l.__)try{if((o=l.constructor)&&o.getDerivedStateFromError!=null&&(l.setState(o.getDerivedStateFromError(t)),s=l.__d),l.componentDidCatch!=null&&(l.componentDidCatch(t,r||{}),s=l.__d),s)return l.__E=l}catch(f){t=f}throw t}},B=0,Y=function(t){return t!=null&&t.constructor===void 0},T.prototype.setState=function(t,e){var _;_=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof t=="function"&&(t=t(k({},_),this.props)),t&&k(_,t),t!=null&&this.__v&&(e&&this.__h.push(e),M(this))},T.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),M(this))},T.prototype.render=L,S=[],E.__r=0,R=0;export{se as B,re as P,le as S,T as d,ee as h,Y as i,d as l,L as p,ie as q,te as x};
