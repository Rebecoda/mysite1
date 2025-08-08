import { useState, useEffect } from 'react';

/**
 * 媒体查询 Hook
 * @param {string} query - CSS 媒体查询字符串
 * @returns {boolean} - 是否匹配查询条件
 */
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    
    // 设置初始值
    setMatches(media.matches);

    // 创建事件监听器
    const listener = (event) => {
      setMatches(event.matches);
    };

    // 添加事件监听器
    media.addEventListener('change', listener);

    // 清理函数
    return () => {
      media.removeEventListener('change', listener);
    };
  }, [query]);

  return matches;
};

// 预定义的断点 Hook
export const useBreakpoint = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');
  const isLargeDesktop = useMediaQuery('(min-width: 1440px)');

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
  };
};

// 主题 Hook
export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // 从 localStorage 获取主题，默认为 'light'
    return localStorage.getItem('theme') || 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // 更新 document 的 class
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  useEffect(() => {
    // 初始化主题
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return { theme, toggleTheme };
};

export default useMediaQuery;
