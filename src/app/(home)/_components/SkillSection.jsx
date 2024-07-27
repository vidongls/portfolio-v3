import { WhyDesign } from '@/components/icons/WhyDesign';
import anime from 'animejs';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { skills } from '@/util/constants';
import { cn } from '@/util/utils';

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
		<section id="my-skill" className="panel !w-full h-screen bg-slate-2 py-10 px-10 pt-[180px] section2">
			<h2 className="text-primary text-[48px] leading-[62px] font-bold inline-block mb-5">
				My skillset and tools
			</h2>
			{skills?.map((skill, index) => {
				return (
					<div key={index} className="mb-5 last-of-type:mb-0">
						<h5 className="text-primary text-base leading-5">{skill.title}:</h5>
						<ul className="flex items-center gap-2.5 flex-wrap mt-3">
							{skill.children.map((child) => (
								<li
									className="py-2 px-4 bg-tertiary rounded-lg flex items-center shadow-sm"
									key={child.imageUrl}
								>
									<Image
										src={child.imageUrl}
										width={30}
										height={30}
										alt="figma"
										className={cn(
											'w-[30px] h-[30px] object-cover rounded-full mr-2',
											child?.class && child?.class
										)}
									/>
									<p className="text-primary text-base leading-[22px] font-medium">{child.label}</p>
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</section>
	);
};

export default SkillSection;
