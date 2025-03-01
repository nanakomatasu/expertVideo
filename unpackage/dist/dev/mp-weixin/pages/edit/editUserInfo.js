"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _component_P = common_vendor.resolveComponent("P");
  const _easycom_tn_region_picker2 = common_vendor.resolveComponent("tn-region-picker");
  const _easycom_tn_picker2 = common_vendor.resolveComponent("tn-picker");
  (_easycom_uv_icon2 + _component_P + _easycom_tn_region_picker2 + _easycom_tn_picker2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_tn_region_picker = () => "../../uni_modules/tuniaoui-vue3/components/region-picker/src/region-picker.js";
const _easycom_tn_picker = () => "../../uni_modules/tuniaoui-vue3/components/picker/src/picker.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_tn_region_picker + _easycom_tn_picker)();
}
const _sfc_main = {
  __name: "editUserInfo",
  setup(__props) {
    const avatar = common_vendor.ref("https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg");
    const openRegionPicker = common_vendor.ref(false);
    const openPicker = common_vendor.ref(false);
    const pickerValue = common_vendor.ref("男");
    const regionValue = common_vendor.ref(["河南省", "郑州市", "金水区"]);
    const pickerData = ["男", "女"];
    const nick = common_vendor.ref("");
    const phone = common_vendor.ref("");
    const inviteCode = common_vendor.ref("");
    const uploadAvatar = () => {
      common_vendor.index.chooseImage({
        count: 1,
        // 图片数量
        sizeType: ["original", "compressed"],
        //可以指定是原图还是压缩图，默认二者都有
        sourceType: ["album", "camera"],
        //从相册选择或者拍照
        success: (res) => {
          const tempFilePaths = res.tempFilePaths;
          common_vendor.index.__f__("log", "at pages/edit/editUserInfo.vue:89", tempFilePaths[0]);
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
    const backPages = () => {
      common_vendor.index.navigateBack();
    };
    const openRegion = () => {
      openRegionPicker.value = true;
    };
    const openGenderPicker = () => {
      openPicker.value = true;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(backPages),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#fff"
        }),
        c: common_vendor.p({
          name: "camera-fill",
          size: "50rpx",
          color: "#fff"
        }),
        d: common_vendor.o(uploadAvatar),
        e: avatar.value,
        f: nick.value,
        g: common_vendor.o(($event) => nick.value = $event.detail.value),
        h: common_vendor.t(pickerValue.value),
        i: common_vendor.p({
          name: "arrow-down-fill"
        }),
        j: common_vendor.o(openGenderPicker),
        k: common_vendor.t(regionValue.value[0]),
        l: common_vendor.t(regionValue.value[1]),
        m: common_vendor.t(regionValue.value[2]),
        n: common_vendor.p({
          name: "arrow-down-fill"
        }),
        o: common_vendor.o(openRegion),
        p: phone.value,
        q: common_vendor.o(($event) => phone.value = $event.detail.value),
        r: inviteCode.value,
        s: common_vendor.o(($event) => inviteCode.value = $event.detail.value),
        t: common_vendor.o(($event) => regionValue.value = $event),
        v: common_vendor.o(($event) => openRegionPicker.value = $event),
        w: common_vendor.p({
          modelValue: regionValue.value,
          open: openRegionPicker.value
        }),
        x: common_vendor.o(($event) => pickerValue.value = $event),
        y: common_vendor.o(($event) => openPicker.value = $event),
        z: common_vendor.p({
          data: pickerData,
          modelValue: pickerValue.value,
          open: openPicker.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2fe83fbe"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/edit/editUserInfo.js.map
