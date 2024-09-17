// import React, {useState} from 'react'
// import market from '../../assets/market.jpg'
// import potatoes from '../../assets/potato-farm.jpg'
// import onion from '../../assets/onion.jpg'
// import pepper from '../../assets/pepper.jpg'
// import vegetables from'../../assets/vegetables.jpg'
// import fish from '../../assets/fish.jpg'
// import egg from '../../assets/egg.jpg'

// function Deals() {

//     return (
//         <div className='mx-4 md:mx-12'>
//             <div className='py-8 md:mx-auto'>
//                 <div className='md:w-2/3 mb-12 '>
//                     <h1 className='text-xl md:text-3xl font-semibold leading-snug'>
//                         Discover great deals!
//                     </h1>
//                 </div>

//                 <div className='flex flex-col md:flex-row items-center justify-center'>                    
                    
//                     <div className="flex-1 relative rounded-lg  flex-col space-y-4 w-full 
//                     md:w-1/3 lg:w-1/4 ">
//                         <div className='flex flex-row justify-between items-center
//                          text-sm mx-2'>
//                             <p>Top Ranking</p>
//                             <button className='bg-farmersmartOrange py-1 px-3 rounded-lg'>
//                                 Check out!
//                             </button>
//                         </div>
//                         <img 
//                             src={market} 
//                             alt="Product" 
//                             className="object-cover w-full rounded-lg" 
//                         />
//                     </div>

//                     <div className='flex-1 w-full md:w-1/3 mx-1 my-4 flex-col'>
//                         <div className='flex flex-row justify-between items-center mb-2 
//                         text-sm mx-2'>
//                             <p>Deals on best sellers</p>
//                             <button className='bg-farmersmartOrange py-1 px-3 rounded-lg'>
//                                 Check out!
//                             </button>
//                         </div>
//                         <div className='flex flex-col gap-1 rounded-lg bg-farmersmartLightGreen'>
//                             {/* Top large image */}
//                             <img 
//                                 src={potatoes} 
//                                 alt="Potatoes" 
//                                 className='w-full h-48 object-cover rounded-lg bg-farmersmartLightGreen' 
//                             />                            
//                             {/* Grid of smaller images */}
//                             <div className='grid grid-cols-2 gap-1'>
//                                 {/* Left side two stacked images */}
//                                 <div className='space-y-1'>
//                                     <img 
//                                         src={onion} 
//                                         alt="Onion" 
//                                         className='w-full h-24 object-cover rounded-lg'
//                                     />
//                                     <img 
//                                         src={pepper} 
//                                         alt="Pepper" 
//                                         className='w-full h-24 object-cover rounded-lg'
//                                     />
//                                 </div>
//                                 {/* Right side single image */}
//                                 <img 
//                                     src={vegetables} 
//                                     alt="Vegetables" 
//                                     className='w-full h-full object-cover rounded-lg'
//                                 />
//                             </div>
//                         </div>
//                     </div>

//                     <div className='flex-1 w-full md:w-1/3 mx-1 my-4 flex-col'>
//                         <div className='flex flex-row justify-between items-center mb-2 
//                             text-sm mx-2'>
//                             <p>Top Deals</p>
//                             <button className='bg-farmersmartOrange py-1 px-3 rounded-lg'>
//                                 Check out!
//                             </button>
//                         </div>
//                         <div className='flex flex-col'>
//                             <img 
//                                 src={fish} 
//                                 alt="" />
//                             <img 
//                                 src={egg} 
//                                 alt="" />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Deals


import React from 'react';
import market from '../../assets/market.jpg';
import potatoes from '../../assets/potato-farm.jpg';
import onion from '../../assets/onion.jpg';
import pepper from '../../assets/pepper.jpg';
import vegetables from '../../assets/vegetables.jpg';
import fish from '../../assets/fish.jpg';
import egg from '../../assets/egg.jpg';

function Deals() {
  return (
    <div className="mx-4 md:mx-12">
      <div className="py-8 md:mx-auto">
        <div className="md:w-2/3 mb-12">
          <h1 className="text-xl md:text-3xl font-semibold leading-snug">
            Discover great deals!
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
          {/* First Block */}
          <div className="relative rounded-lg bg-white shadow-lg flex flex-col">
            <div className="flex flex-row justify-between items-center text-sm p-2">
              <p>Top Ranking</p>
              <button className="bg-farmersmartOrange py-1 px-3 rounded-lg">
                Check out!
              </button>
            </div>
            <img
              src={market}
              alt="Product"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          {/* Second Block */}
          <div className="relative rounded-lg bg-white shadow-lg flex flex-col">
            <div className="flex flex-row justify-between items-center text-sm p-2">
              <p>Deals on best sellers</p>
              <button className="bg-farmersmartOrange py-1 px-3 rounded-lg">
                Check out!
              </button>
            </div>
            <div className="flex flex-col gap-1 rounded-lg bg-farmersmartLightGreen h-full">
              <img
                src={potatoes}
                alt="Potatoes"
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="grid grid-cols-2 gap-1">
                <div className="space-y-1">
                  <img
                    src={onion}
                    alt="Onion"
                    className="w-full h-24 md:h-40 object-cover rounded-lg"
                  />
                  <img
                    src={pepper}
                    alt="Pepper"
                    className="w-full h-24 md:h-40 object-cover rounded-lg"
                  />
                </div>
                <img
                  src={vegetables}
                  alt="Vegetables"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>

          {/* Third Block */}
          <div className="relative rounded-lg bg-white shadow-lg flex flex-col">
            <div className="flex flex-row justify-between items-center text-sm p-2">
              <p>Top Deals</p>
              <button className="bg-farmersmartOrange py-1 px-3 rounded-lg">
                Check out!
              </button>
            </div>
            <div className="flex flex-col h-full">
              <img
                src={fish}
                alt="Fish"
                className="w-full h-48 object-cover rounded-lg"
              />
              <img
                src={egg}
                alt="Egg"
                className="w-full h-48 object-cover rounded-lg mt-1"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
