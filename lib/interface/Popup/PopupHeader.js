"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _variable = _interopRequireDefault(require("../variable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _reactNative.StyleSheet.create({
  popupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth,
    borderColor: '#E5E5E5',
    backgroundColor: '#fbf9fe'
  },
  popupActionLeft: {
    flex: 1,
    color: '#586C94',
    textAlign: 'left',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    fontSize: _variable.default.baseFontSize
  },
  popupActionRight: {
    flex: 1,
    color: '#586C94',
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 15,
    fontSize: _variable.default.baseFontSize
  }
});

var PopupHeader = function PopupHeader(_ref) {
  var style = _ref.style,
      _ref$left = _ref.left,
      left = _ref$left === void 0 ? {} : _ref$left,
      _ref$right = _ref.right,
      right = _ref$right === void 0 ? {} : _ref$right;
  return _react.default.createElement(_reactNative.View, {
    style: [styles.popupHeader, style]
  }, _react.default.createElement(_reactNative.Text, {
    style: [styles.popupActionLeft, left.style],
    onPress: left.onPress
  }, left.label), _react.default.createElement(_reactNative.Text, {
    style: [styles.popupActionRight, right.style],
    onPress: right.onPress
  }, right.label));
};

PopupHeader.propTypes = {
  style: _reactNative.ViewPropTypes.style,
  left: _propTypes.default.object,
  right: _propTypes.default.object
};
var _default = PopupHeader;
exports.default = _default;