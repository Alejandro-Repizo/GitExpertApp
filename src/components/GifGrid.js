import React from 'react';
import PropTypes from 'prop-types';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
	const { data: images, loading } = useFetchGifs(category);

	return (
		<div className='container'>
			<div className='wrapper wrapper--color'>
				<h3 className='container__title animate__animated animate__fadeIn'>
					<i className='fas fa-star icon icon--categories'></i>
					{category.charAt(0).toUpperCase() + category.slice(1)}
				</h3>

				{loading && (
					<h1 className='loader animate__animated animate__flash'>
						Loading...
					</h1>
				)}

				<div className='container__card'>
					{images.map((image) => (
						<GifGridItem key={image.id} {...image} />
					))}
				</div>
			</div>
		</div>
	);
};

GifGrid.propTypes = {
	category: PropTypes.string.isRequired,
};
