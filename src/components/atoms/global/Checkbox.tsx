import clsx from 'clsx';
import React from 'react';

export type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
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

export const Checkbox: React.FC<CheckboxProps> = ({
  className,
  variant,
  sizes,
  ...props
}) => {
  const baseClass = clsx(
    'checkbox',
    variant && `checkbox-${variant}`,
    sizes && `checkbox-${sizes}`,
    className
  );
  return <input type="checkbox" className={baseClass} {...props} />;
};
