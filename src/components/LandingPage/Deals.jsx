import React from 'react'
import { Star } from '@mui/icons-material'; // For the star icon
import { useState } from 'react'

function Deals() {
    const [popularityScore, setPopularityScore] = useState(4.6); 

    return (
        <div className='bg-gray-800'>
            <div className='mx-4 py-8 md:w-4/5 md:mx-auto'>
                <div className='md:w-2/3 mb-12 '>
                    <h1 className='text-xl md:text-3xl font-semibold leading-snug text-slate-100'>
                        We have something for everyone, especially you!
                    </h1>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col space-y-4 w-full md:w-1/3 lg:w-1/4">
                        {/* Image Section */}
                        <div className="relative w-full h-40 rounded-lg bg-gray-100">
                            {/* Placeholder for product image */}
                            <img 
                            src="https://via.placeholder.com/200x150" 
                            alt="Product" 
                            className="object-cover w-full h-full rounded-lg" 
                            />
                        </div>
                        {/* Title Section */}
                        <h2 className="text-lg font-bold text-gray-800">Most popular</h2>
                        <p className="text-sm text-gray-600">Umbrellas</p>

                        {/* Popularity Score Section */}
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-600">Popularity score: {popularityScore}</p>
                            <Star className="text-yellow-400" />
                        </div>

                        {/* Optional Button */}
                        <button className="bg-blue-500 text-white py-2 rounded-md text-sm hover:bg-blue-600">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Deals