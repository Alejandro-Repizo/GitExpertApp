import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
	const [categories, setCategories] = useState([]);

	return (
		<>
			<header className='header'>
				<div className='header__subcontainer wrapper'>
					<div className='icon'>
						<i className='fas fa-keyboard'></i>
					</div>
					<h2>GifApp</h2>
					<AddCategory setCategories={setCategories} />
				</div>
			</header>

			{categories.length <= 0 && (
				<div className='wrapper search'>
					<figure className='image'>
						<img src="/assets/search.svg" alt='search--gift' />
					</figure>
					<h1 className='search__title'>Type your favorite gif</h1>
				</div>
			)}

			{categories.map((category) => (
				<GifGrid key={category} category={category} />
			))}
		</>
	);
};
