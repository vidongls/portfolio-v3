'use client';

import { PersonName } from '@/components/icons/PersonName';
import Image from 'next/image';
import { gsap, useGSAP, ScrollTrigger } from '@/libs/gsap';
import { useLenis } from '@/libs/lenis';
import { useEffect, useRef } from 'react';
import Button from '@/components/button';
import anime from 'animejs';

const MainSection = () => {
	const textRef = useRef(null);
	useEffect(() => {
		textRef.current.innerHTML = textRef.current.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

		anime
			.timeline({ loop: true })
			.add({
				targets: '.title-hero .letter',
				scale: [4, 1],
				opacity: [0, 1],
				translateZ: 0,
				easing: 'easeOutExpo',
				duration: 950,
				delay: (el, i) => 70 * i,
			})
			.add({
				targets: '.title-hero',
				opacity: 0,
				duration: 1000,
				easing: 'easeOutExpo',
				delay: 1000,
			});
	});

	return (
		<section
			className="panel !w-full h-screen bg-gradient-hero px-10 pb-10 pt-[180px] flex flex-col justify-center section1"
			id="main-section"
		>
			<div className="flex items-center gap-x-4 mb-6">
				<div className="text-[50px] text-primary leading-[65px] font-bold tracking-tighter flex items-center align-baseline">
					<figure>
						<Image
							src={'/icons/handshake.svg'}
							alt="Say hi Le Minh Quyen"
							width={50}
							height={40}
							className="inline-block mr-4 "
						/>
					</figure>
					<h1 ref={textRef} className="title-hero">
						Hi, I&apos;m Quyen — Product designer
					</h1>
				</div>
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
