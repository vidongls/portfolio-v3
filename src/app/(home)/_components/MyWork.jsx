import Image from 'next/image';
import Link from 'next/link';

const MyWork = () => {
	return (
		<section id="my-work" className="panel !w-full bg-white py-10 px-10 pt-[120px] section2">
			<h3 className="text-primary font-bold text-5xl leading-[62px] tracking-tighter inline-block mb-2.5">
				My work
			</h3>
			<p className="text-secondary text-2xl leading-8 tracking-tighter">
				Eager to pick up new tech skills and stay up-to-date <br /> with the latest design trends
			</p>
			<div class="grid grid-cols-5 gap-x-6 gap-y-5 mt-5">
				<div class="col-span-3 p-1 rounded-3xl bg-white bg-opacity-10 card-work">
					<div className="rounded-[22px] bg-gradient-sabo h-[500px] relative p-8">
						<div className="flex items-center gap-x-5 justify-between">
							<div>
								<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
									SaboMall
								</h6>
								<p className="text-primary text-base leading-5">
									The technology platform providing wholesale supply solutions for business owners!
								</p>
							</div>
							<Link href={'#'}>
								<Image
									className="opacity-40"
									src={'/icons/arrow-right.svg'}
									alt="arrow right"
									width={24}
									height={24}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div class="col-span-2 p-1 rounded-3xl bg-white bg-opacity-10 card-work">
					<div className="rounded-[22px] bg-gradient-sabo h-[500px] relative p-8">
						<div className="flex items-center gap-x-5 justify-between">
							<div>
								<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
									SaboMall
								</h6>
								<p className="text-primary text-base leading-5">
									The technology platform providing wholesale supply solutions for business owners!
								</p>
							</div>
							<Link href={'#'}>
								<Image
									className="opacity-40"
									src={'/icons/arrow-right.svg'}
									alt="arrow right"
									width={24}
									height={24}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div class="col-span-2 p-1 rounded-3xl bg-white bg-opacity-10 card-work">
					<div className="rounded-[22px] bg-gradient-sabo h-[500px] relative p-8">
						<div className="flex items-center gap-x-5 justify-between">
							<div>
								<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
									SaboMall
								</h6>
								<p className="text-primary text-base leading-5">
									The technology platform providing wholesale supply solutions for business owners!
								</p>
							</div>
							<Link href={'#'}>
								<Image
									className="opacity-40"
									src={'/icons/arrow-right.svg'}
									alt="arrow right"
									width={24}
									height={24}
								/>
							</Link>
						</div>
					</div>
				</div>
				<div class="col-span-3 p-1 rounded-3xl bg-white bg-opacity-10 card-work">
					<div className="rounded-[22px] bg-gradient-sabo h-[500px] relative p-8">
						<div className="flex items-center gap-x-5 justify-between">
							<div>
								<h6 className="text-[#FF4000] font-bold text-xl leading-6 tracking-tighter inline-block mb-1.5">
									SaboMall
								</h6>
								<p className="text-primary text-base leading-5">
									The technology platform providing wholesale supply solutions for business owners!
								</p>
							</div>
							<Link href={'#'}>
								<Image
									className="opacity-40"
									src={'/icons/arrow-right.svg'}
									alt="arrow right"
									width={24}
									height={24}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MyWork;
