// 基于 Figma 设计稿的颜色 tokens
export const colors = {
  // 主色调 - 来自设计稿
  primary: {
    50: '#F7F8F4',   // 最浅的米色
    100: '#E9EBDF',  // 主色调
    200: '#CBCCC4',  // 次要文本色
    300: '#8B867F',  // 边框色
    400: '#433E38',  // 深边框色
    500: '#282522',  // 渐变背景色
    600: '#242424',  // 卡片背景色
    700: '#0D0D0D',  // 深色背景
    800: '#151515',  // 主背景色
    900: '#000000',  // 纯黑色
  },
  
  // 背景色系统
  background: {
    primary: '#151515',    // 主背景
    secondary: '#0D0D0D',  // 次要背景
    tertiary: '#242424',   // 卡片背景
    overlay: 'rgba(247, 248, 244, 0.6)', // 半透明覆盖层
    gradient: {
      from: '#282522',
      to: 'transparent',
    },
  },
  
  // 文本色系统
  text: {
    primary: '#E9EBDF',    // 主要文本
    secondary: '#CBCCC4',  // 次要文本
    tertiary: '#8B867F',   // 辅助文本
    inverse: '#151515',    // 反色文本
  },
  
  // 边框色系统
  border: {
    light: '#433E38',      // 浅边框
    medium: '#8B867F',     // 中等边框
    dark: '#433E38',       // 深边框
    overlay: 'rgba(21, 21, 21, 0.12)', // 覆盖层边框
  },
  
  // 状态色
  status: {
    success: {
      50: '#f0fdf4',
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
    },
    warning: {
      50: '#fffbeb',
      100: '#fef3c7',
      500: '#f59e0b',
      600: '#d97706',
    },
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
    },
  },
  
  // 透明度
  opacity: {
    12: 'rgba(233, 235, 223, 0.12)',
    20: 'rgba(233, 235, 223, 0.2)',
    60: 'rgba(233, 235, 223, 0.6)',
  },
};

export default colors; 