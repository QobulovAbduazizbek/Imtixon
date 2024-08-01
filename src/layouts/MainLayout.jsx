import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="bg-tintBlue text-white">
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
