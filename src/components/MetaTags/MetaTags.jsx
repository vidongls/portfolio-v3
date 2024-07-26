import Head from 'next/head';

export const MetaTags = ({ title, description, image, url }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={'https://portfolio-ivgnod-v2.vercel.app/images/hero-name2.png'} />
			<meta property="og:url" content={url} />
			<meta property="og:type" content="website" />
		</Head>
	);
};
