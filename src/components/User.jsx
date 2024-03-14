import React, { useContext, useEffect } from 'react'
import userContext from "../contextAPI/createUserContext";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const User = () => {

    const {player, fetchUserGames, games, fetchUserProfile, currentUser, loader} = useContext(userContext); 
    useEffect(()=>{
        async function onLoad(){
            await fetchUserProfile(); 
            const payload = fetchUserGames(); 
        }
        onLoad();
    }, [])
    return (
        <>
        <section className={`h-screen w-full lg:pt-0 lg:px-[100px] lg:pb-[40px] sm:px-[50-px] flex justify-center items-center flex-col relative `}>
            {loader===1 && <Loader/>}
            <Navbar/>
            <div className="bg-gradient-to-r from-slate-700 to-slate-900e w-[90%] mx-auto md:w-[70%] overflow-hidden sm:rounded-lg pt-5 shadow-2xl rounded-md">
            <div>
                    <dl>
                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl text-white flex items-center gap-2">
                            <Link to="/user" className='profile border-2 border-white rounded-full p-1 text-white'><img src={currentUser?.photoURL ? currentUser.photoURL : "/user.jpg"} alt="User" className='rounded-full w-7 h-7 object-cover'/></Link>
                                <span className='bg-gradient-to-r from-emerald-400 to-cyan-400 p-1 rounded-md'>Active</span>
                            </dt>
                            
                        </div>
                    </dl>
                </div>
                <div className="">
                    <dl>
                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl text-white">
                                User name
                            </dt>
                            <dd className="mt-1 text-gray-200 sm:mt-0 sm:col-span-2">
                            {player.name}
                            </dd>
                        </div>
                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl text-white">
                                Email address
                            </dt>
                            <dd className="mt-1 text-gray-200 sm:mt-0 sm:col-span-2">
                                {player.email}
                            </dd>
                        </div>
                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl text-white">
                                User ID
                            </dt>
                            <dd className="mt-1 text-gray-200 sm:mt-0 sm:col-span-2">
                                {player.userId}
                            </dd>
                        </div>
                    </dl>
                </div>
                <div className="">
                    <dl>
                        <div className=" px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                            <dt className="text-xl text-white">
                                Joined Event: 
                            </dt>
                            <dd className="mt-1 text-gray-200 sm:mt-0 sm:col-span-2">
                            {games.length > 0 ? games.map((event)=>{
                                    return <span key={event} className='inline-block px-2 py-1  font-semibold text-gray-800 bg-gray-200 rounded-md mr-1'>{event}</span>
                                }) : <span className='text-gray-400 '>No event registered :(</span>}
                            </dd>
                        </div>
                    </dl>
                </div>

            </div>
        </section>
        </>
    )
}

export default User
