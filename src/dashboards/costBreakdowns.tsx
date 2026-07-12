import { overBudgetItems } from "../charts/trendCharts/chartData/trendChartData";

export const CostBreakdowns = () => {
    
    const CostBreakdownsTable = ({ overBudgetItems }: { overBudgetItems: any[] }) => {
        return (
            <>
                <h1 className="text-2xl font-bold text-center p-8">Cost Breakdowns</h1>
                <div className="flex flex-col items-center justify-center">
                    <table className="table-auto border">
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
                            {overBudgetItems.map((row, index) => (
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
            </>
        );
    }

    return (
        <CostBreakdownsTable overBudgetItems={overBudgetItems}/>
    );
}
