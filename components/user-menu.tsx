import { Menu, Transition } from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { useAuth } from '../context/auth';
import Avatar from './avatar';
import { CogIcon, LogoutIcon, UserIcon } from '@heroicons/react/solid';
import MenuLink from './menu-link';
import { classNames } from '../lib/class-names';
import { logout } from '../lib/auth';

const links = [
  {
    label: 'マイページ',
    icon: <UserIcon />,
    path: '/mypage',
  },
  {
    label: '設定',
    icon: <CogIcon />,
    path: '/settings',
  },
];

const ListItem = ({
  active,
  icon,
  label,
}: {
  active: boolean;
  icon: ReactNode;
  label: string;
}) => {
  return (
    <span
      className={classNames(
        'flex items-center space-x-2 p-2 rounded text-sm text-left',
        active && 'text-white bg-purple-500'
      )}
    >
      <span
        className={classNames(
          'w-5 h-5',
          active ? 'text-white' : 'text-gray-500'
        )}
      >
        {icon}
      </span>
      <span className="flex-1">{label}</span>
    </span>
  );
};

const UserMenu = () => {
  const user = useAuth();

  if (!user) {
    return null;
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="block">
        <Avatar src={user?.photoURL} />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="p-1 border-b">
            {links.map((link) => (
              <Menu.Item key={link.path}>
                {({ active }) => (
                  <MenuLink href={link.path}>
                    <ListItem
                      icon={link.icon}
                      label={link.label}
                      active={active}
                    />
                  </MenuLink>
                )}
              </Menu.Item>
            ))}
          </div>
          <div className="p-1">
            <Menu.Item>
              {({ active }) => (
                <button className="w-full" onClick={logout}>
                  <ListItem
                    icon={<LogoutIcon />}
                    label="ログアウト"
                    active={active}
                  />
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default UserMenu;