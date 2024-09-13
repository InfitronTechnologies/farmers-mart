import React from 'react';
import hero from '../../assets/hero-section.jpg'

const HeroSection = () => {
  return (
    <div className="relative h-96 lg:h-screen flex items-center justify-center text-white">
      {/* Background image with gradient */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${hero})`
        }}>
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center px-4">
        {/* Responsive font size */}
        <h1 className="text-xl md:text-5xl font-bold mb-4 md:mb-6">
          Get the Best Deals on Farm Produce Direct from Farmers!
        </h1>

        {/* Responsive input field */}
        <form className="flex flex-col md:flex-row justify-center items-center mb-4 space-y-4 md:space-y-0">
          <input 
            type="text" 
            className="w-full max-w-xs md:max-w-lg p-4 rounded-md md:rounded-l-md focus:outline-none" 
            placeholder="Search for products"
          />
          <button className="bg-sky-800 text-white py-2 md:py-4 px-3 md:px-6 rounded-md md:rounded-r-md font-bold hover:bg-sky-600">
            Search
          </button>
        </form>

        {/* Responsive frequently searched section */}
        <p className="text-xs md:text-sm">
          Frequently searched: 
          <span className="underline"> rice</span>, 
          <span className="underline"> maize</span>, 
          <span className="underline"> tomatoes</span>
        </p>
      </div>
    </div>

  );
}

export default HeroSection;
