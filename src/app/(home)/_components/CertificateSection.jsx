import { skills } from '@/util/constants';
import { cn } from '@/util/utils';
import anime from 'animejs';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const CertificateSection = () => {
	return (
		<section id="certificate-skill" className="!w-full bg-white py-10 px-10">
			<h3 className="text-primary font-bold text-5xl leading-[62px] tracking-tighter">Certificate</h3>
			<ul className="grid grid-cols-3 gap-[50px] mt-10">
				<li>
					<h4 className="text-primary font-medium text-[30px] leading-[42px] tracking-tighter inline-block mb-2.5">
						For businesses
					</h4>
					<p className="text-secondary text-[22px] leading-[30px]">
						I design interfaces that are friendly and valuable for customers and easy to implement for
						engineers.
					</p>
				</li>
				<li>
					<h4 className="text-primary font-medium text-[30px] leading-[42px] tracking-tighter inline-block mb-2.5">
						For startups
					</h4>
					<p className="text-secondary text-[22px] leading-[30px]">
						I help to identify the problem and design an MVP. I will advise on tools for building if you
						don&apos;t have an engineer or development resources.
					</p>
				</li>
				<li>
					<h4 className="text-primary font-medium text-[30px] leading-[42px] tracking-tighter inline-block mb-2.5">
						For businesses
					</h4>
					<p className="text-secondary text-[22px] leading-[30px]">
						I design growth experiments and help your team look at the challenges differently to build a
						better product.
					</p>
				</li>
			</ul>
		</section>
	);
};

export default CertificateSection;
