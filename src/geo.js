import { request as mmreq } from "./request";
const amapArgs = {
  key: "1f53305612a2aaa31e840469820eb8e8",
  platform: "JS",
  logversion: "2.0",
  sdkversion: "1.4.4"
};

let amapKeyWeb = "93b74e19d0f0142216489a894d3ae7d7";

let keySettled = false;
function checkKeys() {
  if (!keySettled) {
    console.warn(
      "您未配置高德地图的key和webapi的key，使用默认key可能会导致限流，请调用 setAMapKeys(webkey,apikey) 进行初始化"
    );
  }
}

export function setAMapKeys(web, api) {
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
export const searchAround = ({ latitude, longitude, radius, keywords = "" }) =>
  mmreq({
    url: `https://restapi.amap.com/v3/place/around`,
    data: {
      location: amapJoin({ latitude, longitude }),
      radius,
      offset: 50,
      page: 1,
      keywords,
      ...amapArgs
    }
  }).then(handleAmapResponse);

/**
 *  关键词 sugguestion
 */
export const searchKeyword = ({ city, county, keywords }) =>
  mmreq({
    url: `https://restapi.amap.com/v3/place/text`,
    data: {
      city: county || city || "全国",
      offset: 20,
      page: 1,
      keywords,
      ...amapArgs
    }
  }).then(handleAmapResponse);

// 从gps解析地址
export const getPoiByLoc = parmas =>
  mmreq({
    url: "https://restapi.amap.com/v3/geocode/regeo",
    data: { location: amapJoin(parmas), ...amapArgs }
  }).then(handleAmapResponse);

// 地址解析gps
export const getLocByPoi = keywords =>
  searchKeyword({ keywords }).then(data => {
    const pois = (data && data["pois"]) || [];
    if (pois && pois.length > 0) return amapSplit(pois[0].location);
    throw new Error("无法解析区县经纬度");
  });

const handleAmapResponse = data => {
  checkKeys();
  // if (data.status != 1) {
  //   throw new Error("地图服务异常");
  // }
  return data;
};
const roundCoord = coord => coord.toFixed(6).replace(/\0+$/, "");
const amapJoin = ({ latitude, longitude }) =>
  `${roundCoord(longitude)},${roundCoord(latitude)}`;
const amapSplit = location => {
  const [longitude, latitude] = location.split(",");
  return {
    latitude: parseFloat(latitude) || 0,
    longitude: parseFloat(longitude) || 0
  };
};
