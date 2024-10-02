import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MoneyOffIcon from '@mui/icons-material/MoneyOff';

function Card({ title, amount, icon, percentage, trend }) {
  const icons = {
    shopping_cart: <ShoppingCartIcon fontSize="large" className="text-blue-500" />,
    attach_money: <AttachMoneyIcon fontSize="large" className="text-green-500" />,
    money_off: <MoneyOffIcon fontSize="large" className="text-red-500" />,
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 h-48 flex flex-col justify-between items-center">
      <div className="flex justify-between items-center">
        <h4 className="text-gray-700 font-semibold text-lg">{title}</h4>
        <div className="bg-gray-100 rounded-full p-3">{icons[icon]}</div>
      </div>
      <div className="flex items-end justify-between mt-4">
        <h2 className="text-4xl font-bold">{amount}</h2>
        <p className={`text-lg ${trend === 'increase' ? 'text-green-500' : 'text-red-500'}`}>
          {percentage}% {trend}
        </p>
      </div>
    </div>
  );
}

export default Card;
