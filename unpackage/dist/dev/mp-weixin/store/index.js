"use strict";
const common_vendor = require("../common/vendor.js");
const pinia = common_vendor.createPinia();
const persistedState = common_vendor.createPersistedState({
  storage: {
    getItem: (key) => common_vendor.index.getStorageSync(key),
    setItem: (key, value) => common_vendor.index.setStorageSync(key, value),
    removeItem: (key) => common_vendor.index.removeStorageSync(key)
  }
});
pinia.use(persistedState);
exports.pinia = pinia;
//# sourceMappingURL=../../.sourcemap/mp-weixin/store/index.js.map
