import React, { useContext } from 'react'
import userContext from "../contextAPI/createUserContext";
import { toast } from 'react-toastify';

function Register({id, player}) {
  const {register} = useContext(userContext)
  const doRegister = async ()=>{
    const cred = {
        event:id,
        playerNo:player
    }
    const payload = await register(cred); 
    if(payload.success==="true"){
      toast.success("Successfully registered to" + id); 
      setTimeout(()=>{
        navigate('/')
      },2000)
    }else{
      toast.error(payload.data); 
    }
  }
  
  return (
    <div className='grid place-content-center p-4 bg-gray-500 text-white mt-[10rem] w-[20%] mx-auto cursor-pointer' onClick={doRegister}>
      ragister {id}
    </div>
  )
}

export default Register
