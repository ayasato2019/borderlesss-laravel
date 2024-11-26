import React, { useEffect } from 'react';
import Header from '../Components/Header';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="wrapper max-w-7xl mx-auto relative w-full h-auto min-h-screen">
                <Header />
                <main className="absolute top-0 left-0 w-full h-full min-h-screen flex justify-center items-center">
                    <section className="main-view w-auto h-auto min-w-[672px] lg:ml-[220px] 2xl:ml-0 min-h-[448.82px]">
                        {children}
                    </section>
                </main>
                <footer className="footer">
                    <p className="w-full pr-2text-center text-xs font-en text-slate-300">©BORDERLESSS {`2019 - ${currensYear}`}</p>
                </footer>
            </div >
        </>
    );
}
