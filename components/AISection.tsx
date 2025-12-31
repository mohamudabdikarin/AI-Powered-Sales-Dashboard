
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, RefreshCcw, BrainCircuit } from 'lucide-react';
import { getSalesInsights } from '../services/gemini';
import { AIInsights } from '../types';

export const AISection: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [insights, setInsights] = useState<AIInsights | null>(null);

  const fetchInsights = async () => {
    setLoading(true);
    // Mimic sending some context data
    const summary = "Monthly revenue $1.2M, 2800 new leads, conversion 4.2%, active deals volume high in Stark Industries.";
    const result = await getSalesInsights(summary);
    setInsights(result);
    setLoading(false);
  };

  useEffect(() => {
    fetchInsights();
  }, []);

  const leadQuality = insights?.leadQuality || 0;
  const strokeDasharray = 2 * Math.PI * 45;
  const strokeDashoffset = strokeDasharray * ((100 - leadQuality) / 100);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 h-[400px] flex flex-col relative overflow-hidden group"
    >
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 blur-3xl -mr-16 -mt-16 group-hover:bg-teal-500/20 transition-all duration-500"></div>

      <div className="flex items-center justify-between mb-6 relative z-10">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-teal-500/20 text-teal-400">
            <BrainCircuit className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-white">AI Prediction</h3>
        </div>
        <button 
          onClick={fetchInsights}
          disabled={loading}
          className="p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 transition-all"
        >
          <RefreshCcw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10">
        <div className="relative mb-6">
          <svg className="w-32 h-32 -rotate-90">
            <circle
              cx="64"
              cy="64"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              className="text-slate-800"
            />
            <motion.circle
              initial={{ strokeDashoffset: strokeDasharray }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              cx="64"
              cy="64"
              r="45"
              fill="transparent"
              stroke="currentColor"
              strokeWidth="10"
              strokeDasharray={strokeDasharray}
              className="text-teal-500"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white font-mono">{loading ? '--' : `${leadQuality}%`}</span>
            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tight">Lead Quality</span>
          </div>
        </div>

        <div className="text-center px-4">
          <h4 className="text-emerald-400 text-sm font-semibold flex items-center justify-center gap-1 mb-2">
            <Sparkles className="w-3 h-3" /> Predicted Outlook
          </h4>
          <p className="text-sm text-slate-300 line-clamp-2 mb-3">
            {loading ? "Analyzing datasets..." : insights?.prediction}
          </p>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-400 italic">
            {loading ? "Reasoning with neural engine..." : `"${insights?.reasoning}"`}
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-800/50 flex justify-between items-center relative z-10">
        <span className="text-[10px] text-slate-500 font-bold uppercase">Confidence Score</span>
        <span className="text-[10px] text-teal-400 font-bold">94.2%</span>
      </div>
    </motion.div>
  );
};
