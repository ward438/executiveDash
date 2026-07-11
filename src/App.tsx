import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import HomeTable from './components/homeTable';
import ExecDonut from './charts/execDonut';
import { TrendChart } from './charts/trendChart';

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
