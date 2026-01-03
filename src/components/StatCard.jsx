import React from 'react';

const StatCard = ({ title, value, icon, trend, color }) => {
  const colorClasses = {
    blue: {
      bg: 'bg-blue-50 dark:bg-blue-900/20',
      text: 'text-primary',
      trend: 'text-green-600',
    },
    red: {
      bg: 'bg-red-50 dark:bg-red-900/20',
      text: 'text-red-600',
      trend: 'text-red-600',
      border: 'border-red-200 dark:border-red-900/30',
      highlight: 'bg-red-500',
    },
    orange: {
      bg: 'bg-orange-50 dark:bg-orange-900/20',
      text: 'text-orange-500',
      trend: 'text-orange-600',
      border: 'border-orange-200 dark:border-orange-900/30',
      highlight: 'bg-orange-500',
    },
    green: {
      bg: 'bg-green-50 dark:bg-green-900/20',
      text: 'text-green-600',
      trend: 'text-slate-500',
    },
  };

  const classes = colorClasses[color] || colorClasses.blue;

  return (
    <div className={`bg-white dark:bg-[#111a22] rounded-xl p-5 border ${classes.border || 'border-slate-200 dark:border-slate-800'} shadow-sm flex flex-col justify-between h-32 relative overflow-hidden group`}>
      {classes.highlight && <div className={`absolute right-0 top-0 h-full w-1 ${classes.highlight}`}></div>}
      <div className="flex justify-between items-start z-10">
        <div>
          <p className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-1">{title}</p>
          <p className={`text-3xl font-bold ${classes.text}`}>{value}</p>
        </div>
        <div className={`h-10 w-10 rounded-full ${classes.bg} flex items-center justify-center ${classes.text}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
      <div className={`flex items-center gap-1 text-xs font-medium mt-auto z-10 ${classes.trend}`}>
        {color === 'blue' && <span className="material-symbols-outlined text-[16px]">trending_up</span>}
        <span>{trend}</span>
      </div>
    </div>
  );
};

export default StatCard;
