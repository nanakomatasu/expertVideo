"use strict";let e=null;function u(t,o=500,l=!1){if(e!==null&&clearTimeout(e),l){const i=!e;e=setTimeout(()=>{e=null},o),i&&typeof t=="function"&&t()}else e=setTimeout(()=>{typeof t=="function"&&t()},o)}exports.debounce=u;
//# sourceMappingURL=../../../../../.sourcemap/mp-weixin/uni_modules/uv-ui-tools/libs/function/debounce.js.map
