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
        marginTop: spacing[8], // 与联系我组件保持统一间距
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p 
            className="mb-4"
            style={{ 
              color: colors.text.tertiary,
              fontFamily: typography.fontFamily.sans,
              fontSize: typography.fontSize.sm,
              fontWeight: typography.fontWeight.light,
              lineHeight: typography.lineHeight.label,
            }}
          >
            © 2025 潘雍静（Rebecca） · 深圳 · 联系：13392871283@163.com
          </p>
          
          <p 
            style={{ 
              color: colors.text.tertiary,
              fontFamily: typography.fontFamily.sans,
              fontSize: typography.fontSize.xs,
              fontWeight: typography.fontWeight.light,
              lineHeight: typography.lineHeight.label,
              opacity: 0.6,
            }}
          >
            简历仅供参考，转载请联系作者。
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default GlobalFooter; 