// hooks/useLenisGoto.js
import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

const useLenisGoto = () => {
	const lenisRef = useRef(null);

	useEffect(() => {
		lenisRef.current = new Lenis();

		const handleScroll = (time) => {
			lenisRef.current.raf(time);
			requestAnimationFrame(handleScroll);
		};

		requestAnimationFrame(handleScroll);

		return () => {
			lenisRef.current.destroy();
		};
	}, []);

	const scrollToId = (id) => {
		const element = document.querySelector(id);
		if (element) {
			lenisRef.current.scrollTo(element, {
				duration: 0.8,
				easing: (t) => t,
			});
			window.location.hash = id;
		}
	};

	const scrollToTop = () => {
		lenisRef.current.scrollTo(0, {
			duration: 0.8,
			easing: (t) => t,
		});
		window.location.hash = '#';
	};

	return { scrollToId, scrollToTop };
};

export default useLenisGoto;
