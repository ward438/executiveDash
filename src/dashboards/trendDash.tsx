import { TrendChart } from "../charts/trendCharts/trendChart";

export const TrendDash = () => {
    return (
        <div className="w-full h-full p-8">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    <span className="text-center">
                        Trend Dashboard
                    </span>
                </h1>
            </div>
            <TrendChart />
        </div>
    );
}