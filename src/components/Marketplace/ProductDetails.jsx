// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { dummyProducts } from '../../constants/constant';
// import MarketNav from './MarketNav';
// import Footer from '../LandingPage/Footer';

// const ProductDetails = ({ addToCart }) => {
//   const { id } = useParams();
//   const product = dummyProducts.find((p) => p.id === parseInt(id));
//   const [quantity, setQuantity] = useState(1); // Track selected quantity

//   if (!product) {
//     return <div className="text-center text-xl text-gray-500">Product not found.</div>;
//   }

//   return (
//     <div>
//       <div className="fixed top-0 left-0 w-full z-30">
//         <MarketNav />
//       </div>
//       <div className="flex flex-col lg:flex-row items-start p-6 mt-16 bg-gray-50">
//         {/* Product Image */}
//         <div className="lg:w-1/2 w-full p-4 flex justify-center">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full lg:max-w-lg h-auto rounded-lg shadow-md object-cover"
//           />
//         </div>
//         {/* Product Details */}
//         <div className="lg:w-1/2 w-full p-4 text-gray-700">
//           <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
//           <p className="text-lg text-gray-600 mb-2">Price: <span className="text-farmersmartGreen font-semibold">₦{product.price.toLocaleString()}</span></p>
//           <p className="text-md text-gray-500 mb-4">{product.longDescription}</p>
//           <p className="text-md text-gray-500 mb-4">Farmer: <span className="font-semibold">{product.farmerName}</span></p>

//           {/* Quantity Selector */}
//           <div className="flex items-center mb-6">
//             <label className="text-gray-600 mr-2">Quantity:</label>
//             <input
//               type="number"
//               value={quantity}
//               onChange={(e) => setQuantity(parseInt(e.target.value))}
//               className="w-20 border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-farmersmartGreen"
//               min="1"
//             />
//           </div>

//           {/* Price and Add to Cart */}
//           <div className="flex items-center mt-4">
//             <button
//               className="bg-farmersmartDarkGreen text-white px-6 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
//             >
//             Buy
//             </button>
//           </div>
//         </div>
//       </div>
//       <Footer/>
//     </div>
//   );
// };

// export default ProductDetails;


import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyProducts } from "../../constants/constant";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1); // Track selected quantity
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For the slideshow

  useEffect(() => {
    // Automatic slideshow logic
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % product.slideImages.length
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [product.slideImages.length]);

  if (!product) {
    return (
      <div className="text-center text-xl text-gray-500">
        Product not found.
      </div>
    );
  }

  // Handle quantity adjustments
  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () =>
    setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-30">
        <MarketNav />
      </div>
      <div className="text-3xl tracking-wide mt-24 lg:ml-12 font-bold text-farmersmartDarkGreen"
          style={{ fontFamily: "Montserrat" }}
      >Product Details</div>
      <div className="flex flex-col lg:flex-row items-start px-6 bg-gray-50">
        {/* Product Image Slideshow */}
        <div className="p-4 flex">
          <div className="relative rounded-lg shadow-md">
            <img
              src={product.slideImages[currentImageIndex]} // Dynamic image based on index
              alt={`Product ${currentImageIndex + 1}`}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2 p-4 text-gray-700">
          <div className="flex flex-row justify-between mb-4">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-farmersmartDarkGreen mb-4">
                {product.name}
              </h1>
              <div className="text-2xl text-gray-400 font-bold">Dairy Product</div>
            </div>            
            <p className="text-lg text-gray-600 mb-2">
              Price:{" "}
              <span className="text-farmersmartGreen font-semibold">
                ₦{product.price.toLocaleString()}
              </span>
            </p>
          </div>
          <div>
            <p className="">Weight: 20kg/Crate</p>
            <p className="">Location: Igbomina, Kwara.</p>
            <p className="">Rating</p>
          </div>
          <div className="mt-4">
            <div className="text-xl text-farmersmartDarkGreen font-semibold">Description</div>
            <p className="text-md text-gray-500 mb-4">
              {product.longDescription}
            </p>
          </div>          
          <p className="text-md text-gray-500 mb-4">
            Farmer: <span className="font-semibold">{product.farmerName}</span>
          </p>

          {/* Quantity Selector */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="border border-[#C1E84991] rounded-l-3xl bg-[#C1E84991] ">
                <IconButton
                  onClick={handleDecrease}
                  className="text-farmersmartGreen "
                >
                  <RemoveIcon className="text-black font-medium" />
                </IconButton>
              </div>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-12 text-center border-none bg-transparent focus:outline-none"
                min="1"
              />
              <div className="border border-[#C1E84991] rounded-r-3xl bg-[#C1E84991] ">
                <IconButton
                  onClick={handleIncrease}
                  className="text-farmersmartGreen rounded-r-lg"
                >
                  <AddIcon className="text-black font-medium" />
                </IconButton>
              </div> 
            </div>
            {/* Price and Add to Cart */}
            <div className="flex items-center">
              <Link to='/checkout'>
                <button
                  className="bg-[#ff7300] text-white text-2xl font-semibold px-16 py-3 rounded-3xl shadow hover:bg-green-700 transition duration-200"
                >
                  Buy
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
