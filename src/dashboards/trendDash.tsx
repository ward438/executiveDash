import { TrendChart } from "../charts/trendCharts/trendChart";
import { useState } from "react";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";

export const TrendDash = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<{ account_name: string; cost: number; budget: number, date: string } | null>(null);
    return (
        <div className="w-full h-screen flex flex-col p-8">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold">Trend Dashboard</h1>
            </div>
            <div className="-mt-12">
                <TrendDropDown isOpen={isOpen} setIsOpen={setIsOpen} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
                {selectedAccount && selectedAccount.account_name !== "All Accounts" && (
                    <div className="flex justify-center">
                        <span className="text-sm">
                            <strong>{selectedAccount.account_name}</strong> | Cost: ${selectedAccount.cost} | Budget: ${selectedAccount.budget} | Date: {selectedAccount.date}
                        </span>
                    </div>
                )}
            </div>
            <div className="flex flex-1 justify-center items-center">
                {selectedAccount && selectedAccount.account_name !== "All Accounts" ? (
                    <div className="w-1/2 h-3/4">
                        <TrendChart selectedAccount={selectedAccount}/>
                    </div>
                ) : (
                    <div className="w-full h-full">
                        <TrendChart selectedAccount={selectedAccount}/>
                    </div>
                )}
            </div>
        </div>
    );
}