"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_components_empty_libs_default = require("../libs/default.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_empty_src_composables_emptyCustom = require("./composables/empty-custom.js");
const emptyMode = [
  "cart",
  "page",
  "search",
  "address",
  "network",
  "order",
  "coupon",
  "favor",
  "permission",
  "history",
  "message",
  "list",
  "data",
  "comment"
];
const emptyProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 空白提示类型
   */
  mode: {
    type: String,
    values: emptyMode,
    required: true
  },
  /**
   * @description 内容颜色，以tn开头使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 内容尺寸，可以传递尺寸或者`sm` `lg` `xl`
   */
  size: String,
  /**
   * @description 是否显示提示
   */
  showTips: {
    type: Boolean,
    default: true
  }
});
if (!Math) {
  TnIcon();
}
const TnIcon = () => "../../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "empty",
  props: emptyProps,
  setup(__props) {
    const props = __props;
    const slots = common_vendor.useSlots();
    const customIconContent = common_vendor.computed(() => !!(slots == null ? void 0 : slots.icon));
    const customTipsContent = common_vendor.computed(() => !!(slots == null ? void 0 : slots.tips));
    const { ns, emptyClass, emptyStyle, iconTextStyle } = uni_modules_tuniaouiVue3_components_empty_src_composables_emptyCustom.useEmptyCustomStyle(
      props,
      customIconContent,
      customTipsContent
    );
    const emptyTips = common_vendor.computed(
      () => props.mode ? uni_modules_tuniaouiVue3_components_empty_libs_default.emptyDefaultTips[props.mode] : ""
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          name: `empty-${_ctx.mode}`
        }),
        b: common_vendor.n(common_vendor.unref(ns).e("icon")),
        c: common_vendor.n(common_vendor.unref(ns).is("custom", customIconContent.value)),
        d: common_vendor.s(common_vendor.unref(iconTextStyle)("icon")),
        e: _ctx.showTips || _ctx.$slots.tips
      }, _ctx.showTips || _ctx.$slots.tips ? {
        f: common_vendor.t(emptyTips.value),
        g: common_vendor.n(common_vendor.unref(ns).e("tips")),
        h: common_vendor.n(common_vendor.unref(ns).is("custom", customTipsContent.value)),
        i: common_vendor.s(common_vendor.unref(iconTextStyle)("tips"))
      } : {}, {
        j: common_vendor.n(common_vendor.unref(emptyClass)),
        k: common_vendor.s(common_vendor.unref(emptyStyle))
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-471a2389"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/empty/src/empty.js.map
