/*
 * @Description:格式化工具类
 * @Author: yong.li
 * @Date: 2022-01-24 10:32:33
 * @LastEditors: yong.li
 * @LastEditTime: 2022-04-28 14:45:23
 */

import dayjs from 'dayjs'

/**
 * 时间格式化
 * @param time 时间
 * @param type 格式化类型
 * @param defaultValue 默认值（未能格式化成功返回的值）
 * @returns
 */
const date = (time: any, type?: string, defaultValue?: any) => {
  if (time) {
    if (type === 'fullTimes') {
      return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
    }
    if (type === 'fullTimeToMinute') {
      return dayjs(time).format('YYYY-MM-DD HH:mm')
    }
    if (type === 'fullTimeToMini') {
      return dayjs(time).format('YYYYMMDDHHmmss')
    }
    if (type === 'year') {
      return dayjs(time).format('YYYY')
    }
    if (type === 'yearMonth') {
      return dayjs(time).format('YYYY-MM')
    }
    if (type) {
      return dayjs(time).format(type)
    }
    return dayjs(time).format('YYYY-MM-DD')
  }
  return defaultValue || '/'
}

const format = {
  date
}

export default format
