import { useEffect } from 'react';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import fvImage from '../../images/bg-workplace.png';
import Header from '../Components/Header';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    useEffect(() => {
		document.title = 'home';
	}, []);
	const currentYear = new Date().getFullYear();

    return (
        <>
            <Head title="Home" />
            <div className="wrapper relative max-w-7xl mx-auto w-full h-auto min-h-screen">
                <Header />
                <main className="absolute top-0 left-0 w-full h-full min-h-screen flex justify-center items-center">
                    <div className="w-full h-full min-w-[320px] md:min-w-[672px] lg:ml-[220px] 2xl:ml-0 min-h-[448.82px]">
                        <div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center mx-auto h-auto w-[min(560px,90vw)] opacity-35">
                            <svg width="0" height="0"
                                viewBox="0 0 762 638"
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-0 left-0 object-contain w-full h-full">
                                <clipPath id="clip01">
                                    <path d="M4 629.2V1.75998L533.76 0C603.573 0 655.2 14.6667 688.64 44C722.667 72.7467 739.68 116.16 739.68 174.24C739.68 232.32 720.32 274.853 681.6 301.84C707.413 315.92 726.48 334.693 738.8 358.16C751.12 381.04 757.28 410.667 757.28 447.04C757.28 506.293 740.267 551.467 706.24 582.56C672.8 613.067 621.173 628.32 551.36 628.32L4 629.2ZM517.04 112.64H144.8V253.44H517.04C570.427 253.44 597.12 229.387 597.12 181.28C597.12 135.52 570.427 112.64 517.04 112.64ZM534.64 366.08H144.8V515.68H534.64C588.027 515.68 614.72 490.453 614.72 440C614.72 390.72 588.027 366.08 534.64 366.08Z" />
                                </clipPath>
                                <image
                                    href={fvImage}
                                    width="100%"
                                    height="100%"
                                    preserveAspectRatio="xMidYMid slice"
                                    clipPath="url(#clip01)"
                                    id="fv-image"
                                    className='fixed'
                                />
                            </svg>
                        </div>
                        <div className="absolute top-1/2 left-1/2 translate-x-[-50%] w-full h-auto px-8 break-keep mix-blend-color-burn dark:mix-blend-difference text-right">
							<p className="text-4xl lg:text-5xl font-en mt-4">Taking children's<br />problems.</p>
						</div>
                    </div>
                </main>
                <footer className="footer">
					<p className="w-full pr-2 text-center text-xs font-en text-slate-300">©BORDERLESSS {`2019 - ${currentYear}`}</p>
				</footer>
            </div>
        </>
    );
}
