"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_title_src_composables_titleCustom = require("./composables/title-custom.js");
const titleModes = [
  "normal",
  "vLine",
  "dot",
  "hLine",
  "subTitle",
  "transparent"
];
const titleAlign = ["left", "center", "right"];
const titleProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 标题内容
   */
  title: String,
  /**
   * @description 子标题内容，设置 mode 为 subTitle 时生效
   */
  subTitle: String,
  /**
   * @description 标题模式
   */
  mode: {
    type: String,
    values: titleModes,
    default: "normal"
  },
  /**
   * @description 标题大小，内置`sm`、`lg`、`xl`，同时也可以传递指定的尺寸
   */
  size: String,
  /**
   * @description 标题对齐方式
   */
  align: {
    type: String,
    values: titleAlign,
    default: "left"
  },
  /**
   * @description 标题颜色，以tn开头则使用图鸟内置的颜色
   */
  color: String,
  /**
   * @description 辅助元素颜色，以tn开头则使用图鸟内置的颜色
   */
  assistColor: String
});
const titleEmits = {
  /**
   * @description 点击事件
   */
  click: () => true
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "title",
  props: titleProps,
  emits: titleEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { ns, titleClass, titleStyle, assistColorClass, assistColorStyle } = uni_modules_tuniaouiVue3_components_title_src_composables_titleCustom.useTitleCustomStyle(props);
    const titleClickEvent = () => {
      emits("click");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(_ctx.title),
        b: _ctx.mode !== "normal" && _ctx.mode !== "transparent"
      }, _ctx.mode !== "normal" && _ctx.mode !== "transparent" ? common_vendor.e({
        c: _ctx.mode === "subTitle" && _ctx.subTitle
      }, _ctx.mode === "subTitle" && _ctx.subTitle ? {
        d: common_vendor.t(_ctx.subTitle)
      } : {}, {
        e: common_vendor.n(common_vendor.unref(ns).e(_ctx.mode)),
        f: common_vendor.n(common_vendor.unref(assistColorClass)),
        g: common_vendor.s(common_vendor.unref(assistColorStyle))
      }) : {}, {
        h: common_vendor.n(common_vendor.unref(titleClass)),
        i: common_vendor.s(common_vendor.unref(titleStyle)),
        j: common_vendor.n(common_vendor.unref(ns).b()),
        k: common_vendor.o(titleClickEvent)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c94efcf4"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/title/src/title.js.map
