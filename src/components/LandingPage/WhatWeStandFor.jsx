import React from 'react';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import StorefrontIcon from '@mui/icons-material/Storefront'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HandshakeIcon from '@mui/icons-material/Handshake';

const WhatWeStandFor = () => {
  return (
    <section className="py-16 bg-farmersmartDarkGreen text-neutral-200">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-8">What We Stand For</h2>
        <div className="flex flex-col md:flex-row justify-between items-stretch md:space-x-6 space-y-8 md:space-y-0">
          <div className="flex-1 p-6 tracking-wide hover:py-8 bg-farmersmartGreen
          rounded-lg shadow-lg flex flex-col items-center text-center">
            <AgricultureIcon fontSize="large" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Supporting Farmers</h3>
            <p className="text-sm">
              Providing a platform for farmers to connect with buyers effortlessly and sell their produce without the cost of the middlemen
            </p>
          </div>

          <div className="flex-1 p-6 tracking-wide hover:py-8 bg-farmersmartGreen 
          rounded-lg shadow-lg flex flex-col items-center text-center">
            <StorefrontIcon fontSize="large" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Connecting Buyers</h3>
            <p className="text-sm">
              Enabling buyers to find high-quality produce directly from verified farmers without intermediaries.
            </p>
          </div>

          <div className="flex-1 p-6 tracking-wide hover:py-8 bg-farmersmartGreen 
          rounded-lg shadow-lg flex flex-col items-center text-center">
            <LocalShippingIcon fontSize="large" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Reliable Logistics</h3>
            <p className="text-sm">
              Offering seamless logistics to ensure timely delivery of fresh produce from farm to consumer.
            </p>
          </div>

          <div className="flex-1 p-6 tracking-wide hover:py-8 bg-farmersmartGreen 
          rounded-lg shadow-lg flex flex-col items-center text-center">
            <HandshakeIcon fontSize="large" className="mb-4" />
            <h3 className="text-xl font-semibold mb-2">Trusting Partners</h3>
            <p className="text-sm">
              Working with us to provide the next level convienience and returns to both consumers and farmers. </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeStandFor;
