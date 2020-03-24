import React from 'react';
import './Details.css';

const Details = () => {
	const vaccineData = [
		{
			category: 'Asset Name',
			data: 'Covidlitin'
		},
		{
			category: 'Sponsor',
			data: 'Gov'
		},
		{
			category: 'Partners',
			data: 'WHO'
		},
		{
			category: 'Country',
			data: 'UK'
		},
		{
			category: 'Drug Type',
			data: 'A-B'
		},
		{
			category: 'Molecule Type',
			data: 'A-B'
		}
	];
	return (
		<div className="detailsWrapper">
			{vaccineData.map((vaccine, i) => {
				return (
					<div className="detailsContainer" key={i}>
						<div>{vaccine.category}</div>
						<div className="detailsData">{vaccine.data}</div>
					</div>
				);
			})}
		</div>
	);
};

export default Details;
