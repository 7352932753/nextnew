(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7743],{7713:function(e,t,a){Promise.resolve().then(a.bind(a,4822))},7028:function(e,t,a){"use strict";a.d(t,{Z:function(){return o}});var s=a(7437);a(2265);var r=a(8475),i=a.n(r);function o(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("footer",{className:"main-footer",children:[(0,s.jsxs)("strong",{children:["Copyright \xa9 2023 ",(0,s.jsx)("a",{href:"#"}),"."]}),"All rights reserved.",(0,s.jsx)("div",{className:"float-right d-none d-sm-inline-block"})]}),(0,s.jsx)(i(),{src:"../js/jquery.min.js"}),(0,s.jsx)(i(),{src:"../js/bootstrap.bundle.min.js"}),(0,s.jsx)(i(),{src:"../js/adminlte.js"}),(0,s.jsx)(i(),{src:"../js/Chart.min.js"}),(0,s.jsx)(i(),{src:"../js/summernote-bs4.min.js"}),(0,s.jsx)(i(),{src:"../js/demo.js"}),(0,s.jsx)(i(),{src:"../js/dashboard3.js"})]})}},4822:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var s=a(7437),r=a(1866),i=a(4086),o=a(2265),n=a(5478),l=a(5925),c=a(7028),d=a(2037);function u(){let[e,t]=(0,o.useState)(!1),[a,u]=(0,o.useState)(""),[p,m]=(0,o.useState)("");(0,o.useEffect)(()=>{(async()=>{try{t(!0);let e=(0,i.IO)((0,i.hJ)(r.Uc,"privacypolicy")),a=[],s=await (0,i.PL)(e);s.forEach(e=>{a.push({...e.data(),id:e.id})}),u(a[0].title),m(a[0].desc),t(!1)}catch(e){console.log(e)}})()},[]);let f=async()=>{t(!0);let e=(0,i.JU)(r.Uc,"privacypolicy","a5iNFh0TOx3zEPnGscNB");await (0,i.r7)(e,{title:a,desc:p}),t(!1),d.ZP.success("Data is Updated",{position:"top-right",style:{background:"green",color:"#fff",border:"1px solid #713200"}})};return(0,s.jsxs)("div",{className:"wrapper",children:[e?(0,s.jsx)("div",{className:"loading"}):(0,s.jsx)("span",{children:" "}),(0,s.jsx)(n.default,{}),(0,s.jsx)(l.default,{}),(0,s.jsx)(d.x7,{}),(0,s.jsxs)("div",{className:"content-wrapper",children:[(0,s.jsx)("div",{className:"content-header",children:(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsxs)("div",{className:"row mb-2",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsx)("h1",{className:"m-0",children:"Privacy Policy"})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)("a",{href:"#",children:"Home"})}),(0,s.jsx)("li",{className:"breadcrumb-item active",children:"Edit Privacy Policy"})]})})]})})}),(0,s.jsx)("div",{className:"row container",children:(0,s.jsx)("div",{className:"col-md-8",children:(0,s.jsxs)("div",{className:"card card-dark",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("h3",{className:"card-title",children:"Edit Details"})}),(0,s.jsxs)("div",{className:"form-horizontal",children:[(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Title"}),(0,s.jsx)("div",{className:"col-sm-10",children:(0,s.jsx)("input",{type:"text",className:"form-control",defaultValue:a,onChange:e=>u(e.target.value),placeholder:"Title"})})]}),(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{className:"col-sm-2 col-form-label",children:"Description"}),(0,s.jsx)("div",{className:"col-sm-10",children:(0,s.jsx)("textarea",{className:"form-control",value:p,onChange:e=>m(e.target.value),rows:"7"})})]})]}),(0,s.jsx)("div",{className:"card-footer",children:(0,s.jsx)("button",{onClick:()=>f(),className:"btn btn-dark",children:"Update"})})]})]})})})]}),(0,s.jsx)(c.Z,{})]})}},8475:function(e,t,a){e.exports=a(3994)},2037:function(e,t,a){"use strict";let s,r;a.d(t,{x7:function(){return eu},ZP:function(){return ep}});var i,o=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let a="",s="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?a=i+" "+o+";":s+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?s+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=p.p?p.p(i,o):i+":"+o+";")}return a+(t&&r?t+"{"+r+"}":r)+s},m={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,s,r)=>{var i;let o=f(e),n=m[o]||(m[o]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,a,s=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(a=t[3].replace(u," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);m[n]=p(r?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&m.g?m.g:null;return a&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=s?i+t.data:t.data+i),n},x=(e,t,a)=>e.reduce((e,s,r)=>{let i=t[r];if(i&&i.call){let e=i(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+s+(null==i?"":i)},"");function g(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?x(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}g.bind({g:1});let b,y,v,j=g.bind({k:1});function w(e,t){let a=this||{};return function(){let s=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=g.apply(a,s)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(r):r}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(s=0,()=>(++s).toString()),$=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},C=new Map,O=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),I({type:4,toastId:e})},1e3);C.set(e,t)},P=e=>{let t=C.get(e);t&&clearTimeout(t)},z=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&P(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?z(e,{type:1,toast:a}):z(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?O(s):e.toasts.forEach(e=>{O(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},D=[],A={toasts:[],pausedAt:void 0},I=e=>{A=z(A,e),D.forEach(e=>{e(A)})},T={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=(e={})=>{let[t,a]=(0,o.useState)(A);(0,o.useEffect)(()=>(D.push(a),()=>{let e=D.indexOf(a);e>-1&&D.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var a,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||T[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},F=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),S=e=>(t,a)=>{let s=F(t,e,a);return I({type:2,toast:s}),s.id},U=(e,t)=>S("blank")(e,t);U.error=S("error"),U.success=S("success"),U.loading=S("loading"),U.custom=S("custom"),U.dismiss=e=>{I({type:3,toastId:e})},U.remove=e=>I({type:4,toastId:e}),U.promise=(e,t,a)=>{let s=U.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(U.success(E(t.success,e),{id:s,...a,...null==a?void 0:a.success}),e)).catch(e=>{U.error(E(t.error,e),{id:s,...a,...null==a?void 0:a.error})}),e};var H=(e,t)=>{I({type:1,toast:{id:e,height:t}})},M=()=>{I({type:5,time:Date.now()})},L=e=>{let{toasts:t,pausedAt:a}=_(e);(0,o.useEffect)(()=>{if(a)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,a]);let s=(0,o.useCallback)(()=>{a&&I({type:6,time:Date.now()})},[a]),r=(0,o.useCallback)((e,a)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:i}=a||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:M,endPause:s,calculateOffset:r}}},Z=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,q=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,B=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=w("div")`
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
    animation: ${q} 0.15s ease-out forwards;
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
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,G=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${G} 1s linear infinite;
`,V=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Y=j`
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
}`,K=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,X=j`
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
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?o.createElement(ee,null,t):t:"blank"===a?null:o.createElement(W,null,o.createElement(R,{...s}),"loading"!==a&&o.createElement(Q,null,"error"===a?o.createElement(J,{...s}):o.createElement(K,{...s})))},ea=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,es=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=w("div")`
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
`,eo=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),es(a)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=o.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(et,{toast:e}),n=o.createElement(ei,{...e.ariaProps},E(e.message,e));return o.createElement(er,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,b=i,y=void 0,v=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let i=o.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return o.createElement("div",{ref:i,className:t,style:a},r)},ec=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},ed=g`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=L(a);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let i=a.position||t,n=ec(i,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return o.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ed:"",style:n},"custom"===a.type?E(a.message,a):r?r(a):o.createElement(en,{toast:a,position:i}))}))},ep=U}},function(e){e.O(0,[2420,4358,6220,8373,1396,5490,9891,2971,2472,1744],function(){return e(e.s=7713)}),_N_E=e.O()}]);