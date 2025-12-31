
import React from 'react';
import { DealStatus, Deal } from '../types';
import { MoreHorizontal, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const mockDeals: Deal[] = [
  { id: '1', customer: 'Acme Corp', value: 45000, status: DealStatus.CLOSED, date: 'Oct 24, 2024', representative: 'Alex Rivera' },
  { id: '2', customer: 'Globex Inc', value: 128000, status: DealStatus.PENDING, date: 'Oct 25, 2024', representative: 'Jordan Smith' },
  { id: '3', customer: 'Soylent Corp', value: 32000, status: DealStatus.LOST, date: 'Oct 22, 2024', representative: 'Sarah Jenkins' },
  { id: '4', customer: 'Initech Systems', value: 89000, status: DealStatus.CLOSED, date: 'Oct 26, 2024', representative: 'Alex Rivera' },
  { id: '5', customer: 'Stark Industries', value: 250000, status: DealStatus.PENDING, date: 'Oct 27, 2024', representative: 'Sarah Jenkins' },
];

const getStatusStyles = (status: DealStatus) => {
  switch (status) {
    case DealStatus.CLOSED: return 'bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20';
    case DealStatus.PENDING: return 'bg-amber-500/10 text-amber-400 ring-1 ring-amber-500/20';
    case DealStatus.LOST: return 'bg-rose-500/10 text-rose-400 ring-1 ring-rose-500/20';
    default: return 'bg-slate-500/10 text-slate-400';
  }
};

export const DealsTable: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden"
    >
      <div className="p-6 border-b border-slate-800 flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Top Active Deals</h3>
        <button className="text-teal-400 text-sm font-semibold hover:text-teal-300 transition-colors flex items-center gap-1">
          View all deals <ArrowUpRight className="w-4 h-4" />
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="text-slate-500 text-xs uppercase tracking-wider font-semibold border-b border-slate-800/50">
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Value</th>
              <th className="px-6 py-4">Date</th>
              <th className="px-6 py-4">Representative</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/30">
            {mockDeals.map((deal) => (
              <tr key={deal.id} className="hover:bg-slate-800/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold text-slate-300">
                      {deal.customer.charAt(0)}
                    </div>
                    <span className="font-medium text-slate-200">{deal.customer}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono font-medium text-slate-300">
                  ${deal.value.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-sm text-slate-400">
                  {deal.date}
                </td>
                <td className="px-6 py-4">
                   <div className="flex items-center gap-2">
                     <span className="text-sm text-slate-300">{deal.representative}</span>
                   </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase ${getStatusStyles(deal.status)}`}>
                    {deal.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 rounded hover:bg-slate-800 text-slate-500 hover:text-white transition-all">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};
