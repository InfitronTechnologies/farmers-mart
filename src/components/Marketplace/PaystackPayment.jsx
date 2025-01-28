import React from 'react';
import {PaystackButton} from 'react-paystack';

const PaystackPayment = ({ amount, email, metadata, onSuccess, onClose }) => {
    const publicKey = 'pk_test_9765106bb6b676cf27cb0e7ca666061f5fba7a78'; // Accessing env variable in Vite

    const handlePaystackSuccess = (reference) => {
        console.log(reference);
        if (onSuccess) {
            onSuccess(reference);
        }
    };

    const handlePaystackClose = () => {
        console.log('Payment closed');
        if (onClose) {
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