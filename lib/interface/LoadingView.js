"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _loading = _interopRequireDefault(require("./loading.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LoadingView =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LoadingView, _React$Component);

  function LoadingView(props) {
    var _this;

    _classCallCheck(this, LoadingView);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LoadingView).call(this, props));
    _this.state = {
      rotateValue: new _reactNative.Animated.Value(0) // 初始值

    };
    return _this;
  }

  _createClass(LoadingView, [{
    key: "startAnimation",
    value: function startAnimation() {
      var _this2 = this;

      this.state.rotateValue.setValue(0);

      _reactNative.Animated.timing(this.state.rotateValue, {
        toValue: 1,
        duration: 2000,
        easing: _reactNative.Easing.linear
      }).start(function () {
        return _this2.startAnimation();
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.startAnimation();
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactNative.Animated.Image, {
        source: _loading.default,
        style: [styles.toastLoading, {
          transform: [{
            rotateZ: this.state.rotateValue.interpolate({
              inputRange: [0, 1],
              outputRange: ['0deg', '360deg']
            })
          }]
        }]
      });
    }
  }]);

  return LoadingView;
}(_react.default.Component);

var styles = _reactNative.StyleSheet.create({
  toastLoading: {
    width: 35,
    height: 35,
    margin: 10
  }
});

var _default = LoadingView;
exports.default = _default;