import { useEffect, useRef, useState } from 'react';
import Title from '../PageTitle';
import { motion } from 'framer-motion';
import serviseWebImageJpg from '../../../images/service-website.jpg';
import serviseWebImageWebp from '../../../images/service-website.webp';
import serviseFrontendImageJpg from '../../../images/service-frontend.jpg';
import serviseFrontendImageWebp from '../../../images/service-frontend.webp';
import serviseAppImageJpg from '../../../images/service-app.jpg';
import serviseAppImageWebp from '../../../images/service-app.webp';
import serviseWrittingImageJpg from '../../../images/service-writting.jpg';
import serviseWrittingImageWebp from '../../../images/service-writting.webp';

type Service = {
	title: string;
	tool: string;
	text: string;
	imageJpg: string;
	imageWebp: string;
};

export default function ServiceList() {
	const service: Service[] = [
		{
			title: 'WebSite Design',
			tool: 'Figma',
			text: 'Simple but richly animated.',
			imageJpg: serviseWebImageJpg,
			imageWebp: serviseWebImageWebp,
		},
		{
			title: 'FrontEnd',
			tool: 'Visual Studio Code',
			text: 'HTML, CSS, javascript, React, Next.js, PHP, WordPress, Docker, Git, Astro',
			imageJpg: serviseFrontendImageJpg,
			imageWebp: serviseFrontendImageWebp,
		},
		{
			title: 'App Developer',
			tool: 'Visual Studio Code',
			text: 'Laravel, React',
			imageJpg: serviseAppImageJpg,
			imageWebp: serviseAppImageWebp,
		},
		{
			title: 'Writing',
			tool: 'Anytihing',
			text: 'Use the blog at Zen as a sample text.',
			imageJpg: serviseWrittingImageJpg,
			imageWebp: serviseWrittingImageWebp,
		},
	];

	const [activeIndex, setActiveIndex] = useState<number>(0); // 最初のページはインデックス0
	const [scrolling, setScrolling] = useState<boolean>(false); // スクロール中フラグ
	const animTime = 1000; // アニメーションの時間
	const numOfPages = service.length; // ページ数
	const pageRefs = useRef<(HTMLLIElement | null)[]>(service.map(() => null)); // 各ページ要素の参照

	// ページ遷移処理
	const pagination = (newIndex: number) => {
		if (scrolling) return;

		setScrolling(true);
		setActiveIndex(newIndex);

		// ページを非アクティブ化
		if (newIndex > 0) {
			pageRefs.current[newIndex - 1]?.classList.add('inactive');
		}

		// ページをアクティブ化
		pageRefs.current[newIndex]?.classList.remove('inactive');
		pageRefs.current[newIndex]?.classList.add('active');

		// アニメーション完了後にスクロール状態をリセット
		setTimeout(() => {
			setScrolling(false);
		}, animTime);
	};

	// 上方向にスクロール
	const navigateUp = () => {
		if (activeIndex === 0) {
			pagination(numOfPages - 1); // 最初のページに到達したら、最終ページに移動
		} else {
			pagination(activeIndex - 1);
		}
	};

	// 下方向にスクロール
	const navigateDown = () => {
		if (activeIndex === numOfPages - 1) {
			pagination(0); // 最終ページに到達したら、最初のページに戻る
		} else {
			pagination(activeIndex + 1);
		}
	};

	// スクロールイベント
	const handleWheel = (e: WheelEvent) => {
		if (scrolling) return;
		if (e.deltaY < 0) {
			navigateUp(); // 上にスクロール
		} else {
			navigateDown(); // 下にスクロール
		}
	};

	// キーボードイベント
	const handleKeyDown = (e: KeyboardEvent) => {
		if (scrolling) return;
		if (e.key === 'ArrowUp') {
			navigateUp(); // 上キーでスクロール
		} else if (e.key === 'ArrowDown') {
			navigateDown(); // 下キーでスクロール
		}
	};

	useEffect(() => {
		// スクロールとキーボードイベントのリスナーを設定
		document.addEventListener('wheel', handleWheel);
		document.addEventListener('keydown', handleKeyDown);

		return () => {
			// クリーンアップ
			document.removeEventListener('wheel', handleWheel);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [scrolling, activeIndex]);

	const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

	return (
		<>
			<Title title="service" />
			<motion.ul
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				className="skw-pages overflow-hidden relative w-full h-[calc(100dvh-13rem-3rem-40px)]"
			>
				{service.map((item, index) => (
					<li
						key={index}
						ref={(el) => (pageRefs.current[index] = el)} // リファレンスの設定
						className={`skw-page skw-page-${index} ${index === activeIndex ? 'active' : 'inactive'} absolute left-0 top-0 w-full h-full flex flex-row`}
					>
						<div className="skw-page__half overflow-hidden skw-page__half--left w-1/2 left-0">
							<div className="skw-page__skewed overflow-hidden absolute top-0 w-[140%] h-full bg-orange-700">
								<div className="skw-page__content h-full w-full">
									<picture>
										<source srcSet={item.imageWebp} type="image/webp" />
										<img
											src={item.imageJpg}
											alt={`${item.title}のイメージ図`}
											width={700}
											height={400}
											className="drop-shadow-lg w-full h-full object-cover"
											loading="lazy"
										/>
									</picture>
								</div>
							</div>
						</div>
						<div className="skw-page__half overflow-hidden skw-page__half--right w-1/2 left-1/2">
							<div className="skw-page__skewed h-full w-full">
								<div className="skw-page__content p-5 pl-10 h-full flex flex-col gap-2 items-center justify-center w-full text-center">
									<h2 className="font-en text-5xl text-slate-500">{item.title}</h2>
									<p className="font-en text-md text-slate-500">Tool:&nbsp;{item.tool}</p>
									<p className="font-en text-md text-slate-950">{item.text}</p>
								</div>
							</div>
						</div>
					</li>
				))}
			</motion.ul>
		</>
	);
}
