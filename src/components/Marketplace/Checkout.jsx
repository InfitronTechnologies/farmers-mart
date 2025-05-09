import React, { useEffect, useState } from "react";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { useLocation } from "react-router-dom";
import PaystackPayment from './PaystackPayment';
import {useProfile} from '../ProfileContext/ProfileContext'
import axios from "axios";

const CheckoutPage = () => {
    const location = useLocation();
    const initialState = location.state || JSON.parse(sessionStorage.getItem("checkoutState"));
    const { product, quantity, id, costData, deliveryForm } = initialState || {};
    const [state, setState] = useState(null);
    const {userEmail} = useProfile() 

    const [formData, setFormData] = useState({
        users_id: deliveryForm?.users_id,
        users_token: deliveryForm?.users_token,
        product_id: deliveryForm?.product_id,
        farmer_id: product?.farmer_id,
        logistic_id: "",
        partner_id: "",
        units: quantity,
        vat: costData?.vat,
        amt_charge: String(costData?.amt_charge),
        total_amt: "",
        address: deliveryForm?.address,
        user_full_name: "",
        phone: "",
        state_id: deliveryForm?.state_id,
        lga: "",
        addr_same_user: "",
        delivery_type_id: deliveryForm?.delivery_type_id,
    });

    const [formValid, setFormValid] = useState(false);

    const subtotal = costData?.product_amount * quantity;
    const totalAmount = subtotal + Number(costData?.vat) + Number(costData?.amt_charge);

    // Store state in sessionStorage
    useEffect(() => {
        if (location.state) {
            sessionStorage.setItem("checkoutState", JSON.stringify(location.state));
        }
    }, [location.state]);

    useEffect(() => {
        const fetchStates = async () => {
            const statesUrl = `${import.meta.env.VITE_API_BASE_URL}/select_list_state`

            try {
                const response = await axios.get(statesUrl);
                const state = response.data.data;
                state.forEach((state) => {
                    if (state.id === deliveryForm?.state_id) {
                        setState(state.state_name);
                    }
                });
            } catch (error) {
                console.error("Error fetching states:", error);
            }
        };
        if (deliveryForm?.state_id) {
            fetchStates();
        }
    }, [deliveryForm]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Validate the form whenever `formData` changes
    useEffect(() => {
        const isValid = formData.user_full_name.trim() !== "" && formData.phone.trim() !== "";
        setFormValid(isValid);
    }, [formData]);

    const handleSuccess = async (reference) => {
        // Proceed to submit form data to backend
        const checkoutData = {
            ...formData,
            total_amt: String(totalAmount),
        };

        const url = `${import.meta.env.VITE_API_BASE_URL}/checkout/create_checkout`

        try {
            const response = await axios.post(url, checkoutData);
        } catch (error) {
            console.error("Error submitting checkout data:", error);
        }
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
                            Below are the summary of your order and billing address information. Fill out the form to
                            complete the process.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Full Name */}
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium text-[#0B2B17] ">Full name</label>
                                <input
                                    type="text"
                                    name="user_full_name"
                                    value={formData.user_full_name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Enter your full name"
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
                                    placeholder="Enter your phone number"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[#0B2B17] mb-2">Address</h3>
                                <p>{`${deliveryForm?.address}, ${state} State.`}</p>
                            </div>
                        </div>
                        {/* Payment Button */}
                        <div>
                            {formValid ? (
                                <div className ="w-full bg-[#0b2b17] text-xl font-bold text-white py-3 rounded-full shadow hover:bg-green-800 transition text-center mt-4">
                                    <PaystackPayment
                                    amount={totalAmount}
                                    email={userEmail}
                                    metadata={{ name: formData.user_full_name }}
                                    onSuccess={handleSuccess}
                                    onClose={handleClose}
                                    />
                                </div>
                            ) : (
                                <button
                                    disabled
                                    className="w-full mt-4 bg-gray-400 text-white py-3 px-6 rounded-full shadow cursor-not-allowed"
                                >
                                    Fill in your details to pay
                                </button>
                            )}
                        </div>
                    </div>

                    {/* Right Section - Order Summary */}
                    <div>
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-green-800 mb-4">Your Order</h2>
                            <h3 className="font-semibold text-green-700 mb-4">{product?.product_name}</h3>
                            <div className="space-y-4 text-sm text-gray-600">
                                <div className="flex justify-between">
                                    <span>Unit Price</span>
                                    <span>{costData?.product_amount}</span>
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
                                    <span>{Number(costData?.vat)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Other Charges on item</span>
                                    <span>{costData?.amt_charge}</span>
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
