import React from "react";

const Notice = () => {
  return (
    <div class="row">
      <div class="col-md-6" style={{ marginTop: "10px" }}>
        <div class="card">
          <div class="card-header border-transparent">
            <h3 class="card-title">공지사항</h3>

            <div class="card-tools">
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="collapse"
              >
                <i class="fas fa-minus"></i>
              </button>
              <button
                type="button"
                class="btn btn-tool"
                data-card-widget="remove"
              >
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>

          <div class="card-body p-0">
            <div class="table-responsive">
              <table class="table m-0">
                <thead>
                  <tr>
                    <th>Number</th>
                    <th>제목</th>
                    <th>작성자</th>
                    <th>날짜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR9842</a>
                    </td>
                    <td>Call of Duty IV</td>
                    <td>
                      <span class="badge badge-success">Shipped</span>
                    </td>
                    <td>
                      <div
                        class="sparkbar"
                        data-color="#00a65a"
                        data-height="20"
                      >
                        90,80,90,-70,61,-83,63
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR1848</a>
                    </td>
                    <td>Samsung Smart TV</td>
                    <td>
                      <span class="badge badge-warning">Pending</span>
                    </td>
                    <td>
                      <div
                        class="sparkbar"
                        data-color="#f39c12"
                        data-height="20"
                      >
                        90,80,-90,70,61,-83,68
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a href="pages/examples/invoice.html">OR7429</a>
                    </td>
                    <td>iPhone 6 Plus</td>
                    <td>
                      <span class="badge badge-danger">Delivered</span>
                    </td>
                    <td>
                      <div
                        class="sparkbar"
                        data-color="#f56954"
                        data-height="20"
                      >
                        90,-80,90,70,-61,83,63
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card-footer clearfix">
            <a href="/NoticeDetail" class="btn btn-sm btn-info float-right">
              글쓰기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notice;
