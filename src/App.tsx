import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { MainNavMenu } from './components/mainNavMenu';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function App() {
  return (
    <div className="flex w-screen h-screen">
      <MainNavMenu />
    </div>
  );
}
