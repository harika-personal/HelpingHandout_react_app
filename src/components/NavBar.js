import React from 'react';
import '../styles/NavBar.css'; 
import image from '../assets/WebsiteImage.png';
import image2 from '../assets/login_icon.png';

const NavigationBar = () => {
  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <a href="/home">
            <img src={image}/>
        </a>
      </div>
      <div className="nav-links">
        <a href="/volunteer">Volunteer with Us</a>
        <a href="/listings">Find Donations</a>
      </div>
      <div className="nav-donate">
        <button onClick={() => { /* logic to handle donation */ }}>
          Want to donate?
        </button>
      </div>
      <div className="nav-user">
        <button onClick={() => { /* logic to handle donation */ }}>
          Log in / Sign Up
          <img src={image2}/>
        </button>
        
      </div>
    </nav>
  );
}

export default NavigationBar;


