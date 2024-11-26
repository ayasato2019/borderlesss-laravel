// // import Layout from '../Layouts/GuestLayout';

// const worksData = {
// 	worksWebsite: [
// 		{
// 			id: "1",
// 			title: "Website client A",
// 			image_path: "works-cliantA"
// 		},
// 		{
// 			id: "2",
// 			title: "Website client B",
// 			image_path: "works-cliantB"
// 		}
// 	],
// 	worksApp: [],
// 	worksOther: []
// };

// interface Work {
// 	id: string;
// 	title: string;
// 	image_path: string;
// }

// interface WorksProps {
// 	worksWebsite: Work[];
// 	worksApp: Work[];
// 	worksOther: Work[];
// }

// export default function Works({
// 	worksWebsite = worksData.worksWebsite,
// 	worksApp = worksData.worksApp,
// 	worksOther = worksData.worksOther,
// }: WorksProps) {
// 	return (
// <>
// 		{/* // <Layout> */}
// 			<h1 className="page-title">Works</h1>

// 			<div className="mt-6 w-full overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
// 				<div id="works-slide" className="tab">
// 					{/* Website Tab */}
// 					<label>
// 						<input type="radio" name="works" defaultChecked />
// 						Web site
// 					</label>
// 					<div className="swiper works-wraper">
// 						<ul className="swiper-wrapper">
// 							{worksWebsite.map((work) => (
// 								<li key={work.id} className="swiper-slide">
// 									<a href={`/works/${work.id}`} className="slide-item">
// 										<picture>
// 											<source
// 												srcSet={`${process.env.PUBLIC_URL}/assets/images/${work.image_path}.webp`}
// 												type="image/webp"
// 											/>
// 											<img
// 												src={`${process.env.PUBLIC_URL}/assets/images/${work.image_path}.png`}
// 												alt={`${work.title}のサイトイメージ`}
// 												height="300"
// 												loading="lazy"
// 											/>
// 										</picture>
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 						<div className="swiper-button-prev"></div>
// 						<div className="swiper-button-next"></div>
// 					</div>

// 					{/* App Tab */}
// 					<label>
// 						<input type="radio" name="works" />
// 						App
// 					</label>
// 					<div className="swiper works-wraper">
// 						<ul className="swiper-wrapper">
// 							{worksApp.map((work) => (
// 								<li key={work.id} className="swiper-slide">
// 									<a href={`/works/${work.id}`} className="slide-item">
// 										<picture>
// 											<source
// 												srcSet={`${process.env.PUBLIC_URL}/assets/images/${work.image_path}.webp`}
// 												type="image/webp"
// 											/>
// 											<img
// 												src={`${process.env.PUBLIC_URL}/assets/images/${work.image_path}.png`}
// 												alt={`${work.title}のアプリイメージ`}
// 												width="700"
// 												height="300"
// 												loading="lazy"
// 											/>
// 										</picture>
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 						<div className="swiper-button-prev"></div>
// 						<div className="swiper-button-next"></div>
// 					</div>

// 					{/* Other Tab */}
// 					<label>
// 						<input type="radio" name="works" />
// 						Other
// 					</label>
// 					<div className="swiper works-wraper">
// 						<ul className="swiper-wrapper">
// 							{worksOther.map((work) => (
// 								<li key={work.id} className="swiper-slide">
// 									<a href={`/works/${work.id}`} className="slide-item">
// 										<picture>
// 											<source
// 												srcSet={`${process.env.PUBLIC_URL}/assets/images/${work.image_path}.webp`}
// 												type="image/webp"
// 											/>
// 											<img
// 												src={`${process.env.PUBLIC_URL}/assets/images/${work.image_path}.png`}
// 												alt={`${work.title}のその他イメージ`}
// 												width="700"
// 												height="300"
// 												loading="lazy"
// 											/>
// 										</picture>
// 									</a>
// 								</li>
// 							))}
// 						</ul>
// 						<div className="swiper-button-prev"></div>
// 						<div className="swiper-button-next"></div>
// 					</div>
// 				</div>
// 			</div>
// 		 {/* </Layout> */}
// 		</>
// 	);
// }


import React from 'react';

export default function Service() {
    return (
        <div>
            <h1>Service Page</h1>
            <p>This is the Service page content.</p>
        </div>
    );
}

