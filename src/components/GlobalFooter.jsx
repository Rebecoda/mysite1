import React from 'react';
import { motion as Motion } from 'framer-motion';
import { colors, typography, spacing } from '../../design-system/tokens/index.js';

const GlobalFooter = () => {
  return (
    <Motion.footer 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 }}
      className="border-t pt-8"
      style={{ 
        borderColor: colors.border.light,
        marginTop: spacing[8],
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p 
            className="mb-4"
            style={{ 
              color: colors.text.secondary,
              fontFamily: typography.fontFamily.sans,
              fontSize: typography.fontSize.lg,
              fontWeight: typography.fontWeight.normal,
              lineHeight: typography.lineHeight.body,
            }}
          >
            © 2025 潘雍静（Rebecca） · 深圳 · 联系：13392871283@163.com
          </p>
          
          <p 
            style={{ 
              color: colors.text.secondary,
              fontFamily: typography.fontFamily.sans,
              fontSize: typography.fontSize.md,
              fontWeight: typography.fontWeight.normal,
              lineHeight: typography.lineHeight.body,
              opacity: 0.9,
            }}
          >
            简历仅供参考，转载请联系作者。
          </p>
        </div>
      </div>
    </Motion.footer>
  );
};

export default GlobalFooter; 
