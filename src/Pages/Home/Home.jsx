import React from "react";
import HomeCardContainer from "../../components/HomeCard/HomeCardContainer";
import { useLoaderData } from "react-router-dom";
import Hero from "../../components/Header/Hero/Hero";

const Home = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <Hero data={data} />
      <HomeCardContainer donates={data} />
    </div>
  );
};

export default Home;
