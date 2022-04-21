
import React from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';
import Barchart from './components/ChartList';
import Main from './components/Main';
import Sidermenu from './components/menu_sider';
import Notice from './components/Notice';
import NoticeAdd from './components/NoticeAdd';
import Noticedetail from './components/NoticeDetail';
import Heartpg from './components/Heartpg';
import HeartTitle from './components/HeartTitle';
import ChartData from './components/ChartData';
import Login from './components/Login';



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
    </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
