import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import TopButton from './components/TopButton';
import Inputs from './components/Inputs';
import TimeandLocation from './components/TimeandLocation';




function App() {
  return (
    <div className='px-32 py-5 mx-auto mt-4 shadow-xl mx-w-screen-md bg-gradient-to-br from-cyan-700 to-blue-700 h-fit stroke-gray-400'>
      <TopButton />
      <Inputs />
      <TimeandLocation/>
    </div>
  );
}

export default App;
