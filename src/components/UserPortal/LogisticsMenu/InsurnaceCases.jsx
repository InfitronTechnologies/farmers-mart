import React, { useState } from 'react';
import { Button } from '@mui/material';
import { Report, Done } from '@mui/icons-material';

const insuranceCasesDummyData = [
  { id: '001', issue: 'Damaged Produce', status: 'Open', date: '2024-09-28', amount: '₦500,000' },
  { id: '002', issue: 'Lost Cargo', status: 'Resolved', date: '2024-09-20', amount: '₦1,200,000' },
  { id: '003', issue: 'Delayed Delivery', status: 'Pending', date: '2024-09-22', amount: '₦200,000' }
];

const InsuranceCases = () => {
  const [cases, setCases] = useState(insuranceCasesDummyData);

  const markAsResolved = (id) => {
    setCases(cases.map(c => c.id === id ? { ...c, status: 'Resolved' } : c));
  };

  return (
    <div className="p-4 bg-white rounded-md shadow">
      <h2 className="text-lg font-bold mb-4">Insurance Cases</h2>

      <div className="overflow-x-auto">
        <table className="table-auto w-full mb-6">
          <thead>
            <tr>
              <th className="text-left p-2">#</th>
              <th className="text-left p-2">Issue</th>
              <th className="text-left p-2">Status</th>
              <th className="text-left p-2">Amount Claimed</th>
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {cases.map((caseItem, index) => (
              <tr key={caseItem.id} className="border-b">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{caseItem.issue}</td>
                <td className={`p-2 ${caseItem.status === 'Resolved' ? 'text-green-500' : 'text-red-500'}`}>{caseItem.status}</td>
                <td className="p-2">{caseItem.amount}</td>
                <td className="p-2">{caseItem.date}</td>
                <td className="p-2">
                  {caseItem.status === 'Open' && (
                    <Button
                      variant="outlined"
                      color="primary"
                      startIcon={<Done />}
                      onClick={() => markAsResolved(caseItem.id)}
                      className="mr-2"
                    >
                      Mark as Resolved
                    </Button>
                  )}
                  {caseItem.status === 'Pending' && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      startIcon={<Report />}
                      className="mr-2"
                    >
                      Investigate
                    </Button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6">
        <Button variant="contained" color="primary" className="w-full">
          File New Insurance Claim
        </Button>
      </div>
    </div>
  );
};

export default InsuranceCases;
