"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uploadFile = uploadFile;

var createFormData = function createFormData(file, body, name) {
  var data = new FormData();
  data.append(name, {
    name: file.fileName,
    type: file.type,
    uri: Platform.OS === "android" ? file.uri : file.uri.replace("file://", "")
  });
  Object.keys(body).forEach(function (key) {
    data.append(key, body[key]);
  });
  return data;
};

function uploadFile() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var url = opts.url,
      filePath = opts.filePath,
      name = opts.name,
      header = opts.header,
      formData = opts.formData,
      success = opts.success,
      fail = opts.fail,
      complete = opts.complete;
  return fetch(url, {
    method: "POST",
    body: createFormData(filePath, formData, name),
    headers: header
  }).then(function (res) {
    if (res.ok) {
      console.log(res);
      success && success(res);
      complete && complete(res);
      return res.json();
    } else {
      console.log(res);
      var errMsg = "uploadFile fail: ".concat(res.status, " ").concat(res.statusText);
      fail && fail({
        errMsg: errMsg
      });
      complete && complete({
        errMsg: errMsg
      });
      return Promise.reject(new Error(errMsg));
    }
  }).catch(function (e) {
    var errMsg = "uploadFile fail: ".concat(e);
    fail && fail({
      errMsg: errMsg
    });
    complete && complete({
      errMsg: errMsg
    });
    return Promise.reject(new Error(errMsg));
  });
}