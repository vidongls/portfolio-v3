import './globals.css';
import localFont from '@next/font/local';

const roobert = localFont({
	src: [
		{
			path: '../../public/fonts/roobert/RoobertLight.ttf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roobert/RoobertRegular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roobert/RoobertMedium.ttf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roobert/RoobertSemiBold.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roobert/RoobertBold.ttf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/roobert/RoobertHeavy.ttf',
			weight: '800',
			style: 'normal',
		},
	],
	variable: '--font-roobert',
});

export const metadata = {
	title: 'Le Minh Quyen',
	description: 'Portfolio of Le Minh Quyen',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<link rel="icon" href="/images/hero-name.svg" />
			{/* <MetaTags
				title="Le Minh Quyen Portfolio"
				description="Đây là trang web về Lê Minh Quyền"
				image={'https://portfolio-ivgnod-v2.vercel.app/images/hero-name2.png'}
				url="https://portfolio-ivgnod-v2.vercel.app/"
			/> */}
			<body className={`${roobert.variable} font-roobert`}>{children}</body>
		</html>
	);
}

