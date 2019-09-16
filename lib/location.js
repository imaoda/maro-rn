"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLocation = getLocation;
exports.default = void 0;

var Location = _interopRequireWildcard(require("expo-location"));

var _reactNativeUnimodules = require("react-native-unimodules");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function askAsyncPermissions(_x) {
  return _askAsyncPermissions.apply(this, arguments);
}

function _askAsyncPermissions() {
  _askAsyncPermissions = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(PermissionsType) {
    var _ref, status;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _reactNativeUnimodules.Permissions.askAsync(PermissionsType);

          case 2:
            _ref = _context.sent;
            status = _ref.status;
            return _context.abrupt("return", status);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _askAsyncPermissions.apply(this, arguments);
}

function getLocation() {
  return _getLocation.apply(this, arguments);
}

function _getLocation() {
  _getLocation = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2() {
    var opts,
        status,
        res,
        _opts,
        _opts$altitude,
        altitude,
        success,
        fail,
        complete,
        _args2 = arguments;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            opts = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : {};
            _context2.next = 3;
            return askAsyncPermissions(_reactNativeUnimodules.Permissions.LOCATION);

          case 3:
            status = _context2.sent;

            if (!(status !== "granted")) {
              _context2.next = 7;
              break;
            }

            res = {
              errMsg: "Permissions denied!"
            };
            return _context2.abrupt("return", Promise.reject(res));

          case 7:
            if (!opts || _typeof(opts) !== "object") {
              opts = {};
            }

            _opts = opts, _opts$altitude = _opts.altitude, altitude = _opts$altitude === void 0 ? false : _opts$altitude, success = _opts.success, fail = _opts.fail, complete = _opts.complete;
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              Location.getCurrentPositionAsync({
                enableHighAccuracy: Boolean(altitude)
              }).then(function (resp) {
                var coords = resp.coords,
                    timestamp = resp.timestamp;
                var latitude = coords.latitude,
                    longitude = coords.longitude,
                    altitude = coords.altitude,
                    accuracy = coords.accuracy,
                    altitudeAccuracy = coords.altitudeAccuracy,
                    heading = coords.heading,
                    speed = coords.speed;
                var res = {
                  latitude: latitude,
                  longitude: longitude,
                  speed: speed,
                  altitude: altitude,
                  accuracy: accuracy,
                  verticalAccuracy: altitudeAccuracy,
                  horizontalAccuracy: null,
                  heading: heading,
                  timestamp: timestamp
                };
                success && success(res);
                complete && complete(res);
                resolve(res);
              }).catch(function (err) {
                var res = {
                  errMsg: "getLocation fail",
                  err: err
                };
                fail && fail(res);
                complete && complete(res);
                reject(res);
              });
            }));

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getLocation.apply(this, arguments);
}

var _default = {
  getLocation: getLocation
};
exports.default = _default;