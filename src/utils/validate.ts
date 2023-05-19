/*
 * @Description: 校验工具类
 * @Author: yong.li
 * @Date: 2022-01-21 16:34:52
 * @LastEditors: yong.li
 * @LastEditTime: 2022-04-28 14:45:34
 */

/**
 * @author: yong.li
 * @description: 校验手机号
 * @param {any} number 手机号
 * @return {*} true|false
 */
const mobile = (number: any) => {
  return /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/.test(
    number
  )
}

const validate = {
  mobile
}

export default validate
