import clsx from 'clsx';
import React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children?: React.ReactNode;
  size?: 'md';
};

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  ...props
}) => {
  const classes = clsx('label', className);
  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
};
