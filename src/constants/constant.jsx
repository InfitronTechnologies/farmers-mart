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



// I am tasked with creating the frontend of a farm tech solution called Farmersmart you can check it out at
//  farmersmart.ng, the plan is that the current web app doesn't allow you to choose more than one category
//  ie buyer, farmer, logistics or partners so the new one is to solve that issue. enough with the talk so I 
//  am currently working on the landing page so I was asked to make it similar to something like alibaba.com. 
//  So what you will be doing for me is assisting me in building components using react, tailwind, materialui 
//  for icons and adding responsiveness as well.  So I expect you to use flex when possible instead of grid,

// I will be uploading pictures of what the component you will be building looks like then you figure what sort
//  of functionality they use and add it too. Ensure to make the content farmtech and for images we will be 
//  using farm produce crops and the likes so take that into account. 