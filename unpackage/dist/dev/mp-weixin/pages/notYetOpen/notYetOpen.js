"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_tn_empty2 = common_vendor.resolveComponent("tn-empty");
  (_easycom_uv_icon2 + _easycom_tn_empty2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_tn_empty = () => "../../uni_modules/tuniaoui-vue3/components/empty/src/empty.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_tn_empty)();
}
const _sfc_main = {
  __name: "notYetOpen",
  setup(__props) {
    const backPage = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(backPage),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#fff"
        }),
        c: common_vendor.p({
          mode: "data",
          size: "xl"
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/notYetOpen/notYetOpen.js.map
