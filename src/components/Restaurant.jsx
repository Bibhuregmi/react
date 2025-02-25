import React from 'react'
import { FaBowlFood} from "react-icons/fa6";
import image from '../assets/images/restaurant-interior.jpg'
import { IoLocationSharp } from "react-icons/io5";  
import { FaStar } from "react-icons/fa";
import { MdChair } from "react-icons/md";
import { Link } from 'react-router-dom';
import { TiPlus } from "react-icons/ti";
import { FaPhone } from "react-icons/fa6";

const Restaurant = ({restaurant}) => {
  return (
    <>
        <div className = 'w-full h-[75vh] bg-cover bg-center rounded-lg mt-2 flex justify-center items-center relative mb-8' style={{backgroundImage: `url(${image})`}}>
            <div className='absolute inset-0 bg-black opacity-30'></div>
                <h1 className='absolute inset-0 flex items-center justify-center text-white text-8xl font-bold opacity-100'>{restaurant.name}</h1>
        </div>
        <div className='flex justify-center gap-4'>
                <FaBowlFood className='text-2xl pt-2'/><h3 className='italic text-lg pt-0.5'>{restaurant.theme}</h3>
        </div>
        <div className='flex text-center px-4 py-4 text-2xl font-semibold mx-2 my-2 border-b-2 border-emerald-200 shadow-lg rounded-lg hover:shadow-black hover:border-black'>
            <h4>{restaurant.description}</h4>
        </div>
        <div className='w-full px-4 py-4 flex justify-center gap-2 h-[50vh] mb-8'>
            <div className = 'w-1/2 h-full px-4 py-4 text-left rounded-lg shadow-lg hover:shadow-black hover:border-black'>
                <div className='flex flex-row text-2xl px-4 py-4 mx-2 my-2 text-red-900'>
                    <MdChair className='mr-3 mt-1'/>{restaurant.capacity}    
                </div>
                <div className='flex flex-row text-2xl px-4 py-4 mx-2 my-2 text-yellow-500'>
                    <FaStar  className='mr-3 mt-1'/>{restaurant.rating}    
                </div>
                <div className='flex flex-row text-2xl px-4 py-4 mx-2 my-2 text-cyan-800'>
                    <IoLocationSharp  className='mr-3 mt-1'/>{restaurant.location}    
                </div>
            </div>
            <div className = 'w-1/2 h-full px-4 py-4 flex items-center flex-col gap-5 justify-center'>
                <div className = 'w-[75%]'>
                    <Link
                        to = '/reservation'
                        className='  bg-emerald-600 px-4 py-4 rounded-lg shadow-lg flex justify-center gap-2 text-xl text-white hover:scale-105'
                    >
                       <TiPlus className='mt-1 mb-1 mr-2 text-2xl'/> Add Reservation
                    </Link>
                </div>
                <div className = 'w-[75%]'>
                    <Link
                        to = '/reservation'
                        className='  bg-yellow-600 px-4 py-4 rounded-lg shadow-lg flex justify-center text-xl text-white text-center hover:scale-105 '
                    >
                       <FaPhone className='mt-1 mr-3'/> Contact Us
                    </Link>

                </div>
            </div>
        </div>
        {/*TODO: Need to complete */}
        <div className = 'w-full h-[100vh] flex flex-col items-center px-4 py-4 gap-3'>
            <h2 className='text-5xl font-bold text-emerald-600 mb-10'>MENU</h2>
            <div className = 'w-full h-[40%] px-2 py-2'>
                <h3 className='text-2xl font-semibold text-center mb-4'>Starter</h3> 
                <div className='grid grid-cols-3 gap-4'>
                    {restaurant.menu.Starter.map((item, index) => (
                        <div key={index} className='text-center rounded-md bg-emerald-200 px-2 py-2 hover:scale-105 group'>
                            <h3 className = 'text-2xl font-semibold mb-4'>{item.name}</h3>
                            <p className='italic mb-4'>{item.description}</p>
                            <p className= 'opacity-0 group-hover:opacity-100 font-bold'> ${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className = 'w-full h-[40%] px-2 py-2'>
                <h3 className='text-2xl font-semibold text-center mb-4'>Main-Course</h3> 
                <div className='grid grid-cols-3 gap-4'>
                    {restaurant.menu.MainCourse.map((item, index) => (
                        <div key={index} className='text-center rounded-md bg-emerald-200 px-2 py-2 hover:scale-105 group'>
                            <h3 className = 'text-2xl font-semibold mb-4'>{item.name}</h3>
                            <p className='italic mb-4'>{item.description}</p>
                            <p className= 'opacity-0 group-hover:opacity-100 font-bold'> ${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className = 'w-full h-[40%] px-2 py-2'>
                <h3 className='text-2xl font-semibold text-center mb-4'>Dessert</h3> 
                <div className='grid grid-cols-2 gap-4'>
                    {restaurant.menu.Dessert.map((item, index) => (
                        <div key={index} className='text-center rounded-md bg-emerald-200 px-2 py-2 hover:scale-105 group'>
                            <h3 className = 'text-2xl font-semibold mb-4'>{item.name}</h3>
                            <p className='italic mb-4'>{item.description}</p>
                            <p className= 'opacity-0 group-hover:opacity-100 font-bold'> ${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Restaurant