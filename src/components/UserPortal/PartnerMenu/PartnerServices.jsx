import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import { Card as MUICard, CardContent, CardHeader, Typography, Button as MUIButton, TextField } from '@mui/material';

const services = [
  { id: 1, name: 'Tractor Rental', provider: 'FarmEquip Co.', price: '₦5,000/day', rating: 4.5 },
  { id: 2, name: 'Fertilizer Supply', provider: 'GreenGrow Ltd.', price: '₦2,000/bag', rating: 4.2 },
  { id: 3, name: 'Crop Management Training', provider: 'AgriLearn', price: '₦10,000/session', rating: 4.8 },
  { id: 4, name: 'Pest Control Service', provider: 'SafeCrop Solutions', price: '₦3,000/acre', rating: 4.3 },
  { id: 5, name: 'Soil Testing', provider: 'EarthCheck Labs', price: '₦1,500/sample', rating: 4.6 },
];

const ServiceCard = ({ service }) => (
  <MUICard className="mb-4">
    <CardHeader title={service.name} className="text-lg font-semibold" />
    <CardContent>
      <Typography variant="body2" className="text-gray-600">Provider: {service.provider}</Typography>
      <Typography variant="body2" className="text-gray-600">Price: {service.price}</Typography>
      <div className="flex items-center mt-2">
        <span className="text-yellow-500 mr-1">★</span>
        <span>{service.rating.toFixed(1)}</span>
      </div>
      <MUIButton variant="contained" color="primary" className="mt-4 w-full">Book Service</MUIButton>
    </CardContent>
  </MUICard>
);

const PartnerServices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredServices = services.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    service.provider.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Service Listings</h1>
      <div className="flex mb-6">
        <TextField
          variant="outlined"
          placeholder="Search services or providers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          className="mr-2"
        />
        <MUIButton variant="outlined" startIcon={<Filter />}>
          Filter
        </MUIButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PartnerServices;
