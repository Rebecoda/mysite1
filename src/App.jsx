import React from 'react';
import { colors, typography } from '../design-system/tokens/index.js';
import {
  AvatarHero,
  SocialStrip,
  ResumeTimeline,
  PortfolioGallery,
  ContactSection,
  GlobalFooter
} from './components/index.js';

function PersonalWebsite() {
  return (
    <div 
      className="min-h-screen"
      style={{ 
        fontFamily: typography.fontFamily.sans,
        backgroundColor: colors.background.primary,
        color: colors.text.primary
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AvatarHero />
        <SocialStrip />
        <ResumeTimeline />
        <PortfolioGallery />
        <ContactSection />
      </div>
      <GlobalFooter />
    </div>
  );
}

export default PersonalWebsite;
