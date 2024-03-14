import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

import "../Styles/Container.css";
import "../Styles/Fonts.css";
import "../Styles/Form.css";
import userContext from "../contextAPI/createUserContext";
import { useNavigate } from "react-router-dom";


const SignUp = () => {
  const navigate = useNavigate();
  const {signUp, signUpWithGoogle} = useContext(userContext); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  
  function handleName(e) {
    setName(e.target.value);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  
  const handleRegister = async(e) =>{
    e.preventDefault(); 
    const cred = {name, email, password}; 
    const payload = await signUp(cred); 
    if(payload.success==="true"){
      toast.success("Successfully signed up"); 
      setTimeout(()=>{
        navigate('/')
      },2000)
    }else{
      toast.error(payload.data); 
    }
  }

  const googleSignUp = async ()=>{
    const payload = await signUpWithGoogle(); 
    if(payload.success==="true"){
      toast.success("Successfully signed up"); 
      setTimeout(()=>{
        navigate('/')
      },2000)
    }else{
      toast.error(payload.data); 
    }
  }

  return (
    <div className="w-[100%]  flex justify-center items-center">
      <div className="box">
        <div className="content">
          <h1 className="heading">Playtopia</h1>
          <div className="form-container">
            <p className="title">Sign Up</p>
            <form className="form">
              <div className="input-group">
                <label htmlFor="username">Name</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={handleName}
                  name="username"
                  id="username"
                  placeholder=""
                />
              </div>

              <div className="input-group">
                <label htmlFor="username">Email</label>
                <input
                  placeholder=''
                  required
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  name="username"
                  id="username"
                />
              </div>
              
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input
                  type='password'
                  placeholder=''
                  required
                  value={password}
                  onChange={handlePassword}
                  name="password"
                  id="password"
                />
                <div className="space">
                </div>
              </div>
              <button className="sign" type='submit' onClick={handleRegister}>Sign Up</button>
            </form>
            <div className="social-message">
              <div className="line"></div>
              <p className="message">Sign Up with social accounts</p>
              <div className="line"></div>
            </div>
            <div className="social-icons">
              <button aria-label="Log in with Google" className="icon" onClick={googleSignUp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  className="w-5 h-5 fill-current"
                >
                  <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                </svg>
              </button>
            </div>
            <p className="signup">
              Already have an account? 
                <Link to='/login'>{" "}Log in</Link>
            </p>
          </div>


        </div>
      </div>

    </div>
  );
};

export default SignUp;
