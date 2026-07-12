import { useState } from "react";
import summaryData from "../data/summary.json";
import { overBudgetItems, allItems } from "../charts/trendCharts/chartData/trendChartData";
import { TrendChart } from "../charts/trendCharts/trendChart";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";
import type { DropDownItem } from "../charts/trendCharts/components/trendDropDown";
import { CostBreakdownsTable } from "../components/tables/costBreakdownTable";
import { BudgetAlerts } from "./budgetAlerts";
import { Insights } from "./insights";

const totals = (summaryData as any).totals;
const accounts: any[] = (summaryData as any).accounts;

const overBudgetCount = overBudgetItems.length;
const overBudgetOwners = [...new Set(overBudgetItems.map(i => i.owner))];
const worstAccount = [...accounts].sort((a, b) => b.variance - a.variance)[0];
const highRiskAccount = [...accounts].sort((a, b) => b.utilization_pct - a.utilization_pct)[0];

const KPICard = ({ label, value, sub, red }: { label: string; value: string; sub?: string; red?: boolean }) => (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</span>
        <span className={`text-2xl font-bold truncate ${red ? "text-red-500" : "text-gray-800"}`}>{value}</span>
        {sub && <span className="text-xs text-gray-400 truncate">{sub}</span>}
    </div>
);

export const MainDash = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<DropDownItem | null>(null);
    const [page, setPage] = useState(1);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(allItems.length / itemsPerPage);
    const currentItems = allItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    return (
        <div className="w-full h-full overflow-y-auto bg-gray-50 p-6 flex flex-col gap-5">

            {/* Row 1 — KPI Cards */}
            <div className="flex gap-4">
                <KPICard label="Total Cloud Spend" value={`$${Number(totals.total_cost).toLocaleString()}`} />
                <KPICard label="Total Budget" value={`$${Number(totals.total_budget).toLocaleString()}`} />
                <KPICard
                    label="Over Budget Items"
                    value={String(overBudgetCount)}
                    red
                />
                <KPICard
                    label="Owners Over Budget"
                    value={String(overBudgetOwners.length)}
                    sub={overBudgetOwners.join(", ")}
                    red
                />
                <KPICard
                    label="Largest Variance"
                    value={`$${Number(worstAccount?.variance ?? 0).toLocaleString()}`}
                    sub={worstAccount?.account_name}
                    red
                />
                <KPICard
                    label="Highest Risk"
                    value={`${Number(highRiskAccount?.utilization_pct ?? 0).toFixed(1)}%`}
                    sub={highRiskAccount?.account_name}
                    red
                />
            </div>

            {/* Row 2 — Trend Chart */}
            <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col h-[1600px]">
                <div className="flex items-start">
                    <div className="relative">
                        <TrendDropDown
                            isOpen={isOpen}
                            setIsOpen={setIsOpen}
                            selectedAccount={selectedAccount}
                            setSelectedAccount={setSelectedAccount}
                            items={overBudgetItems}
                            label="Over Budget Items"
                        />
                    </div>
                    <div className="flex-1 flex flex-col items-center -mt-1">
                        <span className="font-semibold text-gray-700">Cost vs Budget Trend</span>
                        {selectedAccount && (
                            <>
                                <span className="text-sm mt-1"><strong>{selectedAccount.owner}</strong></span>
                                <span className="text-sm">{selectedAccount.account_name}</span>
                                <span className="text-sm">{selectedAccount.date}</span>
                                <span className="text-sm">Service: {selectedAccount.service} | Region: {selectedAccount.region}</span>
                                <span className="text-sm">Cost: ${selectedAccount.cost} Budget: ${selectedAccount.budget}</span>
                            </>
                        )}
                    </div>
                </div>
                <div className="flex-1 min-h-0">
                    <TrendChart selectedAccount={selectedAccount} />
                </div>
            </div>

            {/* Row 3 — Cost Breakdown | Budget Alerts */}
            <div className="flex gap-4 min-h-[600px]">
                <div className="bg-white rounded-xl shadow-sm overflow-auto flex-1 min-w-0">
                    <CostBreakdownsTable
                        currentItems={currentItems}
                        page={page}
                        totalPages={totalPages}
                        handlePageChange={setPage}
                        title="Cost Breakdown"
                    />
                </div>
                <div className="bg-white rounded-xl shadow-sm overflow-auto flex-1 min-w-0">
                    <BudgetAlerts />
                </div>
            </div>

            {/* Row 4 — Insights */}
            <div className="bg-white rounded-xl shadow-sm overflow-auto">
                <Insights />
            </div>

        </div>
    );
};
