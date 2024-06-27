(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2710],{2144:function(e,t,s){Promise.resolve().then(s.bind(s,6243))},6243:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return f}});var r=s(7437),a=s(2265),i=s(5478),o=s(5925),n=s(7028),l=s(2037),c=s(4086),d=s(1866),u=s(1396),p=s.n(u),m=s(1112);function f(){let[e,t]=(0,a.useState)(!1),[s,u]=(0,a.useState)([]),[f,h]=(0,a.useState)([]),[g,x]=(0,a.useState)([]),b=(0,m.Z)(e=>e.user),y=JSON.parse(b);return(0,a.useEffect)(()=>{{let e=localStorage.getItem("user"),s=JSON.parse(e);t(!0);let r=(0,c.IO)((0,c.hJ)(d.Uc,"user",s.id,"assign_vehicle")),a=(0,c.cf)(r,e=>{let s=[];return e.forEach(e=>{s.push({...e.data(),id:e.id}),console.log(e.id," => ",e.data())}),h(s),u(s),t(!1),()=>a()})}},[]),(0,r.jsxs)(r.Fragment,{children:[e?(0,r.jsx)("div",{className:"loading"}):(0,r.jsx)("span",{}),(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(l.x7,{}),(0,r.jsxs)("div",{className:"content-wrapper",children:[(0,r.jsxs)("div",{className:"content-header",children:[(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row mb-2",children:[(0,r.jsx)("div",{className:"col-sm-9",children:(0,r.jsxs)("h1",{className:"m-0",children:[" Assign Vehicle  List",(()=>{if(y&&1==y.role)return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(p(),{href:"/assign/owner/assign_vehicle_user.html",className:"btn btn-success ml-3 mt-3",children:"Assign Vehicle To User"})})})()]})}),(0,r.jsx)("div",{className:"col-sm-3",children:(0,r.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)("a",{href:"#",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:"Vehicles"})]})})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:" Vehicle Name"}),(0,r.jsx)("th",{scope:"col",children:"Vehicle Color"}),(0,r.jsx)("th",{scope:"col",children:"RF Key"}),(0,r.jsx)("th",{scope:"col",children:"Bluetooth Key"})]})}),(0,r.jsx)("tbody",{children:s.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:e.vehicle_color}),(0,r.jsx)("td",{children:e.vehicle_id}),(0,r.jsx)("td",{children:e.bluetooth_key})]},e.id))})]})})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(n.Z,{})]})]})}},7028:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(7437);s(2265);var a=s(8475),i=s.n(a);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("footer",{className:"main-footer",children:[(0,r.jsxs)("strong",{children:["Copyright \xa9 2023 ",(0,r.jsx)("a",{href:"#"}),"."]}),"All rights reserved.",(0,r.jsx)("div",{className:"float-right d-none d-sm-inline-block"})]}),(0,r.jsx)(i(),{src:"../js/jquery.min.js"}),(0,r.jsx)(i(),{src:"../js/bootstrap.bundle.min.js"}),(0,r.jsx)(i(),{src:"../js/adminlte.js"}),(0,r.jsx)(i(),{src:"../js/Chart.min.js"}),(0,r.jsx)(i(),{src:"../js/summernote-bs4.min.js"}),(0,r.jsx)(i(),{src:"../js/demo.js"}),(0,r.jsx)(i(),{src:"../js/dashboard3.js"})]})}},8475:function(e,t,s){e.exports=s(3994)},2037:function(e,t,s){"use strict";let r,a;s.d(t,{x7:function(){return eu},ZP:function(){return ep}});var i,o=s(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let s="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(i,o):i+":"+o+";")}return s+(t&&a?t+"{"+a+"}":a)+r},m={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},h=(e,t,s,r,a)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,s,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(s=t[3].replace(u," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[n]=p(a?{["@keyframes "+n]:t}:t,s?"":"."+n)}let l=s&&m.g?m.g:null;return s&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},g=(e,t,s)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function x(e){let t=this||{},s=e.call?e(t.p):e;return h(s.unshift?s.raw?g(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,y,j,v=x.bind({k:1});function w(e,t){let s=this||{};return function(){let r=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;s.p=Object.assign({theme:y&&y()},n),s.o=/ *go\d+/.test(l),n.className=x.apply(s,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),j&&c[0]&&j(n),b(c,n)}return t?t(a):a}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(r=0,()=>(++r).toString()),$=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},O=new Map,C=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),I({type:4,toastId:e})},1e3);O.set(e,t)},_=e=>{let t=O.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&_(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?A(e,{type:1,toast:s}):A(e,{type:0,toast:s});case 3:let{toastId:r}=t;return r?C(r):e.toasts.forEach(e=>{C(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},S=[],z={toasts:[],pausedAt:void 0},I=e=>{z=A(z,e),S.forEach(e=>{e(z)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,s]=(0,o.useState)(z);(0,o.useEffect)(()=>(S.push(s),()=>{let e=S.indexOf(s);e>-1&&S.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var s,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},F=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),T=e=>(t,s)=>{let r=F(t,e,s);return I({type:2,toast:r}),r.id},H=(e,t)=>T("blank")(e,t);H.error=T("error"),H.success=T("success"),H.loading=T("loading"),H.custom=T("custom"),H.dismiss=e=>{I({type:3,toastId:e})},H.remove=e=>I({type:4,toastId:e}),H.promise=(e,t,s)=>{let r=H.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(H.success(E(t.success,e),{id:r,...s,...null==s?void 0:s.success}),e)).catch(e=>{H.error(E(t.error,e),{id:r,...s,...null==s?void 0:s.error})}),e};var M=(e,t)=>{I({type:1,toast:{id:e,height:t}})},L=()=>{I({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:s}=D(e);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&H.dismiss(t.id);return}return setTimeout(()=>H.dismiss(t.id),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,s]);let r=(0,o.useCallback)(()=>{s&&I({type:6,time:Date.now()})},[s]),a=(0,o.useCallback)((e,s)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=s||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:L,endPause:r,calculateOffset:a}}},Z=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,U=v`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,J=v`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,q=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Z} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${U} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${J} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=v`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,K=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${B} 1s linear infinite;
`,R=v`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=v`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${R} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Y} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Q=w("div")`
  position: absolute;
`,W=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,X=v`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ee=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(ee,null,t):t:"blank"===s?null:o.createElement(W,null,o.createElement(K,{...r}),"loading"!==s&&o.createElement(Q,null,"error"===s?o.createElement(q,{...r}):o.createElement(G,{...r})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,er=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ea=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,ei=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,eo=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(s),er(s)];return{animation:t?`${v(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${v(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=o.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(et,{toast:e}),n=o.createElement(ei,{...e.ariaProps},E(e.message,e));return o.createElement(ea,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,b=i,y=void 0,j=void 0;var el=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let i=o.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:s},a)},ec=(e,t)=>{let s=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...r}},ed=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=V(s);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(s=>{let i=s.position||t,n=ec(i,c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(el,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ed:"",style:n},"custom"===s.type?E(s.message,s):a?a(s):o.createElement(en,{toast:s,position:i}))}))},ep=H}},function(e){e.O(0,[2420,4358,6220,8373,1396,5490,9891,2971,2472,1744],function(){return e(e.s=2144)}),_N_E=e.O()}]);