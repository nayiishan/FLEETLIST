import React from 'react';
import Header from './Header';
import StatCard from './StatCard';
import FilterControls from './FilterControls';
import VehicleTable from './VehicleTable';

const Dashboard = () => {
  return (
    <main className="flex-1 flex flex-col h-full overflow-hidden bg-background-light dark:bg-background-dark">
      <Header />
      <div className="flex-1 overflow-y-auto p-6">
        <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard title="Total Fleet" value="50" icon="directions_bus" trend="+2 new this month" color="blue" />
            <StatCard title="Critical Alerts" value="3" icon="warning" trend="Requires immediate action" color="red" />
            <StatCard title="Expiring Soon" value="5" icon="schedule" trend="< 30 days remaining" color="orange" />
            <StatCard title="Fully Compliant" value="42" icon="verified" trend="84% of fleet healthy" color="green" />
          </div>
          <FilterControls />
          <VehicleTable />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
