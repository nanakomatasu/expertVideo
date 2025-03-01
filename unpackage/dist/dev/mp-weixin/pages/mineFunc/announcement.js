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
  __name: "announcement",
  setup(__props) {
    const announcementList = common_vendor.ref([{
      id: 1,
      title: "轻松创业，优选生活!",
      cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      time: "2024-12-10",
      views: "1486阅读"
    }, {
      id: 2,
      title: "轻松创业，优选生活!",
      cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      time: "2024-12-10",
      views: "1486阅读"
    }, {
      id: 3,
      title: "轻松创业，优选生活!",
      cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      time: "2024-12-10",
      views: "1486阅读"
    }, {
      id: 4,
      title: "轻松创业，优选生活!",
      cover: "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      time: "2024-12-10",
      views: "1486阅读"
    }]);
    const navDetail = (item) => {
      common_vendor.index.navigateTo({
        url: "/pages/announcement/announcementDetail?id=" + item.id
      });
    };
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
        c: common_vendor.f(announcementList.value, (item, k0, i0) => {
          return {
            a: item.cover,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.time),
            d: common_vendor.t(item.views),
            e: common_vendor.o(($event) => navDetail(item))
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-682aa96c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mineFunc/announcement.js.map
