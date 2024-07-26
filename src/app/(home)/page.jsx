'use client';

import { ScrollToTopOnRefresh } from '@/components/ScrollToTopOnRefresh/ScrollToTopOnRefresh';
import SkillSection from './_components/SkillSection';
import MainSection from './_components/MainSection';
import { gsap, useGSAP, ScrollTrigger } from '@/libs/gsap';
import { LoadingFullPage } from '@/components/loading-full';

export default function Home() {
	useGSAP(() => {
		const panels = gsap.utils.toArray('.panel');

		panels.forEach((panel) => {
			ScrollTrigger.create({
				trigger: panel,
				pin: true,
				pinSpacing: false,
				scrub: 1,
				pinType: 'fixed',
				invalidateOnRefresh: true,
			});
		});
	});

	return (
		<>
			<MainSection />
			<SkillSection />
			<ScrollToTopOnRefresh />
			<LoadingFullPage />
		</>
	);
}

