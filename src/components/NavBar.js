import React from 'react';
import '../styles/NavBar.css'; 
import image from '../assets/WebsiteImage.png';
import image2 from '../assets/login_icon.png';
import { useNavigate } from 'react-router-dom';

const NavigationBar = () => {
  let navigate = useNavigate();
  return (
    <nav className="navigation-bar">
      <div className="nav-logo">
        <a href="/home">
            <img src={image}/>
        </a>
      </div>
      <div className="nav-links">
        <a href="/volunteerwithus">Volunteer with Us</a>
        <a href="/listings">Find Donations</a>
      </div>
      <div className="nav-donate">
        <button onClick={() => { 
          navigate("/donate");
        }}>
          Want to donate?
        </button>
      </div>
      <div className="nav-user">
        <button onClick={() => { 
          navigate("/login");
         }}>
          Log in / Sign Up
          <img src={image2}/>
        </button>
        
      </div>
    </nav>
  );
}

export default NavigationBar;


