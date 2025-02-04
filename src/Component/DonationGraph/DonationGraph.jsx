import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

const DonationGraph = () => {
  const data = [
    { name: "Energy Sanchay", value: 2400 },
    { name: "Sanskriti", value: 2500 },
    { name: "VOXAGO", value: 1200 },
    { name: "Tree Plantation", value: 9800 },
    { name: "Health care", value: 8000 },
  ];

  const COLORS = ["#FFF0CA", "#F9CF64", "#F38FBF", "#BEF3C0", "#AC94F1"];

  return (
    <div className="w-full h-[300px] sm:h-[480px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            dataKey="value"
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={65}
            outerRadius={130}
            fill="#82ca9d"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};


export default DonationGraph;
