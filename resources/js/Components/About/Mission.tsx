import { Player } from "@lottiefiles/react-lottie-player";
import Animation from "../../../json/Animation-technorogy2.json";

export default function Mission() {

	return (
		<div className="container mx-auto px-4 py-8 flex flex-row items-center justify-center flex-wrap gap-4">
			<div id="canvas-mission" className="w-full md:w-[calc(50%-16px)] h-full">
			<Player
					src={Animation}
					loop
					autoplay
				/>
			</div>
			<section className="w-full md:w-1/2">
				<header className="relative mb-4">
					<h2
						className="relative leading-[48px] after:absolute after:bottom-0 after:left-0 after:text-[rgba(140,147,157,0.21)] after:font-en after:text-5xl after:block after:content-[attr(data-en)] before:absolute before:bottom-[-8px] before:block before:w-20 before:h-2 before:rounded-sm before:bg-amber-500"
						data-en="MISSION">ミッション</h2>
				</header>
				<p className="mt-5 text-muted-foreground">We continue to harness the power of technology to provide solutions to the inconveniences we experience in our daily lives. By addressing each and every issue with sincerity, we will create a future in which society as a whole can lead more convenient and comfortable lives.</p>
				<p className="mt-5">私たちは、テクノロジーの力を活用して、日常生活の中で感じる不便さを解消するソリューションを提供し続けます。一つひとつの課題に真摯に向き合い、社会全体がより便利で快適な生活を送れる未来を創造します。</p>
			</section>
		</div>
	);
}
