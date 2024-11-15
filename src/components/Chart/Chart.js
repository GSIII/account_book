import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./Chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ dataPoints }) => {
  const labels = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);
  const values = labels.map((month) => {
    const dataPoint = dataPoints.find((dp) => dp.label === month);
    return dataPoint ? dataPoint.value : 0;
  });

  const backgroundColors = values.map((value) =>
    value >= 0 ? "rgba(75, 192, 192, 0.6)" : "rgba(255, 99, 132, 0.6)"
  );

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "남은 금액",
        data: values,
        backgroundColor: backgroundColors, // 조건부 색상 배열 사용
        borderColor: backgroundColors.map((color) => color.replace("0.6", "1")),
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // 너비에 맞게 조정
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={chartData} options={options} className="chart" />
    </div>
  );
};

export default Chart;
