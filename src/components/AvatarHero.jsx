import React from 'react';
import { motion } from 'framer-motion';
import { colors, spacing, typography } from '../../design-system/tokens/index.js';

const AvatarHero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ marginBottom: spacing.section }}
      className="text-center"
    >
      <div className="flex flex-col items-center space-y-6">
        {/* 圆形头像 */}
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden border-4"
          style={{
            borderColor: colors.border.light,
            backgroundColor: colors.background.tertiary,
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {/* 占位符 - 淡灰色块 */}
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ backgroundColor: colors.background.secondary }}
          >
            <span 
              className="text-4xl font-light"
              style={{ 
                color: colors.text.secondary,
                fontFamily: typography.fontFamily.sans
              }}
            >
              R
            </span>
          </div>
        </motion.div>

        {/* 名字 */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-4xl font-bold"
          style={{
            color: colors.text.primary,
            fontFamily: typography.fontFamily.sans,
            fontWeight: typography.fontWeight.bold,
          }}
        >
          Rebecca
        </motion.h1>

        {/* 一句话简介 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-lg max-w-2xl"
          style={{
            color: colors.text.secondary,
            fontFamily: typography.fontFamily.sans,
            fontWeight: typography.fontWeight.light,
            lineHeight: typography.lineHeight.relaxed,
          }}
        >
          AI 爱好者 · 市场营销 · 新媒体运营
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AvatarHero;
