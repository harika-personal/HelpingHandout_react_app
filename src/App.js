import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Router, Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import Test from './test/test';
// import Articles from './components/Articles';
import NavigationBar from './components/NavBar';
import AboutUS from './components/AboutUs';
import ListingsCard from './components/ListingsCard';
import ListingsGrid from './components/ListingsLayout';
import LandingPage from './pages/LandingPage';
// import FlashVolunteerList from './components/FlashVolunteer';

function App() {
  return (
    <HashRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        {/* <Route path="/home" element={<AboutUS/>}/> */}
        <Route path="/home" element={<LandingPage/>}/>
        {/* <Route path="/home/Listings" element={<ListingsCard/>}/> */}
        <Route path="/home/test" element={<Test/>} />
        <Route path="/home/searchedlistings" element={<Test/>}/>
        <Route path="/home/listings" element={<ListingsGrid/>}/>
        {/* <Route path="/home" element={<LandingPage/>}/> */}
        {/* <Route path="/volunteerwithus" element={<FlashVolunteerList/>}/> */}
        <Route path="/home/test" element={<Test/>} />
        {/* <Route path="/listings" element={<Test/>} /> */}
      </Routes>

    </HashRouter>
  );
}

export default App;
