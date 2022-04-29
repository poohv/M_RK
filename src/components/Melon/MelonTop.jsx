import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MelonTop = () => {
  const [filterText, setFilterText] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">Top 100</h3>
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
                        showTimeInput
                      />
                    </div>
                    <label
                      class=" col-form-label "
                      style={{ marginLeft: "10%" }}
                    >
                      시간&nbsp;
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="입력 해주세요"
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
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
      </div>
    </div>
  );
};

export default MelonTop;
