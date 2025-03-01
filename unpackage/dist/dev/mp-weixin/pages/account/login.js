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
  __name: "login",
  setup(__props) {
    const agreementStatus = common_vendor.ref(0);
    const typeStatus = common_vendor.ref(1);
    const accountNumber = common_vendor.ref("");
    const password = common_vendor.ref("");
    const inviteCode = common_vendor.ref("");
    const changeAgreementStatus = () => {
      if (agreementStatus.value == 0) {
        agreementStatus.value = 1;
      } else {
        agreementStatus.value = 0;
      }
    };
    const accountTypeList = common_vendor.ref([
      {
        id: 1,
        title: "登录"
      },
      {
        id: 2,
        title: "注册"
      }
    ]);
    const changeAccountType = (id) => {
      typeStatus.value = id;
    };
    const navForget = () => {
      common_vendor.index.navigateTo({
        url: "/pages/account/forget"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(typeStatus.value == 1 ? "欢迎登录" : "欢迎注册"),
        b: common_vendor.o(($event) => accountNumber.value = $event),
        c: common_vendor.p({
          customStyle: "background-color: #F8F9FD; height: 88rpx; padding: 0 24rpx;",
          placeholder: "请输入账号",
          maxlength: "11",
          type: "number",
          shape: "square ",
          border: "none",
          prefixIcon: "account",
          modelValue: accountNumber.value
        }),
        d: common_vendor.o(($event) => password.value = $event),
        e: common_vendor.p({
          customStyle: "background-color: #F8F9FD; height: 88rpx; box-sizing: border-box; padding: 0 24rpx;",
          placeholder: "请输入密码",
          shape: "square",
          border: "none",
          prefixIcon: "eye",
          prefixIconStyle: "font-size: 22px;color: #909399",
          password: "true",
          modelValue: password.value
        }),
        f: typeStatus.value == 2
      }, typeStatus.value == 2 ? {
        g: common_vendor.o(($event) => inviteCode.value = $event),
        h: common_vendor.p({
          customStyle: "background-color: #F8F9FD; height: 88rpx; box-sizing: border-box; padding: 0 24rpx;",
          placeholder: "请输入邀请码",
          shape: "square",
          border: "none",
          prefixIcon: "file-text",
          prefixIconStyle: "font-size: 22px;color: #909399",
          password: "true",
          modelValue: inviteCode.value
        })
      } : {}, {
        i: typeStatus.value == 1
      }, typeStatus.value == 1 ? {
        j: common_vendor.o(navForget)
      } : {}, {
        k: typeStatus.value == 1
      }, typeStatus.value == 1 ? {} : {}, {
        l: typeStatus.value == 2
      }, typeStatus.value == 2 ? {} : {}, {
        m: agreementStatus.value == 1
      }, agreementStatus.value == 1 ? {
        n: common_vendor.n(agreementStatus.value == 1 ? "check-status" : ""),
        o: common_vendor.p({
          name: "checkmark",
          size: "20rpx",
          color: "#fff"
        })
      } : {}, {
        p: common_vendor.o(changeAgreementStatus),
        q: common_vendor.f(accountTypeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: common_vendor.n(item.id == typeStatus.value ? "select-item" : ""),
            c: common_vendor.o(($event) => changeAccountType(item.id))
          };
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1095b067"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/account/login.js.map
