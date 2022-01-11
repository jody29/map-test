import './App.css';
import { Filters } from './components/filter';
import Map from './components/map';
import { Provider } from './components/provider';


function App() {
  return (
    <Provider>
      <Map />
      <Filters />
    </Provider>
  );
}

export default App;
