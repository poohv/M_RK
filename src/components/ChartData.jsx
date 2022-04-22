import React, { useState, useEffect } from "react";
import ChartResult from "./ChartResult";

const ChartData = () => {
  const [filterText, setFilterText] = useState("");
  const [selectlist, setSelectlist] = useState("");

  return (
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">차트 데이터</h3>
            </div>

            <form>
              <div class="card-body" style={{ marginLeft: "20%" }}>
                <div class="form-group row">
                  <label class=" col-form-label">곡</label>
                  <div class="input-group col-sm-7">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="입력 해주세요"
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                    />

                    <label
                      class=" col-form-label "
                      style={{ marginLeft: "10%" }}
                    >
                      가수&nbsp;
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
          <ChartResult></ChartResult>
        </div>
      </div>
    </div>
  );
};

export default ChartData;
