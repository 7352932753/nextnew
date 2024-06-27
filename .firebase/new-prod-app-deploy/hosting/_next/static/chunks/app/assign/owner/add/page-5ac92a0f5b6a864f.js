(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7882],{1745:function(e,t,s){Promise.resolve().then(s.bind(s,4933))},4933:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var a=s(7437),r=s(2265),i=s(5478),o=s(5925),n=s(7028);s(126);var l=s(2037),c=s(4086),d=s(1866);function u(){let[e,t]=(0,r.useState)(!1),[s,u]=(0,r.useState)(""),[m,p]=(0,r.useState)(""),[f,h]=(0,r.useState)(""),[g,x]=(0,r.useState)(""),[b,y]=(0,r.useState)(!1),[v,j]=(0,r.useState)([]),[w,N]=(0,r.useState)([]),[E,k]=(0,r.useState)([]),[O,$]=(0,r.useState)([]),[S,C]=(0,r.useState)([]),[A,I]=(0,r.useState)([]),_=async()=>{t(!0),y(!0);let e=(0,c.JU)(d.Uc,"vehicle",A);(0,c.r7)(e,{owner_assign:"1",owner_id:S}),t(!1),l.ZP.success("Vehicle Assign Successfully",{position:"top-right",style:{background:"green",color:"#fff"}})};return(0,r.useEffect)(()=>{{t(!0);let e=(0,c.IO)((0,c.hJ)(d.Uc,"user"),(0,c.ar)("role","!=","4")),s=(0,c.cf)(e,e=>{let a=[];return e.forEach(e=>{a.push({...e.data(),id:e.id})}),j(a),k(a),console.log(a),t(!1),()=>s()}),a=(0,c.IO)((0,c.hJ)(d.Uc,"vehicle"),(0,c.ar)("owner_assign","==","0")),r=(0,c.cf)(a,e=>{let s=[];return e.forEach(e=>{s.push({...e.data(),id:e.id})}),N(s),$(s),t(!1),()=>r()})}},[]),(0,a.jsxs)(a.Fragment,{children:[e?(0,a.jsx)("div",{className:"loading"}):(0,a.jsx)("span",{}),(0,a.jsxs)("div",{className:"wrapper",children:[(0,a.jsx)(i.default,{}),(0,a.jsx)(o.default,{}),(0,a.jsx)(l.x7,{}),(0,a.jsxs)("div",{className:"content-wrapper",children:[(0,a.jsx)("div",{className:"content-header",children:(0,a.jsx)("div",{className:"container-fluid",children:(0,a.jsxs)("div",{className:"row mb-2",children:[(0,a.jsx)("div",{className:"col-sm-6",children:(0,a.jsx)("h1",{className:"m-0",children:" Assign Vehicle Owner"})}),(0,a.jsx)("div",{className:"col-sm-6",children:(0,a.jsxs)("ol",{className:"breadcrumb float-sm-right",children:[(0,a.jsx)("li",{className:"breadcrumb-item",children:(0,a.jsx)("a",{href:"#",children:"Home"})}),(0,a.jsx)("li",{className:"breadcrumb-item active",children:"Assign Vehicle "})]})})]})})}),(0,a.jsx)("div",{className:"row container",children:(0,a.jsx)("div",{className:"col-md-8",children:(0,a.jsxs)("div",{className:"card card-dark",children:[(0,a.jsx)("div",{className:"card-header",children:(0,a.jsx)("h3",{className:"card-title",children:"Assign Vehicle "})}),(0,a.jsxs)("div",{className:"form-horizontal",children:[(0,a.jsxs)("div",{className:"card-body",children:[(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"Owner"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsxs)("select",{className:" form-control ",onChange:e=>C(e.target.value),required:!0,children:[(0,a.jsx)("option",{value:"",children:"Select Owner"}),E.map((e,t)=>(0,a.jsx)("option",{value:e.userId,children:e.name},e.id))]})})]}),(0,a.jsxs)("div",{className:"form-group row",children:[(0,a.jsx)("label",{htmlFor:"inputEmail3",className:"col-sm-3 col-form-label",children:"Vehicle"}),(0,a.jsx)("div",{className:"col-sm-9",children:(0,a.jsxs)("select",{className:" form-control ",onChange:e=>I(e.target.value),required:!0,children:[(0,a.jsx)("option",{value:"",children:"Select Vehicle"}),O.map((e,t)=>(0,a.jsxs)("option",{value:e.id,children:[e.name," (",e.vehicle_id,")"]},e.id))]})})]})]}),(0,a.jsx)("div",{className:"card-footer center",children:(0,a.jsx)("button",{onClick:()=>_(),className:"btn btn-dark",children:"Save"})})]})]})})})]}),(0,a.jsx)("hr",{}),(0,a.jsx)(n.Z,{})]})]})}s(9584)},7028:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var a=s(7437);s(2265);var r=s(8475),i=s.n(r);function o(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("footer",{className:"main-footer",children:[(0,a.jsxs)("strong",{children:["Copyright \xa9 2023 ",(0,a.jsx)("a",{href:"#"}),"."]}),"All rights reserved.",(0,a.jsx)("div",{className:"float-right d-none d-sm-inline-block"})]}),(0,a.jsx)(i(),{src:"../js/jquery.min.js"}),(0,a.jsx)(i(),{src:"../js/bootstrap.bundle.min.js"}),(0,a.jsx)(i(),{src:"../js/adminlte.js"}),(0,a.jsx)(i(),{src:"../js/Chart.min.js"}),(0,a.jsx)(i(),{src:"../js/summernote-bs4.min.js"}),(0,a.jsx)(i(),{src:"../js/demo.js"}),(0,a.jsx)(i(),{src:"../js/dashboard3.js"})]})}},126:function(e,t,s){"use strict";s.d(t,{N$:function(){return o},Uh:function(){return n},n$:function(){return l}});var a=s(1866);s(4033);var r=s(8153),i=s(4086);s(2265);let o=async e=>{let t=[];(0,r.Xb)(a.I8,e.email,e.password).then(s=>((0,i.ET)((0,i.hJ)(a.Uc,"user"),{userId:s.user.uid,name:e.name,email:s.user.email,role:e.role,password:e.password,profile:"",mobile:e.mobile,address:"",city:"",country:"",role:e.role,state:"",zip:"",status:!0,created:new Date}).then(e=>{console.log(e)}),t.message="Owner  Added",t.status="success",t)).catch(s=>{switch(s.code){case"auth/email-already-in-use":return t.message="Email address ".concat(e.email," already in use."),t.status="error",t;case"auth/invalid-email":return t.message="Email address ".concat(e.email," is invalid."),t.status="error",t;case"auth/operation-not-allowed":return t.message="Error during sign up.",t.status="error",t;case"auth/weak-password":return t.message="Password is not strong enough. Add additional characters including special characters and numbers.",t.status="error",t;default:return console.log(s.message),t.message=s.message,t.status="error",t}})},n=async e=>{(0,i.ET)((0,i.hJ)(a.Uc,"notification"),{title:e.title,message:e.message,owner_id:e.owner,status:!0,created:new Date}).then(e=>{console.log(e)})},l=async e=>{try{let t=await (0,r.e5)(a.I8,e.email,e.password).catch(function(e){var t=e.code,s=e.message;return console.log(t),console.log(s),t});return t}catch(e){console.error(e)}}},8475:function(e,t,s){e.exports=s(3994)},2037:function(e,t,s){"use strict";let a,r;s.d(t,{x7:function(){return eu},ZP:function(){return em}});var i,o=s(2265);let n={data:""},l=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||n,c=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,d=/\/\*[^]*?\*\/|  +/g,u=/\n+/g,m=(e,t)=>{let s="",a="",r="";for(let i in e){let o=e[i];"@"==i[0]?"i"==i[1]?s=i+" "+o+";":a+="f"==i[1]?m(o,i):i+"{"+m(o,"k"==i[1]?"":t)+"}":"object"==typeof o?a+=m(o,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=o&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),r+=m.p?m.p(i,o):i+":"+o+";")}return s+(t&&r?t+"{"+r+"}":r)+a},p={},f=e=>{if("object"==typeof e){let t="";for(let s in e)t+=s+f(e[s]);return t}return e},h=(e,t,s,a,r)=>{var i;let o=f(e),n=p[o]||(p[o]=(e=>{let t=0,s=11;for(;t<e.length;)s=101*s+e.charCodeAt(t++)>>>0;return"go"+s})(o));if(!p[n]){let t=o!==e?e:(e=>{let t,s,a=[{}];for(;t=c.exec(e.replace(d,""));)t[4]?a.shift():t[3]?(s=t[3].replace(u," ").trim(),a.unshift(a[0][s]=a[0][s]||{})):a[0][t[1]]=t[2].replace(u," ").trim();return a[0]})(e);p[n]=m(r?{["@keyframes "+n]:t}:t,s?"":"."+n)}let l=s&&p.g?p.g:null;return s&&(p.g=p[n]),i=p[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},g=(e,t,s)=>e.reduce((e,a,r)=>{let i=t[r];if(i&&i.call){let e=i(s),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":m(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function x(e){let t=this||{},s=e.call?e(t.p):e;return h(s.unshift?s.raw?g(s,[].slice.call(arguments,1),t.p):s.reduce((e,s)=>Object.assign(e,s&&s.call?s(t.p):s),{}):s,l(t.target),t.g,t.o,t.k)}x.bind({g:1});let b,y,v,j=x.bind({k:1});function w(e,t){let s=this||{};return function(){let a=arguments;function r(i,o){let n=Object.assign({},i),l=n.className||r.className;s.p=Object.assign({theme:y&&y()},n),s.o=/ *go\d+/.test(l),n.className=x.apply(s,a)+(l?" "+l:""),t&&(n.ref=o);let c=e;return e[0]&&(c=n.as||e,delete n.as),v&&c[0]&&v(n),b(c,n)}return t?t(r):r}}var N=e=>"function"==typeof e,E=(e,t)=>N(e)?e(t):e,k=(a=0,()=>(++a).toString()),O=()=>{if(void 0===r&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");r=!e||e.matches}return r},$=new Map,S=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),z({type:4,toastId:e})},1e3);$.set(e,t)},C=e=>{let t=$.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&C(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:s}=t;return e.toasts.find(e=>e.id===s.id)?A(e,{type:1,toast:s}):A(e,{type:0,toast:s});case 3:let{toastId:a}=t;return a?S(a):e.toasts.forEach(e=>{S(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let r=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+r}))}}},I=[],_={toasts:[],pausedAt:void 0},z=e=>{_=A(_,e),I.forEach(e=>{e(_)})},P={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=(e={})=>{let[t,s]=(0,o.useState)(_);(0,o.useEffect)(()=>(I.push(s),()=>{let e=I.indexOf(s);e>-1&&I.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var s,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(s=e[t.type])?void 0:s.duration)||(null==e?void 0:e.duration)||P[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},F=(e,t="blank",s)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...s,id:(null==s?void 0:s.id)||k()}),U=e=>(t,s)=>{let a=F(t,e,s);return z({type:2,toast:a}),a.id},T=(e,t)=>U("blank")(e,t);T.error=U("error"),T.success=U("success"),T.loading=U("loading"),T.custom=U("custom"),T.dismiss=e=>{z({type:3,toastId:e})},T.remove=e=>z({type:4,toastId:e}),T.promise=(e,t,s)=>{let a=T.loading(t.loading,{...s,...null==s?void 0:s.loading});return e.then(e=>(T.success(E(t.success,e),{id:a,...s,...null==s?void 0:s.success}),e)).catch(e=>{T.error(E(t.error,e),{id:a,...s,...null==s?void 0:s.error})}),e};var H=(e,t)=>{z({type:1,toast:{id:e,height:t}})},M=()=>{z({type:5,time:Date.now()})},V=e=>{let{toasts:t,pausedAt:s}=D(e);(0,o.useEffect)(()=>{if(s)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let s=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(s<0){t.visible&&T.dismiss(t.id);return}return setTimeout(()=>T.dismiss(t.id),s)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,s]);let a=(0,o.useCallback)(()=>{s&&z({type:6,time:Date.now()})},[s]),r=(0,o.useCallback)((e,s)=>{let{reverseOrder:a=!1,gutter:r=8,defaultPosition:i}=s||{},o=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=o.findIndex(t=>t.id===e.id),l=o.filter((e,t)=>t<n&&e.visible).length;return o.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+r,0)},[t]);return{toasts:t,handlers:{updateHeight:H,startPause:M,endPause:a,calculateOffset:r}}},J=j`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Z=j`
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
}`,L=w("div")`
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
    animation: ${Z} 0.15s ease-out forwards;
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
`,X=j`
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
}`,G=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${X} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
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
`,K=w("div")`
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
`,et=({toast:e})=>{let{icon:t,type:s,iconTheme:a}=e;return void 0!==t?"string"==typeof t?o.createElement(ee,null,t):t:"blank"===s?null:o.createElement(Q,null,o.createElement(R,{...a}),"loading"!==s&&o.createElement(K,null,"error"===s?o.createElement(L,{...a}):o.createElement(G,{...a})))},es=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,ea=e=>`
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
`,eo=(e,t)=>{let s=e.includes("top")?1:-1,[a,r]=O()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[es(s),ea(s)];return{animation:t?`${j(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${j(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},en=o.memo(({toast:e,position:t,style:s,children:a})=>{let r=e.height?eo(e.position||t||"top-center",e.visible):{opacity:0},i=o.createElement(et,{toast:e}),n=o.createElement(ei,{...e.ariaProps},E(e.message,e));return o.createElement(er,{className:e.className,style:{...r,...s,...e.style}},"function"==typeof a?a({icon:i,message:n}):o.createElement(o.Fragment,null,i,n))});i=o.createElement,m.p=void 0,b=i,y=void 0,v=void 0;var el=({id:e,className:t,style:s,onHeightUpdate:a,children:r})=>{let i=o.useCallback(t=>{if(t){let s=()=>{a(e,t.getBoundingClientRect().height)};s(),new MutationObserver(s).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return o.createElement("div",{ref:i,className:t,style:s},r)},ec=(e,t)=>{let s=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:O()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(s?1:-1)}px)`,...s?{top:0}:{bottom:0},...a}},ed=x`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,eu=({reverseOrder:e,position:t="top-center",toastOptions:s,gutter:a,children:r,containerStyle:i,containerClassName:n})=>{let{toasts:l,handlers:c}=V(s);return o.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:n,onMouseEnter:c.startPause,onMouseLeave:c.endPause},l.map(s=>{let i=s.position||t,n=ec(i,c.calculateOffset(s,{reverseOrder:e,gutter:a,defaultPosition:t}));return o.createElement(el,{id:s.id,key:s.id,onHeightUpdate:c.updateHeight,className:s.visible?ed:"",style:n},"custom"===s.type?E(s.message,s):r?r(s):o.createElement(en,{toast:s,position:i}))}))},em=T}},function(e){e.O(0,[2420,4358,6220,8373,1396,5490,9891,2971,2472,1744],function(){return e(e.s=1745)}),_N_E=e.O()}]);