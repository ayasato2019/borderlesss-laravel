import { useEffect } from 'react';
import { PageProps } from '@/types';
import Fv from '../Components/Home/Fv';
import WorksList from '../Components/Works/WorkList';

import { Head, Link } from '@inertiajs/react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };
    useEffect(() => {
        document.title = 'home';
    }, []);

    return (
        <>
            <Head title="Home" />
            <div className="wrapper relative max-w-7xl mx-auto w-full h-auto min-h-screen">
                <Header />
                <main className="absolute top-0 left-0 w-full h-full min-h-screen">
                    <Fv />
                    <div id='works' className="flex flex-col items-center justify-center flex-wrap min-h-screen">
                        <WorksList />
                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
