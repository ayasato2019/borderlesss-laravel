import { PageProps } from '@/types';
import Fv from '../Components/Home/Fv';
import WorksList from '../Components/Works/WorkList';
import ServiceList from '../Components/Service/ServiceList';
import BlogList from '../Components/Blog/BlogList';
import Coontact from '../Components/Contact/ContactContents';
import interval from '../../images/bg-home-interval.jpg';
import { Parallax } from "react-parallax";

import { Head, Link } from '@inertiajs/react';
import Header from '../Components/Header';

const image1 = interval;

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const currentYear = new Date().getFullYear();
    const navLinks = [
        { page: "/about/" },
        { page: "/works/" },
        { page: "/service/" },
        { page: "/blog/" },
        { page: "/contact/" },
        { page: "/privacypolicy/" },
    ]

    return (
        <>
            <Head title="Home" />
            <div className="wrapper relative max-w-7xl mx-auto w-full h-auto min-h-screen">
                <Header />
                {/* <main className="absolute top-0 left-0 w-full h-full min-h-screen"> */}
                <main className="flex flex-col gap-20 w-full h-full min-h-screen scroll-snap-type-y mandatory">
                    <Fv />
                    <div id='works' className="snap-start flex flex-col items-center justify-center flex-wrap min-h-screen">
                        <WorksList />
                    </div>
                    <div id='service' className="snap-start contents-fadeIn flex flex-col items-center justify-center flex-wrap min-h-screen">
                        <ServiceList />
                    </div>
                    <div className="interval w-screen mx-[calc(50%-50vw)]">
                    <Parallax bgImage={image1} strength={300}>
                        <div style={{ height: 400 }}>
                        </div>
                    </Parallax>
                    </div>
                    <div id='blog' className="snap-start flex flex-col items-center justify-center flex-wrap min-h-screen">
                        <BlogList />
                    </div>
                    <div id='contact' className="snap-start flex flex-col items-center justify-center flex-wrap min-h-screen">
                        <Coontact />
                    </div>
                </main>
                <footer className="w-screen mx-[calc(50%-50vw)] px-[calc(50vw-50%)] bg-slate-500 text-white py-5">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap justify-between items-center">
                            <h1 className="logo">
                                <Link
                                    className="relative text-white font-en leading-none"
                                    href="/"
                                >
                                    BORDERLESSS
                                </Link>
                            </h1>
                            <nav className="w-full md:w-auto">
                                <ul className="flex flex-wrap justify-center md:justify-end gap-6">
                                    {navLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link
                                                href={link.page}
                                                className="font-en text-sm hover:text-amber-500 transition-colors focus:border-none focus:ring-2 focus:ring-pink-600"
                                            >
                                                {link.page.slice(1, -1).toUpperCase()}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className='mt-5'>
                            <p className="w-full pr-2 text-center text-xs font-en text-slate-300">&copy;{`2019 - ${currentYear} `}<Link href="/dashboard/" className='cursor-default' aria-hidden="true" tabIndex={-1}>BORDERLESSS</Link>. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
