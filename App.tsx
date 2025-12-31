
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

        {/* Content based on active tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'Overview' && (
              <>
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
              </>
            )}

            {activeTab === 'Performance' && (
              <div className="space-y-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Performance Analytics</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <StatCard 
                      label="Monthly Growth" 
                      value="18.5%" 
                      change={5.2} 
                      icon={<TrendingUp className="w-5 h-5 text-emerald-400" />} 
                      delay={0.1}
                    />
                    <StatCard 
                      label="Avg Deal Size" 
                      value="$8,240" 
                      change={12.1} 
                      icon={<DollarSign className="w-5 h-5 text-emerald-400" />} 
                      delay={0.2}
                    />
                    <StatCard 
                      label="Close Rate" 
                      value="32.4%" 
                      change={-2.1} 
                      icon={<Briefcase className="w-5 h-5 text-emerald-400" />} 
                      delay={0.3}
                    />
                  </div>
                  <RevenueChart />
                </div>
              </div>
            )}

            {activeTab === 'Team' && (
              <div className="space-y-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Team Performance</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    <StatCard 
                      label="Team Members" 
                      value="24" 
                      change={8.3} 
                      icon={<Users className="w-5 h-5 text-blue-400" />} 
                      delay={0.1}
                    />
                    <StatCard 
                      label="Top Performer" 
                      value="Sarah J." 
                      change={0} 
                      icon={<TrendingUp className="w-5 h-5 text-blue-400" />} 
                      delay={0.2}
                    />
                    <StatCard 
                      label="Avg Performance" 
                      value="87%" 
                      change={4.2} 
                      icon={<Briefcase className="w-5 h-5 text-blue-400" />} 
                      delay={0.3}
                    />
                    <StatCard 
                      label="Team Revenue" 
                      value="$2.1M" 
                      change={15.8} 
                      icon={<DollarSign className="w-5 h-5 text-blue-400" />} 
                      delay={0.4}
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Pipeline' && (
              <div className="space-y-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Sales Pipeline</h2>
                  <DealsTable />
                </div>
              </div>
            )}

            {activeTab === 'Reports' && (
              <div className="space-y-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Reports & Analytics</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-300">Revenue Reports</h3>
                      <RevenueChart />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-300">Key Metrics</h3>
                      <div className="grid grid-cols-1 gap-4">
                        <StatCard 
                          label="YTD Revenue" 
                          value="$15.2M" 
                          change={22.5} 
                          icon={<DollarSign className="w-5 h-5 text-purple-400" />} 
                          delay={0.1}
                        />
                        <StatCard 
                          label="Quarterly Growth" 
                          value="28.3%" 
                          change={6.7} 
                          icon={<TrendingUp className="w-5 h-5 text-purple-400" />} 
                          delay={0.2}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'AI Insights' && (
              <div className="space-y-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">AI-Powered Insights</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <AISection />
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-slate-300">Predictive Analytics</h3>
                      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6">
                        <p className="text-slate-400 text-sm mb-4">AI Recommendations</p>
                        <ul className="space-y-3 text-sm">
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-teal-500 rounded-full mt-2"></div>
                            <span className="text-slate-300">Focus on Enterprise deals - 40% higher close rate</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                            <span className="text-slate-300">Increase follow-up frequency by 25%</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                            <span className="text-slate-300">Target tech sector - trending upward</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'Settings' && (
              <div className="space-y-8">
                <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-300 mb-4">Profile Settings</h3>
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Display Name</label>
                            <input 
                              type="text" 
                              value="Sarah Jenkins"
                              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-teal-500"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-400 mb-2">Email</label>
                            <input 
                              type="email" 
                              value="sarah.jenkins@lumina.com"
                              className="w-full bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-teal-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-300 mb-4">Preferences</h3>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Email Notifications</span>
                            <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                            </button>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-400">Dark Mode</span>
                            <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                              <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};

export default App;
