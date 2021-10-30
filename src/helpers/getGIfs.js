export const getGifs = async (category) => {
	const key = 'HocMKjxtyb9J4Xqf91iNzvT7hLLWgPMW';
	const url = `https://api.giphy.com/v1/gifs/search?api_key=:key&q=${encodeURI(
		category
	)}&limit=10`;
	const res = await fetch(url.replace(':key', key));
	const { data } = await res.json();

	return data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images?.downsized_medium.url,
	}));
};
