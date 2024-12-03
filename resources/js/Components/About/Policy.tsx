import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../../json/Animation-walking.json";

export default function Policy() {
	return (
		<div className="container mx-auto px-4 py-8 flex flex-row items-center justify-center flex-wrap h-full gap-4">
			<section className="w-full md:w-1/2">
				<header className="relative mb-4">
					<h2
						className="relative leading-[48px] after:absolute after:bottom-0 after:left-0 after:text-[rgba(140,147,157,0.21)] after:font-en after:text-5xl after:block after:content-[attr(data-en)] before:absolute before:bottom-[-8px] before:block before:w-20 before:h-2 before:rounded-sm before:bg-amber-500"
						data-en="POLICY"
					>
						ポリシー
					</h2>
				</header>
				<p className="mt-5">My vision is to create a society in which all people can live in a better environment. In particular, I am passionate about building a world that is more comfortable for children and people with some form of handicap. I listen to the small voices and strive to create an environment where everyone can smile.</p>
				<p className="mt-5">私たちは、すべての人がより良い環境で暮らせる社会の実現を目指します。特に、子どもや何らかのハンディキャップを持つ人々にとって過ごしやすい世界を構築することに情熱を注いでいます。小さな声に耳を傾け、誰もが笑顔でいられる環境作りに尽力します。</p>
			</section>
			<div id="canvas-policy" className="w-full md:w-[calc(50%-16px)] h-full">
				<Player
					src={Animation}
					loop
					autoplay
				/>
			</div>
		</div>
	);
}
