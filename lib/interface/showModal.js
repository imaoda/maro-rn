"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showModal = showModal;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeRootSiblings = _interopRequireDefault(require("react-native-root-siblings"));

var _Dialog = _interopRequireDefault(require("./Dialog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showModal(obj) {
  var _ref = obj || {},
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$content = _ref.content,
      content = _ref$content === void 0 ? "" : _ref$content,
      _ref$showCancel = _ref.showCancel,
      showCancel = _ref$showCancel === void 0 ? true : _ref$showCancel,
      _ref$cancelText = _ref.cancelText,
      cancelText = _ref$cancelText === void 0 ? "取消" : _ref$cancelText,
      _ref$cancelColor = _ref.cancelColor,
      cancelColor = _ref$cancelColor === void 0 ? "#000000" : _ref$cancelColor,
      _ref$confirmText = _ref.confirmText,
      confirmText = _ref$confirmText === void 0 ? "确定" : _ref$confirmText,
      _ref$confirmColor = _ref.confirmColor,
      confirmColor = _ref$confirmColor === void 0 ? "#3CC51F" : _ref$confirmColor,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete;

  var sibling;
  return new Promise(function (resolve, reject) {
    try {
      sibling = new _reactNativeRootSiblings.default(_react.default.createElement(_Dialog.default, {
        visible: true,
        autoDectect: true,
        title: title,
        onClose: onCancel,
        buttons: [showCancel && {
          type: cancelColor,
          label: cancelText,
          onPress: onCancel
        }, {
          type: confirmColor,
          label: confirmText,
          onPress: onConfirm
        }].filter(Boolean)
      }, _react.default.createElement(_reactNative.Text, null, content)));
    } catch (e) {
      var res = {
        errMsg: "showModal fail:".concat(e.message)
      };
      fail && fail(res);
      complete && complete(res);
      reject(res);
    }

    function onConfirm() {
      console.log("onConfirm");
      var res = {
        errMsg: "showModal:ok",
        confirm: true,
        cancel: false
      };
      sibling && sibling.destroy();
      sibling = undefined;
      success && success(res);
      complete && complete(res);
      resolve(res);
    }

    function onCancel() {
      var res = {
        errMsg: "showModal:fail cancel",
        confirm: false,
        cancel: true
      };
      sibling && sibling.destroy();
      sibling = undefined;
      fail && fail(res);
      complete && complete(res);
      resolve(res);
    }
  });
}