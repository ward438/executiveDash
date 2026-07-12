export const CostBreakdownsTable = ({ currentItems, page, totalPages, handlePageChange }: {
    currentItems: any[];
    page: number;
    totalPages: number;
    handlePageChange: (page: number) => void;
}) => {
    return (
        <>
            <h1 className="text-2xl font-bold text-center p-8">Cost Breakdowns</h1>
            <div className="flex flex-col items-center justify-center -mt-5">
                <table className="table-auto border">
                    <caption className="caption-top">
                        <p className="text-sm text-gray-500 text-center mb-4">This table shows over budget items.</p>
                    </caption>
                    <thead>
                        <tr className="border">
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
                        {currentItems.map((row, index) => (
                            <tr key={index} className="border">
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
