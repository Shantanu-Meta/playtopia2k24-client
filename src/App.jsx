import React, { useContext } from 'react'
import {  Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import AdminPanel from './components/AdminPanel'
import Register from './components/Register'
import UseUserContext from './contextAPI/UseUserContext.jsx'
import userContext from './contextAPI/createUserContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import User from './components/User'
import Events from './components/Events'
import Error from './components/Error.jsx'
import Team from './components/Team.jsx'

import ValorantReg from './components/EventPages/ValorantReg.jsx';
import BgmiReg from './components/EventPages/BgmiReg.jsx';
import OpenMicReg from './components/EventPages/OpenmicReg.jsx'
import BallPoolReg from './components/EventPages/BallPoolReg.jsx'
import TreasureHunt from './components/EventPages/TreasureHunt.jsx'
import BsHackathon from './components/EventPages/BsHackathon.jsx'

export default function App() {
  return (
      <>
        <UseUserContext>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/eventpage' element={<Events/>}/>
            <Route exact path='/register' element={
              <ProtectedRoute>
                <Register/>
              </ProtectedRoute>
            }/>
            <Route exact path='/admin' element={
              <ProtectedRouteForAdmin>
                <AdminPanel/>
              </ProtectedRouteForAdmin>
            }/>
            <Route exact path='/login' element={<Login/>}/>
            <Route exact path='/user' element={
              <ProtectedRoute>
                <User/> 
                {/* // done */}
              </ProtectedRoute>
            }/>
            <Route exact path='/valorantregister' element={
              <ProtectedRoute>
                <ValorantReg/>
                {/* done */}
              </ProtectedRoute>
            }/>
            <Route exact path='/bgmiregister' element={
              <ProtectedRoute>
                <BgmiReg/>
                {/* done */}
              </ProtectedRoute>
            }/>
            <Route exact path='/ballpoolregister' element={
              <ProtectedRoute>
                <BallPoolReg/>
              </ProtectedRoute>
            }/>
            <Route exact path='/bshackregister' element={
              <ProtectedRoute>
                <BsHackathon/>
              </ProtectedRoute>
            }/>
            <Route exact path='/treasureregister' element={
              <ProtectedRoute>
                <TreasureHunt/>
              </ProtectedRoute>
            }/>
            <Route exact path='/openmicregister' element={
              <ProtectedRoute>
                <OpenMicReg/>
                {/* done */}
              </ProtectedRoute>
            }/>
            <Route exact path='/photographyregister' element={
              <ProtectedRoute>
                <BgmiReg/>
              </ProtectedRoute>
            }/>
            <Route exact path='/user' element={
              <ProtectedRoute>
                <User/>
              </ProtectedRoute>
            }/>

            <Route exact path='/team' element={
                <Team/>
            }/>
          </Routes>
          <ToastContainer autoClose={1000}/>
        </UseUserContext>
      </>
  )
}

export const ProtectedRoute = ({children}) =>{
  const user = localStorage.getItem('user'); 
  const authToken = localStorage.getItem('auth-token'); 
  if(user && authToken){
     return children; 
  }else{
    return <Error/>
  }
}

export const ProtectedRouteForAdmin = ({children}) =>{
  const {player, currentUser} = useContext(userContext); 
  if(currentUser?.email === "shantanubhs1985@gmail.com" || currentUser?.email ==="arghajitsingharoy001@gmail.com" || currentUser?.email ==="raptic18@gmail.com"){
     return children; 
  }else{
    return <Error/>
  }
}
