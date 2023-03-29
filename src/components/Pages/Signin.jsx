import React from 'react';
import "./Signin.css";

function Signin() {
  return (
    <div className='signin-form-container'>
      
        <form>
          <div className='signin-form-title'><h2>SignIn</h2></div>
          <div className='signin-form-email-id'>
             Email:<br/>
          <input className="input-box" type="text" placeholder='Enter your mail id'/>
         </div>
         <div className='sigin-form-password'>
            Password:<br/>
            <input className="input-box" type="text" placeholder='Enter password'/>
          </div>
          
          <div className='signin-form-submit-button'>
          <button>SUBMIT</button>
          </div>
        </form>
     
      
    </div>
  )
}

export default Signin
