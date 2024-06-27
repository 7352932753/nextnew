(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8190],{7647:function(e,t,a){Promise.resolve().then(a.bind(a,4829))},7028:function(e,t,a){"use strict";a.d(t,{Z:function(){return i}});var s=a(7437);a(2265);var r=a(8475),o=a.n(r);function i(){return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("footer",{className:"main-footer",children:[(0,s.jsxs)("strong",{children:["Copyright \xa9 2023 ",(0,s.jsx)("a",{href:"#"}),"."]}),"All rights reserved.",(0,s.jsx)("div",{className:"float-right d-none d-sm-inline-block"})]}),(0,s.jsx)(o(),{src:"../js/jquery.min.js"}),(0,s.jsx)(o(),{src:"../js/bootstrap.bundle.min.js"}),(0,s.jsx)(o(),{src:"../js/adminlte.js"}),(0,s.jsx)(o(),{src:"../js/Chart.min.js"}),(0,s.jsx)(o(),{src:"../js/summernote-bs4.min.js"}),(0,s.jsx)(o(),{src:"../js/demo.js"}),(0,s.jsx)(o(),{src:"../js/dashboard3.js"})]})}},4829:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return m}});var s=a(7437),r=a(2265),o=a(5478),i=a(5925),n=a(7028);a(126);var l=a(2037),c=a(8153),d=a(1866),u=a(4086);function m(){let[e,t]=(0,r.useState)(""),[a,m]=(0,r.useState)(""),[p,f]=(0,r.useState)(""),[h,g]=(0,r.useState)(""),[b,x]=(0,r.useState)(""),[y,v]=(0,r.useState)("");function j(e){l.ZP.error("".concat(e),{position:"top-right",style:{background:"red",color:"#fff"}})}(0,r.useEffect)(()=>{let e=localStorage.getItem("user"),a=JSON.parse(e);x(a.user_id),t("4")},[]);let w=async()=>{""!=h&&""!=a&&""!=p?(await (0,c.Xb)(d.I8,h,y).then(t=>{(0,u.ET)((0,u.hJ)(d.Uc,"user"),{userId:t.user.uid,name:a,email:t.user.email,role:e,password:y,profile:"",assign_status:"0",owner_id:b,mobile:p,address:"",city:"",country:"",role:e,state:"",zip:"",status:!0,created:new Date}),l.ZP.success("".concat("User  Added"),{position:"top-right",style:{background:"green",color:"#fff",border:"1px solid #713200"}})}).catch(e=>{switch(e.code){case"auth/email-already-in-use":j("Email address ".concat(h," already in use."));break;case"auth/invalid-email":j("Invalid Email");break;case"auth/operation-not-allowed":j("Error during sign up.");break;case"auth/weak-password":j("Password is not strong enough. Add additional characters including special characters and numbers.");break;default:console.log(e.message),j(e.message)}}),g(""),m(""),f(""),v(""),console.log(res)):l.ZP.error("Please Fill All Input Fields",{position:"top-right",style:{background:"red",color:"#fff"}})};return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("div",{className:"wrapper",children:[(0,s.jsx)(o.default,{}),(0,s.jsx)(i.default,{}),(0,s.jsx)(l.x7,{}),(0,s.jsxs)("div",{className:"content-wrapper",children:[(0,s.jsx)("div",{className:"content-header",children:(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsxs)("div",{className:"row mb-2",children:[(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsx)("h1",{className:"m-0",children:"Users"})}),(0,s.jsx)("div",{className:"col-sm-6",children:(0,s.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,s.jsx)("li",{className:"breadcrumb-item",children:(0,s.jsx)("a",{href:"#",children:"Home"})}),(0,s.jsx)("li",{className:"breadcrumb-item active",children:"Edit User"})]})})]})})}),(0,s.jsx)("div",{className:"row container",children:(0,s.jsx)("div",{className:"col-md-8",children:(0,s.jsxs)("div",{className:"card card-dark",children:[(0,s.jsx)("div",{className:"card-header",children:(0,s.jsx)("h3",{className:"card-title",children:"Add User"})}),(0,s.jsxs)("div",{className:"form-horizontal",children:[(0,s.jsxs)("div",{className:"card-body",children:[(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Name"}),(0,s.jsx)("div",{className:"col-sm-10",children:(0,s.jsx)("input",{type:"text",className:"form-control",value:a,onChange:e=>m(e.target.value),placeholder:"Name"})})]}),(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Email"}),(0,s.jsx)("div",{className:"col-sm-10",children:(0,s.jsx)("input",{type:"text",className:"form-control",value:h,onChange:e=>g(e.target.value),placeholder:"Email"})})]}),(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Password"}),(0,s.jsx)("div",{className:"col-sm-10",children:(0,s.jsx)("input",{type:"text",className:"form-control",value:y,onChange:e=>v(e.target.value),placeholder:"Password"})})]}),(0,s.jsxs)("div",{className:"form-group row",children:[(0,s.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-2 col-form-label",children:"Mobile"}),(0,s.jsx)("div",{className:"col-sm-10",children:(0,s.jsx)("input",{type:"text",className:"form-control",value:p,onChange:e=>f(e.target.value),placeholder:"Mobile"})})]})]}),(0,s.jsx)("div",{className:"card-footer center",children:(0,s.jsx)("button",{onClick:()=>w(),className:"btn btn-dark",children:"Save"})})]})]})})})]}),(0,s.jsx)("hr",{}),(0,s.jsx)(n.Z,{})]})})}},126:function(e,t,a){"use strict";a.d(t,{N$:function(){return i},Uh:function(){return n},n$:function(){return l}});var s=a(1866);a(4033);var r=a(8153),o=a(4086);a(2265);let i=async e=>{let t=[];(0,r.Xb)(s.I8,e.email,e.password).then(a=>((0,o.ET)((0,o.hJ)(s.Uc,"user"),{userId:a.user.uid,name:e.name,email:a.user.email,role:e.role,password:e.password,profile:"",mobile:e.mobile,address:"",city:"",country:"",role:e.role,state:"",zip:"",status:!0,created:new Date}).then(e=>{console.log(e)}),t.message="Owner  Added",t.status="success",t)).catch(a=>{switch(a.code){case"auth/email-already-in-use":return t.message="Email address ".concat(e.email," already in use."),t.status="error",t;case"auth/invalid-email":return t.message="Email address ".concat(e.email," is invalid."),t.status="error",t;case"auth/operation-not-allowed":return t.message="Error during sign up.",t.status="error",t;case"auth/weak-password":return t.message="Password is not strong enough. Add additional characters including special characters and numbers.",t.status="error",t;default:return console.log(a.message),t.message=a.message,t.status="error",t}})},n=async e=>{(0,o.ET)((0,o.hJ)(s.Uc,"notification"),{title:e.title,message:e.message,owner_id:e.owner,status:!0,created:new Date}).then(e=>{console.log(e)})},l=async e=>{try{let t=await (0,r.e5)(s.I8,e.email,e.password).catch(function(e){var t=e.code,a=e.message;return console.log(t),console.log(a),t});return t}catch(e){console.error(e)}}},8475:function(e,t,a){e.exports=a(3994)},2037:function(e,t,a){"use strict";let s,r;a.d(t,{x7:function(){return eu},ZP:function(){return em}});var o,i=a(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let a="",s="",r="";for(let o in e){let i=e[o];"@"==o[0]?"i"==o[1]?a=o+" "+i+";":s+="f"==o[1]?m(i,o):o+"{"+m(i,"k"==o[1]?"":t)+"}":"object"==typeof i?s+=m(i,t?t.replace(/([^,])+/g,e=>o.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):o):null!=i&&(o=/^--/.test(o)?o:o.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=m.p?m.p(o,i):o+":"+i+";")}return a+(t&&r?t+"{"+r+"}":r)+s},p={},f=e=>{if("object"==typeof e){let t="";for(let a in e)t+=a+f(e[a]);return t}return e},h=(e,t,a,s,r)=>{var o;let i=f(e),n=p[i]||(p[i]=(e=>{let t=0,a=11;for(;t<e.length;)a=101*a+e.charCodeAt(t++)>>>0;return"go"+a})(i));if(!p[n]){let t=i!==e?e:(e=>{let t,a,s=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?s.shift():t[3]?(a=t[3].replace(u," ").trim(),s.unshift(s[0][a]=s[0][a]||{})):s[0][t[1]]=t[2].replace(u," ").trim();return s[0]})(e);p[n]=m(r?{["@keyframes "+n]:t}:t,a?"":"."+n)}let l=a&&p.g?p.g:null;return a&&(p.g=p[n]),o=p[n],l?t.data=t.data.replace(l,o):-1===t.data.indexOf(o)&&(t.data=s?o+t.data:t.data+o),n},g=(e,t,a)=>e.reduce((e,s,r)=>{let o=t[r];if(o&&o.call){let e=o(a),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;o=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+s+(null==o?"":o)},"");function b(e){let t=this||{},a=e.call?e(t.p):e;return h(a.unshift?a.raw?g(a,[].slice.call(arguments,1),t.p):a.reduce((e,a)=>Object.assign(e,a&&a.call?a(t.p):a),{}):a,l(t.target),t.g,t.o,t.k)}b.bind({g:1});let x,y,v,j=b.bind({k:1});function w(e,t){let a=this||{};return function(){let s=arguments;function r(o,i){let n=Object.assign({},o),l=n.className||r.className;a.p=Object.assign({theme:y&&y()},n),a.o=/ *go\d+/.test(l),n.className=b.apply(a,s)+(l?" "+l:""),t&&(n.ref=i);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),x(c,n)}return t?t(r):r}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(s=0,()=>(++s).toString()),$=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},C=new Map,P=e=>{if(C.has(e))return;let t=setTimeout(()=>{C.delete(e),F({type:4,toastId:e})},1e3);C.set(e,t)},O=e=>{let t=C.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&O(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:a}=t;return e.toasts.find(e=>e.id===a.id)?A(e,{type:1,toast:a}):A(e,{type:0,toast:a});case 3:let{toastId:s}=t;return s?P(s):e.toasts.forEach(e=>{P(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===s||void 0===s?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},I=[],z={toasts:[],pausedAt:void 0},F=e=>{z=A(z,e),I.forEach(e=>{e(z)})},S={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},_=(e={})=>{let[t,a]=(0,i.useState)(z);(0,i.useEffect)(()=>(I.push(a),()=>{let e=I.indexOf(a);e>-1&&I.splice(e,1)}),[t]);let s=t.toasts.map(t=>{var a,s;return{...e,...e[t.type],...t,duration:t.duration||(null==(a=e[t.type])?void 0:a.duration)||(null==e?void 0:e.duration)||S[t.type],style:{...e.style,...null==(s=e[t.type])?void 0:s.style,...t.style}}});return{...t,toasts:s}},D=(e,t="blank",a)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...a,id:(null==a?void 0:a.id)||k()}),U=e=>(t,a)=>{let s=D(t,e,a);return F({type:2,toast:s}),s.id},T=(e,t)=>U("blank")(e,t);T.error=U("error"),T.success=U("success"),T.loading=U("loading"),T.custom=U("custom"),T.dismiss=e=>{F({type:3,toastId:e})},T.remove=e=>F({type:4,toastId:e}),T.promise=(e,t,a)=>{let s=T.loading(t.loading,{...a,...null==a?void 0:a.loading});return e.then(e=>(T.success(E(t.success,e),{id:s,...a,...null==a?void 0:a.success}),e)).catch(e=>{T.error(E(t.error,e),{id:s,...a,...null==a?void 0:a.error})}),e};var M=(e,t)=>{F({type:1,toast:{id:e,height:t}})},Z=()=>{F({type:5,time:Date.now()})},H=e=>{let{toasts:t,pausedAt:a}=_(e);(0,i.useEffect)(()=>{if(a)return;let e=Date.now(),s=t.map(t=>{if(t.duration===1/0)return;let a=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(a<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),a)});return()=>{s.forEach(e=>e&&clearTimeout(e))}},[t,a]);let s=(0,i.useCallback)(()=>{a&&F({type:6,time:Date.now()})},[a]),r=(0,i.useCallback)((e,a)=>{let{reverseOrder:s=!1,gutter:r=8,defaultPosition:o}=a||{},i=t.filter(t=>(t.position||o)===(e.position||o)&&t.height),n=i.findIndex(t=>t.id===e.id),l=i.filter((e,t)=>t<n&&e.visible).length;return i.filter(e=>e.visible).slice(...s?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:M,startPause:Z,endPause:s,calculateOffset:r}}},J=j`
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
}`,q=j`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,X=w("div")`
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
    animation: ${q} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,B=j`
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
  animation: ${B} 1s linear infinite;
`,Y=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,G=j`
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

  animation: ${Y} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
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
`,V=w("div")`
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
`,et=({toast:e})=>{let{icon:t,type:a,iconTheme:s}=e;return void 0!==t?"string"==typeof t?i.createElement(ee,null,t):t:"blank"===a?null:i.createElement(V,null,i.createElement(R,{...s}),"loading"!==a&&i.createElement(Q,null,"error"===a?i.createElement(X,{...s}):i.createElement(K,{...s})))},ea=e=>`
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
`,eo=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,ei=(e,t)=>{let a=e.includes("top")?1:-1,[s,r]=$()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[ea(a),es(a)];return{animation:t?`${j(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=i.memo(({toast:e,position:t,style:a,children:s})=>{let r=e.height?ei(e.position||t||"top-center",e.visible):{opacity:0},o=i.createElement(et,{toast:e}),n=i.createElement(eo,{...e.ariaProps},E(e.message,e));return i.createElement(er,{className:e.className,style:{...r,...a,...e.style}},"function"==typeof s?s({icon:o,message:n}):i.createElement(i.Fragment,null,o,n))});o=i.createElement,m.p=void 0,x=o,y=void 0,v=void 0;var el=({id:e,className:t,style:a,onHeightUpdate:s,children:r})=>{let o=i.useCallback(t=>{if(t){let a=()=>{s(e,t.getBoundingClientRect().height)};a(),new MutationObserver(a).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,s]);return i.createElement("div",{ref:o,className:t,style:a},r)},ec=(e,t)=>{let a=e.includes("top"),s=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(a?1:-1)}px)`,...a?{top:0}:{bottom:0},...s}},ed=b`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:a,gutter:s,children:r,containerStyle:o,containerClassName:n})=>{let{toasts:l,handlers:c}=H(a);return i.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...o},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(a=>{let o=a.position||t,n=ec(o,c.calculateOffset(a,{reverseOrder:e,gutter:s,defaultPosition:t}));return i.createElement(el,{id:a.id,key:a.id,onHeightUpdate:c.updateHeight,className:a.visible?ed:"",style:n},"custom"===a.type?E(a.message,a):r?r(a):i.createElement(en,{toast:a,position:o}))}))},em=T}},function(e){e.O(0,[2420,4358,6220,8373,1396,5490,9891,2971,2472,1744],function(){return e(e.s=7647)}),_N_E=e.O()}]);