
import React from 'react';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  Settings, 
  Zap, 
  ChevronLeft, 
  ChevronRight,
  Target,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'Overview', icon: LayoutDashboard },
  { id: 'Performance', icon: BarChart2 },
  { id: 'Team', icon: Users },
  { id: 'Pipeline', icon: Target },
  { id: 'Reports', icon: FileText },
  { id: 'AI Insights', icon: Zap },
  { id: 'Settings', icon: Settings },
];

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar, activeTab, setActiveTab }) => {
  return (
    <aside className={`fixed top-0 left-0 h-full bg-slate-900 border-r border-slate-800 transition-all duration-300 z-50 ${isOpen ? 'w-64' : 'w-20'}`}>
      <div className="p-6 flex items-center justify-between">
        <div className={`flex items-center gap-3 ${!isOpen && 'hidden'}`}>
          <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-teal-500/20">
            <Zap className="w-5 h-5 text-slate-950 fill-current" />
          </div>
          <span className="font-bold text-xl tracking-tight text-white">Lumina</span>
        </div>
        <button 
          onClick={toggleSidebar}
          className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all ml-auto"
        >
          {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
        </button>
      </div>

      <nav className="mt-8 px-4 space-y-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all relative group ${
              activeTab === item.id 
                ? 'bg-teal-500/10 text-teal-400' 
                : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-teal-400' : 'text-slate-400'}`} />
            {isOpen && (
              <span className="font-medium">{item.id}</span>
            )}
            {activeTab === item.id && (
              <motion.div 
                layoutId="activePill"
                className="absolute left-0 w-1 h-6 bg-teal-500 rounded-r-full"
              />
            )}
          </button>
        ))}
      </nav>

      <div className="absolute bottom-8 left-0 w-full px-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 ${!isOpen && 'hidden'}`}>
          <p className="text-xs font-semibold text-teal-400 uppercase tracking-wider mb-2">System Health</p>
          <div className="w-full bg-slate-700 h-1.5 rounded-full overflow-hidden">
            <div className="bg-teal-500 h-full w-[85%]"></div>
          </div>
          <p className="text-[10px] text-slate-500 mt-2">All sensors operational</p>
        </div>
      </div>
    </aside>
  );
};
