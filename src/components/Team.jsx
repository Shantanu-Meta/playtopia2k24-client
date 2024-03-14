import { motion } from 'framer-motion';

export const Team = () => {
    return (
        <motion.section
            className="bg-[url('/team.jpg')] bg-cover bg-center bg-no-repeat"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container px-6 py-10 mx-auto">
                <motion.h1
                    className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Playtopia Core Team
                </motion.h1>
                <div className="grid grid-cols-2 gap-4 mt-2 xl:mt-10 md:grid-cols-2 xl:grid-cols-4">
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Arghajit Singha Roy_.jpg"
                            alt="Arghyajit Singha Roy"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Arghyajit Singha Roy
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Ayush Chakraborty_.jpg"
                            alt="Ayush Chakraborty"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white text-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Ayush Chakraborty
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Debahuti Banerjee_.jpg"
                            alt="Debahuti Banerjee"
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Debahuti Banerjee
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Kushagra Chowdhury_.jpg"
                            alt="Kushagra Chowdhury"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Kushagra Chowdhury
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Suvrajit.jpg"
                            alt="Suvrajit Ghosh"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Suvrajit Ghosh
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Rapti Chatterjee_.jpg"
                            alt="Rapti Chatterjee"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Rapti Chatterjee
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Rounaq Ahmed.jpg"
                            alt="Raunaq Ahmed"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Raunaq Ahmed
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div> 
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Saubhadra Chatterjee_.jpg"
                            alt="Saubhadra Chatterjee"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Saubhadra Chatterjee
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Shouvik Das.png"
                            alt="Shouvik Das"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                           Shouvik Das
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Graphics Team/Snehal Sarkar.jpg"
                            alt="Suvrajit ghosh"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Snehal Sarkar
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Mayukh Paul.jpg"
                            alt="Mayukh Paul"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Mayukh Paul
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Shambhavi Shreya.jpg"
                            alt="Sambhabi Shreya"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Shambhavi Shreya
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Dibyajyoti Kundu.jpg"
                            alt="Suvrajit Ghosh"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Dibyajyoti Kundu
                        </motion.h1>
                        {/* <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Developer
                        </motion.p> */}
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-0"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Sarthak mondal.jpg"
                            alt="Sarthak"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Swarthak Mondal
                        </motion.h1>
                    </motion.div>

                    {/* Repeat the above div block for each team member */}
                </div>
            </div>
            
            {/* Development Team */}
            <motion.div
                className="container px-6 py-10 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Development Team
                </motion.h1>
                <div className="flex flex-col justify-center items-center">
                <motion.div
                        className="flex flex-col items-center p-2 mt-6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Suvrajit.jpg"
                            alt="Suvrajit ghosh"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Suvrajit Ghosh
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Lead
                        </motion.p>
                    </motion.div>

                    <div className='flex gap-10'>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Web Team/Shantanu.png"
                            alt="Shantanu"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Shantanu Dutta
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Backend
                        </motion.p>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Web Team/ashesh.jpg"
                            alt="Ashesh Bandopadhyay"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Ashesh Bandopadhyay
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Frontend
                        </motion.p>
                    </motion.div>
                    </div>
                    
                </div>
                
            </motion.div>
            
            {/* Graphics Team */}
            <motion.div
                className="container px-6 py-10 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Graphics Team
                </motion.h1>
                <div className="flex flex-col justify-center items-center">
                <motion.div
                        className="flex flex-col items-center p-2 mt-6"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-[100px] h-[100px] rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Graphics Team/Snehal Sarkar.jpg"
                            alt="Suvrajit ghosh"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Snehal Sarkar
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Lead
                        </motion.p>
                    </motion.div>

                    <div className='flex gap-10'>
                    <motion.div
                        className="flex flex-col items-center p-2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Graphics Team/prasun.jpg"
                            alt="Prasun"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Prasun Banerjee
                        </motion.h1>
                        <motion.p
                            className="mt-2 text-gray-500 capitalize group-hover:text-gray-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            Backend
                        </motion.p>
                    </motion.div>
                    </div>
                    
                </div>
            </motion.div>


            {/* {Event Coordinators} */}
            <motion.div
                className="container px-6 py-10 mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <motion.h1
                    className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl"
                    initial={{ y: -50 }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    Event Coordinators
                </motion.h1>
                
                <div className='grid grid-cols-2'>
                    <div className='mt-5 mr-5'>
                        <h1 className="mt-0 text-xl font-semibold text-gray-700 capitalize group-hover:text-white text-center">Valorant</h1>
                        <div className='grid grid-cols-3'>
                        <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Valorant/arnav.jpeg"
                            alt="arnav"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Arnav Banerjee
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Valorant/Aishee Pal Chowdhury_.jpg"
                            alt="Aishee"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Aishee Pal Chowdhury
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Valorant/Kingshuk Das.jpg"
                            alt="kingshuk das"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Kingshuk Das
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Valorant/Pradipta Brahmachary.jpeg"
                            alt="Pradipta Brahmachary"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Pradipta Brahmachary
                        </motion.h1>
                        
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Valorant/Sandipan Datta.jpg"
                            alt="Sandipan Datta"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Sandipan Datta
                        </motion.h1>
                        
                    </motion.div>
                    
                        </div>
                        
                    </div>
                    <div className='mt-5 ml-5'>
                        <h1 className="mt-0 text-xl font-semibold text-gray-700 capitalize group-hover:text-white text-center">BGMI</h1>
                        <div className='grid grid-cols-2'>
                        <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/BGMI/Abir Hore.jpg"
                            alt="abir hore"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Abir Hore
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/BGMI/Anusmita Chakraborty .jpeg"
                            alt="ansmita chakraborty"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Anusmita Chakraborty
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/BGMI/Arunima Nandi.jpg"
                            alt="arunima nandi"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Arunima Nandi
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/BGMI/Sagnik Dasgupta .jpg"
                            alt="sagnik dasgupta"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Sagnik Dasgupta
                        </motion.h1>
                        
                    </motion.div>
                    
                        </div>
                    
                    </div>
                    <div className='mt-5 ml-5'>
                        <h1 className="mt-0 text-xl font-semibold text-gray-700 capitalize group-hover:text-white text-center">8 Ball Pool</h1>
                        <div className='grid grid-cols-2'>
                        <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/8 Ball Pool/Parna Dhar_.jpg"
                            alt="parna dhar"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Parna Dhar
                        </motion.h1>
                    </motion.div>
                    
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/8 Ball Pool/Srija Neogi_.jpg"
                            alt="Srija Neogi"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Srija Neogi
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/8 Ball Pool/Upanjan Ghosh .jpg"
                            alt="Upanjan Ghosh"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                           Upanjan Ghosh
                        </motion.h1>
                        
                    </motion.div>
                    
                        </div>
                    
                    </div>
                    <div className='mt-5 ml-5'>
                        <h1 className="mt-0 text-xl font-semibold text-gray-700 capitalize group-hover:text-white text-center">Photography</h1>
                        <div className='grid grid-cols-2'>
                        <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Core Team/Suvrajit.jpg"
                            alt="suvrajit"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Suvrajit Ghosh
                        </motion.h1>
                    </motion.div>
                    
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Photography/RESHABCHOWBEY.jpg"
                            alt="Reshav"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Reshab Chowbey
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Photography/Kankana Ghosh Dastidar .jpg"
                            alt="kankana"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                           Kankana Ghosh
                        </motion.h1>
                        
                    </motion.div>
                    
                        </div>
                    
                    </div>
                    <div className='mt-5 ml-5'>
                        <h1 className="mt-0 text-xl font-semibold text-gray-700 capitalize group-hover:text-white text-center">Treasure Hunt</h1>
                        <div className='grid grid-cols-2'>
                        <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Treasure Hunt/Kaustav.jpg"
                            alt="Kaustav"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Kaustav Sarkar
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Treasure Hunt/Sunny Roy.jpg"
                            alt="sunny roy"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Sunny Roy
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Treasure Hunt/Bishal Mahanta.jpg"
                            alt="Bishal Mahanta"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Sunny Roy
                        </motion.h1>
                    </motion.div>
                    
                        </div>
                    
                    </div>
                    <div className='mt-5 ml-5'>
                        <h1 className="mt-0 text-xl font-semibold text-gray-700 capitalize group-hover:text-white text-center">Open Mic</h1>
                        <div className='grid grid-cols-3'>
                        <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Open Mic/Nilanjana Das.jpg"
                            alt="nilanjana"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Nilanjana Das
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Open Mic/Rohan Roy.jpg"
                            alt="roahn"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Rohan Roy
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Open Mic/AsmitaKundu.jpg"
                            alt="asmita"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Asmita Kundu
                        </motion.h1>
                    </motion.div>
                    <motion.div
                        className="flex flex-col items-center p-2 mt-3"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <motion.img
                            className="object-cover w-20 h-20 rounded-full ring-4 ring-gray-300"
                            src="/Contributor Photos/Event Coordinators/Open Mic/Parimita Sarkar.jpg"
                            alt="parimita"
                            loading='lazy'
                        />
                        <motion.h1
                            className="mt-4 text-sm font-semibold text-gray-700 capitalize group-hover:text-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            Parimita Sarkar
                        </motion.h1>
                    </motion.div>
                    
                        </div>
                    
                    </div>  
                </div>
            </motion.div>

        </motion.section>
    )
}

export default Team;
