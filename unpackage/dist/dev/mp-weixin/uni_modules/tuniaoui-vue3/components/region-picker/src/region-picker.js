"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_constants_event = require("../../../constants/event.js");
const uni_modules_tuniaouiVue3_utils_vue_props_runtime = require("../../../utils/vue/props/runtime.js");
const uni_modules_tuniaouiVue3_libs_lodash_isBoolean = require("../../../libs/lodash/is-boolean.js");
require("../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_components_base_commonProps_picker_index = require("../../base/common-props/picker/index.js");
const uni_modules_tuniaouiVue3_components_regionPicker_src_composables_useRegionPicker = require("./composables/use-region-picker.js");
const regionPickerProps = uni_modules_tuniaouiVue3_utils_vue_props_runtime.buildProps({
  ...uni_modules_tuniaouiVue3_components_base_commonProps_picker_index.pickerBaseProps,
  /**
   * @description 地区选择器绑定的值，可以传递省市区的code和name，["11", "1101", "110101"] || ["广东省", "广州市", "天河区"]
   */
  modelValue: {
    type: uni_modules_tuniaouiVue3_utils_vue_props_runtime.definePropType(Array),
    default: []
  },
  /**
   * @description 显示/隐藏地区选择器
   */
  open: Boolean
});
const regionPickerEmits = {
  [uni_modules_tuniaouiVue3_constants_event.UPDATE_MODEL_EVENT]: (value) => common_vendor.isArray(value),
  "update:open": (value) => uni_modules_tuniaouiVue3_libs_lodash_isBoolean.isBoolean(value),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [uni_modules_tuniaouiVue3_constants_event.CHANGE_EVENT]: (value, item) => true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  confirm: (value, item) => true,
  cancel: () => true,
  close: () => true
};
if (!Math) {
  TnPicker();
}
const TnPicker = () => "../../picker/src/picker.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "region-picker",
  props: regionPickerProps,
  emits: regionPickerEmits,
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const {
      pickerSelectData,
      showPicker,
      currentSelectValue,
      handlePickerCloseEvent,
      handlePickerChangeEvent,
      handlePickerConfirmEvent,
      handlePickerCancelEvent
    } = uni_modules_tuniaouiVue3_components_regionPicker_src_composables_useRegionPicker.useRegionPicker(props, emits);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(handlePickerCloseEvent)),
        b: common_vendor.o(common_vendor.unref(handlePickerChangeEvent)),
        c: common_vendor.o(common_vendor.unref(handlePickerConfirmEvent)),
        d: common_vendor.o(common_vendor.unref(handlePickerCancelEvent)),
        e: common_vendor.o(($event) => common_vendor.isRef(showPicker) ? showPicker.value = $event : null),
        f: common_vendor.p({
          ["model-value"]: common_vendor.unref(currentSelectValue),
          data: common_vendor.unref(pickerSelectData),
          ["label-key"]: "name",
          ["value-key"]: "code",
          ["show-cancel"]: _ctx.showCancel,
          ["show-confirm"]: _ctx.showConfirm,
          mask: _ctx.mask,
          ["cancel-text"]: _ctx.cancelText,
          ["cancel-color"]: _ctx.cancelColor,
          ["confirm-text"]: _ctx.confirmText,
          ["confirm-color"]: _ctx.confirmColor,
          ["z-index"]: _ctx.zIndex,
          open: common_vendor.unref(showPicker)
        })
      };
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/region-picker/src/region-picker.js.map
