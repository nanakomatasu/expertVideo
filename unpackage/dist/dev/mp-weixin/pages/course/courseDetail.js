"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "courseDetail",
  setup(__props) {
    common_vendor.onLoad((options) => {
      common_vendor.index.__f__("log", "at pages/course/courseDetail.vue:21", options);
      courseId.value = options.id;
      courseType.value = options.type;
    });
    const courseId = common_vendor.ref("");
    const courseType = common_vendor.ref("");
    const defaultContent = common_vendor.ref(`
		<p>露从今夜白，月是故乡明</p>
		<img src="https://cdn.uviewui.com/uview/swiper/2.jpg" />
	`);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: courseType.value == "1"
      }, courseType.value == "1" ? {} : {}, {
        b: courseType.value == "2"
      }, courseType.value == "2" ? {} : {}, {
        c: defaultContent.value
      });
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/course/courseDetail.js.map
