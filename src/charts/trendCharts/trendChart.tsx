import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";
import costsData from "../../data/costs.json";

export const TrendDropDown = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {    
    
    const dateFilteredJson = costsData.map((data: any) => data.cost > data.budget ? {
        date: `${data.date}`,
        cost: `${data.cost}`, 
        budget: `${data.budget}`,
        account_name: `${data.account_name}`,
        service: `${data.service}`,
        region: `${data.region}`,
        owner: `${data.owner}`,
    } : null);
    console.log("dateFilteredJson:", dateFilteredJson);
    
    return <>  
        <button onClick={() => setIsOpen(!isOpen)} className=" text-warning-primary inline-flex items-center justify-center border font-medium rounded-base text-sm px-4 py-2.5 cursor-pointer" >
            Dropdown button 
            {/* This is my carrot, need to import svg */}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        
        {isOpen ? dateFilteredJson.map((data: any, index: number) => 
        <div className="absolute bg-white z-10 w-42 text-center">         
                <div className="bg-yellow-500">`${data.account_name} ${index}`</div>
        </div>            
        )
        : 
        (
            ""
        )
        }
            
    
    
    </>
};

export const TrendChart = () => {
    return (
        <div className="h-full">
            <Chart type="bar" data={trendChartConfig.data} options={trendChartConfig.options} />
        </div>
    );
}