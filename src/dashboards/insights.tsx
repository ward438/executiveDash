import { KPICard } from "../components/cards/KPICard";

export const Insights = () => {
    return (
        <div className="w-full h-full p-8">
            <h1 className="text-2xl font-bold text-center border border-red-500">Insights</h1>
            <KPICard
                    label="Owners Over Budget"
                    value="10"
                    subtitle="John Doe, Jane Doe, Jim Doe"
                    red
                />
        </div>
    );
}
