import React from 'react';
import NavBar from '../LandingPage/NavBar';
import Footer from '../LandingPage/Footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10">
        <NavBar bgColor="bg-farmersmartDarkGreen" />
      </div>

      {/* Page content */}
      <div className="p-8 mt-20 flex-grow bg-white text-gray-700">
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-green-800">About Us</h2>
          <p className="mt-4">
            Farmers Mart is a platform dedicated to connecting farmers, buyers, and logistics partners to foster an efficient and reliable marketplace for agricultural products. Our mission is to empower farmers with the tools they need to succeed and to provide buyers with access to high-quality farm produce.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-700">Our Mission</h3>
              <p className="mt-2">
                To enable farmers to expand their market reach while providing reliable logistics and partnerships that ensure seamless transactions for both farmers and buyers.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-green-700">Our Vision</h3>
              <p className="mt-2">
                To be the leading platform for agricultural commerce, bridging the gap between farm and table while fostering sustainable farming practices.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer className="w-full mt-auto" />
    </div>
  );
};

export default About;
