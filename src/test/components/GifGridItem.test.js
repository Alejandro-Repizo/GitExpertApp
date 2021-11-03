import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
	const data = {
		title: 'Un título',
		url: 'http://localhost/test-image.jpg',
	};
	const wrapper = shallow(<GifGridItem {...data} />);

	test('<GifGridItem/> se debe mostrar correctamente', () => {
		expect(wrapper).toMatchSnapshot();
	});

	test('Debe de tener un párrafo con el title', () => {
		const parrafo = wrapper.find('p');
		expect(parrafo.text().trim()).toBe(data.title);
	});

	test('Debe de tener la imagen igual al url y alt de los props', () => {
		const img = wrapper.find('img');
		// Con props() mostramos un objeto con
		// las propiedades del elemento HTML
		// console.log(img.props())

		// Con prop(propiedad) especificamos la
		// propiedad que deseamos obtener
		// console.log(img.prop("src"))

		expect(img.prop('src')).toBe(data.url);
		expect(img.prop('alt')).toBe(data.title);
	});

	test('Debe de tener la clase card', () => {
		const div = wrapper.find('div');
		expect(div.prop('className').includes('card')).toBe(true);
	});
});
