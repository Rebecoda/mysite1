// 🌟 设计系统主入口 - 基于 Figma 设计稿
// 统一导出所有设计系统资源

// 导出 Tokens
export * from './tokens/index.js';
export { default as tokens } from './tokens/index.js';

// 导出组件
export * from './components/index.js';

// 导出 Hooks
export * from './hooks/useMediaQuery.js';

// 默认导出整个设计系统
import tokens from './tokens/index.js';
import * as components from './components/index.js';
import * as hooks from './hooks/useMediaQuery.js';

const designSystem = {
  tokens,
  components,
  hooks,
  // 版本信息
  version: '1.0.0',
  // 设计稿信息
  figma: {
    fileKey: 'v8MuZOm8LE442ZtUQbVWzJ',
    nodeId: '0:1',
    name: 'Retool Design System',
  },
  // 使用示例
  examples: {
    // 快速开始
    quickStart: `
import { Button, Input, Card, colors, spacing, typography } from './design-system';

// 使用组件
<Button variant="primary" size="lg">开始构建</Button>
<Input placeholder="输入你的想法" />
<Card variant="elevated">卡片内容</Card>

// 使用 tokens
<div style={{ 
  color: colors.text.primary, 
  margin: spacing[4],
  fontFamily: typography.fontFamily.sans 
}}>
  使用设计 tokens
</div>
    `,
    // 主题使用
    theme: `
import { useTheme, useBreakpoint } from './design-system';

function App() {
  const { theme, toggleTheme } = useTheme();
  const { isMobile, isDesktop } = useBreakpoint();
  
  return (
    <div className={theme === 'dark' ? 'dark' : 'light'}>
      <button onClick={toggleTheme}>切换主题</button>
    </div>
  );
}
    `,
  },
};

export default designSystem; 