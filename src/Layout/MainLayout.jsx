import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="w-11/12 mx-auto mb-20">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
