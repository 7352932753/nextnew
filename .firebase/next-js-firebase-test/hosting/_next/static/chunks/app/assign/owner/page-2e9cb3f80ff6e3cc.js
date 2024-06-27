(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7352],{5669:function(e,t,s){Promise.resolve().then(s.bind(s,5861))},5861:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var r=s(7437),a=s(2265),i=s(5478),o=s(5925),n=s(7028);s(126);var l=s(2037),c=s(4086),d=s(1866);s(9584);var u=s(1396),p=s.n(u);function m(){let[e,t]=(0,a.useState)(!1),[s,u]=(0,a.useState)(""),[m,h]=(0,a.useState)(""),[f,g]=(0,a.useState)(""),[x,b]=(0,a.useState)(""),[y,v]=(0,a.useState)(!1),[j,w]=(0,a.useState)([]),[E,N]=(0,a.useState)([]);return(0,a.useEffect)(()=>{{let e=localStorage.getItem("user"),s=JSON.parse(e);if(1==s.role){t(!0);let e=(0,c.IO)((0,c.hJ)(d.Uc,"vehicle"),(0,c.ar)("owner_assign","==","1")),s=(0,c.cf)(e,e=>{let r=[];return e.forEach(e=>{r.push({...e.data(),id:e.id})}),w(r),N(r),console.log(E),t(!1),()=>s()})}else{t(!0);let e=(0,c.IO)((0,c.hJ)(d.Uc,"vehicle"),(0,c.ar)("owner_id","==",s.user_id),(0,c.ar)("owner_assign","==","1")),r=(0,c.cf)(e,e=>{let s=[];return e.forEach(e=>{s.push({...e.data(),id:e.id})}),w(s),N(s),console.log(E),t(!1),()=>r()})}}},[]),(0,r.jsxs)(r.Fragment,{children:[e?(0,r.jsx)("div",{className:"loading"}):(0,r.jsx)("span",{}),(0,r.jsxs)("div",{className:"wrapper",children:[(0,r.jsx)(i.default,{}),(0,r.jsx)(o.default,{}),(0,r.jsx)(l.x7,{}),(0,r.jsxs)("div",{className:"content-wrapper",children:[(0,r.jsxs)("div",{className:"content-header",children:[(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row mb-2",children:[(0,r.jsx)("div",{className:"col-sm-9",children:(0,r.jsxs)("h1",{className:"m-0",children:[" Vehicles ",(0,r.jsx)(p(),{href:"owner/user.html",className:"btn btn-success ml-3 mt-3",children:"Assign Vehicle"})]})}),(0,r.jsx)("div",{className:"col-sm-3",children:(0,r.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,r.jsx)("li",{className:"breadcrumb-item",children:(0,r.jsx)("a",{href:"#",children:"Home"})}),(0,r.jsx)("li",{className:"breadcrumb-item active",children:"Vehicles"})]})})]})}),(0,r.jsx)("hr",{})]}),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("table",{class:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"Vehicle Name"}),(0,r.jsx)("th",{scope:"col",children:"Owner Id"}),(0,r.jsx)("th",{scope:"col",children:"user ID"}),(0,r.jsx)("th",{scope:"col",children:"RF Key"}),(0,r.jsx)("th",{scope:"col",children:"Vehicle No"}),(0,r.jsx)("th",{scope:"col",children:"Vehicle Color"})]})}),(0,r.jsx)("tbody",{children:E.map((e,t)=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.name}),(0,r.jsx)("td",{children:e.owner_id}),(0,r.jsx)("td",{children:e.user_id}),(0,r.jsx)("td",{children:e.vehicle_id}),(0,r.jsx)("td",{children:e.vehicle_no}),(0,r.jsx)("td",{children:e.vehicle_color})]},e.id))})]})})]}),(0,r.jsx)("hr",{}),(0,r.jsx)(n.Z,{})]})]})}},7028:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(7437);s(2265);var a=s(8475),i=s.n(a);function o(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("footer",{className:"main-footer",children:[(0,r.jsxs)("strong",{children:["Copyright \xa9 2023 ",(0,r.jsx)("a",{href:"#"}),"."]}),"All rights reserved.",(0,r.jsx)("div",{className:"float-right d-none d-sm-inline-block"})]}),(0,r.jsx)(i(),{src:"../js/jquery.min.js"}),(0,r.jsx)(i(),{src:"../js/bootstrap.bundle.min.js"}),(0,r.jsx)(i(),{src:"../js/adminlte.js"}),(0,r.jsx)(i(),{src:"../js/Chart.min.js"}),(0,r.jsx)(i(),{src:"../js/summernote-bs4.min.js"}),(0,r.jsx)(i(),{src:"../js/demo.js"}),(0,r.jsx)(i(),{src:"../js/dashboard3.js"})]})}},126:function(e,t,s){"use strict";s.d(t,{N$:function(){return o},Uh:function(){return n},n$:function(){return l}});var r=s(1866);s(4033);var a=s(8153),i=s(4086);s(2265);let o=async e=>{let t=[];(0,a.Xb)(r.I8,e.email,e.password).then(s=>((0,i.ET)((0,i.hJ)(r.Uc,"user"),{userId:s.user.uid,name:e.name,email:s.user.email,role:e.role,password:e.password,profile:"",mobile:e.mobile,address:"",city:"",country:"",role:e.role,state:"",zip:"",status:!0,created:new Date}).then(e=>{console.log(e)}),t.message="Owner  Added",t.status="success",t)).catch(s=>{switch(s.code){case"auth/email-already-in-use":return t.message="Email address ".concat(e.email," already in use."),t.status="error",t;case"auth/invalid-email":return t.message="Email address ".concat(e.email," is invalid."),t.status="error",t;case"auth/operation-not-allowed":return t.message="Error during sign up.",t.status="error",t;case"auth/weak-password":return t.message="Password is not strong enough. Add additional characters including special characters and numbers.",t.status="error",t;default:return console.log(s.message),t.message=s.message,t.status="error",t}})},n=async e=>{(0,i.ET)((0,i.hJ)(r.Uc,"notification"),{title:e.title,message:e.message,owner_id:e.owner,status:!0,created:new Date}).then(e=>{console.log(e)})},l=async e=>{try{let t=await (0,a.e5)(r.I8,e.email,e.password).catch(function(e){var t=e.code,s=e.message;return console.log(t),console.log(s),t});return t}catch(e){console.error(e)}}},8475:function(e,t,s){e.exports=s(3994)},2037:function(e,t,s){"use strict";let r,a;s.d(t,{x7:function(){return eu},ZP:function(){return ep}});var i,o=s(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,p=(e,t)=>{let s="",r="",a="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":r+="f"==i[1]?p(o,i):i+"{"+p(o,"k"==i[1]?"":t)+"}":"object"==typeof o?r+=p(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=p.p?p.p(i,o):i+":"+o+";")}return s+(t&&a?t+"{"+a+"}":a)+r},m={},h=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+h(e[s]);return t}return e},f=(e,t,s,r,a)=>{var i;let o=h(e),n=m[o]||(m[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!m[n]){let t=o!==e?e:(e=>{let t,s,r=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?r.shift():t[3]?(s=t[3].replace(u," ").trim(),r.unshift(r[0][s]=r[0][s]||{})):r[0][t[1]]=t[2].replace(u," ").trim();return r[0]})(e);m[n]=p(a?{["@keyframes "+n]:t}:t,s?"":"."+n)}let l=s&&m.g?m.g:null;return s&&(m.g=m[n]),i=m[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=r?i+t.data:t.data+i),n},g=(e,t,s)=>e.reduce((e,r,a)=>{let i=t[a];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":p(e,""):!1===e?"":e}return e+r+(null==i?"":i)},"");function x(e){let t=this||{},s=e.call?e(t.p):e;return f(s.unshift?s.raw?g(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,y,v,j=x.bind({k:1});function w(e,t){let s=this||{};return function(){let r=arguments;function a(i,o){let n=Object.assign({},i),l=n.className||a.className;s.p=Object.assign({theme:y&&y()},n),s.o=/ *go\d+/.test(l),n.className=x.apply(s,r)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(a):a}}var E=e=>"function"==typeof e,N=(e,t)=>E(e)?e(t):e,k=(r=0,()=>(++r).toString()),$=()=>{if(void 0===a&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");a=!e||e.matches}return a},O=new Map,_=e=>{if(O.has(e))return;let t=setTimeout(()=>{O.delete(e),D({type:4,toastId:e})},1e3);O.set(e,t)},C=e=>{let t=O.get(e);t&&clearTimeout(t)},I=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?I(e,{type:1,toast:s}):I(e,{type:0,toast:s});case 3:let{toastId:r}=t;return r?_(r):e.toasts.forEach(e=>{_(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===r||void 0===r?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let a=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+a}))}}},S=[],A={toasts:[],pausedAt:void 0},D=e=>{A=I(A,e),S.forEach(e=>{e(A)})},z={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},P=(e={})=>{let[t,s]=(0,o.useState)(A);(0,o.useEffect)(()=>(S.push(s),()=>{let e=S.indexOf(s);e>-1&&S.splice(e,1)}),[t]);let r=t.toasts.map(t=>{var s,r;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||z[t.type],style:{...e.style,...null==(r=e[t.type])?void 0:r.style,...t.style}}});return{...t,toasts:r}},F=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),T=e=>(t,s)=>{let r=F(t,e,s);return D({type:2,toast:r}),r.id},U=(e,t)=>T("blank")(e,t);U.error=T("error"),U.success=T("success"),U.loading=T("loading"),U.custom=T("custom"),U.dismiss=e=>{D({type:3,toastId:e})},U.remove=e=>D({type:4,toastId:e}),U.promise=(e,t,s)=>{let r=U.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(U.success(N(t.success,e),{id:r,...s,...null==s?void 0:s.success}),e)).catch(e=>{U.error(N(t.error,e),{id:r,...s,...null==s?void 0:s.error})}),e};var H=(e,t)=>{D({type:1,toast:{id:e,height:t}})},M=()=>{D({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:s}=P(e);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),r=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&U.dismiss(t.id);return}return setTimeout(()=>U.dismiss(t.id),s)});return()=>{r.forEach(e=>e&&clearTimeout(e))}},[t,s]);let r=(0,o.useCallback)(()=>{s&&D({type:6,time:Date.now()})},[s]),a=(0,o.useCallback)((e,s)=>{let{reverseOrder:r=!1,gutter:a=8,defaultPosition:i}=s||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...r?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+a,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:M,endPause:r,calculateOffset:a}}},J=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,L=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Z=j`
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

  animation: ${J} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${L} 0.15s ease-out forwards;
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
    animation: ${Z} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,R=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,B=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${R} 1s linear infinite;
`,K=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,X=j`
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
}`,Y=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${K} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${X} 0.2s ease-out forwards;
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
`,G=w("div")`
  position: absolute;
`,Q=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,W=j`
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
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:s,iconTheme:r}=e;return void 0!==t?"string"==typeof t?o.createElement(ee,null,t):t:"blank"===s?null:o.createElement(Q,null,o.createElement(B,{...r}),"loading"!==s&&o.createElement(G,null,"error"===s?o.createElement(q,{...r}):o.createElement(Y,{...r})))},es=e=>`
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
`,eo=(e,t)=>{let s=e.includes("top")?1:-1,[r,a]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(s),er(s)];return{animation:t?`${j(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=o.memo(({toast:e,position:t,style:s,children:r})=>{let a=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(et,{toast:e}),n=o.createElement(ei,{...e.ariaProps},N(e.message,e));return o.createElement(ea,{className:e.className,style:{...a,...s,...e.style}},"function"==typeof r?r({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,p.p=void 0,b=i,y=void 0,v=void 0;var el=({id:e,className:t,style:s,onHeightUpdate:r,children:a})=>{let i=o.useCallback(t=>{if(t){let s=()=>{r(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,r]);return o.createElement("div",{ref:i,className:t,style:s},a)},ec=(e,t)=>{let s=e.includes("top"),r=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...r}},ed=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:r,children:a,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=V(s);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(s=>{let i=s.position||t,n=ec(i,c.calculateOffset(s,{reverseOrder:e,gutter:r,defaultPosition:t}));return o.createElement(el,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ed:"",style:n},"custom"===s.type?N(s.message,s):a?a(s):o.createElement(en,{toast:s,position:i}))}))},ep=U}},function(e){e.O(0,[2420,4358,6220,8373,1396,5490,9891,2971,2472,1744],function(){return e(e.s=5669)}),_N_E=e.O()}]);