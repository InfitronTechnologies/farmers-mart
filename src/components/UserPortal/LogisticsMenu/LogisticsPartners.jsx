import React from 'react';
import { Button } from '@mui/material';
import PartnerIcon from '@mui/icons-material/Group';

const LogisticsPartners = () => {
  const partners = [
    { name: 'TransportCo', available: true },
    { name: 'FastDelivery', available: false },
    // Add more partners
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Logistics Partners</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {partners.map((partner, index) => (
          <div key={index} className="bg-white p-4 shadow rounded-md">
            <h2 className="text-lg font-semibold">{partner.name}</h2>
            <p>Status: {partner.available ? 'Available' : 'Not Available'}</p>
            <Button variant="contained" startIcon={<PartnerIcon />} disabled={!partner.available}>
              Assign to Order
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogisticsPartners;
