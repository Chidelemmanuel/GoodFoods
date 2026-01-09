"use client";

import React, { useState } from 'react';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { ArrowDown } from 'lucide-react';

const data = [
  { name: '01', last6Days: 1200, lastWeek: 2400 },
  { name: '02', last6Days: 900, lastWeek: 3100 },
  { name: '03', last6Days: 2200, lastWeek: 1500 },
  { name: '04', last6Days: 1800, lastWeek: 3200 },
  { name: '05', last6Days: 1100, lastWeek: 2100 },
  { name: '06', last6Days: 3100, lastWeek: 2500 },
];

const OrderChart = () => {
  const [activeRange, setActiveRange] = useState<'last6Days' | 'lastWeek'>('last6Days');

  const colors = {
    primary: '#5A6ACF',
    secondary: '#E6E8EC'
  };

  return (
    <div className="w-full p-0">
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-800">Order</h2>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">2.568</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[11px]">
            <span className="flex items-center font-medium text-red-500">
              <ArrowDown size={14} className="mr-0.5" />
              2.1%
            </span>
            <span className="text-slate-400">vs last week</span>
          </div>
          <p className="mt-4 text-[11px] text-slate-400">Sales from 1-6 Dec, 2020</p>
        </div>
        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-indigo-500 hover:bg-slate-50">
          View Report
        </button>
      </div>

      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorArea" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={colors.primary} stopOpacity={0.2}/>
                <stop offset="95%" stopColor={colors.primary} stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
            
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#94a3b8', fontSize: 12 }} 
              dy={10}
            />
            <Tooltip 
                 contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                 cursor={{ stroke: colors.primary, strokeWidth: 1 }}
            />
            
            {/* Area for last Week (Background/Comparison Line) */}
            <Area 
                type="linear" 
                dataKey="lastWeek" 
                stroke="#E2E8F0" 
                fillOpacity={0} 
                strokeWidth={2}
                dot={false}
                animationDuration={500}
            />

            {/* Area for last 6 Days (Active/Primary Line) */}
            <Area 
                type="linear" 
                dataKey="last6Days" 
                stroke={colors.primary} 
                fillOpacity={0.1}
                fill="url(#colorArea)" 
                strokeWidth={2}
                dot={false}
                animationDuration={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-6 flex flex-wrap gap-4 md:gap-8 px-2">
        <button 
          onClick={() => setActiveRange('last6Days')}
          className="flex items-center gap-2 group cursor-pointer outline-none"
        >
          <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center transition-all ${activeRange === 'last6Days' ? 'border-[#5A6ACF]' : 'border-slate-300'}`}>
            {activeRange === 'last6Days' && <div className="h-2 w-2 rounded-full bg-[#5A6ACF]"></div>}
          </div>
          <span className={`text-xs font-semibold transition-colors ${activeRange === 'last6Days' ? 'text-slate-800' : 'text-slate-400'}`}>Last 6 days</span>
        </button>
        <button 
          onClick={() => setActiveRange('lastWeek')}
          className="flex items-center gap-2 group cursor-pointer outline-none"
        >
          <div className={`h-4 w-4 rounded-full border-2 flex items-center justify-center transition-all ${activeRange === 'lastWeek' ? 'border-[#5A6ACF]' : 'border-slate-300'}`}>
            {activeRange === 'lastWeek' && <div className="h-2 w-2 rounded-full bg-[#5A6ACF]"></div>}
          </div>
          <span className={`text-xs font-semibold transition-colors ${activeRange === 'lastWeek' ? 'text-slate-800' : 'text-slate-400'}`}>Last Week</span>
        </button>
      </div>
    </div>
  );
};

export default OrderChart;
