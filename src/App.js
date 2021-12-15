import './App.css';
import ReactMapGL from 'react-map-gl'
import { useState } from 'react';

function App() {
  const [viewport, setViewport] = useState({
    latitude: 52.50249,
    longitude: 4.96199,
    width: '100vw',
    height: '40em',
    zoom: 12.5,
    pitch: 30,
    bearing: 0
  })

  return (
    <>
    <h1>Gevonden afval in Nederland</h1>
      <ReactMapGL
        {...viewport}
        mapStyle="mapbox://styles/mapbox/dark-v10"
        mapboxApiAccessToken='pk.eyJ1Ijoiam9keTU2OSIsImEiOiJja3g3amJ5MGowMW8wMm5zZTlwN3Fjb2t0In0.99DjUaNvteP2DPXThnnHXg'
        onViewportChange={viewport => {
          setViewport(viewport)
        }}
      ></ReactMapGL>
    </>
  );
}

export default App;
