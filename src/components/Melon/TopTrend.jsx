import React, { useState, useEffect } from "react";
import datadummy from "../../data.json";
import { Link } from "react-router-dom";

const TopTrend = () => {
  const [filterText, setFilterText] = useState({ title: "", singer: "" });

  return (
    <div class="content-wrapper">
      <div class="row p-3">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Melon Top 100 순위 추이</h3>
            </div>

            <form>
              <div class="card-body" style={{ marginLeft: "20%" }}>
                <div class="form-group row">
                  <label class=" col-form-label">곡명</label>
                  <div class="input-group col-sm-7">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="입력 해주세요"
                      value={filterText.title}
                      onChange={(e) =>
                        setFilterText({ ...filterText, title: e.target.value })
                      }
                    />
                    <label
                      class=" col-form-label "
                      style={{ marginLeft: "10%" }}
                    >
                      가수명&nbsp;
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="입력 해주세요"
                      value={filterText.singer}
                      onChange={(e) =>
                        setFilterText({ ...filterText, ginger: e.target.value })
                      }
                    />
                  </div>
                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ width: "5%" }}
                  >
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-12 col-md-12 col-lg-2">
          <div class="mb-3">
            <button class="btn btn-success" style={{ marginRight: "5px" }}>
              Melon
            </button>
            <button class="btn btn-warning">Genie</button>
          </div>
        </div>

        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card card-success card-outline text-center">
            주호 - 내가 아니라도
            <div class="card-body pad table-responsive">
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th>순위</th>
                    <th>좋아요</th>
                    <th>곡정보</th>
                    <th>좋아요</th>
                    <th>1시간</th>
                    <th>
                      유입<code>(스트카드)</code>
                    </th>
                  </tr>

                  {datadummy.data.slice(0, 5).map((data, index) => (
                    <tr key={index}>
                      <td>{data.ranking}</td>
                      <td>{data.pre_ranking}</td>
                      <td>
                        <Link to={"/melondetail/" + data.ranking}>
                          {data.song.map((data) =>
                            data.artists.map((res) => res.name)
                          )}
                        </Link>
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
  );
};

export default TopTrend;
