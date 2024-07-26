import { WhyDesign } from '@/components/icons/WhyDesign';
import anime from 'animejs';
import { useEffect, useRef, useState } from 'react';

const SkillSection = () => {
	const projectCountRef = useRef(null);
	const yearCountRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
						observer.disconnect();
					}
				});
			},
			{ threshold: 0.5 }
		);

		if (projectCountRef.current) {
			observer.observe(projectCountRef.current);
		}

		return () => {
			if (observer && projectCountRef.current) {
				observer.unobserve(projectCountRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (!isVisible) return;
		anime({
			targets: projectCountRef.current,
			innerHTML: [1, 20],
			round: 1,
			easing: 'linear',
			duration: 800,
		});

		anime({
			targets: yearCountRef.current,
			innerHTML: [0, 2.5],
			round: 2,
			easing: 'linear',
			duration: 1000,
		});
	}, [isVisible]);

	return (
		<section
			id="my-skill"
			className="panel w-screen h-screen bg-primary py-20 px-10 text-center flex flex-col items-center justify-center pt-[104px]"
		>
			<h2 className="text-accent-5 absolute left-[-99999px]">Why Design?</h2>
			<WhyDesign />
			<div className="bg-secondary rounded-sm w-full mt-10 xl:mt-20 p-10 flex gap-x-10">
				<div className="w-full">
					<div className="rounded-3xl bg-accent flex flex-col items-center justify-center text-primary mb-10 py-[18px]">
						<span className="font-bold text-5xl leading-[72px]">
							<span ref={projectCountRef}>20</span>+
						</span>
						<p className="text-base leading-6">Projects completed</p>
					</div>
					<div className="rounded-3xl bg-accent-2 flex flex-col items-center justify-center text-primary py-[18px]">
						<span className="font-bold text-5xl leading-[72px]">
							<span ref={yearCountRef}>2.5</span> years
						</span>
						<p className="text-base leading-6">Of experience</p>
					</div>
				</div>
				<div className="bg-accent-4 text-[32px] leading-[48px] text-primary tracking-tighter rounded-3xl flex items-center justify-center text-left px-6">
					UX Design creates something that contributes to a better future. I enjoy contributing to a product
					or service.
				</div>
			</div>
		</section>
	);
};

export default SkillSection;
