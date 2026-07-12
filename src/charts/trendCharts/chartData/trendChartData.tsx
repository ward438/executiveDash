import costsData from "../../../data/costs.json";

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const MONTH_DATES = ['2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09', '2026-10', '2026-11', '2026-12'];

export const dateFilteredJson = costsData.map((data: any) => data.cost > data.budget ? {
    date: `${data.date}`,
    cost: Number(data.cost),
    budget: Number(data.budget),
    account_name: `${data.account_name}`,
    service: `${data.service}`,
    region: `${data.region}`,
    owner: `${data.owner}`,
} : null);

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
};

export const overBudgetItems = newValidRows as {
    date: string; account_name: string; service: string;
    region: string; owner: string; cost: number; budget: number;
}[];

export const allAccountsChartData = {
    labels: overBudgetItems.map((d) => `${d.account_name} (${d.date})`),
    datasets: [
        { label: 'Cost',   backgroundColor: "rgba(46, 44, 211, 0.7)", data: overBudgetItems.map((dataItem) => dataItem.cost) },
        { label: 'Budget', backgroundColor: "rgba(215, 44, 44, 0.7)", data: overBudgetItems.map((dataItem) => dataItem.budget) },
    ],
};
