import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button, Input } from '../../design-system/components/index.js';
import { colors, typography, textStyles, spacing } from '../../design-system/tokens/index.js';
import { EnvelopeSimple, PaperPlaneRight } from 'phosphor-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的留言！我会尽快回复您。');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      style={{ marginBottom: spacing.section }}
    >
      <h2 style={textStyles.h2} className="text-center mb-12">联系我</h2>
      
      <div className="max-w-2xl mx-auto">
        <div 
          className="p-8 rounded-lg border"
          style={{ 
            backgroundColor: colors.background.tertiary,
            borderColor: colors.border.light
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.text.primary }}
                >
                  姓名
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="请输入您的姓名"
                  required
                />
              </div>
              <div>
                <label 
                  className="block text-sm font-medium mb-2"
                  style={{ color: colors.text.primary }}
                >
                  邮箱
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="请输入您的邮箱"
                  required
                />
              </div>
            </div>
            
            <div>
              <label 
                className="block text-sm font-medium mb-2"
                style={{ color: colors.text.primary }}
              >
                留言
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="请输入您的留言..."
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg border resize-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0"
                style={{
                  backgroundColor: colors.background.primary,
                  borderColor: colors.border.light,
                  color: colors.text.primary,
                  fontFamily: typography.fontFamily.sans
                }}
              />
            </div>
            
            <div className="flex justify-center">
              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                icon={<PaperPlaneRight />}
              >
                发送留言
              </Button>
            </div>
          </form>
          
          {/* 直接联系方式 */}
          <div className="mt-8 pt-8 border-t text-center">
            <div 
              className="text-sm"
              style={{ color: colors.text.secondary }}
            >
              或者直接联系我：
            </div>
            <a
              href="mailto:example@email.com"
              className="inline-flex items-center mt-2 px-4 py-2 rounded-lg transition-colors duration-200"
              style={{ 
                backgroundColor: colors.background.primary,
                color: colors.text.primary
              }}
            >
              <EnvelopeSimple size={16} className="mr-2" />
              example@email.com
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection; 