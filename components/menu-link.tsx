import Link from 'next/link';
import { ReactNode } from 'react';

const MenuLink = ({
  href,
  children,
  ...rest
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <Link href={href}>
      <a className="block" {...rest}>
        {children}
      </a>
    </Link>
  );
};

export default MenuLink;