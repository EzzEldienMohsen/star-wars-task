import React from 'react';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full  flex justify-center items-center p-16 my-10">
      <Outlet />
    </div>
  );
};

export default Home;
