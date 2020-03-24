import React from 'react';
import './App.css';
import Tile from './Tile/Tile'
import Graph from './Graph/Graph'

function App() {
  return (
    <div className="App">
      <div className='headerBanner'>Coronavirus (COVID-19) Research and Development Dashboard</div>
      <div className='content'>
        <div style={{ flex: '1' }}>
          <Tile header='Total Vaccine Trials'>23</Tile>
          <Tile header='Total Treatment Trials'>45</Tile>
        </div>
        <Tile header='Vaccine Progress'>
          <Graph />
        </Tile>
      </div>
    </div>
  );
}

export default App;
