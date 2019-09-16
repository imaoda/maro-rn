"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseImage = chooseImage;

var ImagePicker = _interopRequireWildcard(require("expo-image-picker"));

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

function chooseMedia(_x2, _x3) {
  return _chooseMedia.apply(this, arguments);
}

function _chooseMedia() {
  _chooseMedia = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(opts, mediaTypes) {
    var _opts, _opts$sizeType, sizeType, _opts$sourceType, sourceType, success, fail, complete, options, isCamera, status, res, p;

    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            if (!opts || _typeof(opts) !== 'object') {
              opts = {};
            }

            _opts = opts, _opts$sizeType = _opts.sizeType, sizeType = _opts$sizeType === void 0 ? [] : _opts$sizeType, _opts$sourceType = _opts.sourceType, sourceType = _opts$sourceType === void 0 ? [] : _opts$sourceType, success = _opts.success, fail = _opts.fail, complete = _opts.complete;
            options = {
              mediaTypes: mediaTypes,
              quality: sizeType[0] === 'compressed' ? 0.7 : 1
            };
            isCamera = sourceType[0] === 'camera';

            if (!isCamera) {
              _context2.next = 10;
              break;
            }

            _context2.next = 7;
            return askAsyncPermissions(_reactNativeUnimodules.Permissions.CAMERA);

          case 7:
            _context2.t0 = _context2.sent;
            _context2.next = 13;
            break;

          case 10:
            _context2.next = 12;
            return askAsyncPermissions(_reactNativeUnimodules.Permissions.CAMERA_ROLL);

          case 12:
            _context2.t0 = _context2.sent;

          case 13:
            status = _context2.t0;

            if (!(status !== 'granted')) {
              _context2.next = 17;
              break;
            }

            res = {
              errMsg: "Permissions denied!"
            };
            return _context2.abrupt("return", Promise.reject(res));

          case 17:
            return _context2.abrupt("return", new Promise(function (resolve, reject) {
              p = isCamera ? ImagePicker.launchCameraAsync(options) : ImagePicker.launchImageLibraryAsync(options);
              p.then(function (resp) {
                var uri = resp.uri;
                resp.path = uri;
                var res = {
                  tempFilePaths: [uri],
                  tempFiles: [resp]
                };
                success && success(res);
                complete && complete(res);
                resolve(res);
              }).catch(function (err) {
                var res = {
                  errMsg: "chooseImage fail",
                  err: err
                };
                fail && fail(res);
                complete && complete(res);
                reject(res);
              });
            }));

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _chooseMedia.apply(this, arguments);
}

function chooseImage(opts) {
  return chooseMedia(opts, 'Images');
}