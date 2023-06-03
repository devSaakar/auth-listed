import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
import useApiUtils from "@/Utils/useApiUtils";

ChartJS.register(...registerables);

const ActivityGraph = () => {
  let [data, setData] = useState();

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
        beginAtZero: false,
        grid: {
          display: false, // Hide x-axis gridlines
        },
        ticks: {
          color: "rgba(133, 133, 133, 1)",
          maxTicksLimit: 5,
          callback: (value, index, values) => {
            if (value === 0) {
              return ""; // Remove tick at the origin (0) on the x-axis
            }
            return `Week ${value}`;
          },
        },
        scaleLabel: {
          display: true,
          labelString: "Week",
        },
      },
    },
  };

  const { data: userData, error } = useApiUtils("http://localhost:3000/api/user/activity", false);

  useEffect(() => {
    if (userData) {
      data = {
        labels: ["Week0", "Week1", "Week2", "Week3", "Week4"],
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
            data: userData.user.data,
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
            data: userData.guest.data,
          },
        ],
      };
      setData({ ...data });
    }
  }, [userData]);

  return (
    <div className="PLOT__CONTAINER w-full flex flex-col h-80 bg-white rounded-xl p-8 pb-16">
      <h2 className="text-black text-lg font-bold">Activities</h2>
      {data && <Line data={data} options={options} />}
    </div>
  );
};

export default ActivityGraph;
