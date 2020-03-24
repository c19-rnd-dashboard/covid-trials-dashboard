import React from 'react';
import './Tile.css'

const Tile = (props) => {
	const { header, children } = props
	return (
		<div className='tile'>
			<div className='tileHeader'>{header}</div>
			<div className='tileContent'>{children}</div>
		</div>
	)
}

export default Tile