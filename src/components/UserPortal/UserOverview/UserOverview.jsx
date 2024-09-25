import React from 'react';
import Card from './Card';
import Chart from './Chart';

function UserOverview() {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card title="Sales | Today" amount="0" icon="shopping_cart" percentage="12" trend="increase" />
        <Card title="Revenue | This Month" amount="₦0" icon="attach_money" percentage="8" trend="increase" />
        <Card title="Revenue | This Year" amount="₦0" icon="money_off" percentage="12" trend="decrease" />
      </div>
      <Chart/>
    </div>
  );
}

export default UserOverview;
