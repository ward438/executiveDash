import costsData from "../../../data/costs.json";

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH_DATES = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06'];

const ACCOUNTS = [
    { name: 'Platform Engineering', color: '54, 162, 235' },
    { name: 'Data Analytics',       color: '255, 99, 132' },
    { name: 'Networking',           color: '255, 205, 86' },
    { name: 'DevOps Tooling',       color: '75, 192, 192' },
    { name: 'Security',             color: '153, 102, 255' },
];

const validRows = costsData.filter(
    (row) => row.cost !== null && row.cost > 0 && typeof row.date === 'string' && row.date.length === 10
);

export const trendChartData = {
    labels: MONTHS,
    datasets: ACCOUNTS.map(({ name, color }) => ({
        label: name,
        data: MONTH_DATES.map((month) =>
            validRows
                .filter((row) => row.account_name === name && row.date.startsWith(month))
                .reduce((sum, row) => sum + (row.cost ?? 0), 0)
        ),
        backgroundColor: `rgba(${color}, 0.2)`,
        borderColor: `rgb(${color})`,
        borderWidth: 2,
    })),
};
