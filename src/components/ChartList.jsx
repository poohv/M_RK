import React, { useState, useEffect } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import datadummy from "../data.json";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import DataTable from "react-data-table-component";

ChartJS.register(...registerables);

function ChartList() {
  const location = useLocation();
  const [datalist, setDatalist] = useState({ numbern: 10 });

  function numadd() {
    setDatalist({
      ...datalist,

      numbern: datalist.numbern + 10,
    });
    console.log(datalist.numbern);
  }

  useEffect(() => {}, [datalist]);

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

  const columns3 = [
    {
      name: "순위",
      selector: (row) => row.ranking,
      sortable: true,
      grow: 0,
      center: true,
      compact: true,
      style: {
        color: "black",
      },
    },
    {
      name: "1시간전",
      selector: (row) => row.pre_ranking,
      compact: true,

      sortable: true,
      center: true,
    },
    {
      name: "가수",
      selector: (row) =>
        row.song.map((res) => res.artists.map((data) => data.name)),
      sortable: true,
      center: true,
    },
    {
      name: "제목",
      selector: (row) => row.song.map((res) => res.name),
      sortable: true,
      center: true,
    },
  ];

  const handleChange = ({ selectedRows }) => {
    console.log("Selected Rows: ", selectedRows);
  };

  return (
    <div class="content-wrapper">
      <Line data={data} options={options} width={700} height={200} />

      <section class="content">
        <div class="container-fluid">
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">멜론 top 100</h3>
            </div>
            <div class="card-body">
              <DataTable
                pagination
                columns={columns3}
                data={datadummy.data.map((res) => res)}
                selectableRows
                onSelectedRowsChange={handleChange}
              />
            </div>
            {/* <div class="card-header">
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
            </div>*/}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ChartList;
