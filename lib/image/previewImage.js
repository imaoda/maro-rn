"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.previewImage = previewImage;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeRootSiblings = _interopRequireDefault(require("react-native-root-siblings"));

var _reactNativeImageZoomViewer = _interopRequireDefault(require("react-native-image-zoom-viewer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function previewImage(obj) {
  var _ref = obj || {},
      current = _ref.current,
      urls = _ref.urls,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  var index = urls.indexOf(current);
  var sibling;

  try {
    sibling = new _reactNativeRootSiblings.default(_react.default.createElement(_reactNative.Modal, {
      visible: true,
      transparent: true
    }, _react.default.createElement(_reactNativeImageZoomViewer.default, {
      imageUrls: urls.map(function (item) {
        return {
          url: item,
          props: ""
        };
      }),
      index: index === -1 ? 0 : index,
      onClick: onSuccess,
      onSwipeDown: onSuccess,
      enableSwipeDown: true,
      loadingRender: function loadingRender() {
        return _react.default.createElement(_reactNative.Text, null, "loading...");
      }
    })));
  } catch (e) {
    onFail(e);
  }

  function onSwipeDown() {
    sibling && sibling.destroy();
    sibling = undefined;
  }

  function onSuccess() {
    var rsp = {
      errMsg: "previewImage:ok"
    };
    onSwipeDown();
    success && success(rsp);
    complete && complete(rsp);
  }

  function onFail(e) {
    onSwipeDown();
    fail && fail(_objectSpread({
      errMsg: "err"
    }, e));
    complete && complete.apply(void 0, ["err"].concat(_toConsumableArray(e)));
  }
}