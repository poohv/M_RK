
import React from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';
import Barchart from './components/ChartList';
import Main from './components/Main';
import Sidermenu from './components/menu_sider';
import Notice from './components/Notice';
import NoticeDetail from './components/NoticeDetail';

function App() {
  return (
   
  
    <BrowserRouter>
    <Sidermenu/>
    <Routes>
    <Route exact path = {"/"}  element = {<Main/>}></Route>
    <Route exact path = {"/notice"}  element = {<Notice/>}></Route>
    <Route exact path = {"/NoticeDetail"}  element = {<NoticeDetail/>}></Route>
    <Route exact path = {"/chart"}  element = {<Barchart/>}></Route>
    </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;
