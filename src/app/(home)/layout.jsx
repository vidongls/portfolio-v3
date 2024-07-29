import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ReactLenis } from '@/libs/lenis';

export const metadata = {
	title: 'Le Minh Quyen Portfolio',
	description: 'Đây là trang web về Lê Minh Quyền',
	keywords: '',
	metadataBase: 'https://portfolio-ivgnod-v2.vercel.app',
	openGraph: {
		title: 'Le Minh Quyen Portfolio',
		description: 'Đây là trang web về Lê Minh Quyền',
		url: 'https://portfolio-ivgnod-v2.vercel.app',
		images: {
			url: 'https://portfolio-ivgnod-v2.vercel.app/images/hero-name2.png',
			width: '100%',
			height: '100%',
		},
	},
	twitter: {
		title: 'Le Minh Quyen Portfolio',
		description: 'Đây là trang web về Lê Minh Quyền',
		images: {
			url: 'https://portfolio-ivgnod-v2.vercel.app/images/hero-name2.png',
			width: '100%',
			height: '100%',
		},
	},
};

export default function Layout({ children }) {
	return (
		<ReactLenis root>
			<div className="flex min-h-full flex-col">
				<Header />
				<main className="h-full panel-content overflow-x-hidden">{children}</main>
				<Footer />
			</div>
		</ReactLenis>
	);
}
