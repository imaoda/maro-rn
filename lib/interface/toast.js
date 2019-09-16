"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showToast = showToast;
exports.showLoading = showLoading;
exports.hideToast = hideToast;
exports.hideLoading = hideLoading;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeRootSiblings = _interopRequireDefault(require("react-native-root-siblings"));

var _success = _interopRequireDefault(require("./success.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function getParameterError(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? "" : _ref$name,
      para = _ref.para,
      correct = _ref.correct,
      wrong = _ref.wrong;
  var parameter = para ? "parameter.".concat(para) : "parameter";
  var errorType = wrong === null ? "Null" : _typeof(wrong);
  return "".concat(name, ":fail parameter error: ").concat(parameter, " should be ").concat(correct, " instead of ").concat(errorType);
}

function shouleBeObject(target) {
  if (target && _typeof(target) === "object") return {
    res: true
  };
  return {
    res: false,
    msg: getParameterError({
      correct: "Object",
      wrong: target
    })
  };
}

function isFunction(obj) {
  return typeof obj === "function";
}

function successHandler(success, complete) {
  return function (res) {
    isFunction(success) && success(res);
    isFunction(complete) && complete(res);
    return Promise.resolve(res);
  };
}

function errorHandler(fail, complete) {
  return function (res) {
    isFunction(fail) && fail(res);
    isFunction(complete) && complete(res);
    return Promise.reject(res);
  };
}

var styles = _reactNative.StyleSheet.create({
  toastView: {
    width: 76,
    height: 76,
    justifyContent: "center",
    alignItems: "center"
  },
  toastIcon: {
    width: 55,
    height: 55
  },
  toastContent: {
    color: "#FFFFFF",
    textAlign: "center"
  },
  textToastContent: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    lineHeight: 20,
    color: "#FFFFFF",
    textAlign: "center"
  },
  container: {
    zIndex: 10000,
    position: "absolute",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  itemView: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.5)"
  },
  grayBlock: {
    width: 120,
    height: 120,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20,20,20,0.8)",
    borderRadius: 8,
    flexDirection: "column"
  },
  textGrayBlock: {
    width: 180,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20,20,20,0.8)",
    borderRadius: 8,
    flexDirection: "column"
  }
});

var WXLoading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(WXLoading, _React$Component);

  function WXLoading() {
    var _this;

    _classCallCheck(this, WXLoading);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WXLoading).call(this));
    _this.state = {
      animating: true
    };
    return _this;
  }

  _createClass(WXLoading, [{
    key: "render",
    value: function render() {
      var _this$props$title = this.props.title,
          title = _this$props$title === void 0 ? "loading" : _this$props$title;
      return _react.default.createElement(_reactNative.View, {
        style: styles.container
      }, _react.default.createElement(_reactNative.View, {
        style: styles.grayBlock
      }, _react.default.createElement(_reactNative.ActivityIndicator, {
        animating: this.state.animating,
        style: {
          flex: 1
        },
        size: "small",
        color: "#eee"
      }), _react.default.createElement(_reactNative.Text, {
        style: {
          paddingTop: 10,
          position: "absolute",
          bottom: "15%",
          color: "white",
          fontSize: 15
        }
      }, title)));
    }
  }]);

  return WXLoading;
}(_react.default.Component);

function showToast(options) {
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var _res = {
      errMsg: "showLoading".concat(isObject.msg)
    };
    console.error(_res.errMsg);
    return Promise.reject(_res);
  }

  var res = {
    errMsg: "showToast:ok"
  };

  var _ref2 = options || {},
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "" : _ref2$title,
      _ref2$icon = _ref2.icon,
      icon = _ref2$icon === void 0 ? "success" : _ref2$icon,
      image = _ref2.image,
      _ref2$duration = _ref2.duration,
      duration = _ref2$duration === void 0 ? 1500 : _ref2$duration,
      mask = _ref2.mask,
      success = _ref2.success,
      fail = _ref2.fail,
      complete = _ref2.complete; // eslint-disable-line


  var ToastView;

  if (image) {
    ToastView = _react.default.createElement(_reactNative.View, {
      style: styles.container
    }, _react.default.createElement(_reactNative.View, {
      style: styles.grayBlock
    }, _react.default.createElement(_reactNative.View, {
      style: styles.toastView
    }, _react.default.createElement(_reactNative.Image, {
      source: image,
      style: styles.toastIcon
    }), _react.default.createElement(_reactNative.Text, {
      style: styles.toastContent
    }, title || ""))));
  } else if (icon === "loading") {
    ToastView = _react.default.createElement(WXLoading, {
      title: title
    });
  } else if (icon === "none") {
    ToastView = _react.default.createElement(_reactNative.View, {
      style: styles.container
    }, _react.default.createElement(_reactNative.View, {
      style: styles.textGrayBlock
    }, _react.default.createElement(_reactNative.Text, {
      style: styles.textToastContent
    }, title || "")));
  } else {
    ToastView = _react.default.createElement(_reactNative.View, {
      style: styles.container
    }, _react.default.createElement(_reactNative.View, {
      style: styles.grayBlock
    }, _react.default.createElement(_reactNative.View, {
      style: styles.toastView
    }, _react.default.createElement(_reactNative.Image, {
      source: _success.default,
      style: styles.toastIcon
    }), _react.default.createElement(_reactNative.Text, {
      style: styles.toastContent
    }, title || ""))));
  }

  try {
    // setTimeout fires incorrectly when using chrome debug #4470
    // https://github.com/facebook/react-native/issues/4470
    global.wxToastRootSiblings && global.wxToastRootSiblings.destroy();
    global.wxToastRootSiblings = new _reactNativeRootSiblings.default(ToastView);
    setTimeout(function () {
      global.wxToastRootSiblings && global.wxToastRootSiblings.update(ToastView);
      success && success();
    }, 100);

    if (duration > 0) {
      setTimeout(function () {
        console.log("destroy");
        global.wxToastRootSiblings && global.wxToastRootSiblings.destroy();
      }, duration);
    }

    return successHandler(success, complete)(res);
  } catch (e) {
    res.errMsg = "showToast:fail invalid ".concat(e);
    return errorHandler(fail, complete)(res);
  }
}

function showLoading(options) {
  var isObject = shouleBeObject(options);

  if (!isObject.res) {
    var res = {
      errMsg: "showLoading".concat(isObject.msg)
    };
    console.error(res.errMsg);
    return Promise.reject(res);
  }

  var _ref3 = options || {},
      _ref3$title = _ref3.title,
      title = _ref3$title === void 0 ? "" : _ref3$title,
      mask = _ref3.mask,
      success = _ref3.success,
      fail = _ref3.fail,
      complete = _ref3.complete;

  return showToast({
    title: title,
    icon: "loading",
    duration: 0,
    mask: mask,
    success: success,
    fail: fail,
    complete: complete
  });
}

function hideToast() {
  global.wxToastRootSiblings && global.wxToastRootSiblings.destroy();
  global.wxToastRootSiblings = undefined;
}

function hideLoading() {
  hideToast();
}