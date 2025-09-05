import clsx from 'clsx';
import React from 'react';

export type BadgeProps = {
  className?: string;
  children: React.ReactNode;
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  styleType?: 'outline' | 'dash' | 'soft' | 'ghost';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const Badge = ({
  className,
  children,
  variant,
  styleType,
  size,
  ...props
}: BadgeProps) => {
  const baseClass = clsx(
    'badge',
    variant && `badge-${variant}`,
    styleType && `badge-${styleType}`,
    size && `badge-${size}`,
    className
  );
  return (
    <span className={baseClass} {...props}>
      {children}
    </span>
  );
};
