import AgricultureIcon from '@mui/icons-material/Agriculture'; 
import EggIcon from '@mui/icons-material/Egg';
import StorefrontIcon from '@mui/icons-material/Storefront';
import sample from '../assets/rice.jpg'
import sample2 from '../assets/farm.jpg'
import sample1 from '../assets/farmers.jpeg'
import sample3 from '../assets/logistics.jpeg'

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
    image: 'https://via.placeholder.com/200', // Placeholder image URL
    price: 3.50,
    category: 'Dairy',
  },
  {
    id: 2,
    name: 'Red Apples',
    shortDescription: 'Juicy and sweet red apples.',
    longDescription: 'Our apples are freshly picked and naturally grown without chemicals. They are packed with vitamins and perfect for snacking.',
    image: 'https://via.placeholder.com/200', // Placeholder image URL
    price: 1.20,
    category: 'Fruits',
  },
  {
    id: 3,
    name: 'Carrots',
    shortDescription: 'Fresh organic carrots, rich in beta-carotene.',
    longDescription: 'These organic carrots are perfect for salads, stews, and more. Rich in nutrients and naturally grown without chemicals.',
    image: 'https://via.placeholder.com/200', // Placeholder image URL
    price: 2.00,
    category: 'Vegetables',
  },
  {
    id: 4,
    name: 'Free-Range Eggs',
    shortDescription: 'Organic free-range eggs from healthy chickens.',
    longDescription: 'Our eggs come from chickens that roam freely and are fed a natural diet. They are packed with nutrients and taste amazing.',
    image: 'https://via.placeholder.com/200', // Placeholder image URL
    price: 4.00,
    category: 'Dairy',
  },
  {
    id: 5,
    name: 'Bananas',
    shortDescription: 'Fresh and ripe bananas.',
    longDescription: 'These bananas are sourced directly from local farms. They are sweet, full of energy, and perfect for a quick snack.',
    image: 'https://via.placeholder.com/200', // Placeholder image URL
    price: 0.80,
    category: 'Fruits',
  },
  {
    id: 6,
    name: 'Broccoli',
    shortDescription: 'Fresh organic broccoli.',
    longDescription: 'Rich in vitamins and antioxidants, our broccoli is perfect for a variety of meals. Organically grown with care.',
    image: 'https://via.placeholder.com/200', // Placeholder image URL
    price: 3.00,
    category: 'Vegetables',
  },
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
  Agent: [
    { name: 'agent', label: 'Company Name', type: 'text', required: true },
    { name: 'companyRegNumber', label: 'Company Registration Number', type: 'text', required: true },
  ],
};



// I am tasked with creating the frontend of a farm tech solution called Farmersmart you can check it out at
//  farmersmart.ng, the plan is that the current web app doesn't allow you to choose more than one category
//  ie buyer, farmer, logistics or partners so the new one is to solve that issue. enough with the talk so I 
//  am currently working on the landing page so I was asked to make it similar to something like alibaba.com. 
//  So what you will be doing for me is assisting me in building components using react, tailwind, materialui 
//  for icons and adding responsiveness as well.  So I expect you to use flex when possible instead of grid,

// I will be uploading pictures of what the component you will be building looks like then you figure what sort
//  of functionality they use and add it too. Ensure to make the content farmtech and for images we will be 
//  using farm produce crops and the likes so take that into account. 