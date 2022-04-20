import React, { useMemo } from "react";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import { columns, data } from "../data";

const Heartpg = () => {
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);
  const tableData = { columns, data };

  const FilterComponent = ({ filterText, onFilter }) => (
    <input
      type="text"
      class="form-control"
      id="exampleInputPassword1"
      placeholder="입력 해주세요"
      value={filterText}
      onChange={onFilter}
    />
  );

  const filteredItems = data.filter(
    (item) =>
      JSON.stringify(item).toLowerCase().indexOf(filterText.toLowerCase()) !==
      -1
  );

  const subHeaderComponent = useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };
    return (
      <FilterComponent
        onFilter={(e) => setFilterText(e.target.value)}
        onClear={handleClear}
        filterText={filterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <div class="content-wrapper">
      <div class="row">
        <div class="col-md-12" style={{ marginTop: "10px" }}>
          <div class="card">
            <div class="card-header">
              <h3 class="card-title">하트 추이 등록</h3>
              <a
                href="/#"
                class="btn btn-sm btn-info float-right"
                style={{ marginLeft: "5px" }}
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
                  <label class=" col-form-label">가수 검색</label>
                  <div class="input-group col-sm-10">
                    <input
                      type="text"
                      class="form-control"
                      id="exampleInputPassword1"
                      placeholder="입력 해주세요"
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
                console.log(selectedRows)
              }
              subHeaderComponent={subHeaderComponent}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heartpg;
