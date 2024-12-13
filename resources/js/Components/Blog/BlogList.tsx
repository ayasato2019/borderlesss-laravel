import { useState, useEffect } from 'react';
import Title from '../PageTitle';
import ZenBlog from '../../../json/Zen-blog.json';
import ConvertDate from './ConvertDate';

export type ZennItem = {
    id: number;
    title: string;
    emoji: string;
    path: string;
    published_at: string;
};

export type ZennResponse = {
    articles: ZennItem[];
};

export default function BlogList() {
    const [posts, setPosts] = useState<ZennItem[]>([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/blog');
                const data: ZennResponse = await res.json();
                if (data?.articles) {
                    setPosts(data.articles.slice(0, 10));
                } else {
                    console.error('No articles found');
                }
            } catch (error) {
                if (ZenBlog?.articles) {
                    setPosts(ZenBlog.articles.slice(0, 10));
                } else {
                    console.error('No articles found in ZenBlog');
                }
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Title title="blog" />
            <p className="text-center">ZennにてTechブログ記載しています。</p>
            <div className="container h-auto mx-auto my-9 flex flex-row flex-wrap gap-2">
                {posts.map((post, index) => (
                    <article
                        key={index}
                        className="w-full h-auto md:w-[calc(50%-4px)] "
                    >
                        <a
                            href={`https://zenn.dev${post.path}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="blog-card group border-spacing-0.5 flex flex-row gap-2 items-start w-full h-auto px-8 py-4 bg-slate-200 transition-all ease-in-out focus:outline-none hover:bg-amber-500 focus:bg-amber-500 hover:transition-all hover:ease-in-out focus:translate-y-[-20px] hover:translate-y-[-20px]"
                        >
							<p className='text-2xl'>{post.emoji}</p>
							<div className="flex flex-col gap-2">
                            <h2 className="line-clamp-2 overflow-hidden text-ellipsis text-2xl group-hover:text-primary">{post.title}</h2>
                            <ConvertDate
								convertDate={post.published_at}
								className="group-hover:text-white group-focus:text-white" />
							</div>
                        </a>
                    </article>
                ))}
            </div>
        </>
    );
}
