import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import * as datalist from "../components/Ifroute";

ChartJS.register(...registerables);

const ChartResult = () => {
  const hstyle = {
    margin: "0.3rem",
  };

  return (
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <section class="col-lg-12 connectedSortable ui-sortable">
            <div class="card card-info card-outline">
              <div class="card-header ">
                <a
                  href="/inflowdata"
                  type="button"
                  class="btn btn-info"
                  style={hstyle}
                >
                  유임 이탈자 데이터
                </a>
                <a type="button" class="btn btn-info" style={hstyle}>
                  발매일 하트 추이
                </a>
                <button type="button" class="btn btn-info" style={hstyle}>
                  차트 자세히 보기
                </button>
              </div>
              <div class="card-body">
                <div class="col-lg-10" style={{ marginLeft: "5rem" }}>
                  <Line
                    data={datalist.IntegrationData}
                    options={datalist.IntegrationOption}
                    height={200}
                    width={1400}
                  />
                </div>
                <div class="col-lg-8" style={{ marginLeft: "20rem" }}>
                  <div class="card card-info card-outline">
                    <div class="card-body table-responsive p-0">
                      <table class="table table-bordered m-0">
                        <thead>
                          <tr>
                            <th>멜론</th>
                            <th>지니</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Some Product</td>
                            <td>$13 USD</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2번째 차트 데이터 */}
            <div class="card ">
              <div class="card-body">
                <div class="col-lg-10" style={{ marginLeft: "5rem" }}>
                  <Line
                    data={datalist.GenderData}
                    options={datalist.GenderOption}
                    height={200}
                    width={1400}
                  />
                </div>

                <div class="col-lg-8" style={{ marginLeft: "20rem" }}>
                  <div class="card card-info card-outline">
                    <div class="card-body table-responsive p-0">
                      <table class="table table-bordered m-0">
                        <thead>
                          <tr>
                            <th>남</th>
                            <th>여</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>10000</td>
                            <td>50000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3번째 차트 데이터 */}
            <div class="card">
              <div class="card-body">
                <div
                  class="col-lg-10 text-muted"
                  style={{ marginLeft: "5rem" }}
                >
                  <Line
                    data={datalist.ChangeData}
                    options={datalist.ChangeOption}
                    height={200}
                    width={1400}
                  />
                </div>

                <div class="col-lg-8" style={{ marginLeft: "20rem" }}>
                  <div class="card card-info card-outline">
                    <div class="card-body table-responsive p-0">
                      <table class="table table-bordered m-0">
                        <thead>
                          <tr>
                            <th>날짜</th>
                            <th>누적 좋아요</th>
                            <th>일일 증가량</th>
                            <th>증가량의 변화</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Some Product</td>
                            <td>100</td>
                            <td>1000</td>
                            <td>2000</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default ChartResult;
