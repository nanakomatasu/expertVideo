"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_tn_title2 = common_vendor.resolveComponent("tn-title");
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  (_easycom_uv_icon2 + _easycom_tn_title2 + _easycom_uv_input2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_tn_title = () => "../../uni_modules/tuniaoui-vue3/components/title/src/title.js";
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_tn_title + _easycom_uv_input)();
}
const _sfc_main = {
  __name: "taskDetail",
  setup(__props) {
    const orderSn = common_vendor.ref("");
    const taskFlowSteps = common_vendor.ref([
      {
        id: 1,
        title: "进入橱窗仅需要购买一个商品"
      },
      {
        id: 2,
        title: "收货人姓名和电话必须与达人系统一致"
      }
    ]);
    const backPages = () => {
      common_vendor.index.navigateBack();
    };
    const openVideo = () => {
      common_vendor.wx$1.openChannelsUserProfile({
        finderUserName: "sph7qekAjBcxbjN",
        success(res) {
          common_vendor.index.__f__("log", "at pages/task/taskDetail.vue:73", res);
        },
        fail(res) {
          common_vendor.index.__f__("log", "at pages/task/taskDetail.vue:76", res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(backPages),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#fff"
        }),
        c: common_vendor.p({
          title: "当前步骤",
          mode: "vLine",
          ["assist-color"]: "#FAA82C",
          color: "#FAA82C",
          size: "lg"
        }),
        d: common_vendor.p({
          name: "shopping-cart",
          color: "#fff",
          size: "40rpx"
        }),
        e: common_vendor.o(openVideo),
        f: common_assets._imports_0$4,
        g: common_vendor.f(taskFlowSteps.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.title)
          };
        }),
        h: common_vendor.o(($event) => orderSn.value = $event),
        i: common_vendor.p({
          placeholder: "请输入订单号",
          modelValue: orderSn.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/task/taskDetail.js.map
