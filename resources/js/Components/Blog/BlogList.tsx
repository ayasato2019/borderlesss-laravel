import { useState, useEffect } from 'react';
import Title from '../PageTitle';
import ConvertDate from './ConvertDate';
import { motion } from 'framer-motion';

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
                const res = await fetch('/zenn/articles');
                const data: ZennResponse = await res.json();
                setPosts(data.articles.slice(0, 10));
            } catch (error) {
                console.error('データ取得エラー:', error);
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
                    <motion.article
                        key={post.id}
                        className="w-full h-auto md:w-[calc(50%-4px)] "
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.2, // 順番に遅延を追加
                        }}
                    >
                        <a
                            href={`https://zenn.dev/${post.path}`}
                            target="blank"
                            rel="noopener noreferrer"
                            className="blog-card group border-spacing-0.5 flex flex-row gap-2 items-start w-full h-auto px-8 py-4 bg-slate-200 transition-all ease-in-out hover:bg-amber-500 hover:transition-all hover:ease-in-out hover:translate-y-[-20px]"
                        >
							<p className='text-2xl'>{post.emoji}</p>
							<div className="flex flex-col gap-2">
                            <h2 className="line-clamp-2 overflow-hidden text-ellipsis text-2xl group-hover:text-primary">{post.title}</h2>
                            <ConvertDate
								convertDate={post.published_at}
								className="group-hover:text-white" />
							</div>
                        </a>
                    </motion.article>
                ))}
            </div>
        </>
    );
}
