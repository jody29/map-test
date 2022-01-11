import './App.css';
import Map from './components/map';
import { Provider } from './components/provider';


function App() {
  return (
    <Provider>
      <Map />
    </Provider>
  );
}

export default App;
