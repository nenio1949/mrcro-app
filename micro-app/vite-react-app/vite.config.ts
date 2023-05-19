import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
// import { join } from 'path';
// import { writeFileSync } from 'fs';
// import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3001,
  },
  base: `${
    process.env.NODE_ENV === 'production' ? 'http://my-site.com' : ''
  }/vite-react-app`, // 部署到生产环境时http://my-site.com需要更换为站点域名
  plugins: [
    react(),
    // 自定义插件
    (function () {
      let basePath = '';
      return {
        name: 'vite-react-app',
        apply: 'build',
        configResolved(config) {
          basePath = `${config.base}${config.build.assetsDir}/`;
        },
        renderChunk(code, chunk) {
          // build后，import会通过相对地址引入模块，需要将其补全
          if (
            chunk.fileName.endsWith('.js') &&
            /(from|import)(\s*['"])(\.\.?\/)/g.test(code)
          ) {
            code = code.replace(
              /(from|import)(\s*['"])(\.\.?\/)/g,
              (all, $1, $2, $3) => {
                return all.replace($3, new URL($3, basePath).href);
              }
            );
          }
          return code;
        },
        // writeBundle(options, bundle: any) {
        //   for (const chunkName in bundle) {
        //     if (Object.prototype.hasOwnProperty.call(bundle, chunkName)) {
        //       const chunk = bundle[chunkName];
        //       if (chunk.fileName && chunk.fileName.endsWith('.js')) {
        //         chunk.code = chunk.code.replace(
        //           /(from|import\()(\s*['"])(\.\.?\/)/g,
        //           (all, $1, $2, $3) => {
        //             return all.replace($3, new URL($3, basePath));
        //           }
        //         );
        //         if (options.dir) {
        //           const fullPath = join(options.dir, chunk.fileName);
        //           writeFileSync(fullPath, chunk.code);
        //         }
        //       }
        //     }
        //   }
        // },
      };
    })(),
  ],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      '@': resolve(__dirname, 'src'), // 路径别名
    },
    extensions: ['.js', '.json', '.ts', '.tsx'], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
});
