import { overBudgetItems } from "../charts/trendCharts/chartData/trendChartData";

export const CostBreakdowns = () => {
    console.log('overBudgetItems: ', overBudgetItems);

    const CostBreakdownsTable = () => {
        return (
            <>
                <h1 className="text-2xl font-bold text-center p-8">Cost Breakdowns</h1>
                <div className="flex flex-col items-center justify-center">
                    <table className="table-auto border">
                        <thead>
                            <tr className="border">
                                <th className="px-4 py-2">Song</th>
                                <th className="px-4 py-2">Artist</th>
                                <th className="px-4 py-2">Year</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border">
                                <td className="px-4 py-2">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                                <td className="px-4 py-2">Malcolm Lockyer</td>
                                <td className="px-4 py-2">1961</td>
                            </tr>
                            <tr className="border">
                                <td className="px-4 py-2">Witchy Woman</td>
                                <td className="px-4 py-2">The Eagles</td>
                                <td className="px-4 py-2">1972</td>
                            </tr>
                            <tr className="border">
                                <td className="px-4 py-2">Shining Star</td>
                                <td className="px-4 py-2">Earth, Wind, and Fire</td>
                                <td className="px-4 py-2">1975</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
        );
    }

    return (
        <CostBreakdownsTable />
    );
}
