import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";

ChartJS.register(...registerables);

const ActivityGraph = () => {
  const data = {
    labels: ["15-Jan", "15-Feb", "15-Mar", "15-Apr", "15-May", "15-Jun", "15-Jul", "15-Aug", "15-Sep", "15-Oct", "15-Nov", "15-Dec"],
    datasets: [
      {
        label: "Guest",
        fill: false,
        lineTension: 0.4,
        borderWidth: 2.4,
        backgroundColor: "rgba(131,138,133,0.4)",
        borderColor: "rgba(233, 160, 160, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(233, 160, 160, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(233, 160, 160, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1.3,
        pointHitRadius: 50,
        data: [150, 200, 350, 500, 350, 250, 200, 250, 350, 300, 200, 250],
      },
      {
        label: "User",
        fill: false,
        lineTension: 0.4,
        borderWidth: 2.4,
        backgroundColor: "rgba(47,153,76,0.4)",
        borderColor: "rgba(155, 221, 124, 1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(155, 221, 124, 1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 2,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(155, 221, 124, 1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1.3,
        pointHitRadius: 50,
        data: [100, 300, 300, 450, 200, 150, 220, 200, 300, 500, 300, 450],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top", // Display legend on the top side
        align: "end",
        labels: {
          usePointStyle: true, // Use point style for legend items
        },
      },
    },
    title: {
      display: true,
      text: "Visit with & without Seasonal Impacts",
      fontSize: 20,
    },
    legend: {
      display: true,
      position: "bottom",
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          display: true, // Hide y-axis gridlines
        },
        ticks: {
          stepSize: 100,
          color: "rgba(133, 133, 133, 1)",
        },
        scaleLabel: {
          display: true,
          labelString: "Users",
        },
      },
      x: {
        grid: {
          display: false, // Hide x-axis gridlines
        },
        ticks: {
          color: "rgba(133, 133, 133, 1)",
        },
        scaleLabel: {
          display: true,
          labelString: "Week",
        },
      },
    },
  };

  return (
    <div className="PLOT__CONTAINER w-full flex flex-col h-80 bg-white rounded-xl p-8 pb-16">
      <h2 className="text-black text-lg font-bold">Activities</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default ActivityGraph;
