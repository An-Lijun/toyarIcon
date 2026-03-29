# toyarIcon

一个用于 Web 的图标库，支持 Vue 组件和字体图标两种使用方式。

## 文档地址

https://an-lijun.github.io/toyarIcon/index.html

## 特性

- 🎨 支持 SVG 图标转换为 Vue 组件
- 🔤 支持生成字体图标（TTF、WOFF、WOFF2、EOT）
- 📦 轻量级，按需引入
- 🚀 基于 Vite 构建，打包高效
- 💡 支持自定义大小和颜色
- 📱 响应式设计

## 安装

```bash
npm i toyaricon
```

## 使用方式

### 方式一：Vue 组件使用

```vue
<script setup>
import { TyiAddFill, TyiBellLine } from 'toyaricon'
</script>

<template>
  <TyiAddFill :size="20" color="#ff0000" />
  <TyiBellLine :size="24" />
</template>
```

### 方式二：字体图标使用

```vue
<script setup>
import 'toyaricon/dist/tyi.scss'
</script>

<template>
  <i class="tyi tyi-add-fill"></i>
  <i class="tyi tyi-bell-line"></i>
</template>
```

## 组件 Props

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| size | Number | 12 | 图标大小（像素） |
| color | String | - | 图标颜色 |
| icon | String | "" | 额外的类名 |

## 开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建项目
npm run build

# 预览构建结果
npm run preview

# 代码检查
npm run lint

# 代码格式化
npm run format
```

## 项目结构

```
toyarIcon/
├── src/
│   ├── assets/
│   │   ├── icons/          # SVG 图标源文件
│   │   └── index.css       # 基础样式
│   ├── package/
│   │   ├── src/            # 生成的 Vue 组件
│   │   ├── utils/          # 工具函数
│   │   └── index.js        # 组件导出文件
│   ├── App.vue             # 示例应用
│   └── main.js             # 入口文件
├── dist/                   # 构建输出目录
├── docs/                   # 文档目录
├── genIcon.js             # 图标组件生成脚本
├── svgToIcon.js           # 字体生成脚本
├── vite.config.js         # Vite 配置
└── package.json           # 项目配置
```

## 添加新图标

1. 将 SVG 文件放入 `src/assets/icons/` 目录
2. 运行 `npm run build` 自动生成组件和字体

## 许可证

MIT License

## 贡献

欢迎提交 Issue 和 Pull Request！
