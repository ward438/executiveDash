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
    const [selectedRow, setSelectedRow] = useState<any>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const filteredItems = currentItems.filter((row) =>
        Object.values(row).some((val) => String(val).toLowerCase().includes(search.toLowerCase()))
    );

    const rowStyler = (row: any) => {
        return row.cost > row.budget ? "bg-red-100" : "bg-green-100";
    }

    const handleRowClick = (row: any) => {
        setSelectedRow(row);
        setIsModalOpen(true);
    }
    console.log(selectedRow);
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-white opacity-100 flex items-center justify-center">
                    <div className="bg-purple-100 p-4 rounded-md w-1/2 h-1/2 border">
                        <button className="cursor-pointer px-3 py-1 border rounded disabled:opacity-40 float-right bg-warning-primary text-creamWhite-100" onClick={() => setIsModalOpen(false)}>Close</button>
                        <div className="flex flex-col items-center justify-center">
                            <h2 className="text-1xl text-white text-center">{selectedRow.account_name}</h2>
                        </div>
                        <div className="grid grid-flow-col grid-rows-3 gap-4">
                        <div className="row-span-3 grid grid-cols-[auto_1fr] gap-x-2 gap-y-3 items-center">
                            <span className="text-sm text-white">Owner:</span>
                            <span className="border border-gray-300 p-1 rounded text-black bg-white">{selectedRow.owner}</span>

                            <span className="text-sm text-white">Service:</span>
                            <span className="border border-gray-300 p-1 rounded text-black bg-white">{selectedRow.service}</span>

                            <span className="text-sm text-white">Region:</span>
                            <span className="border border-gray-300 p-1 rounded text-black bg-white">{selectedRow.region}</span>

                            <span className="text-sm text-white">Cost:</span>
                            <span className="border border-gray-300 p-1 rounded text-black bg-white">{selectedRow.cost}</span>

                            <span className="text-sm text-white">Budget:</span>
                            <span className="border border-gray-300 p-1 rounded text-black bg-white">{selectedRow.budget}</span>
                        </div>
                        <div className="col-span-2 ...">02</div>
                        <div className="col-span-2 row-span-2 ...">03</div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
