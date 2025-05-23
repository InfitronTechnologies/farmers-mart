import React, { useEffect, useRef, useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Business } from '@mui/icons-material';
import { farmcategories } from '../../constants/constant';
import axios from 'axios';

const FarmCategories = () => {
  const [profileCount, setProfileCount] = useState({})
  const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL
  // Reference for the scrollable div
  const scrollRef = useRef(null);

  // Function to handle scrolling left
  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -200, // Adjust scroll distance
      behavior: 'smooth',
    });
  };

  // Function to handle scrolling right
  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 200, // Adjust scroll distance
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const getProfileCount = async () => {
      const url = `${VITE_API_BASE_URL}/list_all_profile`
      try {
        const response = await axios.get(url);
        const count = response.data.data;
        setProfileCount(count)
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    getProfileCount()
  }, [])

  console.log(profileCount)
  return (
    <div className='mx-auto py-2 md:py-8'>
      <section className="flex flex-col mx-auto md:w-5/6 md:mb-8 md:flex-row items-center justify-between px-6 py-8 md:py-12 bg-white">
        {/* Left Side - Heading */}
        <div className="md:w-2/5 mb-8 md:mb-0">
          <h1 className="text-xl md:text-3xl font-semibold leading-snug">
            Explore the sumptous offers tailored for your consumption needs
          </h1>
        </div>

        {/* Right Side - Stats */}
        <div className="flex flex-wrap md-ml:12 gap-6 md:gap-12">
          <div className="flex flex-col md:w-1/3 items-start">
            <h2 className="text-farmersmartDarkGreen text-2xl md:text-4xl font-bold">{profileCount.farmer}</h2>
            <p className="text-sm md:text-base">Farmers</p>
          </div>
          <div className="flex flex-col md:w-1/3 items-start">
            <h2 className="text-farmersmartDarkGreen text-2xl md:text-4xl font-bold">{profileCount.farm}</h2>
            <p className="text-sm md:text-base">Farms</p>
          </div>
          <div className="flex flex-col md:w-1/3 items-start">
            <h2 className="text-farmersmartDarkGreen text-2xl md:text-4xl font-bold">{profileCount.product}</h2>
            <p className="text-sm md:text-base">Farm produce</p>
          </div>
          <div className="flex flex-col md:w-1/3 items-start">
            <h2 className="text-farmersmartDarkGreen text-2xl md:text-4xl font-bold">{profileCount.logistic}</h2>
            <p className="text-sm md:text-base">Logistics</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FarmCategories;
