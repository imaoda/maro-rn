"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Mask = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _reactNative.StyleSheet.create({
  mask: {
    flex: 1,
    zIndex: 1000
  }
});

var Mask = function Mask(_ref) {
  var _ref$transparent = _ref.transparent,
      transparent = _ref$transparent === void 0 ? false : _ref$transparent,
      style = _ref.style,
      onPress = _ref.onPress,
      children = _ref.children;
  return _react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    onPress: onPress
  }, _react.default.createElement(_reactNative.View, {
    style: [styles.mask, {
      backgroundColor: transparent ? "transparent" : "rgba(0,0,0,.6)"
    }, style]
  }, _react.default.createElement(_reactNative.TouchableWithoutFeedback, null, children)));
};

exports.Mask = Mask;
Mask.propTypes = {
  transparent: _propTypes.default.bool,
  style: _reactNative.ViewPropTypes.style,
  children: _propTypes.default.node,
  onPress: _propTypes.default.func
};