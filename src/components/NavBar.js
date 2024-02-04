import React from 'react';
import '../styles/NavBar.css'; 
import image from '../assets/WebsiteImage.png';
import image2 from '../assets/login_icon.png';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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
        {/* <a href="/volunteerwithus">Volunteer with Us</a> */}
        <Link
              to={`/home/listings`}
              className="navbar-left-button"
              style={{ textDecoration: "none" }}
            >
              Volunteer With Us
            </Link>
        {/* <a href="/home/listings">Find Donations</a> */}
        <Link
              to={`/home/listings`}
              className="navbar-left-button"
              style={{ textDecoration: "none" }}
            >
              Find Donations
            </Link>
      </div>
      <div className="nav-donate">
        <button onClick={() => { 
          navigate("/home/listings");
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


