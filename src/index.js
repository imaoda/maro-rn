import { chooseImage, previewImage } from "./image";
import {
  showActionSheet,
  showModal,
  showLoading,
  showToast,
  hideToast,
  hideLoading
} from "./interface";
import { eventCenter } from "./eventCenter";
import {
  setAMapKeys,
  searchAround,
  searchKeyword,
  getLocByPoi,
  getPoiByLoc
} from "./geo";
import { getLocation } from "./location";
import { store, pxTransform } from "./other";
import { makePhoneCall } from "./phone";
import { request } from "./request";
import {
  setStorage,
  getStorage,
  getStorageInfo,
  removeStorage,
  clearStorage
} from "./storage";
import { uploadFile } from "./uploadFile";

export default {
  chooseImage, previewImage, showActionSheet,
  showModal,
  showLoading,
  showToast,
  hideToast,
  hideLoading,eventCenter,
  setAMapKeys,
  searchAround,
  searchKeyword,
  getLocByPoi,
  getPoiByLoc,
  store, pxTransform, makePhoneCall, request, setStorage,
  getStorage,
  getStorageInfo,
  removeStorage,
  clearStorage,
  uploadFile,
  getLocation
}
