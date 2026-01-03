import React from 'react';
import Pagination from './Pagination';

const VehicleTable = () => {
  const vehicles = [
    {
      id: 'KA-01-AB-1234',
      model: 'Tata Ace Gold',
      insurance: { status: 'Expired', date: 'Oct 12, 2023' },
      fitness: { status: 'Valid', date: 'Dec 20, 2024' },
      puc: { status: 'Valid', date: 'Nov 15, 2023' },
      permit: { status: 'Valid', date: 'Aug 05, 2025' },
      tax: { status: 'Valid', date: 'Jan 10, 2024' },
    },
    {
      id: 'MH-12-PQ-9876',
      model: 'Ashok Leyland Dost',
      insurance: { status: 'Valid', date: 'Mar 15, 2024' },
      fitness: { status: 'Expiring Soon', date: 'Nov 05, 2023' },
      puc: { status: 'Valid', date: 'Feb 10, 2024' },
      permit: { status: 'Valid', date: 'Sep 20, 2025' },
      tax: { status: 'Valid', date: 'Apr 12, 2024' },
    },
    {
      id: 'DL-4C-NA-5678',
      model: 'Eicher Pro 2049',
      insurance: { status: 'Valid', date: 'Jul 22, 2024' },
      fitness: { status: 'Valid', date: 'Jun 18, 2025' },
      puc: { status: 'Expired', date: 'Oct 25, 2023' },
      permit: { status: 'Valid', date: 'Dec 01, 2024' },
      tax: { status: 'Valid', date: 'May 15, 2024' },
    },
    {
      id: 'TN-09-BE-4321',
      model: 'Mahindra Bolero',
      insurance: { status: 'Valid', date: 'Jan 10, 2025' },
      fitness: { status: 'Valid', date: 'Feb 28, 2025' },
      puc: { status: 'Valid', date: 'Mar 10, 2024' },
      permit: { status: 'Valid', date: 'Oct 10, 2025' },
      tax: { status: 'Valid', date: 'Nov 22, 2024' },
    },
    {
      id: 'WB-20-XY-1357',
      model: 'Tata 407',
      insurance: { status: 'Valid', date: 'Dec 12, 2024' },
      fitness: { status: 'Valid', date: 'Mar 22, 2025' },
      puc: { status: 'Valid', date: 'Apr 05, 2024' },
      permit: { status: 'Valid', date: 'Jul 19, 2025' },
      tax: { status: 'Valid', date: 'Oct 01, 2024' },
    },
  ];

  const getStatusChip = (status) => {
    switch (status) {
      case 'Expired':
        return 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300';
      case 'Expiring Soon':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300';
      default:
        return 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'Expired':
        return 'text-red-600 font-semibold';
      case 'Expiring Soon':
        return 'text-orange-600 font-semibold';
      default:
        return 'text-slate-500';
    }
  };

  return (
    <div className="bg-white dark:bg-[#111a22] rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col flex-1 min-h-[500px]">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-800">
          <thead className="bg-slate-50 dark:bg-slate-800/50">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Vehicle Info</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Insurance</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Fitness (FC)</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">PUC</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Goods Permit</th>
              <th className="px-6 py-4 text-left text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">MV Tax</th>
              <th className="px-6 py-4 text-right text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-[#111a22] divide-y divide-slate-200 dark:divide-slate-800">
            {vehicles.map((vehicle) => (
              <tr key={vehicle.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                      <span className="material-symbols-outlined text-slate-500">local_shipping</span>
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">{vehicle.id}</div>
                      <div className="text-xs text-slate-500">{vehicle.model}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusChip(vehicle.insurance.status)} mb-1`}>
                    {vehicle.insurance.status}
                  </span>
                  <div className={`text-xs ${getStatusText(vehicle.insurance.status)}`}>{vehicle.insurance.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusChip(vehicle.fitness.status)} mb-1`}>
                    {vehicle.fitness.status}
                  </span>
                  <div className={`text-xs ${getStatusText(vehicle.fitness.status)}`}>{vehicle.fitness.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusChip(vehicle.puc.status)} mb-1`}>
                    {vehicle.puc.status}
                  </span>
                  <div className={`text-xs ${getStatusText(vehicle.puc.status)}`}>{vehicle.puc.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusChip(vehicle.permit.status)} mb-1`}>
                    {vehicle.permit.status}
                  </span>
                  <div className={`text-xs ${getStatusText(vehicle.permit.status)}`}>{vehicle.permit.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusChip(vehicle.tax.status)} mb-1`}>
                    {vehicle.tax.status}
                  </span>
                  <div className={`text-xs ${getStatusText(vehicle.tax.status)}`}>{vehicle.tax.date}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button className="text-slate-400 hover:text-primary transition-colors">
                    <span className="material-symbols-outlined">more_vert</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default VehicleTable;
