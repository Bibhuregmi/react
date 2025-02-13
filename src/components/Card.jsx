import React from 'react'

const Card = ({ children }) => {
  return <div className= 'w-1/2 px-2 py-2 hover:bg-emerald-600 transition duration-300 hover:text-white rounded-md group shadow-md shadow-emerald-600'>
    {children}
    </div>
}

export default Card