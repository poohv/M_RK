import React, { useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import datadummy from "../data.json";
import { Button } from "react-bootstrap";
ChartJS.register(...registerables);

function ChartList() {
  const [datalist, setDatalist] = useState({ numbern: 10 });

  function numadd() {
    setDatalist({
      ...datalist,

      numbern: datalist.numbern + 10,
    });
    console.log(datalist.numbern);
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "시간별 랭킹 리스트",
      },
    },
  };

  const labels = datadummy.data.map((data) => data.song.map((day) => day.name));

  const data = {
    labels,
    datasets: [
      {
        label: "ranking",
        data: datadummy.data.map((data) => data.ranking),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "pre_ranking",
        data: datadummy.data.map((data) => data.pre_ranking),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "gni",
        data: [125, 125, 111, 100, 1, 2, 34, 57, 56],
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Line data={data} options={options} width={700} height={200} />

      <section class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">DataTable with default features</h3>
            </div>

            <div class="card-body">
              <table id="example1" class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>순위</th>
                    <th>1시간 전</th>
                    <th>가수</th>
                    <th>제목</th>
                    <th>일카운트</th>
                  </tr>
                </thead>
                <tbody>
                  {datadummy.data.slice(0, datalist.numbern).map((data) => (
                    <tr>
                      <td>{data.ranking}</td>
                      <td>{data.pre_ranking}</td>
                      <td>
                        {data.song.map((data) =>
                          data.artists.map((res) => res.name)
                        )}
                      </td>
                      <td>{data.song.map((data) => data.name)}</td>
                      <td>{data.daily_count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Button onClick={numadd}>더보기</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChartList;
