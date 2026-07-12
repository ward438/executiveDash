import { useState } from "react";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";
import type { DropDownItem } from "../charts/trendCharts/components/trendDropDown";
import { underBudgetItems } from "../charts/trendCharts/chartData/trendChartData";

export const BudgetAlerts = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<DropDownItem | null>(null);

    return (
    <>
        <div className="w-full h-full p-8">
            <h1 className="text-2xl font-bold text-center mb-5">Budget Alerts</h1>
            <div className="flex flex-col border bg-gray-100 rounded-sm p-8 w-3/4 mx-auto">
                <div className="flex flex-col items-center justify-center relative">
                    <TrendDropDown
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        selectedAccount={selectedAccount}
                        setSelectedAccount={setSelectedAccount}
                        items={underBudgetItems}
                        label="Under Budget Accounts"
                    />
                </div>
                <div className="grid auto-cols-max grid-flow-col gap-20">
                    <div className="border">01</div>
                    <div>02</div>
                    <div>03</div>
                </div>          
            </div>   
        <div className="border p-8 w-3/4 mx-auto mt-5">
                table      
        </div>   
        </div>
    </>
    );
}
