import React from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';
import Barchart from './components/ChartList';
import Main from './components/Main';
import Sidermenu from './components/menu_sider';
import Notice from './components/Manager/Notice';
import NoticeAdd from './components/Manager/NoticeAdd';
import Noticedetail from './components/Manager/NoticeDetail';
import Heartpg from './components/Manager/Heartpg';
import HeartTitle from './components/Manager/HeartTitle';
import ChartData from './components/R/ChartData';
import Login from './components/Login';
import InflowData from './components/R/InflowData';
import RelData from './components/R/ReleaseDate';
import Chartdetail from './components/R/ChartDetail';
import MelonTop from './components/Melon/MelonTop'


function App() {
  return (
    <BrowserRouter>
    <Sidermenu/> 
    <Routes>
    <Route  path = {"/"}  element = {<Main/>}></Route>
    <Route  path = {"/notice"}  element = {<Notice/>}></Route>
    <Route  path = {"/Noticedetail"}  element = {<Noticedetail/>}></Route>
    <Route path=":keyword" element={<Noticedetail/>} />
    <Route  path = {"/Noticeadd"}  element = {<NoticeAdd/>}></Route>
    <Route  path = {"/chart"}  element = {<Barchart/>}></Route>
    <Route  path = {"/Heartpg"}  element = {<Heartpg/>}></Route>
    <Route  path = {"/Hearttitle"}  element = {<HeartTitle/>}></Route>
    <Route  path = {"/chartdata"}  element = {<ChartData/>}></Route>
    <Route  path = {"/login"}  element = {<Login/>}></Route>   
    <Route  path = {"/inflowdata"}  element = {<InflowData/>}></Route>   
    <Route  path = {"/Reldata"}  element = {<RelData/>}></Route>   
    <Route  path = {"/Chartdetail"}  element = {<Chartdetail/>}></Route>   
    <Route  path = {"/melontop"}  element = {<MelonTop/>}></Route>   
    </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
