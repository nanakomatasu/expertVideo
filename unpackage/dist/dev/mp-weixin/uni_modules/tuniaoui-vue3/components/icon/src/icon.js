"use strict";const e=require("../../../../../common/vendor.js"),_=require("../../../utils/vue/props/runtime.js"),p=require("../../../utils/vue/icon.js");require("../../../libs/lodash/_baseToString.js");const a=require("../../../constants/img-mode.js"),l=require("../../../constants/types.js"),d=require("../../base/composables/use-component-common-props/index.js"),g=require("./composables/icon-custom.js"),f=_.buildProps({name:{type:p.iconPropType,required:!0},type:{type:String,values:l.componentTypes,default:""},color:String,size:{type:[String,Number]},bold:Boolean,transparent:Boolean,transparentBg:String,imgMode:{type:String,values:a.componentImgModes,default:"aspectFill"},offsetTop:{type:[String,Number]},customStyle:d.useComponentCustomStyleProp,customClass:String}),y={click:()=>!0},C=e.defineComponent({__name:"icon",props:f,emits:y,setup(t,{emit:s}){const u=t,i=s,{isImg:n,iconClass:r,iconStyle:c}=g.useIcon(u),m=()=>{i("click")};return(o,b)=>e.e({a:e.unref(n)},e.unref(n)?{b:o.name,c:o.imgMode}:{d:e.n(`tn-icon-${o.name}`)},{e:e.n(e.unref(r)),f:e.s(e.unref(c)),g:e.o(m)})}}),S=e._export_sfc(C,[["__scopeId","data-v-bcc701d5"]]);wx.createComponent(S);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/icon/src/icon.js.map
