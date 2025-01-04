import React from "react";
import Navbar from "../Pages/Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";

const Main = () => {
  return (
    <div className="w-[98%] mx-auto">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
