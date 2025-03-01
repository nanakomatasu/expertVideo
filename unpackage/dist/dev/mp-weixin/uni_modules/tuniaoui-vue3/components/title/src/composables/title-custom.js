"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const uni_modules_tuniaouiVue3_hooks_useNamespace_index = require("../../../../hooks/use-namespace/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentColor_index = require("../../../../hooks/use-component-color/index.js");
const uni_modules_tuniaouiVue3_hooks_useComponentSize_index = require("../../../../hooks/use-component-size/index.js");
require("../../../../libs/lodash/_baseToString.js");
const uni_modules_tuniaouiVue3_utils_dom_unit = require("../../../../utils/dom/unit.js");
require("../../../../hooks/use-z-index/index.js");
const useTitleCustomStyle = (props) => {
  const ns = uni_modules_tuniaouiVue3_hooks_useNamespace_index.useNamespace("title");
  const [titleTextColorClass, titleTextColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "color"),
    "text"
  );
  const [titleBgColorClass, titleBgColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "color"),
    "bg"
  );
  const [assistTextColorClass, assistTextColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "assistColor"),
    "text"
  );
  const [assistBgColorClass, assistBgColorStyle] = uni_modules_tuniaouiVue3_hooks_useComponentColor_index.useComponentColor(
    common_vendor.toRef(props, "assistColor"),
    "bg"
  );
  const { sizeType } = uni_modules_tuniaouiVue3_hooks_useComponentSize_index.useComponentSize(props.size);
  const titleClass = common_vendor.computed(() => {
    const cls = [ns.e("title"), ns.em("title", props.mode)];
    if (props.mode === "transparent") {
      cls.push("tn-text-transparent");
      if (titleBgColorClass.value)
        cls.push(titleBgColorClass.value);
    } else {
      if (titleTextColorClass.value)
        cls.push(titleTextColorClass.value);
    }
    if (props.size && sizeType.value === "inner")
      cls.push(ns.em("title", props.size));
    return cls.join(" ");
  });
  const titleStyle = common_vendor.computed(() => {
    const style = {};
    if (props.mode === "transparent") {
      if (!titleBgColorClass.value)
        style.backgroundColor = titleBgColorStyle.value || "var(--tn-color-primary)";
    } else {
      if (!titleTextColorClass.value)
        style.color = titleTextColorStyle.value || "var(--tn-text-color-primary)";
    }
    if (props.size && sizeType.value === "custom")
      style.fontSize = uni_modules_tuniaouiVue3_utils_dom_unit.formatDomSizeValue(props.size);
    if (props.align)
      style.textAlign = props.align;
    return style;
  });
  const assistColorClass = common_vendor.computed(() => {
    const cls = [];
    if (props.mode === "subTitle") {
      if (assistTextColorClass.value)
        cls.push(assistTextColorClass.value);
    } else {
      if (assistBgColorClass.value)
        cls.push(assistBgColorClass.value);
    }
    return cls.join(" ");
  });
  const assistColorStyle = common_vendor.computed(() => {
    const style = {};
    if (props.mode === "subTitle") {
      if (!assistTextColorClass.value)
        style.color = assistTextColorStyle.value || "var(--tn-color-primary-light-7)";
    } else {
      if (!assistBgColorClass.value)
        style.backgroundColor = assistBgColorStyle.value || "var(--tn-color-primary)";
    }
    return style;
  });
  return {
    ns,
    titleClass,
    titleStyle,
    assistColorClass,
    assistColorStyle
  };
};
exports.useTitleCustomStyle = useTitleCustomStyle;
//# sourceMappingURL=../../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/title/src/composables/title-custom.js.map
