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
        {/* 圆形头像 - 遵循设计系统 */}
        <motion.div
          className="w-32 h-32 rounded-full overflow-hidden"
          style={{
            border: `1px solid ${colors.border.light}`,
            backgroundColor: colors.background.tertiary,
            boxShadow: `0 0 0 1px ${colors.opacity['12']}`,
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.18, ease: "ease-out" }}
        >
          {/* 头像图片 - 请将新图片文件放置在此路径 */}
          <img 
            src="/avatar.jpg" 
            alt="Rebecca 头像"
            className="w-full h-full object-cover"
            style={{ 
              backgroundColor: colors.background.secondary,
            }}
            onError={(e) => {
              // 如果图片加载失败，显示占位符
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* 占位符 - 遵循设计系统背景色 */}
          <div 
            className="w-full h-full flex items-center justify-center"
            style={{ 
              backgroundColor: colors.background.secondary,
              display: 'none', // 默认隐藏，图片加载失败时显示
            }}
          >
            <span 
              style={{ 
                color: colors.text.secondary,
                fontFamily: typography.fontFamily.sans,
                fontSize: typography.fontSize['5xl'],
                fontWeight: typography.fontWeight.light,
              }}
            >
              潘
            </span>
          </div>
        </motion.div>

        {/* 名字 - 遵循设计系统排版 */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            color: colors.text.primary,
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize['5xl'],
            fontWeight: typography.fontWeight.light,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
          }}
        >
          潘雍静
        </motion.h1>

        {/* 副标题 - 遵循设计系统 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          style={{
            color: colors.text.secondary,
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize.lg,
            fontWeight: typography.fontWeight.light,
            lineHeight: typography.lineHeight.body,
            letterSpacing: typography.letterSpacing.wide,
          }}
        >
          Rebecca
        </motion.p>
      </div>
    </motion.section>
  );
};

export default AvatarHero;
