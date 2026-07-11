import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";

 
export const TrendChartOverlayed = () => {
    return (
        <div className="border-1 border-red-500">
            <Chart type="bar" data={trendChartConfig.data} options={trendChartConfig.options} />        
        </div>
    );
}