import { useEffect } from 'react';
import { gsap } from 'gsap';

export const ScrollToTopOnRefresh = () => {
	useEffect(() => {
		gsap.to(window, { scrollTo: { y: 0 }, duration: 0 });
	}, []);

	return null;
};
