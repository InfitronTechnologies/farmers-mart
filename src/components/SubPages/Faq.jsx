import React, { useState } from 'react'
import NavBar from '../LandingPage/NavBar'
import { ExpandMore, ExpandLess } from '@mui/icons-material';
import Footer from '../LandingPage/Footer';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How does Farmers Mart work?",
      answer: "Farmers Mart connects farmers and buyers directly by providing a platform for selling and buying farm produce, with reliable logistics and a seamless marketplace experience."
    },
    {
      question: "How can I sign up as a farmer or buyer?",
      answer: "Simply click the 'Sign Up' button at the top of the page and follow the instructions to create a farmer or buyer account."
    },
    {
      question: "What logistics services do you offer?",
      answer: "We partner with local and international logistics providers to ensure timely delivery of fresh farm produce from farm to consumer."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10">
        <NavBar bgColor="bg-farmersmartDarkGreen" />
      </div>

      {/* Page content */}
      <div className="p-8 mt-20 flex-grow bg-white text-gray-700"></div>
        <div className="max-w-screen-lg mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Frequently Asked Questions</h2>
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className="flex justify-between items-center p-4 bg-white cursor-pointer shadow-md rounded-md"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? <ExpandLess /> : <ExpandMore />}
              </div>
              {activeIndex === index && (
                <div className="p-4 bg-white border-t border-gray-200 shadow-md">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
      </div>
      <Footer className='mt-auto w-full' />
    </div>
  );
};

export default Faq;
