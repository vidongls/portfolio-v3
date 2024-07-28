import { gsap, useGSAP } from '@/libs/gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const CertificateSection = () => {
	const certificateRef = useRef(null);

	useGSAP(() => {
		const certificateElements = certificateRef.current.querySelectorAll('.certificate');

		gsap.fromTo(
			certificateElements,
			{
				opacity: 0,
				y: -50,
			},
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.5,
				scrollTrigger: {
					trigger: '#certificate',
					start: 'top center',
					end: 'bottom center',
					toggleActions: 'play none none reverse',
				},
			}
		);
	});

	return (
		<section id="certificate" className="!w-full bg-white py-10 px-10" ref={certificateRef}>
			<h3 className="text-primary font-bold text-5xl leading-[62px] tracking-tighter">Certificate</h3>
			<ul className="grid grid-cols-3 gap-4 mt-10">
				<li className="border border-[#D5D5DB] rounded-[20px] p-6 certificate">
					<Image
						src="/images/certi-google.svg"
						alt="certificate of google"
						width={10}
						height={10}
						className="w-full h-[223px] object-contain mb-5"
					/>
					<Link href={'#'} className="group">
						<h5 className="text-primary group-hover:text-secondary transition-colors duration-150 ease-linear text-2xl leading-8 tracking-tighter mb-1">
							Foundations of User Experience (UX) Design
						</h5>
					</Link>
					<p className="text-base leading-[22px] text-secondary">
						Google Coursera
						<br />
						UX Design
						<br />
						2024
					</p>
				</li>
				<li className="border border-[#D5D5DB] rounded-[20px] p-6 certificate">
					<Image
						src="/images/certi-google.svg"
						alt="certificate of google"
						width={10}
						height={10}
						className="w-full h-[223px] object-contain mb-5 invisible"
					/>
					<h5 className="text-primary text-2xl leading-8 tracking-tighter mb-1 invisible">
						Foundations of User Experience (UX) Design
					</h5>
					<p className="text-base leading-[22px] text-secondary invisible">
						Google Coursera
						<br />
						UX Design
						<br />
						2024
					</p>
				</li>
				<li className="border border-[#D5D5DB] rounded-[20px] p-6 certificate">
					<Image
						src="/images/certi-google.svg"
						alt="certificate of google"
						width={10}
						height={10}
						className="w-full h-[223px] object-contain mb-5 invisible"
					/>
					<h5 className="text-primary text-2xl leading-8 tracking-tighter mb-1 invisible">
						Foundations of User Experience (UX) Design
					</h5>
					<p className="text-base leading-[22px] text-secondary invisible">
						Google Coursera
						<br />
						UX Design
						<br />
						2024
					</p>
				</li>
			</ul>
		</section>
	);
};

export default CertificateSection;
