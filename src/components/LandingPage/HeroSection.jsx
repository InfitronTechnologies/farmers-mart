import React from 'react';
import hero from '../../assets/hero-bg.jpg'
import SearchIcon from '@mui/icons-material/Search';

const HeroSection = () => {
  return (
    <div className="relative h-96 lg:h-screen flex items-center justify-center md:justify-start text-white z-10 md:pl-8">
      {/* Background image with gradient */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.7)), url(${hero})`
        }}>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-start px-4 w-full md:w-1/2 md:ml-12 tracking-wider">
        {/* Responsive font size */}
        <h1 
          className="text-2xl text-farmersmartOrange md:text-6xl md:w-4/5 font-bold mb-4 md:mb-6"
          style={{ fontFamily: "Montserrat" }}>
          Expanding Market Horizons for Farmers and Buyers.
        </h1>

        {/* Responsive input field */}
        <div className="relative md:w-3/5">
          <input 
            type="text" 
            className="border rounded-full pl-4 pr-10 py-2 w-full"
            style={{ fontFamily: "Montserrat" }} 
            placeholder="Search for product" 
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2">
            <SearchIcon className='text-farmersmartDarkGreen'/>
          </button>
        </div>
      </div>
    </div>

  );
}

export default HeroSection;
