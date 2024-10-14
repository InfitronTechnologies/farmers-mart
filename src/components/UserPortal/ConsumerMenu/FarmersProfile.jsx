import React, { useState } from 'react';
import { Search, Star, MapPin } from 'lucide-react';

const farmers = [
  { id: 1, name: 'Aliyu Sani', location: 'Lagos', rating: 4.5, specialty: ['Vegetables', 'Fruits'], image: '/api/placeholder/100/100' },
  { id: 2, name: 'Jimoh Rufai', location: 'Abuja', rating: 4.8, specialty: ['Poultry', 'Dairy'], image: '/api/placeholder/100/100' },
  { id: 3, name: 'Kenneth Obi', location: 'Kano', rating: 4.2, specialty: ['Grains', 'Vegetables'], image: '/api/placeholder/100/100' },
  { id: 4, name: 'Garba Audu', location: 'Port Harcourt', rating: 4.7, specialty: ['Fruits', 'Herbs'], image: '/api/placeholder/100/100' },
];

const FarmerCard = ({ farmer }) => (
  <div className="border p-4 rounded-lg shadow-md w-full">
    <div className="flex items-center space-x-4 mb-4">
      {/* Avatar with Tailwind */}
      <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
        {farmer.image ? (
          <img src={farmer.image} alt='' className="w-full h-full object-cover" />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            {farmer.name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{farmer.name}</h2>
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-1" />
          {farmer.location}
        </div>
      </div>
    </div>
    <div className="flex items-center mb-2">
      <Star className="h-4 w-4 text-yellow-400 mr-1" />
      <span className="font-semibold">{farmer.rating.toFixed(1)}</span>
    </div>
    <div className="flex flex-wrap gap-2 mb-4">
      {farmer.specialty.map(spec => (
        <span key={spec} className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">
          {spec}
        </span>
      ))}
    </div>
    <button className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500">View Profile</button>
  </div>
);

const FarmerProfiles = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFarmers = farmers.filter(farmer =>
    farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    farmer.specialty.some(spec => spec.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Farmer Profiles</h1>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search farmers by name, location, or specialty"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredFarmers.map(farmer => (
          <FarmerCard key={farmer.id} farmer={farmer} />
        ))}
      </div>

      {filteredFarmers.length === 0 && (
        <p className="text-center text-gray-600 mt-8">No farmers found. Try adjusting your search.</p>
      )}
    </div>
  );
};

export default FarmerProfiles;
