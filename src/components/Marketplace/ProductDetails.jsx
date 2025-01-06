// import React, { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import MarketNav from "./MarketNav";
// import Footer from "../LandingPage/Footer";
// import { IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import axios from "axios";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState();
//   const [quantity, setQuantity] = useState(1); // Track selected quantity
//   const [productImages, setProductImages] = useState([]);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0); // For the slideshow

//   useEffect(() => {
//     const getProductDetails = async () => {
//       const url = process.env.NODE_ENV === "production"
//       ? `https://ourservicestech.com.ng/farmmart_api/v2/product/select_by_id_get_product?id=${id}`
//       : `/farmmart_api/v2/product/select_by_id_get_product?id=${id}`;

//       try {
//         const response = await axios.get(url);
//         const productData = response.data.data;
//         setProduct(response.data.data);

//         const images = [
//           productData.product_image_f,
//           productData.product_image_l,
//           productData.product_image_r,
//         ].filter(Boolean); // Remove null or undefined values

//         setProductImages(images);
//       } catch (error) {
//         console.error("Product Error", error);
//       }
//     };

//     getProductDetails();
//   }, [id]);

//   // Handle quantity adjustments
//   const handleIncrease = () => setQuantity(quantity + 1);
//   const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

//   // Handle slideshow navigation
//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % productImages.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) =>
//       prevIndex === 0 ? productImages.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <div>
//       <div className="fixed top-0 left-0 w-full z-30">
//         <MarketNav />
//       </div>
//       <div
//         className="text-3xl tracking-wide mt-24 lg:ml-12 font-bold text-farmersmartDarkGreen"
//         style={{ fontFamily: "Montserrat" }}
//       >
//         Product Details
//       </div>
//       <div className="flex flex-col lg:flex-row items-start px-6 my-16">
//         {/* Product Image Slideshow */}
//         <div className="p-4 flex">
//           <div className="relative rounded-lg shadow-md">
//             {productImages.length > 0 ? (
//               <>
//                 <img
//                   src={`https://ourservicestech.com.ng/farmmart_api/images/product/${productImages[currentImageIndex]}`}
//                   alt={`Product ${currentImageIndex + 1}`}
//                   className="rounded-lg object-cover w-96 h-96"
//                 />
//                 <button
//                   onClick={prevImage}
//                   className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-900"
//                 >
//                   &lt;
//                 </button>
//                 <button
//                   onClick={nextImage}
//                   className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-900"
//                 >
//                   &gt;
//                 </button>
//               </>
//             ) : (
//               <p className="text-gray-500">No images available</p>
//             )}
//           </div>
//         </div>
//         {/* Product Details */}
//         <div className="lg:w-1/2 p-4 text-gray-700 h-auto">
//           <div className="flex flex-row justify-between mb-4 mr-4">
//             <h1 className="text-4xl font-bold text-farmersmartDarkGreen mb-4">
//               {product?.product_name}
//             </h1>
//             <p className="text-2xl text-gray-600 mb-2">
//               Price:{" "}
//               <span className="text-farmersmartGreen font-semibold">
//                 ₦{product?.product_normal_price}
//               </span>
//             </p>
//           </div>
//           <div>
//             <p className="">Weight: {product?.product_weight} kg</p>
//           </div>
//           <div className="mt-4">
//             <div className="text-xl text-farmersmartDarkGreen font-semibold">
//               Description
//             </div>
//             <p className="text-md text-gray-500 mb-4">
//               {product?.product_long_desc}
//             </p>
//           </div>
//           {/* Quantity Selector */}
//           <div className="flex items-center justify-between mb-6">
//             <div className="flex items-center">
//               <div className="border border-[#C1E84991] rounded-l-3xl bg-[#C1E84991] ">
//                 <IconButton
//                   onClick={handleDecrease}
//                   className="text-farmersmartGreen "
//                 >
//                   <RemoveIcon className="text-black font-medium" />
//                 </IconButton>
//               </div>
//               <input
//                 type="number"
//                 value={quantity}
//                 onChange={(e) =>
//                   setQuantity(Math.max(1, parseInt(e.target.value) || 1))
//                 }
//                 className="w-12 text-center border-none bg-transparent focus:outline-none"
//                 min="1"
//               />
//               <div className="border border-[#C1E84991] rounded-r-3xl bg-[#C1E84991] ">
//                 <IconButton
//                   onClick={handleIncrease}
//                   className="text-farmersmartGreen rounded-r-lg"
//                 >
//                   <AddIcon className="text-black font-medium" />
//                 </IconButton>
//               </div>
//             </div>
//             {/* Price and Add to Cart */}
//             <div className="flex items-center">
//             <Link
//               to={{
//                 pathname: "/checkout",
//                 state: { 
//                   name: product.product_name,
//                   quantity: quantity
//                 } // Pass the product and quantity as state
//               }}
//             >
//               <button className="bg-[#ff7300] text-white text-2xl font-semibold px-16 py-3 rounded-3xl shadow hover:bg-green-700 transition duration-200">
//                 Buy
//               </button>
//             </Link>

