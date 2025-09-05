import { Card, CardBody, CardTitle } from '@/components/atoms/card/Card';
import clsx from 'clsx';

export type LoginCardProps = {
  children: React.ReactNode;
  classCard?: string;
  classCardBody?: string;
  classCardTitle?: string;
  className?: string;
  title?: string;
  subTittle?: string;
};

export const AuthCard: React.FC<LoginCardProps> = ({
  children,
  classCard,
  classCardBody,
  classCardTitle,
  className,
  title,
  subTittle,
  ...props
}) => {
  return (
    <Card className={clsx('bg-base-100 w-96 shadow-lg text-black', classCard)}>
      <CardBody className={clsx(classCardBody)}>
        <CardTitle
          className={clsx('text-2xl font-bold uppercase', classCardTitle)}
        >
          {title}
        </CardTitle>
        <p className={clsx('text-base', className)} {...props}>
          {subTittle}
        </p>
        {children}
      </CardBody>
    </Card>
  );
};
