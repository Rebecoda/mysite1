import React from 'react';
import { motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const ResumeTimeline = () => {
  const timelineData = [
    {
      year: '2025 年 04 月 - 2025 年 07 月',
      title: '内容营销实习生',
      company: '汇量信息科技有限公司 (Mobvista)',
      description: '从事内容策划与输出、活动营销与传播执行等工作'
    },
    {
      year: '2024 年 12 月 - 2025 年 01 月',
      title: '私域运营实习生',
      company: '名创优品集团 - 色界美妆 (WOW COLOUR)',
      description: '参与内容制作、整合传播及选品复盘等私域运营项目'
    },
    {
      year: '2023 年 06 月 - 2023 年 09 月',
      title: '新媒体运营实习生',
      company: '广州咩都莓了网络科技有限公司',
      description: '负责公众号文案策划、私域运营及商业化变现等工作'
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{ marginBottom: spacing.section }}
    >
      <h2 style={textStyles.h2} className="text-center mb-12">工作经历</h2>
      
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* 时间线中心线 */}
          <div 
            className="absolute left-1/2 transform -translate-x-px w-px h-full"
            style={{ backgroundColor: colors.border.light }}
          />
          
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* 时间线节点 */}
              <div 
                className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2"
                style={{ 
                  backgroundColor: colors.background.primary,
                  borderColor: colors.primary[400]
                }}
              />
              
              {/* 内容卡片 */}
              <div 
                className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}
              >
                <div 
                  className="p-6 rounded-lg border"
                  style={{ 
                    backgroundColor: colors.background.tertiary,
                    borderColor: colors.border.light
                  }}
                >
                  <div 
                    className="text-sm font-medium mb-2"
                    style={{ color: colors.primary[400] }}
                  >
                    {item.year}
                  </div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ color: colors.text.primary }}
                  >
                    {item.title}
                  </h3>
                  <div 
                    className="text-sm mb-3"
                    style={{ color: colors.text.secondary }}
                  >
                    {item.company}
                  </div>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: colors.text.tertiary }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeTimeline; 