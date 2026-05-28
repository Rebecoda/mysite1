import React from 'react';
import { motion as Motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const ResumeTimeline = () => {
  const experienceData = [
    {
      year: '2026.04 – 至今',
      title: '海外广告优化师',
      company: '上海飞书深诺数字科技集团股份有限公司',
      background: '负责 eufyMake 美、欧、澳市场 Google Ads 与 Meta Ads 投放，优化从拉新到高意向转化的漏斗。',
      metrics: [
        { value: '$0.25-$1.04', label: 'CPC 区间' },
        { value: '0.56%-1.19%', label: 'ATC CVR' },
        { value: 'M2 / M3', label: '人群分层' },
      ],
      highlight: '以素材测试、再营销及周/月复盘持续提升高意向承接效率。'
    },
    {
      year: '2025.04 – 2025.07',
      title: '内容营销实习生',
      company: 'Mobvista (Nativex)',
      background: 'Nativex 品牌传播中心，负责出海广告内容与行业传播。',
      metrics: [
        { value: '10+', label: '深度选题' },
        { value: '2w+', label: '活动曝光' },
        { value: 'B2B', label: '线索承接' },
      ],
      highlight: '内容获行业媒体引用，并搭建线索追踪与传播复盘机制。'
    },
    {
      year: '2024.12 – 2025.01',
      title: '私域运营实习生',
      company: '名创优品（WOW COLOUR）',
      background: '私域转化项目，负责内容与活动落地。',
      metrics: [
        { value: '+130%', label: '活动 GMV 环比' },
        { value: '217%', label: '门店拉新完成率' },
        { value: '+72%', label: '商品加购件数' },
      ],
      highlight: '以日均 4-6 组内容驱动增长，PV +90%、UV +102%、GMV +57%。'
    },
    {
      year: '2023.06 – 2023.09',
      title: '新媒体运营',
      company: '广州咩都莓了',
      background: '校园生活服务平台，负责内容拉新与私域转化。',
      metrics: [
        { value: '120w+', label: '项目收入' },
        { value: '60w+', label: 'C 端销售额' },
        { value: '6.7k', label: '月净增常读用户' },
      ],
      highlight: '完成 40+ 篇选题，单篇最高 9k+ 阅读，私域增粉 1k+ 居全司第一。'
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
          className="section-title inline-block px-12 py-6 rounded-3xl relative overflow-hidden"
          style={{
            ...textStyles.h2,
            letterSpacing: '0',
            color: colors.text.primary,
            backgroundColor: colors.background.primary,
            boxShadow: `0 4px 20px ${colors.opacity['12']}`,
          }}
        >
          <span className="relative z-10">工作经历</span>
        </Motion.h2>
      </Motion.div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
          {experienceData.map((item, index) => (
            <Motion.article
              key={`${item.company}-${item.year}`}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92 + index * 0.12, duration: 0.45, ease: 'easeOut' }}
              className="experience-card relative h-full overflow-hidden rounded-lg border"
              style={{
                backgroundColor: colors.background.tertiary,
                borderColor: colors.border.light,
                padding: spacing[6],
              }}
            >
              <div className="experience-card__rule absolute left-0 right-0 top-0 h-px" />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-5 flex flex-col items-start justify-between gap-4 sm:flex-row">
                  <div>
                    <div
                      className="mb-2 flex items-center gap-2"
                      style={{
                        ...textStyles.caption,
                        color: colors.text.secondary,
                        fontSize: typography.fontSize.sm,
                        letterSpacing: '0',
                      }}
                    >
                      <span style={{ color: colors.primary[300] }}>0{index + 1}</span>
                      <span className="block h-px w-5" style={{ backgroundColor: colors.border.medium }} />
                      Experience
                    </div>
                    <h3
                      style={{
                        color: colors.text.primary,
                        fontFamily: typography.fontFamily.sans,
                        fontSize: typography.fontSize['2xl'],
                        fontWeight: typography.fontWeight.normal,
                        lineHeight: typography.lineHeight.tight,
                        letterSpacing: '0',
                      }}
                    >
                      {item.title}
                    </h3>
                  </div>

                  <div
                    className="shrink-0 rounded-lg border px-3 py-2 text-right"
                    style={{
                      color: colors.text.secondary,
                      borderColor: colors.border.light,
                      backgroundColor: colors.background.primary,
                      fontFamily: typography.fontFamily.sans,
                      fontSize: typography.fontSize.md,
                      fontWeight: typography.fontWeight.normal,
                      lineHeight: typography.lineHeight.label,
                      letterSpacing: '0',
                    }}
                  >
                    {item.year}
                  </div>
                </div>

                <div
                  className="mb-3"
                  style={{
                    color: colors.text.primary,
                    fontFamily: typography.fontFamily.sans,
                    fontSize: typography.fontSize.lg,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.snug,
                    letterSpacing: '0',
                  }}
                >
                  {item.company}
                </div>

                <p
                  className="mb-5"
                  style={{
                    color: colors.text.secondary,
                    fontFamily: typography.fontFamily.sans,
                    fontSize: typography.fontSize.md,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.body,
                    letterSpacing: '0',
                  }}
                >
                  {item.background}
                </p>

                <dl className="experience-metrics mb-4 grid grid-cols-3 gap-2">
                  {item.metrics.map((metric) => (
                    <div key={metric.label} className="metric-cell rounded-md border px-3 py-3">
                      <dt
                        className="mb-2"
                        style={{
                          color: colors.text.primary,
                          fontFamily: typography.fontFamily.sans,
                          fontSize: typography.fontSize.xl,
                          lineHeight: typography.lineHeight.snug,
                          letterSpacing: '0',
                        }}
                      >
                        {metric.value}
                      </dt>
                      <dd
                        style={{
                          color: colors.text.tertiary,
                          fontFamily: typography.fontFamily.sans,
                          fontSize: typography.fontSize.sm,
                          lineHeight: typography.lineHeight.label,
                          letterSpacing: '0',
                        }}
                      >
                        {metric.label}
                      </dd>
                    </div>
                  ))}
                </dl>

                <p
                  className="mt-auto border-t pt-4"
                  style={{
                    borderColor: colors.border.light,
                    color: colors.text.secondary,
                    fontFamily: typography.fontFamily.sans,
                    fontSize: typography.fontSize.md,
                    fontWeight: typography.fontWeight.normal,
                    lineHeight: typography.lineHeight.body,
                    letterSpacing: '0',
                  }}
                >
                  {item.highlight}
                </p>
              </div>
            </Motion.article>
          ))}
        </div>
      </div>
    </Motion.section>
  );
};

export default ResumeTimeline;
