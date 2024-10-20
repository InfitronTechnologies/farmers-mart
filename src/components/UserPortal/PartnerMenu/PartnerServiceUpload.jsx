import React, { useState } from 'react';
import { Card, CardContent, CardHeader, Typography, TextField, MenuItem, Button, Alert } from '@mui/material';
import { Upload, AlertCircle } from "lucide-react";

const PartnerServiceUpload = () => {
  const [serviceName, setServiceName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ serviceName, description, category, price, image });
    setTimeout(() => {
      setSubmitStatus('success');
      setServiceName('');
      setDescription('');
      setCategory('');
      setPrice('');
      setImage(null);
    }, 1000);
  };

  return (
    <Card sx={{ maxWidth: '600px', mx: 'auto', p: 2 }}>
      <CardHeader
        title={<Typography variant="h5">Upload New Service</Typography>}
        subheader="Provide details about the service you'd like to offer to farmers and buyers."
      />
      <CardContent>
        <form onSubmit={handleSubmit} noValidate autoComplete="off" className="space-y-4">
          
          {/* Service Name */}
          <TextField
            label="Service Name"
            variant="outlined"
            fullWidth
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)}
            placeholder="e.g., Tractor Rental"
            required
            sx={{ mb: 2 }}
          />

          {/* Description */}
          <TextField
            label="Description"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Provide a detailed description of your service"
            required
            sx={{ mb: 2 }}
          />

          {/* Category */}
          <TextField
            label="Category"
            variant="outlined"
            fullWidth
            select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            sx={{ mb: 2 }}
          >
            <MenuItem value="equipment">Equipment Rental</MenuItem>
            <MenuItem value="transportation">Transportation</MenuItem>
            <MenuItem value="storage">Storage Solutions</MenuItem>
            <MenuItem value="consultation">Agricultural Consultation</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </TextField>

          {/* Price */}
          <TextField
            label="Price (NGN)"
            variant="outlined"
            fullWidth
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="0.00"
            required
            sx={{ mb: 2 }}
          />

          {/* Image Upload */}
          <div className="flex items-center space-x-2">
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
            <Button
              variant="outlined"
              onClick={() => document.getElementById('image').click()}
              startIcon={<Upload />}
            >
              Upload Image
            </Button>
            {image && <span className="text-sm text-gray-500">{image.name}</span>}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Submit Service for Approval
          </Button>
        </form>

        {/* Success Alert */}
        {submitStatus === 'success' && (
          <Alert severity="success" sx={{ mt: 3, display: 'flex', alignItems: 'center' }}>
            <AlertCircle style={{ marginRight: '8px' }} />
            <div>
              <Typography variant="subtitle1" fontWeight="bold">Success</Typography>
              <Typography>Your service has been submitted for approval. We'll review it shortly.</Typography>
            </div>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
};

export default PartnerServiceUpload;



// import React, { useState } from 'react';
// import { Upload, AlertCircle } from "lucide-react";

// const PartnerServiceUpload = () => {
//   const [serviceName, setServiceName] = useState('');
//   const [description, setDescription] = useState('');
//   const [category, setCategory] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState(null);
//   const [submitStatus, setSubmitStatus] = useState(null);

//   const handleImageChange = (e) => {
//     if (e.target.files[0]) {
//       setImage(e.target.files[0]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ serviceName, description, category, price, image });
//     setTimeout(() => {
//       setSubmitStatus('success');
//       setServiceName('');
//       setDescription('');
//       setCategory('');
//       setPrice('');
//       setImage(null);
//     }, 1000);
//   };

//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
//       <h2 className="text-2xl font-bold mb-2">Upload New Service</h2>
//       <p className="text-gray-600 mb-4">
//         Provide details about the service you'd like to offer to farmers and buyers.
//       </p>

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="serviceName" className="block text-sm font-medium text-gray-700">Service Name</label>
//           <input
//             id="serviceName"
//             value={serviceName}
//             onChange={(e) => setServiceName(e.target.value)}
//             placeholder="e.g., Tractor Rental"
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             id="description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             placeholder="Provide a detailed description of your service"
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
//           <select
//             id="category"
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//           >
//             <option value="">Select a category</option>
//             <option value="equipment">Equipment Rental</option>
//             <option value="transportation">Transportation</option>
//             <option value="storage">Storage Solutions</option>
//             <option value="consultation">Agricultural Consultation</option>
//             <option value="other">Other</option>
//           </select>
//         </div>

//         <div>
//           <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price (NGN)</label>
//           <input
//             id="price"
//             type="number"
//             value={price}
//             onChange={(e) => setPrice(e.target.value)}
//             placeholder="0.00"
//             min="0"
//             step="0.01"
//             required
//             className="w-full mt-1 p-2 border border-gray-300 rounded-md"
//           />
//         </div>
        
//         <div>
//           <label htmlFor="image" className="block text-sm font-medium text-gray-700">Service Image</label>
//           <div className="flex items-center space-x-2">
//             <input
//               id="image"
//               type="file"
//               onChange={handleImageChange}
//               accept="image/*"
//               className="hidden"
//             />
//             <button
//               type="button"
//               onClick={() => document.getElementById('image').click()}
//               className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center"
//             >
//               <Upload className="w-4 h-4 mr-2" />
//               Upload Image
//             </button>
//             {image && <span className="text-sm text-gray-600">{image.name}</span>}
//           </div>
//         </div>
        
//         <button type="submit" className="w-full py-2 bg-blue-600 text-white rounded-md">
//           Submit Service for Approval
//         </button>
//       </form>

//       {submitStatus === 'success' && (
//         <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded-md flex items-center">
//           <AlertCircle className="h-5 w-5 text-green-600 mr-2" />
//           <div>
//             <h3 className="font-semibold">Success</h3>
//             <p>Your service has been submitted for approval. We'll review it shortly.</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PartnerServiceUpload;
