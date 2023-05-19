/*
 * @Description:操作类
 * @Author: yong.li
 * @Date: 2022-01-24 10:44:26
 * @LastEditors: yong.li
 * @LastEditTime: 2022-09-28 14:36:12
 */

import CryptoJS from 'crypto-js';
import { message } from 'antd';
import { intersection as _intersection } from 'lodash';

const aseKey = 'zhengzhouccbri-funenc'; // 秘钥

/**
 * @author: yong.li
 * @description crypt加密
 * @param {any} content 需要加密的信息
 * @return {*}
 */
const encrypt = (content: any) => {
  if (!content) return message.error('需要加密的信息不能为空！');

  const messageStr =
    content instanceof Object ? JSON.stringify(content) : content.toString();

  const ciphertext = CryptoJS.AES.encrypt(messageStr, aseKey).toString();

  return ciphertext;
};

/**
 * @author: yong.li
 * @description crypt解密
 * @param {any} encryptStr 需要解密的内容
 * @return {*}
 */
const decrypt = (encryptStr: any) => {
  const bytes = CryptoJS.AES.decrypt(encryptStr, aseKey);
  const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return decryptedData;
};

/**
 * @author: yong.li
 * @description: 拆分url的params部分
 * @param {*}
 * @return {*}
 */
const splitUrlParams = () => {
  const nowUrl = window.location.pathname;
  const nowUrlArray = nowUrl.split('?')[0].split('/'); // 根目录会是两个空串["",""]
  const realKeys = nowUrlArray.filter(Boolean);

  return realKeys;
};

/**
 * @author: yong.li
 * @description: 附件根据URL获取文件名
 * @param {any} fileUrl 文件url
 * @return {*}
 */
const splitUrlFileName = (fileUrl: any) => {
  let orginFileName = fileUrl.split('/')[fileUrl.split('/').length - 1]; // 获取文件名，格式：tct/ssm/202108020121212/XXX.pdf

  return orginFileName;
};

/**
 * @author: yong.li
 * @description: 设置网页标题
 * @param {any} title 标题
 * @return {*}
 */
const setDocumentTitle = (title: any) => {
  const titleStr = window.G_CONFIG.system.name;
  return (document.title = title ? `${title} - ${titleStr}` : titleStr);
};

const operate = {
  encrypt,
  decrypt,
  splitUrlParams,
  splitUrlFileName,
  setDocumentTitle,
};

export default operate;
