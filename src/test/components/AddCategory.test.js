import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en <AddCategory/>', () => {
	const setCategories = jest.fn();
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test('<AddCategory/> se debe mostrar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de simular el evento change del input', () => {
		const input = wrapper.find('input');
		const value = 'Hola mundo!';
		input.simulate('change', { target: { value } });
	});

	test('No debe de lanzar la información con onSubmit', () => {
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	test('Debe de llamar el setCategories y limpiar el input', () => {
		wrapper.find('input').simulate('change', { target: { value: 'category' } });
		wrapper.find('form').simulate('submit', { preventDefault() {} });
		expect(setCategories).toHaveBeenCalled();
		expect(wrapper.find('input').prop('value')).toBe('');
	});
});
