import { dateFilteredJson } from "../chartData/trendChartData";

export const TrendDropDown = (
    { isOpen, setIsOpen, setSelectedAccount }: 
    { isOpen: boolean; setIsOpen: (isOpen: boolean) => void, selectedAccount: { account_name: string; cost: number; budget: number } | 
    null, setSelectedAccount: (selectedAccount: { account_name: string; cost: number; budget: number } | null) => void }
) => {      
    return <>  
        <button onClick={() => setIsOpen(!isOpen)} className=" text-warning-primary inline-flex items-center justify-center border font-medium rounded-base text-sm px-4 py-2.5 cursor-pointer" >
            Over Budget Items
            {/* This is my carrot, need to import svg */}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
        </button>
                
        {isOpen && (
            <div className="absolute bg-white border z-10 flex flex-col w-80 max-h-64 overflow-y-auto shadow-md">
                {dateFilteredJson.filter((data) => data != null).map((data: any, index: number) => (
                    <button onClick={() => setSelectedAccount({account_name: data.account_name, cost: data.cost, budget: data.budget})} key={index} className="text-left px-3 py-1.5 text-sm hover:bg-yellow-100 border-b last:border-b-0">
                        {`${data.account_name} | cost:  $${data.cost} | budget: $${data.budget}`}
                    </button>
                ))}
            </div>
        )}
    </>
};
