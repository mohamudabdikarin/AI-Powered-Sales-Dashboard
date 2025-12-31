
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, change, icon, delay = 0 }) => {
  const isPositive = change >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800 hover:border-slate-700/50 transition-all group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 rounded-2xl bg-slate-800 text-teal-400 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
          {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {Math.abs(change)}%
        </div>
      </div>
      <div>
        <p className="text-sm text-slate-500 font-medium mb-1 uppercase tracking-wider">{label}</p>
        <h3 className="text-2xl font-bold text-white font-mono">{value}</h3>
      </div>
    </motion.div>
  );
};
