import githubIcon from '../../images/github-mark.svg'
import twitterIcon from '../../images/x-logo.png';
import zennIcon from '../../images/logo-zenn.svg';

export default function SnsLinks() {

	const links = [
		{
			url: 'https://github.com/ayasato2019',
			icon: githubIcon,
			alt: 'GitHubのロゴ',
		},
		{
			url: 'https://x.com/borderlesss_aya',
			icon: twitterIcon,
			alt: 'X旧Twitterのロゴ',
		},
		{
			url: 'https://zenn.dev/aya_sato',
			icon: zennIcon,
			alt: 'Zennのロゴ',
		},
	];

	return (
		<div className="flex gap-2 p-4 lg:p-0 lg:pr-4 items-center justify-center img:w-full img:h-full img:object-cover">
			{links.map((link, index) => (
				<a
					key={index}
					href={link.url}
					target="_blank"
					rel="noopener noreferrer"
					className="block w-10 h-10 overflow-hidden p-2 lg:p-0 max-w-20 hover:scale-120 transition-all lg:w-4 lg:h-4"
				>
					<img src={link.icon} alt={link.alt} />
				</a>
			))}
		</div>
	)
}