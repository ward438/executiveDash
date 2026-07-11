import { trendChartData } from "../chartData/trendChartData";

export const trendChartConfig = {
    type: 'bar',
    data: trendChartData,
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
};