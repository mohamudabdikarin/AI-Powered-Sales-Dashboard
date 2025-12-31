
import React, { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { RevenueChart } from './components/RevenueChart';
import { DealsTable } from './components/DealsTable';
import { AISection } from './components/AISection';
import { DollarSign, Users, TrendingUp, Briefcase, Bell, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-slate-950 text-slate-200">
      {/* Sidebar Component */}
      <Sidebar 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Content Area */}
      <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-20'} p-8`}>
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <h1 className="text-3xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
              {activeTab} Dashboard
            </h1>
            <p className="text-slate-500 text-sm mt-1">Welcome back, Sarah. Here's what's happening today.</p>
          </motion.div>

          <div className="flex items-center gap-6">
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-hover:text-teal-400 transition-colors" />
              <input 
                type="text" 
                placeholder="Search analytics..."
                className="bg-slate-900/50 border border-slate-800 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/20 transition-all w-64"
              />
            </div>
            <button className="relative p-2 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors">
              <Bell className="w-5 h-5 text-slate-400" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-teal-500 rounded-full animate-pulse border-2 border-slate-950"></span>
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-slate-800">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center font-bold text-slate-950 text-sm">
                SJ
              </div>
              <div className="hidden lg:block">
                <p className="text-sm font-semibold">Sarah Jenkins</p>
                <p className="text-xs text-slate-500">Sales Director</p>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
          <StatCard 
            label="Total Revenue" 
            value="$1,284,500" 
            change={12.5} 
            icon={<DollarSign className="w-5 h-5 text-teal-400" />} 
            delay={0.1}
          />
          <StatCard 
            label="New Leads" 
            value="2,842" 
            change={8.2} 
            icon={<Users className="w-5 h-5 text-teal-400" />} 
            delay={0.2}
          />
          <StatCard 
            label="Conversion Rate" 
            value="4.2%" 
            change={-1.5} 
            icon={<TrendingUp className="w-5 h-5 text-teal-400" />} 
            delay={0.3}
          />
          <StatCard 
            label="Active Deals" 
            value="156" 
            change={24.8} 
            icon={<Briefcase className="w-5 h-5 text-teal-400" />} 
            delay={0.4}
          />
        </section>

        {/* Chart and AI Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <AISection />
          </div>
        </div>

        {/* Bottom Table Section */}
        <section className="mb-8">
          <DealsTable />
        </section>
      </main>
    </div>
  );
};

export default App;
