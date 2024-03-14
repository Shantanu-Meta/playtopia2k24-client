import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
        <div className="grid h-screen place-content-center bg-gradient-to-r from-slate-900 to-slate-700 px-4">
            <div className="text-center">
                <h1 className="text-9xl font-black text-gray-500">404</h1>
                <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uh-oh!</p>
                <p className="mt-4 text-gray-500">You need to Log in to Register</p>
                <Link to="/login" className="mt-6 inline-block rounded bg-gradient-to-r from-fuchsia-600 to-purple-600 px-5 py-3 text-[1rem] font-medium text-white  focus:outline-none focus:ring">
                    Log in
                </Link>
            </div>
        </div>

    )
}

export default Error

