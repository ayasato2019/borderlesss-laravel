import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../../json/Animation-child.json";
export default function WhyMe() {
	return (
		<div className="container mx-auto px-4 py-8">
			<section className="w-full">
				<header className="relative mb-4">
					<h2
						className="relative text-center leading-[48px] after:absolute after:bottom-0 after:left-1/2 after:translate-x-[-50%] after:text-[rgba(140,147,157,0.21)] after:font-en after:text-5xl after:block after:content-[attr(data-en)] before:absolute before:bottom-[-8px] before:left-1/2 before:translate-x-[-50%] before:block before:w-20 before:h-2 before:rounded-sm before:bg-amber-500"
						data-en="WHY ME">なぜ私がこれをするのか</h2>
				</header>
				<p className="mt-5">because I myself have experienced many challenges and inconveniences that my own children faced through child rearing. I want to pick up each of the ‘difficulties in life’ that I noticed as my children grew up and create an environment where as many children as possible can envision their future with more ease and freedom. That is our driving force.</p>
				<p className="mt-5">それは、私自身が子育てを通して、多くの課題や不便さに直面した経験があるからです。子どもたちが成長する中で気付いた「生きづらさ」を一つひとつ拾い上げ、できる限り多くの子どもたちがもっと楽に、もっと自由に未来を描けるような環境を整えたい。それが私たちの原動力です。</p>
			</section>
			<div className="w-full h-auto mt-4">
				<Player
					src={Animation}
					loop
					autoplay
					style={{
						height: "min(400px, 90vw)",
						width: "auto",
						zIndex: 1,
						pointerEvents: "none",
					  }}
				/>
			</div>
		</div>
	);
}
