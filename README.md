# 🌟 设计系统 - 基于 Figma 设计稿

这是一个基于 Figma 设计稿构建的现代化设计系统，采用深色主题，专为构建内部软件和 AI 应用而设计。

## 📋 项目结构

```
├── design-system/              # 🌟 设计系统主目录
│   ├── components/             # 可复用 UI 组件
│   │   ├── Button.jsx         # 按钮组件
│   │   ├── Input.jsx          # 输入框组件
│   │   ├── Card.jsx           # 卡片组件
│   │   └── index.js           # 统一导出所有组件
│   │
│   ├── tokens/                 # 🎨 设计 Tokens
│   │   ├── colors.js          # 颜色系统
│   │   ├── spacing.js         # 间距系统
│   │   ├── typography.js      # 字体排版系统
│   │   └── index.js           # 统一导出所有 tokens
│   │
│   ├── hooks/                  # 通用 UI hooks
│   │   └── useMediaQuery.js   # 媒体查询和主题 hooks
│   │
│   └── index.js                # ✨ 顶层导出
│
├── src/
│   ├── App.jsx                # 设计系统预览页面
│   └── index.css              # 全局样式
│
└── tailwind.config.js         # Tailwind CSS 配置
```

## 🎨 设计特色

### 颜色系统
- **主色调**: 基于 Retool 设计稿的深色主题
- **文本色**: 高对比度的米色系文本
- **状态色**: 完整的成功、警告、错误状态色
- **透明度**: 支持多种透明度级别

### 字体系统
- **字体族**: Inter 字体
- **字体大小**: 从 11px 到 67px 的完整尺寸体系
- **字重**: 支持 100-900 的完整字重范围
- **行高**: 针对不同文本类型的优化行高

### 间距系统
- **基础单位**: 4px 网格系统
- **页面布局**: 280px 页面边距
- **组件间距**: 标准化的组件间距

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

## 📖 使用指南

### 导入设计系统
```javascript
import { 
  Button, 
  Input, 
  Card,
  colors,
  spacing,
  typography,
  useTheme,
  useBreakpoint 
} from './design-system';
```

### 使用组件
```jsx
// 按钮组件
<Button variant="primary" size="lg">
  开始构建
</Button>

// 输入框组件
<Input placeholder="请输入内容..." />

// 卡片组件
<Card variant="elevated" padding="lg">
  <Card.Title>卡片标题</Card.Title>
  <Card.Content>卡片内容</Card.Content>
</Card>
```

### 使用 Tokens
```jsx
// 颜色
<div style={{ color: colors.text.primary }}>
  主要文本
</div>

// 间距
<div style={{ margin: spacing[4] }}>
  标准间距
</div>

// 字体
<h1 style={typography.textStyles.h1}>
  主标题
</h1>
```

### 使用 Hooks
```jsx
function App() {
  const { theme, toggleTheme } = useTheme();
  const { isMobile, isDesktop } = useBreakpoint();
  
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>切换主题</button>
      {isMobile && <MobileLayout />}
      {isDesktop && <DesktopLayout />}
    </div>
  );
}
```

## 🎯 组件 API

### Button 组件
```jsx
<Button
  variant="primary" | "secondary" | "outline" | "ghost" | "danger"
  size="sm" | "md" | "lg" | "xl"
  disabled={boolean}
  loading={boolean}
  icon={ReactNode}
  iconPosition="left" | "right"
  fullWidth={boolean}
  onClick={function}
>
  按钮文本
</Button>
```

### Input 组件
```jsx
<Input
  type="text" | "password" | "email" | "number"
  variant="default" | "error" | "success"
  size="sm" | "md" | "lg"
  disabled={boolean}
  error={string}
  success={string}
  leftIcon={ReactNode}
  rightIcon={ReactNode}
  placeholder={string}
/>
```

### Card 组件
```jsx
<Card
  variant="default" | "elevated" | "outlined" | "flat" | "overlay"
  padding="none" | "sm" | "md" | "lg" | "xl"
  interactive={boolean}
  onClick={function}
>
  <Card.Header>
    <Card.Title>标题</Card.Title>
    <Card.Subtitle>副标题</Card.Subtitle>
  </Card.Header>
  <Card.Content>内容</Card.Content>
  <Card.Footer>底部</Card.Footer>
</Card>
```

## 🎨 设计原则

1. **一致性**: 所有组件遵循统一的设计语言
2. **可访问性**: 支持键盘导航和屏幕阅读器
3. **响应式**: 适配各种屏幕尺寸
4. **性能**: 优化的动画和交互效果
5. **可扩展**: 易于添加新组件和功能

## 🔧 技术栈

- **React 18**: 现代 React 开发
- **Vite**: 快速的构建工具
- **Tailwind CSS**: 实用优先的 CSS 框架
- **Framer Motion**: 流畅的动画库
- **Phosphor Icons**: 丰富的图标库
- **Tailwind Variants**: 类型安全的组件变体

## 📱 响应式设计

设计系统支持以下断点：
- **Mobile**: < 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px - 1279px
- **Large Desktop**: 1280px - 1919px
- **XLarge Desktop**: ≥ 1920px

## 🎯 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**基于 Figma 设计稿构建** | **版本 1.0.0**
