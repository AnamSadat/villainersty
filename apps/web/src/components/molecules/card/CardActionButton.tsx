import { CardActions } from '@/components/atoms/card/Card';
import { Button } from '@/components/atoms/global/Button';
import React from 'react';
import { type ButtonProps } from '@/types';

export type CardActionButtonProps = ButtonProps & {
  children: React.ReactNode;
  className?: string;
  classNameCardActions: string;
};

export const CardActionButton: React.FC<CardActionButtonProps> = ({
  children,
  variant,
  size,
  styleType,
  block,
  wide,
  square,
  circle,
  className,
  classNameCardActions,
  ...props
}) => {
  return (
    <CardActions className={classNameCardActions}>
      <Button
        className={className}
        variant={variant}
        styleType={styleType}
        size={size}
        block={block}
        wide={wide}
        square={square}
        circle={circle}
        {...props}
      >
        {children}
      </Button>
    </CardActions>
  );
};
