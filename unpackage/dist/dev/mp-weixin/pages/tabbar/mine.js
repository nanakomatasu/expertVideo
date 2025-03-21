"use strict";const e=require("../../common/vendor.js"),D=require("../../common/assets.js"),N=require("../../store/user.js"),m=require("../../request/api.js");if(!Array){const g=e.resolveComponent("uv-icon"),l=e.resolveComponent("uv-line-progress"),c=e.resolveComponent("tn-switch-tab"),o=e.resolveComponent("uv-grid-item"),i=e.resolveComponent("uv-grid"),a=e.resolveComponent("tn-icon"),s=e.resolveComponent("tn-popup");(g+l+c+o+i+a+s)()}const U=()=>"../../uni_modules/uv-icon/components/uv-icon/uv-icon.js",A=()=>"../../uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.js",P=()=>"../../uni_modules/tuniaoui-vue3/components/switch-tab/src/switch-tab.js",S=()=>"../../uni_modules/uv-grid/components/uv-grid-item/uv-grid-item.js",M=()=>"../../uni_modules/uv-grid/components/uv-grid/uv-grid.js",$=()=>"../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js",z=()=>"../../uni_modules/tuniaoui-vue3/components/popup/src/popup.js";Math||(U+A+P+S+M+$+z)();const B={__name:"mine",setup(g){const l=e.ref(0),c=e.ref(""),o=e.ref([]),i=e.ref(""),a=e.ref("");e.onShow(()=>{if(s.token==""){e.index.showModal({title:"请先去登陆吧",success(n){n.confirm&&e.index.navigateTo({url:"/pages/account/login"})}});return}o.value=[],j(),k(),q()});const s=N.useUserStore(),p=e.ref(!1),r=e.ref(0),f=e.ref(""),v=e.ref(""),b=()=>{p.value=!1},y=e.ref([{id:1,icon:"/static/mine/renwu.png",title:"创客任务",url:"/pages/task/taskDetail"},{id:2,icon:"/static/mine/tuijian.png",title:"我的推荐",url:"/pages/notYetOpen/notYetOpen"},{id:3,icon:"/static/mine/shipinhao.png",title:"视频号",url:""}]),w=e.ref([{id:2,title:"我的海报",icon:"/static/mine/yaoqinghaoyou.png",url:"/pages/mineFunc/inviteFriends"},{id:3,title:"我的团队",icon:"/static/mine/wodetuandui.png",url:"/pages/mineFunc/myTeam"},{id:4,icon:"/static/mine/chuchuangdizhi.png",title:"橱窗地址",url:"/pages/mineFunc/windowAddress"},{id:7,icon:"/static/mine/wenti.png",title:"常见问题",url:"/pages/mineFunc/questions"},{id:9,icon:"/static/mine/guanyuwomen.png",title:"关于我们",url:"/pages/mineFunc/aboutUs"},{id:10,icon:"/static/mine/tuichudenglu.png",title:"退出登录",url:""},{id:11,icon:"/static/mine/tuidan.png",title:"退单列表",url:"/pages/mineFunc/tuidan"},{id:12,icon:"/static/mine/notify.png",title:"消息通知",url:"/pages/mineFunc/notify"}]);e.ref([{id:1,title:"创客权益"},{id:2,title:"成为创客"}]);const d=e.ref("");e.ref(0);const x=()=>{e.index.switchTab({url:"/pages/tabbar/task"})},k=()=>{m.taskListApi({uid:s.uid,token:s.token}).then(n=>{})},t=e.ref({}),T=n=>{if(n.id==2){if(t.value.ievel==0){e.index.showToast({icon:"none",title:"您还不是创客，请先完成任务"});return}if(t.value.window_goods_name==""||t.value.video_account==""||t.value.phone==""||t.value.window_goods_name==null||t.value.video_account==null||t.value.phone==null){e.index.showToast({icon:"none",title:"请先完善橱窗信息"});return}else e.index.navigateTo({url:n.url});return}if(n.url==""){s.setUid(""),s.setToken(""),e.index.navigateTo({url:"/pages/account/login"});return}e.index.navigateTo({url:n.url})},F=()=>{e.index.navigateTo({url:"/pages/edit/editUserInfo"})},C=n=>{if(n.id==3){L();return}else if(n.id==1){x();return}e.index.navigateTo({url:n.url})},j=()=>{m.userInfoApi({uid:s.uid,token:s.token}).then(n=>{t.value=n.data,n.data.ievel==0?(i.value="创客",a.value="推客",d.value="还差"+(10-n.data.task_progress)+"个任务成为创客",v.value=Number(n.data.system_config[0].value)+1,c.value="创客",o.value.push("创客"),o.value.push("推客"),r.value=n.data.task_progress*10):n.data.ievel==1?(i.value="创客",a.value="推客",d.value="再推"+(n.data.system_config[0].value-n.data.node_recommender_count+1)+"人成为推客",v.value=Number(n.data.system_config[0].value)+1,c.value="创客",o.value.push("创客"),o.value.push("推客"),r.value=n.data.task_progress*10):n.data.ievel==2?(i.value="推客",a.value="团长",v.value=Number(n.data.system_config[1].value)+1,d.value="再推"+(n.data.system_config[1].value-n.data.node_recommender_count+1)+"人成为团长",c.value="推客",o.value.push("推客"),o.value.push("团长"),r.value=n.data.bfb):n.data.ievel==3?(i.value="团长",a.value="服务商",v.value=Number(n.data.system_config[2].value)+1,d.value="再推"+(n.data.system_config[2].value-n.data.node_recommender_count+1)+"人成为服务商",c.value="团长",o.value.push("团长"),o.value.push("服务商"),r.value=n.data.bfb):n.data.ievel==4&&(v.value=Number(n.data.system_config[3].value)+1,d.value="您已成为服务商",i.value="团长",a.value="服务商",c.value="服务商",o.value.push("团长"),o.value.push("服务商"),r.value=n.data.bfb)})},L=()=>{if(t.value.video_account==null||t.value.video_account==""){e.index.showToast({icon:"none",title:"请先设置视频号ID"});return}e.wx$1.openChannelsUserProfile({finderUserName:t.value.video_account,success(n){e.index.__f__("log","at pages/tabbar/mine.vue:389",n)},fail(n){e.index.__f__("log","at pages/tabbar/mine.vue:392",n)}})},q=()=>{m.dataCenter({content:"DJMS"}).then(n=>{f.value=n.data.content,e.index.__f__("log","at pages/tabbar/mine.vue:402",n)})};return(n,E)=>e.e({a:t.value.headimg,b:e.t(t.value.nickname),c:t.value.ievel==0},t.value.ievel==0?{}:{},{d:t.value.ievel==1},t.value.ievel==1?{}:{},{e:t.value.ievel==2},t.value.ievel==2?{}:{},{f:t.value.ievel==3},t.value.ievel==3?{}:{},{g:t.value.ievel==4},t.value.ievel==4?{}:{},{h:e.p({name:"edit-pen-fill"}),i:e.o(F),j:e.t(l.value==0?d.value:""),k:l.value==0},l.value==0?{l:e.p({percentage:r.value,activeColor:"#BD954F",inactiveColor:"#F2F3F8"}),m:e.t(c.value)}:{},{n:l.value==1},l.value==1?e.e({o:a.value=="推客"},a.value=="推客"?{p:e.t(i.value),q:e.t(v.value),r:e.t(a.value)}:{},{s:a.value=="团长"},a.value=="团长"?{t:e.t(i.value),v:e.t(v.value),w:e.t(a.value)}:{},{x:a.value=="服务商"},a.value=="服务商"?{y:e.t(i.value),z:e.t(v.value),A:e.t(a.value)}:{}):{},{B:e.o(u=>l.value=u),C:e.p({tabs:o.value,"inactive-bg-color":"#D9B97E","inactive-text-color":"#fff",modelValue:l.value}),D:e.f(y.value,(u,_,h)=>({a:u.icon,b:e.t(u.title),c:u.id,d:e.o(I=>C(u),u.id)})),E:e.f(w.value,(u,_,h)=>({a:u.icon,b:e.t(u.title),c:_,d:e.o(I=>T(u),_),e:"05011946-4-"+h+",05011946-3"})),F:e.p({col:4,border:!1}),G:e.p({name:"close-circle",size:"60rpx",color:"#fff"}),H:e.o(b),I:f.value,J:D._imports_0$2,K:e.o(u=>p.value=u),L:e.p({"open-direction":"center",top:"54px",width:"80%","bg-color":"transparent",modelValue:p.value})})}};wx.createPage(B);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabbar/mine.js.map
