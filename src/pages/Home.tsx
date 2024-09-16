import React from 'react';
import { Outlet } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
};

export default Home;
