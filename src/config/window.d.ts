/* eslint-disable no-unused-vars */
/*
 * @Description:声明全局变量
 * @Author: yong.li
 * @Date: 2022-01-04 09:41:57
 * @LastEditors: yong.li
 * @LastEditTime: 2022-10-08 10:47:25
 */

export {};

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    /** 主应用对象 */
    microApp: any;
    /** 子应用vite-react-app的通信对象 */
    eventCenterForViteReactApp: any;
    /** 子应用webpack-react-app的通信对象 */
    eventCenterForWebpackReactApp: any;
    /** 全局自定义props对象 */
    G_PROPS: any;
    /** 通用配置 */
    G_CONFIG: any;
    /** 操作 */
    G_OPERATE: {
      /** 加密 */
      encrypt: (content: any) => any;
      /** 解密 */
      decrypt: (encryptStr: any) => any;
      /** 拆分url的params部分 */
      splitUrlParams: () => any;
      /** 附件根据URL获取文件名 */
      splitUrlFileName: (fileUrl: any) => any;
      /** 设置网页标题 */
      setDocumentTitle: (title: any) => any;
    };
    /** 缓存 */
    G_LOCALSTORAGE: {
      /** 删除指定缓存 */
      remove: (name: string) => void;
      /** 清理所有缓存 */
      clear: () => void;
      /** 读取指定缓存 */
      get: (name: any) => any;
      /** 写入缓存 */
      set: (name: string, datas: any, type?: string) => any;
    };
    /** 校验 */
    G_VALIDATE: {
      /** 校验手机号 */
      mobile: (number: any) => any;
    };
    /** 格式化 */
    G_FORMAT: {
      /** 日期格式化 */
      date: (time: any, type?: string, defaultValue?: any) => any;
    };
  }
}
