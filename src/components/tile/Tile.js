import React from 'react';

export const Tile = ({ name, description }) => {
	return (
		<div className='tile'>
			<p className='tile-title'>{name}</p>
			{Object.values(description).map((value, index) => (
				<p key={index} className='tile-description'>
					{value}
				</p>
			))}
		</div>
	);
};
