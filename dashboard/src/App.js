import React from 'react';
import './App.css';
import Tile from './Tile/Tile'

function App() {
  return (
    <div className="App">
      <div className='headerBanner'>Coronavirus (COVID-19) Research and Development Dashboard</div>
      <div className='content'>
        <Tile header='Total Vaccine Trials' content='N/A' />
        <Tile header='Total Treatment Trials' content='N/A' />
      </div>
    </div>
  );
}

export default App;
