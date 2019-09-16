"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _Mask = require("./Mask");

var _Popup = require("./Popup");

var _variable = _interopRequireDefault(require("./variable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var styles = _reactNative.StyleSheet.create({
  iosActionsheet: {
    backgroundColor: _variable.default.weuiBgColorDefault
  },
  androidActionsheetWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  androidActionsheet: {
    width: 274,
    backgroundColor: _variable.default.weuiBgColorDefault,
    borderRadius: _variable.default.weuiActionSheetAndroidBorderRadius
  },
  actionsheetMenu: {
    backgroundColor: "#fff"
  },
  actionsheetAction: {
    marginTop: 6,
    backgroundColor: "#fff"
  },
  actionsheetCell: {
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: _variable.default.weuiCellBorderColor,
    borderStyle: "solid"
  },
  iosActionsheetCell: {
    paddingTop: 10,
    paddingBottom: 10
  },
  androidActionsheetCell: {
    paddingTop: 13,
    paddingBottom: 13,
    paddingLeft: 24,
    paddingRight: 24
  },
  firstActionsheetCell: {
    borderTopWidth: 0
  },
  iosActionsheetCellText: {
    textAlign: "center",
    fontSize: 18,
    marginTop: (18 * _variable.default.baseLineHeight - 18) / 2,
    marginBottom: (18 * _variable.default.baseLineHeight - 18) / 2
  },
  androidActionsheetCellText: {
    textAlign: "center",
    fontSize: 16,
    marginTop: (16 * 1.4 - 16) / 2,
    marginBottom: (16 * 1.4 - 16) / 2
  },
  defaultActionsheetCellText: {
    color: "#000"
  },
  primaryActionsheetCellText: {
    color: "#0BB20C"
  },
  warnActionsheetCellText: {
    color: "#000"
  }
});

var underlayColor = _variable.default.weuiBgColorActive;

var Index = function Index(_ref) {
  var visible = _ref.visible,
      style = _ref.style,
      maskStyle = _ref.maskStyle,
      onShow = _ref.onShow,
      onClose = _ref.onClose,
      _ref$menus = _ref.menus,
      menus = _ref$menus === void 0 ? [] : _ref$menus,
      _ref$actions = _ref.actions,
      actions = _ref$actions === void 0 ? [] : _ref$actions,
      _ref$autoDectect = _ref.autoDectect,
      autoDectect = _ref$autoDectect === void 0 ? true : _ref$autoDectect,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "ios" : _ref$type;
  var _type = type;
  if (autoDectect) _type = _reactNative.Platform.OS;

  var _renderMenuItems = function _renderMenuItems() {
    return menus.map(function (_ref2, idx) {
      var btnType = _ref2.type,
          label = _ref2.label,
          btnStyle = _ref2.style,
          textStyle = _ref2.textStyle,
          others = _objectWithoutProperties(_ref2, ["type", "label", "style", "textStyle"]);

      return _react.default.createElement(_reactNative.TouchableHighlight, _extends({
        key: idx,
        underlayColor: underlayColor,
        style: [styles.actionsheetCell, styles["".concat(_type, "ActionsheetCell")], idx === 0 ? styles.firstActionsheetCell : {}, btnStyle]
      }, others), _react.default.createElement(_reactNative.Text, {
        style: [styles.defaultActionsheetCellText, styles["".concat(_type, "ActionsheetCellText")], styles["".concat(btnType, "ActionsheetCellText")], textStyle]
      }, label));
    });
  };

  var _renderActions = function _renderActions() {
    return actions.map(function (_ref3, idx) {
      var btnType = _ref3.type,
          label = _ref3.label,
          btnStyle = _ref3.style,
          textStyle = _ref3.textStyle,
          others = _objectWithoutProperties(_ref3, ["type", "label", "style", "textStyle"]);

      return _react.default.createElement(_reactNative.TouchableHighlight, _extends({
        key: idx,
        underlayColor: underlayColor,
        style: [styles.actionsheetCell, styles["".concat(_type, "ActionsheetCell")], idx === 0 ? styles.firstActionsheetCell : {}, btnStyle]
      }, others), _react.default.createElement(_reactNative.Text, {
        style: [styles.actionsheetCellText, styles["".concat(_type, "ActionsheetCellText")], styles["".concat(btnType, "ActionsheetCellText")], textStyle]
      }, label));
    });
  };

  return _type === "ios" ? _react.default.createElement(_Popup.Popup, {
    visible: visible,
    style: [styles.iosActionsheet, style],
    maskStyle: maskStyle,
    onShow: onShow,
    onClose: onClose
  }, menus.length ? _react.default.createElement(_reactNative.View, {
    style: [styles.actionsheetMenu]
  }, _renderMenuItems()) : false, actions.length ? _react.default.createElement(_reactNative.View, {
    style: [styles.actionsheetAction]
  }, _renderActions()) : false) : _react.default.createElement(_reactNative.Modal, {
    visible: visible,
    transparent: true,
    animationType: "fade",
    onShow: onShow,
    onRequestClose: onClose
  }, _react.default.createElement(_Mask.Mask, {
    style: [styles.androidActionsheetWrapper, maskStyle],
    onPress: onClose
  }, _react.default.createElement(_reactNative.View, {
    style: [styles.androidActionsheet, style]
  }, menus.length ? _react.default.createElement(_reactNative.View, {
    style: [styles.actionsheetMenu]
  }, _renderMenuItems()) : false, actions.length ? _react.default.createElement(_reactNative.View, {
    style: [styles.actionsheetAction]
  }, _renderActions()) : false)));
};

Index.propTypes = {
  autoDectect: _propTypes.default.bool,
  type: _propTypes.default.oneOf(["ios", "android"]),
  menus: _propTypes.default.arrayOf(_propTypes.default.object),
  actions: _propTypes.default.arrayOf(_propTypes.default.object),
  visible: _propTypes.default.bool,
  onShow: _propTypes.default.func,
  onClose: _propTypes.default.func,
  style: _reactNative.ViewPropTypes.style,
  maskStyle: _reactNative.ViewPropTypes.style
};
var _default = Index;
exports.default = _default;