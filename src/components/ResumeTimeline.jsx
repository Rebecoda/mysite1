import React from 'react';
import { motion as Motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const ResumeTimeline = () => {
  const experienceData = [
    {
      year: '2026.04 – 至今',
      title: '海外广告优化师',
      company: '上海飞书深诺数字科技集团股份有限公司',
      background: '负责 Anker 旗下 eufyMake 海外市场广告投放，目标是提升品牌曝光、用户注册与高意向转化，覆盖美、欧、澳等区域，主要渠道为 Google Ads 与 Meta Ads。',
      achievements: [
        '将受众分为 M2（冷流量）与 M3（高意向），基于不同 Funnel 结构调整兴趣标签、相似受众及再营销策略，实现流量分层运营与精准承接。',
        '动态优化预算、出价及广告形式（Search、PMax、Reels、Feed），控制 CPC $0.25-$1.04，同时提升 CPSession $0.60-$2.15、CPATC $111-$143。',
        '开展素材测试与策略迭代，结合静态图、视频及利益点/场景化创意优化广告表现，使 ATC CVR 提升至 0.56%-1.19%。',
        '从受众、素材、渠道、素材 x 人群维度，结合 CPsession、Cost、ROAS 等关键指标展开分析，并与客户进行周/月度复盘。',
        '持续优化投放结构与受众匹配，强化 M3 成交效率与 M2 拉新能力，推动整体转化链路稳定提升。'
      ]
    },
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
    <Motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8 }}
      style={{
        marginBottom: spacing[16],
        marginTop: spacing[8],
      }}
    >
      <Motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Motion.h2
          className="inline-block px-12 py-6 rounded-3xl cursor-pointer relative overflow-hidden"
          style={{
            ...textStyles.h2,
            color: colors.text.primary,
            backgroundColor: colors.background.primary,
            boxShadow: `0 4px 20px ${colors.opacity['12']}`,
          }}
          whileHover={{
            scale: 1.04,
            boxShadow: `0 12px 40px ${colors.opacity['20']}, 0 4px 20px ${colors.primary[100]}`,
            y: -4,
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <Motion.div
            className="absolute inset-0 opacity-0"
            style={{
              background: `linear-gradient(90deg, transparent, ${colors.primary[100]}, transparent)`,
            }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10">工作经历</span>
        </Motion.h2>
      </Motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {experienceData.map((item, index) => (
            <Motion.article
              key={`${item.company}-${item.year}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92 + index * 0.12, duration: 0.45, ease: 'easeOut' }}
              whileHover={{
                y: -10,
                scale: 1.015,
                borderColor: colors.border.medium,
                boxShadow: `0 22px 52px ${colors.opacity['12']}`,
              }}
              className="group relative h-full overflow-hidden rounded-lg border cursor-pointer"
              style={{
                backgroundColor: colors.background.tertiary,
                borderColor: colors.border.light,
                padding: spacing[7],
                minHeight: '320px',
                transform: 'translateZ(0)',
              }}
            >
              <Motion.div
                className="absolute left-0 right-0 top-0 h-px"
                style={{ backgroundColor: colors.primary[300] }}
                initial={{ scaleX: 0.28, opacity: 0.45 }}
                whileHover={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-7 flex items-start justify-between gap-5">
                  <div>
                    <div
                      className="mb-3"
                      style={{
                        ...textStyles.caption,
                        color: colors.text.secondary,
                        fontSize: typography.fontSize.md,
                      }}
                    >
                      Experience
                    </div>
                    <h3
                      style={{
                        color: colors.text.primary,
                        fontFamily: typography.fontFamily.sans,
                        fontSize: typography.fontSize['3xl'],
                        fontWeight: typography.fontWeight.normal,
                        lineHeight: typography.lineHeight.tight,
                        letterSpacing: typography.letterSpacing.normal,
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <Motion.div
                    className="shrink-0 rounded-lg border px-3 py-2 text-right"
                    style={{
                      color: colors.text.secondary,
                      borderColor: colors.border.light,
                      backgroundColor: colors.background.primary,
                      fontFamily: typography.fontFamily.sans,
                      fontSize: typography.fontSize.md,
                      fontWeight: typography.fontWeight.normal,
                      lineHeight: typography.lineHeight.label,
                      letterSpacing: typography.letterSpacing.wider,
                    }}
                    whileHover={{
                      borderColor: colors.border.medium,
                      color: colors.text.primary,
                    }}
                    transition={{ duration: 0.25, ease: 'easeOut' }}
                  >
                    {item.year}
                  </Motion.div>
                </div>

                <div
                  className="mb-5"
                  style={{
                    color: colors.text.primary,
                    fontFamily: typography.fontFamily.sans,
                    fontSize: typography.fontSize.xl,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.snug,
                    letterSpacing: typography.letterSpacing.wide,
                  }}
                >
                  {item.company}
                </div>

                <p
                  className="mb-6"
                  style={{
                    color: colors.text.secondary,
                    fontFamily: typography.fontFamily.sans,
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.body,
                    letterSpacing: typography.letterSpacing.wide,
                  }}
                >
                  {item.background}
                </p>

                <ul className="mt-auto space-y-3">
                  {item.achievements.map((achievement) => (
                    <li key={achievement} className="flex gap-3">
                      <span
                        className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: colors.primary[300] }}
                      />
                      <span
                        style={{
                          color: colors.text.primary,
                          fontFamily: typography.fontFamily.sans,
                          fontSize: typography.fontSize.lg,
                          fontWeight: typography.fontWeight.normal,
                          lineHeight: typography.lineHeight.body,
                          letterSpacing: typography.letterSpacing.wide,
                        }}
                      >
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <Motion.div
                className="pointer-events-none absolute inset-0 opacity-0"
                style={{
                  background: `linear-gradient(135deg, transparent 0%, ${colors.opacity['12']} 100%)`,
                }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
            </Motion.article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
};

export default ResumeTimeline;
