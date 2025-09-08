import { Children, ClassName, Size, Variant } from '@/types';
import clsx from 'clsx';
import React from 'react';

export type SelectProps = Children &
  ClassName & {
    variant?: Variant;
    sizes?: Size;
    styleType?: 'ghost';
    defaultValue: string;
  };

export const Select: React.FC<SelectProps> = ({
  defaultValue,
  children,
  className,
  variant,
  sizes,
  styleType,
  ...props
}) => {
  const baseClass = clsx(
    'select',
    variant && `select-${variant}`,
    sizes && `select-${sizes}`,
    styleType && `select-${styleType}`,
    className
  );

  return (
    <select defaultValue={defaultValue} className={baseClass} {...props}>
      {children}
    </select>
  );
};
