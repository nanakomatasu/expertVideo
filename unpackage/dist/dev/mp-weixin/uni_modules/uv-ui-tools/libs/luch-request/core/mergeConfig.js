"use strict";const u=require("../utils.js"),i=(d,t,a)=>{let e={};return d.forEach(s=>{u.isUndefined(a[s])?u.isUndefined(t[s])||(e[s]=t[s]):e[s]=a[s]}),e},n=(d,t={})=>{const a=t.method||d.method||"GET";let e={baseURL:t.baseURL||d.baseURL||"",method:a,url:t.url||"",params:t.params||{},custom:{...d.custom||{},...t.custom||{}},header:u.deepMerge(d.header||{},t.header||{})};return e={...e,...i(["getTask","validateStatus","paramsSerializer","forcedJSONParsing"],d,t)},a==="DOWNLOAD"?e={...e,...i(["timeout","filePath"],d,t)}:a==="UPLOAD"?(delete e.header["content-type"],delete e.header["Content-Type"],["filePath","name","timeout","formData"].forEach(r=>{u.isUndefined(t[r])||(e[r]=t[r])}),u.isUndefined(e.timeout)&&!u.isUndefined(d.timeout)&&(e.timeout=d.timeout)):e={...e,...i(["data","timeout","dataType","responseType","enableHttp2","enableQuic","enableCache","enableHttpDNS","httpDNSServiceId","enableChunked","forceCellularNetwork"],d,t)},e};exports.mergeConfig=n;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/uv-ui-tools/libs/luch-request/core/mergeConfig.js.map
