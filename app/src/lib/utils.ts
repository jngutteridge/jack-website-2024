import { error } from "@sveltejs/kit";

export const fetchPosts = async () => {
	const files = import.meta.glob('/../content/posts/*.md');
	const iterablePostFiles = Object.entries(files);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver());
			const date = new Date(metadata.date);
			const slug = metadata.slug as string ?? path.slice(21, -3);
			const href = date.toLocaleDateString('en-GB', { dateStyle: 'short' }).split('/').concat('').reverse().concat([slug, '']).join('/');

			return {
				slug,
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title: metadata.title as string,
				category: metadata.category as string,
				categorySlug: (metadata.category as string).toLocaleLowerCase(),
				href,
				path,
				id: path.slice(17, 20),
			};
		})
	);

	return posts.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
};

export const fetchAllForFeed = async () => {
	const files = import.meta.glob('/../content/posts/*.md');
	const iterablePostFiles = Object.entries(files);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const file = (await resolver());
			const { metadata } = file;
			const date = new Date(metadata.date);
			const slug = metadata.slug as string ?? path.slice(21, -3);
			const href = date.toLocaleDateString('en-GB', { dateStyle: 'short' }).split('/').concat('').reverse().concat([slug, '']).join('/');

			return {
				slug,
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title: metadata.title as string,
				category: metadata.category as string,
				categorySlug: (metadata.category as string).toLocaleLowerCase(),
				href,
				path,
				id: path.slice(17, 20),
				content: file,
			};
		})
	);

	return posts.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
}

export const fetchPostContent = async (path: string) => {
	const files = import.meta.glob('/../content/posts/*.md');
	const iterablePostFiles = Object.entries(files);

	const file = iterablePostFiles.find(async ([filePath]) => filePath === path);

	if (!file) {
		throw error(404);
	}

	return file[1]();
}
