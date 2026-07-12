import costsData from "../../../data/costs.json";

const MONTH_DATES = [...new Set(
    (costsData as any[])
        .map((entry) => entry.date.slice(0, 7))
        .filter((yearMonth) => /^\d{4}-\d{2}$/.test(yearMonth))
)].sort().slice(-6);
const MONTH_LABELS: Record<string, string> = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' };
const MONTHS = MONTH_DATES.map((yearMonth) => MONTH_LABELS[yearMonth.slice(5, 7)]);

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

export const allItems = (costsData as any[]).map((data) => ({
    date: String(data.date),
    account_name: String(data.account_name),
    account_id: String(data.account_id),
    service: String(data.service),
    region: String(data.region),
    owner: String(data.owner),
    cost: Number(data.cost),
    budget: Number(data.budget),
}));

export const underBudgetItems = (costsData as any[])
    .filter((data) => data.cost <= data.budget)
    .map((data) => ({
        date: String(data.date),
        account_name: String(data.account_name),
        account_id: String(data.account_id),
        service: String(data.service),
        region: String(data.region),
        owner: String(data.owner),
        cost: Number(data.cost),
        budget: Number(data.budget),
    }));

export const allAccountsChartData = {
    labels: overBudgetItems.map((item) => `${item.account_name} (${item.date})`),
    datasets: [
        { label: 'Cost',   backgroundColor: "rgba(46, 44, 211, 0.7)", data: overBudgetItems.map((dataItem) => dataItem.cost) },
        { label: 'Budget', backgroundColor: "rgba(215, 44, 44, 0.7)", data: overBudgetItems.map((dataItem) => dataItem.budget) },
    ],
};
