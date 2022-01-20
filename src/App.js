import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Provider } from './components/provider';
import MoveMap from './pages/moveMap';
import Intro from './pages/intro';
import Outro from './pages/outro';
import zwerfinator from './zwerfinator.svg'


function App() {
  return (
    <Provider>
      <img src={zwerfinator} alt='logo' className='logo'></img>
      <Routes>
        <Route index element={<Intro />}/>
        <Route  path='map' element={<MoveMap />}/>
        <Route path='outro' element={<Outro />}/>
      </Routes>
    </Provider>
  );
}

export default App;
