import React from 'react';
import { shallow } from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { GifGrid } from '../../components/GifGrid';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en el <GifGrid/>', () => {
	const category = 'Category';

	beforeEach(() => {
		useFetchGifs.mockReturnValue({ data: [], loading: true });
	});

	test('Se debe mostrar correctamente', () => {
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper).toMatchSnapshot();
	});

	test('El titulo debe ser igual a la categoria', () => {
		const wrapper = shallow(<GifGrid category={category} />);
		expect(wrapper.find('h3').text().trim()).toBe(category);
	});

	test('Debe de mostrar items cuando se cargan imágenes useFetchGifs', () => {
		const gifs = [
			{ id: 'ABC', url: 'https://localhost', title: 'cualquier cosa' },
		];

		useFetchGifs.mockReturnValue({ data: gifs, loading: false });

		const wrapper = shallow(<GifGrid category={category} />);

		expect(wrapper.find('h1.loader').exists()).toBe(false);
		expect(wrapper.find('GifGridItem').length).toBe(gifs.length);
	});
});
