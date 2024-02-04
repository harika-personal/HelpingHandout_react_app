import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Test from './test/test';
// import AboutUS from './pages/AboutUs';
import Articles from './components/Articles';
import NavigationBar from './components/NavBar';


function App() {
  return (
    <HashRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        {/* <Route path="/home" element={<AboutUS/>}/> */}
        <Route path="/home" element={<Articles/>}/>
        <Route path="/home/home/test" element={<Test/>} />
        <Route path="/listings" element={<Test/>} />
      </Routes>

    </HashRouter>
  );
}

export default App;
