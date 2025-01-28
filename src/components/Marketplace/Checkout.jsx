// import React, { useEffect, useState } from "react";
// import MarketNav from "./MarketNav";
// import Footer from "../LandingPage/Footer";
// import { useLocation } from "react-router-dom";
// import PaystackPayment from './PaystackPayment';
// import axios from "axios";

// const CheckoutPage = () => {
//     const location = useLocation();
//     const { product, quantity, id, costData, deliveryForm } = location.state || {}; // Safely access state
//     const [state, setState] = useState(null)
//     const [formData, setFormData] = useState({
// 		users_id: deliveryForm.users_id,
// 		users_token: deliveryForm.users_token,
// 		product_id: deliveryForm.product_id,
// 		farmer_id: product.farmer_id,
// 		logistic_id:"",
// 		partner_id: "",
// 		vat: costData.vat,
// 		amt_charge: String(costData.amt_charge),
// 		total_amt: "",
// 		address: deliveryForm.address,
// 		user_full_name: "",
// 		phone: "",
// 		state_id: deliveryForm.state_id,
// 		lga: "",
// 		addr_same_user: "",
// 		delivery_type_id: deliveryForm.delivery_type_id,
//     })
//     console.log(costData,product, quantity, id, deliveryForm)

//     const subtotal = costData.product_amount * quantity
//     const totalAmount = subtotal + Number(costData.vat) + Number(costData.amt_charge)

//     useEffect(() => {
//        const fetchStates = async () => {
//           const statesUrl =
//             process.env.NODE_ENV === "production"
//               ? `https://ourservicestech.com.ng/farmmart_api/v2/select_list_state`
//               : `/farmmart_api/v2/select_list_state`;
    
//           try {
//             const response = await axios.get(statesUrl);
//             const state = (response.data.data);
//             state.map((state) => {
//                 if (state.id == deliveryForm.state_id) {
//                 setState(state.state_name)
//                 }
//             })
//           } catch (error) {
//             console.error("Error fetching states:", error);
//           }
//         };
//         fetchStates();
//     }, []);

//     const handleInputChange =(e) => {
//         const {name, value} = e.target
//         setFormData((prevData) => ({
//             ...prevData,
//             [name]: value
//         }))
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault()

//         const checkoutData  = {
//             ...formData,
//             total_amt: String(totalAmount)
//         }

//         const url = process.env.NODE_ENV === "production"
//         ? `https://ourservicestech.com.ng/farmmart_api/v2/checkout/create_checkout`
//         : `/farmmart_api/v2/checkout/create_checkout`;

//         try {
//             console.log(checkoutData)
//             const response = await axios.post(url, checkoutData)
//             console.log(response.data.data)
//         } catch (error) {
//             console.error("Error submitting checkout data:", error);
//         }
//     }

//     const [paymentSuccessful, setPaymentSuccessful] = useState(false);

//     const handleSuccess = (reference) => {
//         console.log('Payment successful!', reference);
//         setPaymentSuccessful(true);
//         // Perform any other actions like updating order status in your backend
//     };

//     const handleClose = () => {
//         console.log('Payment closed by user.');
//     };



