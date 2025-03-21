"use strict";const d=require("../../../uv-ui-tools/libs/function/colorGradient.js"),l=require("../../../uv-ui-tools/libs/mixin/mpMixin.js"),a=require("../../../uv-ui-tools/libs/mixin/mixin.js"),u=require("./props.js"),i=require("../../../../common/vendor.js"),m={name:"uv-loading-icon",mixins:[l.mpMixin,a.mixin,u.props],data(){return{array12:Array.from({length:12}),aniAngel:360,webviewHide:!1,loading:!1}},computed:{otherBorderColor(){const e=d.colorGradient(this.color,"#ffffff",100)[80];return this.mode==="circle"?this.inactiveColor?this.inactiveColor:e:"transparent"}},watch:{show(e){}},mounted(){this.init()},methods:{init(){setTimeout(()=>{},20)},addEventListenerToWebview(){const e=getCurrentPages(),o=e[e.length-1].$getAppWebview();o.addEventListener("hide",()=>{this.webviewHide=!0}),o.addEventListener("show",()=>{this.webviewHide=!1})}}};function v(e,t,o,h,n,r){return i.e({a:e.show},e.show?i.e({b:!n.webviewHide},n.webviewHide?{}:i.e({c:e.mode==="spinner"},e.mode==="spinner"?{d:i.f(n.array12,(p,s,f)=>({a:s}))}:{},{e:i.n(`uv-loading-icon__spinner--${e.mode}`),f:e.color,g:e.$uv.addUnit(e.size),h:e.$uv.addUnit(e.size),i:e.color,j:r.otherBorderColor,k:r.otherBorderColor,l:r.otherBorderColor,m:`${e.duration}ms`,n:e.mode==="semicircle"||e.mode==="circle"?e.timingFunction:""}),{o:e.text},e.text?{p:i.t(e.text),q:i.s({fontSize:e.$uv.addUnit(e.textSize),color:e.textColor}),r:i.s(e.$uv.addStyle(e.textStyle))}:{},{s:i.s(e.$uv.addStyle(e.customStyle)),t:i.n(e.vertical&&"uv-loading-icon--vertical")}):{})}const c=i._export_sfc(m,[["render",v],["__scopeId","data-v-29b619ea"]]);wx.createComponent(c);
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uv-loading-icon/components/uv-loading-icon/uv-loading-icon.js.map
