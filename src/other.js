import { Dimensions } from "react-native";

const deviceWidthDp = Dimensions.get("window").width;

const store = {};

function pxTransform(size) {
  const uiWidthPx = 750;
  return (size / uiWidthPx) * deviceWidthDp;
}

export { store, pxTransform };
