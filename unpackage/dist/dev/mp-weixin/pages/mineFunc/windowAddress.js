"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
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
  __name: "windowAddress",
  setup(__props) {
    const inputValue = common_vendor.ref("");
    const windowsCode = common_vendor.ref("");
    const uploadImage = () => {
      common_vendor.index.chooseImage({
        count: 1,
        // 图片数量
        sizeType: ["original", "compressed"],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"],
        //从相册选择或者拍照
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          common_vendor.index.__f__("log", "at pages/mineFunc/windowAddress.vue:44", tempFilePaths[0]);
          common_vendor.index.uploadFile({
            url: "https://xx.com/center/group/icon",
            //上传图片api
            filePath: tempFilePaths[0],
            name: "groupicon",
            header: {
              "Authorization": "token"
            },
            success: (res2) => {
              JSON.parse(res2.data);
              common_vendor.index.showToast({
                title: "上传成功",
                icon: "success"
              });
            }
          });
        }
      });
    };
    const backPage = () => {
      common_vendor.index.navigateBack();
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: common_vendor.o(backPage),
        c: common_vendor.p({
          name: "arrow-left",
          color: "#fff"
        }),
        d: common_vendor.o(($event) => inputValue.value = $event),
        e: common_vendor.p({
          placeholder: "请输入标题",
          modelValue: inputValue.value
        }),
        f: windowsCode.value != ""
      }, windowsCode.value != "" ? {
        g: windowsCode.value
      } : {}, {
        h: windowsCode.value == ""
      }, windowsCode.value == "" ? {
        i: common_vendor.p({
          name: "photo",
          size: "60rpx"
        })
      } : {}, {
        j: common_vendor.o(uploadImage)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f6ccfdb4"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/mineFunc/windowAddress.js.map
