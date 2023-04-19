import React from 'react';
import "./About.css";
import { Container } from 'react-bootstrap';
import Aboutimage from "../../assets/img/aboutimg.jpg";


function About() {
  return (
    <div className='about-container'>
      <section>
        <div className='about-section1'>
        <h1>About Us</h1> 
        </div>
      </section>
      <Container>
        <div className='about-content-container'>
        <div className='about-content'>
        <p><h3>We were a team of just 50 people when we started this company in 2007 in Chennai now we are branched and our team has turned into innumerable. The Pioneers who envisioned the company's vision and future has made the company outstanding among the competition in this contemporary world. Our Ecommerce website provides all the products ranging from A-Z .Our Supply Chain Management system and Inventory Mangement makes the delivery hassle free and punctual giving a smile on the face of customers who use our website, And our Return Policy makes it easy for the customers to return damaged products  </h3></p>
        </div>
      <div className='about-content-img'>
        <img src={Aboutimage} height="400px" width="500px" alt="no image available"/>
        </div>
        </div>
        
         
     
      
      </Container>
      <div className='about-motto'>
        <div className='about-motto-title'>
          OUR MOTTO
        </div>
        <p>"Our Company service will be always be oriented towards providing best experience for our customers"</p>
      </div>
         
      
     
    </div>
  )
}

export default About
