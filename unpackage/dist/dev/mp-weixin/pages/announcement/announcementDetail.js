"use strict";const e=require("../../common/vendor.js"),u=require("../../request/api.js"),_=require("../../store/user.js");Array||e.resolveComponent("uv-icon")();const m=()=>"../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";Math||m();const v={__name:"announcementDetail",setup(i){const n=e.ref({}),c=_.useUserStore();e.onLoad(o=>{a.value=o.id,r(o.id)});const a=e.ref("");e.ref(`
		<p>露从今夜白，月是故乡明</p>
		<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	`);const r=o=>{u.noticeDetail({uid:c.uid,token:c.token,id:o}).then(t=>{n.value=t.data})},s=()=>{e.index.navigateBack()};return(o,t)=>({a:e.o(s),b:e.p({name:"arrow-left",color:"#fff"}),c:n.value.img,d:n.value.content})}},d=e._export_sfc(v,[["__scopeId","data-v-d76ec6e5"]]);wx.createPage(d);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/announcement/announcementDetail.js.map
