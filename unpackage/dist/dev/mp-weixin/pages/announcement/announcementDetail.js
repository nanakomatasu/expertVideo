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
  __name: "announcementDetail",
  setup(__props) {
    common_vendor.onLoad((options) => {
      announcementId.value = options.id;
    });
    const announcementId = common_vendor.ref("");
    const defaultContent = common_vendor.ref(`
		<p>露从今夜白，月是故乡明</p>
		<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	`);
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
        c: defaultContent.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d76ec6e5"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/announcement/announcementDetail.js.map
