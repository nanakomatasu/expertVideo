"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_tn_search_box2 = common_vendor.resolveComponent("tn-search-box");
  const _easycom_uv_swiper2 = common_vendor.resolveComponent("uv-swiper");
  const _easycom_tn_notice_bar2 = common_vendor.resolveComponent("tn-notice-bar");
  const _easycom_tn_title2 = common_vendor.resolveComponent("tn-title");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_easycom_tn_search_box2 + _easycom_uv_swiper2 + _easycom_tn_notice_bar2 + _easycom_tn_title2 + _easycom_uv_icon2)();
}
const _easycom_tn_search_box = () => "../../uni_modules/tuniaoui-vue3/components/search-box/src/search-box.js";
const _easycom_uv_swiper = () => "../../uni_modules/uv-swiper/components/uv-swiper/uv-swiper.js";
const _easycom_tn_notice_bar = () => "../../uni_modules/tuniaoui-vue3/components/notice-bar/src/notice-bar.js";
const _easycom_tn_title = () => "../../uni_modules/tuniaoui-vue3/components/title/src/title.js";
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_tn_search_box + _easycom_uv_swiper + _easycom_tn_notice_bar + _easycom_tn_title + _easycom_uv_icon)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const noticeData = common_vendor.ref(["【公告】欢迎来到好物优选平台，我们将竭尽为您服务"]);
    const indexFuncList = common_vendor.ref([
      {
        id: 1,
        title: "晋升培训",
        icon: "/static/index/jinsheng.png",
        url: ""
      },
      {
        id: 2,
        title: "素材动态",
        icon: "/static/index/sucai.png",
        url: "/pages/materialLibrary/materialLibrary"
      },
      {
        id: 3,
        title: "蚂蚁客服",
        icon: "/static/index/kefu.png",
        url: ""
      }
    ]);
    const videoTutorialsList = common_vendor.ref([
      {
        id: 1,
        title: "新人必刷—生成视频号橱窗专 属海报",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
      },
      {
        id: 2,
        title: "新人必刷—生成视频号橱窗专 属海报",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
      },
      {
        id: 3,
        title: "新人必刷—生成视频号橱窗专 属海报",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
      },
      {
        id: 4,
        title: "新人必刷—生成视频号橱窗专 属海报",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
      },
      {
        id: 5,
        title: "新人必刷—生成视频号橱窗专 属海报新人必刷—生成视频号橱窗专 属海报新人必刷—生成视频号橱窗专 属海报新人必刷—生成视频号橱窗专 属海报",
        cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
      }
    ]);
    const list = [
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx1.sinaimg.cn/mw690/0040jbadgy1hyl899miduj62q45xc7wk02.jpg"
    ];
    const searchInputEvent = () => {
      common_vendor.index.__f__("log", "at pages/tabbar/index.vue:124", "searchInputEvent", value);
    };
    const searchBtnClickEvent = () => {
      common_vendor.index.__f__("log", "at pages/tabbar/index.vue:128", "searchBtnClickEvent", value);
    };
    const navIndexFunc = (url) => {
      common_vendor.index.navigateTo({
        url
      });
    };
    const navNotYetOpen = () => {
      common_vendor.index.navigateTo({
        url: "/pages/notYetOpen/notYetOpen"
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(searchInputEvent),
        b: common_vendor.o(searchBtnClickEvent),
        c: common_vendor.o(($event) => searchValue.value = $event),
        d: common_vendor.p({
          shape: "square",
          border: false,
          ["search-button-text-color"]: "#FFFFFF",
          ["search-button-bg-color"]: "#FAA82C",
          modelValue: searchValue.value
        }),
        e: common_vendor.p({
          list,
          height: "304rpx",
          radius: "8rpx"
        }),
        f: common_vendor.p({
          data: noticeData.value,
          ["bg-color"]: "#fff",
          ["text-color"]: "#BFBFBF",
          ["left-icon"]: "sound",
          ["left-icon-color"]: "#1DA8FF",
          ["left-icon-size"]: "35rpx"
        }),
        g: common_vendor.f(indexFuncList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: common_vendor.o(($event) => navIndexFunc(item.url))
          };
        }),
        h: common_assets._imports_0,
        i: common_vendor.p({
          title: "视频教程",
          mode: "vLine",
          ["assist-color"]: "#FAA82C",
          size: "sm"
        }),
        j: common_vendor.f(videoTutorialsList.value, (item, k0, i0) => {
          return {
            a: "6d8661b0-4-" + i0,
            b: item.cover,
            c: common_vendor.t(item.title),
            d: item.id
          };
        }),
        k: common_vendor.p({
          name: "play-circle",
          size: "50rpx",
          color: "#fff"
        }),
        l: common_assets._imports_0,
        m: common_vendor.p({
          title: "直播回放",
          mode: "vLine",
          ["assist-color"]: "#FAA82C",
          size: "sm"
        }),
        n: common_vendor.p({
          name: "play-circle",
          size: "100rpx",
          color: "#fff"
        }),
        o: common_vendor.o(navNotYetOpen)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6d8661b0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabbar/index.js.map
