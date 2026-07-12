import { useState } from "react";

export const CostBreakdownsTable = ({ currentItems, page, totalPages, handlePageChange, title, caption }: {
    currentItems: any[];
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
    title?: string;
    caption?: string;
}) => {
    const [search, setSearch] = useState("");
    const filteredItems = currentItems.filter((row) =>
        Object.values(row).some((val) => String(val).toLowerCase().includes(search.toLowerCase()))
    );

    const rowStyler = (row: any) => {
        return row.cost > row.budget ? "bg-red-100" : "bg-green-100";
    }
    
    return (
        <>
            {title && <h1 className="text-2xl font-bold text-center p-8">{title}</h1>}
            <div className={`flex flex-col items-center justify-center ${title ? "-mt-5" : "mt-4"}`}>
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
                            <tr key={index} className={`border ${rowStyler(row)}`}>
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
        </>
    );
}
