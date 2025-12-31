
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, defs, linearGradient, stop } from 'recharts';
import { motion } from 'framer-motion';

const data = [
  { month: 'Jan', revenue: 42000, target: 40000 },
  { month: 'Feb', revenue: 58000, target: 45000 },
  { month: 'Mar', revenue: 52000, target: 50000 },
  { month: 'Apr', revenue: 75000, target: 55000 },
  { month: 'May', revenue: 82000, target: 60000 },
  { month: 'Jun', revenue: 95000, target: 65000 },
  { month: 'Jul', revenue: 110000, target: 70000 },
];

export const RevenueChart: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900/40 border border-slate-800 rounded-3xl p-6 h-[400px] flex flex-col"
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-lg font-bold text-white">Revenue Growth</h3>
          <p className="text-sm text-slate-500">Monthly overview vs target trajectory</p>
        </div>
        <div className="flex gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-teal-500"></span>
            <span className="text-xs text-slate-400">Actual</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-slate-700"></span>
            <span className="text-xs text-slate-400">Target</span>
          </div>
        </div>
      </div>

      <div className="flex-1 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#14b8a6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />
            <XAxis 
              dataKey="month" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip 
              contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px' }}
              itemStyle={{ color: '#14b8a6' }}
              cursor={{ stroke: '#14b8a6', strokeWidth: 1 }}
            />
            <Area 
              type="monotone" 
              dataKey="revenue" 
              stroke="#14b8a6" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorRevenue)" 
            />
            <Area 
              type="monotone" 
              dataKey="target" 
              stroke="#475569" 
              strokeWidth={2}
              strokeDasharray="5 5"
              fill="transparent" 
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};
