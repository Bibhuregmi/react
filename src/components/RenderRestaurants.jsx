import React, {useState} from 'react'
import { FaStar } from 'react-icons/fa'
import { MdChair } from "react-icons/md"
import { MdLocationOn } from "react-icons/md"
import { Link } from 'react-router-dom'

const RenderRestaurants = ({ restaurants, children }) => { 
    
    const[showFullDescription, setShowFullDescription] = useState(false); 

    let details = restaurants.description; 
    console.log(details)

    if(!showFullDescription){
        details = details.substring(0,90) + '...'
    }

    return (
        <div key = {restaurants.id} className='bg-white p-4 rounded-lg shadow-lg '>
            <h2 className='text-2xl font-bold mb-2'>{restaurants.name}</h2>
            <p className=' mb-2'>{details}</p>
            <button
                onClick={() => setShowFullDescription((prevState) => !prevState)}
                className='mb-3 text-gray-400 hover:text-gray-700 text-sm'
            >
                {showFullDescription ? 'Less' : 'More'}
            </button>
            <div className='flex justify-baseline'>
            <MdLocationOn className='inline text-xl mt-0.5 mr-0.5'/><p className='text-gray-600 mb-2'>{restaurants.location}</p>
            </div>
            <div className = 'flex justify-between mb-2'>
                
                <p className='py-2'><span className='text-yellow-700'><FaStar/>{restaurants.rating}</span></p>   
                <p className='py-2'><MdChair/>{restaurants.capacity}</p>   
            </div>
            <Link className='w-1/2 rounded-lg justify-center text-center block mx-auto py-2 font-bold cursor-pointer bg-emerald-600 hover:shadow-lg text-white hover:scale-105'
                to = {`/restaurants/${restaurants.id}`}
            >
                Discover More  
            </Link>
            {children}  
        </div>
    )
}
export default RenderRestaurants