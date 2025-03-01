"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  (_easycom_uv_icon2 + _easycom_uv_input2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_input)();
}
const _sfc_main = {
  __name: "videoId",
  setup(__props) {
    const videoId = common_vendor.ref("1234567");
    const backPages = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(backPages),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#fff"
        }),
        c: common_vendor.o(($event) => videoId.value = $event),
        d: common_vendor.p({
          border: "none",
          modelValue: videoId.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7615bf7b"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mineFunc/videoId.js.map
