"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setStorage = setStorage;
exports.getStorage = getStorage;
exports.getStorageInfo = getStorageInfo;
exports.removeStorage = removeStorage;
exports.clearStorage = clearStorage;
exports.default = void 0;

var _reactNative = require("react-native");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function setStorage() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = opts.key,
      data = opts.data,
      success = opts.success,
      fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: "setStorage:ok"
  };
  return new Promise(function (resolve, reject) {
    _reactNative.AsyncStorage.setItem(key, JSON.stringify(data)).then(function (e) {
      success && success(res);
      complete && complete(res);
      resolve(res);
    }).catch(function (err) {
      res.errMsg = err.message;
      fail && fail(res);
      complete && complete(res);
      reject(err);
    });
  });
}

function getStorage() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = opts.key,
      success = opts.success,
      fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: "getStorage:ok"
  };
  return new Promise(function (resolve, reject) {
    _reactNative.AsyncStorage.getItem(key).then(function (data) {
      res.data = JSON.parse(data);
      success && success(res);
      complete && complete(res);
      resolve(res);
    }).catch(function (err) {
      res.errMsg = err.message;
      fail && fail(res);
      complete && complete(res);
      reject(err);
    });
  });
}

function getStorageInfo() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var success = opts.success,
      fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: "getStorageInfo:ok"
  };
  return new Promise(function (resolve, reject) {
    _reactNative.AsyncStorage.getAllKeys().then(function (data) {
      res.keys = data;
      res.currentSize = null;
      res.limitSize = null;
      success && success(res);
      complete && complete(res);
      resolve(res);
    }).catch(function (err) {
      res.errMsg = err.message;
      fail && fail(res);
      complete && complete(res);
      reject(err);
    });
  });
}

function removeStorage() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var key = opts.key,
      success = opts.success,
      fail = opts.fail,
      complete = opts.complete;
  var res = {
    errMsg: "removeStorage:ok"
  };
  return new Promise(function (resolve, reject) {
    _reactNative.AsyncStorage.removeItem(key).then(function () {
      success && success(res);
      complete && complete(res);
      resolve(res);
    }).catch(function (err) {
      res.errMsg = err.message;
      fail && fail(res);
      complete && complete(res);
      reject(err);
    });
  });
}

function clearStorage() {
  return _clearStorage.apply(this, arguments);
}

function _clearStorage() {
  _clearStorage = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", _reactNative.AsyncStorage.clear());

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _clearStorage.apply(this, arguments);
}

var _default = {
  setStorage: setStorage,
  getStorage: getStorage,
  getStorageInfo: getStorageInfo,
  removeStorage: removeStorage,
  clearStorage: clearStorage
};
exports.default = _default;