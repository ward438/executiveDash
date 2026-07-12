import { useState } from "react";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";
import type { DropDownItem } from "../charts/trendCharts/components/trendDropDown";
import { underBudgetItems } from "../charts/trendCharts/chartData/trendChartData";
import { CostBreakdownsTable } from "../components/tables/costBreakdownTable";

export const BudgetAlerts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<DropDownItem | null>(null);
    const [showAll, setShowAll] = useState(true);
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(underBudgetItems.length / itemsPerPage);
    const currentItems = underBudgetItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handleSelectAccount = (account: DropDownItem | null) => {
        setSelectedAccount(account);
        setShowAll(false);
    };

    return (
    <>
        <div className="w-full h-full p-8">
            <h1 className="text-2xl font-bold text-center mb-5">Budget Alerts</h1>
            <div className="flex flex-col border bg-gray-100 rounded-sm p-8 w-3/4 mx-auto">
                <div className="flex flex-col items-center justify-center relative">
                    <TrendDropDown
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        selectedAccount={selectedAccount}
                        setSelectedAccount={handleSelectAccount}
                        items={underBudgetItems}
                        label="Under Budget Accounts"
                        onSelectAll={() => setShowAll(true)}
                        
                    />
                </div>
                {showAll && (
                    <CostBreakdownsTable
                        currentItems={currentItems}
                        page={page}
                        totalPages={totalPages}
                        handlePageChange={setPage}
                    />
                )}
                {!showAll && selectedAccount && (
                    <CostBreakdownsTable
                        currentItems={[selectedAccount]}
                        page={1}
                        totalPages={1}
                        handlePageChange={() => {}}
                    />
                )}
            </div>
        </div>
    </>
    );
}
