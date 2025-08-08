import React from 'react';
import { motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const ResumeTimeline = () => {
  const timelineData = [
    {
      year: '2025.04 – 2025.07',
      title: '内容营销实习生',
      company: 'Mobvista (Nativex)',
      background: 'Nativex 品牌传播中心，负责出海广告内容与行业传播。',
      achievements: [
        '主导并产出 10+ 篇深度选题，内容被行业媒体引用，增强品牌背书。',
        '参与 TikTok/Kwai 行业沙龙传播，活动曝光 2w+。',
        '搭建线索追踪与复盘机制，支持若干大客户建联转化。'
      ]
    },
    {
      year: '2024.12 – 2025.01',
      title: '私域运营实习生',
      company: '名创优品（WOW COLOUR）',
      background: '私域转化项目，负责内容与活动落地。',
      achievements: [
        '日均产出 4–6 组视觉内容；PV ↑90%、UV ↑102%、GMV ↑57%。',
        '年终活动 GMV 环比 ↑130%，门店拉新完成率 217%。',
        '商品加购件数提升 72%。'
      ]
    },
    {
      year: '2023.06 – 2023.09',
      title: '新媒体运营',
      company: '广州咩都莓了',
      background: '校园生活服务平台，负责内容拉新与私域转化。',
      achievements: [
        '独立完成 40+ 篇公众号选题，单篇最高 9k+ 阅读；月净增常读用户 6.7k。',
        '私域增粉 1k+，位列全司第一；商业化实现销售额 60w+（C端），项目收入 120w+。'
      ]
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{ 
        marginBottom: spacing[16], // 与作品集保持统一间距
        marginTop: spacing[8], // 与社交图标保持适当距离
      }}
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
                <motion.div 
                  className="p-6 rounded-lg border cursor-pointer"
                  style={{ 
                    backgroundColor: colors.background.tertiary,
                    borderColor: colors.border.light
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    backgroundColor: colors.background.secondary,
                    boxShadow: `0 4px 12px ${colors.opacity['12']}`,
                  }}
                  transition={{ duration: 0.2, ease: "ease-out" }}
                >
                  <div 
                    className="text-sm font-medium mb-2"
                    style={{ 
                      color: colors.primary[400],
                      fontFamily: typography.fontFamily.sans,
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.normal,
                      letterSpacing: typography.letterSpacing.wider,
                    }}
                  >
                    {item.year}
                  </div>
                  <h3 
                    className="text-lg font-semibold mb-2"
                    style={{ 
                      color: colors.text.primary,
                      fontFamily: typography.fontFamily.sans,
                      fontSize: typography.fontSize['2xl'],
                      fontWeight: typography.fontWeight.light,
                      lineHeight: typography.lineHeight.tight,
                    }}
                  >
                    {item.title}
                  </h3>
                  <div 
                    className="text-sm mb-3"
                    style={{ 
                      color: colors.text.secondary,
                      fontFamily: typography.fontFamily.sans,
                      fontSize: typography.fontSize.md,
                      fontWeight: typography.fontWeight.light,
                    }}
                  >
                    {item.company}
                  </div>
                  <p 
                    className="text-sm leading-relaxed mb-3"
                    style={{ 
                      color: colors.text.tertiary,
                      fontFamily: typography.fontFamily.sans,
                      fontSize: typography.fontSize.sm,
                      fontWeight: typography.fontWeight.light,
                      lineHeight: typography.lineHeight.body,
                    }}
                  >
                    {item.background}
                  </p>
                  {item.achievements.length > 0 && (
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <li 
                          key={idx}
                          className="text-sm"
                          style={{ 
                            color: colors.text.tertiary,
                            fontFamily: typography.fontFamily.sans,
                            fontSize: typography.fontSize.sm,
                            fontWeight: typography.fontWeight.light,
                            lineHeight: typography.lineHeight.body,
                          }}
                        >
                          • {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ResumeTimeline; 