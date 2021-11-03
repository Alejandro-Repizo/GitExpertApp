import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
	const [inputValue, setInputValue] = useState('');

	const handleInput = (e) => {
		setInputValue(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (inputValue.trim().length) {
			document.title = `GifExpertApp - ${inputValue}`;
			setCategories((categories) => [inputValue, ...categories]);
			setInputValue('');
		}
	};

	return (
		<form className='form' onSubmit={handleSubmit}>
			<input
				type='text'
				className='form__input'
				value={inputValue}
				onChange={handleInput}
			/>

			<button className='form__button' type='submit'>
				<i className='fas fa-search'></i>
			</button>
		</form>
	);
};

AddCategory.propTypes = {
	setCategories: PropTypes.func.isRequired,
};
