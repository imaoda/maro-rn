"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.default = void 0;

var _reactNative = require("react-native");

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function create(styles) {
  var platformStyles = {};
  Object.keys(styles).forEach(function (name) {
    var copyStyles = _objectSpread({}, styles[name]);

    var ios = copyStyles.ios;
    var android = copyStyles.android;
    /* eslint-disable no-param-reassign */

    delete styles[name].ios;
    delete styles[name].android;
    /* eslint-enable no-param-reassign */

    var _styles$name = _objectSpread({}, styles[name]),
        style = _extends({}, _styles$name);

    if (ios && _reactNative.Platform.OS === "ios") {
      style = _objectSpread({}, style, {}, ios);
    }

    if (android && _reactNative.Platform.OS === "android") {
      style = _objectSpread({}, style, {}, android);
    }

    platformStyles[name] = style;
  });
  return _reactNative.StyleSheet.create(platformStyles);
}

var _default = {
  create: create
};
exports.default = _default;