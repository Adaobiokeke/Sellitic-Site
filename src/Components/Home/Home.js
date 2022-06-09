import React from "react";
import Nav from "../Nav/Nav";
import Grid from "@material-ui/core/Grid";
import "./Home.css";
import Sellitic from "../Video/Sellitic_journey_video.mp4";
import Slider from "../Slider/Slider";
import Welcome from "../Assets/sellitic_artisan_welcome.jpg";
import AfomaRewards from "../Assets/Gold_Currency_Coins.jpg";
import Humanitarian from "../Assets/humanitarian collage.png";
import MicroWP from "../Assets/group-of-young-volunteers-embracing-at-park-2021-08-26-16-33-25-utc.jpg";
import Footer from "../Footer/footer"
import {Link} from "react-router-dom"




const Home = () => {
  return (
    <div className="main-container" id ='home'>
      <Nav />
      <section>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <h1>
              The NextGen Marketplace for the Creative and Handmade Sector
            </h1>
            <h3>
              SELLITIC is a decentralized marketplace within the AFOMA ecosystem
              that enhances the informal (gig) economy in the handicraft sector.
              Our marketplace will drive inclusion by offering cryptocurrency as
              an option for payment and settlement which will drive equality and
              reduce the barriers to entry and operations for artists and
              artisans across developing regions in Africa and the globe.
            </h3>
            <br />
            <h3>
              Through SELLITIC marketplace engagements, our artists, artisans
              and buyers partake in the governance of the AFOMA ecosystem as
              they earn tokens (AFOMA Rewards).
            </h3>
            {/* <br />
            <button className="mini-button">
              <a
                href="https://www.sellitic.com/"
                rel="noreferrer"
                target="blank"
              >
                Marketplace
              </a>
            </button> */}
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
          <video controls width="80%" style={{ padding: "10% 10%" }}>
            <source src={Sellitic} type="video/mp4" />
          </video>
        </Grid>
        </Grid>
      </section>
      <br />
      <section className="mwp-sec">
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
            <img src={MicroWP} alt="micro-worker-img" className="worker-img" />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h1>The Micro-Worker Program</h1>
            <h3>
              As part of AFOMA and SELLITIC’s commitment to drive inclusion and
              equality, we will support artists and artisans that are either
              illiterate or not technologically savvy. We will create a support
              system through a micro-worker program that will leverage youth
              across developing regions to carry out micro tasks such as
              onboarding artists and artisans to SELLITIC and supporting them
              through the orientation process and their ongoing business
              operations on the platform.
            </h3>
            <br />
            <h3>
              We will incentivize these micro workers in the AFOMA native token
              as these tasks are completed and validated.
            </h3>
          </Grid>
         
        </Grid>
      </section>
      <br />
      <section id='humanitarian'>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6}>
            <h1 >A Humanitarian Alliance</h1>
            {/* <br></br> */}
            <h3>
              SELLITIC will partner with NGOs whose mission is around supporting
              artists and artisans within the community or region they are
              engaged with. This will allow us to build an alliance that will be
              beneficial to artists and artisans that exist in rural communities
              where we are unable to access.
            </h3>
            <br />
            <h3>
              Our marketplace will allow our users to tip (using our native
              utility token) NGOs that are members of the alliance to support
              their existing initiatives or mission.
            </h3>
            <br />
            <h3>
              Our alliance will also include youth, where they can be leveraged
              as boots on the ground to seek out artists and artisans in rural
              communities. Thereby encouraging and enhancing the “gig” economy.
            </h3>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <img
              src={Humanitarian}
              alt="humanitarian-aid-img"
              className="aid-img"
            />
          </Grid>
        </Grid>
      </section>
      <br />
      <br />
      <section className="mwp-sec" id='rewardsystem'>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
            <img
              src={AfomaRewards}
              alt="afoma-rewards_img"
              className="af-rewards"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <h1>AFOMA Rewards</h1>
            {/* <br /> */}
            <h3>
              Our marketplace offers incentives (in our native utility token) to
              our community (artists, artisans and customers) through
              marketplace engagements. These include purchases, referrals and
              feedback offered based on acceptable business practices displayed
              by our artists and artisans.
            </h3>
            <br />
            <h3>
              AFOMA rewards will not only enhance a creator economy but it will
              also drive an ownership economy that offers governance rights to
              our community (our token holders) and the opportunity to unlock
              features across the AFOMA ecosystem.
            </h3>
          </Grid>
          {/* <Grid item xs={12} sm={12} md={1}></Grid> */}
         
        </Grid>
      </section>
      <section className="carouse-sec">
        <Slider />
      </section>
      <section className= 'pilot-sec'>
        <h1 style={{textAlign: 'center'}}>The Sellitic Pilot Program</h1>
        <h3 className="pilot">
          We are commencing our pilot program in July, 2022. 
          As a result, we are lookin for artists and artisans from Nigeria and Canada to be part of what we are hoping to achieve at SELLITIC.
        </h3>
        <br/>
        <h3 className="pilot1">
          Click below for details
        </h3>
        <br/>
        <Link to="/joinus">
          
        <button className="mini-button pilot-btn">
                Join Us
            </button> 
            </Link>
      </section>
      <section className="vid-sec">
      <h1 style={{textAlign: 'center'}}>To Drive Prosperity Within the Informal Economy </h1>
          <br />
      </section>
      <section className="footer-sec">
       <Footer/>
      </section>
    </div>
  );
};

export default Home;
