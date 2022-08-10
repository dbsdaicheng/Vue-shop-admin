import type { Plugin } from 'vite'
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { viteMockServe } from 'vite-plugin-mock';
import eslintPlugin from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';

export default function createVitePlugins({ variables }: { variables: any }) {
    const opt = { variables: variables }
    const vitePlugins: (Plugin | Plugin[])[] = [
        vue(),
        vueJsx(),
        viteMockServe({
          mockPath: './src/mock/home', // 解析，路径可根据实际变动
          localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
        }),
        eslintPlugin({
          // 配置
          cache: false // 禁用 eslint 缓存
        }),
        legacy({
          targets: ['defaults', 'not IE 11']
        }),
    ]
    return vitePlugins
}