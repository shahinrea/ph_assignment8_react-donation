import React from "react";
import HomeCard from "./HomeCard";

const HomeCardContainer = ({ donates }) => {

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-5 mt-5">
      {donates.map((donate) => (
        <HomeCard key={donate.id} donate={donate} />
      ))}
    </div>
  );
};

export default HomeCardContainer;
