import React from 'react'
import hero from '../../assets/assistance.jpg'
import { Book, Forum, Help } from '@mui/icons-material'

function Assistance() {
  return (
    <div className="relative h-72 lg:h-screen flex items-center justify-center text-white z-10">
        {/* Background image with gradient */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
            backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${hero})`
            }}>
        </div>

        <div className="relative z-10 w-full md:w-4/5 tracking-wider">
            <div className='text-center text-2xl md:text-4xl font-bold mb-'>
                We provide assistance when you require it!!!
            </div>
            <div className='flex flex-col md:flex-row w-full my-4 h-60 justify-center items-center'>
                <div className='flex-1 w-full h-full md:w-1/3 mx-2 p-2 bg-farmersmartGreen text-center rounded-lg'>
                    <Book/>
                    <h2 className='text-farmersmartOrange text-2xl font-bold my-4'>Blog</h2>
                    <p>Access all the resources you need to start and expand your farm</p>
                    <p>Read</p>
                </div>
                <div className='flex-1 w-full h-full md:w-1/3 mx-2 p-2 bg-farmersmartGreen text-center rounded-lg'>
                    <Forum/>
                    <h2 className='text-farmersmartOrange text-2xl font-bold my-4'>Farmer's Forum</h2>
                    <p>Discuss and network with individuals, partners, and
                        fellow farmers who truly understand your needs
                    </p>
                    <p>Discuss</p>
                </div>
                <div className='flex-1 w-full h-full md:w-1/3 mx-2 p-2 bg-farmersmartGreen text-center rounded-lg'>
                    <Help/>
                    <h2 className='text-farmersmartOrange text-2xl font-bold my-4'>Help</h2>
                    <p>Find support through a helpdesk packed with informative articles</p>
                    <p>Get Help</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Assistance