import React from 'react';
import { motion as Motion } from 'framer-motion';
import { colors, typography, spacing } from '../../design-system/tokens/index.js';

const BioHeader = () => {
  return (
    <Motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center"
      style={{ marginBottom: spacing.section }}
    >
      {/* 宣言 - 遵循设计系统 */}
      <Motion.h2 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        style={{
          color: colors.text.primary,
          fontFamily: typography.fontFamily.sans,
          fontSize: typography.fontSize['3xl'],
          fontWeight: typography.fontWeight.normal,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.wide,
          maxWidth: '900px',
          margin: '0 auto 32px',
          padding: '0 24px',
        }}
      >
        观察世界，认识自我。
      </Motion.h2>
      
      {/* 联系信息 - 遵循设计系统 */}
      <Motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{
          color: colors.text.secondary,
          fontFamily: typography.fontFamily.sans,
          fontSize: typography.fontSize.xl,
          fontWeight: typography.fontWeight.normal,
          lineHeight: typography.lineHeight.relaxed,
          letterSpacing: typography.letterSpacing.wider,
          opacity: 0.95,
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
      </Motion.div>
    </Motion.section>
  );
};

export default BioHeader; 
