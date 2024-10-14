import React, { useState } from 'react';
import { MapPin, Search } from 'lucide-react';
import { TextField, MenuItem, Select as MUISelect, Button as MUIButton, Card as MUICard, CardContent, CardHeader, Typography } from '@mui/material';

const partners = [
  { id: 1, name: 'FarmEquip Co.', services: ['Tractor Rental', 'Harvester Rental'], location: 'Lagos', distance: 5 },
  { id: 2, name: 'GreenGrow Ltd.', services: ['Fertilizer Supply', 'Seed Supply'], location: 'Abuja', distance: 10 },
  { id: 3, name: 'AgriLearn', services: ['Crop Management Training', 'Financial Planning'], location: 'Kano', distance: 15 },
  { id: 4, name: 'SafeCrop Solutions', services: ['Pest Control', 'Disease Management'], location: 'Port Harcourt', distance: 8 },
  { id: 5, name: 'EarthCheck Labs', services: ['Soil Testing', 'Water Quality Analysis'], location: 'Ibadan', distance: 12 },
];

const PartnerCard = ({ partner }) => (
  <MUICard className="mb-4">
    <CardHeader title={partner.name} className="text-lg font-semibold" />
    <CardContent>
      <Typography variant="body2" className="text-gray-600">
        Services: {partner.services.join(', ')}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        Location: {partner.location}
      </Typography>
      <Typography variant="body2" className="text-gray-600">
        Distance: {partner.distance} km
      </Typography>
      <MUIButton variant="contained" color="primary" className="mt-4 w-full">
        Contact Partner
      </MUIButton>
    </CardContent>
  </MUICard>
);

const FarmerPartnerMatching = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const filteredPartners = partners.filter(
    (partner) =>
      (partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        partner.services.some((service) =>
          service.toLowerCase().includes(searchTerm.toLowerCase())
        )) &&
      (selectedService === '' || partner.services.includes(selectedService))
  );

  const allServices = [...new Set(partners.flatMap((partner) => partner.services))];

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Find a Partner</h1>

      <div className="flex mb-6">
        <TextField
          variant="outlined"
          placeholder="Search partners or services"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          fullWidth
          className="mr-2"
        />
        <MUISelect
          value={selectedService}
          onChange={(e) => setSelectedService(e.target.value)}
          displayEmpty
          className="w-[180px] bg-white"
        >
          <MenuItem value="">
            <em>All Services</em>
          </MenuItem>
          {allServices.map((service) => (
            <MenuItem key={service} value={service}>
              {service}
            </MenuItem>
          ))}
        </MUISelect>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPartners.map((partner) => (
          <PartnerCard key={partner.id} partner={partner} />
        ))}
      </div>

      {filteredPartners.length === 0 && (
        <p className="text-center text-gray-600 mt-8">
          No matching partners found. Try adjusting your search criteria.
        </p>
      )}
    </div>
  );
};

export default FarmerPartnerMatching;
