import React, { useContext, useState } from 'react'
import axios from 'axios';
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const LoginPopup = ({ setShowLogin }) => {

  const [currentState, setCurrentState] = useState("Sign Up")
  const [data,setData] = useState({
    name:"",
    email:"",
    password:""
  })

  const onChangeHandler = (event) =>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const {url , token , setToken} = useContext(StoreContext);
  const onLogin = async (event) =>{
    event.preventDefault();
    let newUrl = url;
    if(currentState === "Login"){
      newUrl += "/api/user/login"
    }
    else{
      newUrl += "/api/user/register"
    }
    const response = await axios.post(newUrl,data);
    if (response.data.success) {
      setToken(response.data.token)
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    }
    else{
      alert(response.data.message)
    }

  }

  return (
    <div className='login-popup'>
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? <></> :
            <input type="text" name="name" onChange={onChangeHandler} value={data.name} placeholder='Your Name' required />}
          <input type="email" placeholder='Your Email' required name="email" onChange={onChangeHandler} value={data.email} />
          <input type="password" name="password" onChange={onChangeHandler} value={data.password} placeholder='Your password' required />
        </div>
        <button type="submit" >{currentState === "Sign Up" ? "create acc " : "login"}</button>
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
