const createFormData = (file, body, name) => {
  const data = new FormData();

  data.append(name, {
    name: file.fileName,
    type: file.type,
    uri: Platform.OS === "android" ? file.uri : file.uri.replace("file://", "")
  });

  Object.keys(body).forEach(key => {
    data.append(key, body[key]);
  });

  return data;
};

function uploadFile(opts = {}) {
  const {
    url,
    filePath,
    name,
    header,
    formData,
    success,
    fail,
    complete
  } = opts;
  return fetch(url, {
    method: "POST",
    body: createFormData(filePath, formData, name),
    headers: header
  })
    .then(res => {
      if (res.ok) {
        console.log(res);
        success && success(res);
        complete && complete(res);
        return res.json();
      } else {
        console.log(res);
        const errMsg = `uploadFile fail: ${res.status} ${res.statusText}`;
        fail && fail({ errMsg });
        complete && complete({ errMsg });
        return Promise.reject(new Error(errMsg));
      }
    })
    .catch(e => {
      const errMsg = `uploadFile fail: ${e}`;
      fail && fail({ errMsg });
      complete && complete({ errMsg });
      return Promise.reject(new Error(errMsg));
    });
}

export { uploadFile };
