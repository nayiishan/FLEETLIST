import React from 'react';

const Pagination = () => {
  return (
    <div className="bg-white dark:bg-[#111a22] px-4 py-3 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between sm:px-6">
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Showing
            <span className="font-medium"> 1 </span>
            to
            <span className="font-medium"> 5 </span>
            of
            <span className="font-medium"> 50 </span>
            results
          </p>
        </div>
        <div>
          <nav aria-label="Pagination" className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111a22] text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="sr-only">Previous</span>
              <span className="material-symbols-outlined text-[18px]">chevron_left</span>
            </a>
            <a href="#" aria-current="page" className="z-10 bg-blue-50 dark:bg-blue-900/20 border-primary text-primary relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              1
            </a>
            <a href="#" className="bg-white dark:bg-[#111a22] border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 relative inline-flex items-center px-4 py-2 border text-sm font-medium">
              2
            </a>
            <a href="#" className="bg-white dark:bg-[#111a22] border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111a22] text-sm font-medium text-slate-700">
              ...
            </span>
            <a href="#" className="bg-white dark:bg-[#111a22] border-slate-300 dark:border-slate-700 text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium">
              10
            </a>
            <a href="#" className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#111a22] text-sm font-medium text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="sr-only">Next</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
