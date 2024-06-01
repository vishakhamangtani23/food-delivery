import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
const LoginPopup = ({ setShowLogin }) => {

  const [currentState, setCurrentState] = useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? <></> :
            <input type="text" placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required />
          <input type="password" placeholder='Your password' required />
        </div>
        <button>{currentState === "Sign Up" ? "create acc " : "login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" /><p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, deleniti?
          </p>
        </div>
        {currentState === "Login" ? <p>Create new account? <span onClick={() => { setCurrentState("Sign Up") }}>CLick here</span></p> :
          <p>Already have an acc ? <span onClick={() => { setCurrentState("Login") }}>Login here </span></p>
        }


      </form>
    </div>
  )
}

export default LoginPopup
