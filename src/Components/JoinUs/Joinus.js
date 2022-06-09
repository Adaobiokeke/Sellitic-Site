import React from 'react'
import JoinusNav from "../Nav/JoinusNav";
import Grid from '@material-ui/core/Grid'
import Artisan from '../Assets/sellitic_artisan_welcome.jpg'
import {Link} from 'react-router-dom'
import './Joinus.css'

const Joinus = () => {
  return (
    <div className="main-container">
      <JoinusNav />
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={6}>
        <h1 className="pilot">PILOT PROGRAM</h1>
        <h3>
        SELLITIC is a marketplace that is built to drive social impact through a mission-first business model. Our purpose is to drive prosperity for artists and artisans that partake in the handicraft sector through our marketplace which is part of the AFOMA ecosystem.
        </h3>
        <br/>
        <h3>
        Our mission will allow us to make a difference for our artists and artisans when compared to other marketplaces. For starters, we desire to enable artists and artisans in developing regions by eliminating barriers of entry and operations which will allow them to scale within and beyond their local economy. We will achieve this by making our marketplace affordable from a subscription and commission-based perspective.
        </h3>
        <br/>
        <br/>
        <a href='https://share.hsforms.com/1JS7hUwoZROCzEpGcYoJWSQco3zp' target='_blank' rel='noreferrer'>
        <button className="mini-button2">
            Register Now
          </button> 
          </a>
        <h3>
          <br/>
        We plan to allow our artists and artisans to retain 90% of their income in the sales of their products within our marketplace. We will achieve this by not charging you for shipping labels, payment processing fees, payout conversion fees and no upfront operational costs especially when it comes to shipping. All these made possible by creating a value network that will help redefine our cost structure, thereby making our marketplace affordable for artists and artisans.
       </h3>
       <br/>
        <h3>
        In addition, our decentralized approach will allow our artists and artisans to be a part of our governance model within SELLITIC. This will allow our artists and artisans to have voting rights on decisions across our ecosystem to ensure we stay true to our commitment of offering a fair access to the global market and promoting social equality.
        </h3>
        <br/>
        <br/>
        <a href='https://share.hsforms.com/1JS7hUwoZROCzEpGcYoJWSQco3zp' target='_blank' rel='noreferrer'>
        <button className="mini-button2">
            Register Now
          </button> 
          </a>
        <h3>
        <br/>
        We are seeking 200 artists and artisans to be part of our pilot program. Upon completion of the pilot, we will offer the artists and artisans that remain with and choose to sell on our marketplace, a free 2 years subscription. 
        </h3>
        <br/>
        <h3>
        If you are interested, please fill out the form below to be added to our whitelist indicating your interest in piloting with us
        </h3>
        <br/>
        <br/>
        <a href='https://share.hsforms.com/1JS7hUwoZROCzEpGcYoJWSQco3zp' target='_blank' rel='noreferrer'>
        <button className="mini-button2">
            Register Now
          </button> 
          </a>
       <br/>
      </Grid>
      <Grid item xs={12} sm={12} md={6}>
        <img src={Artisan} alt= 'pilot-img' className='pilotimage'/>
        </Grid>
    </Grid>

      </div>
  )
}

export default Joinus