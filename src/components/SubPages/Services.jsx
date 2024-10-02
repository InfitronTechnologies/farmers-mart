import React from 'react'
import NavBar from '../LandingPage/NavBar'
import { LocalShipping, Storefront, Support } from '@mui/icons-material';
import Footer from '../LandingPage/Footer';

const Services = () => {
  const services = [
    {
      title: "Marketplace for Farmers",
      description: "Empowering farmers to sell their produce directly to buyers, ensuring better prices and market access.",
      icon: <Storefront />
    },
    {
      title: "Reliable Logistics",
      description: "Seamless logistics solutions to ensure fresh farm produce is delivered from farm to table in record time.",
      icon: <LocalShipping />
    },
    {
      title: "Customer Support",
      description: "Our dedicated support team is here to help you every step of the way, whether you're a farmer or a buyer.",
      icon: <Support />
    }
  ];

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='relative z-10'>
        <NavBar bgColor="bg-farmersmartDarkGreen"/>
      </div>
      <div className="p-8 mt-20 flex-grow bg-white text-gray-700">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 bg-gray-100 rounded-md shadow-md flex items-center">
                <div className="text-4xl text-green-600">{service.icon}</div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer className='w-full mt-auto' />
    </div>
  );
};

export default Services;
