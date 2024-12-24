import React from "react";
import Navbar from "../Pages/Share/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Share/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
