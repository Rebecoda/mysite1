import React from 'react';
import { motion } from 'framer-motion';
import { GithubLogo, TwitterLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';
import { colors, spacing } from '../../design-system/tokens/index.js';

const SocialStrip = () => {
  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: TwitterLogo, href: '#', label: 'Twitter' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: EnvelopeSimple, href: 'mailto:example@email.com', label: 'Email' }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="flex justify-center"
      style={{ marginBottom: spacing.section }}
    >
      <ul className="flex items-center space-x-6">
        {socialLinks.map((social, index) => (
          <motion.li
            key={social.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1 }}
          >
            <a
              href={social.href}
              className="block p-3 rounded-full transition-all duration-300 hover:scale-110"
              style={{ 
                backgroundColor: colors.background.tertiary,
                color: colors.text.secondary
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = colors.primary[400];
                e.target.style.color = colors.text.primary;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = colors.background.tertiary;
                e.target.style.color = colors.text.secondary;
              }}
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default SocialStrip; 