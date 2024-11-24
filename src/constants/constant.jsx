import AgricultureIcon from '@mui/icons-material/Agriculture'; 
import EggIcon from '@mui/icons-material/Egg';
import StorefrontIcon from '@mui/icons-material/Storefront';
import sample from '../assets/rice.jpg'
import sample2 from '../assets/farm.jpg'
import sample1 from '../assets/farmers.jpeg'
import sample3 from '../assets/logistics.jpeg'
import brocolli from '../assets/broccoli.png'
import tomatoes from '../assets/tomato.jpg'
import rice from '../assets/ricebag.png'

export const farmcategories = [
    { name: 'Agriculture', icon: <AgricultureIcon /> },
    { name: 'Marketplace', icon: <StorefrontIcon /> },  
    { name: 'Egg', icon: <EggIcon/> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
    { name: 'Egg', icon: <EggIcon/> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
    { name: 'Egg', icon: <EggIcon/> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
    { name: 'Egg', icon: <EggIcon/> }, 
    { name: 'Farming', icon: <AgricultureIcon /> }, 
    { name: 'Produce', icon: <StorefrontIcon /> }, 
];


export const fromFarms = [
    {
      imageSrc: sample, // Replace with your image paths
      title: 'Get samples',
      ctaText: 'View more',
    },
    {
      imageSrc: sample1,
      title: 'Take farm live tours',
      ctaText: 'View LIVE',
    },
    {
      imageSrc: sample2,
      title: 'Connect with top-ranking farmers',
      ctaText: 'View more',
    },
    {
      imageSrc: sample3,
      title: 'Logistics Partners',
      ctaText: 'View more',
    },
]


export const CustomerOperations = [
  { 
    id: 1, 
    title: 'Research Farmer', 
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm' 
  },
  { 
    id: 2, 
    title: 'Select Produce', 
    videoSrc: 'https://youtube.com/shorts/0OnXenA98kE?si=fPc3F7g_Q372LxlR' 
  },
  { 
    id: 3, 
    title: 'Checkout', 
    videoSrc: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4' 
  },
  { 
    id: 4, 
    title: 'Produce Delivery', 
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm' },
];


export const FarmersOperations = [
  { 
    id: 1, 
    title: 'Upload Produce', 
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm' 
  },
  { 
    id: 2, 
    title: 'Engage Consumer', 
    videoSrc: 'https://youtube.com/shorts/0OnXenA98kE?si=fPc3F7g_Q372LxlR' 
  },
  { 
    id: 3, 
    title: 'Make Sales', 
    videoSrc: 'http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_30fps_normal.mp4' 
  },
  { 
    id: 4, 
    title: 'Produce Delivery', 
    videoSrc: 'https://www.w3schools.com/html/mov_bbb.webm' },
];


export const dummyProducts = [
  {
    id: 1,
    name: 'Fresh Milk',
    shortDescription: 'Organic fresh milk from local farms.',
    longDescription: 'This is fresh, organic milk sourced from our local farms. It’s processed with utmost care to ensure the best quality and freshness.',
    image: brocolli, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 25000,
    category: 'Dairy',
  },
  {
    id: 2,
    name: 'Red Apples',
    shortDescription: 'Juicy and sweet red apples.',
    longDescription: 'Our apples are freshly picked and naturally grown without chemicals. They are packed with vitamins and perfect for snacking.',
    image: tomatoes, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 1.20,
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Carrots',
    shortDescription: 'Fresh organic carrots, rich in beta-carotene.',
    longDescription: 'These organic carrots are perfect for salads, stews, and more. Rich in nutrients and naturally grown without chemicals.',
    image: rice, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 2.00,
    category: 'Vegetables',
  },
  {
    id: 4,
    name: 'Free-Range Eggs',
    shortDescription: 'Organic free-range eggs from healthy chickens.',
    longDescription: 'Our eggs come from chickens that roam freely and are fed a natural diet. They are packed with nutrients and taste amazing.',
    image: brocolli, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 4.00,
    category: 'Dairy',
  },
  {
    id: 5,
    name: 'Bananas',
    shortDescription: 'Fresh and ripe bananas.',
    longDescription: 'These bananas are sourced directly from local farms. They are sweet, full of energy, and perfect for a quick snack.',
    image: tomatoes, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 0.80,
    category: 'Fruits',
  },
  {
    id: 6,
    name: 'Broccoli',
    shortDescription: 'Fresh organic broccoli.',
    longDescription: 'Rich in vitamins and antioxidants, our broccoli is perfect for a variety of meals. Organically grown with care.',
    image: rice, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 3.00,
    category: 'Vegetables',
  },
  {
    id: 7,
    name: 'Free-Range Eggs',
    shortDescription: 'Organic free-range eggs from healthy chickens.',
    longDescription: 'Our eggs come from chickens that roam freely and are fed a natural diet. They are packed with nutrients and taste amazing.',
    image: brocolli, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 4.00,
    category: 'Dairy',
  },
  {
    id: 8,
    name: 'Bananas',
    shortDescription: 'Fresh and ripe bananas.',
    longDescription: 'These bananas are sourced directly from local farms. They are sweet, full of energy, and perfect for a quick snack.',
    image: tomatoes, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 0.80,
    category: 'Fruits',
  },
  {
    id: 9,
    name: 'Broccoli',
    shortDescription: 'Fresh organic broccoli.',
    longDescription: 'Rich in vitamins and antioxidants, our broccoli is perfect for a variety of meals. Organically grown with care.',
    image: rice, // Placeholder image URL
    slideImages: [brocolli, tomatoes, rice],
    price: 3.00,
    category: 'Vegetables',
  }
  // Add more products as needed
];

export const kycConfig = {
  Farmer: [
    { name: 'farmer', label: 'Farm Name', type: 'text', required: true },
    { name: 'farmSize', label: 'Farm Size (in acres)', type: 'number', required: true },
    { name: 'cropType', label: 'Type of Crops', type: 'text', required: true },
  ],
  Buyer: [
    { name: 'buyer', label: 'Business Name', type: 'text', required: true },
    { name: 'businessAddress', label: 'Business Address', type: 'text', required: true },
  ],
  Logistics: [
    { name: 'logistics', label: 'Vehicle Type', type: 'text', required: true },
    { name: 'licenseNumber', label: 'License Number', type: 'text', required: true },
  ],
  Partner: [
    { name: 'partner', label: 'Company Name', type: 'text', required: true },
    { name: 'companyRegNumber', label: 'Company Registration Number', type: 'text', required: true },
  ],
};

export const nigerianStates = [
  { id: '001', state: 'Abia' },
  { id: '002', state: 'Adamawa' },
  { id: '003', state: 'Akwa Ibom' },
  { id: '004', state: 'Anambra' },
  { id: '005', state: 'Bauchi' },
  { id: '006', state: 'Bayelsa' },
  { id: '007', state: 'Benue' },
  { id: '008', state: 'Borno' },
  { id: '009', state: 'Cross River' },
  { id: '010', state: 'Delta' },
  { id: '011', state: 'Ebonyi' },
  { id: '012', state: 'Edo' },
  { id: '013', state: 'Ekiti' },
  { id: '014', state: 'Enugu' },
  { id: '015', state: 'Gombe' },
  { id: '016', state: 'Imo' },
  { id: '017', state: 'Jigawa' },
  { id: '018', state: 'Kaduna' },
  { id: '019', state: 'Kano' },
  { id: '020', state: 'Katsina' },
  { id: '021', state: 'Kebbi' },
  { id: '022', state: 'Kogi' },
  { id: '023', state: 'Kwara' },
  { id: '024', state: 'Lagos' },
  { id: '025', state: 'Nasarawa' },
  { id: '026', state: 'Niger' },
  { id: '027', state: 'Ogun' },
  { id: '028', state: 'Ondo' },
  { id: '029', state: 'Osun' },
  { id: '030', state: 'Oyo' },
  { id: '031', state: 'Plateau' },
  { id: '032', state: 'Rivers' },
  { id: '033', state: 'Sokoto' },
  { id: '034', state: 'Taraba' },
  { id: '035', state: 'Yobe' },
  { id: '036', state: 'Zamfara' },
  { id: '037', state: 'FCT - Abuja' }
];

