import React, { useState } from "react";
import "./Nav.css";
import Logo from "../Assets/selltic_logo_art.png";
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import {Link} from "react-router-dom"



const Nav = () => {
  const [isMobile, setIsmobile] = useState(false);
  return (
    <nav className="nav-container">
      <div className="logo-div">
        <img src={Logo} alt="Sellitic-logo" className="logo"/>
      </div>
      <div className={isMobile ? "nav-pages-mobile": "nav-pages"}
      onClick={() => setIsmobile(false)}
      >
        <a href="/#home">
          <button className="nav-btn">Welcome</button>
        </a>
        <Link to='/joinus'>
        <a href="" target="blank">
          <button className="nav-btn">Join Us</button>
        </a>
        </Link>
        <a href="/#humanitarian">
          <button className="nav-btn">Humanitarian Coalition</button>
        </a>
        <a href="/#rewardsystem">
          <button className="nav-btn" >Reward System</button>
        </a>
      </div>
      <button className="hamburger-btn" 
      onClick={() => setIsmobile(!isMobile)}
      >{isMobile ?  'X' : <DensityMediumIcon/>}</button>
    </nav>
  );
};

export default Nav;
