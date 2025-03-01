"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  const _easycom_uv_tabs2 = common_vendor.resolveComponent("uv-tabs");
  const _easycom_tn_icon2 = common_vendor.resolveComponent("tn-icon");
  (_easycom_uv_icon2 + _easycom_uv_tabs2 + _easycom_tn_icon2)();
}
const _easycom_uv_icon = () => "../../uni_modules/uv-icon/components/uv-icon/uv-icon.js";
const _easycom_uv_tabs = () => "../../uni_modules/uv-tabs/components/uv-tabs/uv-tabs.js";
const _easycom_tn_icon = () => "../../uni_modules/tuniaoui-vue3/components/icon/src/icon.js";
if (!Math) {
  (_easycom_uv_icon + _easycom_uv_tabs + _easycom_tn_icon)();
}
const _sfc_main = {
  __name: "materialLibrary",
  setup(__props) {
    common_vendor.onLoad(() => {
    });
    const leftTabsId = common_vendor.ref(1);
    const leftTabsList = common_vendor.ref([
      {
        id: 1,
        title: "图片素材"
      },
      {
        id: 2,
        title: "文字素材"
      },
      {
        id: 3,
        title: "音乐素材"
      }
    ]);
    common_vendor.ref(0);
    const tabsData = common_vendor.ref([{
      name: "关注"
    }, {
      name: "推荐"
    }, {
      name: "电影"
    }, {
      name: "科技"
    }, {
      name: "音乐"
    }, {
      name: "美食"
    }, {
      name: "文化"
    }, {
      name: "财经"
    }, {
      name: "手工"
    }]);
    const imageList = common_vendor.ref([
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg",
      "https://wx3.sinaimg.cn/mw690/0040jbadgy1hy561drrv0j60u1141qfb02.jpg"
    ]);
    const textList = common_vendor.ref([
      {
        id: 1,
        content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
      },
      {
        id: 2,
        content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
      },
      {
        id: 3,
        content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
      },
      {
        id: 4,
        content: "曾经以为，爱情是永不落幕的烟火， 可当烟火熄灭，只剩我在黑暗中，独 自守着回忆的残烬。"
      }
    ]);
    const musicList = common_vendor.ref([
      {
        id: 1,
        name: "爱错",
        singer: "王力宏"
      },
      {
        id: 2,
        name: "爱错",
        singer: "王力宏"
      },
      {
        id: 3,
        name: "爱错",
        singer: "王力宏"
      },
      {
        id: 4,
        name: "爱错",
        singer: "王力宏"
      },
      {
        id: 5,
        name: "爱错",
        singer: "王力宏"
      }
    ]);
    const backPage = () => {
      common_vendor.index.navigateBack();
    };
    const click = (item) => {
      common_vendor.index.__f__("log", "at pages/materialLibrary/materialLibrary.vue:157", "item", item);
    };
    const changeLeftTabsId = (id) => {
      leftTabsId.value = id;
    };
    const copy = (data) => {
      common_vendor.index.setClipboardData({
        data,
        success: function() {
          common_vendor.index.showToast({
            icon: "success",
            title: "复制成功"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(backPage),
        b: common_vendor.p({
          name: "arrow-left",
          color: "#fff"
        }),
        c: common_vendor.f(leftTabsList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.id == leftTabsId.value
          }, item.id == leftTabsId.value ? {} : {}, {
            b: common_vendor.t(item.title),
            c: item.id,
            d: common_vendor.n(item.id == leftTabsId.value ? "select-material-content-left-item" : ""),
            e: common_vendor.o(($event) => changeLeftTabsId(item.id), item.id)
          });
        }),
        d: common_vendor.o(click),
        e: common_vendor.p({
          list: tabsData.value,
          activeStyle: "color: #FAA82C",
          lineColor: "#FAA82C"
        }),
        f: leftTabsId.value == 1
      }, leftTabsId.value == 1 ? {
        g: common_vendor.f(imageList.value, (item, k0, i0) => {
          return {
            a: item
          };
        })
      } : {}, {
        h: leftTabsId.value == 2
      }, leftTabsId.value == 2 ? {
        i: common_vendor.f(textList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.content),
            c: common_vendor.o(($event) => copy(item.content)),
            d: "614e150a-2-" + i0
          };
        }),
        j: common_vendor.p({
          name: "copy-fill",
          color: "#FAA82C",
          size: "60rpx"
        })
      } : {}, {
        k: leftTabsId.value == 3
      }, leftTabsId.value == 3 ? {
        l: common_vendor.f(musicList.value, (item, index, i0) => {
          return {
            a: common_vendor.t(index + 1),
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.singer),
            d: common_vendor.o(($event) => copy(item.name)),
            e: "614e150a-3-" + i0
          };
        }),
        m: common_vendor.p({
          name: "copy-fill",
          color: "#FAA82C",
          size: "60rpx"
        })
      } : {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/materialLibrary/materialLibrary.js.map
