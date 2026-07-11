import { useState } from 'react';
import { TrendDash } from '../dashboards/trendDash';
import { CostBreakdowns } from '../dashboards/costBreakdowns';
import { BudgetAlerts } from '../dashboards/budgetAlerts';
import { Insights } from '../dashboards/insights';

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
            <div className={`flex flex-col h-screen border-r-2 border-gray-200 pt-4 gap-2 px-4 transition-all ${isOpen ? 'w-56' : 'w-14'}`}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="self-start px-2 py-1 text-sm border rounded cursor-pointer mb-4"
                    title={isOpen ? 'Close menu' : 'Open menu'}
                >
                    {isOpen ? '✕ Close' : '☰'}
                </button>
                {isOpen && navItems.map(({ label }) => (
                    <button
                        key={label}
                        onClick={() => setActiveLabel(label)}
                        className={`text-left px-3 py-2 rounded cursor-pointer ${activeLabel === label ? 'bg-blue-100 text-blue-700 font-semibold' : 'text-gray-600 hover:bg-gray-100'}`}
                    >
                        {label}
                    </button>
                ))}
            </div>
            <div className="flex-1 min-w-0">
                <ActiveComponent />
            </div>
        </div>
    );
}
