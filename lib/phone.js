"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makePhoneCall = makePhoneCall;
exports.default = void 0;

var _reactNative = require("react-native");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function makePhoneCall() {
  return _makePhoneCall.apply(this, arguments);
}

function _makePhoneCall() {
  _makePhoneCall = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var opts,
        phoneNumber,
        success,
        fail,
        complete,
        res,
        telUrl,
        isSupport,
        _args = arguments;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            opts = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            phoneNumber = opts.phoneNumber, success = opts.success, fail = opts.fail, complete = opts.complete;
            res = {
              errMsg: 'makePhoneCall:ok'
            };
            telUrl = "tel:".concat(phoneNumber);
            _context.next = 6;
            return _reactNative.Linking.canOpenURL(telUrl);

          case 6:
            isSupport = _context.sent;

            if (!isSupport) {
              _context.next = 15;
              break;
            }

            _context.next = 10;
            return _reactNative.Linking.openURL(telUrl);

          case 10:
            success && success(res);
            complete && complete(res);
            return _context.abrupt("return", Promise.resolve(res));

          case 15:
            res.errMsg = 'makePhoneCall:fail. Do not support the makePhoneCall Api';
            fail && fail(res);
            complete && complete(res);
            return _context.abrupt("return", Promise.reject(res));

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _makePhoneCall.apply(this, arguments);
}

var _default = {
  makePhoneCall: makePhoneCall
};
exports.default = _default;