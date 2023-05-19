/*
 * @Description: 工具类
 * @Author: yong.li
 * @Date: 2022-01-21 16:34:28
 * @LastEditors: yong.li
 * @LastEditTime: 2022-03-17 14:56:20
 */

import validate from './validate'
import format from './format'
import localstorage from './localstorage'
import operate from './operate'

// 全局变量赋值
window.G_LOCALSTORAGE = localstorage
window.G_OPERATE = operate
window.G_VALIDATE = validate
window.G_FORMAT = format
