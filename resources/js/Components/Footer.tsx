import { Link } from '@inertiajs/react';

export default function Footer() {
	const currentYear = new Date().getFullYear();
	const navLinks = [
		{ page: "/about/" },
		{ page: "/works/" },
		{ page: "/service/" },
		{ page: "/blog/" },
		{ page: "/contact/" },
		{ page: "/privacy-policy/" },
	]
	return (
		// <footer className="fixed bottom-0 w-full bg-slate-500 text-white py-5">
		// <footer className="w-full bg-slate-500 text-white py-5">
		// 	<div className="container mx-auto px-4">
		// 		<div className="flex flex-wrap justify-between items-center">
		// 			<h1 className="logo">
		// 				<Link
		// 					className="relative text-white font-en leading-none"
		// 					href="/"
		// 				>
		// 					BORDERLESSS
		// 				</Link>
		// 			</h1>
		// 			<nav className="w-full md:w-auto">
		// 				<ul className="flex flex-wrap justify-center md:justify-end gap-6">
		// 					{navLinks.map((link, index) => (
		// 						<li key={index}>
		// 							<Link
		// 								href={link.page}
		// 								className="font-en text-sm hover:text-amber-500 transition-colors"
		// 							>
		// 								{link.page.slice(1, -1).toUpperCase()}
		// 							</Link>
		// 						</li>
		// 					))}
		// 				</ul>
		// 			</nav>
		// 		</div>
		// 		<div className='mt-5'>
		// 			<p className="w-full pr-2 text-center text-xs font-en text-slate-300">&copy;{`2019 - ${currentYear}`}BORDERLESSS. All rights reserved.</p>
		// 		</div>
		// 	</div>
		// </footer>
		<footer className="fixed bottom-0 right-0 px-4 text-xs opacity-70 mix-blend-difference">
			<p className="w-full pr-2 text-center text-xs font-en text-slate-300">&copy;{`2019 - ${currentYear} `}BORDERLESSS. All rights reserved.</p>
		</footer>
	)
}