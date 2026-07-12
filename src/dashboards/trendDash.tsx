import { TrendChart } from "../charts/trendCharts/trendChart";
import { useState } from "react";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";

export const TrendDash = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<string | null>(null);

    return (
        <div className="w-full h-full p-8">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold">
                    <span className="text-center">
                        Trend Dashboard
                    </span>
                </h1>
            </div>
            <div className="-mt-12">
                <TrendDropDown isOpen={isOpen} setIsOpen={setIsOpen} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
            </div>
            <TrendChart />
        </div>
    );
}