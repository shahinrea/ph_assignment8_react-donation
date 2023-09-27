import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";

const Header = () => {
  return (
    <div>
      <Navbar />
      <Hero />
    </div>
  );
};

export default Header;
