import { TrendChart } from "../charts/trendCharts/trendChart";
import { useState } from "react";
import { TrendDropDown } from "../charts/trendCharts/components/trendDropDown";
import type { CostRecord } from "../types";

export const TrendDash = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedAccount, setSelectedAccount] = useState<CostRecord | null>(null);
    return (
        <div className="w-full h-screen flex flex-col p-8">
            <div className="flex items-center justify-center">
                <h1 className="text-2xl font-bold">Trend Dashboard</h1>
            </div>
            <div className="-mt-12">
                <TrendDropDown isOpen={isOpen} setIsOpen={setIsOpen} selectedAccount={selectedAccount} setSelectedAccount={setSelectedAccount}/>
                {selectedAccount && selectedAccount.account_name !== "All Accounts" && (
                    <>
                        <div className="flex justify-center mt-3">
                            <span className="text-sm">
                                <strong>{selectedAccount.owner}</strong>
                            </span>                      
                        </div>
                        <div className="flex justify-center mt-1">
                            <span className="text-sm">
                                {selectedAccount.account_name}
                            </span>
                        </div>
                        <div className="flex justify-center mt-1">
                            <span className="text-sm">
                            {selectedAccount.date} 
                            </span>
                        </div>
                        <div className="flex justify-center mt-1">
                            <span className="text-sm">
                                Service: {selectedAccount.service} | Region: {selectedAccount.region}
                            </span>
                        </div>
                        <div className="flex justify-center mt-1">
                            <span className="text-sm">
                                Cost: ${selectedAccount.cost} Budget: ${selectedAccount.budget}
                            </span>
                        </div>
                    
                    </>
                )}
            </div>
            <div className="flex flex-1 justify-center items-center">
                {selectedAccount && selectedAccount.account_name !== "All Accounts" ? (
                    // single account
                    <div className="w-1/2 h-3/4">
                        <TrendChart selectedAccount={selectedAccount}/>
                    </div>
                ) : (
                    // all accounts
                    <div className="w-full h-full">
                        <TrendChart selectedAccount={selectedAccount}/>
                    </div>
                )}
            </div>
        </div>
    );
}