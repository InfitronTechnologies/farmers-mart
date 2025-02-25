import React from 'react';
import {PaystackButton} from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaystackPayment = ({ amount, email, metadata, onSuccess, onClose }) => {
    const navigate = useNavigate()
    const publicKey = import.meta.env.VITE_PAYSTACK_SECRET_KEY; // Accessing env variable in Vite

    const handlePaystackSuccess = (reference) => {
        if (onSuccess) {
            onSuccess(reference);
            toast.success("Payment successfully made!", { // Display a success toast
                position: "top-right", // Customize position
                autoClose: 2000, 
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            setTimeout(() => {
                navigate("/marketplace")
            }, 2500)
        }
    };

    const handlePaystackClose = () => {
        if (onClose) {
            setTimeout(() => {
                navigate("/marketplace")
            }, 2000)
            onClose();
        }
    };

    const componentProps = {
        email,
        amount: amount * 100,
        metadata,
        publicKey,
        text: "Pay Now",
        onSuccess: handlePaystackSuccess,
        onClose: handlePaystackClose,
    };

    if (!publicKey) {
        return <p>Paystack public key not found. Please set VITE_PAYSTACK_PUBLIC_KEY in your .env file.</p>;
    }

    return (
        <div>
            <PaystackButton {...componentProps} />
        </div>
    );
};

export default PaystackPayment;