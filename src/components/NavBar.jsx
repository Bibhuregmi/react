import React from 'react'
import logo from '../assets/images/react.svg'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>  
        <div className='flex bg-emerald-600 px-6 py-6 shadow-md mb-10'>
            <Link to = '/'>
                <img
                    className='h-10 w-auto mx-2 my-2 '
                    src = {logo}
                >
                </img> 
            </Link>
            <nav className='flex w-full justify-end'>
                <Link  to= '/'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-white  hover:text-emerald-600 hover:rounded-md'
                > Home
                </Link>
                <Link  to= '/restaurants'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-white  hover:text-emerald-600 hover:rounded-md'
                > Restaurants
                </Link>
                <Link  to= '/reservation'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-white  hover:text-emerald-600 hover:rounded-md'
                > Reservation
                </Link>
                
            </nav>
        </div>
    </>
  )
}


export default NavBar