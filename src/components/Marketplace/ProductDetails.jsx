import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import ProductItemsDisplay from "./ProductItemsDisplay";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productItemsData, setProductItemsData] = useState([])

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      const url =
        process.env.NODE_ENV === "production"
          ? `https://ourservicestech.com.ng/farmmart_api/v2/product/select_by_id_get_product?id=${id}`
          : `/farmmart_api/v2/product/select_by_id_get_product?id=${id}`;

      try {
        const response = await axios.get(url);
        const productData = response.data.data;
        setProduct(productData);

        // Extract images and filter out null or undefined values
        const images = [
          productData.product_image_f,
          productData.product_image_l,
          productData.product_image_r,
        ].filter(Boolean);
        setProductImages(images);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProductDetails();

    const fetchProductItems = async () => {
      const url = process.env.NODE_ENV === "production"
      ? `https://ourservicestech.com.ng/farmmart_api/v2/product_item/select_by_product_id_product_items`
      : `/farmmart_api/v2/product_item/select_by_product_id_product_items`;
      try{
        const response =  await axios.post(url, {
          id: id
        });
        setProductItemsData(response.data.data)
      } catch (error){
        console.error ("Error fetching product items", error)
      }
    } 
    fetchProductItems()
  }, [id]);

  // Handle quantity adjustments
  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => Math.max(1, prev - 1));

  // Handle slideshow navigation
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
        <MarketNav />
      </div>
    
      <div
        className="text-3xl md:text-4xl tracking-wider mt-28 lg:ml-16 font-extrabold text-farmersmartDarkGreen text-center lg:text-left"
        style={{ fontFamily: "Montserrat" }}
      >
        Product Details
      </div>
    
      <div className="flex flex-col lg:flex-row items-start px-6 lg:px-16 my-20 space-y-12 lg:space-y-0 lg:space-x-16">
        {/* Product Image Slideshow */}
        <div className="p-4 lg:mr-8 flex justify-center items-center lg:w-1/2">
          <div className="relative rounded-lg shadow-lg border border-gray-200 max-w-full">
            {productImages.length > 0 ? (
              <>
                <img
                  src={`https://ourservicestech.com.ng/farmmart_api/images/product/${productImages[currentImageIndex]}`}
                  alt={`Product Image ${currentImageIndex + 1}`}
                  className="rounded-lg object-cover w-full max-w-xs sm:max-w-md h-80 sm:h-96"
                />
                <button
                  onClick={prevImage}
                  aria-label="Previous Image"
                  className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-farmersmartGreen text-white p-3 rounded-full shadow-lg hover:bg-farmersmartDarkGreen transition"
                >
                  &lt;
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next Image"
                  className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-farmersmartGreen text-white p-3 rounded-full shadow-lg hover:bg-farmersmartDarkGreen transition"
                >
                  &gt;
                </button>
              </>
            ) : (
              <p className="text-gray-500 text-center py-8">No images available</p>
            )}
          </div>
        </div>
    
        {/* Product Details */}
        <div className="lg:w-1/2 p-6 text-gray-800 space-y-6">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-farmersmartDarkGreen text-center lg:text-left">
              {product?.product_name || "Loading..."}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mt-4 lg:mt-0">
              Price:{" "}
              <span className="font-bold text-base text-gray-400 mr-2 line-through">
                ₦{product?.product_normal_price || 0}
              </span>
              <span className="text-farmersmartGreen font-bold text-xl">
                ₦{product?.product_promo_price || 0}
              </span>
            </p>
          </div>
          <p className="text-lg text-center lg:text-left">
            <span className="font-bold text-farmersmartDarkGreen">Weight:</span>{" "}
            {product?.product_weight || "N/A"} kg
          </p>
          <div>
            <h2 className="text-xl sm:text-2xl text-farmersmartDarkGreen font-bold mb-2 text-center lg:text-left">
              Description
            </h2>
            <p className="text-md text-gray-600 leading-relaxed text-justify lg:text-left">
              {product?.product_long_desc || "No description available."}
            </p>
          </div>
    
          {/* Quantity Selector */}
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center border border-farmersmartLightGreen rounded-full">
              <button
                onClick={handleDecrease}
                className="p-3 bg-farmersmartLightGreen text-farmersmartDarkGreen font-bold hover:bg-farmersmartGreen hover:text-white transition rounded-l-full"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
                className="w-16 text-center bg-white text-lg font-semibold focus:outline-none"
                min="1"
              />
              <button
                onClick={handleIncrease}
                className="p-3 bg-farmersmartLightGreen text-farmersmartDarkGreen font-bold hover:bg-farmersmartGreen hover:text-white transition rounded-r-full"
              >
                +
              </button>
            </div>
            <Link
              to="/delivery-route"
              state={{
                product: product,
                quantity: quantity,
                id: id,
              }}
            >
              <button className="bg-[#ff7300] text-white text-lg font-semibold px-12 py-3 rounded-full shadow-md hover:bg-[#ff8c33] transition duration-300">
                Buy
              </button>
            </Link>
          </div>
        </div>
      </div>
    
      <div className="px-6 lg:px-16 mb-12">
        <ProductItemsDisplay items={productItemsData} />
      </div>
      <Footer />
    </div>
  
  );
};

export default ProductDetails;
