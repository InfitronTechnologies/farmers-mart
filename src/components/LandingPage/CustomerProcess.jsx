import React, { useState } from 'react';
import { CustomerOperations } from '../../constants/constant';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomerProcess = () => {
  const [activeItem, setActiveItem] = useState(null);

  
  const handleHover = (id) => {
    setActiveItem(id);
  };

  return (
    <div className="justify-center items-center bg-gray-100 py-8">
        <div className="flex flex-col mx-4 text-sm md:table-lg md:flex-row justify-between md:w-4/5 md:mx-auto">
            <div className='w-full md:w-1/2'>
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Produce Timelime</h2>
                <p className="text-gray-700 mb-6">
                    Consumers go through their preferred farmers or produce catalogue and get the perfect produce for them.
                </p>
            </div>          
            <div className="transition-opacity duration-300 hover:underline cursor-pointer"> 
                <Link to='/signup'>    
                    <span>Get your fresh produce</span>
                </Link>
            </div>
        </div>

        <div className='flex flex-col md:flex-row w-full h-96 md:w-4/5 mx-auto justify-between items-stretch'>
                <div className="flex-row md:flex-col h-full w-full md:w-1/2">
                    {CustomerOperations.map((operation) => (
                    <div
                        key={operation.id}
                        className={`p-2 md:my-4 rounded-md cursor-pointer 
                        ${activeItem === operation.id ? 'bg-blue-100' : 'bg-white'}
                        hover:bg-blue-100 transition-all m-2 md:py-4 md:my-4`}
                        onMouseEnter={() => handleHover(operation.id)}
                    >
                        <h3 className="text-lg font-semibold text-gray-900">{operation.title}</h3>
                    </div>
                    ))}
                </div>
                
                <div className="lg:w-1/2 h-40 lg:h-fit bg-gray-900 mt-4 mx-2 rounded-lg">
                    {activeItem && (
                    <video
                        src={CustomerOperations.find((item) => item.id === activeItem).videoSrc}
                        autoPlay muted loop
                        className="w-full md:h-96 object-cover overflow-hidden rounded-lg"
                    />
                    )}
                </div>
            {/* </div> */}
        </div>
    </div>
  );
};

export default CustomerProcess;
