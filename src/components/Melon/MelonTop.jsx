import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import datadummy from "../../data.json";
import { Link } from "react-router-dom";

const MelonTop = () => {
  const [filterText, setFilterText] = useState({ time: "", formatdate: "" });
  const [startDate, setStartDate] = useState(new Date());
  const [startDate2, setStartDate2] = useState();

  function click(e) {
    if (startDate2 != null) {
      setFilterText({
        formatdate:
          startDate.getFullYear() +
          "/" +
          (startDate.getMonth() + 1).toString() +
          "/" +
          startDate.getDate(),

        time: startDate2.getHours().toString() + ":" + startDate2.getMinutes(),
      });
    }
  }

  return (
    <div class="content-wrapper">
      <div class="row p-3">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Melon Top 100</h3>
            </div>

            <form>
              <div class="card-body" style={{ marginLeft: "20%" }}>
                <div class="form-group row">
                  <label class=" col-form-label">날짜</label>
                  <div class="input-group col-sm-7">
                    <div style={{ width: "45%" }}>
                      <DatePicker
                        className="form-control"
                        dateFormat="yyyy/MM/dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        isClearable={true}
                      />
                    </div>
                    <label
                      class=" col-form-label "
                      style={{ marginLeft: "10%" }}
                    >
                      시간&nbsp;
                    </label>
                    <div style={{ width: "30%" }}>
                      <DatePicker
                        className="form-control"
                        selected={startDate2}
                        onChange={(date) => setStartDate2(date)}
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

export default MelonTop;
