import React from 'react';

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 border-r border-slate-200 bg-white dark:bg-[#111a22] dark:border-slate-800 flex flex-col justify-between">
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col px-2">
          <h1 className="text-slate-900 dark:text-white text-lg font-bold leading-normal flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">local_shipping</span>
            Fleet Manager
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-xs font-normal leading-normal mt-1">Admin Console</p>
        </div>
        <nav className="flex flex-col gap-2 mt-4">
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary" href="#">
            <span className="material-symbols-outlined fill-1">dashboard</span>
            <p className="text-sm font-semibold leading-normal">Dashboard</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" href="#">
            <span className="material-symbols-outlined">directions_car</span>
            <p className="text-sm font-medium leading-normal">All Vehicles</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" href="#">
            <span className="material-symbols-outlined">group</span>
            <p className="text-sm font-medium leading-normal">Drivers</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" href="#">
            <span className="material-symbols-outlined">description</span>
            <p className="text-sm font-medium leading-normal">Reports</p>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <p className="text-sm font-medium leading-normal">Settings</p>
          </a>
        </nav>
      </div>
      <div className="p-4 border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 font-bold">
            JD
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-white">John Doe</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">Fleet Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
