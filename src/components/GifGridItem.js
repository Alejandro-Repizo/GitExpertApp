import React from 'react';

export const GifGridItem = ({ title, url }) => {
	return (
		<>
			<div className='card animate__animated animate__fadeIn'>
				<img src={url} alt={title} className='card__image' />
				<p className='card__title'>{title}</p>
			</div>
		</>
	);
};
