import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import axios from "axios";
import ProductItemsDisplay from "./ProductItemsDisplay";
import Loading from '../Loading'
import { useProfile } from "../ProfileContext/ProfileContext";
import KycModal from "../UserPortal/KycModal/KycModal";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [minQty, setMinQty] = useState(1);
  const [maxQty, setMaxQty] = useState(10);
  const [units, setUnits] = useState(1)
  const [productImages, setProductImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [productItemsData, setProductItemsData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { userId, kycLevel } = useProfile()
  const [isKycModalOpen, setIsKycModalOpen] = useState(false);

  // Fetch product details
  useEffect(() => {
    const fetchProductDetails = async () => {
      const url = `${import.meta.env.VITE_API_BASE_URL}/product/select_by_id_get_product?id=${id}`

      try {
        const response = await axios.get(url);
        const productData = response.data.data;
        setProduct(productData);
        setMinQty(Number(productData.min_qty));
        setMaxQty(Number(productData.max_qty));
        setUnits(Number(productData.units))

        // Ensure quantity is set within min-max range
        setQuantity(Number(productData.min_qty));

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
      const url = `${import.meta.env.VITE_API_BASE_URL}/product_item/select_by_product_id_product_items`
      try {
        const response = await axios.post(url, {
          id: id
        });
        setProductItemsData(response.data.data)
      } catch (error) {
        console.error("Error fetching product items", error)
      }
    }
    fetchProductItems()

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [id]);

  //KYC MODAL CONTROL
  const handleOpenModal = () => {
    setIsKycModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsKycModalOpen(false);
  };

  // Handle quantity adjustments
  const handleIncrease = () =>
    setQuantity((prev) => Math.min(maxQty, prev + 1));

  const handleDecrease = () =>
    setQuantity((prev) => Math.max(minQty, prev - 1));

  // Handle slideshow navigation
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % productImages.length);
  const prevImage = () =>
    setCurrentImageIndex((prev) =>
      prev === 0 ? productImages.length - 1 : prev - 1
    );

  const handleBuy = () => {
    if (userId) {
      if (kycLevel < 3) {
        handleOpenModal()//Open the modal
      } else {
        navigate('/delivery-route', {
          state: {
            product: product,
            quantity: quantity,
            id: id,
          },
        });
      }
    } else {
      navigate('/login')
    }
  }

  return (
    <div>
      <div className="fixed top-0 left-0 w-full z-30 bg-white shadow-md">
        <MarketNav />
      </div>
      <Loading isLoading={isLoading} />
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
                  src={`https://farmersmart.com.ng/images/product/${productImages[currentImageIndex]}`}
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
                disabled={quantity <= minQty}
                className={`p-3 ${quantity > minQty
                  ? "bg-farmersmartLightGreen text-farmersmartDarkGreen hover:bg-farmersmartGreen hover:text-white transition"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  } rounded-l-full`}
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => {
                  let newQty = parseInt(e.target.value) || minQty;
                  newQty = Math.max(minQty, Math.min(maxQty, newQty)); // Ensure within limits
                  setQuantity(newQty);
                }}
                className="w-16 text-center bg-white text-lg font-semibold focus:outline-none"
                min={minQty}
                max={maxQty}
              />
              <button
                onClick={handleIncrease}
                disabled={quantity >= maxQty || quantity >= units}
                className={`p-3 ${quantity < maxQty && quantity < units
                  ? "bg-farmersmartLightGreen text-farmersmartDarkGreen hover:bg-farmersmartGreen hover:text-white transition"
                  : "bg-gray-200 text-gray-500 cursor-not-allowed"
                  } rounded-r-full`}
              >
                +
              </button>
            </div>
            <button
              onClick={handleBuy}
              className={`${units >= 1 ? "bg-[#ff7300]" : "bg-gray-700"} text-white text-lg font-semibold px-12 py-3 rounded-full shadow-md hover:bg-[#ff8c33] transition duration-300`}
              disabled={units < 1}
            >
              {units < 1 ? 'Out of Stock' : "Buy"}
            </button>
          </div>
        </div>
      </div>

      <KycModal isOpen={isKycModalOpen} onClose={handleCloseModal} />

      <div className="px-6 lg:px-16 mb-12">
        <ProductItemsDisplay items={productItemsData} />
      </div>
      <Footer />
    </div>

  );
};

export default ProductDetails;
