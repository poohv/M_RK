import React, { useState } from "react";
import { Link } from "react-router-dom";

function Menu_sider() {

  const [statusdata, setStatusdata] = useState(false);
  const [multicheck, setMulticheck] = useState();
  const [rollcheck, setRollcheck] = useState('2');
  
  function clickSt(){
        setStatusdata(!statusdata);     
  }

    
    return (
      rollcheck==='' ? console.log(1):
        <div id = "menulist">
            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                </li>
                <li class="nav-item d-none d-sm-inline-block">
                  <a href="/" class="nav-link">Home</a>
                </li>       
              </ul>
            </nav>

          <aside class=" main-sidebar sidebar-dark-primary elevation-4">
          
          
        <div class="sidebar"> 


        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <img src="https://imgs.jobkorea.co.kr/img1/_whitebg/200X80/Co_Logo/Logo/2021/5/25/2y3xo008Rq_jXptfpq3r2eq0eoYgUm_ww2oq.png?v=202204131255&hash=r&serviceCode=CL" alt="Logo" class="brand-image img-circle elevation-3" style={{width:"60%", marginLeft:"15%"}}/>
        <div class="info">
          
          </div>
          </div>  
          <div class="form-inline">
            <div class="input-group" data-widget="sidebar-search">
              <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
              <div class="input-group-append">
                <button class="btn btn-sidebar">
                  <i class="fas fa-search fa-fw"></i>
                </button>
              </div>
            </div>
          </div>
          <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            
              <li class="nav-item">
                <a href="#" class={  multicheck===0 ?'nav-link active':'nav-link'}  onClick={()=>{clickSt(); setMulticheck(0); }}  >
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                    <p>?????????
                      <i class="right fas fa-angle-left"></i>   
                    </p>
                </a>
                <ul class="nav nav-treeview" >
                  
                  <li class="nav-item">  
                  <Link to="/notice" class="nav-link"  onClick={()=>{setMulticheck(0); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                      ?????? ??????
                    
                      </Link>   
                  </li>
                  <li class="nav-item">                  
                    <Link to="/heartpg" class="nav-link" onClick={()=>{setMulticheck(0); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                      ???????????? ?????? ??????
                    
                      </Link>             
                  </li>
                  <li class="nav-item">
                  <Link to="/hearttitle" class="nav-link" onClick={()=>{setMulticheck(0); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                      ???????????? ??? ??????
                    
                      </Link>  
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#" class={  multicheck===1 ?'nav-link active':'nav-link'}  onClick={()=>{clickSt(); setMulticheck(1); }}  >
                  <i class="nav-icon fas fa-th"></i>
                  <p>
                    
                    R
                    <i class="fas fa-angle-left right"></i>
                  
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item" >
                  <Link to="/chartdata" class="nav-link" onClick={()=>{setMulticheck(1); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                      ?????? ?????????                
                      </Link>  
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#"  class={  multicheck===2 ?'nav-link active':'nav-link'}  onClick={()=>{clickSt(); setMulticheck(2); }}>
                  <i class="nav-icon fas fa-copy"></i>
                  <p>
                    MELON
                    <i class="fas fa-angle-left right"></i>
                  
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                  <Link to="/melontop" class="nav-link" onClick={()=>{setMulticheck(2); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                      top 100                
                      </Link>  
                  </li>
                  <li class="nav-item">
                    <Link to="/toptrend" class="nav-link" onClick={()=>{setMulticheck(2); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                    Top 100?????? ??????              
                      </Link>  
                  </li>
                  <li class="nav-item">
                  <Link to="/topusertrend" class="nav-link" onClick={()=>{setMulticheck(2); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                    Top 100 ???????????? ??????               
                      </Link>  
                  </li>
                  <li class="nav-item">
                  <Link to="/weekrank" class="nav-link" onClick={()=>{setMulticheck(2); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                    4??? ?????? ??????             
                      </Link> 
                  </li>
                  <li class="nav-item">
                  
                  <Link to="/Weekranktrend" class="nav-link" onClick={()=>{setMulticheck(2); }}>
                    <i class="nav-icon far fa-circle text-info"></i>
                    4??? ?????? ?????? ??????            
                      </Link> 
                  </li>
                  <li class="nav-item">
                    <a href="pages/layout/top-nav.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>????????? ??????</p>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a href="pages/layout/top-nav.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>????????? ?????? ??????</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#"  class={  multicheck===3 ?'nav-link active':'nav-link'}  onClick={()=>{clickSt(); setMulticheck(3); }}>
                  <i class="nav-icon fas fa-chart-pie"></i>
                  <p>
                    Genie
                    <i class="right fas fa-angle-left"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/charts/chartjs.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>ChartJS</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a href="#"  class={ multicheck===4 ?'nav-link active':'nav-link'}  onClick={()=>{clickSt(); setMulticheck(4); }}>
                  <i class="nav-icon fas fa-tree"></i>
                  <p>
                    Youtube
                    <i class="fas fa-angle-left right"></i>
                  </p>
                </a>
                <ul class="nav nav-treeview">
                  <li class="nav-item">
                    <a href="pages/UI/general.html" class="nav-link">
                      <i class="far fa-circle nav-icon"></i>
                      <p>General</p>
                    </a>
                  </li>     
                </ul>
              </li>                     
            </ul>
          </nav>   
        </div> 
  </aside>  
        </div>
    );
};

export default Menu_sider;