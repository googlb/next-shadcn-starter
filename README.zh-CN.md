<div align="right">
  <a href="./README.md">English</a> | <strong><a href="./README.zh-CN.md">简体中文</a></strong>
</div>

# Next-Shadcn-Starter

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/googlb/next-shadcn-starter/pulls)

🚀 一个精心设计、可用于生产环境的启动器 (Starter)，用于构建现代化的全栈 Web 应用。包含 Next.js 14、Shadcn/ui、TypeScript、Prisma、Auth.js (Next-Auth)、Tailwind CSS，并遵循行业最佳实践。

## ✨ 项目哲学

本项目旨在成为一个“有主见”的脚手架，它不仅仅是技术的堆砌，更是一套经过深思熟虑的工程化解决方案，旨在实现：

- **极致的类型安全:** 从数据库到前端 UI，打造端到端的类型安全链路。
- **清晰的架构分层:** 严格分离 UI、业务逻辑和数据获取层，确保项目高内聚、低耦合。
- **最佳的开发者体验:** 集成自动化工具和现代化的库，最大化提升开发效率和代码质量。
- **生产环境就绪:** 提供开箱即用的认证、数据库配置和部署优化。

## 🚀 特性

- **现代化框架:** 基于 **Next.js 14 App Router**，充分利用服务器组件 (RSC) 和 Server Actions。
- **优雅的 UI:** 使用 **Shadcn/ui** 和 **Tailwind CSS** 构建美观、可访问且高度可定制的界面。
- **端到端类型安全:** 由 **TypeScript**, **Prisma**, 和 **Zod** 共同保障。
- **强大的数据状态管理:** 使用 **TanStack Query (React Query)** 高效管理服务端状态，**Zustand** 轻量管理客户端状态。
- **完备的认证系统:** 集成 **Auth.js (Next-Auth) v5**，轻松实现路由保护和会话管理。
- **高性能表单:** 采用 **React Hook Form** 和 **Zod** resolver，实现高性能、类型安全的表单处理。
- **自动化代码质量:** 通过 **ESLint**, **Prettier**, **Husky** 和 **lint-staged** 保证代码风格一致。
- **现代化的测试方案:** 集成 **Vitest** 和 **React Testing Library** 用于单元和组件测试。

## 🛠️ 技术栈

| 类别           | 技术                            |
| :------------- | :------------------------------ |
| **核心框架**   | Next.js 15+ (App Router)        |
| **UI 基础**    | React 19+                       |
| **样式方案**   | Tailwind CSS                    |
| **组件库**     | shadcn/ui                       |
| **数据获取**   | TanStack Query (React Query) v5 |
| **客户端状态** | Zustand                         |
| **表单处理**   | React Hook Form                 |
| **数据校验**   | Zod                             |
| **认证授权**   | Auth.js (Next-Auth) v5          |
| **图标库**     | Lucide React                    |
| **数据库 ORM** | Prisma                          |
| **测试方案**   | Vitest + React Testing Library  |
| **代码质量**   | ESLint + Prettier + Husky       |

## 🏁 开始使用

### 1. 先决条件

- [Node.js](https://nodejs.org/en/) (v18.17 or later)
- [pnpm](https://pnpm.io/installation) (推荐), `npm`, or `yarn`

### 2. 安装

1.  克隆仓库:
    ```bash
    git clone https://github.com/googlb/next-shadcn-starter.git
    ```
2.  进入项目目录:
    ```bash
    cd next-shadcn-starter
    ```
3.  安装依赖:
    ```bash
    pnpm install
    ```

### 3. 环境配置

1.  复制环境变量模板文件:
    ```bash
    cp .env.example .env
    ```
2.  编辑 `.env` 文件，填入您的数据库连接字符串:
    ```env
    # .env
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    ```

### 4. 数据库同步

使用 Prisma 将您的数据库 schema 与数据库同步。

```bash
pnpm prisma db push
```

### 5. 启动开发服务器

```bash
pnpm run dev
```

现在，在浏览器中打开 `http://localhost:3000` 即可看到您的应用。

## 🏗️ 项目结构与架构哲学

本项目的目录结构经过精心设计，以实现关注点分离和长期可维护性。

```
src/
├── app/              # Next.js App Router (路由和页面 UI)
│   ├── (auth)/       # 认证路由组
│   ├── (dashboard)/  # 受保护的仪表盘路由组
│   └── api/          # API 路由 (例如 Auth.js)
├── components/       # 通用 UI 组件
│   ├── layout/       # 布局级组件 (Header, Sidebar)
│   └── ui/           # shadcn/ui 生成的原子组件
├── lib/              # 项目核心逻辑与服务
│   ├── api/          # 【核心】数据服务层 (所有后端交互的封装)
│   ├── auth.ts       # Auth.js 配置
│   ├── db.ts         # Prisma Client 实例
│   ├── store/        # Zustand 全局状态
│   └── types/        # 全局 TypeScript 类型定义
└── middleware.ts     # Next.js 中间件 (用于路由保护)
```

- **`src/app`**: 严格遵循 App Router 的最佳实践。使用路由组 `()` 来组织布局和路由，而不会影响 URL 结构。
- **`src/components`**: 存放所有可复用的 React 组件。`ui/` 目录由 shadcn/ui 自动管理。
- **`src/lib`**: 项目的“大脑”。最关键的是 **`lib/api`** 目录，它将所有的数据获取逻辑（无论是调用外部 API 还是直接访问数据库）与您的 UI 组件完全解耦。这使得未来切换后端服务变得异常简单。

## 🧠 核心概念

### 1. 数据获取策略

- **初始加载:** 优先在**服务器组件**中通过 `async/await` 直接调用 `lib/api/` 中的服务函数，实现最快的首屏加载。
- **客户端交互:** 对于需要客户端交互（分页、排序、搜索）的数据，在**客户端组件**中使用 **TanStack Query (`useQuery`)** 来管理缓存、重新验证和加载状态。
- **数据变更:** 使用 **Server Actions** 来处理所有增、删、改操作，并通过 `useMutation` 来触发，实现乐观更新和缓存失效。

### 2. 状态管理哲学

- **服务器状态 (Server State):** 任何源自后端的数据。**永远**优先使用 URL (Search Params) 和 **TanStack Query** 管理。
- **客户端状态 (Client State):** 纯粹的 UI 状态（如主题模式、侧边栏开关）。**Zustand** 用于管理需要跨组件共享的全局客户端状态。

### 3. 表单处理

遵循**黄金组合**: **React Hook Form** 负责性能和状态，**Zod** 负责校验和类型推断，**Shadcn/ui** 提供 UI 组件，**Server Actions** 处理最终提交。

## 📄 许可证

本项目使用 MIT 许可证。详情请见 [LICENSE](LICENSE) 文件。
