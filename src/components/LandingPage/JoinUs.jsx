import React from 'react'
import bgImage from '../../assets/corn-wide.webp'
import { useNavigate } from 'react-router-dom'

function JoinUs() {
  const navigate = useNavigate()
  return (
    <div className='relative items-center justify-center text-white py-8'>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${bgImage})`
            }}>
        </div>
        <div className='relative z-10 text-center px-4 py-12'>
            <h1 className='text-xl md:text-5xl font-bold'>Ready to hop on these juicy offers?</h1>
            <p className='text-base md:text-xl my-4'>Explore hundred of produces from trusted farmers by signing up today!</p>
            <button 
              className="bg-farmersmartOrange text-white mt-4 py-3 md:py-4 px-3 md:px-8 rounded-md md:rounded-3xl font-bold"
              onClick={() => navigate('signup')}
            >
            SIGN UP
          </button>
        </div>
    </div>
  )
}

export default JoinUs