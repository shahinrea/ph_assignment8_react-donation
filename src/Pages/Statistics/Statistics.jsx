import React from "react";
import PiceChartComponent from "../../components/PiceChartComponent/PiceChartComponent";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
  const { data } = useLoaderData();

  return (
    <div>
      <PiceChartComponent data={data} />
    </div>
  );
};

export default Statistics;
