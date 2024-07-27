'use client';

import useLenisGoto from '@/hooks/useLenisGoto';
import { cn } from '@/util/utils';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import Button from '../button';
import { Logo } from '../icons/Logo';

export const Header = () => {
	const { scrollToId, scrollToTop } = useLenisGoto();

	const [hash, setHash] = useState(window.location.hash);

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
	useEffect(() => {
		const onHashChanged = () => {
			setHash(window.location.hash);
		};

		window.addEventListener('hashchange', onHashChanged);

		return () => {
			window.removeEventListener('hashchange', onHashChanged);
		};
	}, []);

	const onGoto = useCallback((id) => {
		if (!id || id === '#') {
			scrollToTop();
			return;
		}
		``;

		scrollToId(id);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		setTimeout(() => {
			onGoto(hash);
		}, 100);
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
									'leading-5 font-medium text-base pb-2.5 w-[92px]  inline-block text-secondary py-3 border-b-3 border-b-transparent hover:border-primary hover:text-primary transition-all ease-linear duration-200',
									hash === nav.path && 'border-b-3 border-b-primary text-primary',
									!hash && nav.path === '#' && 'border-b-3 border-b-primary text-primary'
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
