import React from 'react';
import { motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const GlobalFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      className="border-t pt-8"
      style={{ 
        borderColor: colors.border.light,
        marginTop: spacing.section
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p 
            className="mb-4"
            style={{ 
              ...textStyles.bodySmall,
              color: colors.text.secondary
            }}
          >
            © {currentYear} 张三. 保留所有权利.
          </p>
          
          <div 
            className="text-sm"
            style={{ color: colors.text.tertiary }}
          >
            <span>由 React + Vite 构建</span>
            <span className="mx-2">•</span>
            <span>设计系统驱动</span>
            <span className="mx-2">•</span>
            <span>极简主义</span>
          </div>
          
          <div className="mt-4">
            <a 
              href="#"
              className="text-sm transition-colors duration-200 hover:underline"
              style={{ color: colors.text.secondary }}
            >
              隐私政策
            </a>
            <span className="mx-2" style={{ color: colors.text.tertiary }}>•</span>
            <a 
              href="#"
              className="text-sm transition-colors duration-200 hover:underline"
              style={{ color: colors.text.secondary }}
            >
              使用条款
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default GlobalFooter; 