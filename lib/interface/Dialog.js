"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _Mask = require("./Mask");

var _StyleSheet = require("./StyleSheet");

var _variable = _interopRequireDefault(require("./variable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var _Dimensions$get = _reactNative.Dimensions.get("window"),
    width = _Dimensions$get.width;

var styles = (0, _StyleSheet.create)({
  dialogWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  dialog: {
    width: width - 60,
    backgroundColor: _variable.default.weuiDialogBackgroundColor,
    borderRadius: 3,
    overflow: "hidden"
  },
  dialogHeader: {
    paddingTop: 1.3 * _variable.default.baseFontSize,
    paddingBottom: 0.5 * _variable.default.baseFontSize,
    paddingLeft: _variable.default.weuiDialogGapWidth,
    paddingRight: _variable.default.weuiDialogGapWidth
  },
  dialogTitle: {
    fontWeight: "400"
  },
  iosDialogTitle: {
    fontSize: 18,
    textAlign: "center"
  },
  androidDialogTitle: {
    fontSize: 21,
    textAlign: "left"
  },
  dialogBody: {
    paddingLeft: _variable.default.weuiDialogGapWidth,
    paddingRight: _variable.default.weuiDialogGapWidth
  },
  iosDialogBody: {
    paddingBottom: 0.8 * 15 + 20
  },
  androidDialogBody: {
    paddingTop: 0.25 * 17,
    paddingBottom: 17 * 2 + 20
  },
  dialogBodyText: {
    color: "rgba(0,0,0,0.7)",
    lineHeight: 15 * 1.3,
    android: {
      lineHeight: Math.round(15 * 1.3)
    }
  },
  iosDialogBodyText: {
    fontSize: 15,
    textAlign: "center"
  },
  androidDialogBodyText: {
    fontSize: 17,
    textAlign: "left"
  },
  dialogFooter: {
    flexDirection: "row"
  },
  iosDialogFooter: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
    borderTopWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: _variable.default.weuiDialogLineColor,
    borderStyle: "solid"
  },
  androidDialogFooter: {
    height: 42,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingLeft: _variable.default.weuiDialogGapWidth,
    paddingRight: _variable.default.weuiDialogGapWidth,
    paddingBottom: 16 * 0.7
  },
  dialogFooterOpr: {
    alignItems: "center",
    justifyContent: "center"
  },
  iosDialogFooterOpr: {
    height: 48,
    flex: 1
  },
  androidDialogFooterOpr: {
    height: 42,
    paddingLeft: 16 * 0.8,
    paddingRight: 16 * 0.8
  },
  dialogFooterOprWithNegativeMarginRight: {
    marginRight: 0 - 16 * 0.8
  },
  dialogFooterOprWithBorder: {
    borderLeftWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: _variable.default.weuiDialogLineColor,
    borderStyle: "solid"
  },
  iosDialogFooterOprText: {
    fontSize: 18
  },
  androidDialogFooterOprText: {
    fontSize: 16
  },
  defaultDialogFooterOprText: {
    color: "#353535"
  },
  primaryDialogFooterOprText: {
    color: "#0BB20C"
  },
  warnDialogFooterOprText: {
    color: "#353535"
  }
});
var underlayColor = _variable.default.weuiDialogLinkActiveBc;

var Index = function Index(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      _ref$buttons = _ref.buttons,
      buttons = _ref$buttons === void 0 ? [] : _ref$buttons,
      title = _ref.title,
      style = _ref.style,
      maskStyle = _ref.maskStyle,
      headerStyle = _ref.headerStyle,
      titleStyle = _ref.titleStyle,
      bodyStyle = _ref.bodyStyle,
      bodyTextStyle = _ref.bodyTextStyle,
      footerStyle = _ref.footerStyle,
      children = _ref.children,
      onShow = _ref.onShow,
      onClose = _ref.onClose,
      _ref$autoDectect = _ref.autoDectect,
      autoDectect = _ref$autoDectect === void 0 ? true : _ref$autoDectect,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? "ios" : _ref$type;
  var _type = type;
  if (autoDectect) _type = _reactNative.Platform.OS;

  var _renderButtons = function _renderButtons() {
    return buttons.map(function (_ref2, idx) {
      var btnType = _ref2.type,
          label = _ref2.label,
          others = _objectWithoutProperties(_ref2, ["type", "label"]);

      return _react.default.createElement(_reactNative.TouchableHighlight, _extends({
        key: idx,
        style: [styles.dialogFooterOpr, styles["".concat(_type, "DialogFooterOpr")], _type === "ios" && idx > 0 ? styles.dialogFooterOprWithBorder : {}, _type === "android" && idx === buttons.length - 1 ? styles.dialogFooterOprWithNegativeMarginRight : {}],
        underlayColor: underlayColor
      }, others), _react.default.createElement(_reactNative.Text, {
        style: [styles["".concat(_type, "DialogFooterOprText")], {
          color: btnType
        }]
      }, label));
    });
  };

  var childrenWithProps = _react.default.Children.map(children, function (child) {
    if (child.type.displayName === "Text") {
      return _react.default.cloneElement(child, {
        style: [styles.dialogBodyText, styles["".concat(type, "DialogBodyText")], bodyTextStyle, child.props.style]
      });
    }

    return child;
  });

  return _react.default.createElement(_reactNative.Modal, {
    visible: visible,
    transparent: !false,
    onShow: onShow,
    onRequestClose: onClose
  }, _react.default.createElement(_Mask.Mask, {
    style: [styles.dialogWrapper, maskStyle],
    onPress: onClose
  }, _react.default.createElement(_reactNative.View, {
    style: [styles.dialog, style]
  }, _react.default.createElement(_reactNative.View, {
    style: [styles.dialogHeader, headerStyle]
  }, _react.default.createElement(_reactNative.Text, {
    style: [styles.dialogTitle, styles["".concat(type, "DialogTitle")], titleStyle]
  }, title)), _react.default.createElement(_reactNative.View, {
    style: [styles.dialogBody, styles["".concat(type, "DialogBody")], bodyStyle]
  }, childrenWithProps), _react.default.createElement(_reactNative.View, {
    style: [styles.dialogFooter, styles["".concat(type, "DialogFooter")], footerStyle]
  }, _renderButtons()))));
};

Index.propTypes = {
  autoDectect: _propTypes.default.bool,
  type: _propTypes.default.oneOf(["ios", "android"]),
  title: _propTypes.default.string,
  buttons: _propTypes.default.arrayOf(_propTypes.default.object),
  visible: _propTypes.default.bool,
  onShow: _propTypes.default.func,
  onClose: _propTypes.default.func,
  style: _reactNative.ViewPropTypes.style,
  maskStyle: _reactNative.ViewPropTypes.style,
  headerStyle: _reactNative.ViewPropTypes.style,
  titleStyle: _reactNative.Text.propTypes.style,
  bodyStyle: _reactNative.ViewPropTypes.style,
  bodyTextStyle: _reactNative.Text.propTypes.style,
  footerStyle: _reactNative.ViewPropTypes.style,
  children: _propTypes.default.node
};
var _default = Index;
exports.default = _default;