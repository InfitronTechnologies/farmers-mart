import React from "react";
import MarketNav from "./MarketNav";
import Footer from "../LandingPage/Footer";
import { useLocation } from "react-router-dom";

const CheckoutPage = () => {
    const location = useLocation();
    const { product, quantity } = location.state || {}; // Safely access state


    const subtotal = product.product_promo_price * quantity

  return (
    <div className="">
        <MarketNav/>
        <div className="bg-gray-50 flex justify-center items-center py-8 px-4 md:px-16">
            <div className="max-w-7xl w-full grid md:grid-cols-3 gap-8">
                {/* Left Section - Form */}
                <div className="md:col-span-2 bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-[#0B2B17] 0 mb-4">Order Information</h2>
                <p className="text-sm text-gray-500 mb-6">
                    Below are the summary of your order and billing address information. Fill out the form to complete the process.
                </p>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* First Name */}
                    <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0B2B17] ">First name</label>
                    <input
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                    </div>
                    {/* Last Name */}
                    <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0B2B17] ">Last name</label>
                    <input
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                    </div>
                    {/* Phone Number */}
                    <div>
                    <label className="block text-sm font-medium text-[#0B2B17] ">Phone number</label>
                    <input
                        type="tel"
                        placeholder=""
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                    </div>
                    {/* Email Address */}
                    <div>
                    <label className="block text-sm font-medium text-[#0B2B17] ">Email address</label>
                    <input
                        type="email"
                        placeholder=""
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                    </div>
                    {/* Address */}
                    <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[#0B2B17] ">Address</label>
                    <input
                        type="text"
                        placeholder=""
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    />
                    </div>
                    {/* State */}
                    <div>
                    <label className="block text-sm font-medium text-[#0B2B17] ">State</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">
                        <option></option>
                        <option>Lagos</option>
                        <option>Abuja</option>
                    </select>
                    </div>
                    {/* Local Government */}
                    <div>
                    <label className="block text-sm font-medium text-[#0B2B17] ">Local government</label>
                    <select className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm">
                        <option></option>
                        <option>Ikoyi</option>
                        <option>Victoria Island</option>
                    </select>
                    </div>
                    {/* Options */}
                    <div className="sm:col-span-2 flex flex-col gap-2">
                        <label className="inline-flex items-center">
                            <input
                            type="checkbox"
                            className="form-checkbox text-green-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-[#0b2b17] text-sm ">User address is the same as billing address</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                            type="checkbox"
                            className="form-checkbox text-green-600 border-gray-300 rounded"
                            />
                            <span className="ml-2 text-[#0b2b17] text-sm ">Save this information for next time</span>
                        </label>
                    </div>
                    <div className="w-full flex justify-center mt-8 sm:col-span-2">
                        <button className="w-full bg-[#0b2b17] text-2xl font-bold text-white py-3 rounded-full shadow hover:bg-green-800 transition">
                            Checkout
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
                            {/* Order Items */}
                            <div className="flex justify-between">
                                <span>Unit Price</span>
                                <span>{product.product_promo_price}</span>
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
                                <span>₦0</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Other Charges on item</span>
                                <span>₦3,000</span>
                            </div>
                            <hr className="my-4 border-gray-300" />
                            {/* Total */}
                            <div className="flex justify-between font-semibold text-xl">
                                <span>Total:</span>
                                <span>₦603,000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
};

export default CheckoutPage;
