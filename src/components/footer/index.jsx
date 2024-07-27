import { PersonLogoFooter } from '@/components/icons/PersonLogoFooter';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
	return (
		<footer className="!w-full bg-primary py-10 px-10 rounded-tl-[32px] rounded-tr-[32px]">
			<div className="flex items-center justify-between mb-20 w-full">
				<figure>
					<PersonLogoFooter />
				</figure>
				<ul className="flex items-center gap-6">
					<li>
						<Link href={'#'}>
							<Image alt="Linkedin" src={'icons/linkedin.svg'} height={32} width={32} />
						</Link>
					</li>
					<li>
						<Link href={'#'}>
							<Image alt="Facebook" src={'icons/Facebook.svg'} height={32} width={32} />
						</Link>
					</li>
					<li>
						<Link href={'#'}>
							<Image alt="Behance" src={'icons/Behance.svg'} height={32} width={32} />
						</Link>
					</li>
					<li>
						<Link href={'#'}>
							<Image alt="Dribble" src={'icons/Dribble.svg'} height={32} width={32} />
						</Link>
					</li>
				</ul>
			</div>
			<div>
				<p className="text-[#FFFCE1] text-base font-normal">Get in touch</p>
				<Link href={'mailto:leminhquyen10122000@gmail.com'}>
					<h4 className="font-semibold text-[#FFFCE1] text-lg leading-7">leminhquyen10122000@gmail.com</h4>
				</Link>
			</div>
		</footer>
	);
};