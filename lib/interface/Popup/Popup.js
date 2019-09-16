"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _Mask = require("../Mask");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var _Dimensions$get = _reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width,
    height = _Dimensions$get.height;

var styles = _reactNative.StyleSheet.create({
  popup: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: width,
    backgroundColor: '#EFEFF4'
  }
});

var Popup =
/*#__PURE__*/
function (_Component) {
  _inherits(Popup, _Component);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));
    _this.state = {
      visible: false,
      translateY: new _reactNative.Animated.Value(height)
    };
    _this.handleLayout = _this.handleLayout.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Popup, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProp) {
      var _this2 = this;

      if (this.props.visible !== nextProp.visible) {
        if (nextProp.visible) {
          this.setState({
            visible: true
          });
          return;
        }

        _reactNative.Animated.timing(this.state.translateY, {
          toValue: this.height,
          duration: 300,
          easing: _reactNative.Easing.easeInOut
        }).start(function () {
          return _this2.setState({
            visible: false
          });
        });
      }
    }
  }, {
    key: "handleLayout",
    value: function handleLayout() {
      var _this3 = this;

      this.popup.measure(function (x, y, w, h) {
        _this3.height = h;

        _this3.setState({
          translateY: new _reactNative.Animated.Value(h)
        });

        _reactNative.Animated.timing(_this3.state.translateY, {
          toValue: 0,
          duration: 300,
          easing: _reactNative.Easing.easeInOut
        }).start();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          style = _this$props.style,
          maskStyle = _this$props.maskStyle,
          onShow = _this$props.onShow,
          onClose = _this$props.onClose,
          children = _this$props.children;
      return _react.default.createElement(_reactNative.Modal, {
        visible: this.state.visible,
        transparent: !false,
        onShow: onShow,
        onRequestClose: onClose
      }, _react.default.createElement(_Mask.Mask, {
        style: maskStyle,
        onPress: onClose
      }, _react.default.createElement(_reactNative.Animated.View, {
        style: [styles.popup, style, {
          transform: [{
            translateY: this.state.translateY
          }]
        }]
      }, _react.default.createElement(_reactNative.View, {
        ref: function ref(_ref) {
          _this4.popup = _ref;
        },
        onLayout: this.handleLayout
      }, children))));
    }
  }]);

  return Popup;
}(_react.Component);

Popup.propTypes = {
  visible: _propTypes.default.bool,
  onShow: _propTypes.default.func,
  onClose: _propTypes.default.func,
  style: _reactNative.ViewPropTypes.style,
  maskStyle: _reactNative.ViewPropTypes.style,
  children: _propTypes.default.node
};
var _default = Popup;
exports.default = _default;