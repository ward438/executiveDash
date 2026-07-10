import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useDashStore } from './store/useDashStore';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function App() {


  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-indigo-700 text-white px-6 py-4 shadow">
        <h1 className="text-2xl font-bold tracking-tight">Executive Dashboard</h1>
        <p className="text-indigo-200 text-sm mt-0.5">Cloud Cost Overview</p>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 space-y-8">
        <div style={{ backgroundColor: 'red' }}>
          <div className="container mx-auto flex justify-center items-center"> Hello World</div>          
        </div>   
      </main>
    </div>
  );
}


