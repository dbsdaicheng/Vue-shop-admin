import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'vue-devui';

// 接口地址前缀
const BASEAPIURL:string = '/api';
const PREFIX_TOKEN:string = 'Beaer';

interface ArrayNumber {
  [index: number]: string // 只要 index 的类型是 number，那么值的类型必须是 number
}
const errorCode: ArrayNumber = {
  401: '没权限',
  403: '该token没权限访问该资源。',
  405: '客户端请求中的方法被禁止。检查请求方式。',
  500: '服务器内部错误，无法完成请求。',
  503: '服务不可用',
  504: '网关超时'
};

const instance = axios.create({
  baseURL: BASEAPIURL, // 请求头地址
  timeout: 30000, // 指定请求超时毫秒数
  headers: {
    // 设置头部信息，也可不设，一般默认
    'Content-Type': 'application/json;charset=UTF-8'
  }
});

// 添加请求拦截器
instance.interceptors.request.use(
  (config: any) => {
    // 如果本地储存中有token值，则设置headers头部token
    const token = localStorage.getItem('token');
    if (token) {
      // 将token设置到headers中，header的key是Authorization
      config.headers.Authorization = PREFIX_TOKEN + token;
    }
    return config;
  }, (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    const status = response.data ? response.data.status : '';
    if (status !== 200) {
      const code: number = response.data.status;
      message({
        message: errorCode[code],
        type: 'info',
        bordered: false
      });
    }
    return response;
  }
);
