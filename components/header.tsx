import Link from 'next/link';
import { useState } from 'react';
import { useAuth } from '../context/auth';
import { login } from '../lib/auth';
import { Button } from '../components/button'

const Header = () => {
  const user = useAuth();
  const [waiting, setWaiting] = useState<boolean>(false);

  const signIn = () => {
    setWaiting(true);

    login()
      .catch((error) => {
        console.error(error?.code);
      })
      .finally(() => {
        setWaiting(false);
      });
  };

  return (
    <header className="border-b flex items-center h-14 px-4">
      <h1>
        <Link href="/">
          <a className="text-2xl font-logo">iam</a>
        </Link>
      </h1>
      <span className="flex-1"></span>
      {user === null && !waiting && <Button onClick={signIn}>ログイン</Button>}
      {user && <Button>ユーザーメニュー</Button>}
    </header>
  );
};

export default Header;