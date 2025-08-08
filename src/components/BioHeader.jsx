import React from 'react';
import { motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const BioHeader = ({ name = "Rebecca", tagline = "全栈工程师 / 设计系统专家 / AI 爱好者" }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="text-center"
      style={{ marginBottom: spacing.section }}
    >
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        style={textStyles.h1}
        className="mb-4"
      >
        {name}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        style={{ 
          ...textStyles.body,
          color: colors.text.secondary,
          maxWidth: '600px',
          margin: '0 auto'
        }}
      >
        {tagline}
      </motion.p>
    </motion.section>
  );
};

export default BioHeader; 