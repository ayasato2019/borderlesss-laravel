import Header from '../Components/Header';
import Footer from '../Components/Footer';
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
                <Footer />
            </div >
        </>
    );
}
