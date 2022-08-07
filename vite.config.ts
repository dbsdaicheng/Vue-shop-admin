import { defineConfig } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig({
    plugins: [
      vue(),
      eslintPlugin({
        // 配置
        cache: false // 禁用 eslint 缓存
      }),
      viteMockServe({
        mockPath: './src/mock/home', // 解析，路径可根据实际变动
        localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
      })
    ],
    resolve: {
      alias: {
        // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/mock': path.resolve(__dirname, 'src/mock')
      }
    }
  });
};
