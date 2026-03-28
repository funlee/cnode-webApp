# Cnode WebApp

> 一个基于 React 技术栈构建的 [CNode 社区](https://cnodejs.org) 移动端 WebApp 客户端，数据来源于 CNode 官方 API，纯浏览功能，适合移动端使用。

在线访问：[Cnode-webApp](https://funlee.github.io/cnode-webApp/)（建议 F12 切换至移动端设备模式查看）

---

## 📸 页面截图

| 登录页 | 主题列表页 | 左侧导航栏 |
|:---:|:---:|:---:|
| ![登录页](https://raw.github.com/funlee/cnode-webApp/master/example/01.png) | ![主题展示页](https://raw.github.com/funlee/cnode-webApp/master/example/02.png) | ![左侧导航栏](https://raw.github.com/funlee/cnode-webApp/master/example/03.png) |

| 右侧导航栏 | 详情页 | 个人中心页 |
|:---:|:---:|:---:|
| ![右侧导航栏](https://raw.github.com/funlee/cnode-webApp/master/example/04.png) | ![详情页](https://raw.github.com/funlee/cnode-webApp/master/example/05.png) | ![个人中心页](https://raw.github.com/funlee/cnode-webApp/master/example/06.png) |

---

## ✨ 功能特性

- **主题列表**：按分类（全部 / 精华 / 分享 / 问答 / 招聘）浏览 CNode 社区帖子，支持下拉到底自动加载下一页
- **帖子详情**：查看帖子完整内容，展示作者信息、发布时间、浏览次数，并列出所有回复
- **个人中心**：查看用户头像、加入时间，支持切换查看「最近发布的主题」和「最近参与的回复」
- **用户登录**：通过 CNode Access Token 登录，登录成功后用户信息存储于 Cookie，支持跳过登录直接游客访问
- **侧边栏导航**：
  - 左侧边栏：展示登录用户信息，提供个人中心、消息提醒、我的收藏等导航入口
  - 右侧边栏：主题分类筛选导航（全部 / 精华 / 分享 / 问答 / 招聘）
- **Loading 状态**：路由懒加载与数据请求期间展示 Loading 动画
- **404 页面**：访问不存在的路由时展示友好的 404 提示页面

---

## 🛠 技术栈

| 类别 | 技术 |
|---|---|
| 前端框架 | React 15 |
| 路由管理 | React Router DOM v4（HashRouter） |
| UI 组件库 | Ant Design 3 |
| HTTP 请求 | Axios |
| 样式预处理 | Sass（SCSS） |
| 构建工具 | Webpack 3 |
| 转译工具 | Babel（ES2015 + Stage-0 + React） |
| 代码分割 | bundle-loader（路由级懒加载） |

---

## 📁 项目结构

```
cnode-webApp/
├── example/                  # 页面截图
├── src/
│   ├── assets/
│   │   ├── css/              # 全局样式变量（config.scss）
│   │   └── js/
│   │       ├── axiosConfig.js  # Axios 全局配置（baseURL、拦截器）
│   │       └── utils.js        # 工具函数（Cookie 操作、时间格式化）
│   ├── components/           # 公共组件
│   │   ├── App/              # 根组件
│   │   ├── Banner/           # 顶部导航栏
│   │   ├── DetailList/       # 用户主题/回复列表
│   │   ├── Nav/              # 导航组件
│   │   ├── ReplyList/        # 帖子回复列表
│   │   ├── SideLeft/         # 左侧用户导航栏
│   │   ├── SideRight/        # 右侧分类筛选栏
│   │   ├── TopicList/        # 主题列表（含无限滚动）
│   │   └── common/
│   │       ├── Loading/      # 加载动画
│   │       └── NotFound/     # 404 页面
│   ├── router/
│   │   ├── Bundle.js         # 懒加载路由容器
│   │   └── router.js         # 路由配置
│   ├── views/                # 页面视图
│   │   ├── Login/            # 登录页
│   │   ├── Topic/            # 主题列表页（主页）
│   │   ├── Article/          # 帖子详情页
│   │   └── User/             # 个人中心页
│   ├── index.html
│   ├── index.js
│   └── index.scss
├── webpack.common.config.js  # Webpack 公共配置
├── webpack.dev.config.js     # Webpack 开发环境配置
├── webpack.config.js         # Webpack 生产环境配置
└── package.json
```

---

## 📡 路由说明

| 路径 | 页面 | 说明 |
|---|---|---|
| `/` | 重定向至 `/login` | 默认跳转登录页 |
| `/login` | 登录页 | 输入 Access Token 登录，或跳过直接访问 |
| `/topic/:id` | 主题列表页 | id 为分类标签（all / good / share / ask / job） |
| `/article/:id` | 帖子详情页 | id 为帖子唯一标识 |
| `/user/:userId` | 个人中心页 | userId 为用户登录名 |
| 其他 | 404 页面 | 未匹配路由展示 404 |

---

## 🚀 快速开始

### 环境要求

- Node.js >= 8.x
- npm >= 5.x

### 安装与运行

```bash
# 克隆项目
git clone https://github.com/funlee/cnode-webApp.git

# 进入项目目录
cd cnode-webApp

# 安装依赖
npm install

# 启动开发服务器（支持热更新）
npm run start
```

开发服务器启动后访问 `http://localhost:8080`

### 构建生产包

```bash
npm run build
```

构建产物输出至 `dist/` 目录。

---

## 🔑 登录说明

本应用使用 CNode 官方 API 的 Access Token 进行身份验证：

1. 前往 [CNode 设置页面](https://cnodejs.org/setting) 获取你的 Access Token
2. 在登录页输入 Access Token 点击登录
3. 也可点击「跳过」以游客身份浏览

> 注意：Access Token 登录后用户信息（头像、ID、用户名）会以 Cookie 形式保存在浏览器中

---

## 📝 API 说明

数据来源：[CNode 社区官方 API v1](https://cnodejs.org/api)

| 接口 | 方法 | 说明 |
|---|---|---|
| `/topics` | GET | 获取主题列表，支持 `tab`、`page`、`limit` 参数 |
| `/topic/:id` | GET | 获取帖子详情及回复列表 |
| `/user/:loginname` | GET | 获取用户信息及最近主题/回复 |
| `/accesstoken` | POST | Access Token 验证登录 |

---

## 📄 License

[MIT](./LICENSE) © [funlee](https://github.com/funlee)
