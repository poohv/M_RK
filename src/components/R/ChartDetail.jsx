import React, { useState, useEffect } from "react";
import datadummy from "../../data.json";

const ChartDetail = () => {
  const [datalist, setDatalist] = useState({
    MelonNum: 3,
    MelonTop: 3,
    genie: 3,
  });

  function numadd(params, e) {
    "MelonNum" === params
      ? setDatalist({
          ...datalist,
          MelonNum: datalist.MelonNum + 7,
        })
      : "MelonTop" === params
      ? setDatalist({
          ...datalist,
          MelonTop: datalist.MelonTop + 7,
        })
      : setDatalist({
          ...datalist,
          genie: datalist.genie + 7,
        });
  }

  useEffect(() => {});

  return (
    <div class="content-wrapper">
      <div class="content-header">
        <p class="text-center">
          <h3>윤종신-좋니</h3>
        </p>
      </div>

      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12" style={{ marginTop: "10px" }}>
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">멜론 실시간 차트</h3>
                  <button
                    class="fas bg-gradient-primary"
                    onClick={(e) => {
                      numadd("MelonNum");
                    }}
                  >
                    +
                  </button>
                </div>

                <div class="card-body pad table-responsive">
                  <table class="table table-bordered text-center">
                    <tbody>
                      <tr>
                        <th>시간</th>
                        <th>좋아요</th>
                        <th>재생시간</th>
                        <th>멜론 재생시간</th>
                        <th>유저</th>
                        <th>
                          유입<code>(스트카드)</code>
                        </th>
                      </tr>
                      {datadummy.data
                        .slice(0, datalist.MelonNum)
                        .map((data, index) => (
                          <tr key={index}>
                            <td>{data.ranking}</td>
                            <td>{data.pre_ranking}</td>
                            <td>
                              {data.song.map((data) =>
                                data.artists.map((res) => res.name)
                              )}
                            </td>
                            <td>{data.song.map((data) => data.name)}</td>
                            <td>{data.daily_count}</td>
                            <td>{data.daily_count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12" style={{ marginTop: "10px" }}>
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">멜론 TOP 100</h3>
                  <button
                    class="fas bg-gradient-primary "
                    onClick={(e) => {
                      numadd("MelonTop");
                    }}
                  >
                    +
                  </button>
                </div>

                <div class="card-body pad table-responsive">
                  <table class="table table-bordered text-center">
                    <tbody>
                      <tr>
                        <th>시간</th>
                        <th>좋아요</th>
                        <th>재생시간</th>
                        <th>멜론 재생시간</th>
                        <th>유저</th>
                        <th>
                          유입<code>(스트카드)</code>
                        </th>
                      </tr>
                      {datadummy.data
                        .slice(0, datalist.MelonTop)
                        .map((data, index) => (
                          <tr key={index}>
                            <td>{data.ranking}</td>
                            <td>{data.pre_ranking}</td>
                            <td>
                              {data.song.map((data) =>
                                data.artists.map((res) => res.name)
                              )}
                            </td>
                            <td>{data.song.map((data) => data.name)}</td>
                            <td>{data.daily_count}</td>
                            <td>{data.daily_count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12" style={{ marginTop: "10px" }}>
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">지니 실시간 차트</h3>
                  <button
                    class="fas bg-gradient-primary btn-outline-primary "
                    onClick={numadd}
                  >
                    +
                  </button>
                </div>

                <div class="card-body pad table-responsive">
                  <table class="table table-bordered text-center">
                    <tbody>
                      <tr>
                        <th>시간</th>
                        <th>좋아요</th>
                        <th>재생시간</th>
                        <th>멜론 재생시간</th>
                        <th>유저</th>
                        <th>
                          유입<code>(스트카드)</code>
                        </th>
                      </tr>
                      {datadummy.data
                        .slice(0, datalist.genie)
                        .map((data, index) => (
                          <tr key={index}>
                            <td>{data.ranking}</td>
                            <td>{data.pre_ranking}</td>
                            <td>
                              {data.song.map((data) =>
                                data.artists.map((res) => res.name)
                              )}
                            </td>
                            <td>{data.song.map((data) => data.name)}</td>
                            <td>{data.daily_count}</td>
                            <td>{data.daily_count}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChartDetail;
