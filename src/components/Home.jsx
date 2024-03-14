import React, { useContext, useEffect } from 'react'
import About from './About'
import Footer from './Footer'
import Events from './Events'
import Gallery from './Gallery'
import Banner from './Banner'
import Loader from './Loader'
import '../Styles/HomePage.css'
import userContext from "../contextAPI/createUserContext";


const Home = () => {
  const {fetchUserProfile} = useContext(userContext); 


  useEffect(()=>{
    if(localStorage.getItem("auth-token")){
      fetchUserProfile(); 
    }
  },[])
  return (
    <div className='h-screen snap-y snap-mandatory overflow-auto z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[teal] transition-scroll-2s'>

      <section className='relative  ' id='home'>
        <Banner/>
      </section>

      <section className='about-section  ' id='aboutus'>
        <About/>
      </section>

      <section id="events" className=" overflow-hidden">
        <Events/>
      </section>

      <section id='gallery'>
        <Gallery/>
      </section>

      <section id='footer'>
        <Footer/>
      </section>
    </div>
  )
}

export default Home