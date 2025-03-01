"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const uni_modules_uvUiTools_index = require("./uni_modules/uv-ui-tools/index.js");
if (!Math) {
  "./pages/tabbar/index.js";
  "./pages/tabbar/task.js";
  "./pages/tabbar/businessSchool.js";
  "./pages/tabbar/mine.js";
  "./pages/account/login.js";
  "./pages/account/forget.js";
  "./pages/notYetOpen/notYetOpen.js";
  "./pages/course/courseDetail.js";
  "./pages/mineFunc/announcement.js";
  "./pages/mineFunc/inviteFriends.js";
  "./pages/mineFunc/myTeam.js";
  "./pages/mineFunc/windowAddress.js";
  "./pages/mineFunc/videoId.js";
  "./pages/mineFunc/feedback.js";
  "./pages/mineFunc/questions.js";
  "./pages/mineFunc/contactUs.js";
  "./pages/mineFunc/aboutUs.js";
  "./pages/announcement/announcementDetail.js";
  "./pages/materialLibrary/materialLibrary.js";
  "./pages/edit/editUserInfo.js";
  "./pages/task/taskDetail.js";
}
const _sfc_main = {
  onLaunch: function() {
    common_vendor.index.__f__("log", "at App.vue:4", "App Launch");
  },
  onShow: function() {
    common_vendor.index.__f__("log", "at App.vue:7", "App Show");
  },
  onHide: function() {
    common_vendor.index.__f__("log", "at App.vue:10", "App Hide");
  }
};
function createApp() {
  const app = common_vendor.createSSRApp(_sfc_main);
  app.use(store_index.pinia);
  app.use(uni_modules_uvUiTools_index.uvUI);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
//# sourceMappingURL=../.sourcemap/mp-weixin/app.js.map
