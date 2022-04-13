
import React from 'react';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';
import Barchart from './components/ChartList';
import Main from './components/main';
import Sidermenu from './components/menu_sider'

function App() {
  return (
   
  
    <BrowserRouter>
    <Routes>
    <Route exact path = {"/"}  element = {<Main/>}></Route>
    <Route exact path = {"/chart"}  element = {<Barchart/>}></Route>
    </Routes>
  </BrowserRouter>
  
  
  );
}

export default App;