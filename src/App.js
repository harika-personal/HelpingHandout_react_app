import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Test from './test/test';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/test"/>}/>
        <Route path="/test" element={<Test/>} />
      </Routes>

    </HashRouter>
  );
}

export default App;
