import React, { useContext, useState } from "react";
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { LogIn, LogOut, Menu, X } from "lucide-react";
import userContext from "../contextAPI/createUserContext";

const navLinks = [
  { title: "Sign In", href: "/login" },
  { title: "Home", href: "/" },
  { title: "About Us", href: "/" },
  { title: "Events", href: "/" },
  { title: "Gallery", href: "/" },
  { title: "Sponsers", href: "/" },
  { title: "Contact Us", href: "/" },
  { title: "Team", href: "/team" },
];

const Hamburger = () => {
  const {logOut, player} = useContext(userContext); 

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const doLogOut = ()=>{
    logOut();
}
  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
    
  };

  return (
    <header>
      <nav className="flex justify-between items-center py-8 lg:py-4 px-4">
        <div className="lg:flex hidden gap-12 text-md text-zinc-400">
        </div>
        <div className="cursor-pointer lg:hidden text-2xl text-white" onClick={toggleMenu}>
          <Menu className="scale-[1.5]"/>
        </div>
      </nav>
      <motion.div

        variants={menuVars}
        initial="initial"
        animate={open ? "animate" : "initial"}
        exit="exit"
        className={`box fixed left-0 top-0 w-full h-screen origin-top text-white bg-gradient-to-tr from-lime-600 via-lime-800 opacity-[95%] to-stone-900 p-10 ${open ? "" : "hidden"}`}
      >
        <div className="flex h-full flex-col relative">
            <div className="cursor-pointer text-md text-white text-end text-2xl absolute right-[-14px] top-0 p-3 bg-slate-900 rounded-full" onClick={toggleMenu}>
            <X />
            </div>
          <motion.div
            variants={containerVars}
            initial="initial"
            animate={open ? "open" : "initial"}
            exit="initial"
            className="flex flex-col h-[90%] justify-center font-lora items-center gap-10"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                variants={{
                  initial: { y: "30vh" },
                  open: { y: 0 },
                }}
                className="text-2xl uppercase text-white"
              >
                  {player.status===true && link.href==="/login" ? <button onClick={doLogOut} className='button bg-[rgb(47 27 62 / 94%)] flex justify-center items-center w-full'>Logout <LogOut /></button> : 
                  <Link to={link.href}>
                      <button className='button flex justify-center items-center w-full'>
                            {link.title}
                            {link.href==="/login" ? <LogIn /> : ''}
                      </button>                 
                  </Link>}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Hamburger;
