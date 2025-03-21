"use strict";const t=require("../common/vendor.js"),n=t.createPinia(),i=t.createPersistedState({storage:{getItem:e=>t.index.getStorageSync(e),setItem:(e,r)=>t.index.setStorageSync(e,r),removeItem:e=>t.index.removeStorageSync(e)}});n.use(i);exports.pinia=n;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
