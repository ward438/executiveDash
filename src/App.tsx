import { useState } from 'react';
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { TrendDash } from './dashboards/trendDash';
import { MainNavMenu } from './components/mainNavMenu';

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function App() {

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);   
  }

  return (
    <div className="flex w-screen h-screen">
      {isNavOpen && <MainNavMenu/>}
      <div className="flex flex-col flex-1 min-w-0">
        <button onClick={toggleNav} className="self-start m-2 px-3 py-1 text-sm border rounded cursor-pointer">
          {isNavOpen ? 'Close' : 'Nav Menu'}
        </button>
        Main Dashboard
      </div>
    </div>
  );
}
