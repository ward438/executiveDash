import costsData from "../../../data/costs.json";

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH_DATES = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10', '2026-11', '2026-12'];

const ACCOUNTS = [
    { name: 'Platform Engineering', color: '54, 162, 235' },
    { name: 'Data Analytics',       color: '255, 99, 132' },
    { name: 'Networking',           color: '255, 205, 86' },
    { name: 'DevOps Tooling',       color: '75, 192, 192' },
    { name: 'Security',             color: '153, 102, 255' },
];


export const dateFilteredJson = costsData.map((data: any) => data.cost > data.budget ? {
    date: `${data.date}`,
    cost: `${data.cost}`, 
    budget: `${data.budget}`,
    account_name: `${data.account_name}`,
    service: `${data.service}`,
    region: `${data.region}`,
    owner: `${data.owner}`,
} : null);

// const validRows = costsData.filter(
//     (row) => row.cost !== null && row.cost > 0 && typeof row.date === 'string' && row.date.length === 10
// );

const newValidRows = dateFilteredJson.filter(
    (row) => row != null
    
);

export const totalsByMonth = MONTH_DATES.map((month) => {
    const rows = newValidRows.filter((row) => row.date.startsWith(month));
    return {
        cost: rows.reduce((sum, row) => sum + Number(row.cost ?? 0), 0),
        budget: rows.reduce((sum, row) => sum + Number(row.budget ?? 0), 0),
    };
});

export const trendChartData = {
    labels: MONTHS,
    datasets: ACCOUNTS.flatMap(({ name, color }) => ([
        {
            label: `${name} (Cost)`,
            data: MONTH_DATES.map((month) =>
                newValidRows
                    .filter((row) => row.account_name === name && row.date.startsWith(month))
                    .reduce((sum, row) => sum + Number(row.cost ?? 0), 0)
            ),
            backgroundColor: `rgba(${color}, 0.7)`,
            borderColor: `rgb(${color})`,
            borderWidth: 2,
        },
        {
            label: `${name} (Budget)`,
            data: MONTH_DATES.map((month) =>
                newValidRows
                    .filter((row) => row.account_name === name && row.date.startsWith(month))
                    .reduce((sum, row) => sum + Number(row.budget ?? 0), 0)
            ),
            backgroundColor: `rgba(${color}, 0.2)`,
            borderColor: `rgb(${color})`,
            borderWidth: 2,
        },
    ])),
};
