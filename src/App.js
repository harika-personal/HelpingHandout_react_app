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
import FlashVolunteersCard from './components/FlashVolunteersCard';
// import FlashVolunteerList from './components/FlashVolunteer';

function App() {
  return (
    <HashRouter>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Navigate to="/home"/>}/>
        <Route path="/home" element={<LandingPage/>}/>

        
        {/* <Route path="/home/Listings" element={<ListingsCard/>}/> */}
        <Route path="/home/test" element={<Test/>} />
        <Route path="/home/searchedlistings" element={<Test/>}/>
        <Route path="/home/listings" element={<ListingsGrid/>}/>
        {/* <Route path="/home" element={<LandingPage/>}/> */}
        {/* <Route path="/volunteerwithus" element={<FlashVolunteerList/>}/> */}
        <Route path="/home/test" element={<Test/>} />
        <Route path="/home/volunteers" element={<FlashVolunteersCard
        imageUrl="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        
        />}/>
        <Route path="/home/Listings" element={<ListingsCard
        imageUrl="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        location="San Fransisco, CA"
        isLocal="Local"
        description="10 Taco Meals"
        nameOfSource="Mi Corazon"
        
        />}/>

      </Routes>

    </HashRouter>
  );
}

export default App;
