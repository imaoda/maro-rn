"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function serializeParams(params) {
  if (!params) {
    return "";
  }

  return Object.keys(params).map(function (key) {
    return "".concat(encodeURIComponent(key), "=").concat(encodeURIComponent(params[key]));
  }).join("&");
}

function generateRequestUrlWithParams(url, params) {
  params = typeof params === "string" ? params : serializeParams(params);
  url += (~url.indexOf("?") ? "&" : "?") + params;
  url = url.replace("?&", "?");
  return url;
}

function request(options) {
  options = options || {};

  if (typeof options === "string") {
    options = {
      url: options
    };
  }

  var url = options.url;
  var data = options.data || {};
  var params = {};
  var res = {};
  var method = options.method || "GET";
  method = method.toUpperCase();

  if (method === "GET") {
    url = generateRequestUrlWithParams(url, data);
  } else {
    if (_typeof(data) === "object") {
      var contentType = options.header && (options.header["content-type"] || options.header["Content-Type"]);

      if (contentType === "application/json") {
        data = JSON.stringify(data);
      } else if (contentType === "application/x-www-form-urlencoded") {
        data = serializeParams(data);
      }
    }
  }

  if (method !== "GET" && method !== "HEAD") {
    params.body = data;
  }

  params.headers = options.header;
  params.mode = options.mode;
  params.credentials = options.credentials;
  params.cache = options.cache;
  params.method = method;
  return fetch(url, params).then(function (response) {
    res.statusCode = response.status;
    res.header = response.headers;

    if (options.dataType === "json") {
      return response.json();
    }

    if (options.responseType === "arraybuffer") {
      return response.arrayBuffer();
    }

    if (options.responseType === "text") {
      return response.text();
    }

    if (typeof options.dataType === "undefined") {
      return response.json();
    }

    return Promise.resolve(null);
  }).then(function (data) {
    res.data = data;
    return res;
  });
}