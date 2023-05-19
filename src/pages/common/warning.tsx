/*
 * @Description: 警告
 * @Author: yong.li
 * @Date: 2022-01-21 16:39:23
 * @LastEditors: yong.li
 * @LastEditTime: 2022-02-09 18:03:54
 */
import React from 'react'
import { Empty } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'

const Home = (props: any) => {
  const { type, data, mode = 'result', style = {} } = props
  let marginTop: string | number = 0

  switch (type) {
    case 'loading':
      marginTop = 0
      break
    case 'tips':
      marginTop = '5%'
      break
    default:
      break
  }

  return (
    <div style={{ marginTop, ...style }}>
      {mode === 'result' ? (
        <Empty description={<span className="d-text-gray">{data}</span>} />
      ) : (
        <div className="d-text-gray" style={{ textAlign: 'center' }}>
          <LoadingOutlined /> {data}
        </div>
      )}
    </div>
  )
}

export default Home
