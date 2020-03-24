import React from 'react';
import './Tile.css'

const Tile = (props) => {
	const { header, content } = props
	return (
		<div className='tile'>
			<div className='tileHeader'>{header}</div>
			<div className='tileContent'>{content}</div>
		</div>
	)
}

export default Tile