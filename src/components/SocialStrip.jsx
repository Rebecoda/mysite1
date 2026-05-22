import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EnvelopeSimple } from 'phosphor-react';
import { colors, spacing, typography } from '../../design-system/tokens/index.js';

const SocialStrip = () => {
  const [showWechatModal, setShowWechatModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [copyEmailSuccess, setCopyEmailSuccess] = useState(false);

  const handleWechatClick = () => {
    setShowWechatModal(true);
  };

  const handleEmailClick = () => {
    setShowEmailModal(true);
  };

  const handleCopyWechat = async () => {
    try {
      await navigator.clipboard.writeText('carpediem7021');
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText('13392871283@163.com');
      setCopyEmailSuccess(true);
      setTimeout(() => setCopyEmailSuccess(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const socialLinks = [
    {
      label: '小红书',
      href: 'https://www.xiaohongshu.com/user/profile/5bb6260caa1ebf00012ba8fa',
      icon: () => (
        <svg width="28" height="28" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M19.242667 401.066667h68.053333s-7.936 113.962667-10.026667 133.973333c-2.090667 20.053333-9.6 73.898667-39.253333 108.117333L3.370667 567.594667c0 0.042667 7.936-7.509333 15.872-166.528zM133.461333 310.656h68.437334v315.008s-13.909333 49.536-52.309334 48.981333h-36.736l-29.866666-59.349333h44.074666c4.736 0 4.608-6.528 4.608-4.778667 0.042667 3.882667 1.792-299.861333 1.792-299.861333zM476.288 307.84l-34.517333 77.909333s-6.101333 15.573333 3.882666 16.128c10.026667 0.554667 57.301333 0 57.301334 0l-47.872 107.392s-4.992 13.909333 4.437333 13.909334h35.626667l-23.722667 55.637333h-78.08s-33.962667-4.992-20.053333-35.626667 34.517333-79.018667 34.517333-79.018666l-35.072 0.554666s-31.701333-6.698667-16.128-38.954666c15.573333-32.298667 54.528-117.973333 54.528-117.973334h65.152zM247.552 400.256H314.88s8.917333 162.773333 16 163.370667l-34.389333 77.610666s-31.701333-23.936-40.064-120.490666c-6.869333-79.701333-8.874667-120.490667-8.874667-120.490667zM362.752 600.576s2.218667 6.101333 27.818667 6.101333h77.909333l-31.146667 67.328H354.389333s-24.192 0.554667-23.509333-7.253333l31.872-66.176zM679.424 333.44v67.370667h-42.325333v205.909333h65.706666v67.328h-225.408l29.482667-66.773333h57.898667l1.109333-207.018667-40.618667-0.554667-1.664-66.261333z"/>
          <path d="M1024 615.04v-94.592c0-56.192-59.648-58.453333-59.648-58.453333h-17.237333V399.658667c0.554667-57.301333-68.992-66.218667-68.992-66.218667h-42.837334v-26.154667h-66.773333l1.109333 26.154667h-47.317333v66.218667h45.653333v62.890666H698.88v67.328l68.992 0.554667v143.573333h67.328V529.92h107.392c14.464 0 15.573333 14.464 15.573333 14.464s3.626667 39.381333 2.645334 56.192c-0.981333 16.682667-13.226667 15.573333-13.226667 15.573333h-55.637333l26.709333 57.898667h50.645333c59.050667 0 54.698667-59.008 54.698667-59.008z m-142.592-209.493333v55.637333H834.133333V400.512h40.362667c7.808 0 6.912 5.034667 6.912 5.034667z"/>
          <path d="M992 398.549333H960v-32c0-17.578667 14.421333-32 32-32 17.621333 0 32 14.421333 32 32s-14.378667 32-32 32z"/>
        </svg>
      ),
      action: 'link'
    },
    {
      label: '微信',
      icon: () => (
        <svg width="28" height="28" viewBox="0 0 1024 1024" fill="currentColor">
          <path d="M867.265306 867.265306c-3.134694 0-6.791837-1.044898-9.92653-2.612245l-54.857143-28.734694c-39.183673 20.37551-83.069388 31.346939-128.522449 31.346939-141.061224 0-256-102.922449-256-229.877551s114.938776-229.877551 256-229.877551 256 102.922449 256 229.877551c0 50.677551-18.808163 100.310204-53.289796 140.538776l10.971428 65.306122c1.567347 7.836735-2.089796 15.673469-8.359183 20.37551-3.657143 2.089796-7.836735 3.657143-12.016327 3.657143z m-193.306122-417.959184c-118.073469 0-214.204082 84.114286-214.204082 188.081633s96.130612 188.081633 214.204082 188.081633c42.318367 0 83.069388-10.971429 118.073469-31.346939 6.269388-3.657143 14.106122-3.657143 20.37551-0.522449l27.167347 14.106122-5.746939-33.436734c-1.044898-6.269388 1.044898-13.061224 5.22449-17.763266 31.346939-33.436735 49.110204-76.277551 49.110204-119.640816 0-103.444898-96.130612-187.559184-214.204081-187.559184z"/>
          <path d="M579.918367 579.395918m-31.346938 0a31.346939 31.346939 0 1 0 62.693877 0 31.346939 31.346939 0 1 0-62.693877 0Z"/>
          <path d="M768 579.395918m-31.346939 0a31.346939 31.346939 0 1 0 62.693878 0 31.346939 31.346939 0 1 0-62.693878 0Z"/>
          <path d="M292.571429 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142857 0 36.571429 36.571429 0 1 0-73.142857 0Z"/>
          <path d="M512 344.293878m-36.571429 0a36.571429 36.571429 0 1 0 73.142858 0 36.571429 36.571429 0 1 0-73.142858 0Z"/>
          <path d="M166.138776 709.485714c-4.179592 0-8.881633-1.567347-12.538776-4.179592-6.269388-4.702041-9.404082-12.538776-8.359184-20.37551l14.106123-81.502041C117.028571 554.840816 94.040816 494.759184 94.040816 433.110204 94.040816 280.555102 232.489796 156.734694 402.285714 156.734694c80.979592 0 157.257143 27.689796 215.24898 78.889796 58.514286 51.2 91.428571 119.640816 92.995918 193.306122 0 5.746939-2.089796 11.493878-6.269388 15.67347s-9.926531 6.269388-15.673469 5.746938c-5.22449-0.522449-9.926531-0.522449-14.106122-0.522449-118.073469 0-214.204082 84.114286-214.204082 188.081633 0 14.106122 2.089796 28.734694 5.746939 42.840816 1.567347 5.746939 0.522449 12.016327-2.612245 17.240817s-8.881633 8.359184-14.628572 8.881632c-15.15102 2.089796-30.302041 3.134694-45.453061 3.134694-55.902041 0-109.714286-13.583673-157.257143-38.661224l-68.963265 36.571428c-4.179592 0.522449-7.836735 1.567347-10.971428 1.567347z m78.889795-83.591836c3.657143 0 7.314286 1.044898 10.44898 2.612244 48.587755 28.212245 106.057143 41.795918 164.571429 38.138776-1.567347-9.926531-2.089796-19.853061-2.089796-29.779592 0-124.865306 111.281633-226.742857 249.208163-229.877551-14.628571-117.028571-128.522449-208.979592-264.881633-208.979592-146.808163 0-266.44898 105.012245-266.448979 234.579592 0 54.334694 21.942857 107.62449 61.12653 149.420408 4.702041 4.702041 6.269388 11.493878 5.22449 17.763266l-8.359184 50.155102 41.795919-21.942858c3.134694-1.044898 6.269388-2.089796 9.404081-2.089795z"/>
        </svg>
      ),
      action: 'modal'
    },
    {
      label: '邮箱',
      icon: () => <EnvelopeSimple size={28} />,
      action: 'copy'
    }
  ];

  return (
    <>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-center"
        style={{ 
          marginBottom: spacing[16], // 与工作经历标题保持统一间距
          marginTop: spacing[8], // 与上方联系信息保持适当距离
        }}
      >
        <ul className="flex items-center space-x-4">
          {socialLinks.map((social, index) => (
            <motion.li
              key={social.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              {social.action === 'link' ? (
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-all duration-300 ease-out hover:scale-110"
                  style={{ 
                    padding: '12px',
                    borderRadius: '12px',
                    border: `1px solid ${colors.border.light}`,
                    color: colors.text.secondary,
                    backgroundColor: colors.background.tertiary,
                    textDecoration: 'none',
                    display: 'block',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.text.primary;
                    e.target.style.backgroundColor = colors.primary[400];
                    e.target.style.boxShadow = `0 8px 24px ${colors.opacity['20']}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.text.secondary;
                    e.target.style.backgroundColor = colors.background.tertiary;
                    e.target.style.boxShadow = 'none';
                  }}
                  aria-label={`打开${social.label}主页`}
                >
                  <social.icon />
                </a>
              ) : social.action === 'copy' ? (
                <button
                  onClick={social.label === '微信' ? handleWechatClick : handleEmailClick}
                  className="block transition-all duration-300 ease-out hover:scale-110"
                  style={{ 
                    padding: '12px',
                    borderRadius: '12px',
                    border: `1px solid ${colors.border.light}`,
                    color: colors.text.secondary,
                    backgroundColor: colors.background.tertiary,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.text.primary;
                    e.target.style.backgroundColor = colors.primary[400];
                    e.target.style.boxShadow = `0 8px 24px ${colors.opacity['20']}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.text.secondary;
                    e.target.style.backgroundColor = colors.background.tertiary;
                    e.target.style.boxShadow = 'none';
                  }}
                  aria-label={social.label === '微信' ? "复制微信号" : "复制邮箱地址"}
                >
                  <social.icon />
                </button>
              ) : (
                <button
                  onClick={handleWechatClick}
                  className="block transition-all duration-300 ease-out hover:scale-110"
                  style={{ 
                    padding: '12px',
                    borderRadius: '12px',
                    border: `1px solid ${colors.border.light}`,
                    color: colors.text.secondary,
                    backgroundColor: colors.background.tertiary,
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = colors.text.primary;
                    e.target.style.backgroundColor = colors.primary[400];
                    e.target.style.boxShadow = `0 8px 24px ${colors.opacity['20']}`;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = colors.text.secondary;
                    e.target.style.backgroundColor = colors.background.tertiary;
                    e.target.style.boxShadow = 'none';
                  }}
                  aria-label="复制微信号"
                >
                  <social.icon />
                </button>
              )}
            </motion.li>
          ))}
        </ul>
      </motion.section>

      {/* 微信弹层 */}
      <AnimatePresence>
        {showWechatModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ backgroundColor: colors.opacity['20'] }}
            onClick={() => setShowWechatModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="p-6 rounded-lg max-w-sm mx-4"
              style={{ 
                backgroundColor: colors.background.tertiary,
                border: `1px solid ${colors.border.light}`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center">
                <p 
                  className="mb-4"
                  style={{
                    color: colors.text.primary,
                    fontFamily: typography.fontFamily.sans,
                    fontSize: typography.fontSize.md,
                    fontWeight: typography.fontWeight.light,
                    lineHeight: typography.lineHeight.body,
                  }}
                >
                  点击按钮复制微信号
                </p>
                                 <motion.button
                   onClick={handleCopyWechat}
                   className="px-6 py-3 rounded-lg transition-all duration-200"
                   style={{
                     backgroundColor: colors.primary[400],
                     color: colors.text.primary,
                     fontFamily: typography.fontFamily.sans,
                     fontSize: typography.fontSize.md,
                     fontWeight: typography.fontWeight.normal,
                   }}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   {copySuccess ? '复制成功' : '复制微信号'}
                 </motion.button>
                 

              </div>
            </motion.div>
          </motion.div>
                 )}
       </AnimatePresence>

       {/* 邮箱弹层 */}
       <AnimatePresence>
         {showEmailModal && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-50 flex items-center justify-center"
             style={{ backgroundColor: colors.opacity['20'] }}
             onClick={() => setShowEmailModal(false)}
           >
             <motion.div
               initial={{ scale: 0.9, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               exit={{ scale: 0.9, opacity: 0 }}
               className="p-6 rounded-lg max-w-sm mx-4"
               style={{ 
                 backgroundColor: colors.background.tertiary,
                 border: `1px solid ${colors.border.light}`,
               }}
               onClick={(e) => e.stopPropagation()}
             >
               <div className="text-center">
                 <p 
                   className="mb-4"
                   style={{
                     color: colors.text.primary,
                     fontFamily: typography.fontFamily.sans,
                     fontSize: typography.fontSize.md,
                     fontWeight: typography.fontWeight.light,
                     lineHeight: typography.lineHeight.body,
                   }}
                 >
                   点击按钮复制邮箱地址
                 </p>
                 <motion.button
                   onClick={handleCopyEmail}
                   className="px-6 py-3 rounded-lg transition-all duration-200"
                   style={{
                     backgroundColor: colors.primary[400],
                     color: colors.text.primary,
                     fontFamily: typography.fontFamily.sans,
                     fontSize: typography.fontSize.md,
                     fontWeight: typography.fontWeight.normal,
                   }}
                   whileHover={{ scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                 >
                   {copyEmailSuccess ? '复制成功' : '复制邮箱地址'}
                 </motion.button>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
     </>
   );
 };

export default SocialStrip; 