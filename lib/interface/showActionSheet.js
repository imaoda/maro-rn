"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showActionSheet = showActionSheet;

var _react = _interopRequireDefault(require("react"));

var _ActionSheet = _interopRequireDefault(require("./ActionSheet"));

var _reactNativeRootSiblings = _interopRequireDefault(require("react-native-root-siblings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showActionSheet(obj) {
  var _this = this;

  var _ref = obj || {},
      _ref$itemList = _ref.itemList,
      itemList = _ref$itemList === void 0 ? [] : _ref$itemList,
      _ref$itemColor = _ref.itemColor,
      itemColor = _ref$itemColor === void 0 ? "#000000" : _ref$itemColor,
      success = _ref.success,
      fail = _ref.fail,
      complete = _ref.complete,
      _ref$autoDectect = _ref.autoDectect,
      autoDectect = _ref$autoDectect === void 0 ? true : _ref$autoDectect,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "ios" : _ref$type;

  return new Promise(function (resolve, reject) {
    var sibling = new _reactNativeRootSiblings.default(_react.default.createElement(_ActionSheet.default, {
      autoDectect: autoDectect,
      type: type,
      visible: false,
      onClose: onFail,
      menus: itemList.map(function (item, index) {
        return {
          type: "default",
          label: item,
          textStyle: {
            color: itemColor
          },
          onPress: onSuccess.bind(_this, index)
        };
      }),
      actions: [{
        type: "default",
        label: "取消",
        textStyle: {
          color: itemColor
        },
        onPress: onFail.bind(_this)
      }]
    })); // hack 的做法。不推荐

    setTimeout(function () {
      sibling.update(_react.default.createElement(_ActionSheet.default, {
        autoDectect: autoDectect,
        type: type,
        visible: true,
        onClose: onFail,
        menus: itemList.map(function (item, index) {
          return {
            type: "default",
            label: item,
            textStyle: {
              color: itemColor
            },
            onPress: onSuccess.bind(_this, index)
          };
        }),
        actions: [{
          type: "default",
          label: "取消",
          textStyle: {
            color: itemColor
          },
          onPress: onFail.bind(_this)
        }]
      }));
    }, 100);

    function onSuccess(tapIndex) {
      sibling && sibling.destroy();
      sibling = undefined;
      var res = {
        tapIndex: tapIndex,
        errMsg: "showActionSheet:ok"
      };
      success && success(res);
      complete && complete(res);
      resolve(res);
    }

    function onFail() {
      var res = {
        errMsg: "showActionSheet:fail cancel"
      };
      sibling && sibling.destroy();
      sibling = undefined;
      fail && fail(res);
      complete && complete(res);
      reject(res);
    }
  });
}