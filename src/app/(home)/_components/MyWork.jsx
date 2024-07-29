import Image from 'next/image';
import Link from 'next/link';

import { gsap, useGSAP } from '@/libs/gsap';

const MyWork = () => {
	// useGSAP(() => {
	// 	let sections = gsap.utils.toArray('.card-work');

	// 	gsap.to(sections, {
	// 		xPercent: -100 * (sections.length - 1),
	// 		ease: 'none',
	// 		scrollTrigger: {
	// 			trigger: '#my-work',
	// 			pin: true,
	// 			scrub: 1,
	// 			snap: 1 / (sections.length - 1),
	// 			end: () => '+=' + document.querySelector('#my-work').offsetWidth,
	// 		},
	// 	});
	// });

	const projects = [
		{
			title: 'SaboMall',
			description: 'A technology platform that provides solutions to access wholesale goods for business people.',
			imageUrl: '/images/sabomall.svg',
		},
		{
			title: 'Reswitch',
			description:
				'Reswitch helps people living close to renewable energy project reduced power bills through subsidies!',
			imageUrl: '/images/reswitch.svg',
		},
		{
			title: 'VietNam Railway',
			description:
				'An online service that helps you easily choose and book train tickets quickly and conveniently.',
			imageUrl: '/images/vietnam-railway.svg',
		},
	];
	useGSAP(() => {
		const panels = gsap.utils.toArray('.panel2');
		const content = document.querySelector('#container-project');

		if (!content) return;

		gsap.to(panels, {
			xPercent: -100 * (panels.length - 1),
			ease: 'none',
			scrollTrigger: {
				trigger: '#container-project',
				pin: true,
				scrub: 1,
				snap: 1 / (panels.length - 1),
				end: () => '+=' + content.offsetWidth,
			},
		});
	});

	return (
		<div id="container-project" className="flex w-[300%] bg-primary">
			{projects.map((project, index) => (
				<section className="panel2 flex h-screen flex-col bg-primary px-20  pb-20 pt-[124px]" key={index}>
					<h3 className="mb-10 text-[64px] font-semibold text-tertiary">Selected Works</h3>
					<div className="flex flex-1 gap-x-6 rounded-3xl bg-secondary p-6">
						<div className="max-w-80">
							<div className="text-[32px] font-light text-tertiary">
								{index < 8 ? '0' : ''} {index + 1}
							</div>
							<h4 className="mb-4 inline-block bg-gradient-to-r from-[#FF8709] to-[#F7BDF8] bg-clip-text text-[32px] font-bold text-transparent">
								{project.title}
							</h4>
							<p className="mb-7 text-base font-light leading-6 text-tertiary">{project.description}</p>

							<Link href="/" className="group flex w-fit items-baseline gap-[10px]">
								<span className=" text-xl leading-[30px] group-hover:underline"> View project</span>
								<Image
									src={'/icons/arrow-right.svg'}
									alt="view project"
									height={24}
									width={24}
									className="transition-all duration-300 group-hover:translate-x-3"
								/>
							</Link>
						</div>
						<div className="flex-1">
							<Image
								src={project.imageUrl}
								width={10}
								height={10}
								className="h-full w-full"
								alt="sabomall project"
							/>
						</div>
					</div>
				</section>
			))}
		</div>
	);
	// <section id="my-work" className="panel !w-full h-screen bg-white py-10 px-10 pt-[120px]">
	// 	<h3 className="text-primary font-bold text-5xl leading-[62px] tracking-tighter inline-block mb-2.5">
	// 		My work
	// 	</h3>
	// 	<p className="text-secondary text-2xl leading-8 tracking-tighter">
	// 		Eager to pick up new tech skills and stay up-to-date <br /> with the latest design trends
	// 	</p>
	// 	<div className=" grid grid-cols-4 w-[400%] gap-x-8 mt-5 h-full">
	// 		<div className="p-1 rounded-3xl bg-white bg-opacity-10 card-work">
	// 			<div className="rounded-[22px] bg-gradient-sabo relative p-8 h-full">
	// 				<div className="flex items-center gap-x-5 justify-between">
	// 					<div>
	// 						<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
	// 							SaboMall
	// 						</h6>
	// 						<p className="text-primary text-base leading-5">
	// 							The technology platform providing wholesale supply solutions for business owners!
	// 						</p>
	// 					</div>
	// 					<Link href={'#'}>
	// 						<Image
	// 							className="opacity-40"
	// 							src={'/icons/arrow-right.svg'}
	// 							alt="arrow right"
	// 							width={24}
	// 							height={24}
	// 						/>
	// 					</Link>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div className="p-1 rounded-3xl bg-white bg-opacity-10 card-work">
	// 			<div className="rounded-[22px] bg-gradient-sabo relative p-8  h-full">
	// 				<div className="flex items-center gap-x-5 justify-between">
	// 					<div>
	// 						<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
	// 							SaboMall
	// 						</h6>
	// 						<p className="text-primary text-base leading-5">
	// 							The technology platform providing wholesale supply solutions for business owners!
	// 						</p>
	// 					</div>
	// 					<Link href={'#'}>
	// 						<Image
	// 							className="opacity-40"
	// 							src={'/icons/arrow-right.svg'}
	// 							alt="arrow right"
	// 							width={24}
	// 							height={24}
	// 						/>
	// 					</Link>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div className="p-1 rounded-3xl bg-white bg-opacity-10 card-work">
	// 			<div className="rounded-[22px] bg-gradient-sabo relative p-8 overflow-hidden  h-full">
	// 				<div className="flex items-center gap-x-5 justify-between">
	// 					<div>
	// 						<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
	// 							SaboMall
	// 						</h6>
	// 						<p className="text-primary text-base leading-5">
	// 							The technology platform providing wholesale supply solutions for business owners!
	// 						</p>
	// 					</div>
	// 					<Link href={'#'}>
	// 						<Image
	// 							className="opacity-40"
	// 							src={'/icons/arrow-right.svg'}
	// 							alt="arrow right"
	// 							width={24}
	// 							height={24}
	// 						/>
	// 					</Link>
	// 					<video
	// 						autoPlay
	// 						loop
	// 						muted
	// 						playsInline
	// 						className="w-full h-full object-fill absolute top-0 left-0"
	// 					>
	// 						<source src="/videos/video1.mp4" />
	// 					</video>
	// 				</div>
	// 			</div>
	// 		</div>
	// 		<div className="pr-14">
	// 			<div className="p-1 rounded-3xl bg-white bg-opacity-10 card-work">
	// 				<div className="rounded-[22px] bg-gradient-sabo relative p-8  h-full">
	// 					<div className="flex items-center gap-x-5 justify-between">
	// 						<div>
	// 							<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
	// 								SaboMall
	// 							</h6>
	// 							<p className="text-primary text-base leading-5">
	// 								The technology platform providing wholesale supply solutions for business
	// 								owners!
	// 							</p>
	// 						</div>
	// 						<Link href={'#'}>
	// 							<Image
	// 								className="opacity-40"
	// 								src={'/icons/arrow-right.svg'}
	// 								alt="arrow right"
	// 								width={24}
	// 								height={24}
	// 							/>
	// 						</Link>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section>
};

export default MyWork;
