// 基于 Figma 设计稿的字体排版 tokens
export const typography = {
  // 字体大小 - 来自设计稿中的实际值
  fontSize: {
    xs: '11.0625px',      // Platform 标签
    sm: '11.25px',        // Audience 标签
    base: '11.4375px',    // Resources 标签
    md: '14.75px',        // 正文小号
    lg: '16.59375px',     // 正文
    xl: '20px',           // 标题小号
    '2xl': '24px',        // 标题
    '3xl': '30px',        // 大标题
    '4xl': '33.609375px', // 特大标题
    '5xl': '44.25px',     // 超大标题
    '6xl': '44.4375px',   // 超大标题
    '7xl': '45.9375px',   // 超大标题
    '8xl': '67.078125px', // 主标题
  },
  
  // 行高 - 来自设计稿
  lineHeight: {
    none: '1',
    tight: '1.0971428903592686em',    // 标题行高
    snug: '1.1199999491373698em',     // 标题行高
    normal: '1.1246861697684216em',   // 标题行高
    relaxed: '1.1270440024094457em',  // 主标题行高
    loose: '1.134177249527514em',     // 标题行高
    body: '1.6271186440677967em',     // 正文行高
    label: '1.3016948807710982em',    // 标签行高
  },
  
  // 字体粗细 - 来自设计稿
  fontWeight: {
    thin: '100',
    extralight: '200',
    light: '300',         // 设计稿主要使用 300
    normal: '400',        // 标签使用 400
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  
  // 字体族 - 设计稿使用 Inter
  fontFamily: {
    sans: [
      'Inter',
      'ui-sans-serif',
      'system-ui',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      '"Noto Sans"',
      'sans-serif',
    ].join(', '),
    mono: [
      'ui-monospace',
      'SFMono-Regular',
      'Menlo',
      'Monaco',
      'Consolas',
      '"Liberation Mono"',
      '"Courier New"',
      'monospace',
    ].join(', '),
  },
  
  // 字间距 - 来自设计稿
  letterSpacing: {
    tighter: '-2.361425563724286%',  // 主标题
    tight: '-1.0847457384659072%',   // 正文
    normal: '-1.0711297496758412%',  // 标题
    wide: '1.0847458058157884%',     // 正文
    wider: '1.0666666428248088%',    // 标签
    widest: '1.0491803044178447%',   // 标签
  },
  
  // 文本变换
  textTransform: {
    uppercase: 'uppercase', // 标签使用大写
  },
};

// 预设文本样式 - 基于设计稿中的具体样式
export const textStyles = {
  // 标题样式
  h1: {
    fontSize: typography.fontSize['8xl'],
    lineHeight: typography.lineHeight.relaxed,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.tighter,
    fontFamily: typography.fontFamily.sans,
  },
  h2: {
    fontSize: typography.fontSize['7xl'],
    lineHeight: typography.lineHeight.loose,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.normal,
    fontFamily: typography.fontFamily.sans,
  },
  h3: {
    fontSize: typography.fontSize['4xl'],
    lineHeight: typography.lineHeight.normal,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.normal,
    fontFamily: typography.fontFamily.sans,
  },
  h4: {
    fontSize: typography.fontSize['3xl'],
    lineHeight: typography.lineHeight.tight,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.normal,
    fontFamily: typography.fontFamily.sans,
  },
  h5: {
    fontSize: typography.fontSize['2xl'],
    lineHeight: typography.lineHeight.snug,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.normal,
    fontFamily: typography.fontFamily.sans,
  },
  h6: {
    fontSize: typography.fontSize.xl,
    lineHeight: typography.lineHeight.snug,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.normal,
    fontFamily: typography.fontFamily.sans,
  },
  
  // 正文样式
  body: {
    fontSize: typography.fontSize.lg,
    lineHeight: typography.lineHeight.body,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.wide,
    fontFamily: typography.fontFamily.sans,
  },
  bodySmall: {
    fontSize: typography.fontSize.md,
    lineHeight: typography.lineHeight.body,
    fontWeight: typography.fontWeight.light,
    letterSpacing: typography.letterSpacing.wide,
    fontFamily: typography.fontFamily.sans,
  },
  
  // 标签样式
  label: {
    fontSize: typography.fontSize.sm,
    lineHeight: typography.lineHeight.label,
    fontWeight: typography.fontWeight.normal,
    letterSpacing: typography.letterSpacing.wider,
    textTransform: typography.textTransform.uppercase,
    fontFamily: typography.fontFamily.sans,
  },
  caption: {
    fontSize: typography.fontSize.xs,
    lineHeight: typography.lineHeight.label,
    fontWeight: typography.fontWeight.normal,
    letterSpacing: typography.letterSpacing.widest,
    textTransform: typography.textTransform.uppercase,
    fontFamily: typography.fontFamily.sans,
  },
};

export default typography; 