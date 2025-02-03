import React from "react";
import Navbar from "../Pages/Share/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Share/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noNavbarFooterForLogin = location.pathname.includes("signin")
  return (
    <div>
    { noNavbarFooterForLogin || <Navbar />}
      <Outlet />
    { noNavbarFooterForLogin || <Footer />}
    </div>
  );
};

export default MainLayout;
