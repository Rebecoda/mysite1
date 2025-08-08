import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { tv } from 'tailwind-variants';
import { Eye, EyeSlash } from 'phosphor-react';
import { colors, typography } from '../tokens/index.js';

// 基于设计稿的输入框变体
const inputVariants = tv({
  base: [
    'w-full px-3 py-2 border rounded-lg transition-all duration-200',
    'focus:outline-none focus:ring-2 focus:ring-offset-0',
    'placeholder:text-primary-200',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'font-family: Inter',
  ],
  variants: {
    variant: {
      default: [
        'border-primary-400 bg-primary-800 text-primary-100',
        'focus:border-primary-100 focus:ring-primary-100',
        'hover:border-primary-300',
        'placeholder:text-primary-200',
      ],
      error: [
        'border-status-error-500 bg-primary-800 text-primary-100',
        'focus:border-status-error-500 focus:ring-status-error-500',
        'hover:border-status-error-400',
        'placeholder:text-primary-200',
      ],
      success: [
        'border-status-success-500 bg-primary-800 text-primary-100',
        'focus:border-status-success-500 focus:ring-status-success-500',
        'hover:border-status-success-400',
        'placeholder:text-primary-200',
      ],
    },
    size: {
      sm: 'px-2 py-1 text-sm min-h-[32px]',
      md: 'px-3 py-2 text-base min-h-[40px]',
      lg: 'px-4 py-3 text-lg min-h-[48px]',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'md',
  },
});

const Input = React.forwardRef(({
  type = 'text',
  variant = 'default',
  size = 'md',
  fullWidth = true,
  disabled = false,
  error,
  success,
  leftIcon,
  rightIcon,
  className,
  ...props
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // 确定最终变体
  const finalVariant = error ? 'error' : success ? 'success' : variant;

  const inputClasses = inputVariants({
    variant: finalVariant,
    size,
    fullWidth,
    className,
  });

  // 处理密码显示/隐藏
  const inputType = type === 'password' && showPassword ? 'text' : type;

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary-200">
            {React.cloneElement(leftIcon, { className: 'w-4 h-4' })}
          </div>
        )}
        
        <motion.input
          ref={ref}
          type={inputType}
          className={inputClasses}
          style={{
            paddingLeft: leftIcon ? '2.5rem' : undefined,
            paddingRight: (rightIcon || type === 'password') ? '2.5rem' : undefined,
            fontFamily: typography.fontFamily.sans,
            fontWeight: typography.fontWeight.light,
          }}
          disabled={disabled}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        
        {rightIcon && type !== 'password' && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-200">
            {React.cloneElement(rightIcon, { className: 'w-4 h-4' })}
          </div>
        )}
        
        {type === 'password' && (
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-primary-200 hover:text-primary-100"
            onClick={handlePasswordToggle}
          >
            {showPassword ? <EyeSlash className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        )}
      </div>
      
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-status-error-500"
          style={{ fontFamily: typography.fontFamily.sans }}
        >
          {error}
        </motion.p>
      )}
      
      {success && !error && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1 text-sm text-status-success-500"
          style={{ fontFamily: typography.fontFamily.sans }}
        >
          {success}
        </motion.p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input; 