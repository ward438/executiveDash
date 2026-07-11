import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { TrendChart } from './charts/trendCharts/trendChart';
import { TrendChartOverlayed } from './charts/trendCharts/trendChartOverlayed';
import { TrendDash } from './dashboards/trendDash';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function App() {

  return (
    <div className="w-screen h-screen">
      <TrendDash />
    </div>
  );
}
