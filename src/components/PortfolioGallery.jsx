import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Github } from 'lucide-react';
import { colors, textStyles, spacing } from '../../design-system/tokens/index.js';

const MotionSection = motion.section;
const MotionDiv = motion.div;
const MotionHeading = motion.h2;
const MotionLink = motion.a;

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 'cherrywink',
      title: 'Cherry Wink 独立站',
      category: '独立站 / 电商原型',
      description: '为发饰品牌搭建的独立站作品，包含首页、集合页、商品详情、购物车与结账占位流程。',
      image: '/cherrywink/assets/generated/claw-pink-sugar.svg',
      href: '/cherrywink/index.html',
      featured: true,
      cta: '查看站点',
      accent: 'commerce'
    },
    {
      id: 'workword',
      title: 'Workword 背单词插件',
      category: 'Chrome 插件 / 学习工具',
      description: '低打扰的网页背单词工具，支持底部复习条、Alt+W 快捷开关、选词加入、CSV/JSON 词书导入与本地复习记录。',
      href: 'https://github.com/Rebecoda/workword',
      preview: 'workword',
      cta: '查看 GitHub',
      accent: 'study'
    }
  ];

  return (
    <MotionSection 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      style={{ 
        marginBottom: spacing[16],
        marginTop: spacing[8], // 与工作经历保持适当距离
      }}
    >
      <MotionDiv 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <MotionHeading 
          className="section-title inline-block px-12 py-6 rounded-3xl relative overflow-hidden"
          style={{
            ...textStyles.h2,
            letterSpacing: '0',
            color: colors.text.primary,
            backgroundColor: colors.background.primary,
            boxShadow: `0 4px 20px ${colors.opacity['12']}`,
          }}
        >
          <span className="relative z-10">作品集</span>
        </MotionHeading>
      </MotionDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {portfolioItems.map((item, index) => (
          <MotionLink
            key={item.id}
            href={item.href || '#'}
            target={item.href?.startsWith('http') ? '_blank' : undefined}
            rel={item.href?.startsWith('http') ? 'noreferrer' : undefined}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            className="group portfolio-card-link block cursor-pointer no-underline"
            aria-label={item.href ? `打开 ${item.title}` : item.title}
          >
            <MotionDiv 
              className="portfolio-card rounded-lg border overflow-hidden cursor-pointer h-full"
              style={{ 
                backgroundColor: colors.background.tertiary,
                borderColor: colors.border.light
              }}
            >
              {/* 预览图 */}
              <div 
                className="h-48 flex items-center justify-center overflow-hidden relative"
                style={{
                  background: item.accent === 'commerce'
                    ? 'linear-gradient(135deg, #f6eee8 0%, #e7c7c7 48%, #b66c70 100%)'
                    : 'linear-gradient(135deg, #171a1f 0%, #2c333a 52%, #c5b99d 100%)'
                }}
              >
                {item.image ? (
                  <>
                    <div
                      className="absolute inset-x-4 top-4 h-8 rounded-full border opacity-80"
                      style={{ borderColor: 'rgba(89, 45, 49, 0.18)', backgroundColor: 'rgba(255, 251, 247, 0.56)' }}
                    />
                    <img
                      src={item.image}
                      alt={`${item.title} 预览图`}
                      className="relative h-36 w-36 object-contain drop-shadow-2xl transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  </>
                ) : item.preview === 'workword' ? (
                  <div className="workword-preview" aria-hidden="true">
                    <div className="workword-preview__top">
                      <BookOpen size={18} strokeWidth={1.8} />
                      <span>Workword</span>
                    </div>
                    <div className="workword-preview__word">
                      <span>priority</span>
                      <small>优先事项；优先权</small>
                    </div>
                    <div className="workword-preview__keys">
                      <span>Alt + W</span>
                      <span>Space</span>
                      <span>1 / 2 / 3</span>
                    </div>
                  </div>
                ) : (
                  <span
                    className="text-5xl opacity-30"
                    style={{ color: colors.text.tertiary }}
                    aria-hidden="true"
                  >
                    ◆
                  </span>
                )}
              </div>
              
              {/* 内容 */}
              <div className="p-6">
                <div 
                  className="text-xs font-medium mb-2 uppercase tracking-wide flex items-center justify-between gap-3"
                  style={{ color: colors.primary[400] }}
                >
                  <span>{item.category}</span>
                  {item.href ? (
                    item.id === 'workword' ? (
                      <Github
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    ) : (
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.8}
                        className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    )
                  ) : null}
                </div>
                <h3 
                  className="text-lg font-semibold mb-3"
                  style={{ color: colors.text.primary }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  style={{ color: colors.text.tertiary }}
                >
                  {item.description}
                </p>
                <div
                  className="mt-5 inline-flex items-center gap-2 text-sm"
                  style={{ color: colors.text.secondary }}
                >
                  <span>{item.cta}</span>
                  <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                </div>
              </div>
            </MotionDiv>
          </MotionLink>
        ))}
      </div>
    </MotionSection>
  );
};

export default PortfolioGallery; 
