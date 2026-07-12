import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";
import { allAccountsChartData } from "./chartData/trendChartData";
import type { CostRecord } from "../../types";

export const TrendChart = ({ selectedAccount }: { selectedAccount: CostRecord | null }) => {
    console.log(allAccountsChartData);
    const chartData = selectedAccount ? {
        labels: [selectedAccount.account_name],
        datasets: [
            { label: 'Cost',   backgroundColor: "rgba(46, 44, 211, 0.7)", data: [selectedAccount.cost] },
            { label: 'Budget', backgroundColor: "rgba(215, 44, 44, 0.7)", data: [selectedAccount.budget] },
        ],
    } : allAccountsChartData;

    return (
        <div className="w-full h-full">
            <Chart type="bar" data={chartData} options={{ ...trendChartConfig.options, maintainAspectRatio: false }} />
        </div>
    );
}