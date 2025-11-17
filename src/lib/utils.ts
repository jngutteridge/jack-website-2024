import type { Component } from "svelte";

interface FileImport {
	metadata: { [key: string]: string };
	default: Component;
}

export const fetchPosts = async () => {
	const files = import.meta.glob('../../content/posts/*.md');
	const iterablePostFiles = Object.entries(files);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver() as FileImport);
			const date = new Date(metadata.date);
			const slug = metadata.slug as string ?? path.slice(24, -3);
			const href = `/posts/${slug}/`;
			const categoryHref = `/posts/${(metadata.category as string).toLocaleLowerCase()}/`;
			
			return {
				slug,
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title: metadata.title as string,
				category: metadata.category as string,
				categoryHref,
				href,
				path,
				id: path.slice(20, 23),
			};
		})
	);

	return posts.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
};

export const fetchAllForFeed = async () => {
	const files = import.meta.glob('../../content/posts/*.md');
	const iterablePostFiles = Object.entries(files);

	const posts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const file = (await resolver() as FileImport);
			const { metadata } = file;
			const date = new Date(metadata.date);
			const slug = metadata.slug as string ?? path.slice(24, -3);
			const href = `/posts/${slug}/`;
			const categoryHref = `/posts/${(metadata.category as string).toLocaleLowerCase()}/`;

			return {
				slug,
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title: metadata.title as string,
				category: metadata.category as string,
				categorySlug: (metadata.category as string).toLocaleLowerCase(),
				categoryHref,
				href,
				path,
				id: path.slice(20, 23),
				content: file,
			};
		})
	);

	return posts.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
}

export const fetchReviews = async () => {
	const files = import.meta.glob('../../content/reviews/*.md');
	const iterablePostFiles = Object.entries(files);

	const reviews = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver() as FileImport);
			const title = getReviewTitle(
				metadata.category as string,
				metadata.title as string,
				metadata.author as string || metadata.artist as string || metadata.venue as string + ' ' + metadata.location as string,
			);
			const date = new Date(metadata['review_date']);
			const slug = metadata.slug as string ?? path.slice(26, -3);
			const href = ['', 'reviews', slug, ''].join('/');
			const categorySlug = (metadata.category as string).toLocaleLowerCase()

			return {
				slug,
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title,
				category: metadata.category as string + ' reviews',
				categorySlug,
				categoryHref: `/reviews/${categorySlug}/`,
				href,
				path,
				id: path.slice(22, 25),
				imgSrc: `/img/reviews/${slug}.jpg`,
			};
		})
	);

	return reviews.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
};

const getReviewTitle = (category: string, title: string, subtitle: string) => {
	const contraction = (category == 'Live') ? 'at' : 'by';
	return `${title} ${contraction} ${subtitle}`;
};


export const fetchDemos = async () => {
	const files = import.meta.glob('../../content/demos/*.md');
	const iterablePostFiles = Object.entries(files);

	const demos = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver() as FileImport);
			const title = metadata.title as string
			const date = new Date(metadata['date']);
			const slug = metadata.slug as string ?? path.slice(24, -3);
			const href = ['', 'demos', slug, ''].join('/');

			return {
				slug,
				date,
				formattedDate: date.toLocaleDateString('en-GB', { dateStyle: 'long' }),
				title,
				href,
				path,
				id: path.slice(20, 23),
			};
		})
	);

	return demos.sort((a, b) => {
		return b.date.valueOf() - a.date.valueOf();
	});
};
