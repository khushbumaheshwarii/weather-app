import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLocation from './components/TimeandLocation';
import TemperatureAndDetail from './components/TemperatureAndDetail';
import Forecast from './components/Forecast';




function App() {
  return (
    <div className='px-32 py-5 mx-auto mt-4 shadow-xl max-w-screen-md bg-gradient-to-br from-cyan-700 to-blue-700 h-fit stroke-gray-400'>
      <TopButton />
      <Inputs />
      <TimeandLocation/>
      <TemperatureAndDetail/>
      <Forecast title="Hourly Forecast" />
      <Forecast title="Daily Forecast" />

    </div>
  );
}

export default App;
