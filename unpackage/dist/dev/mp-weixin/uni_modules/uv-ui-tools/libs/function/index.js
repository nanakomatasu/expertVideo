"use strict";const f=require("../../../../common/vendor.js"),g=require("./test.js"),m=require("./digit.js");function M(e=0,t=0,n=0){return Math.max(e,Math.min(t,Number(n)))}function S(e,t=!1){return g.number(e)?t?`${e}px`:Number(e):/(rpx|upx)$/.test(e)?t?`${f.index.upx2px(parseInt(e))}px`:Number(f.index.upx2px(parseInt(e))):t?`${parseInt(e)}px`:parseInt(e)}function I(e=30){return new Promise(t=>{setTimeout(()=>{t()},e)})}function O(){return f.index.getSystemInfoSync().platform.toLowerCase()}function k(){return f.index.getSystemInfoSync()}function _(e,t){if(e>=0&&t>0&&t>=e){const n=t-e+1;return Math.floor(Math.random()*n+e)}return 0}function D(e=32,t=!0,n=null){const i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];if(n=n||i.length,e)for(let o=0;o<e;o++)r[o]=i[0|Math.random()*n];else{let o;r[8]=r[13]=r[18]=r[23]="-",r[14]="4";for(let s=0;s<36;s++)r[s]||(o=0|Math.random()*16,r[s]=i[s==19?o&3|8:o])}return t?(r.shift(),`u${r.join("")}`):r.join("")}function p(e=void 0){let t=this.$parent;for(;t;)if(t.$options&&t.$options.name!==e)t=t.$parent;else return t;return!1}function P(e,t="object"){if(g.empty(e)||typeof e=="object"&&t==="object"||t==="string"&&typeof e=="string")return e;if(t==="object"){e=l(e);const i=e.split(";"),r={};for(let o=0;o<i.length;o++)if(i[o]){const s=i[o].split(":");r[l(s[0])]=l(s[1])}return r}let n="";for(const i in e){const r=i.replace(/([A-Z])/g,"-$1").toLowerCase();n+=`${r}:${e[i]};`}return l(n)}function A(e="auto",t=(r=>(r=(i=>(i=(n=>(n=f.index)==null?void 0:n.$uv)())==null?void 0:i.config)())==null?void 0:r.unit)()?(u=>(u=(s=>(s=(o=>(o=f.index)==null?void 0:o.$uv)())==null?void 0:s.config)())==null?void 0:u.unit)():"px"){return e=String(e),g.number(e)?`${e}${t}`:e}function a(e,t=new WeakMap){if(e===null||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime());else if(e instanceof RegExp)n=new RegExp(e);else if(e instanceof Map)n=new Map(Array.from(e,([i,r])=>[i,a(r,t)]));else if(e instanceof Set)n=new Set(Array.from(e,i=>a(i,t)));else if(Array.isArray(e))n=e.map(i=>a(i,t));else if(Object.prototype.toString.call(e)==="[object Object]"){n=Object.create(Object.getPrototypeOf(e)),t.set(e,n);for(const[i,r]of Object.entries(e))n[i]=a(r,t)}else n=Object.assign({},e);return t.set(e,n),n}function d(e={},t={}){if(e=a(e),typeof e!="object"||e===null||typeof t!="object"||t===null)return e;const n=Array.isArray(e)?e.slice():Object.assign({},e);for(const i in t){if(!t.hasOwnProperty(i))continue;const r=t[i],o=n[i];r instanceof Date?n[i]=new Date(r):r instanceof RegExp?n[i]=new RegExp(r):r instanceof Map?n[i]=new Map(r):r instanceof Set?n[i]=new Set(r):typeof r=="object"&&r!==null?n[i]=d(o,r):n[i]=r}return n}function x(e){f.index.__f__("error","at uni_modules/uv-ui-tools/libs/function/index.js:250",`uvui提示：${e}`)}function E(e=[]){return e.sort(()=>Math.random()-.5)}String.prototype.padStart||(String.prototype.padStart=function(e,t=" "){if(Object.prototype.toString.call(t)!=="[object String]")throw new TypeError("fillString must be String");const n=this;if(n.length>=e)return String(n);const i=e-n.length;let r=Math.ceil(i/t.length);for(;r>>=1;)t+=t,r===1&&(t+=t);return t.slice(0,i)+n});function $(e=null,t="yyyy-mm-dd"){let n;e?/^\d{10}$/.test(e==null?void 0:e.toString().trim())?n=new Date(e*1e3):typeof e=="string"&&/^\d+$/.test(e.trim())?n=new Date(Number(e)):typeof e=="string"&&e.includes("-")&&!e.includes("T")?n=new Date(e.replace(/-/g,"/")):n=new Date(e):n=new Date;const i={y:n.getFullYear().toString(),m:(n.getMonth()+1).toString().padStart(2,"0"),d:n.getDate().toString().padStart(2,"0"),h:n.getHours().toString().padStart(2,"0"),M:n.getMinutes().toString().padStart(2,"0"),s:n.getSeconds().toString().padStart(2,"0")};for(const r in i){const[o]=new RegExp(`${r}+`).exec(t)||[];if(o){const s=r==="y"&&o.length===2?2:0;t=t.replace(o,i[r].slice(s))}}return t}function C(e=null,t="yyyy-mm-dd"){e==null&&(e=Number(new Date)),e=parseInt(e),e.toString().length==10&&(e*=1e3);let n=new Date().getTime()-e;n=parseInt(n/1e3);let i="";switch(!0){case n<300:i="刚刚";break;case(n>=300&&n<3600):i=`${parseInt(n/60)}分钟前`;break;case(n>=3600&&n<86400):i=`${parseInt(n/3600)}小时前`;break;case(n>=86400&&n<2592e3):i=`${parseInt(n/86400)}天前`;break;default:t===!1?n>=2592e3&&n<365*86400?i=`${parseInt(n/(86400*30))}个月前`:i=`${parseInt(n/(86400*365))}年前`:i=$(e,t)}return i}function l(e,t="both"){return e=String(e),t=="both"?e.replace(/^\s+|\s+$/g,""):t=="left"?e.replace(/^\s*/,""):t=="right"?e.replace(/(\s*$)/g,""):t=="all"?e.replace(/\s+/g,""):e}function y(e={},t=!0,n="brackets"){const i=t?"?":"",r=[];["indices","brackets","repeat","comma"].indexOf(n)==-1&&(n="brackets");for(const o in e){const s=e[o];if(!(["",void 0,null].indexOf(s)>=0))if(s.constructor===Array)switch(n){case"indices":for(let c=0;c<s.length;c++)r.push(`${o}[${c}]=${s[c]}`);break;case"brackets":s.forEach(c=>{r.push(`${o}[]=${c}`)});break;case"repeat":s.forEach(c=>{r.push(`${o}=${c}`)});break;case"comma":let u="";s.forEach(c=>{u+=(u?",":"")+c}),r.push(`${o}=${u}`);break;default:s.forEach(c=>{r.push(`${o}[]=${c}`)})}else r.push(`${o}=${s}`)}return r.length?i+r.join("&"):""}function F(e,t=2e3){f.index.showToast({title:String(e),icon:"none",duration:t})}function N(e="success",t=!1){["primary","info","error","warning","success"].indexOf(e)==-1&&(e="success");let n="";switch(e){case"primary":n="info-circle";break;case"info":n="info-circle";break;case"error":n="close-circle";break;case"warning":n="error-circle";break;case"success":n="checkmark-circle";break;default:n="checkmark-circle"}return t&&(n+="-fill"),n}function w(e,t=0,n=".",i=","){e=`${e}`.replace(/[^0-9+-Ee.]/g,"");const r=isFinite(+e)?+e:0,o=isFinite(+t)?Math.abs(t):0,s=typeof i>"u"?",":i,u=typeof n>"u"?".":n;let c="";c=(o?m.round(r,o)+"":`${Math.round(r)}`).split(".");const h=/(-?\d+)(\d{3})/;for(;h.test(c[0]);)c[0]=c[0].replace(h,`$1${s}$2`);return(c[1]||"").length<o&&(c[1]=c[1]||"",c[1]+=new Array(o-c[1].length+1).join("0")),c.join(u)}function q(e,t=!0){const n=parseInt(e);return t?/s$/.test(e)?e:e>30?`${e}ms`:`${e}s`:/ms$/.test(e)?n:/s$/.test(e)?n>30?n:n*1e3:n}function v(e){return`00${e}`.slice(-2)}function R(e,t){const n=p.call(e,"uv-form-item"),i=p.call(e,"uv-form");n&&i&&i.validateField(n.prop,()=>{},t)}function z(e,t){if(e){if(typeof t!="string"||t==="")return"";if(t.indexOf(".")!==-1){const n=t.split(".");let i=e[n[0]]||{};for(let r=1;r<n.length;r++)i&&(i=i[n[r]]);return i}return e[t]}}function U(e,t,n){if(!e)return;const i=function(r,o,s){if(o.length===1){r[o[0]]=s;return}for(;o.length>1;){const u=o[0];(!r[u]||typeof r[u]!="object")&&(r[u]={}),o.shift(),i(r[u],o,s)}};if(!(typeof t!="string"||t===""))if(t.indexOf(".")!==-1){const r=t.split(".");i(e,r,n)}else e[t]=n}function b(){var n;const e=getCurrentPages(),t=(n=e[e.length-1])==null?void 0:n.route;return`/${t||""}`}function V(){return getCurrentPages()}function H(e=0){const t=getCurrentPages(),n=t.length;return t[n-1+e]}function L({props:e={},config:t={},color:n={},zIndex:i={}}){const{deepMerge:r}=f.index.$uv;f.index.$uv.config=r(f.index.$uv.config,t),f.index.$uv.props=r(f.index.$uv.props,e),f.index.$uv.color=r(f.index.$uv.color,n),f.index.$uv.zIndex=r(f.index.$uv.zIndex,i)}const Z=Object.freeze(Object.defineProperty({__proto__:null,$parent:p,addStyle:P,addUnit:A,deepClone:a,deepMerge:d,error:x,formValidate:R,getDuration:q,getHistoryPage:H,getProperty:z,getPx:S,guid:D,os:O,padZero:v,page:b,pages:V,priceFormat:w,queryParams:y,random:_,randomArray:E,range:M,setConfig:L,setProperty:U,sleep:I,sys:k,timeFormat:$,timeFrom:C,toast:F,trim:l,type2icon:N},Symbol.toStringTag,{value:"Module"}));exports.deepClone=a;exports.deepMerge=d;exports.error=x;exports.index=Z;exports.page=b;exports.priceFormat=w;exports.queryParams=y;exports.timeFormat=$;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uv-ui-tools/libs/function/index.js.map
