"use strict";const e=require("../../../../../common/vendor.js"),c=require("../../../constants/event.js"),u=require("../../../utils/vue/props/runtime.js"),k=require("../../../libs/lodash/is-boolean.js");require("../../../libs/lodash/_baseToString.js");const P=require("../../base/common-props/picker/index.js"),h=require("./composables/use-region-picker.js"),v=u.buildProps({...P.pickerBaseProps,modelValue:{type:u.definePropType(Array),default:[]},open:Boolean}),E={[c.UPDATE_MODEL_EVENT]:o=>e.isArray(o),"update:open":o=>k.isBoolean(o),[c.CHANGE_EVENT]:(o,r)=>!0,confirm:(o,r)=>!0,cancel:()=>!0,close:()=>!0};Math||C();const C=()=>"../../picker/src/picker.js",V=e.defineComponent({__name:"region-picker",props:v,emits:E,setup(o,{emit:r}){const s=o,t=r,{pickerSelectData:a,showPicker:i,currentSelectValue:l,handlePickerCloseEvent:m,handlePickerChangeEvent:_,handlePickerConfirmEvent:p,handlePickerCancelEvent:d}=h.useRegionPicker(s,t);return(n,g)=>({a:e.o(e.unref(m)),b:e.o(e.unref(_)),c:e.o(e.unref(p)),d:e.o(e.unref(d)),e:e.o(f=>e.isRef(i)?i.value=f:null),f:e.p({"model-value":e.unref(l),data:e.unref(a),"label-key":"name","value-key":"code","show-cancel":n.showCancel,"show-confirm":n.showConfirm,mask:n.mask,"cancel-text":n.cancelText,"cancel-color":n.cancelColor,"confirm-text":n.confirmText,"confirm-color":n.confirmColor,"z-index":n.zIndex,open:e.unref(i)})})}});wx.createComponent(V);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/region-picker/src/region-picker.js.map
