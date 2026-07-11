import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";

export const TrendChart = () => {
    return (
        <div className="w-full h-full">
            <Chart type="bar" data={trendChartConfig.data} options={trendChartConfig.options} />
        </div>
    );
}