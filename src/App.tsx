import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import HomeTable from './components/homeTable';
import ExecDonut from './charts/execDonut';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function App() {

  return (
    <div className="grid place-items-center">
      <div className="flex items-center h-screen">
        <HomeTable />
        <ExecDonut />
      </div>
    </div>
  );
}
