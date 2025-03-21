"use strict";const a=require("../../../../common/vendor.js"),n=require("../function/index.js");class p{constructor(){this.config={type:"navigateTo",url:"",delta:1,params:{},animationType:"pop-in",animationDuration:300,intercept:!1,events:{}},this.route=this.route.bind(this)}addRootPath(e){return e[0]==="/"?e:`/${e}`}mixinParam(e,i){e=e&&this.addRootPath(e);let t="";return/.*\/.*\?.*=.*/.test(e)?(t=n.queryParams(i,!1),e+=`&${t}`):(t=n.queryParams(i),e+=t)}async route(e={},i={}){let t={};typeof e=="string"?(t.url=this.mixinParam(e,i),t.type="navigateTo"):(t=n.deepMerge(this.config,e),t.url=this.mixinParam(e.url,e.params)),t.url!==n.page()&&(i.intercept&&(t.intercept=i.intercept),t.params=i,t=n.deepMerge(this.config,t),typeof t.intercept=="function"?await new Promise((r,o)=>{t.intercept(t,r)})&&this.openPage(t):this.openPage(t))}openPage(e){const{url:i,type:t,delta:s,animationType:r,animationDuration:o,events:u}=e;(e.type=="navigateTo"||e.type=="to")&&a.index.navigateTo({url:i,animationType:r,animationDuration:o,events:u}),(e.type=="redirectTo"||e.type=="redirect")&&a.index.redirectTo({url:i}),(e.type=="switchTab"||e.type=="tab")&&a.index.switchTab({url:i}),(e.type=="reLaunch"||e.type=="launch")&&a.index.reLaunch({url:i}),(e.type=="navigateBack"||e.type=="back")&&a.index.navigateBack({delta:s})}}const c=new p().route;exports.route=c;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uv-ui-tools/libs/util/route.js.map
