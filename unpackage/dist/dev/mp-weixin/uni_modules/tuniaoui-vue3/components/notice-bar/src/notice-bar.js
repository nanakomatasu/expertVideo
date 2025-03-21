"use strict";const e=require("../../../../../common/vendor.js"),_=require("../../../hooks/use-namespace/index.js");require("../../../libs/lodash/_baseToString.js");require("../../../hooks/use-z-index/index.js");const f=require("../../../utils/vue/props/runtime.js"),d=require("../../../libs/lodash/is-number.js"),g=require("./composables/notice-bar-common-props.js"),h=require("./composables/use-notice-bar.js"),I=["horizontal","vertical"],B=f.buildProps({show:{type:Boolean,default:!0},data:{type:f.definePropType(Array),default:()=>[]},bgColor:String,textColor:String,fontSize:String,leftIcon:String,leftIconColor:String,leftIconSize:String,rightIcon:String,rightIconColor:String,rightIconSize:String,pause:Boolean,autoPlay:{type:Boolean,default:!0},direction:{type:String,values:I,default:"horizontal"},loop:{type:Boolean,default:!0},speed:Number,autoHide:{type:Boolean,default:!0}}),b={click:r=>d.isNumber(r),"left-icon-click":()=>!0,"right-icon-click":()=>!0};Math||(S+C+N)();const S=()=>"../../icon/src/icon.js",C=()=>"./column-notice-bar.js",N=()=>"./row-notice-bar.js",y=e.defineComponent({__name:"notice-bar",props:B,emits:b,setup(r,{emit:m}){const u=r,p=m,n=_.useNamespace("notice-bar"),{showNoticeBar:s,leftIconClick:a,rightIconClick:l}=h.useNoticeBar(u,p),{commonClass:t,commonStyle:i}=g.useNoticeBarCommonProps(u);return(o,k)=>e.e({a:e.unref(s)},e.unref(s)?e.e({b:o.leftIcon},o.leftIcon?{c:e.p({name:o.leftIcon}),d:e.n(e.unref(n).e("left-icon")),e:e.n(e.unref(t)("leftIcon")),f:e.s(e.unref(i)("leftIcon")),g:e.o((...c)=>e.unref(a)&&e.unref(a)(...c))}:{},{h:o.direction==="vertical"||o.direction==="horizontal"&&!o.loop},o.direction==="vertical"||o.direction==="horizontal"&&!o.loop?{}:{},{i:e.n(e.unref(n).e("content")),j:o.rightIcon},o.rightIcon?{k:e.p({name:o.rightIcon}),l:e.n(e.unref(n).e("right-icon")),m:e.n(e.unref(t)("rightIcon")),n:e.s(e.unref(i)("rightIcon")),o:e.o((...c)=>e.unref(l)&&e.unref(l)(...c))}:{},{p:e.n(e.unref(n).b()),q:e.n(e.unref(t)("normal")),r:e.s(e.unref(i)("normal"))}):{})}}),q=e._export_sfc(y,[["__scopeId","data-v-9e6b003f"]]);wx.createComponent(q);
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/tuniaoui-vue3/components/notice-bar/src/notice-bar.js.map
