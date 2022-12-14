import { type RequestHandler } from '@sveltejs/kit';
import { loadAllImages } from '../../lib/loadAllImages';

export const GET: RequestHandler = async ({ url }) => {
	const images = await loadAllImages();

	return new Response(JSON.stringify(images.slice(0, 10)));
};

export const prerender = true;
