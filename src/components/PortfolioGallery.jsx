import React from 'react';
import { motion } from 'framer-motion';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';

const PortfolioGallery = () => {
  const portfolioItems = [
    {
      id: 1,
      title: '电商平台重构',
      category: 'Web 应用',
      description: '使用 React 和 Node.js 重构传统电商平台，提升用户体验和性能。',
      image: null // 使用占位符
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
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.0 }}
      style={{ marginBottom: spacing.section }}
    >
      <h2 style={textStyles.h2} className="text-center mb-12">作品集</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            className="group cursor-pointer"
          >
            <div 
              className="rounded-lg border overflow-hidden transition-all duration-300 hover:shadow-lg"
              style={{ 
                backgroundColor: colors.background.tertiary,
                borderColor: colors.border.light
              }}
            >
              {/* 图片占位符 */}
              <div 
                className="h-48 flex items-center justify-center"
                style={{ backgroundColor: colors.primary[200] }}
              >
                <span 
                  className="text-6xl opacity-30"
                  style={{ color: colors.text.tertiary }}
                >
                  📱
                </span>
              </div>
              
              {/* 内容 */}
              <div className="p-6">
                <div 
                  className="text-xs font-medium mb-2 uppercase tracking-wide"
                  style={{ color: colors.primary[400] }}
                >
                  {item.category}
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
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default PortfolioGallery; 