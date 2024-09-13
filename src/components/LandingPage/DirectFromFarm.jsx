import React from 'react';
import { fromFarms } from '../../constants/constant';

const DirectFromFarm = () => {
  return (
    <div className='w-full md:w-4/5 mx-auto my-12'>
      <div className='m-4'>
        <h1 className='text-xl md:text-3xl font-semibold leading-snug '>
          Source direct-from-farm
        </h1>
      </div>
      <div className="flex flex-wrap justify-center">
        {fromFarms.map((item, index) => (
          <div key={index} className="relative group w-full md:w-1/5 bg-white rounded-lg
           overflow-hidden shadow-lg my-2 md:my-4 mx-2 transform transition duration-300 hover:scale-105">
            {/* Image Section */}
            <img
              src={item.imageSrc}
              alt={item.title}
              className="object-cover w-full h-40 md:h-64"
            />
            {/* Text Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-start p-4">
              <h3 className="text-white font-bold text-lg ">{item.title}</h3>
            </div>

            {/* Bottom CTA Section */}
            <div className="absolute bottom-0 left-0 w-full flex justify-between items-center p-4 bg-gradient-to-t from-black via-transparent to-transparent">
              <a
                href="#"
                className="text-white text-sm font-semibold underline"
              >
                {item.ctaText}
              </a>
            </div>
          </div>          
        ))}
      </div>
    </div>
  );
};

export default DirectFromFarm