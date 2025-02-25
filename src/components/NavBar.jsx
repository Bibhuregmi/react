import React from 'react'
import logo from '../assets/images/react.svg'
import { NavLink } from 'react-router-dom' //navlink provides isActive prop to work with that help on dynamically changing the style based on isActive 

const NavBar = () => {
    const linkClass = ({isActive}) => isActive ? 'text-emerald-600 bg-white rounded-md px-4 py-4 font-semibold scale-105 text-xl' : 'text-white text-xl font-medium px-4 py-4'

  return (
    <>  
        <div className='flex bg-emerald-600 px-6 py-6 shadow-md'>
                <NavLink to = '/' className = 'flex justify-center'>
                    <img
                        className='h-12 w-auto mx-2 my-2 border-2 border-emerald-300 bg-white rounded-full px-4 py-4'
                        src = {logo}
                    >
                    </img> 
                    <h3 className='px-2 py-2 text-2xl font-bold text-white mx-1 my-2'>ReserveIT</h3>
                </NavLink>
            <nav className='flex w-full justify-end'>
                <NavLink  to= '/'
                    className= {linkClass}
                > Home
                </NavLink>
                <NavLink  to= '/restaurants'
                    className= {linkClass}
                > Restaurants
                </NavLink>
                <NavLink  to= '/add-restaurant'
                    className= {linkClass}
                > Add Restaurant
                </NavLink>
                <NavLink  to= '/reservation'
                    className= {linkClass}
                > Reservation
                </NavLink>
                
            </nav>
        </div>
    </>
  )
}


export default NavBar