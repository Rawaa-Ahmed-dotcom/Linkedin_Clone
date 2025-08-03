import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Login from './pages/Login';
import Home from './pages/Home';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/login" element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
