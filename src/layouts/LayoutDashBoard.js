import React from 'react';
import DashBoardTopBar from '../modules/dashboard/DashBoardTopBar';
import DashBoardSideBar from '../modules/dashboard/DashBoardSideBar';

const LayoutDashBoard = ({ children }) => {
  return (
    <div className="p-10 bg-lite min-h-screen">
      <DashBoardTopBar />
      <div className="flex items-start gap-x-10">
        <DashBoardSideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;
