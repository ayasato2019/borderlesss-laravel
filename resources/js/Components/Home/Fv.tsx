import { Parallax, Background } from 'react-parallax';
import fvImage from '../../../images/bg-workplace.png';

export default function HomeFv() {
	return (
		<div className="w-full h-full min-w-[320px] min-h-[448.82px] relative">
			{/* <Parallax strength={300}> */}
				<div className="absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center mx-auto h-auto w-[min(560px,90vw)]">
					{/* <Background> */}
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
					{/* </Background> */}
				</div>
				<div className="absolute bottom-2 left-1/2 translate-x-[-50%] w-full px-8 break-keep mix-blend-difference text-center">
					<p className="fv-text">Taking children's problems.</p>
				</div>
			{/* </Parallax> */}
		</div>
	);
}
