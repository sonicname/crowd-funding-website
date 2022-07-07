import React from 'react';
import DashBoardTopBar from '../modules/dashboard/DashBoardTopBar';
import DashBoardSideBar from '../modules/dashboard/DashBoardSideBar';

const LayoutDashBoard = ({ children }) => {
  return (
    <div className="p-10 bg-lite">
      <DashBoardTopBar />
      <div>
        <DashBoardSideBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashBoard;