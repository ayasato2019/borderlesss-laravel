import Title from '../PageTitle';
import ClientAImagePng from '../../../images/works-cliantA.png';
import ClientAImageWebp from '../../../images/works-cliantA.webp';
import ClientBImagePng from '../../../images/works-cliantB.png';
import ClientBImageWebp from '../../../images/works-cliantB.webp';

export default function WorksList() {
	const links = [
		{
			url: 'https://oikawadoboku.co.jp/',
			imagePng: ClientAImagePng,
			imageWebp: ClientAImageWebp,
			alt: "クライアントA様",
		},
		{
			url: 'https://linkplus-corp.jp/',
			imagePng: ClientBImagePng,
			imageWebp: ClientBImageWebp,
			alt: "クライアントB様",
		},
	];

	return (
		<>
		<Title title="works" />
			<ul className='flex items-center justify-start flex-wrap'>
				{links.map((link, index) => (
					<li className='w-full md:w-1/2'>
						<a
							key={index}
							href={link.url}
							className='flex p-4'
						>
							<picture key={index}>
								<source srcSet={link.imageWebp} />
								<img src={link.imagePng}
									alt={link.alt}
									width='700px'
									height='400px'
									loading='lazy'
									className='drop-shadow-lg w-full h-full object-contain'
								/>
							</picture>
						</a>
					</li>
				))}
			</ul>
		</>
	)
}