/*
 * @Description:缓存封装工具类
 * @Author: yong.li
 * @Date: 2022-01-24 10:15:35
 * @LastEditors: yong.li
 * @LastEditTime: 2022-04-29 11:57:52
 */
import operate from './operate'
// key说明：
// _USER_AUTHCODE:用户权限，_USER_INFO：用户信息，_REMEMBER_LOGIN：是否记住密码，_MENU_STATUS：菜单是否展开，
// _LOGIN_INFO：登录信息（账户密码）

// 免清理key
// const noRemovalKey = [
//   '_REMEMBER_LOGIN', // 是否记住登录账号密码
//   '_LOGIN_INFO' // 登录账号及密码
// ]
// 退出登录需要清理的key
const removeKey = [
  '_USER_AUTHCODE', // 用户权限码
  '_USER_INFO', // 用户信息
  '_MENU_STATUS', // 菜单闭合状态
  '_SELECTED_PROJECT', // 当前选中项目
  '_COMPREHENSIVE_USECASE' // 综合联调测试
]

/**
 * @author: yong.li
 * @description: 删除指定缓存
 * @param {string} name 名称
 * @return {*}
 */
const remove = (name: string) => {
  localStorage.removeItem(name)
}

/**
 * @author: yong.li
 * @description: 清理所有缓存
 * @param {*}
 * @return {*}
 */
const clear = () => {
  removeKey.map((key: string) => {
    localStorage.removeItem(key)
  })
}

/**
 * @author: yong.li
 * @description: 读取指定缓存
 * @param {string} name 名称
 * @return {*}
 */
const get = (name: string) => {
  // 优先读取sessionStorage值，若session值不存在再读取localStorage值
  let dataStr = sessionStorage.getItem(name)
  let hash = {}

  if (dataStr) {
    // 加入try,catch防止内容变化
    try {
      hash = JSON.parse(dataStr)

      const { type, data }: any = hash
      let newData = data

      // 如果是加密类型，需要进行解密后返回
      if (type && type === 'crypto-hash') {
        newData = operate.decrypt(data)
      }

      return newData
    } catch {
      return false
    }
  } else {
    dataStr = localStorage.getItem(name)

    if (dataStr) {
      // 加入try,catch防止内容变化
      try {
        hash = JSON.parse(dataStr)

        const { type, data }: any = hash
        let newData = data

        // 如果是加密类型，需要进行解密后返回
        if (type && type === 'crypto-hash') {
          newData = operate.decrypt(data)
        }

        // 再写入到sessionStorage
        sessionStorage.setItem(name, dataStr)

        return newData
      } catch {
        return false
      }
    }
  }

  return false
}

/**
 * @author: yong.li
 * @description: 写入缓存
 * @param {string} name 名称
 * @param {any} datas 缓存内容
 * @param {string} type 类型（如：crypto标识为加密对象）
 * @return {*}
 */
const set = (name: string, datas: any, type?: string) => {
  const saveData = {
    type,
    data: type === 'crypto-hash' ? operate.encrypt(datas) : datas
  }

  localStorage.setItem(name, JSON.stringify(saveData))
  sessionStorage.setItem(name, JSON.stringify(saveData))

  return true
}

const localstorage = {
  remove,
  clear,
  get,
  set
}

export default localstorage
