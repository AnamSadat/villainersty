import React from 'react';
import clsx from 'clsx';
import { type ButtonProps } from '@/types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  size,
  styleType,
  block,
  wide,
  square,
  circle,
  className,
  ...props
}) => {
  const classes = clsx(
    'btn rounded-lg',
    variant && `btn-${variant}`,
    size && `btn-${size}`,
    styleType && `btn-${styleType}`,
    block && 'btn-block',
    wide && 'btn-wide',
    square && 'btn-square',
    circle && 'btn-circle',
    className
  );

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
