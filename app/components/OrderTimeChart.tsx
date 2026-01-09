"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Afternoon', value: 40, color: '#5A6ACF' }, 
  { name: 'Evening', value: 32, color: '#8593ED' },
  { name: 'Morning', value: 28, color: '#C7CEFF' },
];

const OrderTimeChart = () => {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">Order Time</h2>
          <p className="mt-1 text-xs text-slate-400">From 1-6 Dec, 2020</p>
        </div>
        <button className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-indigo-500 hover:bg-slate-50">
          View Report
        </button>
      </div>

      <div className="relative flex h-64 w-full items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={0}
              dataKey="value"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        
        {/* Floating Card Overlay - Hidden on small mobile */}
        <div className="absolute top-1/2 right-4 md:right-0 translate-y-[-50%] rounded-xl bg-white p-3 md:p-4 text-slate-800 shadow-xl border border-slate-100 hidden sm:block">
            <h4 className="text-[10px] md:text-xs font-semibold text-slate-800">Afternoon</h4>
            <p className="text-[10px] md:text-xs text-slate-400 mb-0.5 md:mb-1">1pm - 4pm</p>
            <p className="text-sm md:text-lg font-bold text-indigo-900">1.890 orders</p>
            <div className="absolute -left-1.5 top-1/2 -mt-1.5 h-3 w-3 -rotate-45 transform bg-white border-l border-t border-slate-100 hidden md:block"></div>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap justify-between gap-4 px-2">
        {data.map((entry) => (
            <div key={entry.name} className="flex flex-col items-center gap-1 min-w-[80px]">
                <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }}></div>
                    <span className="text-[10px] md:text-xs text-slate-500">{entry.name}</span>
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-slate-700">{entry.value}%</span>
            </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTimeChart;