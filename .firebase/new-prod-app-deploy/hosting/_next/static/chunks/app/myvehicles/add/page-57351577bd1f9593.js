(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1972],{7594:function(e,t,s){Promise.resolve().then(s.bind(s,6263))},7028:function(e,t,s){"use strict";s.d(t,{Z:function(){return i}});var a=s(7437);s(2265);var r=s(8475),o=s.n(r);function i(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("footer",{className:"main-footer",children:[(0,a.jsxs)("strong",{children:["Copyright \xa9 2023 ",(0,a.jsx)("a",{href:"#"}),"."]}),"All rights reserved.",(0,a.jsx)("div",{className:"float-right d-none d-sm-inline-block"})]}),(0,a.jsx)(o(),{src:"../js/jquery.min.js"}),(0,a.jsx)(o(),{src:"../js/bootstrap.bundle.min.js"}),(0,a.jsx)(o(),{src:"../js/adminlte.js"}),(0,a.jsx)(o(),{src:"../js/Chart.min.js"}),(0,a.jsx)(o(),{src:"../js/summernote-bs4.min.js"}),(0,a.jsx)(o(),{src:"../js/demo.js"}),(0,a.jsx)(o(),{src:"../js/dashboard3.js"})]})}},6263:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return m}});var a=s(7437),r=s(2265),o=s(5478),i=s(5925),l=s(7028);s(126);var n=s(2037),c=s(4086),d=s(1866),u=s(9584);function m(){let[e,t]=(0,r.useState)(!1),[s,m]=(0,r.useState)(""),[p,h]=(0,r.useState)(""),[f,g]=(0,r.useState)(""),[x,b]=(0,r.useState)(""),[v,y]=(0,r.useState)(""),[j,N]=(0,r.useState)(""),[w,E]=(0,r.useState)(""),[k,C]=(0,r.useState)(!1),$=async()=>{if(""!=f&&""!=x&&""!=s&&""!=p&&""!=v&&""!=j){if(t(!0),x){let e=await (0,u.iH)(d.tO,"upload/vehicle/".concat(x.name));await (0,u.KV)(e,x).then(e=>{(0,u.Jt)(e.ref).then(e=>{(0,c.ET)((0,c.hJ)(d.Uc,"vehicle"),{name:s,vehicle_id:p,vehicle_no:f,vehicle_color:v,vehicle_image_url:e,bluetooth_key:j,bluetooth_name:w,owner_assign:"0",user_assign:"0",user_id:"",owner_id:""}).then(e=>{console.log(e)}),n.ZP.success("Vehicle Added Successfully",{position:"top-right",style:{background:"green",color:"#fff",border:"1px solid #713200"}}),b(""),m(""),h(""),g(""),y(""),N(""),E(""),t(!1)})})}}else n.ZP.error("Please Fill All Input Fields",{position:"top-right",style:{background:"red",color:"#fff"}})};return(0,a.jsxs)(a.Fragment,{children:[e?(0,a.jsx)("div",{className:"loading"}):(0,a.jsx)("span",{}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)(o.default,{}),(0,a.jsx)(i.default,{}),(0,a.jsx)(n.x7,{}),(0,a.jsxs)("div",{className:"content-wrapper",children:[(0,a.jsx)("div",{className:"content-header",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row mb-2",children:[(0,a.jsx)("div",{className:"col-sm-6",children:(0,a.jsx)("h1",{className:"m-0",children:"Vehicle"})}),(0,a.jsx)("div",{className:"col-sm-6",children:(0,a.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)("a",{href:"#",children:"Home"})}),(0,a.jsx)("li",{className:"breadcrumb-item active",children:"Add Vehicle"})]})})]})})}),(0,a.jsx)("div",{className:"row container",children:(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsxs)("div",{className:"card card-dark",children:[(0,a.jsx)("div",{className:"card-header",children:(0,a.jsx)("h3",{className:"card-title",children:"Add Vehicle"})}),(0,a.jsxs)("div",{className:"form-horizontal",children:[(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"Vehicle Name"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"text",className:"form-control",value:s,onChange:e=>m(e.target.value),placeholder:"Name"})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"Vehicle Color"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"text",className:"form-control",value:v,onChange:e=>y(e.target.value),placeholder:"Vehicle Color"})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"VIN No"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"text",className:"form-control",value:f,onChange:e=>g(e.target.value),placeholder:"Vehicle No"})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"Bluetooth Key"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"text",className:"form-control",value:j,onChange:e=>N(e.target.value),placeholder:"Bluetooth Key"})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"Bluetooth Name"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"text",className:"form-control",value:w,onChange:e=>E(e.target.value),placeholder:"Bluetooth Name"})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"RF Key"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"text",className:"form-control",value:p,onChange:e=>h(e.target.value),placeholder:"RF Key"})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"exampleInputEmail1",className:"col-sm-3 col-form-label",children:"Vehicle Image"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsx)("input",{type:"file",className:"form-control",accept:"image/*",onChange:e=>{b(e.target.files[0])}})})]})]}),(0,a.jsx)("div",{className:"card-footer center",children:(0,a.jsx)("button",{onClick:()=>$(),className:"btn btn-dark",children:"Save"})})]})]})})})]}),(0,a.jsx)("hr",{}),(0,a.jsx)(l.Z,{})]})]})}},126:function(e,t,s){"use strict";s.d(t,{N$:function(){return i},Uh:function(){return l},n$:function(){return n}});var a=s(1866);s(4033);var r=s(8153),o=s(4086);s(2265);let i=async e=>{let t=[];(0,r.Xb)(a.I8,e.email,e.password).then(s=>((0,o.ET)((0,o.hJ)(a.Uc,"user"),{userId:s.user.uid,name:e.name,email:s.user.email,role:e.role,password:e.password,profile:"",mobile:e.mobile,address:"",city:"",country:"",role:e.role,state:"",zip:"",status:!0,created:new Date}).then(e=>{console.log(e)}),t.message="Owner  Added",t.status="success",t)).catch(s=>{switch(s.code){case"auth/email-already-in-use":return t.message="Email address ".concat(e.email," already in use."),t.status="error",t;case"auth/invalid-email":return t.message="Email address ".concat(e.email," is invalid."),t.status="error",t;case"auth/operation-not-allowed":return t.message="Error during sign up.",t.status="error",t;case"auth/weak-password":return t.message="Password is not strong enough. Add additional characters including special characters and numbers.",t.status="error",t;default:return console.log(s.message),t.message=s.message,t.status="error",t}})},l=async e=>{(0,o.ET)((0,o.hJ)(a.Uc,"notification"),{title:e.title,message:e.message,owner_id:e.owner,status:!0,created:new Date}).then(e=>{console.log(e)})},n=async e=>{try{let t=await (0,r.e5)(a.I8,e.email,e.password).catch(function(e){var t=e.code,s=e.message;return console.log(t),console.log(s),t});return t}catch(e){console.error(e)}}},8475:function(e,t,s){e.exports=s(3994)},2037:function(e,t,s){"use strict";let a,r;s.d(t,{x7:function(){return eu},ZP:function(){return em}});var o,i=s(2265);let l={data:""},n=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||l,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let s="",a="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?s=o+" "+i+";":a+="f"==o[1]?m(i,o):o+"{"+m(i,"k"==o[1]?"":t)+"}":"object"==typeof i?a+=m(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=m.p?m.p(o,i):o+":"+i+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},h=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+h(e[s]);return t}return e},f=(e,t,s,a,r)=>{var o;let i=h(e),l=p[i]||(p[i]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(i));if(!p[l]){let t=i!==e?e:(e=>{let t,s,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(u," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[l]=m(r?{["@keyframes "+l]:t}:t,s?"":"."+l)}let n=s&&p.g?p.g:null;return s&&(p.g=p[l]),o=p[l],n?t.data=t.data.replace(n,o):-1===t.data.indexOf(o)&&(t.data=a?o+t.data:t.data+o),l},g=(e,t,s)=>e.reduce((e,a,r)=>{let o=t[r];if(o&&o.call){let e=o(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==o?"":o)},"");function x(e){let t=this||{},s=e.call?e(t.p):e;return f(s.unshift?s.raw?g(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,n(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,v,y,j=x.bind({k:1});function N(e,t){let s=this||{};return function(){let a=arguments;function r(o,i){let l=Object.assign({},o),n=l.className||r.className;s.p=Object.assign({theme:v&&v()},l),s.o=/ *go\d+/.test(n),l.className=x.apply(s,a)+(n?" "+n:""),t&&(l.ref=i);let c=e;return e[0]&&(c=l.as||e,delete l.as),y&&c[0]&&y(l),b(c,l)}return t?t(r):r}}var w=e=>"function"==typeof e,E=(e,t)=>w(e)?e(t):e,k=(a=0,()=>(++a).toString()),C=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},$=new Map,_=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),S({type:4,toastId:e})},1e3);$.set(e,t)},F=e=>{let t=$.get(e);t&&clearTimeout(t)},O=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&F(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?O(e,{type:1,toast:s}):O(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?_(a):e.toasts.forEach(e=>{_(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},A=[],I={toasts:[],pausedAt:void 0},S=e=>{I=O(I,e),A.forEach(e=>{e(I)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},z=(e={})=>{let[t,s]=(0,i.useState)(I);(0,i.useEffect)(()=>(A.push(s),()=>{let e=A.indexOf(s);e>-1&&A.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var s,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},D=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),V=e=>(t,s)=>{let a=D(t,e,s);return S({type:2,toast:a}),a.id},T=(e,t)=>V("blank")(e,t);T.error=V("error"),T.success=V("success"),T.loading=V("loading"),T.custom=V("custom"),T.dismiss=e=>{S({type:3,toastId:e})},T.remove=e=>S({type:4,toastId:e}),T.promise=(e,t,s)=>{let a=T.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(T.success(E(t.success,e),{id:a,...s,...null==s?void 0:s.success}),e)).catch(e=>{T.error(E(t.error,e),{id:a,...s,...null==s?void 0:s.error})}),e};var H=(e,t)=>{S({type:1,toast:{id:e,height:t}})},M=()=>{S({type:5,time:Date.now()})},U=e=>{let{toasts:t,pausedAt:s}=z(e);(0,i.useEffect)(()=>{if(s)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,s]);let a=(0,i.useCallback)(()=>{s&&S({type:6,time:Date.now()})},[s]),r=(0,i.useCallback)((e,s)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:o}=s||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),l=i.findIndex(t=>t.id===e.id),n=i.filter((e,t)=>t<l&&e.visible).length;return i.filter(e=>e.visible).slice(...a?[n+1]:[0,n]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:M,endPause:a,calculateOffset:r}}},Z=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,B=j`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,K=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=N("div")`
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
    animation: ${B} 0.15s ease-out forwards;
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
    animation: ${K} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,L=j`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,R=N("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${L} 1s linear infinite;
`,q=j`
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
}`,Y=N("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${q} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,G=N("div")`
  position: absolute;
`,Q=N("div")`
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
}`,ee=N("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${W} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,et=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===s?null:i.createElement(Q,null,i.createElement(R,{...a}),"loading"!==s&&i.createElement(G,null,"error"===s?i.createElement(J,{...a}):i.createElement(Y,{...a})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,er=N("div")`
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
`,eo=N("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(s),ea(s)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},el=i.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(et,{toast:e}),l=i.createElement(eo,{...e.ariaProps},E(e.message,e));return i.createElement(er,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:o,message:l}):i.createElement(i.Fragment,null,o,l))});o=i.createElement,m.p=void 0,b=o,v=void 0,y=void 0;var en=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let o=i.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return i.createElement("div",{ref:o,className:t,style:s},r)},ec=(e,t)=>{let s=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a}},ed=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,containerStyle:o,containerClassName:l})=>{let{toasts:n,handlers:c}=U(s);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:l,onMouseEnter:c.startPause,onMouseLeave:c.endPause},n.map(s=>{let o=s.position||t,l=ec(o,c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}));return i.createElement(en,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ed:"",style:l},"custom"===s.type?E(s.message,s):r?r(s):i.createElement(el,{toast:s,position:o}))}))},em=T}},function(e){e.O(0,[2420,4358,6220,8373,1396,5490,9891,2971,2472,1744],function(){return e(e.s=7594)}),_N_E=e.O()}]);