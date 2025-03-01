"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_tn_search_box2 = common_vendor.resolveComponent("tn-search-box");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_easycom_tn_search_box2 + _easycom_uv_icon2)();
}
const _easycom_tn_search_box = () => "../../uni_modules/tuniaoui-vue3/components/search-box/src/search-box.js";
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_tn_search_box + _easycom_uv_icon)();
}
const _sfc_main = {
  __name: "businessSchool",
  setup(__props) {
    const switchId = common_vendor.ref(1);
    const switchList = common_vendor.ref([
      {
        id: 1,
        title: "图文"
      },
      {
        id: 2,
        title: "视频"
      }
    ]);
    const courseList = common_vendor.ref([
      {
        id: 1,
        title: "高等数学",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
        introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
      },
      {
        id: 2,
        title: "高等数学",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
        introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
      },
      {
        id: 3,
        title: "高等数学",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
        introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
      },
      {
        id: 4,
        title: "高等数学",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
        introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
      },
      {
        id: 5,
        title: "高等数学",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
        introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
      },
      {
        id: 6,
        title: "高等数学",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
        introduction: "高等数学是一门基础学科，广泛应用于科学、工程、经济等多个领域。它主要涵盖了微积分、线性代数、概率论与数理统计等核心内容"
      }
    ]);
    const changeSwitchId = (item) => {
      switchId.value = item.id;
    };
    const navCourseDetail = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/course/courseDetail?id=" + item.id + "&type=" + switchId.value
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(_ctx.searchInputEvent),
        b: common_vendor.o(_ctx.searchBtnClickEvent),
        c: common_vendor.o(($event) => _ctx.searchValue = $event),
        d: common_vendor.p({
          shape: "square",
          border: false,
          ["search-button-text-color"]: "#FFFFFF",
          ["search-button-bg-color"]: "#FAA82C",
          modelValue: _ctx.searchValue
        }),
        e: common_vendor.f(switchList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: common_vendor.n(item.id == switchId.value ? "select-switch-item" : ""),
            d: common_vendor.o(($event) => changeSwitchId(item), item.id)
          };
        }),
        f: common_vendor.f(courseList.value, (item, k0, i0) => {
          return common_vendor.e(switchId.value == 2 ? {
            a: "86b50dd3-1-" + i0,
            b: common_vendor.p({
              name: "play-circle",
              size: "50rpx",
              color: "#fff"
            })
          } : {}, {
            c: item.cover,
            d: common_vendor.t(item.title),
            e: common_vendor.t(item.introduction),
            f: item.id,
            g: common_vendor.o(($event) => navCourseDetail(item), item.id)
          });
        }),
        g: switchId.value == 2
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-86b50dd3"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabbar/businessSchool.js.map
