import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';
import userContext from "../contextAPI/createUserContext";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUp.css";
import Loader from './Loader';

const Login = () => {
  const navigate = useNavigate();
  const {signUp, signUpWithGoogle, setLoader, loader} = useContext(userContext); 
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleName(e) {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRegister = async(e) =>{
    e.preventDefault(); 
    if(loader===1){
      e.stopPropagation();
      return;
  }
    const cred = {name, email, password}; 
    const payload = await signUp(cred); 
    if(payload.success==="true"){
      toast.success("Successfully Signed Up"); 
      setTimeout(()=>{
        navigate('/')
      },2000)
    }else{
      toast.error(payload.data); 
    }
  }
  const googleSignUp = async (event)=>{
    event.preventDefault(); 
    if(loader===1){
      event.stopPropagation();
      return;
  }
    const payload = await signUpWithGoogle(); 
    if(payload.success==="true"){
      toast.success("Successfully Signed Up"); 
      setTimeout(()=>{
        navigate('/')
      },2000)
    }else{
      toast.error(payload.data); 
    }
  }
  return (
      <section className="relative">
      {loader===1 && <Loader/>}
        <div className="w-full h-screen flex justify-center items-center bg-slate-100">
      <div className="flex h-full w-full mx-auto overflow-hidden shadow-lg bg-gray-800 ">

        <div className="hidden bg-contain bg-no-repeat lg:block lg:w-1/2 bg-center">
          <img src="/EventBg/Desktop/signup.jpg" className="object-cover w-full h-full"/>
        </div>

        <div className="w-full h-screen lg:h-screen lg:w-1/2 flex justify-center items-center">
        <form
          className="w-full px-[50px] md:px-[200px] lg:px-[60px] xl:px-[150px] py-8"
          onSubmit={handleRegister}
        >
          <div className="md:h-[150px] flex justify-center mx-auto h-[10rem]">
            <img src="/Logo.svg" className="h-full"/>
          </div>
          <p className="welcome mt-3 text-xl text-center text-gray-200">
            Welcome
          </p>
          <div
            className="flex items-center justify-center mt-4 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 text-gray-200 cursor-pointer hover:bg-gray-900 bg-gray-700" onClick={googleSignUp}
          >
            <span className="w-5/6 px-4 py-3 font-medium text-xl text-center flex justify-center items-center gap-3">
              <span>Sign in/up with </span>
              <img src="/goole.svg" alt="" className='h-[1.2rem] w-[1.2rem]'/>
            </span>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4" />
            <p
              
              className="text-xs text-center uppercase text-gray-400"
            >
              or register with email
            </p>
            <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4" />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="loginWithName"
            >
              Name
            </label>
            <input
              id="loginWithName"
              className="block w-full px-4 py-2 text-slate-50 border rounded-lg bg-gray-800 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="text"
              value={name}
              onChange={handleName}
            />
          </div>
          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-200"
              htmlFor="LoggingEmailAddress"
            >
              Email Address
            </label>
            <input
              id="LoggingEmailAddress"
              className="block w-full px-4 py-2 text-slate-50 border rounded-lg bg-gray-800 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium text-gray-200"
                htmlFor="loggingPassword"
              >
                Password
              </label>
            </div>
            <input
              id="loggingPassword"
              className="block w-full px-4 py-2 border rounded-lg bg-gray-800 text-slate-50 border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="mt-6">
            <button
              type="submit"
              className="w-full flex justify-center items-center px-6 py-3 mb-3 text-xl font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-700 rounded-lg hover:bg-gray-900"
            >
              Sign Up
            </button>
          </div>
        </form>
        </div>
      </div>
    </div>
      </section>
    );
}

export default Login;






// import { useState } from "react";
// import {Link} from 'react-router-dom'

// import "../Styles/SignUp.css";


// function SignUp() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleNameChange = (e) => {
//     setName(e.target.value)
//   }

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createUserWithEmailAndPassword(auth, email, password, name)
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log(user);
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//         // ..
//       });
//     console.log("Name:", name);
//     console.log("Email:", email);
//     console.log("Password:", password);
//     // Reset the form fields after submission if needed
//     setName("")
//     setEmail("");
//     setPassword("");
//   };

//   return (
    
//   );
// }

// export default SignUp;
