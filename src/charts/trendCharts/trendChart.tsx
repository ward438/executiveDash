import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";

export const TrendChart = ({ selectedAccount }: { selectedAccount: { account_name: string; cost: number; budget: number } | null }) => {

    const chartData = selectedAccount ? {
        labels: [selectedAccount.account_name],
        datasets: [
            { label: 'Cost', backgroundColor: "rgba(46, 44, 211, 0.7)", data: [selectedAccount.cost] },
            { label: 'Budget', backgroundColor: "rgba(215, 44, 44, 0.7)", data: [selectedAccount.budget] },
        ],
    } : trendChartConfig.data;
    console.log(chartData.datasets[0].data);
    return (
        <div className="h-full">
            {/* <h1>{chartData.labels}</h1> */}
            <Chart type="bar" data={chartData} options={trendChartConfig.options} />
        </div>
    );
}