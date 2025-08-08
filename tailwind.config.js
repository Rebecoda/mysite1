/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./design-system/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主色调 - 基于 Figma 设计稿
        primary: {
          50: '#F7F8F4',
          100: '#E9EBDF',
          200: '#CBCCC4',
          300: '#8B867F',
          400: '#433E38',
          500: '#282522',
          600: '#242424',
          700: '#0D0D0D',
          800: '#151515',
          900: '#000000',
        },
        // 背景色
        background: {
          primary: '#151515',
          secondary: '#0D0D0D',
          tertiary: '#242424',
          overlay: 'rgba(247, 248, 244, 0.6)',
        },
        // 文本色
        text: {
          primary: '#E9EBDF',
          secondary: '#CBCCC4',
          tertiary: '#8B867F',
          inverse: '#151515',
        },
        // 边框色
        border: {
          light: '#433E38',
          medium: '#8B867F',
          dark: '#433E38',
          overlay: 'rgba(21, 21, 21, 0.12)',
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
      },
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
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          '"Liberation Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        // 基于设计稿的字体大小
        'xs': '11.0625px',
        'sm': '11.25px',
        'base': '11.4375px',
        'md': '14.75px',
        'lg': '16.59375px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '33.609375px',
        '5xl': '44.25px',
        '6xl': '44.4375px',
        '7xl': '45.9375px',
        '8xl': '67.078125px',
      },
      spacing: {
        // 基于设计稿的间距
        'page': '280px',
        'section': '80px',
        'container': '40px',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 