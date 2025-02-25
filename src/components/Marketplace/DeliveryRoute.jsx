import React, { useEffect, useState } from "react";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useProfile } from "../ProfileContext/ProfileContext";
import axios from "axios";

const DeliveryRoute = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity, id } = location.state || {}; // Safely access state
  const { userId, userToken } = useProfile();
  const [deliveryRoute, setDeliveryRoute] = useState([]);
  const [states, setStates] = useState([]);
  const [costData, setCostData] = useState(null);
  const [formData, setFormData] = useState({
    users_id: userId,
    users_token: userToken,
    delivery_type_id: "",
    product_id: id,
    state_id: "",
    address: "",
    longs: "1",
    lats: "1",
  });

  useEffect(() => {
    const fetchDeliveryTypeId = async () => {
      const url = `${import.meta.env.VITE_API_BASE_URL}/list_all_delivery_type`

      const response = await axios.get(url);
      setDeliveryRoute(response.data.data);
    };
    fetchDeliveryTypeId();

    const fetchStates = async () => {
      const statesUrl = `${import.meta.env.VITE_API_BASE_URL}/select_list_state_by_country_id?id=162`

      try {
        const response = await axios.get(statesUrl);
        setStates(response.data.data);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const deliveryForm = { ...formData };
         const url =`${import.meta.env.VITE_API_BASE_URL}/rdeli`
  
    try {
      console.log(deliveryForm)
      const response = await axios.post(url, deliveryForm);
      const pricing = response.data.data; // Extract the pricing data
      return { success: true, pricing, deliveryForm }; // Return both success status and pricing data
    } catch (error) {
      console.error("Error submitting delivery data:", error);
      return { success: false }; // Return failure status
    }
  };
  
  const handleNavigateToCheckout = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const { success, pricing, deliveryForm } = await handleSubmit(); // Destructure the success status and pricing data
  
    if (success) {
      navigate("/checkout", {
        state: {
          product: product,
          quantity: quantity,
          costData: pricing, // Pass the pricing data directly
          id: id,
          deliveryForm: deliveryForm
        },
      });
    } else {
      alert("Failed to submit delivery data. Please try again.");
    }
  };
  

  return (
    <div>
      <MarketNav />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          How do you want it delivered?
        </h1>
        <form
          className="bg-white shadow-lg rounded-lg p-6 space-y-6"
          onSubmit={handleNavigateToCheckout} // Call the navigate function on submit
        >
          {/* Delivery Type */}
          <div>
            <label
              htmlFor="delivery_type_id"
              className="block text-gray-700 font-semibold mb-2"
            >
              Delivery Type
            </label>
            <select
              id="delivery_type_id"
              name="delivery_type_id"
              value={formData.delivery_type_id}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Delivery Type</option>
              {deliveryRoute.map((route) => (
                <option key={route.id} value={route.id}>
                  {route.delivery_type_name}
                </option>
              ))}
            </select>
          </div>

          {/* State */}
          <div>
            <label
              htmlFor="state_id"
              className="block text-gray-700 font-semibold mb-2"
            >
              State
            </label>
            <select
              id="state_id"
              name="state_id"
              value={formData.state_id}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select State</option>
              {states.map((state) => (
                <option key={state.id} value={state.id}>
                  {state.state_name}
                </option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your delivery address"
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-semibold rounded-md p-3 hover:bg-green-600 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default DeliveryRoute;
