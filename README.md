# Terms and Conditions

本项目是一个基于 React 和 Vite 构建的单页面应用（SPA），主要用于通过 Paddle 的网站审查。它提供了必要的服务条款（Terms of Service）页面，并满足特定的 URL 路径要求。

## 项目介绍

该项目的主要功能是展示服务条款内容。为了符合 Paddle 的审查要求（URL 必须包含路径，例如 `website.com/terms-and-conditions`），应用会自动将访问路径重定向至 `/terms-and-conditions`。

项目已部署在 Vercel 上，访问地址：[https://terms-and-conditions.vercel.app/](https://terms-and-conditions.vercel.app/)

## 技术栈

- **前端框架**: [React](https://react.dev/)
- **语言**: [TypeScript](https://www.typescriptlang.org/)
- **构建工具**: [Vite](https://vitejs.dev/)
- **包管理工具**: [pnpm](https://pnpm.io/)
- **部署平台**: [Vercel](https://vercel.com/)

## 本地开发

### 1. 克隆项目

```bash
git clone https://github.com/yahao333/terms-and-conditions.git
cd terms-and-conditions
```

### 2. 安装依赖

本项目使用 `pnpm` 进行包管理，请确保已安装 `pnpm`。

```bash
pnpm install
```

### 3. 启动开发服务器

```bash
pnpm dev
```

启动后，访问 `http://localhost:5173`（默认端口），你会发现路径会自动跳转到 `http://localhost:5173/terms-and-conditions`。

### 4. 构建生产版本

```bash
pnpm build
```

### 5. 本地预览生产构建

```bash
pnpm preview
```

## 项目结构

```
.
├── src/
│   ├── App.tsx          # 主应用组件，包含路由重定向逻辑
│   ├── terms.ts         # 服务条款的具体内容配置
│   ├── main.tsx         # 入口文件
│   └── ...
├── index.html           # HTML 模板
├── package.json         # 项目配置与依赖
├── pnpm-lock.yaml       # 依赖锁定文件
├── vercel.json          # Vercel 部署配置
└── vite.config.ts       # Vite 配置文件
```

## 部署

本项目配置了 `vercel.json`，可以直接连接 GitHub 仓库在 Vercel 上进行自动部署。每次推送到 `main` 分支都会触发新的构建和部署。
