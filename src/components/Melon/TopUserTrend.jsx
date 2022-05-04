import React, { useState, useEffect } from "react";
import datadummy from "../../data.json";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

const TopUserTrend = () => {
  const [filterText, setFilterText] = useState({
    title: "",
    singer: "",
    time: null,
    formatdate: new Date(),
    chdate: "",
    chtime: "",
  });

  function click(e) {
    if (filterText.formatdate !== null) {
      const date =
        filterText.formatdate.getFullYear() +
        "/" +
        (filterText.formatdate.getMonth() + 1).toString() +
        "/" +
        filterText.formatdate.getDate();
      setFilterText({ ...filterText, chdate: date });
    } else if (filterText.time !== null) {
      const time =
        filterText.time.getHours() + ":" + filterText.time.getMinutes();
      setFilterText({ ...filterText, chtime: time });
    }
  }

  console.log(filterText);
  return (
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Melon Top 100 이용자수 추이</h3>
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
                        setFilterText({ ...filterText, singer: e.target.value })
                      }
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label class=" col-form-label">날짜</label>
                  <div class="input-group col-sm-7">
                    <div style={{ width: "42%" }}>
                      <DatePicker
                        className="form-control"
                        dateFormat="yyyy/MM/dd"
                        selected={filterText.formatdate}
                        onChange={(date) =>
                          setFilterText({ ...filterText, formatdate: date })
                        }
                        isClearable={true}
                      />
                    </div>
                    <label
                      class=" col-form-label "
                      style={{ marginLeft: "12%" }}
                    >
                      시간&nbsp;
                    </label>
                    <div style={{ width: "30%" }}>
                      <DatePicker
                        className="form-control"
                        selected={filterText.time}
                        onChange={(date) =>
                          setFilterText({ ...filterText, time: date })
                        }
                        showTimeSelect
                        showTimeSelectOnly
                        timeIntervals={30}
                        timeCaption="Time"
                        dateFormat="h:mm aa"
                        isClearable={true}
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    class="btn btn-success"
                    style={{ width: "5%" }}
                    onClick={click}
                  >
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card card-success card-outline">
            주호 - 내가 아니라도
            <div class="card-body pad table-responsive">
              <div
                class="btn-group"
                style={{ marginLeft: "50%", marginBottom: "1%" }}
              >
                <button
                  type="button"
                  title="Previous month"
                  aria-pressed="false"
                  class="fc-prev-button btn btn-default"
                >
                  <span class="fa fa-chevron-left"></span>이전
                </button>
                <button
                  type="button"
                  title="Next month"
                  aria-pressed="false"
                  class="fc-next-button btn btn-default"
                >
                  다음
                  <span class="fa fa-chevron-right"></span>
                </button>
              </div>
              <table class="table table-bordered text-center">
                <tbody>
                  <tr>
                    <th colSpan={6}>
                      {filterText.chdate + " ~ " + filterText.chdate + 24}
                    </th>
                  </tr>
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
                  <tr></tr>
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

export default TopUserTrend;