//   return (
//     <div className="">  
//         <MarketNav/>
//         <div className="bg-gray-50 flex justify-center items-center py-8 px-4 md:px-16">
//             <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8">
//                 {/* Left Section - Form */}
//                 <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
//                     <h2 className="text-2xl font-semibold text-[#0B2B17] 0 mb-4">Order Information</h2>
//                     <p className="text-sm text-gray-500 mb-6">
//                         Below are the summary of your order and billing address information. Fill out the form to complete the process.
//                     </p>
//                     <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                         {/* Full Name */}
//                         <div className="sm:col-span-2">
//                             <label className="block text-sm font-medium text-[#0B2B17] ">Full name</label>
//                             <input
//                                 type="text"
//                                 name= 'user_full_name'
//                                 value={formData.user_full_name}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder=""
//                                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                             />
//                         </div>
//                         {/* Phone Number */}
//                         <div className="sm:col-span-2">
//                             <label className="block text-sm font-medium text-[#0B2B17] ">Phone number</label>
//                             <input
//                                 type="tel"
//                                 name= 'phone'
//                                 value={formData.phone}
//                                 onChange={handleInputChange}
//                                 required
//                                 placeholder=""
//                                 className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
//                             />
//                         </div>
//                         {/* Options */}
//                         <div className="sm:col-span-2 flex flex-col gap-2">
//                             <label className="inline-flex items-center">
//                                 <input
//                                 type="checkbox"
//                                 className="form-checkbox text-green-600 border-gray-300 rounded"
//                                 />
//                                 <span className="ml-2 text-[#0b2b17] text-sm ">User address is the same as billing address</span>
//                             </label>
//                             <label className="inline-flex items-center">
//                                 <input
//                                 type="checkbox"
//                                 className="form-checkbox text-green-600 border-gray-300 rounded"
//                                 />
//                                 <span className="ml-2 text-[#0b2b17] text-sm ">Save this information for next time</span>
//                             </label>
//                         </div>
//                         <div>
//                             <h3 className="text-xl font-semibold text-[#0B2B17] 0 mb-2">Address</h3>
//                             <p>
//                                 {`${deliveryForm.address}, ${state} State.`}
//                             </p>
//                         </div>
//                         <div className="w-full flex justify-center mt-8 sm:col-span-2">
//                             <button className="w-full bg-[#0b2b17] text-2xl font-bold text-white py-3 rounded-full shadow hover:bg-green-800 transition">
//                                 Checkout
//                             </button>
//                         </div>
//                     </form>
//                 </div>

//                 {/* Right Section - Order Summary */}
//                 <div>
//                     <div className="bg-white shadow rounded-lg p-6">
//                         <h2 className="text-xl font-semibold text-green-800 mb-4">Your Order</h2>
//                         <h3 className="font-semibold text-green-700 mb-4">{product.product_name}</h3>
//                         <div className="space-y-4 text-sm text-gray-600">
//                             {/* Order Items */}
//                             <div className="flex justify-between">
//                                 <span>Unit Price</span>
//                                 <span>{costData.product_amount}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Quantity</span>
//                                 <span>{quantity}</span>
//                             </div>
//                             <div className="flex justify-between font-semibold text-lg">
//                                 <span>Subtotal</span>
//                                 <span>{subtotal}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>VAT Charges</span>
//                                 <span>{Number(costData.vat)}</span>
//                             </div>
//                             <div className="flex justify-between">
//                                 <span>Other Charges on item</span>
//                                 <span>{costData.amt_charge}</span>
//                             </div>
//                             <hr className="my-4 border-gray-300" />
//                             {/* Total */}
//                             <div className="flex justify-between font-semibold text-xl">
//                                 <span>Total:</span>
//                                 <span>{totalAmount}</span>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div>
//            {paymentSuccessful ? (<p>Payment successful</p>): (
//             <PaystackPayment
//                 amount={100} // Amount in Naira
//                 email="user@example.com"
//                 metadata={{ name: 'John Doe' }}
//                 onSuccess={handleSuccess}
//                 onClose={handleClose}
//             />
//            )}
//         </div>
//         <Footer/>
//     </div>
    
//   );
// };

// export default CheckoutPage;




import React, { useEffect, useState } from "react";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { useLocation } from "react-router-dom";
import PaystackPayment from "./PaystackPayment";
import axios from "axios";

