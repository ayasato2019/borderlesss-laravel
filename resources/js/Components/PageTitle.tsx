import { useEffect, useRef } from "react";

type PageTitleProps = {
	title: string; // titleは文字列型であることを明示
};

export default function PageTitle({ title }: PageTitleProps) {
	const titleRef = useRef<HTMLHeadingElement>(null)
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const element = entry.target as HTMLElement;
						const text = element.innerHTML;
						let textParts = "";
						text.split("").forEach((value, index) => {
							textParts += `<span style="animation-delay: ${index * 0.2}s;">${value}</span>`;
						});
						element.innerHTML = textParts;
						observer.unobserve(entry.target); // 1回だけ発火させたい場合
					}
				});
			},
			{ threshold: 0.1 } // 表示領域に10%入ったら発火
		);

		if (titleRef.current) {
			observer.observe(titleRef.current);
		}

		return () => observer.disconnect(); // クリーンアップ
	}, []);

	// useEffect(() => {
	// 	const textAnime = document.querySelectorAll(".page-title");
	// 	for (let i = 0; i < textAnime.length; i++) {
	// 		let text = textAnime[i].innerHTML;
	// 		let textParts = "";
	// 		text.split("").forEach(function (value, index) {
	// 			textParts += `<span style="animation-delay: ${index * 0.2}s;">${value}</span>`;
	// 		});
	// 		textAnime[i].innerHTML = textParts;
	// 	}
	// }, []);

	return <h1 ref={titleRef} className='page-title'>{title}</h1>
}

