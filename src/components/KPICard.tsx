export const KPICard = ({ label, value, subtitle, red }: { label: string; value: string; subtitle?: string; red?: boolean }) => (
    <div className="bg-white rounded-xl shadow-sm p-5 flex flex-col gap-1 flex-1 min-w-0">
        <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</span>
        <span className={`text-2xl font-bold truncate ${red ? "text-red-500" : "text-gray-800"}`}>{value}</span>
        {subtitle && <span className="text-xs text-gray-400 truncate">{subtitle}</span>}
    </div>
);
