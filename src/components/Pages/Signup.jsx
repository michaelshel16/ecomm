import React from 'react';
import "./Signup.css";

function Signup() {
  return (
    <div className='signup-form-container'>
      
        <form>
          <div className='signup-form-title'><h2>SignUp</h2></div>
          <div className='signup-form-name'>
             Name:<br/>
          <input className="input-box" type="text" placeholder='Enter full name'/>
         </div>
          <div className='signup-form-email-id'>
           Email ID:<br/>
          <input className="input-box"type="email" placeholder='Enter your mail id'/>
          </div>
          <div className='signup-form-password'>
            Password:<br/>
            <input className="input-box" type="text" placeholder='Enter password'/>
          </div>
          <div className='signup-form-contact-no'>
            Mobile no: <br/>
          <input className="input-box" type ="number" placeholder='Enter mobile no'/>
          </div>
          <div className='signup-form-submit-button'>
          <button>SUBMIT</button>
          </div>
        </form>
     
      
    </div>
  )
}

export default Signup
