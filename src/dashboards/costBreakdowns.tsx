import { allItems } from "../charts/trendCharts/chartData/trendChartData";
import { useState } from "react";
import { CostBreakdownsTable } from "../components/tables/costBreakdownTable";

export const CostBreakdowns = () => {
    const [page, setPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(allItems.length / itemsPerPage);
    const handlePageChange = (page: number) => setPage(page);

    const startIndex = (page - 1) * itemsPerPage;
    const currentItems = allItems.slice(startIndex, startIndex + itemsPerPage);

    return (<>
        <CostBreakdownsTable
            currentItems={currentItems}
            page={page}
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            title="Cost Breakdowns"
            caption="This table shows over budget items."
        />    
        <h1 className="text-2xl font-bold text-center p-8">ToDo: sort options</h1>
    </>
        
    );
}
