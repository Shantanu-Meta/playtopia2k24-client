import React from 'react'
import Load from "/Loader.gif";
const Loader = () => {
  return (
    <div className='w-full grid place-content-center h-screen bg-[#010002dc] absolute top-0 left-0'>
            <img src={Load} alt="Loading..." className='w-[70px] h-[70px]'/>
    </div>
  )
}

export default Loader


