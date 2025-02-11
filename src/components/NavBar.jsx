import React from 'react'
import logo from '../assets/images/react.svg'
const NavBar = () => {
  return (
    <>  
        <div className='flex justify-between bg-emerald-600 px-6 py-6 shadow-md'>
            <img
                className='h-10 w-auto mx-2 my-2'
                src = {logo}
            >
            </img> 
            <nav className='flex justify-end w-full'>
                <a  href= '#'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-emerald-900 hover:rounded-md'
                > Home
                </a>
                <a  href= '#'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-emerald-900 hover:rounded-md'
                > Restaurants
                </a>
                <a  href= '#'
                    className='text-white text-xl font-medium px-4 py-4 transition durataion-300 hover:bg-emerald-900 hover:rounded-md'
                > Make Reservation
                </a>   
                
            </nav>
        </div>
    </>
  )
}


export default NavBar