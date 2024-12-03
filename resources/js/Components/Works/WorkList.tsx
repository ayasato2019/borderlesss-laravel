import Title from '../PageTitle';
import ClientAImagePng from '../../../images/works-cliantA.png';
import ClientAImageWebp from '../../../images/works-cliantA.webp';
import ClientBImagePng from '../../../images/works-cliantB.png';
import ClientBImageWebp from '../../../images/works-cliantB.webp';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// type Work = {
// 	id: number;
// 	url: string;
// 	alt: string;
// 	imagePng: string;
// 	imageWebp: string;
// 	comment: string;
// 	hearing: boolean;
// 	design: boolean;
// 	coding: boolean;
// 	domein: boolean;
// 	serverUplode: boolean;
// 	aftercare: boolean;
// };

// Check boxの仕様
type StatusIconProps = {
	status: boolean;
};

const StatusIcon = ({ status }: StatusIconProps) => {
	return status ? (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
			<path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
		</svg>
	) : (
		<svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 448 512">
			<path d="M384 80c8.8 0 16 7.2 16 16l0 320c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16L48 96c0-8.8 7.2-16 16-16l320 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32z" />
		</svg>
	);
};

export default function WorksList() {
	const works = [
		{
			url: 'https://oikawadoboku.co.jp/',
			imagePng: ClientAImagePng,
			imageWebp: ClientAImageWebp,
			alt: 'クライアントA様',
			hearing: true,
			design: true,
			coding: true,
			domein: true,
			serverUplode: true,
			aftercare: true,
			comment:
				'デザインからご依頼いただきました。\nGoogleのMyMap機能を使用し、地元周辺の工事実績を視覚的にわかるように工夫しています。',
		},
		{
			url: 'https://workplus-corp.jp/',
			imagePng: ClientBImagePng,
			imageWebp: ClientBImageWebp,
			alt: 'クライアントB様',
			hearing: false,
			design: false,
			coding: true,
			domein: true,
			serverUplode: true,
			aftercare: true,
			comment:
				'コーディングから参画させていただきました。\n要所でアニメーションを散りばめ、目を引くサイトに仕上がりました。\nデザイナーさんの成果物が綺麗なので、1pxもミスがないように心がけました。',
		},
	];
	// const [works, setWorks] = useState<Work[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [visibleIndexes, setVisibleIndexes] = useState<number[]>([]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = Number(entry.target.getAttribute('data-index'));
						setVisibleIndexes((prev) => [...new Set([...prev, index])]);
					}
				});
			},
			{ threshold: 0.1 }
		);

		const listItems = document.querySelectorAll('.list-item');
		listItems.forEach((item) => observer.observe(item));

		return () => observer.disconnect();
	}, []);

	// useEffect(() => {
    //     // データ取得
    //     fetch(route('api.works.index'))
    //         .then(response => {
    //             if (!response.ok) throw new Error('データ取得に失敗しました。');
    //             return response.json();
    //         })
    //         .then(data => {
    //             setWorks(data); // データを状態に保存
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //             setLoading(false);
    //         });
    // }, []);

	// if (loading) {
    //     return <div>ロード中...</div>; // ローディング中
    // }

	return (
		<>
			<Title title="works" />
			<ul className="flex items-start md:items-center justify-start flex-wrap">
			{works.map((work, index) => (
					<motion.li
						key={index}
						className="list-item w-full md:w-1/2"
						data-index={index}
						initial={{ opacity: 0, y: 50 }}
						animate={visibleIndexes.includes(index) ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.5, delay: index === 0 ? 1 : 1 + index * 0.5 }}
					>
						<a
							className="flex flex-col p-4"
						>
							<picture>
								<source srcSet={work.imageWebp} type="image/webp" />
								<img
									src={work.imagePng}
									alt={work.alt}
									width={700}
									height={400}
									className="drop-shadow-lg w-full h-full object-contain"
									loading="lazy"
								/>
							</picture>
							<div className="flex flex-col lg:flex-row gap-10 justify-center items-center mt-[-180px] px-5 pb-5 pt-52 bg-[rgba(226,232,240,0.7)]">
								<p className="text-balloon">
									{work.comment.split('\n').map((line, index) => (
										<span key={index}>
											{line}
											<br />
										</span>
									))}
								</p>
								<ul className="flex flex-col gap-1 items-start justify-start">
									{['hearing', 'design', 'coding', 'domein', 'serverUplode', 'aftercare'].map((statusKey) => (
										<li key={statusKey} className="flex flex-row justify-center items-center gap-1">
											<StatusIcon status={Boolean(work[statusKey as keyof typeof work])} />
											<p>{statusKey}</p>
										</li>
									))}
								</ul>
							</div>
						</a>
					</motion.li>
				))}
			</ul>
		</>
	);
}
