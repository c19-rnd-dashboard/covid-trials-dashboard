import React from 'react';
import './App.css';
import Tile from './Tile/Tile';
import Graph from './Graph/Graph';

function App() {
	const trialData = [
		{
			country: 'Italy',
			number: Math.random()
		},
		{
			country: 'France',
			number: Math.random()
		},
		{
			country: 'Romania',
			number: Math.random()
		}
	];
	const updatedDate = () => {
		const date = new Date();
		return 'Last updated at (' + date.getMonth() + '/' + 1 + date.getDay() + '/' + date.getFullYear() + ')';
	};
	return (
		<div className="App">
			<div className="headerBanner">Coronavirus (COVID-19) Research and Development Dashboard</div>
			<div className="content">
				<div style={{ flex: '1' }}>
					<Tile header="Total Vaccine Trials">23</Tile>
					<Tile header="Total Treatment Trials">45</Tile>
					<Tile header="Vaccine Trials by Country">
						{trialData.map((trial, i) => {
							return (
								<div className="trialContainer" key={i}>
									<div>{trial.number}</div>
									<div className="trialCountry">{trial.country}</div>
								</div>
							);
						})}
					</Tile>
					<Tile header={updatedDate()} />
				</div>
				<Tile header="Vaccine Progress">
					<Graph />
				</Tile>
			</div>
		</div>
	);
}

export default App;
