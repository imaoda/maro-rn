"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pxTransform = pxTransform;
exports.store = void 0;

var _reactNative = require("react-native");

var deviceWidthDp = _reactNative.Dimensions.get("window").width;

var store = {};
exports.store = store;

function pxTransform(size) {
  var uiWidthPx = 750;
  return size / uiWidthPx * deviceWidthDp;
}