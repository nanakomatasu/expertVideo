"use strict";function B(n="rgb(0, 0, 0)",i="rgb(255, 255, 255)",c=10){const t=l(n,!1),r=t[0],e=t[1],s=t[2],a=l(i,!1),h=a[0],b=a[1],$=a[2],R=(h-r)/c,G=(b-e)/c,x=($-s)/c,u=[];for(let o=0;o<c;o++){let g=f(`rgb(${Math.round(R*o+r)},${Math.round(G*o+e)},${Math.round(x*o+s)})`);o===0&&(g=f(n)),o===c-1&&(g=f(i)),u.push(g)}return u}function l(n,i=!0){const c=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(n=String(n).toLowerCase(),n&&c.test(n)){if(n.length===4){let r="#";for(let e=1;e<4;e+=1)r+=n.slice(e,e+1).concat(n.slice(e,e+1));n=r}const t=[];for(let r=1;r<7;r+=2)t.push(parseInt(`0x${n.slice(r,r+2)}`));return i?`rgb(${t[0]},${t[1]},${t[2]})`:t}return/^(rgb|RGB)/.test(n)?n.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",").map(r=>Number(r)):n}function f(n){const i=n,c=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(i)){const t=i.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");let r="#";for(let e=0;e<t.length;e++){let s=Number(t[e]).toString(16);s=String(s).length==1?`0${s}`:s,s==="0"&&(s+=s),r+=s}return r.length!==7&&(r=i),r}if(c.test(i)){const t=i.replace(/#/,"").split("");if(t.length===6)return i;if(t.length===3){let r="#";for(let e=0;e<t.length;e+=1)r+=t[e]+t[e];return r}}else return i}function d(n,i){n=f(n);const c=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;let t=String(n).toLowerCase();if(t&&c.test(t)){if(t.length===4){let e="#";for(let s=1;s<4;s+=1)e+=t.slice(s,s+1).concat(t.slice(s,s+1));t=e}const r=[];for(let e=1;e<7;e+=2)r.push(parseInt(`0x${t.slice(e,e+2)}`));return`rgba(${r.join(",")},${i})`}return t}exports.colorGradient=B;exports.colorToRgba=d;exports.hexToRgb=l;exports.rgbToHex=f;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uv-ui-tools/libs/function/colorGradient.js.map
