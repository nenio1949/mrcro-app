/*
 * @Description: 菜单数据
 * @Author: yong.li
 * @Date: 2022-02-07 10:33:43
 * @LastEditors: yong.li
 * @LastEditTime: 2022-10-08 10:35:26
 */

import React from 'react';
import { DatabaseOutlined } from '@ant-design/icons';
const menuData = [
  {
    key: '/vite-react-app/welcome',
    label: '子应用vite-react-app',
    path: '/vite-react-app/welcome',
    icon: <DatabaseOutlined />,
  },
  {
    key: '/webpack-react-app/welcome',
    label: '子应用webpack-react-app',
    path: '/webpack-react-app/welcome',
    icon: <DatabaseOutlined />,
  },
];

export default menuData;
