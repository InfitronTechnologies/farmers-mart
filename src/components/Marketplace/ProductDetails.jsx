import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { dummyProducts } from "../../constants/constant";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState()
  const [quantity, setQuantity] = useState(1); // Track selected quantity
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // For the slideshow

  useEffect(() => {
    const getProductDetails = async () => {
      const url = process.env.NODE_ENV === 'production'
      ? `https://ourservicestech.com.ng/farmmart_api/v2/product/select_by_id_get_product?id=${id}`
      : `/farmmart_api/v2/product/select_by_id_get_product?id=${id}`

      try {
        const response = await axios.get(url)
        setProduct(response.data.data) 
        console.log(response.data.data) 
      } catch (error) {
        console.error('Product Error', error)
      } 
    }
    getProductDetails()
  },[])

  useEffect(() => {    
    // Automatic slideshow logic
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % 3
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [3]);

  // if (!product) {
  //   return (
  //     <div className="text-center text-xl text-gray-500">
  //       Product not found.
  //     </div>
    // );

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
            {/* <img
              src={product.slideImages[currentImageIndex]} // Dynamic image based on index
              alt={`Product ${currentImageIndex + 1}`}
              className="rounded-lg object-cover"
            /> */}
          </div>
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2 p-4 text-gray-700">
          <div className="flex flex-row justify-between mb-4">
            <div className="flex flex-col">
              <h1 className="text-4xl font-bold text-farmersmartDarkGreen mb-4">
                {product.product_name}
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
    // <p>test</p>
  );
};

export default ProductDetails;
