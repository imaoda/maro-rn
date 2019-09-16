"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setAMapKeys = setAMapKeys;
exports.getLocByPoi = exports.getPoiByLoc = exports.searchKeyword = exports.searchAround = void 0;

var _request = require("./request");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var amapArgs = {
  key: "1f53305612a2aaa31e840469820eb8e8",
  platform: "JS",
  logversion: "2.0",
  sdkversion: "1.4.4"
};
var amapKeyWeb = "93b74e19d0f0142216489a894d3ae7d7";
var keySettled = false;

function checkKeys() {
  if (!keySettled) {
    console.warn("您未配置高德地图的key和webapi的key，使用默认key可能会导致限流，请调用 setAMapKeys(webkey,apikey) 进行初始化");
  }
}

function setAMapKeys(web, api) {
  amapArgs.key = api;
  amapKeyWeb = web;
  keySettled = true;
}
/**
|--------------------------------------------------
| 以下的高德 api 也会在微信小程序中使用
|--------------------------------------------------
*/

/**
 *  搜索经纬度周边，提供经纬度和搜索半径，关键词可选
 *  offset 指的每页个数，page 为第几页，很像 msyql 的 limit
 */


var searchAround = function searchAround(_ref) {
  var latitude = _ref.latitude,
      longitude = _ref.longitude,
      radius = _ref.radius,
      _ref$keywords = _ref.keywords,
      keywords = _ref$keywords === void 0 ? "" : _ref$keywords;
  return (0, _request.request)({
    url: "https://restapi.amap.com/v3/place/around",
    data: _objectSpread({
      location: amapJoin({
        latitude: latitude,
        longitude: longitude
      }),
      radius: radius,
      offset: 50,
      page: 1,
      keywords: keywords
    }, amapArgs)
  }).then(handleAmapResponse);
};
/**
 *  关键词 sugguestion
 */


exports.searchAround = searchAround;

var searchKeyword = function searchKeyword(_ref2) {
  var city = _ref2.city,
      county = _ref2.county,
      keywords = _ref2.keywords;
  return (0, _request.request)({
    url: "https://restapi.amap.com/v3/place/text",
    data: _objectSpread({
      city: county || city || "全国",
      offset: 20,
      page: 1,
      keywords: keywords
    }, amapArgs)
  }).then(handleAmapResponse);
}; // 从gps解析地址


exports.searchKeyword = searchKeyword;

var getPoiByLoc = function getPoiByLoc(parmas) {
  return (0, _request.request)({
    url: "https://restapi.amap.com/v3/geocode/regeo",
    data: _objectSpread({
      location: amapJoin(parmas)
    }, amapArgs)
  }).then(handleAmapResponse);
}; // 地址解析gps


exports.getPoiByLoc = getPoiByLoc;

var getLocByPoi = function getLocByPoi(keywords) {
  return searchKeyword({
    keywords: keywords
  }).then(function (data) {
    var pois = data && data["pois"] || [];
    if (pois && pois.length > 0) return amapSplit(pois[0].location);
    throw new Error("无法解析区县经纬度");
  });
};

exports.getLocByPoi = getLocByPoi;

var handleAmapResponse = function handleAmapResponse(data) {
  checkKeys(); // if (data.status != 1) {
  //   throw new Error("地图服务异常");
  // }

  return data;
};

var roundCoord = function roundCoord(coord) {
  return coord.toFixed(6).replace(/\0+$/, "");
};

var amapJoin = function amapJoin(_ref3) {
  var latitude = _ref3.latitude,
      longitude = _ref3.longitude;
  return "".concat(roundCoord(longitude), ",").concat(roundCoord(latitude));
};

var amapSplit = function amapSplit(location) {
  var _location$split = location.split(","),
      _location$split2 = _slicedToArray(_location$split, 2),
      longitude = _location$split2[0],
      latitude = _location$split2[1];

  return {
    latitude: parseFloat(latitude) || 0,
    longitude: parseFloat(longitude) || 0
  };
};