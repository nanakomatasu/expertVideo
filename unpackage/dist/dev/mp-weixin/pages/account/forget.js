"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_input2 = common_vendor.resolveComponent("uv-input");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_easycom_uv_input2 + _easycom_uv_icon2)();
}
const _easycom_uv_input = () => "../../uni_modules/uv-input/components/uv-input/uv-input.js";
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uv_input + _easycom_uv_icon)();
}
const _sfc_main = {
  __name: "forget",
  setup(__props) {
    const agreementStatus = common_vendor.ref(0);
    const accountNumber = common_vendor.ref("");
    const password = common_vendor.ref("");
    const confirmPassword = common_vendor.ref("");
    const changeAgreementStatus = () => {
      if (agreementStatus.value == 0) {
        agreementStatus.value = 1;
      } else {
        agreementStatus.value = 0;
      }
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(($event) => accountNumber.value = $event),
        b: common_vendor.p({
          customStyle: "background-color: #F8F9FD; height: 88rpx; padding: 0 24rpx;",
          placeholder: "请输入账号",
          maxlength: "11",
          type: "number",
          shape: "square ",
          border: "none",
          prefixIcon: "account",
          modelValue: accountNumber.value
        }),
        c: common_vendor.o(($event) => password.value = $event),
        d: common_vendor.p({
          customStyle: "background-color: #F8F9FD; height: 88rpx; box-sizing: border-box; padding: 0 24rpx;",
          placeholder: "请输入密码",
          shape: "square",
          border: "none",
          prefixIcon: "eye",
          prefixIconStyle: "font-size: 22px;color: #909399",
          password: "true",
          modelValue: password.value
        }),
        e: common_vendor.o(($event) => confirmPassword.value = $event),
        f: common_vendor.p({
          customStyle: "background-color: #F8F9FD; height: 88rpx; box-sizing: border-box; padding: 0 24rpx;",
          placeholder: "请再次确认密码",
          shape: "square",
          border: "none",
          prefixIcon: "eye",
          prefixIconStyle: "font-size: 22px;color: #909399",
          password: "true",
          modelValue: confirmPassword.value
        }),
        g: agreementStatus.value == 1
      }, agreementStatus.value == 1 ? {
        h: common_vendor.n(agreementStatus.value == 1 ? "check-status" : ""),
        i: common_vendor.p({
          name: "checkmark",
          size: "20rpx",
          color: "#fff"
        })
      } : {}, {
        j: common_vendor.o(changeAgreementStatus)
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-851be85e"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/account/forget.js.map
