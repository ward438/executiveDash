import { useState } from 'react';
import { TrendDash } from '../dashboards/trendDash';
import { CostBreakdowns } from '../dashboards/costBreakdowns';
import { BudgetAlerts } from '../dashboards/budgetAlerts';
import { Insights } from '../dashboards/insights';
import { LogIn } from '../dashboards/logIn';

const navItems = [
    { label: 'Trend Dashboard', component: TrendDash },
    { label: 'Cost Breakdowns', component: CostBreakdowns },
    { label: 'Budget Alerts', component: BudgetAlerts },
    { label: 'Insights', component: Insights },
    { label: 'Log In', component: LogIn },
];

export const MainNavMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [activeLabel, setActiveLabel] = useState('Trend Dashboard');
    const ActiveComponent = navItems.find((item) => item.label === activeLabel)!.component;

    return (
        <div className="flex w-full h-full">
            <div className={`flex flex-col h-screen border-r-2 border-gray-200 pt-4 gap-2 px-4 transition-all ${isOpen ? 'w-56' : 'w-14'} bg-purple-100`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="self-start px-2 py-1 text-sm border rounded cursor-pointer mb-4 bg-yellow-100 text-white"
                    title={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? '✕ Close' : '☰'}
                </button>
                {isOpen && navItems.map(({ label }) => (
                    <button
                        key={label}
                        onClick={() => setActiveLabel(label)}
                        className={`text-left px-3 py-2 rounded cursor-pointer text-creamWhite-100 hover:bg-yellow-100 transition delay-10 duration-300 ease-in-out
                             hover:scale-110`}
                        style={{  }}
                    >
                        {label}
                    </button>
                ))}
            </div>
            {/* <div className="fixed bottom-0 right-0">
                <button>log inkljhkljhjkljkljkl</button>
            </div> */}
            <div className="flex-1 min-w-0">
                <ActiveComponent />
            </div>
        </div>
    );
}
