import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

export default [
  {
    url: '/login', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return Mock.mock({
        status: '200',
        message: 'success',
        data: {
          token: '123456'
        }
      });
    }
  }
] as MockMethod[]; // 定义数据格式
