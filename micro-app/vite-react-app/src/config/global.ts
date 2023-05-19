/*
 * @Description:全局配置
 * @Author: yong.li
 * @Date: 2022-01-12 10:02:42
 * @LastEditors: yong.li
 * @LastEditTime: 2022-09-29 17:18:43
 */

import enumConfig from './enum';

const G_PROPS = null; // 全局自定义props对象（非必要不用）

/**
 * 通用配置
 */
const G_CONFIG = {
  serverHost: import.meta.env.VITE_APP_SERVER_HOST,
  wsHost: import.meta.env.VITE_APP_WEBSOCKET_HOST,
  docHost: 'http://docs.cq-tct.com', // 文件存储服务地址
  filePreviewServiceHost: 'http://fps.funenc.xyz:2112', // 文件预览服务地址
  uploadQiNiuUrl: 'https://upload.qiniup.com', // 七牛上传地址
  manualUrl: 'https://www.yuque.com/mu2e9y/qk2tny', // 操作手册地址
  system: {
    name: '微应用模板',
    logoUrl: 'http://docs.antjob.ink/tct/logo/en-full.png?imageView2/2/h/60',
    subName: import.meta.env.VITE_APP_SYSTEM_NAME,
  },
  maxUploadSize: 104857600, // 文件上传最大限制100MB
  enum: enumConfig, // 枚举值
  uploadTemplateUrl: {
    useCase: {
      /* 用例库文件 */
      up: '/api/web/measure/upload',
      down: 'https://www.yuque.com/mu2e9y/vvm8dg/ewf95a',
    },
  },
};

window.G_PROPS = G_PROPS;
window.G_CONFIG = G_CONFIG;
