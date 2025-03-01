"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_line_progress2 = common_vendor.resolveComponent("uv-line-progress");
  const _easycom_uv_grid_item2 = common_vendor.resolveComponent("uv-grid-item");
  const _easycom_uv_grid2 = common_vendor.resolveComponent("uv-grid");
  (_easycom_uv_icon2 + _easycom_uv_line_progress2 + _easycom_uv_grid_item2 + _easycom_uv_grid2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_line_progress = () => "../../uni_modules/uv-line-progress/components/uv-line-progress/uv-line-progress.js";
const _easycom_uv_grid_item = () => "../../uni_modules/uv-grid/components/uv-grid-item/uv-grid-item.js";
const _easycom_uv_grid = () => "../../uni_modules/uv-grid/components/uv-grid/uv-grid.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_line_progress + _easycom_uv_grid_item + _easycom_uv_grid)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    common_vendor.index.navigateTo({
      url: ""
    });
    const funcList = common_vendor.ref([
      {
        id: 1,
        icon: "/static/mine/renwu.png",
        title: "达人任务",
        url: "/pages/task/taskDetail"
      },
      {
        id: 2,
        icon: "/static/mine/tuijian.png",
        title: "我的推荐",
        url: ""
      },
      {
        id: 3,
        icon: "/static/mine/shipinhao.png",
        title: "视频号",
        url: ""
      }
    ]);
    const baseList = common_vendor.ref([
      {
        id: 1,
        title: "公告",
        icon: "/static/mine/gonggao.png",
        url: "/pages/mineFunc/announcement"
      },
      {
        id: 2,
        title: "邀请好友",
        icon: "/static/mine/yaoqinghaoyou.png",
        url: "/pages/mineFunc/inviteFriends"
      },
      {
        id: 3,
        title: "我的团队",
        icon: "/static/mine/wodetuandui.png",
        url: "/pages/mineFunc/myTeam"
      },
      {
        id: 4,
        icon: "/static/mine/chuchuangdizhi.png",
        title: "橱窗地址",
        url: "/pages/mineFunc/windowAddress"
      },
      {
        id: 5,
        icon: "/static/mine/shipinhaoID.png",
        title: "视频号ID",
        url: "/pages/mineFunc/videoId"
      },
      {
        id: 6,
        icon: "/static/mine/jianyi.png",
        title: "建议与反馈",
        url: "/pages/mineFunc/feedback"
      },
      {
        id: 7,
        icon: "/static/mine/wenti.png",
        title: "常见问题",
        url: "/pages/mineFunc/questions"
      },
      {
        id: 8,
        icon: "/static/mine/lianxiwomen.png",
        title: "联系我们",
        url: "/pages/mineFunc/contactUs"
      },
      {
        id: 9,
        icon: "/static/mine/guanyuwomen.png",
        title: "关于我们",
        url: "/pages/mineFunc/aboutUs"
      },
      {
        id: 9,
        icon: "/static/mine/tuichudenglu.png",
        title: "退出登录",
        url: ""
      }
    ]);
    const expertTitle = common_vendor.ref([
      {
        id: 1,
        title: "达人权益"
      },
      {
        id: 2,
        title: "成为达人"
      }
    ]);
    const navFunc = (url) => {
      if (url == "") {
        common_vendor.index.navigateTo({
          url: "/pages/account/login"
        });
        return;
      }
      common_vendor.index.navigateTo({
        url
      });
    };
    const navEdit = () => {
      common_vendor.index.navigateTo({
        url: "/pages/edit/editUserInfo"
      });
    };
    const navMineFunc = (item) => {
      common_vendor.index.navigateTo({
        url: item.url
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "man",
          color: "#3E7BFF",
          size: "35rpx"
        }),
        b: common_vendor.p({
          name: "edit-pen-fill"
        }),
        c: common_vendor.o(navEdit),
        d: common_assets._imports_0$2,
        e: common_vendor.f(expertTitle.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: item.id,
            c: common_vendor.n(item.id == 2 ? "right-title" : "")
          };
        }),
        f: common_vendor.p({
          percentage: 30,
          activeColor: "#BD954F",
          inactiveColor: "#F2F3F8"
        }),
        g: common_vendor.f(funcList.value, (item, k0, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: item.id,
            d: common_vendor.o(($event) => navMineFunc(item), item.id)
          };
        }),
        h: common_vendor.f(baseList.value, (item, index, i0) => {
          return {
            a: item.icon,
            b: common_vendor.t(item.title),
            c: index,
            d: common_vendor.o(($event) => navFunc(item.url), index),
            e: "05011946-4-" + i0 + ",05011946-3"
          };
        }),
        i: common_vendor.p({
          col: 4,
          border: false
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/tabbar/mine.js.map
