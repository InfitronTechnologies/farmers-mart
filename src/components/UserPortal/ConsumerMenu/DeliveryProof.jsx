import React, { useEffect, useState } from "react";
import { useProfile } from "../../ProfileContext/ProfileContext";
import { useLocation } from "react-router-dom";
import axios from "axios";


const DeliveryProof = ({ onSubmit }) => {
  const location = useLocation()
  const {order} = location.state
  const {userId, userToken} = useProfile()
  const [states, setStates] = useState([])
  const [status, setStatus] = useState([])
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    users_id : userId,
    users_token : userToken,
    agent_id :    "",
    order_id :    order.id,
    product_id   :    order.product_id,
    status_id    :    "",
    house_number :    "",
    block_number :    "",
    flat_number  :    "",	
    plot_number  :    "",	
    street_name  :    "",	
    city_name   :    "",	
    state_id     :    "",	
    country_id   :    "162",	
    full_address :    "",
    lats         :    "",
    longs        :    "",
    pod_image    :    ""
  });

  useEffect(() => {
    const getStatus = async () => {
      const url = process.env.NODE_ENV === "production"
      ? `https://ourservicestech.com.ng/farmmart_api/v2/select_list_status`
      : `/farmmart_api/v2/select_list_status`;

      try {
        const response = await axios.get(url);
        const allStatus = response.data.data
        setStatus(allStatus)
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    }
    getStatus()

    const fetchStates = async () => {
      const statesUrl = process.env.NODE_ENV === "production"
      ? `https://ourservicestech.com.ng/farmmart_api/v2/select_list_state`
      : `/farmmart_api/v2/select_list_state`;

      try {
        const response = await axios.get(statesUrl);
        const state = response.data.data;
        setStates(state)
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates()
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0])
    setFormData((prev) => ({ ...prev, pod_img: e.target.files[0].name }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)

    try {
      const uploadUrl = process.env.NODE_ENV === "production" 
      ? "https://ourservicestech.com.ng/farmmart_api/v2/uploadimage" 
      : "/farmmart_api/v2/uploadimage";
  
      const uploadData = new FormData();        
        uploadData.append("pod_img", image)

        try {
          const response = await axios.post(uploadUrl, uploadData)
          console.log(response.data)
        } catch (error) {
          console.error("Error uploading image:", error.response?.data || error.message);
        }

      const proofForm = {
        ...formData,
        full_address: `${(formData.block_number|| formData.house_number|| formData.plot_number|| formData.flat_number)}, ${formData.street_name}, ${formData.city_name}`,
        pod_img: image.name
      }

      const url = process.env.NODE_ENV === "production"
      ? "https://ourservicestech.com.ng/farmmart_api/v2/pod/create_pod"
      : "/farmmart_api/v2/pod/create_pod";

      console.log(proofForm)
      const response = await axios.post(url, proofForm)
      console.log(response.data)      
    } catch (error) {
      console.log("Errors must always happen", error)
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-[#0B2B17] mb-4">Delivery Proof</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
        <div>
          <label
            htmlFor="house_number"
            className="block text-gray-700 font-semibold mb-2"
          >
            Block Number
          </label>
          <input
            id="house_number"
            name="house_number"
            value={formData.house_number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>
        <div>
          <label
            htmlFor="block_number"
            className="block text-gray-700 font-semibold mb-2"
          >
            House Number
          </label>
          <input
            id="block_number"
            name="block_number"
            value={formData.block_number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>
        <div>
          <label
            htmlFor="flat_number"
            className="block text-gray-700 font-semibold mb-2"
          >
            Flat Number
          </label>
          <input
            id="flat_number"
            name="flat_number"
            value={formData.flat_number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>
        <div>
          <label
            htmlFor="plot_number"
            className="block text-gray-700 font-semibold mb-2"
          >
            Plot Number
          </label>
          <input
            id="plot_number"
            name="block_number"
            value={formData.plot_number}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>
        <div className="col-span-4">
          <label
            htmlFor="street_name"
            className="block text-gray-700 font-semibold mb-2"
          >
            Street Name
          </label>
          <input
            id="street_name"
            name="street_name"
            value={formData.street_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>
        <div className="col-span-4">
          <label
            htmlFor="city_name"
            className="block text-gray-700 font-semibold mb-2"
          >
            City Name
          </label>
          <input
            id="city_name"
            name="city_name"
            value={formData.city_name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>
        <div className="col-span-4">
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
        <div className="col-span-4">
            <label
              htmlFor="status_id"
              className="block text-gray-700 font-semibold mb-2"
            >
              Status
            </label>
            <select
              id="status_id"
              name="status_id"
              value={formData.status_id}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select Status</option>
              {status
                .filter((stat) => stat.id === "12" || stat.id === "13")
                .map((stat) => (
                  <option key={stat.id} value={stat.id}>
                    {stat.status_name}
                  </option>
                ))
              }
            </select>
        </div>
        <div className="col-span-4">
          <label
            htmlFor="block_number"
            className="block text-gray-700 font-semibold mb-2"
          >
            Upload Image Proof
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className=" w-full border border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-green-500"
          />  
        </div>       
        <button
          type="submit"
          disabled= {loading}
          className="col-span-4 w-full bg-[#0B2B17] text-white py-2 rounded-lg hover:bg-green-700 transition"
        >
          {loading ? "Submitting..." : "Submit Proof"}
        </button>
      </form>
    </div>
  );
};

export default DeliveryProof;
