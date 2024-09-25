import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title
} from 'chart.js';

ChartJS.register(
  LineElement, CategoryScale, LinearScale, PointElement, Title
);

const data = {
  labels: ['00:00', '01:00', '02:00', '03:00', '04:00'],
  datasets: [
    {
      label: 'Sales',
      data: [40, 55, 45, 60, 50],
      borderColor: 'blue',
      fill: true,
      backgroundColor: 'rgba(0, 0, 255, 0.2)',
    },
    {
      label: 'Revenue',
      data: [20, 35, 30, 50, 45],
      borderColor: 'green',
      fill: true,
      backgroundColor: 'rgba(0, 255, 0, 0.2)',
    },
    {
      label: 'PickUp',
      data: [10, 20, 15, 25, 30],
      borderColor: 'orange',
      fill: true,
      backgroundColor: 'rgba(255, 165, 0, 0.2)',
    },
  ],
};

function Chart() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full h-full">
      <Line data={data} />
    </div>
  );
}

export default Chart;
