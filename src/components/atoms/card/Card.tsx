import clsx from 'clsx';
import React from 'react';
import { type CardProps } from '@/types';

export const Card = ({
  children,
  size,
  styleType,
  className,
  ...props
}: CardProps) => {
  const baseClass = clsx(
    'card',
    size && `card-${size}`,
    styleType && `card-${styleType}`,
    className
  );
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export const CardBody = ({ children, className, ...props }: CardProps) => {
  const baseClass = clsx('card-body', className);
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className, ...props }: CardProps) => {
  const baseClass = clsx('card-title', className);
  return (
    <h2 className={baseClass} {...props}>
      {children}
    </h2>
  );
};

export const CardActions = ({ children, className, ...props }: CardProps) => {
  const baseClass = clsx('card-actions w-full', className);

  return (
    <div className={baseClass} {...props}>
      {children}
    </div>
  );
};
