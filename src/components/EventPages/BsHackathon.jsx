import React, { useContext, useState } from "react"
import userContext from "../../contextAPI/createUserContext"
import { toast } from 'react-toastify';
import Loader from '../Loader';
import { useNavigate } from "react-router-dom";


const BsHackathon = () => {
    const {register,loader} = useContext(userContext); 
    const navigate = useNavigate(); 

    const [phoneNo, setPhoneNo] = useState(null); 
    const [department, setDepart] = useState(null); 
    const [startupName, setName] = useState(null); 
    const [startUpCategory, setCat] = useState(null); 

    const doRegister =async (event)=>{
        event.preventDefault();
        if(loader===1){
            event.stopPropagation();
            return;
        }
        const formObject = {
            phoneNo, department,startupName,startUpCategory,
            event: "bs_hackathon"
        }
        const payload = await register(formObject); 
        if(payload.success==="true"){
            toast.success("Successfully Registered"); 
            navigate("/")
        }else{
            console.log(payload.data)
            toast.error("Registration Failed"); 
        }
    }
    return (
        <section className="lg:h-screen min-h-screen w-full bg-gray-800">
        {loader===1 && <Loader/>}
            <div className="flex justify-center min-h-full w-full lg:h-full">
                <div className="hidden bg-cover bg-top lg:block lg:w-2/5" style={{ backgroundImage: 'url("/EventBg/Desktop/bgImg5.jpg")' }}>
                </div>
                <div className="flex items-center w-full max-w-3xl lg:h-full pb-8 px-8 pt-[5rem] md:p-8 mx-auto lg:px-12 lg:w-3/5">
                    <div className="w-full h-full flex flex-col justify-center items-center lg:mt-[5rem]">
                        <h1 className="md:text-3xl font-bold tracking-wider text-white capitalize text-center text-[1.2rem]">
                            Register with Business Hackathon
                        </h1>
                        <h2 className="md:text-[1rem] tracking-wider text-gray-400 text-center text-[1rem] mt-1">
                            (Every player should log in to get LogIn Id)
                        </h2>
                        <form onSubmit={doRegister}>
                            <div className="grid grid-cols-2 gap-3 mt-8 md:grid-cols-2 lg:grid-cols-4">
                            <div>
                                <label className="block mb-2 text-sm text-white" htmlFor="no">Whatsapp number</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40" id="no" onChange={(e)=>{setPhoneNo(e.target.value)}} required/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-white">Department</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{setDepart(e.target.value)}}  required/>
                            </div>
                            <div>
                                <label className="block mb-2 text-sm text-white">Startup Name</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{setName(e.target.value)}}  required/>
                            </div>
                            
                            <div>
                                <label className="block mb-2 text-sm text-white">Category</label>
                                <input type="text" placeholder="" className="block w-full px-5 py-3 mt-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg  focus:outline-none focus:ring focus:ring-opacity-40" onChange={(e)=>{setCat(e.target.value)}} required/>
                            </div>
                            </div>          
                            <div className="w-full">
                                <button className="flex items-center justify-center w-full px-5 py-3 mt-4 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ff4655] rounded-lg hover:bg-indigo-400 focus:outline-none focus:ring focus:ring-opacity-50" type="submit">
                                    <span className="font-semibold">Register Now</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default BsHackathon;