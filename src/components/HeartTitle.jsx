import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { columns, data } from "../data";

const HeartTitle = () => {
  const [filterText, setFilterText] = useState("");
  const [selectlist, setSelectlist] = useState("");
  const [nume, setNume] = useState(0);
  const tableData = { columns, data };

  const filteredItems = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  //삭제
  const deleteselect = (e) => {
    e.preventDefault();
    console.log(selectlist);
    //api 이어서 구현
    setNume(nume + 1);
  };

  useEffect(() => {
    //초기 데이터 구현
    console.log("랜더링" + nume);
  }, [data]);

  return (
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">하트 추이 곡 등록</h3>
              <a
                class="btn btn-sm btn-info float-right"
                style={{ marginLeft: "5px" }}
                onClick={deleteselect}
              >
                삭제
              </a>
              <a href="/#" class="btn btn-sm btn-info float-right">
                등록
              </a>
            </div>

            <form>
              <div
                class="card-body"
                style={{ width: "500px", marginLeft: "30%" }}
              >
                <div class="form-group row">
                  <label class=" col-form-label">곡 검색</label>
                  <div class="input-group col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="입력 해주세요"
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                    />
                    <span class="input-group-append">
                      <button type="button" class="btn btn-success">
                        <i class="fas fa-search"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </form>
            <DataTable
              columns={columns}
              data={filteredItems}
              noHeader
              defaultSortField="id"
              defaultSortAsc={false}
              pagination
              highlightOnHover
              selectableRows
              onSelectedRowsChange={({ selectedRows }) =>
                setSelectlist(selectedRows)
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeartTitle;
