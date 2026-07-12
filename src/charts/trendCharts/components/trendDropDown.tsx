import type { DropDownItem } from '../../../types';

export type { DropDownItem };

export const TrendDropDown = (
    { isOpen, setIsOpen, setSelectedAccount, items, label, onSelectAll }: 
    { isOpen: boolean; setIsOpen: (isOpen: boolean) => void; selectedAccount: DropDownItem | null; setSelectedAccount: (selectedAccount: DropDownItem | null) => void; items: DropDownItem[]; label: string; onSelectAll?: () => void }
) => {     
    return <>  
        <button onClick={() => setIsOpen(!isOpen)} className=" text-warning-primary inline-flex items-center justify-center border font-medium rounded-base text-sm px-4 py-2.5 cursor-pointer" >
            {label}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
        </button>
                
        {isOpen && (
            <div className="absolute bg-white border z-10 flex flex-col w-80 max-h-64 overflow-y-auto shadow-md">
                <button onClick={() => { setSelectedAccount(null); setIsOpen(false); onSelectAll?.(); }} className="text-left px-3 py-1.5 text-sm hover:bg-yellow-100 border-b font-semibold">
                    All Accounts
                </button>
                {items.map((data, index) => (
                    <button onClick={() => { setSelectedAccount({ date: data.date, account_name: data.account_name, account_id: data.account_id, service: data.service, region: data.region, owner: data.owner, cost: data.cost, budget: data.budget }); setIsOpen(false); }} key={index} className="text-left px-3 py-2 text-sm hover:bg-yellow-100 border-b last:border-b-0 flex flex-col gap-0.5">
                        <span className="font-medium">{data.owner} — {data.account_name} ({data.service})</span>
                        <span className="text-xs text-gray-500">{data.date} &nbsp;|&nbsp; Cost: ${data.cost.toLocaleString()} &nbsp;|&nbsp; Budget: ${data.budget.toLocaleString()}</span>
                    </button>
                ))}
            </div>
        )}
    </>
};
