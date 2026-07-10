import { Chart } from "react-chartjs-2";
import { execData } from "./chartData/execChartData";



export default function ExecDonut() {
    return (
        <Chart type="doughnut" data={execData} />
    );
}
