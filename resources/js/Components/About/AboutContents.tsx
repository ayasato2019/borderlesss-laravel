import Title from '../PageTitle';
import { Badge } from "../ui/badge"

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-8">
            <Title title="about" />
            <div className="w-2/3 mx-auto">
                <div className="text-center">
                    <h2 className="text-5xl">Aya Sato</h2>
                    <p className="mt-5 text-muted-foreground font-en">Freelance Web Engineer</p>
                </div>

                <div className='mt-10 w-auto mx-auto'>
                    <h3 className="text-xl font-semibold mb-2 font-en">Skills</h3>
                    <div className="flex flex-wrap gap-2 font-en">
                        <Badge className='bg-blue-800'>HTML</Badge>
                        <Badge className='bg-blue-800'>javascript</Badge>
                        <Badge className='bg-blue-800'>React</Badge>
                        <Badge className='bg-blue-800'>Next.js</Badge>
                        <Badge className='bg-blue-800'>CSS</Badge>
                        <Badge className='bg-blue-800'>TailwindCSS</Badge>
                        <Badge className='bg-blue-800'>WordPress</Badge>
                        <Badge className='bg-blue-800'>PHP</Badge>
                        <Badge className='bg-blue-800'>Astro</Badge>
                        <Badge className='bg-blue-800'>git</Badge>
                    </div>
                </div>

                <div className='mt-10 w-auto mx-auto'>
                    <h3 className="text-xl font-semibold mb-2 font-en">Currently Learning</h3>
                    <div className="flex flex-wrap gap-2 font-en">
                        <Badge className='bg-orange-700'>Laravel</Badge>
                        <Badge className='bg-orange-700'>C</Badge>
                        <Badge className='bg-orange-700'>Unity</Badge>
                    </div>
                </div>

                <p className="mt-10 w-auto mx-auto text-center text-muted-foreground">I am a freelance front-end engineer. Web design is also available on request. Composite photography using Photoshop is also an area of expertise. I can also use Illustratore to create banners and icons.<br />I do POP dancing as a hobby.<br />Follow X if you think you'll hit it off, whether it's a hobby or a job.</p>
                <p className="mt-5 w-auto mx-auto text-center text-muted-foreground">フリーランスのフロントエンドエンジニアです。<br />Webデザインもご相談ください。<br />Photoshopを使った合成写真も得意です。Illustratoreを使ってバナーやアイコンを作ることもできます。趣味でPOPダンスをやっています。<br />趣味でも仕事でも、意気投合しそうならXをフォローしてください。</p>
            </div>
        </div>
    );
}
