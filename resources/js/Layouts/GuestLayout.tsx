import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <>
            <div className="wrapper max-w-7xl mx-auto relative w-full h-auto">
                <Header />
                <main className="absolute top-0 left-0 block w-full h-auto min-h-[calc(100dvh-100px-2.5rem)] min-w-[calc(100%-32px)] md:min-w-[672px] pt-24 px-4 lg:pt-40 lg:px-0 pb-8 lg:pb-10">
                    <section className="main-view flex flex-col w-full h-auto">
                        {children}
                    </section>
                </main>
                <Footer />
            </div >
        </>
    );
}
