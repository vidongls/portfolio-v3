'use client';

import { SunSmile } from '@/components/icons/SunSmile';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import Button from '../button';
import { gsap } from '@/libs/gsap';
import { useLenis } from '@/libs/lenis';
import { Logo } from '../icons/Logo';
import { useCallback, useEffect, useState } from 'react';
import { ReactLenis } from '@/libs/lenis';
import useLenisGoto from '@/hooks/useLenisGoto';

export const Header = () => {
	const path = usePathname();
	const { scrollToId, scrollToTop } = useLenisGoto();

	const [hash, setHash] = useState('');

	useEffect(() => {
		const handleHashChange = () => {
			setHash(window.location.hash);
		};

		handleHashChange();
	}, []);

	const navs = [
		{
			path: '#',
			title: 'My work',
		},
		{
			path: '#my-skill',
			title: 'My Skill',
		},
		{
			path: '/contact',
			title: 'Contact',
		},
		{
			path: '/life',
			title: 'Life',
		},
	];

	// useLenis(() => {
	// 	gsap.to(contentRef.current, {
	// 		scale: 1 - window.scrollY / 1200, // Thay đổi tỷ lệ khi cuộn
	// 		ease: 'power1.out',
	// 		y: () => -window.scrollY * 0.85,
	// 		duration: 1,
	// 	});
	// });

	const onGoto = useCallback((id) => {
		console.log('🧙 ~ id:', id);
		if (!id || id === '#') {
			scrollToTop();
			return;
		}

		scrollToId(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		onGoto(hash);
	}, [hash, onGoto]);

	return (
		<header className="w-full py-6 px-10 fixed top-0 left-0 flex items-center justify-between z-50 bg-hero bg-white bg-opacity-30">
			<Link
				href="#"
				onClick={(e) => {
					e.preventDefault();
					onGoto('#');
				}}
				className="flex-1 cursor-pointer"
			>
				<Logo />
			</Link>
			<nav className="flex-1 flex justify-center">
				<ul className="flex items-center gap-8">
					{navs.map((nav) => (
						<li key={nav.path} className="text-center">
							<Link
								href={nav.path}
								className={cn(
									'leading-7 font-medium text-2xl pb-2.5 w-[92px]  inline-block text-secondary py-3 border-b-3 border-b-transparent hover:border-primary hover:text-primary transition-all ease-linear duration-200',
									path === nav.path && 'border-b-3 border-b-primary text-primary'
								)}
								onClick={(e) => {
									e.preventDefault();
									onGoto(nav.path);
								}}
							>
								{nav.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div className="flex-1 flex justify-end">
				<Button title="Get in touch" />
			</div>
		</header>
	);
};