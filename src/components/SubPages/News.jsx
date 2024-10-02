import React from 'react'
import NavBar from '../LandingPage/NavBar'
import { EventNote } from '@mui/icons-material';
import Footer from '../LandingPage/Footer';

const WhatsNew = () => {
  const updates = [
    {
      title: "New Logistics Partner",
      description: "We’ve partnered with a new logistics provider to offer faster delivery times for all orders.",
      date: "September 25, 2024"
    },
    {
      title: "New Crop Listings Available",
      description: "Farmers can now list new types of produce including organic products and exotic fruits.",
      date: "October 1, 2024"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10">
        <NavBar bgColor="bg-farmersmartDarkGreen" />
      </div>

      <div className="p-8 mt-20 flex-grow bg-white text-gray-700">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">What's New</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <div key={index} className="p-6 bg-white rounded-md shadow-md">
                <div className="flex items-center mb-4">
                  <EventNote className="text-4xl text-green-600" />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{update.title}</h3>
                    <p className="text-sm text-gray-500">{update.date}</p>
                  </div>
                </div>
                <p>{update.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer className='w-full mt-auto' />
    </div>
  );
};

export default WhatsNew;
