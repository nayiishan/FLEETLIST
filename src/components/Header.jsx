import React from 'react';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-[#111a22] border-b border-slate-200 dark:border-slate-800 flex-shrink-0">
      <div>
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Fleet Dashboard</h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="text-slate-500 dark:text-slate-400 text-sm">
          Last updated: <span className="font-medium text-slate-900 dark:text-white">Today, 10:30 AM</span>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
          <span className="material-symbols-outlined text-[20px]">download</span>
          Export Report
        </button>
      </div>
    </header>
  );
};

export default Header;
