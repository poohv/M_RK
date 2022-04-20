import React from 'react';
import Login from './Login';
import { BrowserRouter, Router, Route , Routes } from 'react-router-dom';

const Ifroute = (
    ) => {
    return (
        <Routes>
        <Route  path = {"/login"}  element = {<Login/>}></Route>   
        </Routes>  
    );
};

export default Ifroute;