# MICRO-APP
微前端模板项目
官方文档：`https://zeroing.jd.com/micro-app/docs.html#/`

## 功能
- React基座
- 京东micro-app微前端框架
- antd 4.x
- typescript 4.x
- mobx 6.x
- js工具库lodash
- js加密库crypto-js
- js数据请求库axios
- 状态管理mobx
- eslint+prettier代码格式化
  
## 目录结构
```
├── README.md                       # 项目说明
├── index.html                      # 挂载html
├── micro-app                       # 微应用
│   ├── vite-react-app              # vite微应用
│   └── webpack-react-app           # webpack微应用
├── package-lock.json
├── package.json
├── public
├── src
│   ├── App.tsx                     # 过渡页
│   ├── assets                      # 静态资源
│   ├── components                  # 公共组件
│   ├── config                      # 公共配置
│   ├── main.tsx                    # 入口
│   ├── pages                       # 页面
│   ├── routes                      # 路由
│   ├── services                    # 接口请求
│   ├── stores                      # 状态管理
│   ├── utils                       # 工具类
│   └── vite-env.d.ts
├── tsconfig.json                   # ts配置
├── vite.config.ts                  # vite配置
└── yarn.lock
```
