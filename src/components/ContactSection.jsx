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
      style={{ 
        marginBottom: spacing[16], // 与页脚保持统一间距
        marginTop: spacing[8], // 与作品集保持适当距离
      }}
    >
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.h2 
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
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-100 to-transparent opacity-0"
            style={{ 
              background: `linear-gradient(90deg, transparent, ${colors.primary[100]}, transparent)`,
            }}
            whileHover={{ opacity: 0.3 }}
            transition={{ duration: 0.4 }}
          />
          <span className="relative z-10">联系我</span>
        </motion.h2>
      </motion.div>
      
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
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, ease: "ease-out" }}
              >
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg"
                  icon={<PaperPlaneRight />}
                >
                  发送留言
                </Button>
              </motion.div>
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
            <motion.a
              href="mailto:13392871283@163.com"
              className="inline-flex items-center mt-2 px-4 py-2 rounded-lg"
              style={{ 
                backgroundColor: colors.background.primary,
                color: colors.text.primary
              }}
              whileHover={{ 
                scale: 1.02,
                backgroundColor: colors.primary[400],
              }}
              transition={{ duration: 0.2, ease: "ease-out" }}
            >
              <EnvelopeSimple size={16} className="mr-2" />
              13392871283@163.com
            </motion.a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactSection; 