import React from 'react'
import Card from './Card.jsx'

const MainContent = () => {
  return (
    <>
        <div className='flex items-center flex-col mb-10 h-full'>
            <h1 
                className='text-bold text-6xl pt-20 mb-10'
            >Make your <span className='text-emerald-600'>reservation</span> hassle free
            </h1>
            <h4 
                className='text-medium text-xl mb-25'
            >All in one place to inquire and book table in best restaurants around the city 
            </h4>  
            <div className='flex justify-around w-full text-center gap-0.5'>
                <Card>
                    <h1 
                        className='text-2xl font-semibold'
                    >Find Restaurants 
                    </h1>
                    <h3 className='mb-2'>
                        Browse best culinary around Toronto city
                    </h3>
                    <button className='px-3 py-2 hover:bg-white hover:text-emerald-600  rounded-md opacity-0 group-hover:opacity-100 w-1/2 font-semibold cursor-pointer'>
                        Discover
                    </button>
                </Card>
                <Card>
                    <h1
                        className='text-2xl font-semibold text-center'
                    >Add Restaurant
                    </h1>
                    <h3 className='mb-2'>
                        Add your restaurant to get exposure to 1000+ users 
                    </h3>
                    <button className='px-3 py-2 hover:bg-white hover:text-emerald-600 rounded-md opacity-0 group-hover:opacity-100 w-1/2 font-semibold cursor-pointer'>
                        Add Restaurant
                    </button>
                </Card>
                
            </div> 
        </div>
    </>
  )
}

export default MainContent