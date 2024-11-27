import { useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from '@inertiajs/react';
import githubIcon from '../../images/github-mark.svg'
import twitterIcon from '../../images/x-logo.png';
import zennIcon from '../../images/logo-zenn.svg';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState)
    setIsJumping(true)
    setTimeout(() => setIsJumping(false), 300)
  }

  const links = [
    {
      url: 'https://github.com/ayasato2019',
      icon: githubIcon,
      alt: 'GitHubのロゴ',
    },
    {
      url: 'https://x.com/borderlesss_aya',
      icon: twitterIcon,
      alt: 'X旧Twitterのロゴ',
    },
    {
      url: 'https://zenn.dev/aya_sato',
      icon: zennIcon,
      alt: 'Zennのロゴ',
    },
  ];

  return (
    <header className="header">
      <div className="relative selection:bg-rose-700 selection:text-amber-500 pl-2 pr-4 py-4 flex justify-between items-center flex-wrap w-full lg:items-start lg:flex-row lg:flex-nowrap lg:justify-between">
        <h1 className="logo px-5">
          <Link
          className='relative text-slate-950 font-en leading-none'
          href="/"
          >BORDERLESSS</Link>
        </h1>

        <motion.button
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-controls="main-navigation"
          id="hamburger-button"
          className="mr-4 w-6 h-6 cursor-pointer lg:hidden"
          onClick={toggleMenu}
          animate={isJumping ? { y: [-5, 0] } : {}}
          transition={{ duration: 0.3 }}
        >
          <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1L61.1 224zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48s-21.5 48-48 48L64 352c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16l416 0c8.8 0 16 7.2 16 16l0 16c0 35.3-28.7 64-64 64L96 480c-35.3 0-64-28.7-64-64l0-16z" />
          </svg>
        </motion.button>

        <nav
          className={`header-nav-wrap ${isMenuOpen ? 'active' : ''}`}
          aria-labelledby="main-navigation"
        >
          <h2 className="sr-only">メインナビゲーション</h2>
          <ul className="w-auto flex flex-col flex-wrap lg:flex-row lg:justify-center lg:items-center gap-4 lg:gap-0 list-[''] mx-auto lg:mx-0" role="menu">
            {["/about/", "/works/", "/service/", "/blog/"].map((link, index) => (
              <li key={index} className="w-auto lg:w-1/5 h-auto">
                <Link href={link} className="header-nav-link">{link.slice(1, -1).toUpperCase()}</Link>
              </li>
            ))}
            <li className="w-auto h-auto lg:w-1/5">
              <Link href="/contact/" className="header-nav-link contact">CONTACT</Link>
            </li>
            <li className="w-full">
              <Link href="/privacy-policy/" className="flex p-4 lg:p-0 text-slate-500 font-en cursor-pointer ease-out break-keep h-full lg:h-auto justify-center lg:justify-start text-xs w-full lg:w-auto lg:absolute lg:top-[-24px] lg:right-28">Privacy Policy</Link>
            </li>
            <li className="flex gap-2 p-4 lg:p-0 lg:pr-4 items-center justify-center  lg:absolute lg:right-2 lg:top-[-24px] img:w-full img:h-full img:object-cover">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-10 h-10 overflow-hidden p-2 lg:p-0 max-w-20 hover:scale-120 transition-all lg:w-4 lg:h-4"
              >
                <img src={link.icon} alt={link.alt} />
              </a>
              ))}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
