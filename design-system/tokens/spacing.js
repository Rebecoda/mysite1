// 基于 Figma 设计稿的间距 tokens
export const spacing = {
  // 基础间距单位 (基于设计稿中的常用值)
  0: '0px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  7: '28px',
  8: '32px',
  9: '36px',
  10: '40px',
  12: '48px',
  14: '56px',
  16: '64px',
  20: '80px',
  24: '96px',
  28: '112px',
  32: '128px',
  36: '144px',
  40: '160px',
  44: '176px',
  48: '192px',
  52: '208px',
  56: '224px',
  60: '240px',
  64: '256px',
  72: '288px',
  80: '320px',
  96: '384px',
  120: '480px',
  160: '640px',
  200: '800px',
  240: '960px',
  280: '1120px',
  320: '1280px',
  360: '1440px',
  400: '1600px',
  440: '1760px',
  480: '1920px',
};

// 设计稿中的特定间距
export const layout = {
  // 页面布局
  pagePadding: spacing[280], // 280px 页面边距
  sectionGap: spacing[80],   // 80px 区块间距
  containerGap: spacing[40], // 40px 容器间距
  
  // 组件间距
  buttonPadding: {
    sm: `${spacing[3]} ${spacing[6]}`,
    md: `${spacing[4]} ${spacing[8]}`,
    lg: `${spacing[6]} ${spacing[12]}`,
  },
  
  cardPadding: {
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
    xl: spacing[10],
  },
  
  // 网格间距
  gridGap: {
    xs: spacing[2],
    sm: spacing[4],
    md: spacing[6],
    lg: spacing[8],
    xl: spacing[12],
  },
};

// 常用间距别名
export const gaps = {
  xs: spacing[2],    // 8px
  sm: spacing[3],    // 12px
  md: spacing[4],    // 16px
  lg: spacing[6],    // 24px
  xl: spacing[8],    // 32px
  '2xl': spacing[12], // 48px
  '3xl': spacing[16], // 64px
  '4xl': spacing[20], // 80px
};

// 内边距
export const padding = {
  xs: spacing[2],    // 8px
  sm: spacing[3],    // 12px
  md: spacing[4],    // 16px
  lg: spacing[6],    // 24px
  xl: spacing[8],    // 32px
  '2xl': spacing[12], // 48px
  '3xl': spacing[16], // 64px
};

// 外边距
export const margin = {
  xs: spacing[2],    // 8px
  sm: spacing[3],    // 12px
  md: spacing[4],    // 16px
  lg: spacing[6],    // 24px
  xl: spacing[8],    // 32px
  '2xl': spacing[12], // 48px
  '3xl': spacing[16], // 64px
};

export default spacing; 