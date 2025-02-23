import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowCircleLeft } from 'react-icons/fa'
import { FaBowlFood } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Restaurant = ({restaurant}) => {
  return (
    <>
        <div className = 'w-full, h-screen bg-emerald-100 rounded-lg flex flex-col items-center px-4 py-4'>
            <div className='absolute left-0 flex items-center gap-2 hover:underline px-3 py-3'>
                
                <Link
                    to= '/restaurants'
                    className='flex'
                ><FaArrowCircleLeft className='text-2xl text-emerald-800'/>
                </Link>
            </div>
            <h1 className='text-6xl font-bold text-emerald-800 mb-3'>{restaurant.name}</h1>
            <h4 className='italic flex mt-3'><FaBowlFood className='mr-2 pt-0.5 text-xl'/>{restaurant.theme}</h4>
            <section className='bg-emerald-600 rounded-lg mt-4 mb-4'>
                <p className = 'px-3 py-3 text-lg text-white'>{restaurant.description}</p>
            </section>
            <section className='bg-white flex justify-between w-full rounded-lg py-4 px-4'>
                <div className='bg-emerald-600 text-white rounded-md px-4 py-4 ml-0 mr-0'>
                    <h3 className='font-bold mb-3'>General Info</h3>
                    <IoLocationSharp/>
                </div>
                <div className='bg-emerald-600 text-white rounded-md px-4 py-4 ml-0 mr-0'>General Info</div>
            </section>
        </div>
    </>
  )
}

export default Restaurant