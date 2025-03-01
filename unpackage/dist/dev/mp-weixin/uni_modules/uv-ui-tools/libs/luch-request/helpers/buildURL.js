"use strict";
const uni_modules_uvUiTools_libs_luchRequest_utils = require("../utils.js");
function encode(val) {
  return encodeURIComponent(val).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url, params, paramsSerializer) {
  if (!params) {
    return url;
  }
  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (uni_modules_uvUiTools_libs_luchRequest_utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];
    uni_modules_uvUiTools_libs_luchRequest_utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === "undefined") {
        return;
      }
      if (uni_modules_uvUiTools_libs_luchRequest_utils.isArray(val)) {
        key = key + "[]";
      } else {
        val = [val];
      }
      uni_modules_uvUiTools_libs_luchRequest_utils.forEach(val, function parseValue(v) {
        if (uni_modules_uvUiTools_libs_luchRequest_utils.isDate(v)) {
          v = v.toISOString();
        } else if (uni_modules_uvUiTools_libs_luchRequest_utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + "=" + encode(v));
      });
    });
    serializedParams = parts.join("&");
  }
  if (serializedParams) {
    var hashmarkIndex = url.indexOf("#");
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }
    url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url;
}
exports.buildURL = buildURL;
//# sourceMappingURL=../../../../../../.sourcemap/mp-weixin/uni_modules/uv-ui-tools/libs/luch-request/helpers/buildURL.js.map
