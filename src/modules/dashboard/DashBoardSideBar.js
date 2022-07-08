import React from 'react';
import {
  IconCampaign,
  IconDashBoard,
  IconLogout,
  IconProfile,
  IconWithdraw,
  IconDarkMode,
  IconPayment
} from '../../components/icons';
import { NavLink } from 'react-router-dom';
import { classNames } from '../../utils';

const sidebarLinks = [
  {
    icon: <IconDashBoard />,
    title: 'Dashboard',
    url: '/'
  },
  {
    icon: <IconCampaign />,
    title: 'Campaign',
    url: '/campaign'
  },
  {
    icon: <IconPayment />,
    title: 'Payment',
    url: '/payment'
  },
  {
    icon: <IconWithdraw />,
    title: 'Withdraw',
    url: '/withdraw'
  },
  {
    icon: <IconProfile />,
    title: 'Profile',
    url: '/profile'
  },
  {
    icon: <IconLogout />,
    title: 'Logout',
    url: '#',
    onClick: () => {}
  },
  {
    icon: <IconDarkMode />,
    title: 'Light/Dark',
    url: '#',
    onClick: () => {}
  }
];

const DashBoardSideBar = () => {
  return (
    <div className="w-full md:w-[76px] shadow-[10px_10px_20px_rgba(218,213,213,0.15)] rounded-3xl bg-white px-[14px] py-10 flex flex-col">
      {sidebarLinks.map((link) => (
        <NavLink
          to={link.url}
          key={link.title}
          className={classNames(
            'flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-lg md:mb-8 text-icon-color last:mt-auto last:bg-white last:shadow-sdprimary',
            ({ isActive }) =>
              isActive ? 'bg-primary text-primary bg-opacity-20' : ''
          )}>
          <span>{link.icon}</span>
          <span className="md:hidden">{link.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default DashBoardSideBar;
