// import React from 'react';
// import { Line } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   LineElement,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   Title
// } from 'chart.js';

// ChartJS.register(
//   LineElement, CategoryScale, LinearScale, PointElement, Title
// );

// const data = {
//   labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
//   datasets: [
//     {
//       label: 'Sales',
//       data: [40, 55, 45, 60, 50],
//       borderColor: 'blue',
//       fill: true,
//       backgroundColor: 'rgba(0, 0, 255, 0.2)',
//     },
//     {
//       label: 'Revenue',
//       data: [20, 35, 30, 50, 45],
//       borderColor: 'green',
//       fill: true,
//       backgroundColor: 'rgba(0, 255, 0, 0.2)',
//     },
//     {
//       label: 'PickUp',
//       data: [10, 20, 15, 25, 30],
//       borderColor: 'orange',
//       fill: true,
//       backgroundColor: 'rgba(255, 165, 0, 0.2)',
//     },
//   ],
// };

// function Chart() {
//   return (
//     <div className="bg-white shadow-md rounded-lg p-6 w-full h-full">
//       <Line data={data} />
//     </div>
//   );
// }

// export default Chart;


import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Registering chart components
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

// Chart data (kept the same as the one you provided)
const data = {
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
  datasets: [
    {
      label: 'Sales',
      data: [40, 55, 45, 60, 50],
      borderColor: '#4f46e5', // Tailwind Indigo-600 for a cleaner look
      fill: true,
      backgroundColor: 'rgba(79, 70, 229, 0.2)', // Soft indigo for background
      pointBorderColor: '#4f46e5',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#4f46e5',
      pointHoverBorderColor: '#fff',
    },
    {
      label: 'Revenue',
      data: [20, 35, 30, 50, 45],
      borderColor: '#10b981', // Tailwind Green-500
      fill: true,
      backgroundColor: 'rgba(16, 185, 129, 0.2)', // Soft green background
      pointBorderColor: '#10b981',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#10b981',
      pointHoverBorderColor: '#fff',
    },
    {
      label: 'PickUp',
      data: [10, 20, 15, 25, 30],
      borderColor: '#f97316', // Tailwind Orange-500
      fill: true,
      backgroundColor: 'rgba(249, 115, 22, 0.2)', // Soft orange background
      pointBorderColor: '#f97316',
      pointBackgroundColor: '#fff',
      pointHoverBackgroundColor: '#f97316',
      pointHoverBorderColor: '#fff',
    },
  ],
};

// Options for a cleaner and more polished appearance
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    title: {
      display: true,
      text: 'Sales, Revenue, and Pickup Overview',
      color: '#374151', // Tailwind Gray-700
      font: {
        size: 16,
        weight: 'bold',
      },
      padding: { top: 20, bottom: 20 },
    },
    legend: {
      display: true,
      position: 'top',
      labels: {
        color: '#374151', // Tailwind Gray-700
        font: {
          size: 12,
        },
      },
    },
    tooltip: {
      enabled: true,
      backgroundColor: '#111827', // Tailwind Gray-900
      titleColor: '#fff',
      bodyColor: '#fff',
      borderColor: '#e5e7eb', // Tailwind Gray-200 for borders
      borderWidth: 1,
    },
  },
  scales: {
    x: {
      ticks: {
        color: '#374151', // Tailwind Gray-700 for axis labels
        font: {
          size: 12,
        },
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        color: '#374151',
        font: {
          size: 12,
        },
      },
      grid: {
        color: '#e5e7eb', // Tailwind Gray-200 for gridlines
      },
    },
  },
};

function Chart() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full h-96">
      <Line data={data} options={options} />
    </div>
  );
}

export default Chart;
