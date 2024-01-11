export const fetchPosts = async () => {
	const files = import.meta.glob('/../content/posts/*.md');
	const iterablePostFiles = Object.entries(files);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const all = (await resolver()) as any;
			const { metadata } = all;
			const date = new Date(metadata.date);

			return {
				path: metadata.slug ?? path.slice(21, -3),
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title: metadata.title,
				category: metadata.category,
			};
		})
	);

	return posts.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
};