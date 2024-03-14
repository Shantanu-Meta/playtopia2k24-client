import React, { useEffect, useState } from "react";
import Countdown from "./Countdown";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Aboutus = () => {
  const desc = ["Calling all adventurers! ️ Get ready to set sail on an epic treasure hunt across our very own campus! Join us for a thrilling afternoon of puzzles, riddles, and teamwork as we unearth hidden booty! Are you ready to put your skills to the test and claim the ultimate prize?"];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5 // adjust the threshold as needed
  });

  return (
    <div className='w-full h-screen bg-[url("/bg3.jpg")] bg-cover bg-center flex justify-end items-center flex-col px-[50-px] lg:pt-0 lg:px-[100px] relative'>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

      <div className="w-full absolute top-[160px] md:top-[200px] lg:top-[130px] px-0">
        <Countdown />
      </div>
      <div className="text-start lg:text-center bg-transparent md:w-[80%] lg:w-[80%] z-10" ref={ref}>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.7 }}
          className="font-[Valorax] text-5xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-white my-[40px] md:my-[50px] lg:my-[50px] mx-[20px] md:mx-[10px] sm:mx-[50px]"
        >
          About Us
        </motion.h1>

        {desc.map((el, i) => (
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 1, delay: i / 10 }}
            key={i}
            className="font-[Kollektif] text-lg  xs:text-lg md:text-2xl lg:text-2xl text-white mb-[50px] md:mb-[100px] lg:mb-[50px] mx-[20px] md:mx-[10px] sm:mx-[50px] leading-8"
          >
            {el}{" "}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default Aboutus;
