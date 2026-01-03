import React from 'react';

const FilterControls = () => {
  return (
    <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-[#111a22] p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
      <div className="w-full md:w-96">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition duration-150 ease-in-out" placeholder="Search license plate (e.g. KA-01-AB-1234)" type="text" />
        </div>
      </div>
      <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition whitespace-nowrap">
          <span className="material-symbols-outlined text-[18px]">filter_list</span>
          All Status
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 rounded-lg text-sm font-medium hover:bg-red-100 dark:hover:bg-red-900/30 transition whitespace-nowrap">
          Critical (3)
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800 rounded-lg text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/30 transition whitespace-nowrap">
          Expiring Soon (5)
        </button>
      </div>
    </div>
  );
};

export default FilterControls;
