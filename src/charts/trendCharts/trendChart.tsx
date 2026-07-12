import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";


export const TrendChart = ({ selectedAccount }: { selectedAccount: { account_name: string; cost: number; budget: number } | null }) => {
    return (
        <div className="h-full">
            <Chart type="bar" data={trendChartConfig.data} options={trendChartConfig.options} />
        </div>
    );
}