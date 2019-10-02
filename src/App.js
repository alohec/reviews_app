import React, { useEffect, useState } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import MapLayers from './components/MapLayers';
import Sidebar from './components/Sidebar';
import './App.css';

const App = () => {
  const [mapboxToken, setToken] = useState("undefined");

  useEffect(() => {
    fetch('https://desolate-earth-97056.herokuapp.com/mapbox').then(response =>
      response.json().then(data => {
        setToken(data);
      })
    )
  }, []);

  const Map = ReactMapboxGl({
    accessToken: mapboxToken,
  });

  return (
    <div>
      <div class="sidebar">
        <Sidebar/>
      </div>
      <div class="map">
        <Map
          style="mapbox://styles/mapbox/streets-v9" // eslint-disable-line
          containerStyle={{
            height: '100vh',
            width: '100vw',
          }}
          center={[-122.431297,37.773972]}
        >
          <MapLayers/>
        </Map>
      </div>
    </div>
  )
}

export default App;
