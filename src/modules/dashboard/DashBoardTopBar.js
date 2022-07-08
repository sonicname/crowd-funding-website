import React from 'react';
import DashBoardSearch from './DashBoardSearch';
import { Button } from '../../components/button';
import DashBoardFund from './DashBoardFund';

const DashBoardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center gap-x-10 flex-1">
        <img srcSet="/logo.png 2x" alt="" />
        <div className="max-w-[458px] w-full">
          <DashBoardSearch />
        </div>
      </div>

      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashBoardFund />
        <Button type={'button'} className="bg-secondary px-7">
          Start a campaign
        </Button>
        <img
          className="rounded-full object-cover"
          srcSet="/logo.png 2x"
          alt=""
        />
      </div>
    </div>
  );
};

export default DashBoardTopBar;
