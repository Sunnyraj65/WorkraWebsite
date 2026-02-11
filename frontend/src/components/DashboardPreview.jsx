import { dashboardData } from '../data/mock';
import { LayoutDashboard, Users, Heart, Target, GitBranch, Download, ArrowUpRight, ArrowDownRight, ChevronDown } from 'lucide-react';

const sidebarIcons = {
  'layout-dashboard': LayoutDashboard,
  'users': Users,
  'heart': Heart,
  'target': Target,
  'git-branch': GitBranch,
  'download': Download,
};

export const DashboardPreview = () => {
  return (
    <section className="bg-verge-cream py-16 md:py-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Dashboard Mockup */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-zinc-900/10 border border-zinc-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] min-h-[500px]">
            {/* Sidebar */}
            <div className="hidden lg:block border-r border-zinc-100 p-6">
              <h3 className="font-serif text-xl text-zinc-900 mb-8">Vergé</h3>
              <nav className="flex flex-col gap-1">
                {dashboardData.sidebar.map((item, i) => {
                  const Icon = sidebarIcons[item.icon];
                  return (
                    <a
                      key={item.label}
                      href="#"
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        i === 0 ? 'bg-verge-green/5 text-verge-green font-medium' : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50'
                      }`}
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {item.label}
                    </a>
                  );
                })}
              </nav>
              <div className="mt-auto pt-8">
                <div className="bg-verge-green/5 rounded-lg p-3 text-center">
                  <p className="text-xs text-zinc-500">This Week</p>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-6 md:p-8">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Site Visitors */}
                <div className="bg-zinc-50 rounded-xl p-5">
                  <p className="text-zinc-500 text-sm font-medium">Site Visitors</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl md:text-3xl font-serif text-zinc-900">122,589</span>
                    <span className="flex items-center text-verge-accent text-sm font-medium">
                      <ArrowUpRight className="w-3.5 h-3.5" /> 24%
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-2">Compared to last week</p>
                  <a href="#" className="text-zinc-500 text-xs mt-3 inline-flex items-center gap-1 hover:text-zinc-900 transition-colors">
                    View full report <span>&rarr;</span>
                  </a>
                </div>

                {/* Retention Rate Gauge */}
                <div className="bg-zinc-50 rounded-xl p-5 flex flex-col items-center">
                  <p className="text-zinc-500 text-sm font-medium self-start">Retention Rate</p>
                  <div className="relative w-32 h-20 mt-4">
                    <svg viewBox="0 0 120 70" className="w-full h-full">
                      <path
                        d="M 10 65 A 50 50 0 0 1 110 65"
                        fill="none"
                        stroke="#e5e5e5"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 10 65 A 50 50 0 0 1 100 35"
                        fill="none"
                        stroke="#3D7B52"
                        strokeWidth="8"
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 text-2xl font-serif text-zinc-900">84%</span>
                  </div>
                  <a href="#" className="text-zinc-500 text-xs mt-3 inline-flex items-center gap-1 hover:text-zinc-900 transition-colors">
                    View full report <span>&rarr;</span>
                  </a>
                </div>

                {/* Churn Rate */}
                <div className="bg-zinc-50 rounded-xl p-5">
                  <p className="text-zinc-500 text-sm font-medium">Churn Rate</p>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl md:text-3xl font-serif text-zinc-900">3.73%</span>
                    <span className="flex items-center text-rose-500 text-sm font-medium">
                      <ArrowDownRight className="w-3.5 h-3.5" /> 12%
                    </span>
                  </div>
                  <p className="text-zinc-400 text-xs mt-2">Compared to last week</p>
                  <a href="#" className="text-zinc-500 text-xs mt-3 inline-flex items-center gap-1 hover:text-zinc-900 transition-colors">
                    View full report <span>&rarr;</span>
                  </a>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Latest Customers */}
                <div className="bg-zinc-50 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-zinc-900 text-sm font-semibold">Latest Customers</h4>
                    <button className="flex items-center gap-1 text-zinc-400 text-xs">
                      Sort by <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="flex flex-col gap-3">
                    {dashboardData.customers.map((customer) => (
                      <div key={customer.name} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-verge-green/10 flex items-center justify-center text-verge-green text-xs font-semibold">
                          {customer.avatar}
                        </div>
                        <div>
                          <p className="text-zinc-900 text-sm font-medium">{customer.name}</p>
                          <p className="text-zinc-400 text-xs">{customer.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lifetime Value Chart */}
                <div className="bg-zinc-50 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-zinc-900 text-sm font-semibold">Lifetime Value</h4>
                    <button className="flex items-center gap-1 text-zinc-400 text-xs">
                      Export data <Download className="w-3 h-3" />
                    </button>
                  </div>
                  {/* Simple chart visualization */}
                  <div className="h-32 flex items-end gap-1 mt-4">
                    <svg viewBox="0 0 300 100" className="w-full h-full">
                      <defs>
                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3D7B52" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#3D7B52" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 0 80 Q 30 75, 60 70 T 120 55 T 180 40 T 240 50 T 300 30"
                        fill="none"
                        stroke="#3D7B52"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <path
                        d="M 0 80 Q 30 75, 60 70 T 120 55 T 180 40 T 240 50 T 300 30 L 300 100 L 0 100 Z"
                        fill="url(#chartGrad)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
