// 设计系统 Tokens 统一导出
export { colors } from './colors.js';
export { spacing, gaps, padding, margin, layout } from './spacing.js';
export { typography, textStyles } from './typography.js';

// 默认导出所有 tokens
import { colors } from './colors.js';
import { spacing, gaps, padding, margin, layout } from './spacing.js';
import { typography, textStyles } from './typography.js';

const tokens = {
  colors,
  spacing,
  gaps,
  padding,
  margin,
  layout,
  typography,
  textStyles,
};

export default tokens; 