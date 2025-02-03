import React from 'react';
import {PaystackButton} from 'react-paystack';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PaystackPayment = ({ amount, email, metadata, onSuccess, onClose }) => {
    const navigate = useNavigate()
    const publicKey = 'pk_test_9765106bb6b676cf27cb0e7ca666061f5fba7a78'; // Accessing env variable in Vite

    const handlePaystackSuccess = (reference) => {
        console.log(reference);
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
        console.log('Payment closed');
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