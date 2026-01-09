"use client";

import React, { useState } from 'react';
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUp } from 'lucide-react';

const data = [
  { name: '01', last6Days: 4200, lastWeek: 2100 },
  { name: '02', last6Days: 3100, lastWeek: 4800 },
  { name: '03', last6Days: 4500, lastWeek: 1800 },
  { name: '04', last6Days: 3200, lastWeek: 4200 },
  { name: '05', last6Days: 5200, lastWeek: 3100 },
  { name: '06', last6Days: 5800, lastWeek: 2200 },
  { name: '07', last6Days: 4800, lastWeek: 2900 },
  { name: '08', last6Days: 3700, lastWeek: 4900 },
  { name: '09', last6Days: 4300, lastWeek: 1700 },
  { name: '10', last6Days: 3100, lastWeek: 4500 },
  { name: '11', last6Days: 5200, lastWeek: 2800 },
  { name: '12', last6Days: 6100, lastWeek: 2100 },
];

const CustomTick = (props: any) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="middle" fill="#94a3b8" fontSize={12}>
        {payload.value}
      </text>
    </g>
  );
};

const RevenueChart = () => {
  const [activeRange, setActiveRange] = useState<'last6Days' | 'lastWeek'>('last6Days');

  const colors = {
    primary: '#5A6ACF',
    secondary: '#E6E8EC'
  };

  return (
    <div className="w-full">
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-800">Revenue</h2>
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-2xl font-bold text-slate-900">IDR 7.852.000</span>
          </div>
          <div className="mt-1 flex items-center gap-1 text-[11px]">
            <span className="flex items-center font-medium text-emerald-500">
              <ArrowUp size={14} className="mr-0.5" />
              2.1%
            </span>
            <span className="text-slate-400">vs last week</span>
          </div>
          <p className="mt-4 text-[11px] text-slate-400">Sales from 1-12 Dec, 2020</p>
        </div>
        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium text-indigo-500 hover:bg-slate-50">
          View Report
        </button>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={8}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={<CustomTick />}
              height={50}
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar 
              dataKey="last6Days" 
              fill={activeRange === 'last6Days' ? colors.primary : colors.secondary} 
              radius={[2, 2, 0, 0]} 
              barSize={6} 
              fillOpacity={1}
              animationDuration={500}
            />
            <Bar 
              dataKey="lastWeek" 
              fill={activeRange === 'lastWeek' ? colors.primary : colors.secondary} 
              radius={[2, 2, 0, 0]} 
              barSize={6} 
              fillOpacity={1}
              animationDuration={500}
            />
          </BarChart>
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

export default RevenueChart;
