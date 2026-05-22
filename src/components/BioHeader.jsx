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
          fontSize: typography.fontSize['2xl'],
          fontWeight: typography.fontWeight.light,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.wide,
          maxWidth: '900px',
          margin: '0 auto 32px',
          padding: '0 24px',
        }}
      >
        观察世界，认识自我。
      </motion.h2>
      
      {/* 联系信息 - 遵循设计系统 */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{
          color: colors.text.tertiary,
          fontFamily: typography.fontFamily.sans,
          fontSize: typography.fontSize.lg,
          fontWeight: typography.fontWeight.light,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.wider,
          opacity: 0.7,
          marginBottom: spacing[16],
          padding: '0 24px',
        }}
      >
        <div style={{ marginBottom: '16px' }}>
          电话 · 13392871283（微信同号） | 邮箱 · 13392871283@163.com
        </div>
        <div>
          地区 · 深圳 | 求职意向 · 营销 / 内容运营 / 产品运营（实习）
        </div>
      </motion.div>
    </motion.section>
  );
};

export default BioHeader; 