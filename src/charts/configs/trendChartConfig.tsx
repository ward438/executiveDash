import { trendChartData } from "../trendCharts/chartData/trendChartData";

export const trendChartConfig = {
    type: 'bar',
    data: trendChartData,
    options: {
        scales: {
        y: {
            beginAtZero: true
        }
        }
    }
};