"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _image = require("./image");

var _interface = require("./interface");

var _eventCenter = require("./eventCenter");

var _geo = require("./geo");

var _location = require("./location");

var _other = require("./other");

var _phone = require("./phone");

var _request = require("./request");

var _storage = require("./storage");

var _uploadFile = require("./uploadFile");

var _default = {
  chooseImage: _image.chooseImage,
  previewImage: _image.previewImage,
  showActionSheet: _interface.showActionSheet,
  showModal: _interface.showModal,
  showLoading: _interface.showLoading,
  showToast: _interface.showToast,
  hideToast: _interface.hideToast,
  hideLoading: _interface.hideLoading,
  eventCenter: _eventCenter.eventCenter,
  setAMapKeys: _geo.setAMapKeys,
  searchAround: _geo.searchAround,
  searchKeyword: _geo.searchKeyword,
  getLocByPoi: _geo.getLocByPoi,
  getPoiByLoc: _geo.getPoiByLoc,
  store: _other.store,
  pxTransform: _other.pxTransform,
  makePhoneCall: _phone.makePhoneCall,
  request: _request.request,
  setStorage: _storage.setStorage,
  getStorage: _storage.getStorage,
  getStorageInfo: _storage.getStorageInfo,
  removeStorage: _storage.removeStorage,
  clearStorage: _storage.clearStorage,
  uploadFile: _uploadFile.uploadFile,
  getLocation: _location.getLocation
};
exports.default = _default;