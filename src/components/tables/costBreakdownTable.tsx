import { useState } from "react";
import { BudgetAlertModal } from "../modals/BudgetAlertModal";
import { filterTableRows, rowStyler } from "./tableUtils";

export const CostBreakdownsTable = ({ currentItems, page, totalPages, handlePageChange, title, caption, onSave }: {
    currentItems: any[];
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    title?: string;
    caption?: string;
    onSave?: (alert: any) => void;
}) => {
    const [search, setSearch] = useState("");
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredItems = filterTableRows(currentItems, search);

    const handleRowClick = (row: any) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    };

    return (
        <>
            {title && <h1 className="text-2xl font-bold text-center p-8">{title}</h1>}
            <div className={`flex flex-col items-center justify-center ${title ? "-mt-5" : "mt-4"}`}>
                <input
                    className="placeholder:text-gray-500 placeholder:italic border mb-2 px-2 py-1 w-full max-w-sm"
                    placeholder="Search table..."
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <table className="table-auto border">
                    {caption && (
                        <caption className="caption-top">
                            <p className="text-sm text-gray-500 text-center mb-2">{caption}</p>
                        </caption>
                    )}
                    <thead>
                        <tr className="border bg-gray-100">
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Account</th>
                            <th className="px-4 py-2">Service</th>
                            <th className="px-4 py-2">Region</th>
                            <th className="px-4 py-2">Owner</th>
                            <th className="px-4 py-2">Cost</th>
                            <th className="px-4 py-2">Budget</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map((row, index) => (
                            <tr key={index} className={`cursor-pointer border ${rowStyler(row)}`} onClick={() => handleRowClick(row)}>
                                <td className="px-4 py-2">{row.date}</td>
                                <td className="px-4 py-2">{row.account_name}</td>
                                <td className="px-4 py-2">{row.service}</td>
                                <td className="px-4 py-2">{row.region}</td>
                                <td className="px-4 py-2">{row.owner}</td>
                                <td className="px-4 py-2">{row.cost}</td>
                                <td className="px-4 py-2">{row.budget}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
                <button
                    className="px-3 py-1 border rounded disabled:opacity-40"
                    onClick={() => handlePageChange(page - 1)}
                    disabled={page === 1}
                >&#8249;</button>
                <span>{page} / {totalPages}</span>
                <button
                    className="px-3 py-1 border rounded disabled:opacity-40"
                    onClick={() => handlePageChange(page + 1)}
                    disabled={page === totalPages}
                >&#8250;</button>
            </div>
            {isModalOpen && selectedRow && (
                <BudgetAlertModal row={selectedRow} onClose={() => setIsModalOpen(false)} onSave={onSave} />
            )}
        </>
    );
};
