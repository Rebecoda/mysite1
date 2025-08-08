import React from 'react';
import { motion } from 'framer-motion';
import { colors, typography, spacing } from '../../design-system/tokens/index.js';

const BioHeader = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center"
      style={{ marginBottom: spacing.section }}
    >
      {/* 宣言 - 遵循设计系统 */}
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          color: colors.text.primary,
          fontFamily: typography.fontFamily.sans,
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.light,
          lineHeight: typography.lineHeight.body,
          letterSpacing: typography.letterSpacing.wide,
          maxWidth: '800px',
          margin: '0 auto 24px',
        }}
      >
        数据驱动的增长与内容运营，擅长私域转化与品牌传播。
      </motion.h2>
      
      {/* 联系信息 - 遵循设计系统 */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{
          color: colors.text.tertiary,
          fontFamily: typography.fontFamily.sans,
          fontSize: typography.fontSize.sm,
          fontWeight: typography.fontWeight.light,
          lineHeight: typography.lineHeight.label,
          letterSpacing: typography.letterSpacing.wider,
          opacity: 0.6,
          marginBottom: spacing[16], // 增加底部间距，与社交图标保持统一距离
        }}
      >
        电话 · 13392871283（微信同号） | 邮箱 · 13392871283@163.com<br />
        地区 · 深圳 | 求职意向 · 营销 / 内容运营 / 产品运营（实习）
      </motion.div>
    </motion.section>
  );
};

export default BioHeader; 