const CheckoutPage = () => {
  const location = useLocation();
  const { product, quantity, id, costData, deliveryForm } = location.state || {};
  const [state, setState] = useState(null);
  const [formData, setFormData] = useState({
    users_id: deliveryForm.users_id,
    users_token: deliveryForm.users_token,
    product_id: deliveryForm.product_id,
    farmer_id: product.farmer_id,
    logistic_id: "",
    partner_id: "",
    vat: costData.vat,
    amt_charge: String(costData.amt_charge),
    total_amt: "",
    address: deliveryForm.address,
    user_full_name: "",
    phone: "",
    state_id: deliveryForm.state_id,
    lga: "",
    addr_same_user: "",
    delivery_type_id: deliveryForm.delivery_type_id,
  });

  const subtotal = costData.product_amount * quantity;
  const totalAmount = subtotal + Number(costData.vat) + Number(costData.amt_charge);

  useEffect(() => {
    const fetchStates = async () => {
      const statesUrl =
        process.env.NODE_ENV === "production"
          ? `https://ourservicestech.com.ng/farmmart_api/v2/select_list_state`
          : `/farmmart_api/v2/select_list_state`;

      try {
        const response = await axios.get(statesUrl);
        const states = response.data.data;
        states.forEach((state) => {
          if (state.id == deliveryForm.state_id) {
            setState(state.state_name);
          }
        });
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const checkoutData = {
      ...formData,
      total_amt: String(totalAmount),
    };

    const url =
      process.env.NODE_ENV === "production"
        ? `https://ourservicestech.com.ng/farmmart_api/v2/checkout/create_checkout`
        : `/farmmart_api/v2/checkout/create_checkout`;

    try {
      console.log("Submitting Checkout Data:", checkoutData);
      const response = await axios.post(url, checkoutData);
      console.log("Checkout Response:", response.data.data);
    } catch (error) {
      console.error("Error submitting checkout data:", error);
    }
  };

  const handleSuccess = (reference) => {
    console.log("Payment successful!", reference);
    handleSubmit(); // Trigger form submission after payment success
  };

  const handleClose = () => {
    console.log("Payment closed by user.");
  };

  return (
    <div className="">
      <MarketNav />
      <div className="bg-gray-50 flex justify-center items-center py-8 px-4 md:px-16">
        <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8">
          {/* Left Section - Form */}
          <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-[#0B2B17] mb-4">Order Information</h2>
            <p className="text-sm text-gray-500 mb-6">
              Below is the summary of your order and billing address information.
            </p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#0B2B17] ">Full name</label>
                <input
                  type="text"
                  name="user_full_name"
                  value={formData.user_full_name}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              {/* Phone Number */}
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-[#0B2B17] ">Phone number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              {/* Address */}
              <div>
                <h3 className="text-xl font-semibold text-[#0B2B17] mb-2">Address</h3>
                <p>{`${deliveryForm.address}, ${state} State.`}</p>
              </div>
              <div className="w-full flex justify-center mt-8 sm:col-span-2">
                <button className="w-full bg-[#0b2b17] text-2xl font-bold text-white py-3 rounded-full shadow hover:bg-green-800 transition">
                  <div className="flex justify-center">
                    <PaystackPayment
                      amount={totalAmount}
                      email="user@example.com"
                      metadata={{ name: formData.user_full_name }}
                      onSuccess={handleSuccess}
                      onClose={handleClose}
                    />
                  </div>
                </button>
              </div>
            </form>
          </div>

          {/* Right Section - Order Summary */}
          <div>
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-semibold text-green-800 mb-4">Your Order</h2>
              <h3 className="font-semibold text-green-700 mb-4">{product.product_name}</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Unit Price</span>
                  <span>{costData.product_amount}</span>
                </div>
                <div className="flex justify-between">
                  <span>Quantity</span>
                  <span>{quantity}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Subtotal</span>
                  <span>{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>VAT Charges</span>
                  <span>{Number(costData.vat)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Other Charges on item</span>
                  <span>{costData.amt_charge}</span>
                </div>
                <hr className="my-4 border-gray-300" />
                <div className="flex justify-between font-semibold text-xl">
                  <span>Total:</span>
                  <span>{totalAmount}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
