import { getGifs } from '../../helpers/getGIfs';

describe('Pruebas en getGifs fetch', () => {
	test('La petición debe obtener 10 elementos', async () => {
		const gifs = await getGifs('One punch');
		expect(gifs.length).toBe(10);
	});

	test('La peticion llega vacia cuando no se le pasa una categoria', async () => {
		const gifs = await getGifs('');
		expect(gifs.length).toBe(0);
	});
});
