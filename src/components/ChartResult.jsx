import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);

const ChartResult = () => {
  const hstyle = {
    margin: "0.3rem",
  };
  const labels = ["a", "b", "c", "d"];
  const data = {
    labels,
    datasets: [
      {
        label: "melon Top 100",
        data: [1, 50, 3, 80],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "melon 실시간",
        data: [57, 30, 78, 30],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "gni 실시간",
        data: [125, 90, 111, 5],
        borderColor: "rgb(100, 100, 235)",
        backgroundColor: "rgba(100, 100, 235, 0.5)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "left",
      },
      title: {
        display: true,
        text: "윤종신 - 좋니",
        font: {
          size: 20,
        },
        color: "black",
      },
    },
  };

  return (
    <div class="card card-info card-outline">
      <div class="card-header">
        <button type="button" class="btn btn-info" style={hstyle}>
          유임 이탈자 데이터
        </button>
        <button type="button" class="btn btn-info" style={hstyle}>
          발매일 하트 추이
        </button>
        <button type="button" class="btn btn-info" style={hstyle}>
          차트 자세히 보기
        </button>
      </div>
      <div class="card-body">
        <div class="text-muted">
          <Line data={data} options={options} width={700} height={200} />
        </div>
      </div>
    </div>
  );
};

export default ChartResult;
