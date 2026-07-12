import { trendChartData, totalsByMonth } from "../chartData/trendChartData";

export const trendChartConfig = {  
    type: 'bar',
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: { stacked: true },
            y: {
                stacked: true,
                beginAtZero: true
            }
        }
    },
    data: {
        labels: trendChartData.labels,
        datasets: [
            {
                label: 'Cost',
                backgroundColor: "rgba(46, 44, 211, 0.7)",
                data: totalsByMonth.map((m) => m.cost),
            },
            {
                label: 'Budget',
                backgroundColor: "rgba(215, 44, 44, 0.7)",
                data: totalsByMonth.map((m) => m.budget),
            }
        ]
    }
};