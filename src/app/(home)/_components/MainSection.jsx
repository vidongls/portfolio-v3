'use client';

import { PersonName } from '@/components/icons/PersonName';
import Image from 'next/image';
import { gsap, useGSAP, ScrollTrigger } from '@/libs/gsap';
import { useLenis } from '@/libs/lenis';
import { useRef } from 'react';
import Button from '@/components/button';

const MainSection = () => {
	// const contentRef = useRef(null);

	// useLenis(() => {
	// 	gsap.to(contentRef.current, {
	// 		scale: 1 - window.scrollY / 1200, // Thay đổi tỷ lệ khi cuộn
	// 		ease: 'power1.out',
	// 		y: () => -window.scrollY * 0.85,
	// 		duration: 1,
	// 	});
	// });

	return (
		<section
			className="panel w-screen h-screen bg-gradient-hero px-10 pb-10 pt-[180px] flex flex-col"
			id="main-section"
		>
			<div className="flex items-center gap-x-4 mb-6">
				<h1 className="text-[50px] text-primary leading-[65px] font-bold tracking-tighter flex items-center align-baseline">
					<figure>
						<Image
							src={'/icons/handshake.svg'}
							alt="Say hi Le Minh Quyen"
							width={50}
							height={40}
							className="inline-block mr-4 "
						/>
					</figure>
					Hi, I&apos;m Quyen — Product designer
				</h1>
				<Image src={'/images/avatar.svg'} width={114} height={114} alt="avatar le minh quyen" />
			</div>
			<article className="mb-10">
				<p className="text-secondary text-[38px] tracking-tight font-semibold leading-[45px] font-dmsans">
					I dedicated to crafting mindful solutions.
					<br /> I can design <strong className="text-primary">web platforms</strong>
					<br /> focuses on user-centered designs that <br />
					make digital experiences easy and enjoyable.
				</p>
			</article>
			<Button title="Get in touch" type={'primary'} />
		</section>
	);
};

export default MainSection;
