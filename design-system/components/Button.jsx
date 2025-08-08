import React from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { colors, spacing, typography } from '../tokens/index.js';

// 基于设计稿的按钮变体
const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center font-medium transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'active:scale-95',
    'font-family: Inter',
  ],
  variants: {
    variant: {
      primary: [
        'bg-primary-100 text-primary-800 hover:bg-primary-50',
        'focus:ring-primary-100',
        'border border-transparent',
      ],
      secondary: [
        'bg-primary-600 text-primary-100 hover:bg-primary-500',
        'focus:ring-primary-600',
        'border border-transparent',
      ],
      outline: [
        'bg-transparent text-primary-100 border border-primary-300',
        'hover:bg-primary-600 hover:border-primary-300',
        'focus:ring-primary-300',
      ],
      ghost: [
        'bg-transparent text-primary-100 hover:bg-primary-600',
        'focus:ring-primary-100',
        'border border-transparent',
      ],
      danger: [
        'bg-status-error-500 text-white hover:bg-status-error-600',
        'focus:ring-status-error-500',
        'border border-transparent',
      ],
    },
    size: {
      sm: [
        'px-3 py-1.5 text-sm',
        'min-h-[32px]',
        'rounded-md',
      ],
      md: [
        'px-4 py-2 text-base',
        'min-h-[40px]',
        'rounded-lg',
      ],
      lg: [
        'px-6 py-3 text-lg',
        'min-h-[48px]',
        'rounded-lg',
      ],
      xl: [
        'px-8 py-4 text-xl',
        'min-h-[64px]',
        'rounded-xl',
      ],
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  className,
  ...props
}, ref) => {
  const buttonClasses = buttonVariants({
    variant,
    size,
    fullWidth,
    className,
  });

  const renderIcon = () => {
    if (!icon) return null;
    
    const iconElement = React.cloneElement(icon, {
      className: 'w-4 h-4',
    });

    return (
      <span className={iconPosition === 'left' ? 'mr-2' : 'ml-2'}>
        {iconElement}
      </span>
    );
  };

  return (
    <motion.button
      ref={ref}
      className={buttonClasses}
      disabled={disabled || loading}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      style={{
        fontFamily: typography.fontFamily.sans,
        fontWeight: typography.fontWeight.normal,
      }}
      {...props}
    >
      {loading && (
        <motion.div
          className="w-4 h-4 border-2 border-current border-t-transparent rounded-full mr-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
      
      {!loading && iconPosition === 'left' && renderIcon()}
      
      <span className="flex items-center">
        {children}
      </span>
      
      {!loading && iconPosition === 'right' && renderIcon()}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button; 