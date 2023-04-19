import React from 'react';
import "./Footer.css";
import facebookicon from "../../assets/icons/facebook-icon.png";
import youtubeicon from "../../assets/icons/youtube-icon.png";
import twittericon from "../../assets/icons/twitter-icon.png";
import playstoreicon from "../../assets/icons/play-store-icon.png";

function Footer() {
  return (
    <div className='footer-container'>
     <div className='footer-help-section'>
      <div className='footer-help-section-title'>
       <h3>Help</h3> 
      </div>
      <div>Payments</div>
      <div>Shipping</div>
      <div>Cancellation & Returns</div>
      <div>FAQ</div>
      <div>Report Infringment</div>
     </div>
     <div className='footer-policy-section'>
      <div className='footer-policy-section-title'>
       <h3>Policy</h3> 
        </div>
      <div>Return Policy</div>
      <div>Terms of Use</div>
      <div>Security</div>
      <div>Privacy</div>
      <div>Sitemap</div>
     </div>
     <div className='footer-socialmedia-section'>
      <div className='footer-socialmedia-section-title'>
       <h3>Social Media</h3> 
      </div>
      <div className='footer-socialmedia-section-logo-section'>
      <div className='footer-socialmedia-section-logo'>Facebook <img src={facebookicon} width = "30px"alt="no image"></img></div>
      <div className='footer-socialmedia-section-logo'>Twitter<img src={twittericon} width = "30px"alt="no image"></img></div>
      <div className='footer-socialmedia-section-logo'>Youtube<img src={youtubeicon} width = "30px"alt="no image"></img></div>
      </div>
     
     </div>
     
     <div className='footer-office-address-section'>
      <div>
        <h3>Registered Office Address</h3>
        <div>
          No 52 Shastri Road <br></br>
          Chennai 600052
          Tamil Nadu <br></br>
          India
        </div>
      </div>
      
     </div>
     <div className='footer-mail-section'>
      <div>
        <h3>Mail Us</h3>
        <p>barterwdcash@gmail.com</p>
      </div>
     </div>
    </div>

  )
}

export default Footer
