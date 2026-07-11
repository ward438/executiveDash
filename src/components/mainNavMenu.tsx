import { useState } from 'react';
import { TrendDash } from '../dashboards/trendDash';
import { CostBreakdowns } from '../dashboards/costBreakdowns';
import { BudgetAlerts } from '../dashboards/budgetAlerts';
import { Insights } from '../dashboards/insights';
import { LogOut } from '../dashboards/logOut';

const navItems = [
    { label: 'Trend Dashboard', component: TrendDash },
    { label: 'Cost Breakdowns', component: CostBreakdowns },
    { label: 'Budget Alerts', component: BudgetAlerts },
    { label: 'Insights', component: Insights },
];

export const MainNavMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeLabel, setActiveLabel] = useState('Trend Dashboard');
    const ActiveComponent = navItems.find((item) => item.label === activeLabel)!.component;

    return (
        <div className="flex w-full h-full">
            <div className={`flex flex-col h-screen border-r-2 border-gray-200 pt-4 gap-2 px-4 transition-all ${isOpen ? 'w-56' : 'w-14'} bg-purple-100`}>
                <div className={`flex ${isOpen ? 'justify-start' : 'justify-center'}`}>   
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="self-start px-2 py-1 text-sm border rounded cursor-pointer mb-4 bg-warning-primary text-white hover:bg-yellow-100"
                        title={isOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isOpen ? '✕ Close' : '☰'}
                    </button>
                </div>
                {isOpen && navItems.map(({ label }) => (
                    <button
                        key={label}
                        onClick={() => setActiveLabel(label)}
                        className={`text-left px-3 py-2 rounded cursor-pointer text-creamWhite-100 hover:bg-yellow-100
                             hover:scale-110`}>
                        {label}
                    </button>
                ))}
            </div>            
            <div className="flex-1 min-w-0">
                <ActiveComponent />
                <div className={`fixed bottom-0 left-0 flex justify-center pb-4 ${isOpen ? 'w-55' : 'w-12.75'} `}>
                    <button 
                        className="px-2 py-.5 text-sm border rounded cursor-pointer bg-warning-primary text-creamWhite-100 hover:bg-yellow-100"
                        title={"Log Out"}
                        onClick={() => setActiveLabel('Log Out')}>
                            <LogOut isOpen={isOpen} />
                    </button>
                </div>
        </div>
    </div>
  );
};
