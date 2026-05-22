import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
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
      featured: true
    },
    {
      id: 1,
      title: '电商平台重构',
      category: 'Web 应用',
      description: '使用 React 和 Node.js 重构传统电商平台，提升用户体验和性能。',
      image: null
    },
    {
      id: 2,
      title: '设计系统构建',
      category: 'UI/UX',
      description: '为大型企业构建统一的设计系统，提高开发效率和品牌一致性。',
      image: null
    },
    {
      id: 3,
      title: 'AI 聊天机器人',
      category: 'AI 应用',
      description: '基于 OpenAI API 开发的智能客服系统，支持多轮对话和情感分析。',
      image: null
    },
    {
      id: 4,
      title: '移动端应用',
      category: '移动开发',
      description: '使用 React Native 开发的跨平台移动应用，支持 iOS 和 Android。',
      image: null
    },
    {
      id: 5,
      title: '数据可视化平台',
      category: '数据应用',
      description: '基于 D3.js 和 Vue.js 构建的实时数据监控和可视化平台。',
      image: null
    },
    {
      id: 6,
      title: '微服务架构',
      category: '后端开发',
      description: '设计并实现基于 Docker 和 Kubernetes 的微服务架构系统。',
      image: null
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
          className="inline-block px-12 py-6 rounded-3xl cursor-pointer relative overflow-hidden"
          style={{
            ...textStyles.h2,
            color: colors.text.primary,
            backgroundColor: colors.background.primary,
            boxShadow: `0 4px 20px ${colors.opacity['12']}`,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0 12px 40px ${colors.opacity['20']}, 0 4px 20px ${colors.primary[100]}`,
            y: -4,
          }}
          transition={{ duration: 0.4, ease: "ease-out" }}
        >
          <MotionDiv
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100 to-transparent opacity-0"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${colors.primary[100]}, transparent)`,
            }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10">作品集</span>
        </MotionHeading>
      </MotionDiv>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <MotionLink
            key={item.id}
            href={item.href || '#'}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            className="group block cursor-pointer no-underline"
            aria-label={item.href ? `打开 ${item.title}` : item.title}
          >
            <MotionDiv 
              className="rounded-lg border overflow-hidden cursor-pointer h-full"
              style={{ 
                backgroundColor: colors.background.tertiary,
                borderColor: colors.border.light
              }}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                boxShadow: `0 8px 24px ${colors.opacity['12']}`,
              }}
              transition={{ duration: 0.2, ease: "ease-out" }}
            >
              {/* 预览图 */}
              <div 
                className="h-48 flex items-center justify-center overflow-hidden relative"
                style={{
                  background: item.featured
                    ? 'linear-gradient(135deg, #f6eee8 0%, #e7c7c7 48%, #b66c70 100%)'
                    : colors.primary[200]
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
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.8}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
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
              </div>
            </MotionDiv>
          </MotionLink>
        ))}
      </div>
    </MotionSection>
  );
};

export default PortfolioGallery; 
