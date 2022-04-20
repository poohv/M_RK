import React, { useEffect, useState } from "react";
import * as ReactDOMClient from "react-dom/client";

const Login = () => {
  const container = document.getElementById("lybody");
  container.setAttribute("class", "login-page");

  //console.log(menulist);

  //데이터 찾기
  useEffect(() => {
    async function fetchData() {
      const menulist = document.getElementById("menulist");
      const wrapper = document.getElementById("wpr");
      menulist.remove();
      wrapper.setAttribute("class", "");
    }
    fetchData();
  }, []);

  return (
    <div class="">
      <div class="login-box">
        <div class="card card-outline card-primary">
          <div class="card-header text-center">
            <a href="../../index2.html" class="h1">
              <b>MAVRK</b>
            </a>
          </div>
          <div class="card-body">
            <form action="../../index3.html" method="post">
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="id" />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div class="input-group mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                />
                <div class="input-group-append">
                  <div class="input-group-text">
                    <span class="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-8"></div>

                <div class="col-4">
                  <button type="submit" class="btn btn-primary btn-block">
                    로그인
                  </button>
                </div>
              </div>
            </form>
            <p class="mb-0">
              <a href="register.html" class="text-center">
                회원가입
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
