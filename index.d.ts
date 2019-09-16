type Param<P extends any | string | ArrayBuffer = any> = {
  url: string;
  data?: P;
  header?: {
    "content-type"?: string;
    "Content-Type"?: string;
    token?: string;
    [k: string]: any;
  };
  method?:
    | "OPTIONS"
    | "GET"
    | "HEAD"
    | "POST"
    | "PUT"
    | "DELETE"
    | "TRACE"
    | "CONNECT";
  dataType?: string;
  responseType?: string;
  mode?: "no-cors" | "cors" | "same-origin";
  credentials?: "include" | "same-origin" | "omit";
  cache?: "default" | "no-cache" | "reload" | "force-cache" | "only-if-cached";
  timeout?: number;
};

declare namespace showModalType {
  type Promised = {
    confirm: boolean;
    cancel: boolean;
  };
  type Param = {
    title?: string;
    content: string;
    showCancel?: boolean;
    cancelText?: string;
    cancelColor?: string;
    confirmText?: string;
    confirmColor?: string;
  };
}

declare namespace ActionSheet {
  type Promised = {
    tapIndex: number;
  };
  type Param = {
    itemList: string[];
    itemColor?: string;
  };
}

type toastType = {
  title: string;
  icon?: "success" | "loading" | "none";
  image?: string;
  duration?: number;
  mask?: boolean;
};

declare const Maro: {
  // 【核心 API】
  request: (params: Param) => Promise<any>;
  chooseImage: () => Promise<File>; // 选择图片
  previewImage: (OBJECT: { current?: string; urls: string[] }) => Promise<any>;
  uploadFile: (OBJECT: { url: string; filePath: any; name: string; header?: any; formData?: any;}) => Promise<any>;
  getStorage: (key: string) => Promise<string>; // 读 localStorage
  setStorage: (key: string, value: string) => Promise<void>; // 写 localStorage
  removeStorage: (key: string) => Promise<void>; // 删 localStorage
  clearStorage: () => Promise<void>;
  store: any; // 数据共享
  eventCenter: {
    // 观察者
    on: (key: string, fn: Function) => void;
    off: (key: string) => void;
    trigger: (key: string) => void;
    emit: (key: string) => void;
  };

  // 【地图相关】
  setAMapKeys: (webkey: string, apikey: string) => void; // 设置高德地图的 key，请在调用后续方法之前，先调用该方法初始化 key
  getLocation: () => Promise<{ longitude: number; latitude: number }>; // 获取用户当前 gps
  getPoiByLoc: (params: {
    longitude: number;
    latitude: number;
  }) => Promise<any>; // 地址解析
  getLocByPoi: (keywords: string) => Promise<any>; // 逆地址解析
  searchAround: (params: {
    latitude: number;
    longitude: number;
    radius: number;
    keywords?: string;
  }) => Promise<any>; // 搜索周边 POI
  searchKeyword: (params: {
    city?: string | number;
    county?: string | number;
    keywords: string;
  }) => Promise<any>; // 搜索关键词(可指定某个区域)

  // 【ui相关】
  showModal: (OBJECT: showModalType.Param) => Promise<showModalType.Promised>;
  showLoading: (OBJECT?: { title: string; mask?: boolean }) => Promise<any>;
  showToast: (OBJECT: toastType) => Promise<any>;
  showActionSheet: (OBJECT: ActionSheet.Param) => Promise<ActionSheet.Promised>;
  hideLoading: () => void;
  hideToast: () => void;
};
export default Maro;
