import clsx from 'clsx';
import React from 'react';

export type RadioProps = React.InputHTMLAttributes<HTMLInputElement> & {
  sizes?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
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

export const Radio: React.FC<RadioProps> = ({
  className,
  sizes,
  variant,
  ...props
}) => {
  const baseClass = clsx(
    'radio',
    sizes && `radio-${sizes}`,
    variant && `radio-${variant}`,
    className
  );
  return <input type="radio" className={baseClass} {...props} />;
};
