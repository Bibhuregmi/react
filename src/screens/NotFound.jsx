import React from 'react'
import { FaExclamationTriangle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <>
        <div className = 'flex flex-col items-center w-auto px-4 py-4'>
            <FaExclamationTriangle className='text-8xl text-yellow-500'/>
            <h2 className='text-5xl font-bold mb-20'>404 Page not found</h2>
            <Link
                className='w-48 bg-emerald-600 text-white font-semibold rounded-lg text-center px-4 py-2 shadow-lg hover:scale-105'
                to = '/'
            >
                Return Home
            </Link>
        </div>
    </>
  )
}

export default NotFound