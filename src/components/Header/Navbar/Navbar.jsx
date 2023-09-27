import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="div flex justify-between md:flex-row flex-col md:space-y-0 space-y-5 my-10 items-center">
        <Link to={"/"}>
          <img src="/images/Logo.png" alt="" className="" />
        </Link>
        <div className="space-x-5 font-medium">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/donations"}>Donation</NavLink>
          <NavLink to={"/statistics"}>Statistics</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
