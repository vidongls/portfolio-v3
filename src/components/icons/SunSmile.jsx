'use client';

import anime from 'animejs';
import { useEffect, useRef } from 'react';
import { useLenis } from '@/libs/lenis';
import { gsap, Linear } from '@/libs/gsap';

export const SunSmile = () => {
	const rectRef = useRef(null);
	const bgRef = useRef(null);

	useEffect(() => {
		if (rectRef.current) {
			anime({
				targets: rectRef.current,
				width: [0, 40],
				easing: 'linear',
				duration: 1000,
				loop: false,
				delay: 600,
			});
		}
	}, []);

	const onMouseEnter = () => {
		anime.remove(rectRef.current);
		anime({
			targets: rectRef.current,
			width: [0, 40],
			easing: 'linear',
			duration: 1000,
			loop: false,
		});
	};

	useLenis(() => {
		// gsap.to(bgRef.current, {
		// 	rotation: window.scrollY / 1000,
		// 	ease: Linear.easeNone,
		// 	transformOrigin: 'center',
		// 	duration: 1000,
		// });
		// anime({
		// 	targets: bgRef.current,
		// 	rotate: 360,
		// 	easing: 'linear',
		// 	duration: 200,
		// 	loop: true,
		// 	transformOrigin: 'center',
		// });
	});

	return (
		<div className="cursor-pointer w-fit" onMouseEnter={onMouseEnter}>
			<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M19.0001 0.169922L22.9001 8.02192L31.2121 4.38192L28.8721 12.7699L37.7121 15.0459L30.2261 20.0459L35.4541 27.1699L26.3281 26.4439L25.4981 35.0859L19.0001 28.9699L12.5021 35.0859L11.6721 26.4439L2.54609 27.1699L7.77409 20.0459L0.288086 15.0459L9.12809 12.7699L6.78809 4.38192L15.1001 8.02192L19.0001 0.169922Z"
					fill="url(#paint0_radial_341_6049)"
					ref={bgRef}
				/>
				<defs>
					<clipPath id="clipPath">
						<rect ref={rectRef} x="0" y="0" width="0" height="40" />
					</clipPath>
				</defs>
				<path
					d="M19.1169 24.3711C21.8452 24.3711 24.2736 22.3808 25.1599 19.4184C25.2554 19.0984 25.5665 18.9255 25.8561 19.0309C26.145 19.137 26.3016 19.4823 26.2058 19.8022C25.17 23.265 22.3211 25.5915 19.1169 25.5915C15.9126 25.5915 13.0639 23.265 12.0281 19.8022C11.9324 19.4823 12.0889 19.137 12.3778 19.0309C12.6665 18.9255 12.9784 19.0984 13.0741 19.4184C13.9603 22.3808 16.3887 24.3711 19.1169 24.3711Z"
					fill="#201B16"
					clipPath="url(#clipPath)"
				/>
				<defs>
					<radialGradient
						id="paint0_radial_341_6049"
						cx="0"
						cy="0"
						r="1"
						gradientUnits="userSpaceOnUse"
						gradientTransform="translate(0.288086 0.169922) scale(47.0239 57.6654)"
					>
						<stop offset="0.29" stopColor="#A0FF97" />
						<stop offset="1" stopColor="#B0FC50" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
};
