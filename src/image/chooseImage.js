import * as ImagePicker from 'expo-image-picker'
import { Permissions } from 'react-native-unimodules'

async function askAsyncPermissions (PermissionsType) {
  const {status} = await Permissions.askAsync(PermissionsType)
  return status
}

async function chooseMedia (opts, mediaTypes) {
  if (!opts || typeof opts !== 'object') {
    opts = {}
  }
  const {sizeType = [], sourceType = [], success, fail, complete} = opts
  const options = {
    mediaTypes,
    quality: sizeType[0] === 'compressed' ? 0.7 : 1
  }
  const isCamera = sourceType[0] === 'camera'
  const status = isCamera ? await askAsyncPermissions(Permissions.CAMERA) : await askAsyncPermissions(Permissions.CAMERA_ROLL)
  if (status !== 'granted') {
    const res = {errMsg: `Permissions denied!`}
    return Promise.reject(res)
  }

  let p
  return new Promise((resolve, reject) => {
    p = isCamera ? ImagePicker.launchCameraAsync(options) : ImagePicker.launchImageLibraryAsync(options)
    p.then((resp) => {
      const {uri} = resp
      resp.path = uri
      const res = {
        tempFilePaths: [uri],
        tempFiles: [resp]
      }
      success && success(res)
      complete && complete(res)
      resolve(res)
    }).catch((err) => {
      const res = {
        errMsg: `chooseImage fail`,
        err
      }
      fail && fail(res)
      complete && complete(res)
      reject(res)
    })
  })
}

function chooseImage (opts) {
  return chooseMedia(opts, 'Images')
}

export {chooseImage}
