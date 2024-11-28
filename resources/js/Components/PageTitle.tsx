import { useEffect, useRef } from "react";

type PageTitleProps = {
	title: string;
};

export default function PageTitle({ title }: PageTitleProps) {
	const titleRef = useRef<HTMLParagraphElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const element = entry.target as HTMLElement;

						// テキストアニメーションの設定
						const text = element.innerHTML;
						let textParts = "";
						text.split("").forEach((value, index) => {
							textParts += `<span style="animation-delay: ${index * 0.2}s;">${value}</span>`;
						});
						element.innerHTML = textParts;
						observer.unobserve(entry.target); // 1回だけ発火
					}
				});
			},
			{ threshold: 0.1 } // 表示領域に10%入ったら発火
		);

		if (titleRef.current) {
			observer.observe(titleRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<header className="text-center">
			<h1 className="sr-only">{title}</h1>
			<p ref={titleRef} className="page-title">
				{title}
			</p>
		</header>
	);
}
