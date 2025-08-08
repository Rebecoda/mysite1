import React from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { colors, typography } from '../tokens/index.js';

// 基于设计稿的卡片变体
const cardVariants = tv({
  base: [
    'bg-primary-600 border border-primary-400 rounded-lg',
    'transition-all duration-200',
    'font-family: Inter',
  ],
  variants: {
    variant: {
      default: 'shadow-sm hover:shadow-md',
      elevated: 'shadow-lg hover:shadow-xl',
      outlined: 'shadow-none border-2 border-primary-400',
      flat: 'shadow-none border-0 bg-primary-700',
      overlay: [
        'bg-background-overlay backdrop-blur-md',
        'border border-border-overlay',
        'shadow-lg',
      ],
    },
    padding: {
      none: 'p-0',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6',
      xl: 'p-8',
    },
    interactive: {
      true: 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]',
    },
  },
  defaultVariants: {
    variant: 'default',
    padding: 'md',
  },
});

const Card = React.forwardRef(({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  className,
  onClick,
  ...props
}, ref) => {
  const cardClasses = cardVariants({
    variant,
    padding,
    interactive: interactive || !!onClick,
    className,
  });

  const isInteractive = interactive || !!onClick;

  if (isInteractive) {
    return (
      <motion.div
        ref={ref}
        className={cardClasses}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ fontFamily: typography.fontFamily.sans }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div
      ref={ref}
      className={cardClasses}
      style={{ fontFamily: typography.fontFamily.sans }}
      {...props}
    >
      {children}
    </div>
  );
});

// Card 子组件
const CardHeader = ({ children, className, ...props }) => (
  <div 
    className={`flex items-center justify-between ${className || ''}`} 
    {...props}
  >
    {children}
  </div>
);

const CardTitle = ({ children, className, ...props }) => (
  <h3 
    className={`text-lg font-semibold text-primary-100 ${className || ''}`} 
    style={{ fontFamily: typography.fontFamily.sans }}
    {...props}
  >
    {children}
  </h3>
);

const CardSubtitle = ({ children, className, ...props }) => (
  <p 
    className={`text-sm text-primary-200 mt-1 ${className || ''}`} 
    style={{ fontFamily: typography.fontFamily.sans }}
    {...props}
  >
    {children}
  </p>
);

const CardContent = ({ children, className, ...props }) => (
  <div 
    className={`mt-4 ${className || ''}`} 
    style={{ fontFamily: typography.fontFamily.sans }}
    {...props}
  >
    {children}
  </div>
);

const CardFooter = ({ children, className, ...props }) => (
  <div 
    className={`flex items-center justify-between mt-4 pt-4 border-t border-primary-400 ${className || ''}`} 
    style={{ fontFamily: typography.fontFamily.sans }}
    {...props}
  >
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Content = CardContent;
Card.Footer = CardFooter;

Card.displayName = 'Card';

export default Card; 