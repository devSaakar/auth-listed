import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
    datasets: [
      {
        data: [30, 40, 20],
        backgroundColor: ["#98D89E", "#EE8484", "#F7DC7D"],
        borderWidth: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right", // Display legend on the right side
        labels: {
          usePointStyle: true, // Use point style for legend items
          fontSize: "20px",
        },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
