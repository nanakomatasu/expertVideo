"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../hooks/use-namespace/index.js");
require("../../../libs/lodash/_baseToString.js");
require("../../../hooks/use-z-index/index.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isNumber = require("../../../libs/lodash/is-number.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_composables_noticeBarCommonProps = require("./composables/notice-bar-common-props.js");
const uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useNoticeBar = require("./composables/use-notice-bar.js");
const noticeBarScrollDirection = ["horizontal", "vertical"];
const noticeBarProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  /**
   * @description 是否显示通知栏
   */
  show: {
    type: Boolean,
    default: true
  },
  /**
   * @description 通知栏显示的数据
   */
  data: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: () => []
  },
  /**
   * @description 背景颜色，以tn开头则使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 文字颜色，以tn开头则使用图鸟内置的颜色
   */
  textColor: String,
  /**
   * @description 字体大小
   */
  fontSize: String,
  /**
   * @description 通知栏左边显示的图标
   */
  leftIcon: String,
  /**
   * @description 左图标颜色，以tn开头则使用图鸟内置的颜色
   */
  leftIconColor: String,
  /**
   * @description 左图标大小，默认单位rpx
   */
  leftIconSize: String,
  /**
   * @description 通知栏右边显示的图标
   */
  rightIcon: String,
  /**
   * @description 右图标颜色，以tn开头则使用图鸟内置的颜色
   */
  rightIconColor: String,
  /**
   * @description 右图标大小，默认单位rpx
   */
  rightIconSize: String,
  /**
   * @description 通知暂停播放
   */
  pause: Boolean,
  /**
   * @description 自动播放
   */
  autoPlay: {
    type: Boolean,
    default: true
  },
  /**
   * @description 滚动方向
   */
  direction: {
    type: String,
    values: noticeBarScrollDirection,
    default: "horizontal"
  },
  /**
   * @description 是否采用衔接滚动，在 direction 为 horizontal 时有效
   */
  loop: {
    type: Boolean,
    default: true
  },
  /**
   * @description 滚动速度，在 direction 为 horizontal 以及 loop 为 true 时表示 每秒滚动的像素数，在 direction 为 vertical 或者 direction 为 horizontal 且 loop 为 false 时表示 切换的时间间隔单位ms
   */
  speed: Number,
  /**
   * @description 在data为空时是否自动隐藏
   */
  autoHide: {
    type: Boolean,
    default: true
  }
});
const noticeBarEmits = {
  /**
   * @description 点击通知栏
   */
  click: (index) => uni_modules_tuniaouiVue3_libs_lodash_isNumber.isNumber(index),
  /**
   * @description 左图标点击事件
   */
  "left-icon-click": () => true,
  /**
   * @description 右图标点击事件
   */
  "right-icon-click": () => true
};
if (!Math) {
  (TnIcon + TnColumnNoticeBar + TnRowNoticeBar)();
}
const TnIcon = () => "../../icon/src/icon.js";
const TnColumnNoticeBar = () => "./column-notice-bar.js";
const TnRowNoticeBar = () => "./row-notice-bar.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "notice-bar",
  props: noticeBarProps,
  emits: noticeBarEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("notice-bar");
    const { showNoticeBar, leftIconClick, rightIconClick } = uni_modules_tuniaouiVue3_components_noticeBar_src_composables_useNoticeBar.useNoticeBar(
      props,
      emits
    );
    const { commonClass, commonStyle } = uni_modules_tuniaouiVue3_components_noticeBar_src_composables_noticeBarCommonProps.useNoticeBarCommonProps(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(showNoticeBar)
      }, common_vendor.unref(showNoticeBar) ? common_vendor.e({
        b: _ctx.leftIcon
      }, _ctx.leftIcon ? {
        c: common_vendor.p({
          name: _ctx.leftIcon
        }),
        d: common_vendor.n(common_vendor.unref(ns).e("left-icon")),
        e: common_vendor.n(common_vendor.unref(commonClass)("leftIcon")),
        f: common_vendor.s(common_vendor.unref(commonStyle)("leftIcon")),
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(leftIconClick) && common_vendor.unref(leftIconClick)(...args)
        )
      } : {}, {
        h: _ctx.direction === "vertical" || _ctx.direction === "horizontal" && !_ctx.loop
      }, _ctx.direction === "vertical" || _ctx.direction === "horizontal" && !_ctx.loop ? {} : {}, {
        i: common_vendor.n(common_vendor.unref(ns).e("content")),
        j: _ctx.rightIcon
      }, _ctx.rightIcon ? {
        k: common_vendor.p({
          name: _ctx.rightIcon
        }),
        l: common_vendor.n(common_vendor.unref(ns).e("right-icon")),
        m: common_vendor.n(common_vendor.unref(commonClass)("rightIcon")),
        n: common_vendor.s(common_vendor.unref(commonStyle)("rightIcon")),
        o: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(rightIconClick) && common_vendor.unref(rightIconClick)(...args)
        )
      } : {}, {
        p: common_vendor.n(common_vendor.unref(ns).b()),
        q: common_vendor.n(common_vendor.unref(commonClass)("normal")),
        r: common_vendor.s(common_vendor.unref(commonStyle)("normal"))
      }) : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9e6b003f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/notice-bar.js.map
