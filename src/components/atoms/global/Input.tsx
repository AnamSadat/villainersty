import clsx from 'clsx';
import React from 'react';

export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  styleType?: 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
};

export const Input: React.FC<InputProps> = ({
  variant,
  styleType,
  size,
  className,
  placeholder,
  ...props
}) => {
  const classes = clsx(
    'input',
    variant && `input-${variant}`,
    styleType && `input-${styleType}`,
    size && `input-${size}`,
    className
  );
  return <input className={classes} {...props} placeholder={placeholder} />;
};
