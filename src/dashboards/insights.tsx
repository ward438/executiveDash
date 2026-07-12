import { KPICard } from "../components/cards/KPICard";

export const Insights = () => {
    return (
        <div className="w-full h-full p-6">
            <h1 className="text-2xl font-bold text-center">Insights</h1>
            <div className="flex w-1/4">
                <KPICard
                        label="Owners Over Budget"
                        value="10"
                        subtitle="John Doe, Jane Doe, Jim Doe"
                        red
                    />
            </div>
        </div>
    );
}
