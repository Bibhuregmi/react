import React from 'react'
import logo from '../assets/images/react.svg'
const NavBar = () => {
  return (
    <>  
        <div className='flex bg-emerald-600 px-6 py-6 shadow-md mb-10'>
            <img
                className='h-10 w-auto mx-2 my-2 '
                src = {logo}
            >
            </img> 
            <nav className='flex w-full justify-end'>
                <a  href= '#'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-white  hover:text-emerald-600 hover:rounded-md'
                > Home
                </a>
                <a  href= '#'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-white  hover:text-emerald-600 hover:rounded-md'
                > Restaurants
                </a>
                <a  href= '#'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-white  hover:text-emerald-600 hover:rounded-md'
                > Reservation
                </a>   
                
            </nav>
        </div>
    </>
  )
}


export default NavBar