//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
      <div className="fixed top-0 left-0 w-full z-30">
        <MarketNav />
      </div>
      <div
        className="text-3xl tracking-wide mt-24 lg:ml-12 font-bold text-farmersmartDarkGreen"
        style={{ fontFamily: "Montserrat" }}
      >
        Product Details
      </div>
      <div className="flex flex-col lg:flex-row items-start px-6 my-16">
        {/* Product Image Slideshow */}
        <div className="p-4 flex">
          <div className="relative rounded-lg shadow-md">
            {productImages.length > 0 ? (
              <>
                <img
                  src={`https://ourservicestech.com.ng/farmmart_api/images/product/${productImages[currentImageIndex]}`}
                  alt={`Product Image ${currentImageIndex + 1}`}
                  className="rounded-lg object-cover w-96 h-96"
                />
                <button
                  onClick={prevImage}
                  aria-label="Previous Image"
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-900"
                >
                  &lt;
                </button>
                <button
                  onClick={nextImage}
                  aria-label="Next Image"
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full shadow hover:bg-gray-900"
                >
                  &gt;
                </button>
              </>
            ) : (
              <p className="text-gray-500">No images available</p>
            )}
          </div>
        </div>
        {/* Product Details */}
        <div className="lg:w-1/2 p-4 text-gray-700 h-auto">
          <div className="flex flex-row justify-between mb-4 mr-4">
            <h1 className="text-4xl font-bold text-farmersmartDarkGreen mb-4">
              {product?.product_name || "Loading..."}
            </h1>
            <p className="text-2xl text-gray-600 mb-2">
              Price:{" "}
              <span className="text-farmersmartGreen font-semibold">
                ₦{product?.product_normal_price || 0}
              </span>
            </p>
          </div>
          <p>Weight: {product?.product_weight || "N/A"} kg</p>
          <div className="mt-4">
            <div className="text-xl text-farmersmartDarkGreen font-semibold">
              Description
            </div>
            <p className="text-md text-gray-500 mb-4">
              {product?.product_long_desc || "No description available."}
            </p>
          </div>
          {/* Quantity Selector */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="border border-[#C1E84991] rounded-l-3xl bg-[#C1E84991] ">
                <IconButton
                  onClick={handleDecrease}
                  className="text-farmersmartGreen"
                >
                  <RemoveIcon className="text-black font-medium" />
                </IconButton>
              </div>
              <input
                type="number"
                value={quantity}
                onChange={(e) =>
                  setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                }
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
            {/* Buy Button */}
            <div className="flex items-center">
              <Link
                to="/checkout"
                state={{
                  product: product,
                  quantity: quantity,
                }}
              >
                <button className="bg-[#ff7300] text-white text-2xl font-semibold px-16 py-3 rounded-3xl shadow hover:bg-green-700 transition duration-200">
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
