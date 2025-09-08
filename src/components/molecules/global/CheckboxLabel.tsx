import { Checkbox, CheckboxProps } from '@/components/atoms/global/Checkbox';
import { Label } from '@/components/atoms/global/Label';
import React from 'react';

export type CheckboxLabelProps = CheckboxProps & {
  classNameCheckbox?: string;
};

export const CheckboxLabel: React.FC<CheckboxLabelProps> = ({
  className,
  children,
  variant,
  sizes,
  classNameCheckbox,
}) => {
  return (
    <Label className={className}>
      <Checkbox className={classNameCheckbox} variant={variant} sizes={sizes} />
      {children}
    </Label>
  );
};
