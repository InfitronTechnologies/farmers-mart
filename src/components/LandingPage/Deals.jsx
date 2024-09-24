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
