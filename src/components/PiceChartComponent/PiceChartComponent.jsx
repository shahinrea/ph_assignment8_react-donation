import React, { useEffect, useState } from "react";
import { PieChart, Tooltip, Pie, Cell, Legend } from "recharts";
import "./chart.css";

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PiceChartComponent = ({ data }) => {
  const [finalLenght, setFinalLength] = useState(0);
  const allDonateLength = data.length;

  useEffect(() => {
    const donated = JSON.parse(localStorage.getItem("donates"));
    if (donated === null) {
      setFinalLength(0);
      console.log("Ami null");
    } else {
      const donatedLenth = donated.length;
      setFinalLength(donatedLenth);
    }
  }, []);

  const piceData = [
    { name: "Total Donation", value: allDonateLength },
    { name: "Your Donation", value: finalLenght },
  ];
  const COLORS = ["#FF444A", "#00C49F"];

  return (
    <div className="flex flex-col justify-center items-center">
      <PieChart width={400} height={400}>
        <Pie
          className="w-full"
          data={piceData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
    </div>
  );
};

export default PiceChartComponent;
