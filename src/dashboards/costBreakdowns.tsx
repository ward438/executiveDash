import { overBudgetItems } from "../charts/trendCharts/chartData/trendChartData";
import { useState } from "react";
import { CostBreakdownsTable } from "../charts/costBreakDownCharts/costBreakdownTable";

export const CostBreakdowns = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(overBudgetItems.length / itemsPerPage);
    const handlePageChange = (page: number) => setPage(page);

    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = overBudgetItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <CostBreakdownsTable
            currentItems={currentItems}
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
        />
    );
}
