import clsx from 'clsx';
import React from 'react';

export type FooterProps = {
  className?: string;
  children: React.ReactNode;
  placement?: 'center';
  direction?: 'horizontal' | 'vertical';
};

export const FooterMain = ({
  className,
  children,
  placement,
  direction,
  ...props
}: FooterProps) => {
  const baseClass = clsx(
    'footer',
    placement && `footer-${placement}`,
    direction && `footer-${direction}`,
    className
  );
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export const FooterTitle = ({ className, children, ...props }: FooterProps) => {
  const baseClass = clsx('footer-title', className);
  return (
    <h1 className={baseClass} {...props}>
      {children}
    </h1>
  );
};
