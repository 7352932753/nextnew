(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8373],{8745:function(t,e,n){"use strict";n.d(e,{$s:function(){return ts},BH:function(){return T},DV:function(){return W},GJ:function(){return z},L:function(){return f},LL:function(){return M},P0:function(){return _},Pz:function(){return I},Sg:function(){return S},UI:function(){return q},US:function(){return h},Wl:function(){return F},Yr:function(){return N},ZB:function(){return g},ZR:function(){return j},aH:function(){return E},b$:function(){return R},cI:function(){return U},dS:function(){return tr},eu:function(){return x},g5:function(){return o},gK:function(){return tn},gQ:function(){return Z},h$:function(){return c},hl:function(){return L},hu:function(){return s},jU:function(){return O},m9:function(){return to},ne:function(){return Q},p$:function(){return d},pd:function(){return Y},q4:function(){return w},r3:function(){return V},ru:function(){return D},tV:function(){return p},uI:function(){return A},ug:function(){return ti},vZ:function(){return function t(e,n){if(e===n)return!0;let r=Object.keys(e),i=Object.keys(n);for(let s of r){if(!i.includes(s))return!1;let r=e[s],o=n[s];if(X(r)&&X(o)){if(!t(r,o))return!1}else if(r!==o)return!1}for(let t of i)if(!r.includes(t))return!1;return!0}},w1:function(){return k},w9:function(){return H},xO:function(){return J},xb:function(){return K},z$:function(){return C},zI:function(){return P},zd:function(){return G}});var r=n(2601);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let i={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},s=function(t,e){if(!t)throw o(e)},o=function(t){return Error("Firebase Database ("+i.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)},a=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:(i<2048?e[n++]=i>>6|192:((64512&i)==55296&&r+1<t.length&&(64512&t.charCodeAt(r+1))==56320?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128):e[n++]=i>>12|224,e[n++]=i>>6&63|128),e[n++]=63&i|128)}return e},l=function(t){let e=[],n=0,r=0;for(;n<t.length;){let i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){let s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){let s=t[n++],o=t[n++],a=t[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(1023&l))}else{let s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},h={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();let n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){let i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,l=a?t[e+2]:0,h=i>>2,u=(3&i)<<4|o>>4,c=(15&o)<<2|l>>6,f=63&l;a||(f=64,s||(c=64)),r.push(n[h],n[u],n[c],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(a(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):l(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();let n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){let i=n[t.charAt(e++)],s=e<t.length,o=s?n[t.charAt(e)]:0;++e;let a=e<t.length,l=a?n[t.charAt(e)]:64;++e;let h=e<t.length,c=h?n[t.charAt(e)]:64;if(++e,null==i||null==o||null==l||null==c)throw new u;let f=i<<2|o>>4;if(r.push(f),64!==l){let t=o<<4&240|l>>2;if(r.push(t),64!==c){let t=l<<6&192|c;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}let c=function(t){let e=a(t);return h.encodeByteArray(e,!0)},f=function(t){return c(t).replace(/\./g,"")},p=function(t){try{return h.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(t){return g(void 0,t)}function g(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:return new Date(e.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(let n in e)e.hasOwnProperty(n)&&"__proto__"!==n&&(t[n]=g(t[n],e[n]));return t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let m=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==n.g)return n.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,y=()=>{if(void 0===r||void 0===r.env)return;let t=r.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},v=()=>{let t;if("undefined"==typeof document)return;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(t){return}let e=t&&p(t[1]);return e&&JSON.parse(e)},b=()=>{try{return m()||y()||v()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w=t=>{var e,n;return null===(n=null===(e=b())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},_=t=>{let e=w(t);if(!e)return;let n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw Error(`Invalid host ${e} with no separate hostname and port!`);let r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E=()=>{var t;return null===(t=b())||void 0===t?void 0:t.config},I=t=>{var e;return null===(e=b())||void 0===e?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(t,e){if(t.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[f(JSON.stringify({alg:"none",type:"JWT"})),f(JSON.stringify(s)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function A(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(C())}function O(){return"object"==typeof self&&self.self===self}function D(){let t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function R(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function k(){let t=C();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function N(){return!0===i.NODE_CLIENT||!0===i.NODE_ADMIN}function L(){try{return"object"==typeof indexedDB}catch(t){return!1}}function x(){return new Promise((t,e)=>{try{let n=!0,r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}})}function P(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}class j extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,j.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,M.prototype.create)}}class M{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){let n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?i.replace(B,(t,e)=>{let r=n[e];return null!=r?String(r):`<${e}?>`}):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new j(r,o,n);return a}}let B=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return JSON.parse(t)}function F(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $=function(t){let e={},n={},r={},i="";try{let s=t.split(".");e=U(p(s[0])||""),n=U(p(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch(t){}return{header:e,claims:n,data:r,signature:i}},H=function(t){let e=$(t),n=e.claims;return!!n&&"object"==typeof n&&n.hasOwnProperty("iat")},z=function(t){let e=$(t).claims;return"object"==typeof e&&!0===e.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function W(t,e){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:void 0}function K(t){for(let e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function q(t,e,n){let r={};for(let i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function X(t){return null!==t&&"object"==typeof t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){let e=[];for(let[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function G(t){let e={},n=t.replace(/^\?/,"").split("&");return n.forEach(t=>{if(t){let[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}}),e}function Y(t){let e=t.indexOf("?");if(!e)return"";let n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,e){let n,r;e||(e=0);let i=this.W_;if("string"==typeof t)for(let n=0;n<16;n++)i[n]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(let n=0;n<16;n++)i[n]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(let t=16;t<80;t++){let e=i[t-3]^i[t-8]^i[t-14]^i[t-16];i[t]=(e<<1|e>>>31)&4294967295}let s=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let t=0;t<80;t++){t<40?t<20?(n=l^o&(a^l),r=1518500249):(n=o^a^l,r=1859775393):t<60?(n=o&a|l&(o|a),r=2400959708):(n=o^a^l,r=3395469782);let e=(s<<5|s>>>27)+n+h+r+i[t]&4294967295;h=l,l=a,a=(o<<30|o>>>2)&4294967295,o=s,s=e}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(t,e){if(null==t)return;void 0===e&&(e=t.length);let n=e-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;for(;r<e;){if(0===s)for(;r<=n;)this.compress_(t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(i[s]=t.charCodeAt(r),++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<e;)if(i[s]=t[r],++s,++r,s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}digest(){let t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let t=this.blockSize-1;t>=56;t--)this.buf_[t]=255&e,e/=256;this.compress_(this.buf_);let n=0;for(let e=0;e<5;e++)for(let r=24;r>=0;r-=8)t[n]=this.chain_[e]>>r&255,++n;return t}}function Q(t,e){let n=new tt(t,e);return n.subscribe.bind(n)}class tt{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw Error("Missing Observer.");void 0===(r=!function(t,e){if("object"!=typeof t||null===t)return!1;for(let n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?{next:t,error:e,complete:n}:t).next&&(r.next=te),void 0===r.error&&(r.error=te),void 0===r.complete&&(r.complete=te);let i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function te(){}function tn(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tr=function(t){let e=[],n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){let e=i-55296;s(++r<t.length,"Surrogate pair missing trail surrogate.");let n=t.charCodeAt(r)-56320;i=65536+(e<<10)+n}i<128?e[n++]=i:(i<2048?e[n++]=i>>6|192:(i<65536?e[n++]=i>>12|224:(e[n++]=i>>18|240,e[n++]=i>>12&63|128),e[n++]=i>>6&63|128),e[n++]=63&i|128)}return e},ti=function(t){let e=0;for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};function ts(t,e=1e3,n=2){let r=e*Math.pow(n,t);return Math.min(144e5,r+Math.round(.5*r*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){return t&&t._delegate?t._delegate:t}},2601:function(t,e,n){"use strict";var r,i;t.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(i=n.g.process)?void 0:i.env)?n.g.process:n(8960)},8960:function(t){!function(){var e={229:function(t){var e,n,r,i=t.exports={};function s(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function a(t){if(e===setTimeout)return setTimeout(t,0);if((e===s||!e)&&setTimeout)return e=setTimeout,setTimeout(t,0);try{return e(t,0)}catch(n){try{return e.call(null,t,0)}catch(n){return e.call(this,t,0)}}}!function(){try{e="function"==typeof setTimeout?setTimeout:s}catch(t){e=s}try{n="function"==typeof clearTimeout?clearTimeout:o}catch(t){n=o}}();var l=[],h=!1,u=-1;function c(){h&&r&&(h=!1,r.length?l=r.concat(l):u=-1,l.length&&f())}function f(){if(!h){var t=a(c);h=!0;for(var e=l.length;e;){for(r=l,l=[];++u<e;)r&&r[u].run();u=-1,e=l.length}r=null,h=!1,function(t){if(n===clearTimeout)return clearTimeout(t);if((n===o||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(t);try{n(t)}catch(e){try{return n.call(null,t)}catch(e){return n.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function d(){}i.nextTick=function(t){var e=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];l.push(new p(t,e)),1!==l.length||h||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}},n={};function r(t){var i=n[t];if(void 0!==i)return i.exports;var s=n[t]={exports:{}},o=!0;try{e[t](s,s.exports,r),o=!1}finally{o&&delete n[t]}return s.exports}r.ab="//";var i=r(229);t.exports=i}()},622:function(t,e,n){"use strict";var r=n(2265),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function h(t,e,n){var r,s={},h=null,u=null;for(r in void 0!==n&&(h=""+n),void 0!==e.key&&(h=""+e.key),void 0!==e.ref&&(u=e.ref),e)o.call(e,r)&&!l.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps)void 0===s[r]&&(s[r]=e[r]);return{$$typeof:i,type:t,key:h,ref:u,props:s,_owner:a.current}}e.Fragment=s,e.jsx=h,e.jsxs=h},7437:function(t,e,n){"use strict";t.exports=n(622)},4033:function(t,e,n){t.exports=n(94)},1172:function(t,e,n){"use strict";n.d(e,{w_:function(){return l}});var r=n(2265),i={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(i),o=function(){return(o=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)},a=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>e.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n};function l(t){return function(e){return r.createElement(h,o({attr:o({},t.attr)},e),function t(e){return e&&e.map(function(e,n){return r.createElement(e.tag,o({key:n},e.attr),t(e.child))})}(t.child))}}function h(t){var e=function(e){var n,i=t.attr,s=t.size,l=t.title,h=a(t,["attr","size","title"]),u=s||e.size||"1em";return e.className&&(n=e.className),t.className&&(n=(n?n+" ":"")+t.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},e.attr,i,h,{className:n,style:o(o({color:t.color||e.color},e.style),t.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),t.children)};return void 0!==s?r.createElement(s.Consumer,null,function(t){return e(t)}):e(i)}},3991:function(t,e,n){"use strict";let r,i;n.r(e),n.d(e,{FirebaseError:function(){return l.ZR},SDK_VERSION:function(){return B},_DEFAULT_ENTRY_NAME:function(){return C},_addComponent:function(){return R},_addOrOverwriteComponent:function(){return k},_apps:function(){return O},_clearComponents:function(){return P},_components:function(){return D},_getProvider:function(){return L},_registerComponent:function(){return N},_removeServiceInstance:function(){return x},deleteApp:function(){return H},getApp:function(){return F},getApps:function(){return $},initializeApp:function(){return U},onLog:function(){return V},registerVersion:function(){return z},setLogLevel:function(){return W}});var s,o=n(5538),a=n(6914),l=n(8745);let h=(t,e)=>e.some(e=>t instanceof e),u=new WeakMap,c=new WeakMap,f=new WeakMap,p=new WeakMap,d=new WeakMap,g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return c.get(t);if("objectStoreNames"===e)return t.objectStoreNames||f.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return m(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function m(t){var e;if(t instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(m(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&u.set(e,t)}).catch(()=>{}),d.set(e,t),e}(t);if(p.has(t))return p.get(t);let n="function"==typeof(e=t)?e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(y(this),t),m(u.get(this))}:function(...t){return m(e.apply(y(this),t))}:function(t,...n){let r=e.call(y(this),t,...n);return f.set(r,t.sort?t.sort():[t]),m(r)}:(e instanceof IDBTransaction&&function(t){if(c.has(t))return;let e=new Promise((e,n)=>{let r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});c.set(t,e)}(e),h(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,g):e;return n!==t&&(p.set(t,n),d.set(n,t)),n}let y=t=>d.get(t),v=["get","getKey","getAll","getAllKeys","count"],b=["put","add","delete","clear"],w=new Map;function _(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(w.get(e))return w.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,i=b.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||v.includes(n)))return;let s=async function(t,...e){let s=this.transaction(t,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return w.set(e,s),s}g={...s=g,get:(t,e,n)=>_(t,e)||s.get(t,e,n),has:(t,e)=>!!_(t,e)||s.has(t,e)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(t){this.container=t}getPlatformInfoString(){let t=this.container.getProviders();return t.map(t=>{if(!function(t){let e=t.getComponent();return(null==e?void 0:e.type)==="VERSION"}(t))return null;{let e=t.getImmediate();return`${e.library}/${e.version}`}}).filter(t=>t).join(" ")}}let I="@firebase/app",T="0.9.25",S=new a.Yd("@firebase/app"),C="[DEFAULT]",A={[I]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},O=new Map,D=new Map;function R(t,e){try{t.container.addComponent(e)}catch(n){S.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function k(t,e){t.container.addOrOverwriteComponent(e)}function N(t){let e=t.name;if(D.has(e))return S.debug(`There were multiple attempts to register component ${e}.`),!1;for(let n of(D.set(e,t),O.values()))R(n,t);return!0}function L(t,e){let n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function x(t,e,n=C){L(t,e).clearInstance(n)}function P(){D.clear()}let j=new l.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new o.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw j.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let B="10.7.1";function U(t,e={}){let n=t;if("object"!=typeof e){let t=e;e={name:t}}let r=Object.assign({name:C,automaticDataCollectionEnabled:!1},e),i=r.name;if("string"!=typeof i||!i)throw j.create("bad-app-name",{appName:String(i)});if(n||(n=(0,l.aH)()),!n)throw j.create("no-options");let s=O.get(i);if(s){if((0,l.vZ)(n,s.options)&&(0,l.vZ)(r,s.config))return s;throw j.create("duplicate-app",{appName:i})}let a=new o.H0(i);for(let t of D.values())a.addComponent(t);let h=new M(n,r,a);return O.set(i,h),h}function F(t=C){let e=O.get(t);if(!e&&t===C&&(0,l.aH)())return U();if(!e)throw j.create("no-app",{appName:t});return e}function $(){return Array.from(O.values())}async function H(t){let e=t.name;O.has(e)&&(O.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function z(t,e,n){var r;let i=null!==(r=A[t])&&void 0!==r?r:t;n&&(i+=`-${n}`);let s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){let t=[`Unable to register library "${i}" with version "${e}":`];s&&t.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),S.warn(t.join(" "));return}N(new o.wA(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function V(t,e){if(null!==t&&"function"!=typeof t)throw j.create("invalid-log-argument");(0,a.Am)(t,e)}function W(t){(0,a.Ub)(t)}let K="firebase-heartbeat-store",q=null;function X(){return q||(q=(function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(t,1),a=m(o);return r&&o.addEventListener("upgradeneeded",t=>{r(m(o.result),t.oldVersion,t.newVersion,m(o.transaction),t)}),n&&o.addEventListener("blocked",t=>n(t.oldVersion,t.newVersion,t)),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",t=>i(t.oldVersion,t.newVersion,t))}).catch(()=>{}),a})("firebase-heartbeat-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(K)}}).catch(t=>{throw j.create("idb-open",{originalErrorMessage:t.message})})),q}async function J(t){try{let e=await X(),n=await e.transaction(K).objectStore(K).get(Y(t));return n}catch(t){if(t instanceof l.ZR)S.warn(t.message);else{let e=j.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});S.warn(e.message)}}}async function G(t,e){try{let n=await X(),r=n.transaction(K,"readwrite"),i=r.objectStore(K);await i.put(e,Y(t)),await r.done}catch(t){if(t instanceof l.ZR)S.warn(t.message);else{let e=j.create("idb-set",{originalErrorMessage:null==t?void 0:t.message});S.warn(e.message)}}}function Y(t){return`${t.name}!${t.options.appId}`}class Z{constructor(t){this.container=t,this._heartbeatsCache=null;let e=this.container.getProvider("app").getImmediate();this._storage=new tt(e),this._heartbeatsCachePromise=this._storage.read().then(t=>(this._heartbeatsCache=t,t))}async triggerHeartbeat(){var t,e;let n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=Q();return(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)==null)?void 0:this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(t=>t.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(t=>{let e=new Date(t.date).valueOf(),n=Date.now();return n-e<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)==null||0===this._heartbeatsCache.heartbeats.length)return"";let e=Q(),{heartbeatsToSend:n,unsentEntries:r}=function(t,e=1024){let n=[],r=t.slice();for(let i of t){let t=n.find(t=>t.agent===i.agent);if(t){if(t.dates.push(i.date),te(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),te(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=(0,l.L)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Q(){let t=new Date;return t.toISOString().substring(0,10)}class tt{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,l.hl)()&&(0,l.eu)().then(()=>!0).catch(()=>!1)}async read(){let t=await this._canUseIndexedDBPromise;if(!t)return{heartbeats:[]};{let t=await J(this.app);return(null==t?void 0:t.heartbeats)?t:{heartbeats:[]}}}async overwrite(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return G(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;let n=await this._canUseIndexedDBPromise;if(n){let n=await this.read();return G(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function te(t){return(0,l.L)(JSON.stringify({version:2,heartbeats:t})).length}N(new o.wA("platform-logger",t=>new E(t),"PRIVATE")),N(new o.wA("heartbeat",t=>new Z(t),"PRIVATE")),z(I,T,""),z(I,T,"esm2017"),z("fire-js","")},5538:function(t,e,n){"use strict";n.d(e,{H0:function(){return a},wA:function(){return i}});var r=n(8745);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){let e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){let t=new r.BH;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{let n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;let n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if("EAGER"===t.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(let[t,e]of this.instancesDeferred.entries()){let n=this.normalizeInstanceIdentifier(t);try{let t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){let t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){let{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(let[t,e]of this.instancesDeferred.entries()){let i=this.normalizeInstanceIdentifier(t);n===i&&e.resolve(r)}return r}onInit(t,e){var n;let r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);let s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){let n=this.onInitCallbacks.get(e);if(n)for(let r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:t===s?void 0:t,options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(t){this.name=t,this.providers=new Map}addComponent(t){let e=this.getProvider(t.name);if(e.isComponentSet())throw Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){let e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);let e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},6914:function(t,e,n){"use strict";var r,i;n.d(e,{Am:function(){return f},Ub:function(){return c},Yd:function(){return u},in:function(){return r}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let s=[];(i=r||(r={}))[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT";let o={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},a=r.INFO,l={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},h=(t,e,...n)=>{if(e<t.logLevel)return;let r=new Date().toISOString(),i=l[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class u{constructor(t){this.name=t,this._logLevel=a,this._logHandler=h,this._userLogHandler=null,s.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in r))throw TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...t),this._logHandler(this,r.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...t),this._logHandler(this,r.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,r.INFO,...t),this._logHandler(this,r.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,r.WARN,...t),this._logHandler(this,r.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...t),this._logHandler(this,r.ERROR,...t)}}function c(t){s.forEach(e=>{e.setLogLevel(t)})}function f(t,e){for(let n of s){let i=null;e&&e.level&&(i=o[e.level]),null===t?n.userLogHandler=null:n.userLogHandler=(e,n,...s)=>{let o=s.map(t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}}).filter(t=>t).join(" ");n>=(null!=i?i:e.logLevel)&&t({level:r[n].toLowerCase(),message:o,args:s,type:e.name})}}}},613:function(t,e,n){"use strict";n.d(e,{FJ:function(){return nB},JJ:function(){return nz},UE:function(){return nM},V8:function(){return nV},ii:function(){return nH},jK:function(){return nU},ju:function(){return Event},kN:function(){return n$},tw:function(){return nF},z8:function(){return nW}});var r,i,s,o,a,l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},h={},u=u||{},c=l||self;function f(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function p(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function d(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?d:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}b.prototype.s=!1,b.prototype.sa=function(){this.s||(this.s=!0,this.N())},b.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return -1};function _(t){let e=t.length;if(0<e){let n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function E(t,e){for(let e=1;e<arguments.length;e++){let n=arguments[e];if(f(n)){let e=t.length||0,r=n.length||0;t.length=e+r;for(let i=0;i<r;i++)t[e+i]=n[i]}else t.push(n)}}function I(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var T=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{let t=()=>{};c.addEventListener("test",t,e),c.removeEventListener("test",t,e)}catch(t){}return t}();function S(t){return/^[\s\xa0]*$/.test(t)}function C(){var t=c.navigator;return t&&(t=t.userAgent)?t:""}function A(t){return -1!=C().indexOf(t)}function O(t){return O[" "](t),t}O[" "]=function(){};var D=A("Opera"),R=A("Trident")||A("MSIE"),k=A("Edge"),N=k||R,L=A("Gecko")&&!(-1!=C().toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),x=-1!=C().toLowerCase().indexOf("webkit")&&!A("Edge");function P(){var t=c.document;return t?t.documentMode:void 0}t:{var j,M="",B=(j=C(),L?/rv:([^\);]+)(\)|;)/.exec(j):k?/Edge\/([\d\.]+)/.exec(j):R?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j):x?/WebKit\/(\S+)/.exec(j):D?/(?:Version)[ \/]?(\S+)/.exec(j):void 0);if(B&&(M=B?B[1]:""),R){var U=P();if(null!=U&&U>parseFloat(M)){i=String(U);break t}}i=M}var F=c.document&&R&&(P()||parseInt(i,10))||void 0;function $(t,e){if(I.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(L){t:{try{O(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:H[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&$.$.h.call(this)}}v($,I);var H={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var z="closure_listenable_"+(1e6*Math.random()|0),V=0;function W(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++V,this.fa=this.ia=!1}function K(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function q(t,e,n){for(let r in t)e.call(n,t[r],r,t)}function X(t){let e={};for(let n in t)e[n]=t[n];return e}let J="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function G(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e])t[n]=r[n];for(let e=0;e<J.length;e++)n=J[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Y(t){this.src=t,this.g={},this.h=0}function Z(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=w(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(K(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Q(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&!!n==s.capture&&s.la==r)return i}return -1}Y.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=Q(t,e,r,i);return -1<o?(e=t[o],n||(e.ia=!1)):((e=new W(e,this.src,s,!!r,i)).ia=n,t.push(e)),e};var tt="closure_lm_"+(1e6*Math.random()|0),te={};function tn(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=to(t);if(a||(t[tt]=a=new Y(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function t(e){return ts.call(t.src,t.listener,e)},n.proxy=r,r.src=t,r.listener=n,t.addEventListener)T||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(ti(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function tr(t){if("number"!=typeof t&&t&&!t.fa){var e=t.src;if(e&&e[z])Z(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(ti(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=to(e))?(Z(n,t),0==n.h&&(n.src=null,e[tt]=null)):K(t)}}}function ti(t){return t in te?te[t]:te[t]="on"+t}function ts(t,e){if(t.fa)t=!0;else{e=new $(e,this);var n=t.listener,r=t.la||t.src;t.ia&&tr(t),t=n.call(r,e)}return t}function to(t){return(t=t[tt])instanceof Y?t:null}var ta="__closure_events_fn_"+(1e9*Math.random()>>>0);function tl(t){return"function"==typeof t?t:(t[ta]||(t[ta]=function(e){return t.handleEvent(e)}),t[ta])}function th(){b.call(this),this.i=new Y(this),this.S=this,this.J=null}function tu(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,"string"==typeof e)e=new I(e,t);else if(e instanceof I)e.target=e.target||t;else{var i=e;G(e=new I(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=tc(o,r,!0,e)&&i}if(i=tc(o=e.g=t,r,!0,e)&&i,i=tc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=tc(o=e.g=n[s],r,!1,e)&&i}function tc(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Z(t.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}v(th,b),th.prototype[z]=!0,th.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);else(i=p(i)?!!i.capture:!!i,r=tl(r),e&&e[z])?(e=e.i,(n=String(n).toString())in e.g&&-1<(r=Q(o=e.g[n],r,i,s))&&(K(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[n],e.h--))):e&&(e=to(e))&&(n=e.g[n.toString()],e=-1,n&&(e=Q(n,r,i,s)),(r=-1<e?n[e]:null)&&tr(r))}(this,t,e,n,r)},th.prototype.N=function(){if(th.$.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)K(n[r]);delete e.g[t],e.h--}}this.J=null},th.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},th.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var tf=c.JSON.stringify;class tp{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}class td{constructor(){this.h=this.g=null}add(t,e){let n=tg.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var tg=new tp(()=>new tm,t=>t.reset());class tm{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let ty,tv=!1,tb=new td,tw=()=>{let t=c.Promise.resolve(void 0);ty=()=>{t.then(t_)}};var t_=()=>{let t;for(var e;t=null,tb.g&&(t=tb.g,tb.g=tb.g.next,tb.g||(tb.h=null),t.next=null),e=t;){try{e.h.call(e.g)}catch(t){!function(t){c.setTimeout(()=>{throw t},0)}(t)}tg.j(e),100>tg.h&&(tg.h++,e.next=tg.g,tg.g=e)}tv=!1};function tE(t,e){th.call(this),this.h=t||1,this.g=e||c,this.j=m(this.qb,this),this.l=Date.now()}function tI(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}function tT(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else if(t&&"function"==typeof t.handleEvent)t=m(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}v(tE,th),(a=tE.prototype).ga=!1,a.T=null,a.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),tu(this,"tick"),this.ga&&(tI(this),this.start()))}},a.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},a.N=function(){tE.$.N.call(this),tI(this),delete this.g};class tS extends b{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:function t(e){e.g=tT(()=>{e.g=null,e.i&&(e.i=!1,t(e))},e.j);let n=e.h;e.h=null,e.m.apply(null,n)}(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tC(t){b.call(this),this.h=t,this.g={}}v(tC,b);var tA=[];function tO(t,e,n,r){Array.isArray(n)||(n&&(tA[0]=n.toString()),n=tA);for(var i=0;i<n.length;i++){var s=function t(e,n,r,i,s){if(i&&i.once)return function t(e,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}return r=tl(r),e&&e[z]?e.P(n,r,p(i)?!!i.capture:!!i,s):tn(e,n,r,!0,i,s)}(e,n,r,i,s);if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}return r=tl(r),e&&e[z]?e.O(n,r,p(i)?!!i.capture:!!i,s):tn(e,n,r,!1,i,s)}(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function tD(t){q(t.g,function(t,e){this.g.hasOwnProperty(e)&&tr(t)},t),t.g={}}function tR(){this.g=!0}function tk(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}}return tf(n)}catch(t){return e}}(t,n)+(r?" "+r:"")})}tC.prototype.N=function(){tC.$.N.call(this),tD(this)},tC.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},tR.prototype.Ea=function(){this.g=!1},tR.prototype.info=function(){};var tN={},tL=null;function tx(){return tL=tL||new th}function tP(t){I.call(this,tN.Ta,t)}function tj(t){let e=tx();tu(e,new tP(e))}function tM(t,e){I.call(this,tN.STAT_EVENT,t),this.stat=e}function tB(t){let e=tx();tu(e,new tM(e,t))}function tU(t,e){I.call(this,tN.Ua,t),this.size=e}function tF(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){t()},e)}tN.Ta="serverreachability",v(tP,I),tN.STAT_EVENT="statevent",v(tM,I),tN.Ua="timingevent",v(tU,I);var t$={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},tH={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function tz(){}function tV(t){return t.h||(t.h=t.i())}function tW(){}tz.prototype.h=null;var tK={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function tq(){I.call(this,"d")}function tX(){I.call(this,"c")}function tJ(){}function tG(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new tC(this),this.P=tZ,t=N?125:void 0,this.V=new tE(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new tY}function tY(){this.i=null,this.g="",this.h=!1}v(tq,I),v(tX,I),v(tJ,tz),tJ.prototype.g=function(){return new XMLHttpRequest},tJ.prototype.i=function(){return{}},o=new tJ;var tZ=45e3,tQ={},t0={};function t2(t,e,n){t.L=1,t.A=eh(ei(e)),t.u=n,t.S=!0,t1(t,null)}function t1(t,e){t.G=Date.now(),t6(t),t.B=ei(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),eE(n.i,"t",r),t.o=0,n=t.l.J,t.h=new tY,t.g=nc(t.l,n?e:null,!t.u),0<t.O&&(t.M=new tS(m(t.Pa,t,t.g),t.O)),tO(t.U,t.g,"readystatechange",t.nb),e=t.I?X(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),tj(),function(t,e,n,r,i,s){t.info(function(){if(t.g){if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var h=a[l].split("=");if(1<h.length){var u=h[0];h=h[1];var c=u.split("_");o=2<=c.length&&"type"==c[1]?o+(u+"=")+h+"&":o+(u+"=redacted&")}}else o=null}else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o})}(t.j,t.v,t.B,t.m,t.W,t.u)}function t9(t){return!!t.g&&"GET"==t.v&&2!=t.L&&t.l.Ha}function t4(t,e,n){let r=!0,i;for(;!t.J&&t.o<n.length;)if((i=function(t,e){var n=t.o,r=e.indexOf("\n",n);return -1==r?t0:isNaN(n=Number(e.substring(n,r)))?tQ:(r+=1)+n>e.length?t0:(e=e.slice(r,r+n),t.o=r+n,e)}(t,n))==t0){4==e&&(t.s=4,tB(14),r=!1),tk(t.j,t.m,null,"[Incomplete Response]");break}else if(i==tQ){t.s=4,tB(15),tk(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else tk(t.j,t.m,i,null),et(t,i);t9(t)&&0!=t.o&&(t.h.g=t.h.g.slice(t.o),t.o=0),4!=e||0!=n.length||t.h.h||(t.s=1,tB(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,(e=t.l).g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),nr(e),e.M=!0,tB(11))):(tk(t.j,t.m,n,"[Invalid Chunked Response]"),t8(t),t7(t))}function t6(t){t.Y=Date.now()+t.P,t5(t,t.P)}function t5(t,e){if(null!=t.C)throw Error("WatchDog timer not null");t.C=tF(m(t.lb,t),e)}function t3(t){t.C&&(c.clearTimeout(t.C),t.C=null)}function t7(t){0==t.l.H||t.J||no(t.l,t)}function t8(t){t3(t);var e=t.M;e&&"function"==typeof e.sa&&e.sa(),t.M=null,tI(t.V),tD(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function et(t,e){try{var n=t.l;if(0!=n.H&&(n.g==t||eD(n.i,t))){if(!t.K&&eD(n.i,t)&&3==n.H){try{var r=n.Ja.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(n.g.G+3e3<t.G)ns(n),e6(n);else break t}nn(n),tB(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&0==n.A&&!n.v&&(n.v=tF(m(n.ib,n),6e3));if(1>=eO(n.i)&&n.oa){try{n.oa()}catch(t){}n.oa=void 0}}else nl(n,11)}else if((t.K||n.g==t)&&ns(n),!S(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let a=i[e];if(n.V=a[0],a=a[1],2==n.H){if("c"==a[0]){n.K=a[1],n.pa=a[2];let e=a[3];null!=e&&(n.ra=e,n.l.info("VER="+n.ra));let i=a[4];null!=i&&(n.Ga=i,n.l.info("SVER="+n.Ga));let l=a[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;let h=t.g;if(h){let t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(eR(s,s.h),s.h=null))}if(r.F){let t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.Da=t,el(r.I,r.F,t))}}if(n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),(r=n).wa=nu(r,r.J?r.pa:null,r.Y),t.K){ek(r.i,t);var o=r.L;o&&t.setTimeout(o),t.C&&(t3(t),t6(t)),r.g=t}else ne(r);0<n.j.length&&e3(n)}else"stop"!=a[0]&&"close"!=a[0]||nl(n,7)}else 3==n.H&&("stop"==a[0]||"close"==a[0]?"stop"==a[0]?nl(n,7):e4(n):"noop"!=a[0]&&n.h&&n.h.Aa(a),n.A=0)}}tj(4)}catch(t){}}function ee(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(f(t)||"string"==typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=function(t){if(t.ta&&"function"==typeof t.ta)return t.ta();if(!t.Z||"function"!=typeof t.Z){if("undefined"!=typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!=typeof Set&&t instanceof Set)){if(f(t)||"string"==typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}for(let r in e=[],n=0,t)e[n++]=r;return e}}}(t),r=function(t){if(t.Z&&"function"==typeof t.Z)return t.Z();if("undefined"!=typeof Map&&t instanceof Map||"undefined"!=typeof Set&&t instanceof Set)return Array.from(t.values());if("string"==typeof t)return t.split("");if(f(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}(a=tG.prototype).setTimeout=function(t){this.P=t},a.nb=function(t){t=t.target;let e=this.M;e&&3==eZ(t)?e.l():this.Pa(t)},a.Pa=function(t){try{if(t==this.g)t:{let u=eZ(this.g);var e=this.g.Ia();let f=this.g.da();if(!(3>u)&&(3!=u||N||this.g&&(this.h.h||this.g.ja()||eQ(this.g)))){this.J||4!=u||7==e||(8==e||0>=f?tj(3):tj(2)),t3(this);var n=this.g.da();this.ca=n;e:if(t9(this)){var r=eQ(this.g);t="";var i=r.length,s=4==eZ(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){t8(this),t7(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o})}(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var h=a;break e}}h=null}if(n=h)tk(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,et(this,n);else{this.i=!1,this.s=3,tB(12),t8(this),t7(this);break t}}this.S?(t4(this,u,o),N&&this.i&&3==u&&(tO(this.U,this.V,"tick",this.mb),this.V.start())):(tk(this.j,this.m,o,null),et(this,o)),4==u&&t8(this),this.i&&!this.J&&(4==u?no(this.l,this):(this.i=!1,t6(this)))}else(function(t){let e={};t=(t.g&&2<=eZ(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(S(t[r]))continue;var n=function(t){var e=1;t=t.split(":");let n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}(t[r]);let i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();let s=e[i]||[];e[i]=s,s.push(n)}!function(t,e){for(let n in t)e.call(void 0,t[n],n,t)}(e,function(t){return t.join(", ")})})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,tB(12)):(this.s=0,tB(13)),t8(this),t7(this)}}}catch(t){}finally{}},a.mb=function(){if(this.g){var t=eZ(this.g),e=this.g.ja();this.o<e.length&&(t3(this),t4(this,t,e),this.i&&4!=t&&t6(this))}},a.cancel=function(){this.J=!0,t8(this)},a.lb=function(){this.C=null;let t=Date.now();0<=t-this.Y?(function(t,e){t.info(function(){return"TIMEOUT: "+e})}(this.j,this.B),2!=this.L&&(tj(),tB(17)),t8(this),this.s=2,t7(this)):t5(this,this.Y-t)};var en=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function er(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof er){this.h=t.h,es(this,t.j),this.s=t.s,this.g=t.g,eo(this,t.m),this.l=t.l;var e=t.i,n=new ev;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),ea(this,n),this.o=t.o}else t&&(e=String(t).match(en))?(this.h=!1,es(this,e[1]||"",!0),this.s=eu(e[2]||""),this.g=eu(e[3]||"",!0),eo(this,e[4]),this.l=eu(e[5]||"",!0),ea(this,e[6]||"",!0),this.o=eu(e[7]||"")):(this.h=!1,this.i=new ev(null,this.h))}function ei(t){return new er(t)}function es(t,e,n){t.j=n?eu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function eo(t,e){if(e){if(isNaN(e=Number(e))||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function ea(t,e,n){var r,i;e instanceof ev?(t.i=e,r=t.i,(i=t.h)&&!r.j&&(eb(r),r.i=null,r.g.forEach(function(t,e){var n=e.toLowerCase();e!=n&&(ew(this,e),eE(this,n,t))},r)),r.j=i):(n||(e=ec(e,em)),t.i=new ev(e,t.h))}function el(t,e,n){t.i.set(e,n)}function eh(t){return el(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function eu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ec(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ef),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ef(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}er.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ec(e,ep,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(ec(e,ep,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ec(n,"/"==n.charAt(0)?eg:ed,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ec(n,ey)),t.join("")};var ep=/[#\/\?@]/g,ed=/[#\?:]/g,eg=/[#\?]/g,em=/[#\?@]/g,ey=/#/g;function ev(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function eb(t){t.g||(t.g=new Map,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}function ew(t,e){eb(t),e=eI(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function e_(t,e){return eb(t),e=eI(t,e),t.g.has(e)}function eE(t,e,n){ew(t,e),0<n.length&&(t.i=null,t.g.set(eI(t,e),_(n)),t.h+=n.length)}function eI(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(a=ev.prototype).add=function(t,e){eb(this),this.i=null,t=eI(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},a.forEach=function(t,e){eb(this),this.g.forEach(function(n,r){n.forEach(function(n){t.call(e,n,r,this)},this)},this)},a.ta=function(){eb(this);let t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){let i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},a.Z=function(t){eb(this);let e=[];if("string"==typeof t)e_(this,t)&&(e=e.concat(this.g.get(eI(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},a.set=function(t,e){return eb(this),this.i=null,e_(this,t=eI(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},a.get=function(t,e){return t&&0<(t=this.Z(t)).length?String(t[0]):e},a.toString=function(){if(this.i)return this.i;if(!this.g)return"";let t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];let s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};var eT=class{constructor(t,e){this.g=t,this.map=e}};function eS(t){this.l=t||eC,t=c.PerformanceNavigationTiming?0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(c.g&&c.g.Ka&&c.g.Ka()&&c.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eC=10;function eA(t){return!!t.h||!!t.g&&t.g.size>=t.j}function eO(t){return t.h?1:t.g?t.g.size:0}function eD(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function eR(t,e){t.g?t.g.add(e):t.h=e}function ek(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function eN(t){if(null!=t.h)return t.i.concat(t.h.F);if(null!=t.g&&0!==t.g.size){let e=t.i;for(let n of t.g.values())e=e.concat(n.F);return e}return _(t.i)}eS.prototype.cancel=function(){if(this.i=eN(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let t of this.g.values())t.cancel();this.g.clear()}};var eL=class{stringify(t){return c.JSON.stringify(t,void 0)}parse(t){return c.JSON.parse(t,void 0)}};function ex(){this.g=new eL}function eP(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function ej(t){this.l=t.ec||null,this.j=t.ob||!1}function eM(t,e){th.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=eB,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}v(ej,tz),ej.prototype.g=function(){return new eM(this.l,this.j)},ej.prototype.i=(r={},function(){return r}),v(eM,th);var eB=0;function eU(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}function eF(t){t.readyState=4,t.l=null,t.j=null,t.A=null,e$(t)}function e$(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(a=eM.prototype).open=function(t,e){if(this.readyState!=eB)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,e$(this)},a.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||c).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))},a.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,eF(this)),this.readyState=eB},a.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,e$(this)),this.g&&(this.readyState=3,e$(this),this.g))){if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;eU(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))}},a.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?eF(this):e$(this),3==this.readyState&&eU(this)}},a.Za=function(t){this.g&&(this.response=this.responseText=t,eF(this))},a.Ya=function(t){this.g&&(this.response=t,eF(this))},a.ka=function(){this.g&&eF(this)},a.setRequestHeader=function(t,e){this.v.append(t,e)},a.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},a.getAllResponseHeaders=function(){if(!this.h)return"";let t=[],e=this.h.entries();for(var n=e.next();!n.done;)t.push((n=n.value)[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(eM.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var eH=c.JSON.parse;function ez(t){th.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=eV,this.L=this.M=!1}v(ez,th);var eV="",eW=/^https?$/i,eK=["POST","PUT"];function eq(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,eX(t),eG(t)}function eX(t){t.F||(t.F=!0,tu(t,"complete"),tu(t,"error"))}function eJ(t){if(t.h&&void 0!==u&&(!t.C[1]||4!=eZ(t)||2!=t.da())){if(t.v&&4==eZ(t))tT(t.La,0,t);else if(tu(t,"readystatechange"),4==eZ(t)){t.h=!1;try{let o=t.da();switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e,n,r=!0;break;default:r=!1}if(!(e=r)){if(n=0===o){var i=String(t.I).match(en)[1]||null;!i&&c.self&&c.self.location&&(i=c.self.location.protocol.slice(0,-1)),n=!eW.test(i?i.toLowerCase():"")}e=n}if(e)tu(t,"complete"),tu(t,"success");else{t.m=6;try{var s=2<eZ(t)?t.g.statusText:""}catch(t){s=""}t.j=s+" ["+t.da()+"]",eX(t)}}finally{eG(t)}}}}function eG(t,e){if(t.g){eY(t);let n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||tu(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function eY(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function eZ(t){return t.g?t.g.readyState:0}function eQ(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case eV:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function e0(t){let e="";return q(t,function(t,n){e+=n+":"+t+"\r\n"}),e}function e2(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=e0(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):el(t,e,n))}function e1(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function e9(t){this.Ga=0,this.j=[],this.l=new tR,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=e1("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=e1("baseRetryDelayMs",5e3,t),this.hb=e1("retryDelaySeedMs",1e4,t),this.eb=e1("forwardChannelMaxRetries",2,t),this.xa=e1("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new eS(t&&t.concurrentRequestLimit),this.Ja=new ex,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function e4(t){if(e5(t),3==t.H){var e=t.W++,n=ei(t.I);if(el(n,"SID",t.K),el(n,"RID",e),el(n,"TYPE","terminate"),e8(t,n),(e=new tG(t,t.l,e)).L=2,e.A=eh(ei(n)),n=!1,c.navigator&&c.navigator.sendBeacon)try{n=c.navigator.sendBeacon(e.A.toString(),"")}catch(t){}!n&&c.Image&&((new Image).src=e.A,n=!0),n||(e.g=nc(e.l,null),e.g.ha(e.A)),e.G=Date.now(),t6(e)}nh(t)}function e6(t){t.g&&(nr(t),t.g.cancel(),t.g=null)}function e5(t){e6(t),t.u&&(c.clearTimeout(t.u),t.u=null),ns(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function e3(t){if(!eA(t.i)&&!t.m){t.m=!0;var e=t.Na;ty||tw(),tv||(ty(),tv=!0),tb.add(e,t),t.C=0}}function e7(t,e){var n;n=e?e.m:t.W++;let r=ei(t.I);el(r,"SID",t.K),el(r,"RID",n),el(r,"AID",t.V),e8(t,r),t.o&&t.s&&e2(r,t.o,t.s),n=new tG(t,t.l,n,t.C+1),null===t.o&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=nt(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),eR(t.i,n),t2(n,r,e)}function e8(t,e){t.na&&q(t.na,function(t,n){el(e,n,t)}),t.h&&ee({},function(t,n){el(e,n,t)})}function nt(t,e,n){n=Math.min(t.j.length,n);var r=t.h?m(t.h.Va,t.h,t):null;t:{var i=t.j;let e=-1;for(;;){let t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].g,a=i[o].map;if(0>(n-=e))e=Math.max(0,i[o].g-100),s=!1;else try{!function(t,e,n){let r=n||"";try{ee(t,function(t,n){let i=t;p(t)&&(i=tf(t)),e.push(r+n+"="+encodeURIComponent(i))})}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.j.splice(0,n),e.F=t,r}function ne(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;ty||tw(),tv||(ty(),tv=!0),tb.add(e,t),t.A=0}}function nn(t){return!t.g&&!t.u&&!(3<=t.A)&&(t.ba++,t.u=tF(m(t.Ma,t),na(t,t.A)),t.A++,!0)}function nr(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function ni(t){t.g=new tG(t,t.l,"rpc",t.ba),null===t.o&&(t.g.I=t.s),t.g.O=0;var e=ei(t.wa);el(e,"RID","rpc"),el(e,"SID",t.K),el(e,"AID",t.V),el(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&el(e,"TO",t.qa),el(e,"TYPE","xmlhttp"),e8(t,e),t.o&&t.s&&e2(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=eh(ei(e)),n.u=null,n.S=!0,t1(n,t)}function ns(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function no(t,e){var n=null;if(t.g==e){ns(t),nr(t),t.g=null;var r=2}else{if(!eD(t.i,e))return;n=e.F,ek(t.i,e),r=1}if(0!=t.H){if(e.i){if(1==r){n=e.u?e.u.length:0,e=Date.now()-e.G;var i,s=t.C;tu(r=tx(),new tU(r,n)),e3(t)}else ne(t)}else if(3==(s=e.s)||0==s&&0<e.ca||!(1==r&&(i=e,!(eO(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.j=i.F.concat(t.j),!0):1!=t.H&&2!=t.H&&!(t.C>=(t.cb?0:t.eb))&&(t.m=tF(m(t.Na,t,i),na(t,t.C)),t.C++,!0)))||2==r&&nn(t)))switch(n&&0<n.length&&((e=t.i).i=e.i.concat(n)),s){case 1:nl(t,5);break;case 4:nl(t,10);break;case 3:nl(t,6);break;default:nl(t,2)}}}function na(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function nl(t,e){if(t.l.info("Error code "+e),2==e){var n=null;t.h&&(n=null);var r=m(t.pb,t);n||(n=new er("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||es(n,"https"),eh(n)),function(t,e){let n=new tR;if(c.Image){let r=new Image;r.onload=y(eP,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(eP,n,r,"TestLoadImage: error",!1,e),r.onabort=y(eP,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(eP,n,r,"TestLoadImage: timeout",!1,e),c.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}(n.toString(),r)}else tB(2);t.H=0,t.h&&t.h.za(e),nh(t),e5(t)}function nh(t){if(t.H=0,t.ma=[],t.h){let e=eN(t.i);(0!=e.length||0!=t.j.length)&&(E(t.ma,e),E(t.ma,t.j),t.i.i.length=0,_(t.j),t.j.length=0),t.h.ya()}}function nu(t,e,n){var r=n instanceof er?ei(n):new er(n);if(""!=r.g)e&&(r.g=e+"."+r.g),eo(r,r.m);else{var i=c.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new er(null);r&&es(s,r),e&&(s.g=e),i&&eo(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&el(r,n,e),el(r,"VER",t.ra),e8(t,r),r}function nc(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return(e=new ez(t.Ha&&!t.va?new ej({ob:n}):t.va)).Oa(t.J),e}function nf(){}function np(){if(R&&!(10<=Number(F)))throw Error("Environmental error: no available transport.")}function nd(t,e){th.call(this),this.g=new e9(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.F=e,null!==(t=this.h)&&e in t&&e in(t=this.h)&&delete t[e]),this.j=new ny(this)}function ng(t){tq.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(let n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function nm(){tX.call(this),this.status=1}function ny(t){this.g=t}function nv(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function nb(t,e,n){n||(n=0);var r=Array(16);if("string"==typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;o=s+(i^(e=n+(o<<7&4294967295|o>>>25))&(n^i))+r[1]+3905402710&4294967295,o=i+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+r[2]+606105819&4294967295,o=n+(e^(i=s+(o<<17&4294967295|o>>>15))&(s^e))+r[3]+3250441966&4294967295,o=e+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[4]+4118548399&4294967295,o=s+(i^(e=n+(o<<7&4294967295|o>>>25))&(n^i))+r[5]+1200080426&4294967295,o=i+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+r[6]+2821735955&4294967295,o=n+(e^(i=s+(o<<17&4294967295|o>>>15))&(s^e))+r[7]+4249261313&4294967295,o=e+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[8]+1770035416&4294967295,o=s+(i^(e=n+(o<<7&4294967295|o>>>25))&(n^i))+r[9]+2336552879&4294967295,o=i+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+r[10]+4294925233&4294967295,o=n+(e^(i=s+(o<<17&4294967295|o>>>15))&(s^e))+r[11]+2304563134&4294967295,o=e+(s^(n=i+(o<<22&4294967295|o>>>10))&(i^s))+r[12]+1804603682&4294967295,o=s+(i^(e=n+(o<<7&4294967295|o>>>25))&(n^i))+r[13]+4254626195&4294967295,o=i+(n^(s=e+(o<<12&4294967295|o>>>20))&(e^n))+r[14]+2792965006&4294967295,o=n+(e^(i=s+(o<<17&4294967295|o>>>15))&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,o=e+((n=i+(o<<20&4294967295|o>>>12))^i^s)+r[5]+4294588738&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^i)+r[8]+2272392833&4294967295,o=i+((s=e+(o<<11&4294967295|o>>>21))^e^n)+r[11]+1839030562&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^e)+r[14]+4259657740&4294967295,o=e+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[1]+2763975236&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^i)+r[4]+1272893353&4294967295,o=i+((s=e+(o<<11&4294967295|o>>>21))^e^n)+r[7]+4139469664&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^e)+r[10]+3200236656&4294967295,o=e+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[13]+681279174&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^i)+r[0]+3936430074&4294967295,o=i+((s=e+(o<<11&4294967295|o>>>21))^e^n)+r[3]+3572445317&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^e)+r[6]+76029189&4294967295,o=e+((n=i+(o<<23&4294967295|o>>>9))^i^s)+r[9]+3654602809&4294967295,o=s+((e=n+(o<<4&4294967295|o>>>28))^n^i)+r[12]+3873151461&4294967295,o=i+((s=e+(o<<11&4294967295|o>>>21))^e^n)+r[15]+530742520&4294967295,o=n+((i=s+(o<<16&4294967295|o>>>16))^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function nw(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}(a=ez.prototype).Oa=function(t){this.M=t},a.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():o.g(),this.C=this.u?tV(this.u):tV(o),this.g.onreadystatechange=m(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(t){eq(this,t);return}if(t=n||"",n=new Map(this.headers),r){if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if("function"==typeof r.keys&&"function"==typeof r.get)for(let t of r.keys())n.set(t,r.get(t));else throw Error("Unknown input type for opt_headers: "+String(r))}for(let[s,o]of(r=Array.from(n.keys()).find(t=>"content-type"==t.toLowerCase()),i=c.FormData&&t instanceof c.FormData,!(0<=w(eK,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),n))this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var s;eY(this),0<this.B&&((this.L=(s=this.g,R&&"number"==typeof s.timeout&&void 0!==s.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=m(this.ua,this)):this.A=tT(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){eq(this,t)}},a.ua=function(){void 0!==u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,tu(this,"timeout"),this.abort(8))},a.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,tu(this,"complete"),tu(this,"abort"),eG(this))},a.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),eG(this,!0)),ez.$.N.call(this)},a.La=function(){this.s||(this.G||this.v||this.l?eJ(this):this.kb())},a.kb=function(){eJ(this)},a.isActive=function(){return!!this.g},a.da=function(){try{return 2<eZ(this)?this.g.status:-1}catch(t){return -1}},a.ja=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},a.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),eH(e)}},a.Ia=function(){return this.m},a.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(a=e9.prototype).ra=8,a.H=1,a.Na=function(t){if(this.m){if(this.m=null,1==this.H){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;let i=new tG(this,this.l,t),s=this.s;if(this.U&&(s?G(s=X(s),this.U):s=this.U),null!==this.o||this.O||(i.I=s,s=null),this.P)t:{for(var e=0,n=0;n<this.j.length;n++){e:{var r=this.j[n];if("__data__"in r.map&&"string"==typeof(r=r.map.__data__)){r=r.length;break e}r=void 0}if(void 0===r)break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.j.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=nt(this,i,e),el(n=ei(this.I),"RID",t),el(n,"CVER",22),this.F&&el(n,"X-HTTP-Session-Id",this.F),e8(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(e0(s)))+"&"+e:this.o&&e2(n,this.o,s)),eR(this.i,i),this.bb&&el(n,"TYPE","init"),this.P?(el(n,"$req",e),el(n,"SID","null"),i.aa=!0,t2(i,n,null)):t2(i,n,e),this.H=2}}else 3==this.H&&(t?e7(this,t):0==this.j.length||eA(this.i)||e7(this))}},a.Ma=function(){if(this.u=null,ni(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=tF(m(this.jb,this),t)}},a.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,tB(10),e6(this),ni(this))},a.ib=function(){null!=this.v&&(this.v=null,e6(this),nn(this),tB(19))},a.pb=function(t){t?(this.l.info("Successfully pinged google.com"),tB(2)):(this.l.info("Failed to ping google.com"),tB(1))},a.isActive=function(){return!!this.h&&this.h.isActive(this)},(a=nf.prototype).Ba=function(){},a.Aa=function(){},a.za=function(){},a.ya=function(){},a.isActive=function(){return!0},a.Va=function(){},np.prototype.g=function(t,e){return new nd(t,e)},v(nd,th),nd.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;tB(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=nu(t,null,t.Y),e3(t)},nd.prototype.close=function(){e4(this.g)},nd.prototype.u=function(t){var e=this.g;if("string"==typeof t){var n={};n.__data__=t,t=n}else this.v&&((n={}).__data__=tf(t),t=n);e.j.push(new eT(e.fb++,t)),3==e.H&&e3(e)},nd.prototype.N=function(){this.g.h=null,delete this.j,e4(this.g),delete this.g,nd.$.N.call(this)},v(ng,tq),v(nm,tX),v(ny,nf),ny.prototype.Ba=function(){tu(this.g,"a")},ny.prototype.Aa=function(t){tu(this.g,new ng(t))},ny.prototype.za=function(t){tu(this.g,new nm)},ny.prototype.ya=function(){tu(this.g,"b")},v(nv,function(){this.blockSize=-1}),nv.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},nv.prototype.j=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(0==i)for(;s<=n;)nb(this,t,s),s+=this.blockSize;if("string"==typeof t){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){nb(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){nb(this,r),i=0;break}}this.h=i,this.i+=e},nv.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var n_={};function nE(t){return -128<=t&&128>t?Object.prototype.hasOwnProperty.call(n_,t)?n_[t]:n_[t]=new nw([0|t],0>t?-1:0):new nw([0|t],0>t?-1:0)}function nI(t){if(isNaN(t)||!isFinite(t))return nS;if(0>t)return nR(nI(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=nT;return new nw(e,0)}var nT=4294967296,nS=nE(0),nC=nE(1),nA=nE(16777216);function nO(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function nD(t){return -1==t.h}function nR(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new nw(n,~t.h).add(nC)}function nk(t,e){return t.add(nR(e))}function nN(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function nL(t,e){this.g=t,this.h=e}function nx(t,e){if(nO(e))throw Error("division by zero");if(nO(t))return new nL(nS,nS);if(nD(t))return e=nx(nR(t),e),new nL(nR(e.g),nR(e.h));if(nD(e))return e=nx(t,nR(e)),new nL(nR(e.g),e.h);if(30<t.g.length){if(nD(t)||nD(e))throw Error("slowDivide_ only works with positive integers.");for(var n=nC,r=e;0>=r.X(t);)n=nP(n),r=nP(r);var i=nj(n,1),s=nj(r,1);for(r=nj(r,2),n=nj(n,2);!nO(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=nj(r,1),n=nj(n,1)}return e=nk(t,i.R(e)),new nL(i,e)}for(i=nS;0<=t.X(e);){for(r=48>=(r=Math.ceil(Math.log(n=Math.max(1,Math.floor(t.ea()/e.ea())))/Math.LN2))?1:Math.pow(2,r-48),o=(s=nI(n)).R(e);nD(o)||0<o.X(t);)n-=r,o=(s=nI(n)).R(e);nO(s)&&(s=nC),i=i.add(s),t=nk(t,o)}return new nL(i,t)}function nP(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new nw(n,t.h)}function nj(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new nw(i,t.h)}(a=nw.prototype).ea=function(){if(nD(this))return-nR(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:nT+r)*e,e*=nT}return t},a.toString=function(t){if(2>(t=t||10)||36<t)throw Error("radix out of range: "+t);if(nO(this))return"0";if(nD(this))return"-"+nR(this).toString(t);for(var e=nI(Math.pow(t,6)),n=this,r="";;){var i=nx(n,e).g,s=((0<(n=nk(n,i.R(e))).g.length?n.g[0]:n.h)>>>0).toString(t);if(nO(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},a.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},a.X=function(t){return nD(t=nk(this,t))?-1:nO(t)?0:1},a.abs=function(){return nD(this)?nR(this):this},a.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.D(i))+(65535&t.D(i)),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new nw(n,-2147483648&n[n.length-1]?-1:0)},a.R=function(t){if(nO(this)||nO(t))return nS;if(nD(this))return nD(t)?nR(this).R(nR(t)):nR(nR(this).R(t));if(nD(t))return nR(this.R(nR(t)));if(0>this.X(nA)&&0>t.X(nA))return nI(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=65535&this.D(r),a=t.D(i)>>>16,l=65535&t.D(i);n[2*r+2*i]+=o*l,nN(n,2*r+2*i),n[2*r+2*i+1]+=s*l,nN(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,nN(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,nN(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new nw(n,0)},a.gb=function(t){return nx(this,t).h},a.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new nw(n,this.h&t.h)},a.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new nw(n,this.h|t.h)},a.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new nw(n,this.h^t.h)},np.prototype.createWebChannel=np.prototype.g,nd.prototype.send=nd.prototype.u,nd.prototype.open=nd.prototype.m,nd.prototype.close=nd.prototype.close,t$.NO_ERROR=0,t$.TIMEOUT=8,t$.HTTP_ERROR=6,tH.COMPLETE="complete",tW.EventType=tK,tK.OPEN="a",tK.CLOSE="b",tK.ERROR="c",tK.MESSAGE="d",th.prototype.listen=th.prototype.O,ez.prototype.listenOnce=ez.prototype.P,ez.prototype.getLastError=ez.prototype.Sa,ez.prototype.getLastErrorCode=ez.prototype.Ia,ez.prototype.getStatus=ez.prototype.da,ez.prototype.getResponseJson=ez.prototype.Wa,ez.prototype.getResponseText=ez.prototype.ja,ez.prototype.send=ez.prototype.ha,ez.prototype.setWithCredentials=ez.prototype.Oa,nv.prototype.digest=nv.prototype.l,nv.prototype.reset=nv.prototype.reset,nv.prototype.update=nv.prototype.j,nw.prototype.add=nw.prototype.add,nw.prototype.multiply=nw.prototype.R,nw.prototype.modulo=nw.prototype.gb,nw.prototype.compare=nw.prototype.X,nw.prototype.toNumber=nw.prototype.ea,nw.prototype.toString=nw.prototype.toString,nw.prototype.getBits=nw.prototype.D,nw.fromNumber=nI,nw.fromString=function t(e,n){if(0==e.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==e.charAt(0))return nR(t(e.substring(1),n));if(0<=e.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=nI(Math.pow(n,8)),i=nS,s=0;s<e.length;s+=8){var o=Math.min(8,e.length-s),a=parseInt(e.substring(s,s+o),n);8>o?(o=nI(Math.pow(n,o)),i=i.R(o).add(nI(a))):i=(i=i.R(r)).add(nI(a))}return i};var nM=h.createWebChannelTransport=function(){return new np},nB=h.getStatEventTarget=function(){return tx()},nU=h.ErrorCode=t$,nF=h.EventType=tH,Event=h.Event=tN,n$=h.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20};h.FetchXmlHttpFactory=ej;var nH=h.WebChannel=tW,nz=h.XhrIo=ez,nV=h.Md5=nv,nW=h.Integer=nw},5073:function(t,e,n){"use strict";let r,i,s,o,a,l;var h,u=n(3991),c=n(6914),f=n(8745),p=n(5538);let d=(t,e)=>e.some(e=>t instanceof e),g=new WeakMap,m=new WeakMap,y=new WeakMap,v=new WeakMap,b=new WeakMap,w={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return m.get(t);if("objectStoreNames"===e)return t.objectStoreNames||y.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function _(t){var e;if(t instanceof IDBRequest)return function(t){let e=new Promise((e,n)=>{let r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(_(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(e=>{e instanceof IDBCursor&&g.set(e,t)}).catch(()=>{}),b.set(e,t),e}(t);if(v.has(t))return v.get(t);let n="function"==typeof(e=t)?e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(E(this),t),_(g.get(this))}:function(...t){return _(e.apply(E(this),t))}:function(t,...n){let r=e.call(E(this),t,...n);return y.set(r,t.sort?t.sort():[t]),_(r)}:(e instanceof IDBTransaction&&function(t){if(m.has(t))return;let e=new Promise((e,n)=>{let r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});m.set(t,e)}(e),d(e,r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(e,w):e;return n!==t&&(v.set(t,n),b.set(n,t)),n}let E=t=>b.get(t),I=["get","getKey","getAll","getAllKeys","count"],T=["put","add","delete","clear"],S=new Map;function C(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&"string"==typeof e))return;if(S.get(e))return S.get(e);let n=e.replace(/FromIndex$/,""),r=e!==n,i=T.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||I.includes(n)))return;let s=async function(t,...e){let s=this.transaction(t,i?"readwrite":"readonly"),o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return S.set(e,s),s}w={...h=w,get:(t,e,n)=>C(t,e)||h.get(t,e,n),has:(t,e)=>!!C(t,e)||h.has(t,e)};let A="@firebase/installations",O="0.6.4",D=`w:${O}`,R="FIS_v2",k=new f.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function N(t){return t instanceof f.ZR&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L({projectId:t}){return`https://firebaseinstallations.googleapis.com/v1/projects/${t}/installations`}function x(t){return{token:t.token,requestStatus:2,expiresIn:Number(t.expiresIn.replace("s","000")),creationTime:Date.now()}}async function P(t,e){let n=await e.json(),r=n.error;return k.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function j({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}async function M(t){let e=await t();return e.status>=500&&e.status<600?t():e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B({appConfig:t,heartbeatServiceProvider:e},{fid:n}){let r=L(t),i=j(t),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}let o={fid:n,authVersion:R,appId:t.appId,sdkVersion:D},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await M(()=>fetch(r,a));if(l.ok){let t=await l.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:x(t.authToken)};return e}throw await P("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let H=new Map;function z(t,e){let n=$(t);V(n,e),function(t,e){let n=(!W&&"BroadcastChannel"in self&&((W=new BroadcastChannel("[Firebase] FID Change")).onmessage=t=>{V(t.data.key,t.data.fid)}),W);n&&n.postMessage({key:t,fid:e}),0===H.size&&W&&(W.close(),W=null)}(n,e)}function V(t,e){let n=H.get(t);if(n)for(let t of n)t(e)}let W=null,K="firebase-installations-store",q=null;function X(){return q||(q=function(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){let o=indexedDB.open(t,1),a=_(o);return r&&o.addEventListener("upgradeneeded",t=>{r(_(o.result),t.oldVersion,t.newVersion,_(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(t=>{s&&t.addEventListener("close",()=>s()),i&&t.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}("firebase-installations-database",0,{upgrade:(t,e)=>{0===e&&t.createObjectStore(K)}})),q}async function J(t,e){let n=$(t),r=await X(),i=r.transaction(K,"readwrite"),s=i.objectStore(K),o=await s.get(n);return await s.put(e,n),await i.done,o&&o.fid===e.fid||z(t,e.fid),e}async function G(t){let e=$(t),n=await X(),r=n.transaction(K,"readwrite");await r.objectStore(K).delete(e),await r.done}async function Y(t,e){let n=$(t),r=await X(),i=r.transaction(K,"readwrite"),s=i.objectStore(K),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,a&&(!o||o.fid!==a.fid)&&z(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z(t){let e;let n=await Y(t.appConfig,n=>{let r=function(t){let e=t||{fid:function(){try{let t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;let n=function(t){let e=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){let e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}(t);return e.substr(0,22)}(t);return F.test(n)?n:""}catch(t){return""}}(),registrationStatus:0};return tn(e)}(n),i=function(t,e){if(0===e.registrationStatus){if(!navigator.onLine){let t=Promise.reject(k.create("app-offline"));return{installationEntry:e,registrationPromise:t}}let n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Q(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:tt(t)}:{installationEntry:e}}(t,r);return e=i.registrationPromise,i.installationEntry});return""===n.fid?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}async function Q(t,e){try{let n=await B(t,e);return J(t.appConfig,n)}catch(n){throw N(n)&&409===n.customData.serverCode?await G(t.appConfig):await J(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function tt(t){let e=await te(t.appConfig);for(;1===e.registrationStatus;)await U(100),e=await te(t.appConfig);if(0===e.registrationStatus){let{installationEntry:e,registrationPromise:n}=await Z(t);return n||e}return e}function te(t){return Y(t,t=>{if(!t)throw k.create("installation-not-found");return tn(t)})}function tn(t){return 1===t.registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:t.fid,registrationStatus:0}:t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tr({appConfig:t,heartbeatServiceProvider:e},n){let r=function(t,{fid:e}){return`${L(t)}/${e}/authTokens:generate`}(t,n),i=function(t,{refreshToken:e}){let n=j(t);return n.append("Authorization",`${R} ${e}`),n}(t,n),s=e.getImmediate({optional:!0});if(s){let t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}let o={installation:{sdkVersion:D,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await M(()=>fetch(r,a));if(l.ok){let t=await l.json(),e=x(t);return e}throw await P("Generate Auth Token",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ti(t,e=!1){let n;let r=await Y(t.appConfig,r=>{var i;if(!tl(r))throw k.create("not-registered");let s=r.authToken;if(!e&&2===(i=s).requestStatus&&!function(t){let e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+36e5}(i))return r;if(1===s.requestStatus)return n=ts(t,e),r;{if(!navigator.onLine)throw k.create("app-offline");let e=function(t){let e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}(r);return n=ta(t,e),e}}),i=n?await n:r.authToken;return i}async function ts(t,e){let n=await to(t.appConfig);for(;1===n.authToken.requestStatus;)await U(100),n=await to(t.appConfig);let r=n.authToken;return 0===r.requestStatus?ti(t,e):r}function to(t){return Y(t,t=>{if(!tl(t))throw k.create("not-registered");let e=t.authToken;return 1===e.requestStatus&&e.requestTime+1e4<Date.now()?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ta(t,e){try{let n=await tr(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await J(t.appConfig,r),n}catch(n){if(N(n)&&(401===n.customData.serverCode||404===n.customData.serverCode))await G(t.appConfig);else{let n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await J(t.appConfig,n)}throw n}}function tl(t){return void 0!==t&&2===t.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(t){let{installationEntry:e,registrationPromise:n}=await Z(t);return n?n.catch(console.error):ti(t).catch(console.error),e.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tu(t,e=!1){await tc(t);let n=await ti(t,e);return n.token}async function tc(t){let{registrationPromise:e}=await Z(t);e&&await e}function tf(t){return k.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp="installations";(0,u._registerComponent)(new p.wA(tp,t=>{let e=t.getProvider("app").getImmediate(),n=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(!t||!t.options)throw tf("App Configuration");if(!t.name)throw tf("App Name");for(let e of["projectId","apiKey","appId"])if(!t.options[e])throw tf(e);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}(e),r=(0,u._getProvider)(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,u._registerComponent)(new p.wA("installations-internal",t=>{let e=t.getProvider("app").getImmediate(),n=(0,u._getProvider)(e,tp).getImmediate();return{getId:()=>th(n),getToken:t=>tu(n,t)}},"PRIVATE")),(0,u.registerVersion)(A,O),(0,u.registerVersion)(A,O,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td="analytics",tg="https://www.googletagmanager.com/gtag/js",tm=new c.Yd("@firebase/analytics"),ty=new f.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tv(t){if(!t.startsWith(tg)){let e=ty.create("invalid-gtag-resource",{gtagURL:t});return tm.warn(e.message),""}return t}function tb(t){return Promise.all(t.map(t=>t.catch(t=>t)))}async function tw(t,e,n,r,i,s){let o=r[i];try{if(o)await e[o];else{let t=await tb(n),r=t.find(t=>t.measurementId===i);r&&await e[r.appId]}}catch(t){tm.error(t)}t("config",i,s)}async function t_(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let t=i.send_to;Array.isArray(t)||(t=[t]);let r=await tb(n);for(let n of t){let t=r.find(t=>t.measurementId===n),i=t&&e[t.appId];if(i)s.push(i);else{s=[];break}}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(t){tm.error(t)}}class tE{constructor(t={},e=1e3){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}let tI=new tE;async function tT(t){var e;let{appId:n,apiKey:r}=t,i={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":r})},s="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{let n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(t){}throw ty.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function tS(t,e=tI,n){let{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ty.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ty.create("no-api-key")}let o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new tA;return setTimeout(async()=>{a.abort()},void 0!==n?n:6e4),tC({appId:r,apiKey:i,measurementId:s},o,a,e)}async function tC(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=tI){var s;let{appId:o,measurementId:a}=t;try{await new Promise((t,n)=>{let i=Math.max(e-Date.now(),0),s=setTimeout(t,i);r.addEventListener(()=>{clearTimeout(s),n(ty.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}catch(t){if(a)return tm.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==t?void 0:t.message}]`),{appId:o,measurementId:a};throw t}try{let e=await tT(t);return i.deleteThrottleMetadata(o),e}catch(h){if(!function(t){if(!(t instanceof f.ZR)||!t.customData)return!1;let e=Number(t.customData.httpStatus);return 429===e||500===e||503===e||504===e}(h)){if(i.deleteThrottleMetadata(o),a)return tm.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${null==h?void 0:h.message}]`),{appId:o,measurementId:a};throw h}let e=503===Number(null===(s=null==h?void 0:h.customData)||void 0===s?void 0:s.httpStatus)?(0,f.$s)(n,i.intervalMillis,30):(0,f.$s)(n,i.intervalMillis),l={throttleEndTimeMillis:Date.now()+e,backoffCount:n+1};return i.setThrottleMetadata(o,l),tm.debug(`Calling attemptFetch again in ${e} millis`),tC(t,l,r,i)}}class tA{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function tO(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}{let i=await e,s=Object.assign(Object.assign({},r),{send_to:i});t("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tD(){if(!(0,f.hl)())return tm.warn(ty.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,f.eu)()}catch(t){return tm.warn(ty.create("indexeddb-unavailable",{errorInfo:null==t?void 0:t.toString()}).message),!1}return!0}async function tR(t,e,n,r,i,a,l){var h;let u=tS(t);u.then(e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&tm.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(t=>tm.error(t)),e.push(u);let c=tD().then(t=>t?r.getId():void 0),[f,p]=await Promise.all([u,c]);!function(t){let e=window.document.getElementsByTagName("script");for(let n of Object.values(e))if(n.src&&n.src.includes(tg)&&n.src.includes(t))return n;return null}(a)&&function(t,e){let n;let r=(window.trustedTypes&&(n=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:tv})),n),i=document.createElement("script"),s=`${tg}?l=${t}&id=${e}`;i.src=r?null==r?void 0:r.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}(a,f.measurementId),o&&(i("consent","default",o),o=void 0),i("js",new Date);let d=null!==(h=null==l?void 0:l.config)&&void 0!==h?h:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),i("config",f.measurementId,d),s&&(i("set",s),s=void 0),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tk{constructor(t){this.app=t}_delete(){return delete tN[this.app.options.appId],Promise.resolve()}}let tN={},tL=[],tx={},tP="dataLayer",tj=!1,tM="@firebase/analytics",tB="0.10.0";(0,u._registerComponent)(new p.wA(td,(t,{options:e})=>{let n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return function(t,e,n){!function(){let t=[];if((0,f.ru)()&&t.push("This is a browser extension environment."),(0,f.zI)()||t.push("Cookies are not available."),t.length>0){let e=t.map((t,e)=>`(${e+1}) ${t}`).join(" "),n=ty.create("invalid-analytics-context",{errorInfo:e});tm.warn(n.message)}}();let r=t.options.appId;if(!r)throw ty.create("no-app-id");if(!t.options.apiKey){if(t.options.measurementId)tm.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ty.create("no-api-key")}if(null!=tN[r])throw ty.create("already-exists",{id:r});if(!tj){var i,s;let t,e;t=[],Array.isArray(window[tP])?t=window[tP]:window[tP]=t;let{wrappedGtag:n,gtagCore:r}=(i="gtag",e=function(...t){window[tP].push(arguments)},window[i]&&"function"==typeof window[i]&&(e=window[i]),window[i]=(s=e,async function(t,...e){try{if("event"===t){let[t,n]=e;await t_(s,tN,tL,t,n)}else if("config"===t){let[t,n]=e;await tw(s,tN,tL,tx,t,n)}else if("consent"===t){let[t]=e;s("consent","update",t)}else if("get"===t){let[t,n,r]=e;s("get",t,n,r)}else if("set"===t){let[t]=e;s("set",t)}else s(t,...e)}catch(t){tm.error(t)}}),{gtagCore:e,wrappedGtag:window[i]});l=n,a=r,tj=!0}tN[r]=tR(t,tL,tx,e,a,tP,n);let o=new tk(t);return o}(n,r,e)},"PUBLIC")),(0,u._registerComponent)(new p.wA("analytics-internal",function(t){try{let e=t.getProvider(td).getImmediate();return{logEvent:(t,n,r)=>{var i;return i=e,void(i=(0,f.m9)(i),tO(l,tN[i.app.options.appId],t,n,r).catch(t=>tm.error(t)))}}}catch(t){throw ty.create("interop-component-reg-failed",{reason:t})}},"PRIVATE")),(0,u.registerVersion)(tM,tB),(0,u.registerVersion)(tM,tB,"esm2017")},994:function(t,e,n){"use strict";n.d(e,{C6:function(){return r.getApps},Mq:function(){return r.getApp},ZF:function(){return r.initializeApp}});var r=n(3991);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,r.registerVersion)("firebase","10.7.1","app")},8153:function(t,e,n){"use strict";n.d(e,{hJ:function(){return r.X},Xb:function(){return r.aa},h8:function(){return r.E},v0:function(){return r.o},e5:function(){return r.ab},rh:function(){return r.c},w7:function(){return r.C}});var r=n(7350);n(8745),n(3991),n(6914),n(5538)},4086:function(t,e,n){"use strict";n.d(e,{ET:function(){return r.ET},IO:function(){return r.IO},JU:function(){return r.JU},PL:function(){return r.PL},Yp:function(){return r.Yp},ad:function(){return r.ad},ar:function(){return r.ar},b9:function(){return r.b9},cf:function(){return r.cf},hJ:function(){return r.hJ},oe:function(){return r.oe},pl:function(){return r.pl},r7:function(){return r.r7}});var r=n(9978)},9584:function(t,e,n){"use strict";n.d(e,{Jt:function(){return te},cF:function(){return tr},iH:function(){return tn},KV:function(){return tt}});var r,i,s,o,a=n(3991),l=n(8745),h=n(5538);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="firebasestorage.googleapis.com",c="storageBucket";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends l.ZR{constructor(t,e,n=0){super(p(t),`Firebase Storage: ${e} (${p(t)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,f.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return p(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function p(t){return"storage/"+t}function d(){return new f(s.UNKNOWN,"An unknown error occurred, please check the error payload for server response.")}function g(t){return new f(s.INVALID_ARGUMENT,t)}function m(){return new f(s.APP_DELETED,"The Firebase app was deleted.")}function y(t,e){return new f(s.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function v(t){throw new f(s.INTERNAL_ERROR,"Internal error: "+t)}(r=s||(s={})).UNKNOWN="unknown",r.OBJECT_NOT_FOUND="object-not-found",r.BUCKET_NOT_FOUND="bucket-not-found",r.PROJECT_NOT_FOUND="project-not-found",r.QUOTA_EXCEEDED="quota-exceeded",r.UNAUTHENTICATED="unauthenticated",r.UNAUTHORIZED="unauthorized",r.UNAUTHORIZED_APP="unauthorized-app",r.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",r.INVALID_CHECKSUM="invalid-checksum",r.CANCELED="canceled",r.INVALID_EVENT_NAME="invalid-event-name",r.INVALID_URL="invalid-url",r.INVALID_DEFAULT_BUCKET="invalid-default-bucket",r.NO_DEFAULT_BUCKET="no-default-bucket",r.CANNOT_SLICE_BLOB="cannot-slice-blob",r.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",r.NO_DOWNLOAD_URL="no-download-url",r.INVALID_ARGUMENT="invalid-argument",r.INVALID_ARGUMENT_COUNT="invalid-argument-count",r.APP_DELETED="app-deleted",r.INVALID_ROOT_OPERATION="invalid-root-operation",r.INVALID_FORMAT="invalid-format",r.INTERNAL_ERROR="internal-error",r.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Location{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){let t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=Location.makeFromUrl(t,e)}catch(e){return new Location(t,"")}if(""===n.path)return n;throw new f(s.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null,r="([A-Za-z0-9.\\-_]+)",i=RegExp("^gs://"+r+"(/(.*))?$","i");function o(t){t.path_=decodeURIComponent(t.path)}let a=e.replace(/[.]/g,"\\."),l=RegExp(`^https?://${a}/v[A-Za-z0-9_]+/b/${r}/o(/([^?#]*).*)?$`,"i"),h=RegExp(`^https?://${e===u?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/${r}/([^?#]*)`,"i"),c=[{regex:i,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:l,indices:{bucket:1,path:3},postModify:o},{regex:h,indices:{bucket:1,path:2},postModify:o}];for(let e=0;e<c.length;e++){let r=c[e],i=r.regex.exec(t);if(i){let t=i[r.indices.bucket],e=i[r.indices.path];e||(e=""),n=new Location(t,e),r.postModify(n);break}}if(null==n)throw new f(s.INVALID_URL,"Invalid URL '"+t+"'.");return n}}class b{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}function w(t){return"string"==typeof t||t instanceof String}function _(t){return E()&&t instanceof Blob}function E(){return"undefined"!=typeof Blob}function I(t,e,n,r){if(r<e)throw g(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw g(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t,e,n){let r=e;return null==n&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function S(t){let e=encodeURIComponent,n="?";for(let r in t)if(t.hasOwnProperty(r)){let i=e(r)+"="+e(t[r]);n=n+i+"&"}return n.slice(0,-1)}(i=o||(o={}))[i.NO_ERROR=0]="NO_ERROR",i[i.NETWORK_ERROR=1]="NETWORK_ERROR",i[i.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e,n,r,i,s,o,a,l,h,u,c=!0){this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=l,this.progressCallback_=h,this.connectionFactory_=u,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){let t=(t,e)=>{let n=this.resolve_,r=this.reject_,i=e.connection;if(e.wasSuccessCode)try{let t=this.callback_(i,i.getResponse());void 0!==t?n(t):n()}catch(t){r(t)}else if(null!==i){let t=d();t.serverResponse=i.getErrorText(),r(this.errorCallback_?this.errorCallback_(i,t):t)}else if(e.canceled){let t=this.appDelete_?m():new f(s.CANCELED,"User canceled the upload/download.");r(t)}else{let t=new f(s.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");r(t)}};this.canceled_?t(!1,new A(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e,n){let r=1,i=null,s=null,o=!1,a=0,l=!1;function h(...t){l||(l=!0,e.apply(null,t))}function u(e){i=setTimeout(()=>{i=null,t(f,2===a)},e)}function c(){s&&clearTimeout(s)}function f(t,...e){let n;if(l){c();return}if(t){c(),h.call(null,t,...e);return}let i=2===a||o;if(i){c(),h.call(null,t,...e);return}r<64&&(r*=2),1===a?(a=2,n=0):n=(r+Math.random())*1e3,u(n)}let p=!1;function d(t){!p&&(p=!0,c(),!l&&(null!==i?(t||(a=2),clearTimeout(i),u(0)):t||(a=1)))}return u(0),s=setTimeout(()=>{o=!0,d(!0)},n),d}((t,e)=>{if(e){t(!1,new A(!1,null,!0));return}let n=this.connectionFactory_();this.pendingConnection_=n;let r=t=>{let e=t.loaded,n=t.lengthComputable?t.total:-1;null!==this.progressCallback_&&this.progressCallback_(e,n)};null!==this.progressCallback_&&n.addUploadProgressListener(r),n.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(r),this.pendingConnection_=null;let e=n.getErrorCode()===o.NO_ERROR,i=n.getStatus();if(!e||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t,e){let n=t>=500&&t<600,r=-1!==[408,429].indexOf(t),i=-1!==e.indexOf(t);return n||r||i}(i,this.additionalRetryCodes_)&&this.retry){let e=n.getErrorCode()===o.ABORT;t(!1,new A(!1,null,e));return}let s=-1!==this.successCodes_.indexOf(i);t(!0,new A(s,n))})},t,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class A{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}function O(...t){let e="undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0;if(void 0!==e){let n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(E())return new Blob(t);throw new f(s.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let D={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class R{constructor(t,e){this.data=t,this.contentType=e||null}}function k(t){let e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if((64512&r)==55296){let i=n<t.length-1&&(64512&t.charCodeAt(n+1))==56320;if(i){let i=r,s=t.charCodeAt(++n);r=65536|(1023&i)<<10|1023&s,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else(64512&r)==56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function N(t,e){let n;switch(t){case D.BASE64:{let n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r)throw y(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?");break}case D.BASE64URL:{let n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r)throw y(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/")}}try{n=/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if("undefined"==typeof atob)throw new f(s.UNSUPPORTED_ENVIRONMENT,"base-64 is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.");return atob(t)}(e)}catch(e){if(e.message.includes("polyfill"))throw e;throw y(t,"Invalid character found")}let r=new Uint8Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);return r}class L{constructor(t){this.base64=!1,this.contentType=null;let e=t.match(/^data:([^,]+)?,/);if(null===e)throw y(D.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");let n=e[1]||null;null!=n&&(this.base64=function(t,e){let n=t.length>=e.length;return!!n&&t.substring(t.length-e.length)===e}(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-7):n),this.rest=t.substring(t.indexOf(",")+1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t,e){let n=0,r="";_(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(_(this.data_)){let n=this.data_,r=n.webkitSlice?n.webkitSlice(t,e):n.mozSlice?n.mozSlice(t,e):n.slice?n.slice(t,e):null;return null===r?null:new x(r)}{let n=new Uint8Array(this.data_.buffer,t,e-t);return new x(n,!0)}}static getBlob(...t){if(E()){let e=t.map(t=>t instanceof x?t.data_:t);return new x(O.apply(null,e))}{let e=t.map(t=>w(t)?function(t,e){switch(t){case D.RAW:return new R(k(e));case D.BASE64:case D.BASE64URL:return new R(N(t,e));case D.DATA_URL:return new R(function(t){let e=new L(t);return e.base64?N(D.BASE64,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw y(D.DATA_URL,"Malformed data URL.")}return k(e)}(e.rest)}(e),function(t){let e=new L(t);return e.contentType}(e))}throw d()}(D.RAW,t).data:t.data_),n=0;e.forEach(t=>{n+=t.byteLength});let r=new Uint8Array(n),i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new x(r,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){var e;let n;try{n=JSON.parse(t)}catch(t){return null}return"object"!=typeof(e=n)||Array.isArray(e)?null:n}function j(t){let e=t.lastIndexOf("/",t.length-2);return -1===e?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,e){return e}class B{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||M}}let U=null;function F(){if(U)return U;let t=[];t.push(new B("bucket")),t.push(new B("generation")),t.push(new B("metageneration")),t.push(new B("name","fullPath",!0));let e=new B("name");e.xform=function(t,e){return!w(e)||e.length<2?e:j(e)},t.push(e);let n=new B("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new B("timeCreated")),t.push(new B("updated")),t.push(new B("md5Hash",null,!0)),t.push(new B("cacheControl",null,!0)),t.push(new B("contentDisposition",null,!0)),t.push(new B("contentEncoding",null,!0)),t.push(new B("contentLanguage",null,!0)),t.push(new B("contentType",null,!0)),t.push(new B("metadata","customMetadata",!0)),U=t}function $(t,e,n){let r=P(e);return null===r?null:function(t,e,n){let r={};r.type="file";let i=n.length;for(let t=0;t<i;t++){let i=n[t];r[i.local]=i.xform(r,e[i.server])}return Object.defineProperty(r,"ref",{get:function(){let e=r.bucket,n=r.fullPath,i=new Location(e,n);return t._makeStorageReference(i)}}),r}(t,r,n)}class H{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t){if(!t)throw d()}function V(t){return function(e,n){var r,i;let o;return 401===e.getStatus()?o=e.getErrorText().includes("Firebase App Check token is invalid")?new f(s.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project."):new f(s.UNAUTHENTICATED,"User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(r=t.bucket,o=new f(s.QUOTA_EXCEEDED,"Quota for bucket '"+r+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(i=t.path,o=new f(s.UNAUTHORIZED,"User does not have permission to access '"+i+"'.")):o=n,o.status=e.getStatus(),o.serverResponse=n.serverResponse,o}}class W{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=o.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=o.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=o.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw v("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(let t in r)r.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,r[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw v("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw v("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return -1}}getResponse(){if(!this.sent_)throw v("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw v("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}class K extends W{initXhr(){this.xhr_.responseType="text"}}function q(){return new K}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e){this._service=t,e instanceof Location?this._location=e:this._location=Location.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new X(t,e)}get root(){let t=new Location(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return j(this._location.path)}get storage(){return this._service}get parent(){let t=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(t){if(0===t.length)return null;let e=t.lastIndexOf("/");if(-1===e)return"";let n=t.slice(0,e);return n}(this._location.path);if(null===t)return null;let e=new Location(this._location.bucket,t);return new X(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw new f(s.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}}function J(t,e){let n=null==e?void 0:e[c];return null==n?null:Location.makeFromBucketSpec(n,t)}class G{constructor(t,e,n,r,i){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=u,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=r?this._bucket=Location.makeFromBucketSpec(r,this._host):this._bucket=J(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,t):this._bucket=J(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){I("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){I("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let t=this._authProvider.getImmediate({optional:!0});if(t){let e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){let t=this._appCheckProvider.getImmediate({optional:!0});if(t){let e=await t.getToken();return e.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new X(this,t)}_makeRequest(t,e,n,r,i=!0){if(this._deleted)return new b(m());{let s=function(t,e,n,r,i,s,o=!0){let a=S(t.urlParams),l=t.url+a,h=Object.assign({},t.headers);return e&&(h["X-Firebase-GMPID"]=e),null!==n&&n.length>0&&(h.Authorization="Firebase "+n),h["X-Firebase-Storage-Version"]="webjs/"+(null!=s?s:"AppManager"),null!==r&&(h["X-Firebase-AppCheck"]=r),new C(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}(t,this._appId,n,r,e,this._firebaseVersion,i);return this._requests.add(s),s.getPromise().then(()=>this._requests.delete(s),()=>this._requests.delete(s)),s}}async makeRequestWithTokens(t,e){let[n,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n,r).getPromise()}}let Y="@firebase/storage",Z="0.12.0",Q="storage";function tt(t,e,n){return function(t,e,n){t._throwIfRoot("uploadBytes");let r=function(t,e,n,r,i){let o=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"},l=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();a["Content-Type"]="multipart/related; boundary="+l;let h=function(t,e,n){let r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),!r.contentType&&(r.contentType=e&&e.type()||"application/octet-stream"),r}(e,r,i),u=function(t,e){let n={},r=e.length;for(let i=0;i<r;i++){let r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}(h,n),c="--"+l+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+u+"\r\n--"+l+"\r\nContent-Type: "+h.contentType+"\r\n\r\n",p=x.getBlob(c,r,"\r\n--"+l+"--");if(null===p)throw new f(s.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.");let d={name:h.fullPath},g=T(o,t.host,t._protocol),m=t.maxUploadRetryTime,y=new H(g,"POST",function(e,r){let i=$(t,r,n);return z(null!==i),i},m);return y.urlParams=d,y.headers=a,y.body=p.uploadData(),y.errorHandler=V(e),y}(t.storage,t._location,F(),new x(e,!0),n);return t.storage.makeRequestWithTokens(r,q).then(e=>({metadata:e,ref:t}))}(t=(0,l.m9)(t),e,n)}function te(t){return function(t){t._throwIfRoot("getDownloadURL");let e=function(t,e,n){let r=e.fullServerUrl(),i=T(r,t.host,t._protocol),o=t.maxOperationRetryTime,a=new H(i,"GET",function(e,r){let i=$(t,r,n);return z(null!==i),function(t,e,n,r){let i=P(e);if(null===i||!w(i.downloadTokens))return null;let s=i.downloadTokens;if(0===s.length)return null;let o=encodeURIComponent,a=s.split(","),l=a.map(e=>{let i=t.bucket,s=t.fullPath,a="/b/"+o(i)+"/o/"+o(s),l=T(a,n,r),h=S({alt:"media",token:e});return l+h});return l[0]}(i,r,t.host,t._protocol)},o);return a.errorHandler=function(t){let e=V(t);return function(n,r){let i=e(n,r);if(404===n.getStatus()){var o;o=t.path,i=new f(s.OBJECT_NOT_FOUND,"Object '"+o+"' does not exist.")}return i.serverResponse=r.serverResponse,i}}(e),a}(t.storage,t._location,F());return t.storage.makeRequestWithTokens(e,q).then(t=>{if(null===t)throw new f(s.NO_DOWNLOAD_URL,"The given file does not have any download URLs.");return t})}(t=(0,l.m9)(t))}function tn(t,e){return function(t,e){if(!(e&&/^[A-Za-z]+:\/\//.test(e)))return function t(e,n){if(e instanceof G){if(null==e._bucket)throw new f(s.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?");let r=new X(e,e._bucket);return null!=n?t(r,n):r}return void 0!==n?function(t,e){let n=function(t,e){let n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),r=new Location(t._location.bucket,n);return new X(t.storage,r)}(e,n):e}(t,e);if(t instanceof G)return new X(t,e);throw g("To use ref(service, url), the first argument must be a Storage instance.")}(t=(0,l.m9)(t),e)}function tr(t=(0,a.getApp)(),e){t=(0,l.m9)(t);let n=(0,a._getProvider)(t,Q),r=n.getImmediate({identifier:e}),i=(0,l.P0)("storage");return i&&function(t,e,n,r={}){!function(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";let{mockUserToken:i}=r;i&&(t._overrideAuthToken="string"==typeof i?i:(0,l.Sg)(i,t.app.options.projectId))}(t,e,n,r)}(r,...i),r}(0,a._registerComponent)(new h.wA(Q,function(t,{instanceIdentifier:e}){let n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new G(n,r,i,e,a.SDK_VERSION)},"PUBLIC").setMultipleInstances(!0)),(0,a.registerVersion)(Y,Z,""),(0,a.registerVersion)(Y,Z,"esm2017")},44:function(t,e,n){"use strict";function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&0>e.indexOf(r)&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols)for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)0>e.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}n.d(e,{_T:function(){return r}}),"function"==typeof SuppressedError&&SuppressedError}}]);