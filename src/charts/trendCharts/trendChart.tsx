import { Chart } from "react-chartjs-2";
import { trendChartConfig } from "./config/trendChartConfig";


export const TrendDropDown = ({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (isOpen: boolean) => void }) => {    
    return <>
        
    

        <button onClick={() => setIsOpen(!isOpen)} className=" text-warning-primary inline-flex items-center justify-center border font-medium rounded-base text-sm px-4 py-2.5 cursor-pointer" >
            Dropdown button 
            {/* This is my carrot, need to import svg */}
            <svg className="w-4 h-4 ms-1.5 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
        </button>
        
        {isOpen && (
            <div>
                <h1>Dropdown</h1>
            </div>
        )}
            
    
    
    </>
};

export const TrendChart = () => {
    return (
        <div className="h-full">
            {/* <div className="-mt-12">
                <TrendDropDown />
            </div> */}
            <Chart type="bar" data={trendChartConfig.data} options={trendChartConfig.options} />
        </div>
    );
}