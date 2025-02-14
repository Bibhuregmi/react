import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdChair } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"

const RenderRestaurants = ({ restaurants, children }) => {
    return restaurants.map((restaurant) => (
        <div key = {restaurant.id} className='bg-white p-4 rounded-lg shadow-lg '>
            <h2 className='text-2xl font-bold mb-2'>{restaurant.name}</h2>
            <p className=' mb-2'>{restaurant.description}</p>
            <div className='flex justify-baseline'>
            <MdLocationOn className='text-xl mt-0.5 mr-0.5'/><p className='text-gray-600 mb-2'>{restaurant.location}</p>
            </div>
            <div className = 'flex justify-between mb-2'>
                
                <p className='py-2'><span className='text-yellow-700'><FaStar/>{restaurant.rating}</span></p>   
                <p className='py-2'><MdChair/>{restaurant.capacity}</p>   
            </div>
            {children}  
        </div>
    ))
}
export default RenderRestaurants