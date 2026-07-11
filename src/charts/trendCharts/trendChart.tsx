import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";

 
export const TrendChart = () => {
    return (
        <Chart type="bar" data={trendChartConfig.data} options={trendChartConfig.options} />        
    );
}