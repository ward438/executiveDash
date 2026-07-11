import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { TrendChart } from './charts/trendCharts/trendChart';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function App() {

  return (
    <div className="grid place-items-center">
      <div className="flex items-center h-screen">
        <TrendChart />
      </div>
    </div>
  );
}
