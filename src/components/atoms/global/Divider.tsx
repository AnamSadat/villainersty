import clsx from 'clsx';
import React from 'react';

export type DividerProps = {
  className?: string;
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  children?: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  placement?: 'start' | 'end';
};

export const Divider: React.FC<DividerProps> = ({
  variant,
  className,
  children,
  direction,
  placement,
  ...props
}) => {
  const baseClass = clsx(
    'divider',
    variant && `divider-${variant}`,
    direction && `divider-${direction}`,
    placement && `divider-${placement}`,
    className
  );
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
