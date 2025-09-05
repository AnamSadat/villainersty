import clsx from 'clsx';
import React from 'react';

export type HeroProps = {
  className?: string;
  children: React.ReactNode;
};

export type HeroOverlayProps = {
  className?: string;
  children?: React.ReactNode;
};

export const Hero = ({ className, children, ...props }: HeroProps) => {
  const baseClass = clsx('hero', className);
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export const HeroContent = ({ children, className, ...props }: HeroProps) => {
  const baseClass = clsx('hero-content', className);
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export const HeroOverlay = ({
  className,
  children,
  ...props
}: HeroOverlayProps) => {
  const baseClass = clsx('hero-overlay', className);
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
