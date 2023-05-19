import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh';
import styleImport from 'vite-plugin-style-import';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(), // 无感知热更新
    styleImport({
      // 引入antd样式
      libs: [
        {
          libraryName: 'antd',
          esModule: true,
          resolveStyle: (name) => {
            return `antd/es/${name}/style/index`;
          },
        },
      ],
    }),
  ],
  server: {
    host: '0.0.0.0',
  },
  resolve: {
    alias: {
      find: '@micro-zoe/micro-app',
      // replacement: path.resolve(__dirname, './src'),
      '@': path.resolve(__dirname, './src'),
      replacement: path.resolve(__dirname, '../../lib/index.esm.js'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        // 支持内联 JavaScript
        javascriptEnabled: true,
      },
    },
    // modules: {
    //   // 样式小驼峰转化,
    //   // css: goods-list => tsx: goodsList
    //   localsConvention: 'camelCase'
    // }
  },
});
