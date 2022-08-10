import { defineConfig, loadEnv } from 'vite';
import setProBuild from './config/product';
import setLibBuild from './config/lib';
import { configServer } from './config/server';
import path from 'path';
import createVitePlugins from './config/plugins';

// https://vitejs.dev/config/
export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

  const build: any = {
    minify: false, // 跟踪这个警告[https://github.com/element-plus/element-plus/issues/3219#issuecomment-960374776]
    outDir: process.env.VITE_MODE, // 打包文件名称
    assetsDir: 'assets', // 打包静态文件的存储地址
    chunkSizeWarningLimit: 500
  };
  if (mode === 'development') {
    const { rollupOptions } = setProBuild();
    build.rollupOptions = rollupOptions;
  }
  if (mode === 'production') {
    const { rollupOptions, terserOptions } = setProBuild();
    build.rollupOptions = rollupOptions;
    build.terserOptions = terserOptions;
  }
  if (mode === 'lib') {
    const { emptyOutDir, lib, rollupOptions } = setLibBuild();
    build.emptyOutDir = emptyOutDir;
    build.lib = lib;
    build.rollupOptions = rollupOptions;
  }
  return defineConfig({
    base: '/',
    publicDir: 'public',
    plugins: createVitePlugins({ variables: process.env }),
    resolve: {
      alias: {
        // 如果报错__dirname找不到，需要安装node,执行yarn add @types/node --save-dev
        '@/components': path.resolve(__dirname, 'src/components'),
        '@/pages': path.resolve(__dirname, 'src/pages'),
        '@/mock': path.resolve(__dirname, 'src/mock'),
        '@/utils': path.resolve(__dirname, 'src/utils'),
        '@/interface': path.resolve(__dirname, 'src/interface'),
        '@/api': path.resolve(__dirname, 'src/api'),
        '@/layouts': path.resolve(__dirname, 'src/layouts')
      }
    },
    server: configServer(),
    build
  });
};
