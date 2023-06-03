import React from "react";
import PieChart from "./PieChart";

const TopProducts = () => {
  return (
    <div className="flex-1 bg-white rounded-lg p-8">
      <p className="text-lg text-black font-bold">Top Products</p>
      <PieChart />
    </div>
  );
};

export default TopProducts;
