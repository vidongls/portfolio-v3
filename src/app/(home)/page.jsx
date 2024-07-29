'use client';

import { ScrollToTopOnRefresh } from '@/components/ScrollToTopOnRefresh/ScrollToTopOnRefresh';
import SkillSection from './_components/SkillSection';
import MainSection from './_components/MainSection';
import CertificateSection from './_components/CertificateSection';
import MyWork from './_components/MyWork';
import { gsap, useGSAP, ScrollTrigger } from '@/libs/gsap';
import { LoadingFullPage } from '@/components/loading-full';

export default function Home() {
	// useGSAP(() => {
	// 	const panels = gsap.utils.toArray('.panel');

	// 	panels.forEach((panel, idx) => {
	// 		ScrollTrigger.create({
	// 			trigger: panel,
	// 			pin: false,
	// 			pinSpacing: false,
	// 			scrub: 1,
	// 			pinType: 'fixed',
	// 			invalidateOnRefresh: true,
	// 			end: () => {
	// 				if (idx === 0) return '+=600';

	// 				if (idx === 1) return '+=500';

	// 				return 'bottom 100%';
	// 			},
	// 		});
	// 	});
	// });

	return (
		<>
			<MainSection />
			<MyWork />
			<SkillSection />
			<CertificateSection />
			<ScrollToTopOnRefresh />
			<LoadingFullPage />
		</>
	);
}
