import { MockMethod } from 'vite-plugin-mock';
import Mock from 'mockjs';

export default [
  {
    url: '/mock/message', // 注意，这里只能是string格式
    method: 'get',
    response: () => {
      return Mock.mock({
        status: '200',
        message: 'success',
        'list|100': [
          {
            goodsName: '@name',
            promotionPrice: '@integer(0, 10000)',
            retailPrice: '@integer(0,10000)',
            'id|+1': 1,
            'goodsId|+1': 1,
            category: '@name',
            mainPicUrl: '@image',
            status: '@integer(0,1)'
          }
        ]
      });
    }
  }
] as MockMethod[]; // 定义数据格式
