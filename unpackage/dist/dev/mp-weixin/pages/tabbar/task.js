"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uv_line_progress2 = common_vendor.resolveComponent("uv-line-progress");
  const _easycom_tn_popup2 = common_vendor.resolveComponent("tn-popup");
  (_easycom_uv_line_progress2 + _easycom_tn_popup2)();
}
const _easycom_uv_line_progress = () => "../../uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.js";
const _easycom_tn_popup = () => "../../uni_modules/tuniaoui-vue3/components/popup/src/popup.js";
if (!Math) {
  (_easycom_uv_line_progress + _easycom_tn_popup)();
}
const _sfc_main = {
  __name: "task",
  setup(__props) {
    const showPopup = common_vendor.ref(false);
    const courseList = common_vendor.ref([
      {
        id: 1,
        title: "商品橱窗名称1",
        status: "已完成"
      },
      {
        id: 2,
        title: "商品橱窗名称2",
        status: "未完成"
      },
      {
        id: 3,
        title: "商品橱窗名称3",
        status: "未完成"
      },
      {
        id: 4,
        title: "商品橱窗名称4",
        status: "未完成"
      },
      {
        id: 5,
        title: "商品橱窗名称5",
        status: "未完成"
      },
      {
        id: 6,
        title: "商品橱窗名称6",
        status: "未完成"
      },
      {
        id: 7,
        title: "商品橱窗名称7",
        status: "未完成"
      },
      {
        id: 8,
        title: "商品橱窗名称8",
        status: "未完成"
      },
      {
        id: 9,
        title: "商品橱窗名称9",
        status: "未完成"
      },
      {
        id: 10,
        title: "商品橱窗名称10",
        status: "未完成"
      },
      {
        id: 11,
        title: "商品橱窗名称11",
        status: "未完成"
      }
    ]);
    const openPopup = () => {
      showPopup.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$1,
        b: common_vendor.p({
          percentage: 30,
          activeColor: "#FAA82C",
          inactiveColor: "#F2F3F8"
        }),
        c: common_assets._imports_1,
        d: common_assets._imports_2,
        e: common_vendor.f(courseList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.id < 10 ? "0" + item.id : item.id),
            b: common_vendor.t(item.status),
            c: common_vendor.n(item.status == "已完成" ? "completion-status" : "unfinished-status")
          };
        }),
        f: common_vendor.o(openPopup),
        g: common_assets._imports_3,
        h: common_vendor.o(($event) => showPopup.value = $event),
        i: common_vendor.p({
          ["open-direction"]: "center",
          top: "54px",
          width: "80%",
          height: "538",
          ["bg-color"]: "transparent",
          modelValue: showPopup.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-00991ab7"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabbar/task.js.map
