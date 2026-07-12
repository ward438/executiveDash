import { useState, useEffect } from "react";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";
import type { DropDownItem } from "../charts/trendCharts/components/trendDropDown";
import { underBudgetItems } from "../charts/trendCharts/chartData/trendChartData";
import { CostBreakdownsTable } from "../components/tables/costBreakdownTable";
import { alternatingRowStyle } from "../components/tables/tableUtils";

export const BudgetAlerts = ({ wide }: { wide?: boolean }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<DropDownItem | null>(null);
    const [showAll, setShowAll] = useState(true);
    const [page, setPage] = useState(1);
    const [createdAlerts, setCreatedAlerts] = useState<any[]>(() => {
        try {
            return JSON.parse(localStorage.getItem("createdAlerts") ?? "[]");
        } catch {
            return [];
        }
    });

    const itemsPerPage = 20;
    const totalPages = Math.ceil(underBudgetItems.length / itemsPerPage);
    const currentItems = underBudgetItems.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    useEffect(() => {
        localStorage.setItem("createdAlerts", JSON.stringify(createdAlerts));
    }, [createdAlerts]);

    const handleSelectAccount = (account: DropDownItem | null) => {
        setSelectedAccount(account);
        setShowAll(false);
    };

    const handleSaveAlert = (alert: any) => {
        setCreatedAlerts((prev) => [...prev, alert]);
    };

    const handleDeleteAlert = (index: number) => {
        setCreatedAlerts((prev) => prev.filter((_, i) => i !== index));
    };

    return (
    <>
        <div className="w-full h-full p-8 overflow-y-auto">
            <h1 className="text-2xl font-bold text-center mb-5">Budget Alerts</h1>
            <div className={`flex flex-col border bg-gray-100 rounded-sm p-8 mx-auto gap-6 ${wide ? "w-full" : "w-3/4"}`}>
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
                        onSave={handleSaveAlert}
                    />
                )}
                {!showAll && selectedAccount && (
                    <CostBreakdownsTable
                        currentItems={[selectedAccount]}
                        page={1}
                        totalPages={1}
                        handlePageChange={() => {}}
                        onSave={handleSaveAlert}
                    />
                )}

                {createdAlerts.length > 0 && (
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Created Alerts</h2>
                        <div className="max-h-48 overflow-y-auto">
                        <table className="table-auto border w-full">
                            <thead>
                                <tr className="border bg-gray-200 sticky top-0">
                                    <th className="px-4 py-2">Date</th>
                                    <th className="px-4 py-2">Account</th>
                                    <th className="px-4 py-2">Service</th>
                                    <th className="px-4 py-2">Region</th>
                                    <th className="px-4 py-2">Owner</th>
                                    <th className="px-4 py-2">Cost</th>
                                    <th className="px-4 py-2">Budget</th>
                                    <th className="px-4 py-2">Threshold</th>
                                    <th className="px-4 py-2">Description</th>
                                    <th className="px-4 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {createdAlerts.map((alert, index) => (
                                    <tr key={index} className={`border text-sm ${alternatingRowStyle(index)}`}>
                                        <td className="px-4 py-2">{alert.date}</td>
                                        <td className="px-4 py-2">{alert.account_name}</td>
                                        <td className="px-4 py-2">{alert.service}</td>
                                        <td className="px-4 py-2">{alert.region}</td>
                                        <td className="px-4 py-2">{alert.owner}</td>
                                        <td className="px-4 py-2">${alert.cost?.toLocaleString()}</td>
                                        <td className="px-4 py-2">${alert.budget?.toLocaleString()}</td>
                                        <td className="px-4 py-2">{alert.threshold}</td>
                                        <td className="px-4 py-2">{alert.description}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                onClick={() => handleDeleteAlert(index)}
                                                className="text-red-500 hover:text-red-700 text-xs font-semibold cursor-pointer"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>
    );
}
