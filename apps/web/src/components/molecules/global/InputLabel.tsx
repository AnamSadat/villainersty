import clsx from 'clsx';
import { ReactNode } from 'react';
import { Input, InputProps } from '../../atoms/global/Input';
import { Label } from '@/components/atoms/global/Label';

type InputWithLabelProps = InputProps & {
  label: string;
  icon?: ReactNode;
  classNameLabel?: string;
  htmlFor?: string;
};

export const InputWithLabel = ({
  label,
  className,
  icon,
  htmlFor,
  classNameLabel,
  ...props
}: InputWithLabelProps) => {
  const baseClass = clsx(' input w-full ', className);
  const baseIcon = clsx(
    'absolute z-100 inset-y-0 left-0 flex items-center pl-3 text-black',
    className
  );
  const baseLabel = clsx(' fieldset-legend', classNameLabel);

  return (
    <div className="form-control w-full">
      <Label className={baseLabel} htmlFor={htmlFor}>
        {label}
      </Label>

      <div className={baseClass}>
        {icon && <span className={baseIcon}>{icon}</span>}
        <Input
          className={clsx(' w-full', icon ? 'pl-5.5' : 'pl-5.5')}
          {...props}
        />
      </div>
    </div>
  );
};
