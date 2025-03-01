"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  _easycom_uv_icon2();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  _easycom_uv_icon();
}
const _sfc_main = {
  __name: "myTeam",
  setup(__props) {
    const selectTabId = common_vendor.ref(1);
    const switchTabsList = [
      {
        id: 1,
        title: "全部"
      },
      {
        id: 2,
        title: "直推"
      },
      {
        id: 3,
        title: "间推"
      }
    ];
    const changeTabId = (id) => {
      selectTabId.value = id;
    };
    const backPages = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(backPages),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#1A1A1A"
        }),
        c: common_vendor.f(switchTabsList, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: common_vendor.n(selectTabId.value == item.id ? "select-tab-item" : ""),
            d: common_vendor.o(($event) => changeTabId(item.id), item.id)
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-605f6d3f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mineFunc/myTeam.js.map
