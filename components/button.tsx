import { ButtonHTMLAttributes, FC, ReactNode } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export const Button = ({ children, ...props }: Props) => {
  return (
    <button
      className="px-4 py-2 rounded bg-blue-500 text-white disabled:cursor-default disabled:opacity-50"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;