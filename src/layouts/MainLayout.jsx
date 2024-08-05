import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
    <Header />
  <main className='grow overflow-x-hidden'>
    <Outlet/>
  </main>
  <Footer/>
</div>

  );
};

export default MainLayout;
