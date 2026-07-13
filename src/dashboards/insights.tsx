import { KPICard } from "../components/cards/KPICard";
import { overBudgetItems } from "../charts/trendCharts/chartData/trendChartData";

const serviceList = overBudgetItems
    .map((item) => item.service)
    .filter((service) => service != null && service !== "");
// using the record as a lookup table to count the number of times each service appears
const serviceCounts: Record<string, number> = {};
for (const service of serviceList) {
    serviceCounts[service] = (serviceCounts[service] ?? 0) + 1;
}

let topService = "";
let topQty = 0;
for (const [service, qty] of Object.entries(serviceCounts)) {
    if (qty > topQty) {
        topService = service;
        topQty = qty;
    }
}

export const Insights = () => {
    return (
        <div className="w-full h-full p-6">
            <h1 className="text-2xl font-bold text-center">Insights</h1>
            <div className="flex w-1/4 gap-4">
                <KPICard
                    description={`Service: ${topService}`}
                    label="Top service driving overspend"
                    value={`Qty: ${topQty}`}
                    red
                />
                <KPICard
                    description={
                        <div className="grid grid-cols-2 gap-1">
                            {Object.entries(serviceCounts).map(([service, qty]) => (
                                <div key={service}>{service}: {qty}</div>
                            ))}
                        </div>
                    }
                    label="Providers over budget"
                    value={`${Object.keys(serviceCounts).length}`}
                    red
                />
        </div>
    </div>
);
}