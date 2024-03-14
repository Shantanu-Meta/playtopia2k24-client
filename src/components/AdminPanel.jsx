import React, { useContext, useEffect } from 'react'
import { All_Registration } from './All_Registration'
import userContext from "../contextAPI/createUserContext";
import Loader from './Loader';

function AdminPanel() {
  const {fetchAllPlayers, loader} = useContext(userContext); 
  useEffect(()=>{
    async function onLoad(){
      await fetchAllPlayers();
    }
    onLoad();
  },[])
  
  return (
    <div className='w-full'>
    {loader===1 && <Loader/>}
      <All_Registration/>
    </div>
  )
}

export default AdminPanel
