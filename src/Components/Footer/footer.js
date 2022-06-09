import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import TelegramIcon from "@mui/icons-material/Telegram";
import Medium from "../Assets/medumicon-removebg.png";



const footer = () => {
  return (
    <footer className="footer-container">
      <h1>Connect with us</h1>
      <div className="footer-div">
        <div className="footericon">
          <a
            href="https://www.facebook.com/afomacanada"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookIcon className="icons" />
          </a>
        </div>
        <div className="footericon">
          <a
            href="https://www.twitter.com/afomacanada"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className="icons" />
          </a>
        </div>
        <div className="footericon">
          <a
            href="https://www.linkedin.com/company/sellitic"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon className="icons" />
          </a>
        </div>
        {/* <div className="footericon">
          <a
            href="https://github.com/afomaglobal"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon className="icons" />
          </a>
        </div> */}

        <div className="footericon">
          <a
            href="https://www.instagram.com/afomaglobal/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className="icons" />
          </a>
        </div>

        {/* <div className="footericon">
          <a
            href="https://t.me/afomacommunity"
            target="_blank"
            rel="noreferrer"
          >
            <TelegramIcon className="icons" />
          </a>
        </div> */}

        {/* <div className="footericon">
          <a
            href="https://medium.com/@afomacanada"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Medium} alt="medium-img" className="img-medium" />
          </a>
        </div> */}
      </div>
      <div  className="copyright">
      <p>Copyright © 2022. SELLITIC</p>
      </div>
    </footer>
  );
};

export default footer;
