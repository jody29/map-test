import './App.css';
import { Routes, Route } from 'react-router-dom'
import { Provider } from './components/provider';
import MoveMap from './pages/moveMap';
import Intro from './pages/intro';


function App() {
  return (
    <Provider>
      <Routes>
        <Route index element={<Intro />}/>
        <Route  path='map' element={<MoveMap />}/>
      </Routes>
    </Provider>
  );
}

export default App;
