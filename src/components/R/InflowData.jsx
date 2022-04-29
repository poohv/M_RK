import React from "react";

const InflowData = () => {
  return (
    <div class="content-wrapper">
      <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12" style={{ marginTop: "10px" }}>
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">유임 이탈자 데이터</h3>
                </div>
                <div class="card-body pad table-responsive">
                  <p class="text-center">윤종신-좋니</p>
                  <table class="table table-bordered text-center">
                    <tbody>
                      <tr>
                        <th>날짜</th>
                        <th>시 간</th>
                        <th>일간</th>
                        <th>
                          멜론 <code>(감상자)</code>
                        </th>
                        <th>
                          유저<code>(6:4)</code>
                        </th>
                        <th>
                          유입<code>(스트카드)</code>
                        </th>
                      </tr>
                      <tr>
                        <td rowspan="2">1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
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
  );
};

export default InflowData;
