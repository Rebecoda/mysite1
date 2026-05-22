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
      <div className="flex flex-col items-center space-y-8">
        {/* 头像容器 - 包含圆圈动效 */}
        <div className="relative">
          {/* 外圈动效圆环 - 性能优化 */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${colors.primary[300]}`,
              opacity: 0.6,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.4, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* 中圈动效圆环 - 性能优化 */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${colors.primary[400]}`,
              opacity: 0.4,
            }}
            animate={{
              scale: [1, 1.25, 1],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          
          {/* 内圈动效圆环 - 性能优化 */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `2px solid ${colors.primary[500]}`,
              opacity: 0.5,
            }}
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8,
            }}
          />
          
          {/* 圆形头像 - 遵循设计系统 */}
          <motion.div
            className="relative w-36 h-36 rounded-full overflow-hidden"
            style={{
              border: `2px solid ${colors.border.light}`,
              backgroundColor: colors.background.tertiary,
              boxShadow: `0 8px 32px ${colors.opacity['16']}`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3, ease: "ease-out" }}
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
                fontSize: typography.fontSize['6xl'],
                fontWeight: typography.fontWeight.light,
              }}
            >
              潘
            </span>
          </div>
        </motion.div>
        </div>

        {/* 名字 - 遵循设计系统排版 */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          style={{
            color: colors.text.primary,
            fontFamily: typography.fontFamily.sans,
            fontSize: typography.fontSize['6xl'],
            fontWeight: typography.fontWeight.light,
            lineHeight: typography.lineHeight.tight,
            letterSpacing: typography.letterSpacing.tight,
            marginBottom: '24px',
          }}
        >
          Rebecca Pan
        </motion.h1>
      </div>
    </motion.section>
  );
};

export default AvatarHero;
