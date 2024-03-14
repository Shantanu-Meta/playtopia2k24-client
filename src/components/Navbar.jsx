import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger';
import '../Styles/SignUpBtn.css'
import userContext from "../contextAPI/createUserContext";
import { LogOut } from 'lucide-react';
import { motion } from "framer-motion";


function Navbar() {
    const {currentUser, logOut, player} = useContext(userContext); 
    const [windowWidth, setWindowWidth] = useState ({windowWidth: window.innerWidth});
    const [scrolling, setScrolling] = useState(false);

  const detectSize = () => {
    setWindowWidth({
      windowWidth: window.innerWidth
    })
  }


    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    useEffect(()=>{
        window.addEventListener('resize', detectSize);

        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            if (isScrolled !== scrolling) {
              setScrolling(isScrolled);
            }
          };
      
          document.addEventListener('scroll', handleScroll);
          
          return () => {
            document.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', detectSize);

          };
    },[scrolling])

    const doLogOut = ()=>{
        logOut();
    }
    return (
        <div className={`w-[90%] h-[70px] md:h-[100px] lg:h-[100px] md:px-[10px] lg:pt-0 lg:px-[100px] sm:mx-[50px] flex justify-between items-center font-[Kollektif] fixed top-0 z-50`}>
            {windowWidth.windowWidth < 550 ? (
                <motion.header
                id="headSection"
                className="h-full w-full mx-1  flex justify-between items-center z-3"
                initial={{ y: -100, opacity: 0 }} // Initial position (off-screen and invisible)
                animate={{ y: 0, opacity: 1 }} // Animation when component mounts
                transition={{ type:"tween", stiffness: 150, damping: 20, duration: 0.5 }} // Animation transition
                >
                <div>
                    <img src="/Logo.svg" alt="" className='h-[70px]'/>
                </div>
                <div className='flex justify-between items-center'>
                    {player.status ? (currentUser?.email === "shantanubhs1985@gmail.com" || currentUser?.email ==="arghajitsingharoy001@gmail.com" || currentUser?.email ==="raptic18@gmail.com" ? <Link to="/admin" className='profile border-2 border-white rounded-full p-2 text-white'><img src={currentUser?.photoURL ? currentUser.photoURL : "/user.jpg"} alt="User" className='rounded-full w-7 h-7 object-cover'/></Link> : <Link to="/user" className='profile border-2 border-white rounded-full p-1 text-white'><img src={currentUser?.photoURL ? currentUser.photoURL : "/user.jpg"} alt="User" className='rounded-full w-7 h-7 object-cover'/></Link>) : ''}
                    <Hamburger/>
                </div>
            </motion.header>
            ) : (
                <motion.header
                id="headSection"
                className="h-full w-full flex justify-between items-center z-3 md:mt-[1rem]"
                initial={{ y: -100, opacity: 0 }} // Initial position (off-screen and invisible)
                animate={{ y: 0, opacity: 1 }} // Animation when component mounts
                transition={{ type:"tween", stiffness: 150, damping: 20, duration: 0.5 }}
                >
                <div>
                    <img src="/Logo.svg" alt="banner" className='h-[85px] md:h-[85px]'/>
                </div>
                <div id="linksSection" className='flex justify-center items-center'>
                    <Link to={"/"}><a href="#home" className='text-[20px] text-white m-[20px] hover:text-white' onClick={() => handleScrollToSection('home')}>Home</a></Link>
                    <Link to={"/"}><a href="#aboutus" className='text-[20px] text-white m-[20px] hover:text-white' onClick={() => handleScrollToSection('aboutus')}>About Us</a></Link>
                    <Link to={"/"}><a href="#events" className='text-[20px] text-white m-[20px] hover:text-white' onClick={() => handleScrollToSection('events')}>Events</a></Link>
                    <Link to={"/"}><a href="#gallery" className='text-[20px] text-white m-[20px] hover:text-white' onClick={() => handleScrollToSection('gallery')}>Gallery</a></Link>
                    <Link to={"/"}><a href="#footer" className='text-[20px] text-white m-[20px] hover:text-white' onClick={() => handleScrollToSection('footer')}>Contact Us</a></Link>
                    <Link to={"/team"} className='text-[20px] text-white m-[20px] hover:text-white'>Team</Link>
                </div>

                <div className='flex justify-between items-center gap-[1rem]'>
                    {player.status ? (currentUser.email==="shantanubhs1985@gmail.com" ? <Link to="/admin" className='profile border-2 border-white rounded-full p-2 text-white'><img src={currentUser?.photoURL ? currentUser.photoURL : "/user.jpg"} alt="User" className='rounded-full w-7 h-7 object-cover'/></Link> : <Link to="/user" className='profile border-2 border-white rounded-full p-1 text-white'><img src={currentUser?.photoURL ? currentUser.photoURL : "/user.jpg"} alt="User" className='rounded-full w-7 h-7 object-cover'/></Link>) : ''}

                    {player.status ? <button onClick={doLogOut} className='button bg-white flex justify-center items-center'>Logout <LogOut /></button> : 
                    <Link to={'/login'}>
                        <button className='button text-black bg-white font-bold text-center justify-center'>
                            Sign up
                            <div className="flex justify-center items-center">
                                <div className="arrow"></div>
                            </div>
                        </button>
                    </Link>}
                </div>
            </motion.header>
            )}
        </div>
    )
}

export default Navbar;

