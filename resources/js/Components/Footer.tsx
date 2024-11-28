export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="fixed bottom-0 right-0 px-4 text-xs opacity-70 mix-blend-difference">
			<p className="w-full pr-2 text-center text-xs font-en text-slate-300">©BORDERLESSS {`2019 - ${currentYear}`}</p>
		</footer>
	)
}