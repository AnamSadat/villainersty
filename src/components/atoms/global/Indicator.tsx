import clsx from 'clsx';
import React from 'react';

export type IndicatorProps = {
  className?: string;
  children: React.ReactNode;
  placement?: 'start' | 'center' | 'end' | 'top' | 'middle' | 'bottom';
};

export const Indicator = ({
  className,
  children,
  ...props
}: IndicatorProps) => {
  const baseClass = clsx('indicator relative', className);
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export const IndicatorItem = ({
  className,
  children,
  placement,
  ...props
}: IndicatorProps) => {
  const baseClass = clsx(
    'indicator-item',
    placement && `indicator-${placement}`,
    className
  );
  return (
    <span className={baseClass} {...props}>
      {children}
    </span>
  );
};
