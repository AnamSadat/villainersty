export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?:
    | 'neutral'
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  styleType?: 'outline' | 'dash' | 'soft' | 'ghost' | 'link';
  block?: boolean;
  wide?: boolean;
  square?: boolean;
  circle?: boolean;
};
